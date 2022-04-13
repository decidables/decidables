
/*
  CPTMath Static Class - Not intended for instantiation!

  Variables:
    x = objective value
    v = subjective value
    p = objective probability
    w = subjective probability/decision weight
    u = subjective utility

    a = alpha (curvature for value function)
    l = lambda (loss aversion for value function)
    g = gamma (sensitivity for decision weighting function)

  Equations:
    v = if (x >= 0) x^a; if (x < 0) -l * (-x)^a
    a = if (x >= 0) log(v) / log(x); if (x < 0) (log(-v) - log(l)) / log(-x)
    l = if (x >= 0) 1; if (x < 0) -v / (-x)^a

    w = p^g / (p^g + (1 - p)^g)^(1 / g)

    u = Sum_n(v_n * w_n)
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

  static vw2u(v, w) {
    // Numbers
    if (typeof v === 'number' && typeof w === 'number') {
      return v * w;
    }
    // Arrays
    if (v instanceof Array && w instanceof Array && v.length > 0 && v.length === w.length) {
      let u = 0;
      for (let n = 0; n < v.length; n += 1) {
        u += v[n] * w[n];
      }
      return u;
    }
    // Otherwise
    return NaN;
  }
}
