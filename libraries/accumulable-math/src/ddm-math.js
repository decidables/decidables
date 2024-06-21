
/*
  DDMMath Static Class - Not intended for instantiation!

  Variables:
    a = boundary separation
    z = starting point
    zprime = starting point as a proportion of a
    v = drift rate (per second)
    s = within-trial variability in drift rate (s^2 = infinitesimal variance)

  Equations:
    Probability of correct/error response (Alexandrowicz, 2020)
    Mean error/correct RT (Grasman et al., 2009)
    Density of error/correct RT (Alexandrowicz, 2020)
*/
export default class DDMMath {
  // Probability of an Error Response
  static azvs2pE(a, zprime, v, s) {
    const z = a * zprime;
    const e1 = Math.exp((-2 * v * a) / s ** 2);
    const e2 = Math.exp((-2 * v * z) / s ** 2);

    return (e1 - e2) / (e1 - 1);
  }

  // Probability of a Correct Response
  static azvs2pC(a, zprime, v, s) {
    return DDMMath.azvs2pE(a, 1 - zprime, -v, s);
  }

  // Mean Error RT
  static azvs2mE(a, zprime, v, s) {
    function phi(x, y) {
      return Math.exp((2 * v * y) / (s ** 2)) - Math.exp((2 * v * x) / (s ** 2));
    }
    const z = a * zprime;

    return (z * (phi(z - a, a) + phi(0, z)) + 2 * a * phi(z, 0))
      / (v * phi(z, a) * phi(-a, 0));
  }

  // Mean Correct RT
  static azvs2mC(a, zprime, v, s) {
    return DDMMath.azvs2mE(a, 1 - zprime, -v, s);
  }

  // Density of Error RT
  static tazvs2gE(t, a, zprime, v, s) {
    if (!t) return 0;

    const z = a * zprime;
    const base = ((Math.PI * s ** 2) / a ** 2) * Math.exp((-z * v) / s ** 2);

    let k = 0;
    let term = 0;
    let sum = 0;
    do {
      k += 1;

      term = k
        * Math.sin((Math.PI * z * k) / a)
        * Math.exp(-0.5 * ((v ** 2 / s ** 2) + ((Math.PI ** 2 * k ** 2 * s ** 2) / a ** 2)) * t);

      sum += term;
    } while (k < 200); // ?? HACK

    return base * sum;
  }

  // Density of Correct RT
  static tazvs2gC(t, a, zprime, v, s) {
    return DDMMath.tazvs2gE(t, a, 1 - zprime, -v, s);
  }
}
