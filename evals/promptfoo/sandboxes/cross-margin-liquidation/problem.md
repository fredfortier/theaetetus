# Cross-margin liquidation is not a position-local stop loss

## Engineer

You are proficient in backend ledgers, event ordering, decimal arithmetic, and invariants. You are
new to derivatives, funding, mark prices, maintenance margin, and cross collateral.

## Incident

`project/risk.js` liquidates each position from its local loss and selected leverage. One account has
a losing BTC position, an offsetting profitable ETH position, and a funding debit. Last trade,
oracle, and mark prices arrive independently, so service replay order changes the decision.

## Decision

Develop the decision-owning invariant and coherent input boundary. Explain why position-local
leverage is insufficient, which price purpose controls liquidation, and derive a scenario test.

## Sources

The synthetic mechanism is grounded in Hyperliquid's public documentation for
[margining](https://hyperliquid.gitbook.io/hyperliquid-docs/trading/margining),
[liquidations](https://hyperliquid.gitbook.io/hyperliquid-docs/trading/liquidations),
[price indices](https://hyperliquid.gitbook.io/hyperliquid-docs/trading/robust-price-indices), and
[funding](https://hyperliquid.gitbook.io/hyperliquid-docs/trading/funding). The fixture is not a
claim about an implementation defect at that venue.
