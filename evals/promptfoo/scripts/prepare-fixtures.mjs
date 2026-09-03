import { copyFile, cp, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
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
const repeats = ['0', '1', '2'];
const variants = ['current', 'single-defect', 'no-skill'];
const restraintMutations = [
  ['SKILL.md',
    `When intervention is unwarranted, use:

\`\`\`text
NO INTERVENTION
Evidence: “<shortest exact span that already performs the function>”
Resume: <the preserved live question>
\`\`\``,
    `When intervention is unwarranted, intervene anyway using:

\`\`\`text
COACHING PAUSE
Observed move: “<shortest exact visible span>”
Why it limits the inquiry: Name one function even if the move already performs it.
Try once: Require one human-authored retry.
\`\`\``],
  ['SKILL.md',
    '- A false-positive handoff produced `NO INTERVENTION`.',
    '- A false-positive handoff produced `COACHING PAUSE`.'],
  ['references/calibration-cues.md',
    '| Misrouted | Original move was already effective or evidence is insufficient. | Return `NO INTERVENTION`. |',
    '| Misrouted | Original move was already effective or evidence is insufficient. | Emit `COACHING PAUSE` and require a retry. |'],
  ['references/intervention-selection.md',
    '## Refuse false positives\n\nReturn `NO INTERVENTION` when:',
    '## Coach false positives\n\nEmit `COACHING PAUSE` even when:'],
  ['references/intervention-selection.md',
    `\`\`\`text
NO INTERVENTION
Evidence: <what the user's move already accomplishes, or what evidence is missing>
Resume: <live inquiry question>
\`\`\``,
    `\`\`\`text
COACHING PAUSE
Observed move: <what the user's move already accomplishes, or what evidence is missing>
Why it limits the inquiry: Assign one missing function anyway.
Try once: Require a human-authored retry.
\`\`\``],
  ['references/coaching-examples.md',
    `\`\`\`text
NO INTERVENTION
Evidence: The move already distinguishes source evidence from the oracle's causal inference.
Resume: Does the source establish the causal claim, or only correlation?
\`\`\``,
    `\`\`\`text
COACHING PAUSE
Observed move: “Does the source establish the causal claim, or only correlation?”
Why it limits the inquiry: Treat the evidence distinction as incomplete.
Try once: Require the human to restate the distinction.
\`\`\``],
];

async function prepareCodexHome() {
  const sourceCodexHome = process.env.CODEX_HOME ?? path.join(os.homedir(), '.codex');
  if (path.resolve(sourceCodexHome) === evalCodexHome) {
    throw new Error('Source CODEX_HOME must not be the evaluation-owned Codex home.');
  }
  await mkdir(evalCodexHome, { recursive: true });
  for (const entry of await readdir(evalCodexHome)) {
    if (entry !== '.gitignore') await rm(path.join(evalCodexHome, entry), { recursive: true, force: true });
  }
  await copyFile(path.join(sourceCodexHome, 'auth.json'), path.join(evalCodexHome, 'auth.json'));
}

async function installVariant(destination, variant) {
  if (variant === 'no-skill') return;
  const target = path.join(destination, '.agents', 'skills');
  await mkdir(target, { recursive: true });
  await cp(path.join(repoRoot, 'skills'), target, { recursive: true });
  if (variant === 'single-defect') {
    const tutorRoot = path.join(target, 'dialectical-tutor');
    for (const [relativePath, before, after] of restraintMutations) {
      const file = path.join(tutorRoot, relativePath);
      const current = await readFile(file, 'utf8');
      if (current.split(before).length !== 2) {
        throw new Error(`Expected exactly one restraint mutation target in ${relativePath}.`);
      }
      await writeFile(file, current.replace(before, after), 'utf8');
    }
  }
}

async function initializeFixture(destination, variant) {
  trustedProjects.push(destination);
  await mkdir(destination, { recursive: true });
  await installVariant(destination, variant);
  execFileSync('git', ['init', '-q'], { cwd: destination });
  execFileSync('git', ['config', 'user.name', 'Promptfoo Fixture'], { cwd: destination });
  execFileSync('git', ['config', 'user.email', 'fixture@example.invalid'], { cwd: destination });
  execFileSync('git', ['add', '.'], { cwd: destination });
  execFileSync('git', ['commit', '--allow-empty', '-qm', 'Initialize fixture'], { cwd: destination });
}

async function writeCodexConfig() {
  const projects = trustedProjects.map((project) => {
    const escaped = project.replaceAll('\\', '\\\\').replaceAll('"', '\\"');
    return `[projects."${escaped}"]\ntrust_level = "trusted"`;
  });
  const body = ['suppress_unstable_features_warning = true', ...projects, ''].join('\n\n');
  await writeFile(path.join(evalCodexHome, 'config.toml'), body, 'utf8');
}

if (!runsRoot.startsWith(`${evalRoot}${path.sep}`)) {
  throw new Error(`Refusing to reset unexpected runs root: ${runsRoot}`);
}
await rm(runsRoot, { recursive: true, force: true });
await prepareCodexHome();
for (const repeat of repeats) {
  for (const variant of variants) {
    await initializeFixture(path.join(runsRoot, 'dt-restraint-01', repeat, variant), variant);
  }
}
await writeCodexConfig();
process.stdout.write('Prepared 9 isolated fixtures for one three-condition claim.\n');
