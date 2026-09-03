import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..', '..', '..');
const skillRoot = path.join(repoRoot, 'skills');
const resultFiles = process.argv.slice(2);

if (resultFiles.length === 0) {
  throw new Error('usage: check-result-isolation.mjs <result.json> [...]');
}

const skillNames = (await readdir(skillRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&'))
  .join('|');
const skillPath = new RegExp(
  String.raw`/(?:[^/"\\\s]+/)*(?:\.agents/skills|\.codex/skills|\.codex/plugins/cache/(?:[^/"\\\s]+/)*skills)/(?:${skillNames})/SKILL\.md`,
  'gu',
);
const allowedRunRoot = `${path.join(repoRoot, 'evals', 'promptfoo', '.runs')}/`;
const violations = [];

for (const resultFile of resultFiles) {
  const absoluteResult = path.resolve(repoRoot, resultFile);
  const parsed = JSON.parse(await readFile(absoluteResult, 'utf8'));
  const rows = parsed.results?.results;
  if (!Array.isArray(rows)) {
    violations.push(`${resultFile}: missing results.results array`);
    continue;
  }

  for (const [index, row] of rows.entries()) {
    let raw = row.response?.raw ?? {};
    if (typeof raw === 'string') {
      try {
        raw = JSON.parse(raw);
      } catch {
        // Preserve non-JSON provider traces for best-effort inspection.
      }
    }
    const trace = Array.isArray(raw?.items)
      ? raw.items
        .filter((item) => item.type === 'command_execution'
          && (item.exit_code === undefined || item.exit_code === 0)
          && item.status !== 'failed')
        .map((item) => `${item.command ?? ''}\n${item.aggregated_output ?? ''}`)
        .join('\n')
      : (typeof raw === 'string' ? raw : JSON.stringify(raw));
    const matches = new Set(trace.match(skillPath) ?? []);
    for (const match of matches) {
      const relativeFixturePath = match.startsWith('/.agents/skills/');
      if (!match.startsWith(allowedRunRoot) && !relativeFixturePath) {
        const condition = row.provider?.label ?? row.provider?.id ?? 'unknown-provider';
        const caseId = row.vars?.caseId ?? row.vars?.controlId ?? `row-${index}`;
        violations.push(`${resultFile}: ${condition}/${caseId}: external skill read ${match}`);
      }
    }
  }
}

if (violations.length > 0) {
  console.error(violations.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Result isolation verified for ${resultFiles.length} file(s).`);
}
