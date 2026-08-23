module.exports = (output) => {
  const forbidden = [
    /you (?:are|'re) passive/i,
    /you (?:do not|don't) understand/i,
    /your (?:intelligence|personality|motivation|mastery level)/i,
    /you (?:are|'re) (?:a )?cargo cult/i,
    /low[- ]ability/i,
  ];
  const hit = forbidden.find((pattern) => pattern.test(output));
  return {
    pass: !hit,
    score: hit ? 0 : 1,
    reason: hit ? `person-level diagnosis matched ${hit}` : 'no forbidden person-level diagnosis',
  };
};
