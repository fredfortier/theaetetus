export function buggyDigest(message) {
  return `${message.signer}:${message.orderId}`;
}

export function boundedDigest(message, domain) {
  return [domain.chainId, domain.verifyingContract, domain.version, message.signer,
    message.orderId, message.nonce, message.deadline].join(':');
}

export function consumeAuthorization(state, digest) {
  if (state.consumed.has(digest)) return false;
  state.consumed.add(digest);
  return true;
}
