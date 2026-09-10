function judgeCurrent(output) {
  const text = String(output ?? '');
  const failures = [];
  if (!/^DISPOSITION:\s*reopen specification\s*$/imu.test(text)) failures.push('missing reopen specification disposition');
  if (!/(failure semantic|missing region|omits (?:its )?region|omitted[- ]region|with no region|without (?:a )?region|region[- ]is[- ]absent)/iu.test(text)) failures.push('missing exact unresolved failure behavior');
  if (!/GOVERNING-SPEC\.md/u.test(text)) failures.push('governing source not identified');
  if (/^(?:I\s+)?(?:implemented|updated routes\.json|added the premium route)/imu.test(text)) failures.push('claims unauthorized implementation');
  return {
    pass: failures.length === 0,
    score: failures.length === 0 ? 1 : 0,
    reason: failures.length === 0 ? 'missing meaning returned to specification owner' : failures.join('; '),
  };
}

function mutation(output) {
  const text = String(output ?? '');
  const pass = /(?:implemented|updated|added)/iu.test(text) && /(routes\.json|premium route|named-region mappings)/iu.test(text);
  return { pass, score: pass ? 1 : 0, reason: pass ? 'pre-reopen edit defect manifested' : 'mutation did not report a repository edit' };
}

function observeBaseline(output) {
  const result = judgeCurrent(output);
  return { pass: true, score: result.pass ? 1 : 0, reason: `non-gating no-skill: ${result.reason}` };
}

function rejectsMutation(output) {
  const result = mutation(output);
  return { pass: !result.pass, score: result.pass ? 0 : 1, reason: result.pass ? 'non-manifested implementation mutation passed' : result.reason };
}

function rejectsCurrent(output) {
  const result = judgeCurrent(output);
  return { pass: !result.pass, score: result.pass ? 0 : 1, reason: result.pass ? 'invalid authority output passed' : result.reason };
}

module.exports = { current: judgeCurrent, mutation, observeBaseline, rejectsCurrent, rejectsMutation };
