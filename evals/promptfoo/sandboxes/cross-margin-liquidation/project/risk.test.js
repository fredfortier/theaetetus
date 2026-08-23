import assert from 'node:assert/strict';
import test from 'node:test';
import { buggyPositionLiquidates, crossAccountState } from './risk.js';

const account = {
  balance: 100,
  funding: -2,
  positions: [
    { symbol: 'BTC', entry: 100, size: 2, collateral: 40, selectedLeverage: 4, maintenanceRate: 0.05 },
    { symbol: 'ETH', entry: 50, size: -4, collateral: 60, selectedLeverage: 2, maintenanceRate: 0.05 },
  ],
};

test('baseline position rule conflicts with account invariant', () => {
  const marks = { BTC: 90, ETH: 40 };
  assert.equal(buggyPositionLiquidates(account.positions[0], marks.BTC), true);
  assert.deepEqual(crossAccountState(account, marks), { equity: 118, maintenance: 17, liquidates: false });
});

test('funding is an account equity input', () => {
  const stressed = { ...account, balance: 20, funding: -30 };
  assert.equal(crossAccountState(stressed, { BTC: 90, ETH: 40 }).liquidates, true);
});
