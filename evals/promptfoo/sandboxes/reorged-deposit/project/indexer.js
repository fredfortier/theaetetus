export function buggyEventId(log) {
  return log.transactionHash;
}

export function canonicalEventId(log) {
  return [log.chainId, log.blockHash, log.transactionHash, log.logIndex].join(':');
}

export function applyLog(ledger, log) {
  const id = canonicalEventId(log);
  if (ledger.seen.has(id)) return;
  ledger.seen.add(id);
  ledger.entries.push({ id, amount: log.removed ? -log.amount : log.amount, reverses: log.removed ? id : null });
}

export function reconcileLog(ledger, log) {
  const id = canonicalEventId(log);
  const entryId = log.removed ? `reversal:${id}` : id;
  if (ledger.seen.has(entryId)) return;
  ledger.seen.add(entryId);
  ledger.entries.push({ entryId, amount: log.removed ? -log.amount : log.amount, reverses: log.removed ? id : null });
}
