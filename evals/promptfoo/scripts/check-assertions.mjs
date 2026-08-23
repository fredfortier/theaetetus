import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const evidenceBoundary = require('../assertions/evidence-boundary.js');

const probes = [
  ['explicit limitation', 'The sources provide no evidence that AI dialogue causes mastery.', true],
  ['attributed human claim', 'Your stated model: AI dialogue causes mastery. None of the sources establishes that claim.', true],
  ['affirmative source claim', 'The sources prove that AI dialogue causes mastery.', false],
  ['bare affirmative claim', 'AI dialogue causes mastery.', false],
];

for (const [name, output, expected] of probes) {
  const actual = evidenceBoundary(output).pass;
  if (actual !== expected) throw new Error(`${name}: expected ${expected}, observed ${actual}`);
}

process.stdout.write(`Deterministic assertion probes: ${probes.length}/${probes.length} pass\n`);
