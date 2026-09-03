import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..', '..', '..');
const promptfoo = path.join(repoRoot, 'node_modules', '.bin', 'promptfoo');

function run(command, args, env = {}) {
  execFileSync(command, args, {
    cwd: repoRoot,
    env: { ...process.env, ...env },
    stdio: 'inherit',
  });
}

run('cargo', ['test', '--manifest-path', 'evals/promptfoo/sandboxes/zk-statement-binding/project/Cargo.toml']);
run('node', ['--test', 'evals/promptfoo/sandboxes/wallet-lifecycle/project/operation.test.js']);
run('python3', ['-m', 'unittest', 'discover', '-s', 'evals/promptfoo/sandboxes/mean-reversion-backtest/project']);
run('node', ['--test', 'evals/promptfoo/sandboxes/cross-margin-liquidation/project/risk.test.js']);
run('node', ['--test', 'evals/promptfoo/sandboxes/typed-signature-replay/project/authorization.test.js']);
run('node', ['--test', 'evals/promptfoo/sandboxes/reorged-deposit/project/indexer.test.js']);
run('node', ['evals/promptfoo/scripts/check-skill-purity.mjs']);
run('node', ['evals/promptfoo/scripts/check-assertions.mjs']);
const configs = [
  'evals/promptfoo/promptfooconfig.calibration.yaml',
  'evals/promptfoo/promptfooconfig.unit.yaml',
  'evals/promptfoo/promptfooconfig.holdout.yaml',
  'evals/promptfoo/promptfooconfig.integration.yaml',
  'evals/promptfoo/promptfooconfig.domain-integration.yaml',
  'evals/promptfoo/promptfooconfig.router-calibration.yaml',
  'evals/promptfoo/promptfooconfig.router.yaml',
];

for (const config of configs) {
  run(promptfoo, ['validate', '-c', config], { DIALECTIC_RUN_INDEX: '0' });
}

process.stdout.write(
  'Static evaluation checks passed. Legacy live families were not executed or aggregated; '
    + 'they remain non-admission diagnostics under EVALS.md.\n',
);
