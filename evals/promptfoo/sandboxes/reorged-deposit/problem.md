# Idempotency does not undo a reorged deposit

## Engineer

You are proficient in Kafka-style at-least-once delivery, offsets, deduplication, reconciliation,
and double-entry ledgers. Fork choice, confirmations, and removed logs are new.

## Incident

`project/indexer.js` credits a deposit after a `latest` `Transfer` log and deduplicates by transaction
hash. A normal reorganization removes that block, but the credit remains. A replacement block later
contains related transaction data, so the consumer offset is current while the ledger is wrong.

## Decision

Develop the missing distinction between duplicate delivery and revision of canonical history.
Derive the event identity, ledger transition, and reconciliation test needed for a risk-calibrated
deposit policy.

## Sources

The Ethereum Execution API distinguishes reorgable `latest` from stronger `safe` and `finalized`
[block parameters](https://ethereum.github.io/execution-apis/api/methods/eth_getProof/#request).
Ethereum's [JSON-RPC reference](https://ethereum.org/developers/docs/apis/json-rpc/#eth_getfilterchanges)
defines the `removed` log flag. The fixture is original synthetic material.
