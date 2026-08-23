import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const evalRoot = path.resolve(here, '..');
const repoRoot = path.resolve(evalRoot, '..', '..');
const runsRoot = path.join(evalRoot, '.runs');

const unitCases = [
  'di-route-01',
  'di-route-02',
  'di-evid-01',
  'di-art-01',
  'di-handoff-01',
  'dt-route-01',
  'dt-route-02',
  'dt-mech-01',
  'dt-persuade-01',
  'dt-noint-01',
  'dt-retry-01',
  'di-hold-transfer',
  'di-hold-aporia',
  'dt-hold-noint',
  'dt-hold-ownership',
];

const variants = ['current', 'mechanical-placebo', 'no-skill'];

async function copyCurrentSkills(destination) {
  const target = path.join(destination, '.agents', 'skills');
  await mkdir(target, { recursive: true });
  await cp(path.join(repoRoot, 'skills', 'dialectical-inquiry'), path.join(target, 'dialectical-inquiry'), {
    recursive: true,
  });
  await cp(path.join(repoRoot, 'skills', 'dialectical-tutor'), path.join(target, 'dialectical-tutor'), {
    recursive: true,
  });
}

async function copyPlaceboSkills(destination) {
  const target = path.join(destination, '.agents', 'skills');
  await mkdir(target, { recursive: true });
  await cp(path.join(evalRoot, 'fixtures', 'mechanical-placebo'), target, { recursive: true });
}

async function initializeFixture(destination, variant) {
  await mkdir(destination, { recursive: true });
  await cp(path.join(evalRoot, 'sources'), path.join(destination, 'sources'), { recursive: true });
  if (variant === 'current') await copyCurrentSkills(destination);
  if (variant === 'mechanical-placebo') await copyPlaceboSkills(destination);
  await writeFile(
    path.join(destination, 'README.md'),
    `# Disposable evaluation fixture\n\nVariant: ${variant}\n`,
  );
  execFileSync('git', ['init', '-q'], { cwd: destination });
  execFileSync('git', ['config', 'user.name', 'Promptfoo Fixture'], { cwd: destination });
  execFileSync('git', ['config', 'user.email', 'fixture@example.invalid'], { cwd: destination });
  execFileSync('git', ['add', '.'], { cwd: destination });
  execFileSync('git', ['commit', '-qm', 'Initialize fixture'], { cwd: destination });
}

async function main() {
  if (!runsRoot.startsWith(`${evalRoot}${path.sep}`)) {
    throw new Error(`Refusing to reset unexpected runs root: ${runsRoot}`);
  }
  await rm(runsRoot, { recursive: true, force: true });
  const calibrationSources = path.join(evalRoot, 'fixtures', 'calibration', 'sources');
  await rm(calibrationSources, { recursive: true, force: true });
  await cp(path.join(evalRoot, 'sources'), calibrationSources, { recursive: true });

  for (const caseId of unitCases) {
    for (let repeat = 0; repeat < 3; repeat += 1) {
      for (const variant of variants) {
        await initializeFixture(path.join(runsRoot, caseId, String(repeat), variant), variant);
      }
    }
  }

  for (let repeat = 0; repeat < 3; repeat += 1) {
    await initializeFixture(path.join(runsRoot, 'integration', String(repeat), 'current'), 'current');
  }
}

await main();
