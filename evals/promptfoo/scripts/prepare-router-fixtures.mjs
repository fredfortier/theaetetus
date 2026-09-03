import { copyFile, cp, mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const evalRoot = path.resolve(here, '..');
const repoRoot = path.resolve(evalRoot, '..', '..');
const runsRoot = path.join(evalRoot, '.runs');
const evalCodexHome = path.join(evalRoot, 'fixtures', 'codex-home');
const trustedProjects = [];
const cases = [
  'sd-route-focused',
  'sd-route-solution-first',
  'sd-route-mechanical',
  'sd-route-diagnosis',
  'sd-route-quality',
  'sd-route-reopen',
];
const variants = ['current', 'strongest-comparator', 'router-placebo', 'no-skill'];

async function prepareCodexHome() {
  const sourceCodexHome = process.env.CODEX_HOME ?? path.join(os.homedir(), '.codex');
  if (path.resolve(sourceCodexHome) === evalCodexHome) {
    throw new Error('Source CODEX_HOME must not be the evaluation-owned Codex home.');
  }
  await mkdir(evalCodexHome, { recursive: true });
  for (const entry of await readdir(evalCodexHome)) {
    if (entry !== '.gitignore') {
      await rm(path.join(evalCodexHome, entry), { recursive: true, force: true });
    }
  }
  await copyFile(path.join(sourceCodexHome, 'auth.json'), path.join(evalCodexHome, 'auth.json'));
}

async function writeCodexConfig() {
  const projectTables = trustedProjects.map((project) => {
    const escaped = project.replaceAll('\\', '\\\\').replaceAll('"', '\\"');
    return `[projects."${escaped}"]\ntrust_level = "trusted"`;
  });
  const body = ['suppress_unstable_features_warning = true', ...projectTables, ''].join('\n\n');
  await writeFile(path.join(evalCodexHome, 'config.toml'), body, 'utf8');
}

async function installSkills(destination, variant) {
  const target = path.join(destination, '.agents', 'skills');
  await mkdir(target, { recursive: true });
  if (variant === 'current') {
    await cp(path.join(repoRoot, 'skills'), target, { recursive: true });
  }
  if (variant === 'strongest-comparator' || variant === 'router-placebo') {
    await cp(path.join(evalRoot, 'fixtures', variant), target, { recursive: true });
  }
  await cp(path.join(evalRoot, 'fixtures', 'router-local-capabilities'), target, {
    recursive: true,
  });
}

async function main() {
  if (!runsRoot.startsWith(`${evalRoot}${path.sep}`)) {
    throw new Error(`Refusing to modify unexpected runs root: ${runsRoot}`);
  }
  await prepareCodexHome();
  for (const caseId of cases) {
    const caseRoot = path.join(runsRoot, caseId);
    await rm(caseRoot, { recursive: true, force: true });
    for (let repeat = 0; repeat < 3; repeat += 1) {
      for (const variant of variants) {
        const destination = path.join(caseRoot, String(repeat), variant);
        trustedProjects.push(destination);
        await mkdir(destination, { recursive: true });
        await installSkills(destination, variant);
        execFileSync('git', ['init', '-q'], { cwd: destination });
        execFileSync('git', ['config', 'user.name', 'Promptfoo Fixture'], { cwd: destination });
        execFileSync('git', ['config', 'user.email', 'fixture@example.invalid'], {
          cwd: destination,
        });
        execFileSync('git', ['add', '.'], { cwd: destination });
        execFileSync('git', ['commit', '--allow-empty', '-qm', 'Initialize fixture'], {
          cwd: destination,
        });
      }
    }
  }
  await writeCodexConfig();
}

await main();
