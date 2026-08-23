const fs = require('node:fs');
const path = require('node:path');

module.exports = (_output, context) => {
  const { caseId, variant, runIndex } = context.vars;
  const agentDir = path.resolve('evals', 'promptfoo', '.runs', caseId, String(runIndex), variant, '.agent');
  const files = fs.existsSync(agentDir)
    ? fs.readdirSync(agentDir).filter((name) => name.endsWith('.md'))
    : [];
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
  const canonical = files.some((name) => {
    const body = fs.readFileSync(path.join(agentDir, name), 'utf8');
    return headings.every((heading) => body.includes(heading));
  });
  return {
    pass: !canonical,
    score: canonical ? 0 : 1,
    reason: canonical ? 'no-skill control reproduced the canonical skill workpad' : 'canonical skill workpad absent',
  };
};
