(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.discountableMath = factory());
})(this, (function () { 'use strict';

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
  class HTDMath {
    static adk2v(a, d, k) {
      return a / (1 + k * d);
    }
    static adv2k(a, d, v) {
      return (a - v) / (v * d);
    }
  }

  // Internal dependencies

  return HTDMath;

}));
//# sourceMappingURL=discountableMath.umd.js.map
