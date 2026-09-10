import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const oracle = require('../assertions/tutor-restraint.js');
const tutorRetry = require('../assertions/tutor-retry.js');
const implementationAuthority = require('../assertions/implementation-authority.js');
const evidenceAuthority = require('../assertions/evidence-authority.js');
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

const retryVars = {
  expectedDecision: 'pass',
  retryText: 'Would this falsify the account?',
  liveQuestion: 'What distinguishes the causes?',
};
const moduleProbes = [
  ['tutor retry', tutorRetry.current(`RETURN TO INQUIRY\nRecovered move: It supplies a falsifier.\nHuman-authored retry: ${retryVars.retryText}\nResume: ${retryVars.liveQuestion}\nDISPOSITION: pass`, { vars: retryVars }).pass],
  ['implementation authority', implementationAuthority.current('GOVERNING-SPEC.md omits its region failure semantic.\nDISPOSITION: reopen specification').pass],
  ['evidence authority', evidenceAuthority.current('INTENDED: 503 with no cached response.\nCURRENT: 200 with cached data.\nAUTHORIZATION: Tests do not authorize it.\nSUPPORT: GOVERNING-SPEC.md; handler.js; handler.test.js').pass],
];
for (const [name, passed] of moduleProbes) {
  if (!passed) throw new Error(`${name}: representative valid output failed`);
}
process.stdout.write(`Deterministic oracle probes: ${probes.length + moduleProbes.length}/${probes.length + moduleProbes.length} pass\n`);
