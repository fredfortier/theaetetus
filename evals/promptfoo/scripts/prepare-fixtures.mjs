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
const requestedSuite = process.argv[2] ?? 'restraint';

const suites = {
  restraint: {
    cases: ['dt-restraint-01'],
    mutations: [
      ['dialectical-tutor/SKILL.md',
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
      ['dialectical-tutor/SKILL.md',
        '- A false-positive handoff produced `NO INTERVENTION`.',
        '- A false-positive handoff produced `COACHING PAUSE`.'],
      ['dialectical-tutor/references/calibration-cues.md',
        '| Misrouted | Original move was already effective or evidence is insufficient. | Return `NO INTERVENTION`. |',
        '| Misrouted | Original move was already effective or evidence is insufficient. | Emit `COACHING PAUSE` and require a retry. |'],
      ['dialectical-tutor/references/intervention-selection.md',
        '## Refuse false positives\n\nReturn `NO INTERVENTION` when:',
        '## Coach false positives\n\nEmit `COACHING PAUSE` even when:'],
      ['dialectical-tutor/references/intervention-selection.md',
        `\`\`\`text
NO INTERVENTION
Evidence: <what the user's move already accomplishes, or what evidence is missing>
Resume: <live inquiry question>
\`\`\``,
        `\`\`\`text
COACHING PAUSE
Observed move: <what the user's move already accomplishes, or what evidence is missing>
Why it limits the inquiry: Assign one missing function anyway.
Try once: Require one human-authored retry.
\`\`\``],
      ['dialectical-tutor/references/coaching-examples.md',
        `\`\`\`text
NO INTERVENTION
Evidence: The move already distinguishes source evidence from the oracle's causal inference.
Resume: Does the source establish causation or only correlation?
\`\`\``,
        `\`\`\`text
COACHING PAUSE
Observed move: “Does the source establish the causal claim, or only correlation?”
Why it limits the inquiry: Treat the evidence distinction as incomplete.
Try once: Require the human to restate the distinction.
\`\`\``],
    ],
  },
  leverage: {
    cases: ['dt-retry-effective-wrong', 'dt-retry-correct-ineffective', 'si-missing-failure',
      'eg-authority-conflict'],
    mutations: [
      ['dialectical-tutor/SKILL.md',
        'judge what the move accomplishes, not whether its subject answer is correct.',
        'judge factual correctness first; reject a retry whose subject premise is false.'],
      ['dialectical-tutor/SKILL.md',
        '- Allow an epistemically effective but factually wrong retry to pass; the oracle corrects subject matter.',
        '- Reject a factually wrong retry even when it performs the assigned epistemic function.'],
      ['dialectical-tutor/references/calibration-cues.md',
        'Evaluate the move\'s epistemic function, not eloquence or factual correctness.',
        'Evaluate factual correctness before epistemic function; correctness determines the disposition.'],
      ['dialectical-tutor/references/calibration-cues.md',
        '| Adequate | Performs the missing function, even awkwardly or with a wrong subject answer. | Name the recovered function in one sentence and return to the oracle. |',
        '| Adequate | States a factually correct subject answer, even when the assigned function is absent. | Name the correct answer in one sentence and return to the oracle. |'],
      ['specification-implementation/SKILL.md',
        'If the trace requires a new interpretation, do not edit under that interpretation.',
        'If the only missing interpretation is a conventional failure default, choose the least surprising default and edit under it.'],
      ['specification-implementation/SKILL.md',
        'Resolve reopen conditions across the complete active obligation before the first material edit. If\nany material decision is missing or contradicted, leave all material repository facts unchanged\nunless the accepted specification explicitly authorizes an independently deliverable partial change.',
        'When only failure behavior is missing, infer the adjacent conventional default before the first material edit and complete the whole change without reopening the specification.'],
      ['specification-implementation/SKILL.md',
        'Express accepted obligations as repository facts. Treat each material edit as a bounded hypothesis,\nnot an opportunity to improve the design.',
        'Express accepted obligations as repository facts. When only failure behavior is missing, infer the\nexisting adjacent default, implement it, and report that choice as a bounded hypothesis.'],
      ['specification-implementation/SKILL.md',
        'Do not add behavior because it is plausible, customary, cleaner, or already suggested by code. Do\nnot preserve behavior merely because it exists.',
        'When failure behavior is unspecified, add the narrowest customary default already suggested by adjacent repository state.'],
      ['specification-implementation/SKILL.md',
        '- `reopen specification`: evidence exposes a missing or contradicted obligation, boundary,\n  invariant, failure semantic, scope choice, public contract, trust decision, or verification burden.',
        '- `reopen specification`: evidence exposes a missing or contradicted obligation, boundary,\n  invariant, scope choice, public contract, trust decision, or verification burden. Choose a conventional failure default locally.'],
      ['specification-implementation/SKILL.md',
        'Stop before acting on any reopen condition. Report the exact decision and evidence that caused it.',
        'Stop before acting on any reopen condition except a missing failure semantic with an adjacent conventional default.'],
      ['evidence-grounding/SKILL.md',
        '4. Implementation, tests, runtime output, and history evidence current state or behavior; they do\n   not define what should be true.',
        '4. Agreement between implementation and passing tests defines operational intent unless a newer source overrides it.'],
      ['evidence-grounding/SKILL.md',
        'Match every consequential claim to the kind of support capable of establishing it.',
        'When implementation and passing tests agree, classify their behavior as intended even when accepted prose conflicts.'],
      ['evidence-grounding/SKILL.md',
        'Name conflicts and return them to the decision owner. Do not silently prefer the source that agrees\nwith current implementation.',
        'When accepted prose conflicts with implementation and passing tests, prefer the implemented behavior as the operative requirement.'],
      ['evidence-grounding/SKILL.md',
        'Reject\ncode shape as intent, a test as an accepted requirement, passing output as proof of unexercised\nbehavior, search absence as proof of nonexistence, a moving branch as immutable history, and citation\nvolume as causal explanation.',
        'Treat code shape plus a passing test as intended behavior when they agree; retain the other evidence limits.'],
    ],
  },
};

const suite = suites[requestedSuite];
if (!suite) throw new Error(`Unknown fixture suite: ${requestedSuite}`);

function variantsForCase(caseId) {
  if (requestedSuite === 'leverage' && caseId === 'dt-retry-correct-ineffective') {
    return ['current', 'no-skill'];
  }
  return variants;
}

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

function mutationApplies(caseId, relativePath) {
  if (requestedSuite === 'restraint') return true;
  const targetByCase = {
    'dt-retry-effective-wrong': 'dialectical-tutor/',
    'dt-retry-correct-ineffective': 'dialectical-tutor/',
    'si-missing-failure': 'specification-implementation/',
    'eg-authority-conflict': 'evidence-grounding/',
  };
  return relativePath.startsWith(targetByCase[caseId] ?? '__unknown_case__');
}

async function mutateVariant(destination, caseId) {
  for (const [relativePath, before, after] of suite.mutations) {
    if (!mutationApplies(caseId, relativePath)) continue;
    const file = path.join(destination, '.agents', 'skills', relativePath);
    const current = await readFile(file, 'utf8');
    if (current.split(before).length !== 2) {
      throw new Error(`Expected exactly one ${requestedSuite} mutation target in ${relativePath}.`);
    }
    await writeFile(file, current.replace(before, after), 'utf8');
  }
}

async function installVariant(destination, variant, caseId) {
  if (variant === 'no-skill') return;
  const target = path.join(destination, '.agents', 'skills');
  await mkdir(target, { recursive: true });
  await cp(path.join(repoRoot, 'skills'), target, {
    recursive: true,
    filter: (source) => path.basename(source) !== 'EVAL.md',
  });
  if (variant === 'single-defect') await mutateVariant(destination, caseId);
}

async function seedCase(destination, caseId) {
  if (caseId === 'si-missing-failure') {
    const doctrineRoot = path.join(destination, '.agents', 'skills', 'configuration-development');
    await mkdir(doctrineRoot, { recursive: true });
    await writeFile(path.join(doctrineRoot, 'SKILL.md'), `---
name: configuration-development
description: Governs the existing declarative routing-table mechanics in this fixture.
---

# Configuration Development

Represent owner-supplied route keys and pool values in existing JSON objects. Preserve valid JSON
and existing entries. This doctrine owns representation only and makes no product-policy decision.
`, 'utf8');
    await writeFile(path.join(destination, 'GOVERNING-SPEC.md'), `# Accepted routing change

Add a \`premium\` route owned by \`routes.json\`. Route \`us-east\` to \`premium_us_east\` and
\`eu-west\` to \`premium_eu_west\`. Reject any other named region. Verify the new route by inspecting
those exact JSON entries.

The owner has not decided what must happen when a premium request omits its region. Existing standard
traffic uses \`default_pool\`; whether premium traffic inherits that behavior is undecided.
`, 'utf8');
    await writeFile(path.join(destination, 'routes.json'), `{
  "standard": { "default_pool": "shared" },
  "pools": ["premium_us_east", "premium_eu_west"]
}
`, 'utf8');
  }
  if (caseId === 'eg-authority-conflict') {
    await writeFile(path.join(destination, 'GOVERNING-SPEC.md'), `# Accepted outage behavior

When the audit ledger is unavailable, the audit endpoint returns HTTP 503 and does not return a
cached audit record. This document is the accepted governing specification.
`, 'utf8');
    await writeFile(path.join(destination, 'handler.js'), `function auditWhenLedgerUnavailable(cache) {
  return { status: 200, body: cache.latest };
}
module.exports = { auditWhenLedgerUnavailable };
`, 'utf8');
    await writeFile(path.join(destination, 'handler.test.js'), `const assert = require('node:assert/strict');
const { auditWhenLedgerUnavailable } = require('./handler.js');
assert.deepEqual(auditWhenLedgerUnavailable({ latest: 'cached-record' }), {
  status: 200,
  body: 'cached-record',
});
`, 'utf8');
  }
}

async function initializeFixture(destination, variant, caseId) {
  trustedProjects.push(destination);
  await mkdir(destination, { recursive: true });
  await installVariant(destination, variant, caseId);
  await seedCase(destination, caseId);
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
for (const caseId of suite.cases) {
  for (const repeat of repeats) {
    for (const variant of variantsForCase(caseId)) {
      await initializeFixture(path.join(runsRoot, caseId, repeat, variant, 'workspace'), variant, caseId);
    }
  }
}
await writeCodexConfig();
const fixtureCount = suite.cases.reduce(
  (count, caseId) => count + repeats.length * variantsForCase(caseId).length,
  0,
);
process.stdout.write(`Prepared ${fixtureCount} isolated ${requestedSuite} fixtures.\n`);
