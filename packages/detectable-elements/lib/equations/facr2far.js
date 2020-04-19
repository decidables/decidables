"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _litElement = require("lit-element");

var _detectableMath = _interopRequireDefault(require("@decidable/detectable-math"));

var _sdtEquation = _interopRequireDefault(require("./sdt-equation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      <div class=\"holder\">\n        <table class=\"equation\">\n          <tbody>\n            <tr>\n              <td rowspan=\"2\">\n                ", "<span class=\"equals\">=</span>\n              </td>\n              <td class=\"underline\">\n                ", "\n              </td>\n            </tr>\n            <tr>\n              <td>\n                ", "<span class=\"plus\">+</span>", "\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>"]);

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
  var data = _taggedTemplateLiteral(["<var class=\"cr\">Correct Rejections</var>"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["<var class=\"fa\">False Alarms</var>"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        <decidable-spinner class=\"far\" disabled min=\"0\" max=\"1\" step=\".001\" .value=\"", "\">\n          <var>False Alarm Rate</var>\n        </decidable-spinner>\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        <decidable-spinner class=\"cr\" ?disabled=", " min=\"0\" .value=\"", "\" @input=", ">\n          <var>Correct Rejections</var>\n        </decidable-spinner>\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        <decidable-spinner class=\"fa\" ?disabled=", " min=\"0\" .value=\"", "\" @input=", ">\n          <var>False Alarms</var>\n        </decidable-spinner>\n      "]);

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
  SDTEquationFaCr2Far element
  <sdt-equation-facr2far>

  Attributes:
  False Alarms; Correct Rejections; False Alarm Rate;
*/
var SDTEquationFaCr2Far = /*#__PURE__*/function (_SDTEquation) {
  _inherits(SDTEquationFaCr2Far, _SDTEquation);

  _createClass(SDTEquationFaCr2Far, null, [{
    key: "properties",
    get: function get() {
      return {
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
        far: {
          attribute: false,
          type: Number,
          reflect: false
        }
      };
    }
  }]);

  function SDTEquationFaCr2Far() {
    var _this;

    _classCallCheck(this, SDTEquationFaCr2Far);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SDTEquationFaCr2Far).call(this));
    _this.fa = 0;
    _this.cr = 0;

    _this.alignState();

    return _this;
  }

  _createClass(SDTEquationFaCr2Far, [{
    key: "alignState",
    value: function alignState() {
      this.far = _detectableMath.default.faCr2Far(this.fa, this.cr);
    }
  }, {
    key: "sendEvent",
    value: function sendEvent() {
      this.dispatchEvent(new CustomEvent('sdt-equation-facr2far-change', {
        detail: {
          fa: this.fa,
          cr: this.cr,
          far: this.far
        },
        bubbles: true
      }));
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
      var fa;
      var cr;
      var far;

      if (this.numeric) {
        fa = (0, _litElement.html)(_templateObject(), !this.interactive, this.fa, this.faInput.bind(this));
        cr = (0, _litElement.html)(_templateObject2(), !this.interactive, this.cr, this.crInput.bind(this));
        far = (0, _litElement.html)(_templateObject3(), +this.far.toFixed(3));
      } else {
        fa = (0, _litElement.html)(_templateObject4());
        cr = (0, _litElement.html)(_templateObject5());
        far = (0, _litElement.html)(_templateObject6());
      }

      return (0, _litElement.html)(_templateObject7(), far, fa, fa, cr);
    }
  }]);

  return SDTEquationFaCr2Far;
}(_sdtEquation.default);

exports.default = SDTEquationFaCr2Far;
customElements.define('sdt-equation-facr2far', SDTEquationFaCr2Far);
//# sourceMappingURL=facr2far.js.map
