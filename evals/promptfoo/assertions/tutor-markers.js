function count(output, marker) {
  return output.split(marker).length - 1;
}

module.exports = (output, context) => {
  const contract = context.vars.markerContract;
  const pauses = count(output, 'COACHING PAUSE');
  const returns = count(output, 'RETURN TO INQUIRY');
  const noIntervention = count(output, 'NO INTERVENTION');
  let pass = false;
  let expected = '';

  if (contract === 'pause-only') {
    pass = pauses === 1 && returns === 0 && noIntervention === 0;
    expected = 'one pause, no return before retry, no no-intervention marker';
  } else if (contract === 'no-intervention') {
    pass = noIntervention === 1 && pauses === 0 && returns === 0 && !/Try once:/i.test(output);
    expected = 'one no-intervention marker and no drill';
  } else if (contract === 'return-only') {
    pass = returns === 1 && pauses === 0 && noIntervention === 0 && !/Try once:/i.test(output);
    expected = 'one return and no new coaching drill';
  } else if (contract === 'no-markers') {
    pass = pauses === 0 && returns === 0 && noIntervention === 0;
    expected = 'no coaching markers';
  }

  return {
    pass,
    score: pass ? 1 : 0,
    reason: `${expected}; observed pause=${pauses}, return=${returns}, no-intervention=${noIntervention}`,
  };
};
