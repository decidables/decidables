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
  var data = _taggedTemplateLiteral(["\n        <tr>\n          <td>\n              ", "<span class=\"equals\">=</span><span class=\"tight\"><var class=\"math-greek phi tight\">\u03A6</var><sup class=\"exp\">\u22121</sup></span><span class=\"paren tight\">(</span>", "<span class=\"paren tight\">)</span><span class=\"minus\">\u2212</span><span class=\"tight\"><var class=\"math-greek phi tight\">\u03A6</var><sup class=\"exp\">\u22121</sup></span><span class=\"paren tight\">(</span>", "<span class=\"paren tight\">)</span>\n          </td>\n        </tr>"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n        <tr>\n          <td rowspan=\"2\">\n            ", "<span class=\"equals\">=</span><span class=\"bracket tight\">(</span>\n          </td>\n          <td class=\"underline bottom\">\n            <span>1</span><span class=\"plus tight\">+</span><span>", "<sup class=\"exp\">2</sup></span>\n          </td>\n          <td rowspan=\"2\">\n            <span class=\"bracket tight\">)<sup class=\"exp\">\u2212\xBD</sup></span><span class=\"bracket\">[</span>", "<span class=\"tight\"><var class=\"math-greek phi tight\">\u03A6</var><sup class=\"exp\">\u22121</sup></span><span class=\"paren tight\">(</span>", "<span class=\"paren tight\">)</span><span class=\"minus\">\u2212</span><span class=\"tight\"><var class=\"math-greek phi tight\">\u03A6</var><sup class=\"exp\">\u22121</sup></span><span class=\"paren tight\">(</span>", "<span class=\"paren tight\">)</span><span class=\"bracket\">]</span>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <span>2</span>\n          </td>\n        </tr>"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["<var class=\"math-var d\">d\u2032</var>"]);

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
  var data = _taggedTemplateLiteral(["<var class=\"far\">False Alarm Rate</var>"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["<var class=\"hr\">Hit Rate</var>"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["<label class=\"d bottom\">\n          <var class=\"math-var\">d\u2032</var>\n          <input disabled type=\"number\" step=\".001\" .value=\"", "\">\n        </label>"]);

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
  var data = _taggedTemplateLiteral(["<label class=\"far bottom\">\n          <var>False Alarm Rate</var>\n          <input ?disabled=", " type=\"number\" min=\"0\" max=\"1\" step=\".001\" .value=\"", "\" @input=", ">\n        </label>"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["<label class=\"hr bottom\">\n          <var>Hit Rate</var>\n          <input ?disabled=", " type=\"number\" min=\"0\" max=\"1\" step=\".001\" .value=\"", "\" @input=", " >\n        </label>"]);

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
  SDTEquation_HrFar2D element
  <sdt-equation-hrfar2d>

  Attributes:
  Hit Rate; False Alarm Rate; d';
*/
var SDTEquationHrFar2D = /*#__PURE__*/function (_SDTEquation) {
  _inherits(SDTEquationHrFar2D, _SDTEquation);

  _createClass(SDTEquationHrFar2D, null, [{
    key: "properties",
    get: function get() {
      return {
        unequal: {
          attribute: 'unequal',
          type: Boolean,
          reflect: true
        },
        hr: {
          attribute: 'hit-rate',
          type: Number,
          reflect: true
        },
        far: {
          attribute: 'false-alarm-rate',
          type: Number,
          reflect: true
        },
        s: {
          attribute: 's',
          type: Number,
          reflect: true
        },
        d: {
          attribute: false,
          type: Number,
          reflect: false
        }
      };
    }
  }]);

  function SDTEquationHrFar2D() {
    var _this;

    _classCallCheck(this, SDTEquationHrFar2D);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SDTEquationHrFar2D).call(this));
    _this.unequal = false;
    _this.hr = 0;
    _this.far = 0;
    _this.s = 1;

    _this.alignState();

    return _this;
  }

  _createClass(SDTEquationHrFar2D, [{
    key: "alignState",
    value: function alignState() {
      this.d = _sdtEquation.default.hrfar2d(this.hr, this.far, this.s);
    }
  }, {
    key: "sendEvent",
    value: function sendEvent() {
      this.dispatchEvent(new CustomEvent('sdt-equation-hrfar2d-change', {
        detail: {
          hr: this.hr,
          far: this.far,
          s: this.s,
          d: this.d
        },
        bubbles: true
      }));
    }
  }, {
    key: "hrInput",
    value: function hrInput(event) {
      this.hr = parseFloat(event.target.value);
      this.alignState();
      this.sendEvent();
    }
  }, {
    key: "farInput",
    value: function farInput(event) {
      this.far = parseFloat(event.target.value);
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
      var hr;
      var far;
      var s;
      var d;

      if (this.numeric) {
        hr = (0, _litElement.html)(_templateObject(), !this.interactive, this.hr, this.hrInput.bind(this));
        far = (0, _litElement.html)(_templateObject2(), !this.interactive, this.far, this.farInput.bind(this));
        s = (0, _litElement.html)(_templateObject3(), !this.interactive, this.s, this.sInput.bind(this));
        d = (0, _litElement.html)(_templateObject4(), +this.d.toFixed(3));
      } else {
        hr = (0, _litElement.html)(_templateObject5());
        far = (0, _litElement.html)(_templateObject6());
        s = (0, _litElement.html)(_templateObject7());
        d = (0, _litElement.html)(_templateObject8());
      }

      var equation;

      if (this.unequal) {
        equation = (0, _litElement.html)(_templateObject9(), d, s, s, hr, far);
      } else {
        equation = (0, _litElement.html)(_templateObject10(), d, hr, far);
      }

      return (0, _litElement.html)(_templateObject11(), equation);
    }
  }]);

  return SDTEquationHrFar2D;
}(_sdtEquation.default);

exports.default = SDTEquationHrFar2D;
customElements.define('sdt-equation-hrfar2d', SDTEquationHrFar2D);
//# sourceMappingURL=hrfar2d.js.map
