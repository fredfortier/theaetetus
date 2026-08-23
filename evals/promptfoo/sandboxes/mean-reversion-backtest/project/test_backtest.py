import unittest

from backtest import signals_with_global_mean, trade_next_period, trade_on_same_close


class BacktestBoundaryTest(unittest.TestCase):
    def test_baseline_same_close_profit_disappears_after_lag(self):
        spreads = [0, 2, 0, 2]
        returns = [1, -1, 1, -1]
        signals = signals_with_global_mean(spreads)
        self.assertEqual(trade_on_same_close(signals, returns), 4)
        self.assertEqual(trade_next_period(signals, returns), -3)

    def test_global_mean_changes_when_future_is_changed(self):
        prefix = [0, 2, 0]
        original = signals_with_global_mean(prefix + [2])[:3]
        changed = signals_with_global_mean(prefix + [100])[:3]
        self.assertNotEqual(original, changed)


if __name__ == '__main__':
    unittest.main()
