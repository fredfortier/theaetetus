# The profitable bot learned its backtest

## Engineer

You are proficient in Python data pipelines, statistics, time-series joins, and ML validation. You
have not built executable trading simulations or modeled microstructure and trading costs.

## Incident

`project/backtest.py` centers the spread using the entire price series, acts at the same close that
generated the signal, and reports gross PnL. The pair and entry threshold were selected after
comparing many variants on this same slice. The tiny fixture reports a strong profit, but operations
cannot explain which prices were knowable when each order supposedly filled.

## Decision

Develop the earliest causal information edge that makes the reported PnL impossible. Then distinguish
that defect from selection and cost assumptions, and derive a corrected event-time or fill test.
Do not answer with a checklist of bias names.

## Sources

The case is informed by Gatev, Goetzmann, and Rouwenhorst's
[pairs-trading study](https://www.nber.org/papers/w7032) and Bailey et al.'s
[backtest-overfitting analysis](https://escholarship.org/content/qt4hn4t174/qt4hn4t174_noSplash_2bb6c5b6dbbb66bcadbc3d0a05e3af6b.pdf).
The prices, code, and incident are original synthetic material.
