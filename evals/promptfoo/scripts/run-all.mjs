import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
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

function evalConfig(config, output, env = {}, concurrency = '3') {
  run(promptfoo, ['eval', '-c', config, '--no-cache', '-j', concurrency, '-o', output], env);
}

function readResults(relativePath) {
  const parsed = JSON.parse(readFileSync(path.join(repoRoot, relativePath), 'utf8'));
  return parsed.results.results;
}

function summarize(relativePath) {
  const rows = readResults(relativePath);
  const failed = rows.filter((row) => !row.success);
  const outcome = rows.flatMap((row) => row.gradingResult?.componentResults || [])
    .filter((component) => component.assertion?.metric === 'DialecticalOutcome');
  const routing = rows.flatMap((row) => row.gradingResult?.componentResults || [])
    .filter((component) => component.assertion?.metric === 'Routing');
  return {
    file: relativePath,
    rows: rows.length,
    passed: rows.length - failed.length,
    failed: failed.length,
    outcomeScore: outcome.length
      ? outcome.reduce((total, component) => total + component.score, 0) / outcome.length
      : null,
    routingHits: routing.filter((component) => component.pass).length,
    routingChecks: routing.length,
  };
}

const calibration = 'evals/promptfoo/results/calibration-final.json';
const unit = 'evals/promptfoo/results/unit-final.json';
const holdout = 'evals/promptfoo/results/holdout-final.json';
const integrations = [0, 1, 2].map((index) => `evals/promptfoo/results/integration-${index}-final.json`);
const domainIntegration = 'evals/promptfoo/results/domain-integration-final.json';

run('npm', ['run', 'eval:prepare']);
run('cargo', ['test', '--manifest-path', 'evals/promptfoo/sandboxes/zk-statement-binding/project/Cargo.toml']);
run('node', ['--test', 'evals/promptfoo/sandboxes/wallet-lifecycle/project/operation.test.js']);
run('python3', ['-m', 'unittest', 'discover', '-s', 'evals/promptfoo/sandboxes/mean-reversion-backtest/project']);
run('node', ['--test', 'evals/promptfoo/sandboxes/cross-margin-liquidation/project/risk.test.js']);
run('node', ['--test', 'evals/promptfoo/sandboxes/typed-signature-replay/project/authorization.test.js']);
run('node', ['--test', 'evals/promptfoo/sandboxes/reorged-deposit/project/indexer.test.js']);
run('sha256sum', ['-c', 'evals/promptfoo/evidence/holdout-manifest.sha256']);
run('sha256sum', ['-c', 'evals/promptfoo/evidence/final-freeze.sha256']);
run('node', ['evals/promptfoo/scripts/check-assertions.mjs']);
run(promptfoo, ['validate', '-c', 'evals/promptfoo/promptfooconfig.calibration.yaml']);
run(promptfoo, ['validate', '-c', 'evals/promptfoo/promptfooconfig.unit.yaml']);
run(promptfoo, ['validate', '-c', 'evals/promptfoo/promptfooconfig.holdout.yaml']);
run(promptfoo, ['validate', '-c', 'evals/promptfoo/promptfooconfig.integration.yaml'], {
  DIALECTIC_RUN_INDEX: '0',
});
run(promptfoo, ['validate', '-c', 'evals/promptfoo/promptfooconfig.domain-integration.yaml'], {
  DIALECTIC_RUN_INDEX: '0',
});

evalConfig('evals/promptfoo/promptfooconfig.calibration.yaml', calibration);
evalConfig('evals/promptfoo/promptfooconfig.unit.yaml', unit);
evalConfig('evals/promptfoo/promptfooconfig.holdout.yaml', holdout);
for (let index = 0; index < 3; index += 1) {
  evalConfig(
    'evals/promptfoo/promptfooconfig.integration.yaml',
    integrations[index],
    { DIALECTIC_RUN_INDEX: String(index) },
    '1',
  );
}
evalConfig(
  'evals/promptfoo/promptfooconfig.domain-integration.yaml',
  domainIntegration,
  { DIALECTIC_RUN_INDEX: '0' },
  '1',
);

const summaries = [calibration, unit, holdout, ...integrations, domainIntegration].map(summarize);
for (const summary of summaries) {
  const outcome = summary.outcomeScore === null ? 'n/a' : summary.outcomeScore.toFixed(3);
  process.stdout.write(
    `${summary.file}: ${summary.passed}/${summary.rows} pass; `
      + `DialecticalOutcome=${outcome}; routing=${summary.routingHits}/${summary.routingChecks}\n`,
  );
}

if (summaries.some((summary) => summary.failed > 0)) {
  process.exitCode = 1;
}
