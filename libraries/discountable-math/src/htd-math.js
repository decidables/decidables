
/*
  HTDMath Static Class - Not intended for instantiation!

  Variables:
    A = amount
    D = delay
    V = subjective value

    k = discount factor

  Equations:
    V = A / (1 + kD)
*/
export default class HTDMath {
  static adk2v(a, d, k) {
    return a / (1 + k * d);
  }

  static adv2k(a, d, v) {
    return (a - v) / (v * d);
  }
}
