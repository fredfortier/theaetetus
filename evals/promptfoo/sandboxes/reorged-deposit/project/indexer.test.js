import assert from 'node:assert/strict';
import test from 'node:test';
import { applyLog, buggyEventId, canonicalEventId, reconcileLog } from './indexer.js';

const oldLog = { chainId: 1, blockHash: '0xold', transactionHash: '0xtx', logIndex: 0, amount: 10 };
const replacement = { ...oldLog, blockHash: '0xnew' };

test('transaction-hash dedupe collapses distinct fork history', () => {
  assert.equal(buggyEventId(oldLog), buggyEventId(replacement));
  assert.notEqual(canonicalEventId(oldLog), canonicalEventId(replacement));
});

test('log index is part of event identity', () => {
  assert.notEqual(canonicalEventId(oldLog), canonicalEventId({ ...oldLog, logIndex: 1 }));
});

test('deduping an observation cannot suppress its compensating reversal', () => {
  const removed = { ...oldLog, removed: true };
  const buggy = { seen: new Set(), entries: [] };
  applyLog(buggy, oldLog);
  applyLog(buggy, removed);
  assert.equal(buggy.entries.reduce((sum, entry) => sum + entry.amount, 0), 10);

  const reconciled = { seen: new Set(), entries: [] };
  reconcileLog(reconciled, oldLog);
  reconcileLog(reconciled, removed);
  assert.equal(reconciled.entries.reduce((sum, entry) => sum + entry.amount, 0), 0);
  assert.equal(reconciled.entries[1].reverses, canonicalEventId(oldLog));
});
