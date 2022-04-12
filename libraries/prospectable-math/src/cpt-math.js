
/*
  CPTMath Static Class - Not intended for instantiation!

  Variables:
    x = objective value
    v = subjective value/utility
    p = objective probability
    w = subjective probability/decision weight
    u = expected value/utility

    a = alpha (curvature for value function)
    l = lambda (loss aversion for value function)
    g = gamma (sensitivity for decision weighting function)

  Equations:
    v = if (x >= 0) x^a; if (x < 0) -l * (-x)^a
    a = if (x >= 0) log(v) / log(x); if (x < 0) (log(-v) - log(l)) / log(-x)
    l = if (x >= 0) 1; if (x < 0) -v / (-x)^a

    w = p^g / (p^g + (1 - p)^g)^(1 / g)
*/
export default class CPTMath {
  static xal2v(x, a, l) {
    if (x >= 0) {
      return x ** a;
    }
    // else (x < 0)
    return -l * ((-x) ** a);
  }

  static xlv2a(x, l, v) {
    if (x >= 0) {
      return Math.log(v) / Math.log(x);
    }
    // else (x < 0)
    return (Math.log(-v) - Math.log(l)) / Math.log(-x);
  }

  static xav2l(x, a, v) {
    if (x >= 0) {
      return NaN;
    }
    // else (x < 0)
    return -v / ((-x) ** a);
  }

  static pg2w(p, g) {
    return (p ** g) / (((p ** g) + ((1 - p) ** g)) ** (1 / g));
  }
}
