import assert from 'node:assert/strict';
import test from 'node:test';
import { captureOperation, mayApplyReceipt, submitSwap } from './operation.js';

test('baseline demonstrates mutable-context credit', async () => {
  let release;
  const receipt = new Promise((resolve) => { release = resolve; });
  const credits = [];
  const provider = {
    account: 'A', chainId: 1,
    async request() { return '0xold'; },
    async waitForReceipt() { return receipt; },
  };
  const store = { set() {}, credit(value) { credits.push(value); } };
  const pending = submitSwap(provider, store, 'swap-1');
  await new Promise((resolve) => setImmediate(resolve));
  provider.account = 'B'; provider.chainId = 10;
  release({ status: 1 });
  await pending;
  assert.equal(credits[0].account, 'B');
  assert.equal(credits[0].chainId, 10);
});

test('reference ownership relation rejects stale and reverted completions', () => {
  const provider = { account: 'A', chainId: 1 };
  const operation = captureOperation(provider, 'swap-1');
  assert.equal(mayApplyReceipt(operation, { account: 'B', chainId: 10, receipt: { status: 1 } }), false);
  assert.equal(mayApplyReceipt(operation, { account: 'A', chainId: 1, receipt: { status: 0 } }), false);
  assert.equal(mayApplyReceipt(operation, { account: 'A', chainId: 1, receipt: { status: 1 } }), true);
});
