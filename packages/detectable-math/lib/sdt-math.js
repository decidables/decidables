"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var jStat = _interopRequireWildcard(require("jstat"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
  SDTMath Static Class - Not intended for instantiation!

  Variables:
    H = hits
    M = misses
    FA = false alarms
    CR = correct rejections
    HR = hit rate
    FAR = false alarm rate
    ACC = accuracy
    PPV = positive predictive value
    FOMR = false omission rate (used FOMR to avoid keyword FOR!)
    d = sensitivity (d' for equal variance, d_a for unequal variance)
    c = response bias (c for equal variance, c_a for unequal variance)
    s = standard deviation of signal distribution, with standard deviation of noise distribution = 1
    muN = mean of noise distribution
    muS = mean of signal distribution
    l = lambda, threshold location, with l = 0 indicating no response bias
    h = height of signal distribution

  Equations (* = unequal variance):
    HR = H / (H + M)
    FAR = FA / (FA + CR)
    ACC = (H + CR) / (H + M + FA + CR)
    ACC = (HR + (1 - FAR)) / 2
    PPV = H / (H + FA)
    FOMR = M / (M + CR)

    d' = Z^-1(HR) - Z^-1(FAR)
    *d' = (2 / (s^2 + 1))^(1/2) * (s * Z^-1(HR) - Z^-1(FAR))

    c = -(Z^-1(HR) + Z^-1(FAR))/2
    *c = (2 / (s^2 + 1))^(1/2) * (s / s + 1) * -(Z^-1(HR) + Z^-1(FAR))

    HR = Z(d'/2 - c)
    *HR = Z(((s^2 + 1) / 2)^(1/2) * (d' / (s + 1) - c / s))

    FAR = Z(-d'/2 - c)
    *FAR = Z(((s^2 + 1) / 2)^(1/2) * -(d' / (s + 1) + c))

    HR = Z(d' + Z^-1(FAR))
    *HR = Z(((s^2 + 1) / 2)^(1/2) * d' + Z^-1(FAR) / s)

    HR = Z(-2c - Z^-1(FAR))
    *HR = Z(-((s^2 + 1) / 2)^(1/2) * ((s + 1) / s) * c - Z^-1(FAR))

    muN = -d'/2
    *muN = -((s^2 + 1) / 2)^(1/2) * (1 / (s + 1)) * d'

    d' = -2 * muN
    *d' = -(2 / (s^2 + 1))^(1/2) * (s + 1) * muN

    muS = d'/2
    *muS = ((s^2 + 1) / 2)^(1/2) * (s / (s + 1)) * d'

    d' = 2 * muS
    *d' = (2 / (s^2 + 1))^(1/2) * ((s + 1) / s) * muS

    l = c
    l = ((s^2 + 1) / 2)^(1/2) * c

    c = l
    c = (2 / (s^2 + 1))^(1/2) * l

    h = 1 / (s * (2 * pi)^(1/2))
    s = 1 / (h * (2 * pi)^(1/2))
*/
var SDTMath = /*#__PURE__*/function () {
  function SDTMath() {
    _classCallCheck(this, SDTMath);
  }

  _createClass(SDTMath, null, [{
    key: "hm2hr",
    value: function hm2hr(h, m) {
      if (h === 0 && m === 0) {
        return 0;
      }

      return h / (h + m);
    }
  }, {
    key: "facr2far",
    value: function facr2far(fa, cr) {
      if (fa === 0 && cr === 0) {
        return 0;
      }

      return fa / (fa + cr);
    }
  }, {
    key: "hmfacr2acc",
    value: function hmfacr2acc(h, m, fa, cr) {
      if (h === 0 && m === 0 && fa === 0 && cr === 0) {
        return 0;
      }

      return (h + cr) / (h + m + fa + cr);
    }
  }, {
    key: "hrfar2acc",
    value: function hrfar2acc(hr, far) {
      return (hr + (1 - far)) / 2;
    }
  }, {
    key: "hfa2ppv",
    value: function hfa2ppv(h, fa) {
      if (h === 0 && fa === 0) {
        return 0;
      }

      return h / (h + fa);
    }
  }, {
    key: "mcr2fomr",
    value: function mcr2fomr(m, cr) {
      if (m === 0 && cr === 0) {
        return 0;
      }

      return m / (m + cr);
    }
  }, {
    key: "hrfar2d",
    value: function hrfar2d(hr, far) {
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      if (s === 1) return jStat.normal.inv(hr, 0, 1) - jStat.normal.inv(far, 0, 1);
      return Math.sqrt(2 / (s * s + 1)) * (s * jStat.normal.inv(hr, 0, 1) - jStat.normal.inv(far, 0, 1));
    }
  }, {
    key: "hrfar2c",
    value: function hrfar2c(hr, far) {
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      if (s === 1) return -(jStat.normal.inv(hr, 0, 1) + jStat.normal.inv(far, 0, 1)) / 2;
      return Math.sqrt(2 / (s * s + 1)) * (s / (s + 1)) * -(jStat.normal.inv(hr, 0, 1) + jStat.normal.inv(far, 0, 1));
    }
  }, {
    key: "dc2hr",
    value: function dc2hr(d, c) {
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      if (s === 1) return jStat.normal.cdf(d / 2 - c, 0, 1);
      return jStat.normal.cdf(Math.sqrt((s * s + 1) / 2) * (d / (1 + s) - c / s), 0, 1);
    }
  }, {
    key: "dc2far",
    value: function dc2far(d, c) {
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      if (s === 1) return jStat.normal.cdf(-(d / 2 + c), 0, 1);
      return jStat.normal.cdf(Math.sqrt((s * s + 1) / 2) * -(d / (1 + s) + c), 0, 1);
    }
  }, {
    key: "dfar2hr",
    value: function dfar2hr(d, far) {
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      if (s === 1) return jStat.normal.cdf(d + jStat.normal.inv(far, 0, 1), 0, 1);
      return jStat.normal.cdf((Math.sqrt((s * s + 1) / 2) * d + jStat.normal.inv(far, 0, 1)) / s, 0, 1);
    }
  }, {
    key: "cfar2hr",
    value: function cfar2hr(c, far) {
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      if (s === 1) return jStat.normal.cdf(-(2 * c) - jStat.normal.inv(far, 0, 1), 0, 1);
      return jStat.normal.cdf(-Math.sqrt((s * s + 1) / 2) * ((s + 1) / s) * c - jStat.normal.inv(far, 0, 1), 0, 1);
    }
  }, {
    key: "d2muN",
    value: function d2muN(d) {
      var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      if (s === 1) return -d / 2;
      return -Math.sqrt((s * s + 1) / 2) * (1 / (s + 1)) * d;
    }
  }, {
    key: "muN2d",
    value: function muN2d(muN) {
      var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      if (s === 1) return -2 * muN;
      return -Math.sqrt(2 / (s * s + 1)) * (s + 1) * muN;
    }
  }, {
    key: "d2muS",
    value: function d2muS(d) {
      var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      if (s === 1) return d / 2;
      return Math.sqrt((s * s + 1) / 2) * (s / (s + 1)) * d;
    }
  }, {
    key: "muS2d",
    value: function muS2d(muS) {
      var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      if (s === 1) return 2 * muS;
      return Math.sqrt(2 / (s * s + 1)) * ((s + 1) / s) * muS;
    }
  }, {
    key: "c2l",
    value: function c2l(c) {
      var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      if (s === 1) return c;
      return Math.sqrt((s * s + 1) / 2) * c;
    }
  }, {
    key: "l2c",
    value: function l2c(l) {
      var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      if (s === 1) return l;
      return Math.sqrt(2 / (s * s + 1)) * l;
    }
  }, {
    key: "s2h",
    value: function s2h() {
      var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return 1 / (s * Math.sqrt(2 * Math.PI));
    }
  }, {
    key: "h2s",
    value: function h2s(h) {
      return 1 / (h * Math.sqrt(2 * Math.PI));
    }
  }, {
    key: "hr2zhr",
    value: function hr2zhr(hr) {
      return jStat.normal.inv(hr, 0, 1);
    }
  }, {
    key: "far2zfar",
    value: function far2zfar(far) {
      return jStat.normal.inv(far, 0, 1);
    }
  }, {
    key: "zhr2hr",
    value: function zhr2hr(zhr) {
      return jStat.normal.cdf(zhr, 0, 1);
    }
  }, {
    key: "zfar2far",
    value: function zfar2far(zfar) {
      return jStat.normal.cdf(zfar, 0, 1);
    }
  }]);

  return SDTMath;
}();

exports.default = SDTMath;
//# sourceMappingURL=sdt-math.js.map
