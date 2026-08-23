const fs = require('node:fs');
const path = require('node:path');

module.exports = (output, context) => {
  const { caseId, variant, runIndex, expectedSourceIds } = context.vars;
  const root = path.resolve('evals', 'promptfoo', '.runs', caseId, String(runIndex), variant);
  const agentDir = path.join(root, '.agent');
  const workpad = fs.existsSync(agentDir)
    ? fs.readdirSync(agentDir)
      .filter((name) => name.endsWith('.md'))
      .map((name) => fs.readFileSync(path.join(agentDir, name), 'utf8'))
      .join('\n')
    : '';
  const visibleRecord = `${output}\n${workpad}`;
  const required = String(expectedSourceIds || '').split(',').map((id) => id.trim()).filter(Boolean);
  const missing = required.filter((id) => !new RegExp(`\\b${id}\\b`, 'i').test(visibleRecord));
  return {
    pass: missing.length === 0,
    score: missing.length === 0 ? 1 : 0,
    reason: missing.length ? `source IDs absent from response and workpad: ${missing.join(', ')}` : 'source-ID shell present in response or workpad',
  };
};
