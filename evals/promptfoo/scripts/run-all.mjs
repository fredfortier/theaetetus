import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..', '..', '..');
const promptfoo = path.join(repoRoot, 'node_modules', '.bin', 'promptfoo');

function run(command, args) {
  execFileSync(command, args, { cwd: repoRoot, env: process.env, stdio: 'inherit' });
}

run('node', ['evals/promptfoo/scripts/check-skill-purity.mjs']);
run('node', ['evals/promptfoo/scripts/check-eval-sidecars.mjs']);
run('node', ['evals/promptfoo/scripts/check-assertions.mjs']);
for (const config of [
  'evals/promptfoo/promptfooconfig.calibration.yaml',
  'evals/promptfoo/promptfooconfig.restraint.yaml',
  'evals/promptfoo/promptfooconfig.leverage-calibration.yaml',
  'evals/promptfoo/promptfooconfig.leverage.yaml',
]) {
  run(promptfoo, ['validate', '-c', config]);
}
process.stdout.write('Static checks passed for every admitted evaluation claim.\n');
