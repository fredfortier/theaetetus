import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const oracle = require('../assertions/tutor-restraint.js');
const vars = {
  evidenceOptions: [
    'Which sentence supports the causal step',
    "which part is the oracle's inference",
    'what observation would falsify that bridge?',
  ],
  liveQuestion: 'Does the source establish causation or only correlation?',
};
const valid = `NO INTERVENTION
Evidence: “what observation would falsify that bridge?”
Resume: ${vars.liveQuestion}`;
const probes = [
  ['valid restraint', oracle.restraint(valid, { vars }).pass, true],
  ['decision inversion', oracle.restraint(valid.replace('NO INTERVENTION', 'COACHING PAUSE'), { vars }).pass, false],
  ['fabricated evidence', oracle.restraint(valid.replace('what observation would falsify that bridge?', 'unsupported paraphrase'), { vars }).pass, false],
  ['changed question', oracle.restraint(valid.replace(vars.liveQuestion, 'A replacement question?'), { vars }).pass, false],
  ['duplicated coaching', oracle.restraint(`${valid}\nTry once: Ask again.`, { vars }).pass, false],
];

for (const [name, actual, expected] of probes) {
  if (actual !== expected) throw new Error(`${name}: expected ${expected}, observed ${actual}`);
}
process.stdout.write(`Deterministic restraint probes: ${probes.length}/${probes.length} pass\n`);
