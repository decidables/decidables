"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _litElement = require("lit-element");

var _sdtEquation = _interopRequireDefault(require("./sdt-equation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n      <div class=\"holder\">\n        <table class=\"equation\">\n          <tbody>\n            <tr>\n              <td rowspan=\"2\">\n                ", "<span class=\"equals\">=</span>\n              </td>\n              <td class=\"underline\">\n                ", "<span class=\"plus\">+</span>", "\n              </td>\n            </tr>\n            <tr>\n              <td>\n                ", "<span class=\"plus\">+</span>", "<span class=\"plus\">+</span>", "<span class=\"plus\">+</span>", "\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["<var class=\"acc\">Accuracy</var>"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["<var class=\"cr\">Correct Rejections</var>"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["<var class=\"fa\">False Alarms</var>"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["<var class=\"m\">Misses</var>"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["<var class=\"h\">Hits</var>"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["<label class=\"acc\">\n          <var>Accuracy</var>\n          <input disabled type=\"number\" min=\"0\" max=\"1\" step=\".001\" .value=\"", "\">\n        </label>"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["<label class=\"cr\">\n          <var>Correct Rejections</var>\n          <input ?disabled=", " type=\"number\" min=\"0\" .value=\"", "\" @input=", ">\n        </label>"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["<label class=\"fa\">\n          <var>False Alarms</var>\n          <input ?disabled=", " type=\"number\" min=\"0\" .value=\"", "\" @input=", ">\n        </label>"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["<label class=\"m\">\n          <var>Misses</var>\n          <input ?disabled=", " type=\"number\" min=\"0\" .value=\"", "\" @input=", ">\n        </label>"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["<label class=\"h\">\n          <var>Hits</var>\n          <input ?disabled=", " type=\"number\" min=\"0\" .value=\"", "\" @input=", ">\n        </label>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
  SDTEquation_HMFaCr2Acc element
  <sdt-equation-hmfacr2acc>

  Attributes:
  Hits; Misses; False Alarms; Correct Rejections; Accuracy;
*/
var SDTEquationHMFaCr2Acc = /*#__PURE__*/function (_SDTEquation) {
  _inherits(SDTEquationHMFaCr2Acc, _SDTEquation);

  _createClass(SDTEquationHMFaCr2Acc, null, [{
    key: "properties",
    get: function get() {
      return {
        h: {
          attribute: 'hits',
          type: Number,
          reflect: true
        },
        m: {
          attribute: 'misses',
          type: Number,
          reflect: true
        },
        fa: {
          attribute: 'false-alarms',
          type: Number,
          reflect: true
        },
        cr: {
          attribute: 'correct-rejections',
          type: Number,
          reflect: true
        },
        acc: {
          attribute: false,
          type: Number,
          reflect: false
        }
      };
    }
  }]);

  function SDTEquationHMFaCr2Acc() {
    var _this;

    _classCallCheck(this, SDTEquationHMFaCr2Acc);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SDTEquationHMFaCr2Acc).call(this));
    _this.h = 0;
    _this.m = 0;
    _this.fa = 0;
    _this.cr = 0;

    _this.alignState();

    return _this;
  }

  _createClass(SDTEquationHMFaCr2Acc, [{
    key: "alignState",
    value: function alignState() {
      this.acc = _sdtEquation.default.hmfacr2acc(this.h, this.m, this.fa, this.cr);
    }
  }, {
    key: "sendEvent",
    value: function sendEvent() {
      this.dispatchEvent(new CustomEvent('sdt-equation-hmfacr2acc-change', {
        detail: {
          h: this.h,
          m: this.m,
          fa: this.fa,
          cr: this.cr,
          acc: this.acc
        },
        bubbles: true
      }));
    }
  }, {
    key: "hInput",
    value: function hInput(event) {
      this.h = parseInt(event.target.value, 10);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "mInput",
    value: function mInput(event) {
      this.m = parseInt(event.target.value, 10);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "faInput",
    value: function faInput(event) {
      this.fa = parseInt(event.target.value, 10);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "crInput",
    value: function crInput(event) {
      this.cr = parseInt(event.target.value, 10);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "render",
    value: function render() {
      this.alignState();
      var h;
      var m;
      var fa;
      var cr;
      var acc;

      if (this.numeric) {
        h = (0, _litElement.html)(_templateObject(), !this.interactive, this.h, this.hInput.bind(this));
        m = (0, _litElement.html)(_templateObject2(), !this.interactive, this.m, this.mInput.bind(this));
        fa = (0, _litElement.html)(_templateObject3(), !this.interactive, this.fa, this.faInput.bind(this));
        cr = (0, _litElement.html)(_templateObject4(), !this.interactive, this.cr, this.crInput.bind(this));
        acc = (0, _litElement.html)(_templateObject5(), +this.acc.toFixed(3));
      } else {
        h = (0, _litElement.html)(_templateObject6());
        m = (0, _litElement.html)(_templateObject7());
        fa = (0, _litElement.html)(_templateObject8());
        cr = (0, _litElement.html)(_templateObject9());
        acc = (0, _litElement.html)(_templateObject10());
      }

      return (0, _litElement.html)(_templateObject11(), acc, h, cr, h, m, fa, cr);
    }
  }]);

  return SDTEquationHMFaCr2Acc;
}(_sdtEquation.default);

exports.default = SDTEquationHMFaCr2Acc;
customElements.define('sdt-equation-hmfacr2acc', SDTEquationHMFaCr2Acc);
//# sourceMappingURL=hmfacr2acc.js.map
