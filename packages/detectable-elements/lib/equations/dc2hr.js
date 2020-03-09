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
  var data = _taggedTemplateLiteral(["\n      <div class=\"holder\">\n        <table class=\"equation\">\n          <tbody>\n            ", "\n          </tbody>\n        </table>\n      </div>"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n        <tr>\n          <td rowspan=\"2\">\n            ", "<span class=\"equals\">=</span><var class=\"math-greek phi tight\">\u03A6</var><span class=\"paren tight\">(</span>\n          </td>\n          <td class=\"underline\">\n            ", "\n          </td>\n          <td rowspan=\"2\">\n            <span class=\"minus\">\u2212</span>", "<span class=\"paren tight\">)</span>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <span>2</span>\n          </td>\n        </tr>"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n        <tr>\n          <td rowspan=\"2\">\n            ", "<span class=\"equals\">=</span><var class=\"math-greek phi tight\">\u03A6</var><span class=\"paren tight\">(</span><span class=\"bracket tight\">[</span>\n          </td>\n          <td class=\"underline bottom\">\n            <span>1</span><span class=\"plus tight\">+</span><span>", "<sup class=\"exp\">2</sup></span>\n          </td>\n          <td rowspan=\"2\">\n            <span class=\"bracket tight\">]<sup class=\"exp\">\xBD</sup></span><span class=\"bracket tight\">[</span>\n          </td>\n          <td class=\"underline\">\n            ", "\n          </td>\n          <td rowspan=\"2\">\n            <span class=\"minus\">\u2212</span>\n          </td>\n          <td class=\"underline\">\n            ", "\n          </td>\n          <td rowspan=\"2\">\n            <span class=\"bracket tight\">]</span><span class=\"paren tight\">)</span>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <span>2</span>\n          </td>\n          <td>\n            <span><span>1</span><span class=\"plus\">+</span>", "</span>\n          </td>\n          <td>\n            ", "\n          </td>\n        </tr>"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["<var class=\"hr\">Hit Rate</var>"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["<var class=\"math-var s\">\u03C3</var>"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["<var class=\"math-var c\">c</var>"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["<var class=\"math-var d\">d\u2032</var>"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["<label class=\"hr bottom\">\n          <var>Hit Rate</var>\n          <input disabled type=\"number\" min=\"0\" max=\"1\" step=\".001\" .value=\"", "\">\n        </label>"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["<label class=\"s bottom\">\n          <var class=\"math-var\">\u03C3</var>\n          <input ?disabled=", " type=\"number\" min=\"0\" step=\".001\" .value=\"", "\" @input=", ">\n        </label>"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["<label class=\"c bottom\">\n          <var class=\"math-var\">c</var>\n          <input ?disabled=", " type=\"number\" step=\".001\" .value=\"", "\" @input=", ">\n        </label>"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["<label class=\"d bottom\">\n          <var class=\"math-var\">d\u2032</var>\n          <input ?disabled=", " type=\"number\" step=\".001\" .value=\"", "\" @input=", " >\n        </label>"]);

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
  SDTEquationDC2Hr element
  <sdt-equation-dc2hr>

  Attributes:
  d'; c; Hit Rate;
*/
var SDTEquationDC2Hr = /*#__PURE__*/function (_SDTEquation) {
  _inherits(SDTEquationDC2Hr, _SDTEquation);

  _createClass(SDTEquationDC2Hr, null, [{
    key: "properties",
    get: function get() {
      return {
        unequal: {
          attribute: 'unequal',
          type: Boolean,
          reflect: true
        },
        d: {
          attribute: 'd',
          type: Number,
          reflect: true
        },
        c: {
          attribute: 'c',
          type: Number,
          reflect: true
        },
        s: {
          attribute: 's',
          type: Number,
          reflect: true
        },
        hr: {
          attribute: false,
          type: Number,
          reflect: false
        }
      };
    }
  }]);

  function SDTEquationDC2Hr() {
    var _this;

    _classCallCheck(this, SDTEquationDC2Hr);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SDTEquationDC2Hr).call(this));
    _this.unequal = false;
    _this.d = 0;
    _this.c = 0;
    _this.s = 1;

    _this.alignState();

    return _this;
  }

  _createClass(SDTEquationDC2Hr, [{
    key: "alignState",
    value: function alignState() {
      this.hr = _sdtEquation.default.dc2hr(this.d, this.c, this.s);
    }
  }, {
    key: "sendEvent",
    value: function sendEvent() {
      this.dispatchEvent(new CustomEvent('sdt-equation-dc2hr-change', {
        detail: {
          d: this.d,
          c: this.c,
          s: this.s,
          hr: this.hr
        },
        bubbles: true
      }));
    }
  }, {
    key: "dInput",
    value: function dInput(event) {
      this.d = parseFloat(event.target.value);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "cInput",
    value: function cInput(event) {
      this.c = parseFloat(event.target.value);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "sInput",
    value: function sInput(event) {
      this.s = parseFloat(event.target.value);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "render",
    value: function render() {
      this.alignState();
      var d;
      var c;
      var s;
      var hr;

      if (this.numeric) {
        d = (0, _litElement.html)(_templateObject(), !this.interactive, this.d, this.dInput.bind(this));
        c = (0, _litElement.html)(_templateObject2(), !this.interactive, this.c, this.cInput.bind(this));
        s = (0, _litElement.html)(_templateObject3(), !this.interactive, this.s, this.sInput.bind(this));
        hr = (0, _litElement.html)(_templateObject4(), +this.hr.toFixed(3));
      } else {
        d = (0, _litElement.html)(_templateObject5());
        c = (0, _litElement.html)(_templateObject6());
        s = (0, _litElement.html)(_templateObject7());
        hr = (0, _litElement.html)(_templateObject8());
      }

      var equation;

      if (this.unequal) {
        equation = (0, _litElement.html)(_templateObject9(), hr, s, d, c, s, s);
      } else {
        equation = (0, _litElement.html)(_templateObject10(), hr, d, c);
      }

      return (0, _litElement.html)(_templateObject11(), equation);
    }
  }]);

  return SDTEquationDC2Hr;
}(_sdtEquation.default);

exports.default = SDTEquationDC2Hr;
customElements.define('sdt-equation-dc2hr', SDTEquationDC2Hr);
//# sourceMappingURL=dc2hr.js.map
