/*
  DDMMath Static Class - Not intended for instantiation!

  Model parameters:
    a = boundary separation
    z = starting point as a proportion of a
    v = drift rate (per second)
    t0 = non-decision time (in milliseconds)
    s = within-trial variability in drift rate (s^2 = infinitesimal variance)

    zPrime = starting point on a 0-to-a scale (typically used in published equations)

  Behavioral variables:
    pE = proportion of error trials
    pC = proportion of correct trials
    m = mean of overall RTs (in milliseconds)
    mE = mean of error RTs (in milliseconds)
    mC = mean correct RTs (in milliseconds)
    sd = standard deviation of overall RTs (in milliseconds)
    sdE = standard deviation of error RTs (in milliseconds)
    sdC = standard deviation of correct RTs (in milliseconds)

  Equations:
    Probability of correct and error responses (Alexandrowicz, 2020)
    Mean of overall, error, and correct RTs (Grasman et al., 2009)
    Standard deviation of overall, error, and correct RTs (Grasman et al., 2009)
    Density of error and correct RT distributions (Alexandrowicz, 2020)
*/
class DDMMath {
  static s = 1;

  // Calculate a bunch of statistics for an array of trials
  static trials2stats(trials) {
    const stats = trials.reduce((accumulator, trial) => {
      switch (trial.outcome) {
        case 'correct':
          accumulator.trials.correct += 1;
          accumulator.rts.correct += trial.rt;
          break;
        case 'error':
          accumulator.trials.error += 1;
          accumulator.rts.error += trial.rt;
          break;
        case 'nr':
          accumulator.trials.nr += 1;
          break;
        // No-op
      }
      return accumulator;
    }, {
      trials: {
        total: 0,
        correct: 0,
        error: 0,
        nr: 0
      },
      rts: {
        overall: 0,
        correct: 0,
        error: 0
      },
      sss: {
        overall: 0,
        correct: 0,
        error: 0
      }
    });
    stats.trials.total = stats.trials.correct + stats.trials.error + stats.trials.nr;
    stats.rts.overall = stats.rts.correct + stats.rts.error;
    stats.proportion = {
      correct: stats.trials.correct / stats.trials.total,
      error: stats.trials.error / stats.trials.total,
      nr: stats.trials.nr / stats.trials.total
    };
    stats.meanRT = {
      overall: stats.rts.overall / (stats.trials.correct + stats.trials.error),
      correct: stats.rts.correct / stats.trials.correct,
      error: stats.rts.error / stats.trials.error
    };
    trials.reduce((accumulator, trial) => {
      accumulator.sss.overall += (trial.rt - accumulator.meanRT.overall) ** 2;
      switch (trial.outcome) {
        case 'correct':
          accumulator.sss.correct += (trial.rt - accumulator.meanRT.correct) ** 2;
          break;
        case 'error':
          accumulator.sss.error += (trial.rt - accumulator.meanRT.error) ** 2;
          break;
        // No-op
      }
      return accumulator;
    }, stats);
    stats.sdRT = {
      overall: Math.sqrt(stats.sss.overall / (stats.trials.correct + stats.trials.error - 1)),
      correct: Math.sqrt(stats.sss.correct / (stats.trials.correct - 1)),
      error: Math.sqrt(stats.sss.error / (stats.trials.error - 1))
    };
    return stats;
  }

  // Probability of an Error Response
  static azvs2pE(a, z, v, s = DDMMath.s) {
    const zPrime = a * z;
    const A = Math.exp(-2 * v * a / s ** 2);
    const Z = Math.exp(-2 * v * zPrime / s ** 2);
    return (A - Z) / (A - 1);
  }

  // Probability of a Correct Response
  static azvs2pC(a, z, v, s = DDMMath.s) {
    return DDMMath.azvs2pE(a, 1 - z, -v, s);
  }

  // Mean Overall RT
  // Equation 5 (Grasman et al., 2009)
  static azvt0s2m(a, z, v, t0, s = DDMMath.s) {
    const zPrime = a * z;
    const A = Math.exp(-2 * v * a / s ** 2) - 1;
    const Z = Math.exp(-2 * v * zPrime / s ** 2) - 1;
    const mean = -(zPrime / v) + a / v * (Z / A);
    return t0 + mean * 1000;
  }

  // SD Overall RT
  // Equation 6 (Grasman et al., 2009)
  static azvs2sd(a, z, v, s = DDMMath.s) {
    const zPrime = a * z;
    const A = Math.exp(-2 * v * a / s ** 2) - 1;
    const Z = Math.exp(-2 * v * zPrime / s ** 2) - 1;
    const variance = (-v * a ** 2 * (Z + 4) * Z / A ** 2 + ((-3 * v * a ** 2 + 4 * v * zPrime * a + s ** 2 * a) * Z + 4 * v * zPrime * a) / A - s ** 2 * zPrime) / v ** 3;
    return Math.sqrt(variance) * 1000;
  }

  // Mean Error RT
  // Equation 13 (Grasman et al., 2009)
  static azvt0s2mE(a, z, v, t0, s = DDMMath.s) {
    function phi(x, y) {
      return Math.exp(2 * v * y / s ** 2) - Math.exp(2 * v * x / s ** 2);
    }
    const zPrime = a * z;
    const mean = (zPrime * (phi(zPrime - a, a) + phi(0, zPrime)) + 2 * a * phi(zPrime, 0)) / (v * phi(zPrime, a) * phi(-a, 0));
    return t0 + mean * 1000;
  }

  // SD Error RT
  // Equation 14 (Grasman et al., 2009)
  static azvs2sdE(a, z, v, s = DDMMath.s) {
    function phi(x, y) {
      return Math.exp(2 * v * y / s ** 2) - Math.exp(2 * v * x / s ** 2);
    }
    const zPrime = a * z;
    const variance = -2 * a * phi(0, zPrime) * (2 * v * a * phi(zPrime, 2 * a) + s ** 2 * phi(0, a) * phi(zPrime, a)) * Math.exp(2 * v * a / s ** 2) / (v ** 3 * phi(0, a) ** 2 * phi(zPrime, a) ** 2) + (4 * v * zPrime * (2 * a - zPrime) * Math.exp(2 * v * (zPrime + a) / s ** 2) + zPrime * s ** 2 * phi(2 * zPrime, 2 * a)) / (v ** 3 * phi(zPrime, a) ** 2);
    return Math.sqrt(variance) * 1000;
  }

  // Mean Correct RT
  static azvt0s2mC(a, z, v, t0, s = DDMMath.s) {
    return DDMMath.azvt0s2mE(a, 1 - z, -v, t0, s);
  }

  // SD Correct RT
  static azvs2sdC(a, z, v, s = DDMMath.s) {
    return DDMMath.azvs2sdE(a, 1 - z, -v, s);
  }

  // Density of Error RT
  static tazvs2gE(t, a, z, v, s = DDMMath.s) {
    if (!t) return 0;
    const zPrime = a * z;
    const base = Math.PI * s ** 2 / a ** 2 * Math.exp(-zPrime * v / s ** 2);
    let k = 0;
    let term = 0;
    let sum = 0;
    do {
      k += 1;
      term = k * Math.sin(Math.PI * zPrime * k / a) * Math.exp(-0.5 * (v ** 2 / s ** 2 + Math.PI ** 2 * k ** 2 * s ** 2 / a ** 2) * t);
      sum += term;
    } while (k < 200); // ?? HACK

    return base * sum;
  }

  // Density of Correct RT
  static tazvs2gC(t, a, z, v, s = DDMMath.s) {
    return DDMMath.tazvs2gE(t, a, 1 - z, -v, s);
  }
}

// Internal dependencies

export { DDMMath as default };
//# sourceMappingURL=accumulableMath.esm.js.map
