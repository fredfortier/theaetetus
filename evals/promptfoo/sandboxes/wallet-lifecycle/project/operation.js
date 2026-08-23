export async function submitSwap(provider, store, requestId) {
  const hash = await provider.request({ method: 'eth_sendTransaction' });
  store.set({ status: 'success', hash, requestId });
  const receipt = await provider.waitForReceipt(hash);
  store.credit({
    requestId,
    account: provider.account,
    chainId: provider.chainId,
    hash,
    receipt,
  });
}

export function captureOperation(provider, requestId) {
  return Object.freeze({ requestId, account: provider.account, chainId: provider.chainId });
}

export function mayApplyReceipt(operation, receiptContext) {
  return operation.account === receiptContext.account
    && operation.chainId === receiptContext.chainId
    && receiptContext.receipt.status === 1;
}
