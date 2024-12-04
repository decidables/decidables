
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
export default class DDMMath {
  static s = 1;

  // Calculate a bunch of statistics for an array of trials
  static trials2stats(trials) {
    const stats = {};

    // First-order sums
    const sums = trials.reduce(
      (accumulator, trial) => {
        switch (trial.outcome) {
          case 'correct':
            accumulator.correctCount += 1;
            accumulator.correctRTSum += trial.rt;
            break;
          case 'error':
            accumulator.errorCount += 1;
            accumulator.errorRTSum += trial.rt;
            break;
          case 'nr':
            accumulator.nrCount += 1;
            break;
          default:
            // No-op
        }
        return accumulator;
      },
      {
        correctCount: 0,
        errorCount: 0,
        nrCount: 0,

        correctRTSum: 0,
        errorRTSum: 0,
      },
    );

    // First-order stats
    stats.correctCount = sums.correctCount;
    stats.errorCount = sums.errorCount;
    stats.nrCount = sums.nrCount;
    stats.accuracy = sums.correctCount / (sums.correctCount + sums.errorCount + sums.nrCount);

    stats.correctMeanRT = sums.correctRTSum / sums.correctCount;
    stats.errorMeanRT = sums.errorRTSum / sums.errorCount;
    stats.meanRT = (sums.correctRTSum + sums.errorRTSum) / (sums.correctCount + sums.errorCount);

    // Second-order sums
    const sums2 = trials.reduce(
      (accumulator, trial) => {
        accumulator.ss += (trial.rt - stats.meanRT) ** 2;
        switch (trial.outcome) {
          case 'correct':
            accumulator.correctSS += (trial.rt - stats.correctMeanRT) ** 2;
            break;
          case 'error':
            accumulator.errorSS += (trial.rt - stats.errorMeanRT) ** 2;
            break;
          default:
            // No-op
        }
        return accumulator;
      },
      {
        ss: 0,
        correctSS: 0,
        errorSS: 0,
      },
    );

    // Second-order stats
    stats.correctSDRT = (stats.correctCount > 1)
      ? Math.sqrt(sums2.correctSS / (stats.correctCount - 1))
      : NaN;
    stats.errorSDRT = (stats.errorCount > 1)
      ? Math.sqrt(sums2.errorSS / (stats.errorCount - 1))
      : NaN;
    stats.sdRT = (stats.correctCount + stats.errorCount > 1)
      ? Math.sqrt(sums2.ss / (stats.correctCount + stats.errorCount - 1))
      : NaN;

    return stats;
  }

  // Probability of an Error Response
  static azv2pE(a, z, v, s = DDMMath.s) {
    const zPrime = a * z;

    const A = Math.exp((-2 * v * a) / s ** 2);
    const Z = Math.exp((-2 * v * zPrime) / s ** 2);

    return (A - Z) / (A - 1);
  }

  // Probability of a Correct Response
  static azv2pC(a, z, v, s = DDMMath.s) {
    return DDMMath.azv2pE(a, 1 - z, -v, s);
  }

  // Mean Overall RT
  // Equation 5 (Grasman et al., 2009)
  static azvt02m(a, z, v, t0, s = DDMMath.s) {
    const zPrime = a * z;
    const A = Math.exp((-2 * v * a) / s ** 2) - 1;
    const Z = Math.exp((-2 * v * zPrime) / s ** 2) - 1;

    const mean = -(zPrime / v) + (a / v) * (Z / A);
    return t0 + mean * 1000;
  }

  // SD Overall RT
  // Equation 6 (Grasman et al., 2009)
  static azv2sd(a, z, v, s = DDMMath.s) {
    const zPrime = a * z;
    const A = Math.exp((-2 * v * a) / s ** 2) - 1;
    const Z = Math.exp((-2 * v * zPrime) / s ** 2) - 1;

    const variance = (
      (
        (-v * a ** 2 * (Z + 4) * Z) / A ** 2
      ) + (
        ((-3 * v * a ** 2 + 4 * v * zPrime * a + s ** 2 * a) * Z + 4 * v * zPrime * a) / A
      ) - (
        s ** 2 * zPrime
      )
    ) / v ** 3;

    return Math.sqrt(variance) * 1000;
  }

  // Mean Error RT
  // Equation 13 (Grasman et al., 2009)
  static azvt02mE(a, z, v, t0, s = DDMMath.s) {
    function phi(x, y) {
      return Math.exp((2 * v * y) / (s ** 2)) - Math.exp((2 * v * x) / (s ** 2));
    }
    const zPrime = a * z;

    const mean = (zPrime * (phi(zPrime - a, a) + phi(0, zPrime)) + 2 * a * phi(zPrime, 0))
      / (v * phi(zPrime, a) * phi(-a, 0));
    return t0 + mean * 1000;
  }

  // SD Error RT
  // Equation 14 (Grasman et al., 2009)
  static azv2sdE(a, z, v, s = DDMMath.s) {
    function phi(x, y) {
      return Math.exp((2 * v * y) / (s ** 2)) - Math.exp((2 * v * x) / (s ** 2));
    }
    const zPrime = a * z;

    const variance = (
      (
        -2 * a * phi(0, zPrime)
        * ((2 * v * a * phi(zPrime, 2 * a)) + (s ** 2 * phi(0, a) * phi(zPrime, a)))
        * Math.exp((2 * v * a) / s ** 2)
      ) / (
        v ** 3 * phi(0, a) ** 2 * phi(zPrime, a) ** 2
      )
    ) + (
      (
        4 * v * zPrime * (2 * a - zPrime) * Math.exp((2 * v * (zPrime + a)) / s ** 2)
        + zPrime * s ** 2 * phi(2 * zPrime, 2 * a)
      ) / (
        v ** 3 * phi(zPrime, a) ** 2
      )
    );

    return Math.sqrt(variance) * 1000;
  }

  // Mean Correct RT
  static azvt02mC(a, z, v, t0, s = DDMMath.s) {
    return DDMMath.azvt02mE(a, 1 - z, -v, t0, s);
  }

  // SD Correct RT
  static azv2sdC(a, z, v, s = DDMMath.s) {
    return DDMMath.azv2sdE(a, 1 - z, -v, s);
  }

  // Density of Error RT
  static tazv2gE(t, a, z, v, s = DDMMath.s) {
    if (!t) return 0;

    const zPrime = a * z;
    const base = ((Math.PI * s ** 2) / a ** 2) * Math.exp((-zPrime * v) / s ** 2);

    let k = 0;
    let term = 0;
    let sum = 0;
    do {
      k += 1;

      term = k
        * Math.sin((Math.PI * zPrime * k) / a)
        * Math.exp(-0.5 * ((v ** 2 / s ** 2) + ((Math.PI ** 2 * k ** 2 * s ** 2) / a ** 2)) * t);

      sum += term;
    } while (k < 200); // ?? HACK

    return base * sum;
  }

  // Density of Correct RT
  static tazv2gC(t, a, z, v, s = DDMMath.s) {
    return DDMMath.tazv2gE(t, a, 1 - z, -v, s);
  }
}
