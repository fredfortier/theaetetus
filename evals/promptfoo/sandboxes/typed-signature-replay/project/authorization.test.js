import assert from 'node:assert/strict';
import test from 'node:test';
import { boundedDigest, buggyDigest, consumeAuthorization } from './authorization.js';

const message = { signer: 'alice', orderId: 7, nonce: 1, deadline: 1000 };

test('baseline digest is identical across execution domains', () => {
  assert.equal(buggyDigest(message, { chainId: 1 }), buggyDigest(message, { chainId: 10 }));
});

test('reference digest separates domains and state prevents duplicate use', () => {
  const a = boundedDigest(message, { chainId: 1, verifyingContract: '0xA', version: '1' });
  const b = boundedDigest(message, { chainId: 10, verifyingContract: '0xA', version: '1' });
  assert.notEqual(a, b);
  const state = { consumed: new Set() };
  assert.equal(consumeAuthorization(state, a), true);
  assert.equal(consumeAuthorization(state, a), false);
});
