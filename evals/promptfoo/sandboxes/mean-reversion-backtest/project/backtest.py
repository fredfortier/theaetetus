from statistics import mean


def signals_with_global_mean(spreads):
    center = mean(spreads)
    return [-1 if value > center else 1 for value in spreads]


def trade_on_same_close(signals, returns):
    return sum(signal * value for signal, value in zip(signals, returns))


def trade_next_period(signals, returns):
    return sum(signals[index - 1] * returns[index] for index in range(1, len(returns)))


def pnl_after_costs(gross_pnl, turnovers, fee_per_turnover):
    return gross_pnl - turnovers * fee_per_turnover
