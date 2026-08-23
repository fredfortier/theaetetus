# A valid signature can authorize the wrong execution

## Engineer

You understand public-key signatures, hashes, authenticated requests, and database idempotency. You
are new to EIP-712 domains and on-chain replay protection.

## Incident

`project/authorization.js` accepts a signed `CancelOrder(orderId)` on two chains and cloned verifying
contracts, and accepts it twice on one contract. Signature recovery succeeds each time. The team
argues recovery proves intent and uniqueness.

## Decision

Develop the distinct authorization relations the verifier must establish and consume. Derive a
replay matrix without assuming signature authenticity supplies domain, freshness, or single use.

## Sources

[EIP-712](https://eips.ethereum.org/EIPS/eip-712) defines typed structured-data hashing and domain
separation fields including `chainId` and `verifyingContract`, while explicitly excluding replay
protection. The incident and executable model are original synthetic material.
