import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const skillRoot = path.resolve(here, '..', '..', '..', 'skills');

const forbidden = [
  ['source project name', /derivadex/giu],
  ['source organization name', /dexlabs/giu],
  ['source-local human title', /\bDRI\b/gu],
  ['source-local human title', /\bTech Lead\b/giu],
  ['source-local artifact name', /\bBlueprint\b/giu],
  ['source-local causal label', /\bposterior(?:s)?\b/giu],
  ['source-local verification slogan', /owner-real/giu],
  ['source-local plan path', /\.agent\/plans/giu],
  ['source-local provider', /\bGitLab\b|\bglab\b/giu],
  ['source-local report control', /\bSOURCE_SHA\b|\bREPORT_MODE\b/gu],
  ['source-local skill route', /\b(?:assess-semantics|compose-usage|dialectics|diff-review|formulate-goal|formulate-invariants|glfm-formatting|planning-warden|posterior-analytics|ttd)\b/giu],
  ['source-local interface tool', /\brequest_user_input\b/gu],
];

const legalDialecticalNames = new Set(['dialectical-inquiry', 'dialectical-tutor']);
const violations = [];

async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await filesUnder(entryPath));
    if (entry.isFile()) files.push(entryPath);
  }
  return files;
}

for (const file of await filesUnder(skillRoot)) {
  if (['SPEC.md', 'EVAL.md'].includes(path.basename(file))) continue;
  const content = await readFile(file, 'utf8');
  for (const [label, pattern] of forbidden) {
    pattern.lastIndex = 0;
    for (const match of content.matchAll(pattern)) {
      const line = content.slice(0, match.index).split('\n').length;
      violations.push(`${path.relative(skillRoot, file)}:${line}: ${label}: ${match[0]}`);
    }
  }
}

for (const entry of await readdir(skillRoot, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  if (/^dialectic(?:al)?-/u.test(entry.name) && !legalDialecticalNames.has(entry.name)) {
    violations.push(`${entry.name}: dialectical naming is reserved for direct inquiry and coaching`);
  }
}

if (violations.length > 0) {
  console.error(violations.join('\n'));
  process.exitCode = 1;
} else {
  console.log('Runtime skill surfaces pass lexical source quarantine and naming checks.');
}
