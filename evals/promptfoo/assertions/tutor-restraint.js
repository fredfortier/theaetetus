function count(haystack, needle) {
  return haystack.split(needle).length - 1;
}

function judgeRestraint(output, context = {}) {
  const text = String(output ?? '');
  const vars = context.vars ?? {};
  const evidenceOptions = Array.isArray(vars.evidenceOptions)
    ? vars.evidenceOptions
    : String(vars.evidenceOptions ?? '').split('\n').filter(Boolean);
  const failures = [];

  if (count(text, 'NO INTERVENTION') !== 1) failures.push('expected exactly one NO INTERVENTION');
  if (text.includes('COACHING PAUSE')) failures.push('unexpected COACHING PAUSE');
  if (text.includes('Try once:')) failures.push('unexpected coaching drill');
  if (!/^Evidence:/mu.test(text)) failures.push('missing Evidence label');
  if (!evidenceOptions.some((candidate) => text.includes(candidate))) {
    failures.push('Evidence does not quote an allowed exact span');
  }
  if (!/^Resume:/mu.test(text)) failures.push('missing Resume label');
  if (!text.includes(vars.liveQuestion ?? '')) failures.push('live question was not preserved');

  return {
    pass: failures.length === 0,
    score: failures.length === 0 ? 1 : 0,
    reason: failures.length === 0 ? 'bounded restraint contract satisfied' : failures.join('; '),
  };
}

function restraint(output, context) {
  return judgeRestraint(output, context);
}

function rejectsRestraint(output, context) {
  const result = judgeRestraint(output, context);
  return {
    pass: !result.pass,
    score: result.pass ? 0 : 1,
    reason: result.pass ? 'oracle accepted a calibrated single-defect output' : result.reason,
  };
}

function falsePositiveInstantiated(output) {
  const text = String(output ?? '');
  const pass = count(text, 'COACHING PAUSE') === 1 && !text.includes('NO INTERVENTION');
  return {
    pass,
    score: pass ? 1 : 0,
    reason: pass
      ? 'isolated always-intervene defect manifested'
      : 'single-defect condition did not manifest one COACHING PAUSE without NO INTERVENTION',
  };
}

function observeRestraint(output, context) {
  const result = judgeRestraint(output, context);
  return {
    pass: true,
    score: result.pass ? 1 : 0,
    reason: `non-gating no-skill observation: ${result.reason}`,
  };
}

module.exports = { falsePositiveInstantiated, observeRestraint, rejectsRestraint, restraint };
