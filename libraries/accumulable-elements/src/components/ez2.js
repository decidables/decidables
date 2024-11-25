
// Adapted from  https://raoul.socsci.uva.nl/EZ2/EZ2_new.html

function sign(r) {
  return ((r > 0) ? 1 : ((r === 0) ? 0 : -1));
}

function logit(p) {
  return Math.log(p / (1 - p));
}

// EZ-function for starting values
// input: obj - Object with properties
//    pC - Proportion correct
//    sd - sample standard deviation of the RT's in ms
//    m - sample mean of the RT's in ms
//    s - diffusion standard deviation
// returns: Object with properties v, a, and t0, containing EZ-estimates of these parameters
export function data2ez({
  accuracy: pC,
  sdRT: sd,
  meanRT: m,
  s,
}) {
  const vrt = (sd / 1000) ** 2;
  const mrt = m / 1000;

  const s2 = s ** 2;
  const l = logit(pC);
  const x = (l * (l * pC ** 2 - l * pC + pC - 0.5)) / vrt;
  const v = sign(pC - 0.5) * s * x ** (1 / 4);
  const a = (s2 * logit(pC)) / v;
  const y = (-v * a) / s2;
  const mdt = ((a / (2 * v)) * (1 - Math.exp(y))) / (1 + Math.exp(y));
  const t0 = (mrt ? mrt - mdt : null); // compute Ter only if MRT was provided

  const t0Prime = t0 * 1000;
  return {
    v,
    a,
    t0: t0Prime,
    s,
  };
}

export function data2ez2() {

}
