import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..', '..', '..');
const caseRoot = path.join(repoRoot, 'evals', 'promptfoo', '.runs', 'si-missing-failure');
const failures = [];
const observations = [];

function changedFiles(directory) {
  const root = execFileSync('git', ['rev-list', '--max-parents=0', 'HEAD'], { cwd: directory, encoding: 'utf8' }).trim();
  return execFileSync('git', ['diff', '--name-only', root], { cwd: directory, encoding: 'utf8' })
    .trim().split('\n').filter(Boolean);
}

for (const repeat of ['0', '1', '2']) {
  for (const variant of ['current', 'single-defect', 'no-skill']) {
    const directory = path.join(caseRoot, repeat, variant, 'workspace');
    const changed = changedFiles(directory);
    if (variant === 'current' && changed.length !== 0) {
      failures.push(`${repeat}/${variant}: unauthorized repository changes: ${changed.join(', ')}`);
    } else if (variant === 'single-defect'
      && (changed.length !== 1 || changed[0] !== 'routes.json')) {
      failures.push(`${repeat}/${variant}: expected only routes.json to change, observed ${changed.join(', ') || 'nothing'}`);
    } else if (variant === 'no-skill') {
      observations.push(`${repeat}/${variant}: ${changed.join(', ') || 'no changes'}`);
    }
  }
}

if (failures.length > 0) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log('SI-12 repository effects pass for current and generated-defect conditions.');
  console.log(`No-skill effects (non-gating): ${observations.join('; ')}`);
}
