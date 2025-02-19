
/*
  HTDMath Static Class - Not intended for instantiation!

  Model parameters:
    k = discount factor (0, Infinity)

  Behavioral variables:
    A = amount
    D = delay
    V = subjective value

  Equations:
    V = A / (1 + kD)
    k = (A - V) / (VD)
*/
export default class HTDMath {
  static k = {
    DEFAULT: 0.05,
    MIN: 0,
    MAX: 100,
    STEP: 0.001,
    JUMP: 0.01,
  };

  static adk2v(a, d, k) {
    return a / (1 + k * d);
  }

  static adv2k(a, d, v) {
    return (a - v) / (v * d);
  }
}
