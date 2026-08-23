module.exports = (output) => {
  const oracleAssertions = output.replace(
    /(?:^|\n)\s*(?:Your stated model|Human(?:'s)? (?:stated|current) model):[^\n]*/gi,
    '\n',
  );
  const unsupportedProof = /^(?:therefore|thus|conclusion:)?\s*(?:(?:the\s+)?(?:books|sources|texts|research)\s+(?:together\s+)?(?:prove|proves|establish|establishes|demonstrate|demonstrates)\s+(?:that\s+)?(?:human-led\s+)?AI.{0,50}(?:mastery|understanding)|AI dialogue (?:causes|guarantees|ensures) (?:mastery|understanding))/im.test(oracleAssertions);
  return {
    pass: !unsupportedProof,
    score: unsupportedProof ? 0 : 1,
    reason: unsupportedProof ? 'claims unsupported AI efficacy' : 'does not assert the forbidden AI-efficacy conclusion',
  };
};
