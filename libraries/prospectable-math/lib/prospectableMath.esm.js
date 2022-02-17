function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

// import * as jStat from 'jstat';

/*
  CPTMath Static Class - Not intended for instantiation!

  Variables:
    x = objective value
    v = subjective value/utility
    p = objective probability
    w = subjective probability/decision weight
    V = expected value/utility

    a = alpha (curvature for value function)
    l = lambda (loss aversion for value function)
    g = gamma (sensitivity for decision weighting function)

  Equations:
    v = x^a, if x >= 0; -l * -x^a, if x < 0
    w = p^g / (p^g + (1 - p)^g)^(1 / g)
    V = v * w
*/
var CPTMath = /*#__PURE__*/function () {
  function CPTMath() {
    _classCallCheck(this, CPTMath);
  }

  _createClass(CPTMath, null, [{
    key: "xal2v",
    value: function xal2v(x, a, l) {
      if (x >= 0) {
        return Math.pow(x, a);
      } // else (x < 0)


      return -l * Math.pow(-x, a);
    }
  }, {
    key: "xlv2a",
    value: function xlv2a(x, l, v) {
      if (x >= 0) {
        return Math.log(v) / Math.log(x);
      } // else (x < 0)


      return (Math.log(-v) - Math.log(l)) / Math.log(-x);
    }
  }, {
    key: "xav2l",
    value: function xav2l(x, a, v) {
      if (x >= 0) {
        return 1;
      } // else (x < 0)


      return -v / Math.pow(-x, a);
    }
  }, {
    key: "pg2w",
    value: function pg2w(p, g) {
      return Math.pow(p, g) / Math.pow(Math.pow(p, g) + Math.pow(1 - p, g), 1 / g);
    }
  }]);

  return CPTMath;
}();

// Internal dependencies

export { CPTMath as default };
//# sourceMappingURL=prospectableMath.esm.js.map
