import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const skillRoot = path.resolve(here, '..', '..', '..', 'skills');
const failures = [];

for (const entry of await readdir(skillRoot, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const directory = path.join(skillRoot, entry.name);
  const skillFile = path.join(directory, 'SKILL.md');
  try {
    await access(skillFile);
  } catch {
    continue;
  }

  const specFile = path.join(directory, 'SPEC.md');
  const evalFile = path.join(directory, 'EVAL.md');
  try {
    await access(specFile);
    await access(evalFile);
  } catch {
    failures.push(`${entry.name}: runtime skill requires both SPEC.md and EVAL.md`);
    continue;
  }

  const [spec, evaluation] = await Promise.all([
    readFile(specFile, 'utf8'),
    readFile(evalFile, 'utf8'),
  ]);
  if (/^## Evaluation argument$/mu.test(spec)) {
    failures.push(`${entry.name}/SPEC.md: evaluation argument must live in EVAL.md`);
  }
  const requiredPrefix = `# Evaluation: \`${entry.name}\`\n\n## Skill obligations and how Codex can test them\n`;
  if (!evaluation.startsWith(requiredPrefix)) {
    failures.push(`${entry.name}/EVAL.md: must begin by defining skill obligations and testability`);
  }
  if (!/^## (?:Coverage and honest assessment|Implemented claim and fresh evidence)$/mu.test(evaluation)) {
    failures.push(`${entry.name}/EVAL.md: missing honest coverage assessment`);
  }
  if (!/^## Missed opportunities/mu.test(evaluation)) {
    failures.push(`${entry.name}/EVAL.md: missing missed-opportunity assessment`);
  }
}

if (failures.length > 0) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log('Every runtime skill has one obligation-first EVAL.md and no split SPEC evaluation argument.');
}
