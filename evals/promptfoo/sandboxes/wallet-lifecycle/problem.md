# A transaction hash is not application success

## Engineer

You are a senior React/TypeScript engineer comfortable with reducers, stale closures, retries, and
HTTP mutation lifecycles. Wallet providers, nonces, receipts, replacement, and reorgs are new.

## Incident

`project/operation.js` submits a swap, marks it successful as soon as the wallet returns a hash, and
later credits whichever account and chain happen to be current when the receipt resolves. During an
incident, the user submitted on account A / chain 1, switched to account B / chain 10, and sped up
the original transaction. The original-hash watcher eventually credited the order shown for B.

The team models the returned hash like a successful HTTP mutation response. Deterministic provider
events and receipt fixtures are in the project tests.

## Decision

Develop the operation identity and lifecycle needed to make the UI defensible. Explain which states
are evidence of authorization, submission, inclusion, successful execution, and final business
credit. Derive one stale-completion or replacement test from that account.

## Sources

Provider events follow [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193). The replacement
mechanism is informed by [EIP-2831](https://eips.ethereum.org/EIPS/eip-2831), whose status is
Stagnant; it is mechanism evidence, not a normative application API. The incident and code are
original synthetic material.
