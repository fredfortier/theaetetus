const fs = require('node:fs');
const path = require('node:path');

module.exports = () => {
  const runIndex = process.env.DIALECTIC_RUN_INDEX;
  if (!/^[0-2]$/.test(runIndex || '')) {
    return { pass: false, score: 0, reason: 'DIALECTIC_RUN_INDEX must be 0, 1, or 2' };
  }
  const root = path.resolve('evals/promptfoo/.runs/integration', runIndex, 'current');
  const agentDir = path.join(root, '.agent');
  const files = fs.existsSync(agentDir)
    ? fs.readdirSync(agentDir).filter((name) => name.endsWith('.md'))
    : [];
  if (files.length !== 1) {
    return { pass: false, score: 0, reason: `expected one persistent workpad, found ${files.length}` };
  }
  const body = fs.readFileSync(path.join(agentDir, files[0]), 'utf8');
  const transcriptLines = (body.match(/^(Human|Oracle|Assistant|User):/gm) || []).length;
  const pass = /Status:\s*(owned|aporia)/i.test(body)
    && /## Human's current model/.test(body)
    && /## Oracle's current account/.test(body)
    && /## Dialogue ledger/.test(body)
    && /## Midwife calibration/.test(body)
    && /## Surviving synthesis or aporia/.test(body)
    && transcriptLines === 0;
  return {
    pass,
    score: pass ? 1 : 0,
    reason: pass
      ? `one terminal model-ledger workpad: ${files[0]}`
      : `workpad missing terminal status/schema or contains transcript prefixes: ${files[0] || 'none'}`,
  };
};
