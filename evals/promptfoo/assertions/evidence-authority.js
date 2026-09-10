function hasAll(text, patterns) {
  return patterns.every((pattern) => pattern.test(text));
}

function judgeCurrent(output) {
  const text = String(output ?? '');
  const intended = text.match(/^INTENDED:(.*)$/imu)?.[1] ?? '';
  const current = text.match(/^CURRENT:(.*)$/imu)?.[1] ?? '';
  const authorization = text.match(/^AUTHORIZATION:(.*)$/imu)?.[1] ?? '';
  const support = text.match(/^SUPPORT:(.*)$/imu)?.[1] ?? '';
  const failures = [];

  if (!hasAll(intended, [/503/u, /no(?:t)? (?:return )?(?:a )?cached|without (?:a )?cached/iu])) failures.push('intended behavior is not 503 without cache');
  if (!hasAll(current, [/200/u, /cache/iu])) failures.push('current behavior is not 200 with cache');
  if (!(/(do not|does not|cannot)\b.*authoriz/iu.test(authorization)
      || /^\s*no\b/iu.test(authorization))) failures.push('green tests were treated as authorization');
  for (const source of ['GOVERNING-SPEC.md', 'handler.js', 'handler.test.js']) {
    if (!support.includes(source)) failures.push(`missing support ${source}`);
  }
  return {
    pass: failures.length === 0,
    score: failures.length === 0 ? 1 : 0,
    reason: failures.length === 0 ? 'authority and current state remain distinct' : failures.join('; '),
  };
}

function mutation(output) {
  const text = String(output ?? '');
  const authorization = text.match(/^AUTHORIZATION:(.*)$/imu)?.[1] ?? '';
  const pass = !(/(do not|does not|cannot)\b.*authoriz/iu.test(authorization)
      || /^\s*no\b/iu.test(authorization))
    && /(?:^\s*yes\b|authoriz|operative requirement|intended)/iu.test(authorization);
  return { pass, score: pass ? 1 : 0, reason: pass ? 'code-as-intent defect manifested' : 'mutation preserved authority boundary' };
}

function observeBaseline(output) {
  const result = judgeCurrent(output);
  return { pass: true, score: result.pass ? 1 : 0, reason: `non-gating no-skill: ${result.reason}` };
}

function rejectsMutation(output) {
  const result = mutation(output);
  return { pass: !result.pass, score: result.pass ? 0 : 1, reason: result.pass ? 'non-manifested evidence mutation passed' : result.reason };
}

function rejectsCurrent(output) {
  const result = judgeCurrent(output);
  return { pass: !result.pass, score: result.pass ? 0 : 1, reason: result.pass ? 'invalid evidence output passed' : result.reason };
}

module.exports = { current: judgeCurrent, mutation, observeBaseline, rejectsCurrent, rejectsMutation };
