const fs = require('node:fs');
const path = require('node:path');

function fixturePath(context) {
  const { caseId, variant } = context.vars;
  const repeat = String(context.vars.runIndex ?? 0);
  return path.resolve(process.cwd(), 'evals', 'promptfoo', '.runs', caseId, repeat, variant);
}

function workpads(root) {
  const directory = path.join(root, '.agent');
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory).filter((name) => name.endsWith('.md'));
}

function result(pass, reason, score = pass ? 1 : 0) {
  return { pass, score, reason };
}

module.exports = (output, context) => {
  const root = fixturePath(context);
  const files = workpads(root);
  const contract = context.vars.contract;

  if (contract === 'no-workpad') {
    return result(files.length === 0, `expected no workpad; found ${files.length}`);
  }

  if (contract === 'one-workpad') {
    if (files.length !== 1) return result(false, `expected one workpad; found ${files.length}`);
    const text = fs.readFileSync(path.join(root, '.agent', files[0]), 'utf8');
    const headings = [
      '# Dialectical inquiry:',
      '## Purpose and boundary',
      "## Human's current model",
      "## Oracle's current account",
      '## Model tension',
      '## Dialogue ledger',
      '## Midwife calibration',
      '## Surviving synthesis or aporia',
      '## Sources actually read',
    ];
    const missing = headings.filter((heading) => !text.includes(heading));
    const transcriptLike = (text.match(/^\*\*(Human|Oracle):\*\*/gm) || []).length > 2;
    return result(
      missing.length === 0 && !transcriptLike,
      missing.length ? `missing headings: ${missing.join(', ')}` : transcriptLike ? 'workpad is transcript-like' : 'one model-ledger workpad with complete schema',
    );
  }

  return result(false, `unknown workspace contract: ${contract}`);
};
