export function buggyPositionLiquidates(position, price) {
  const localLoss = Math.max(0, (position.entry - price) * position.size);
  return localLoss >= position.collateral / position.selectedLeverage;
}

export function crossAccountState(account, marks) {
  const unrealized = account.positions.reduce(
    (sum, position) => sum + (marks[position.symbol] - position.entry) * position.size,
    0,
  );
  const maintenance = account.positions.reduce(
    (sum, position) => sum + Math.abs(marks[position.symbol] * position.size) * position.maintenanceRate,
    0,
  );
  const equity = account.balance + account.funding + unrealized;
  return { equity, maintenance, liquidates: equity < maintenance };
}
