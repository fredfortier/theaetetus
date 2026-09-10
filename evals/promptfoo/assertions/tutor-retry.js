function disposition(output) {
  return String(output ?? '').match(/^DISPOSITION:\s*(pass|retry)\s*$/imu)?.[1]?.toLowerCase();
}

function judgeRetry(output, context = {}, expected = context.vars?.expectedDecision) {
  const text = String(output ?? '');
  const vars = context.vars ?? {};
  const observed = disposition(text);
  const failures = [];

  if (observed !== expected) failures.push(`expected ${expected}, observed ${observed ?? 'no disposition'}`);
  if (!text.includes(vars.retryText ?? '')) failures.push('human retry was not preserved');
  const decisionExplanation = expected === 'pass'
    ? (text.match(/^Recovered move:(.*)$/imu)?.[1] ?? '')
    : text.replace(vars.retryText ?? '', '');
  if (!/(defeat|falsif|counterexample|disconfirm|distinguish)/iu.test(decisionExplanation)) {
    failures.push('assigned defeater function was not named in the decision explanation');
  }
  if (!text.includes(vars.liveQuestion ?? '')) failures.push('live question was not preserved');
  if (expected === 'pass' && !text.includes('RETURN TO INQUIRY')) {
    failures.push('adequate retry did not return to inquiry');
  }
  if (expected === 'retry' && text.includes('RETURN TO INQUIRY')) {
    failures.push('ineffective retry incorrectly returned to inquiry');
  }

  return {
    pass: failures.length === 0,
    score: failures.length === 0 ? 1 : 0,
    reason: failures.length === 0 ? `retry correctly classified ${expected}` : failures.join('; '),
  };
}

function current(output, context) {
  return judgeRetry(output, context);
}

function mutation(output, context) {
  return judgeRetry(output, context, context.vars?.mutatedDecision);
}

function observeBaseline(output, context) {
  const result = judgeRetry(output, context);
  return { pass: true, score: result.pass ? 1 : 0, reason: `non-gating no-skill: ${result.reason}` };
}

function rejectsMutation(output, context) {
  const result = mutation(output, context);
  return { pass: !result.pass, score: result.pass ? 0 : 1, reason: result.pass ? 'non-manifested tutor mutation passed' : result.reason };
}

function rejectsCurrent(output, context) {
  const result = judgeRetry(output, context);
  return { pass: !result.pass, score: result.pass ? 0 : 1, reason: result.pass ? 'invalid retry output passed' : result.reason };
}

module.exports = { current, mutation, observeBaseline, rejectsCurrent, rejectsMutation };
