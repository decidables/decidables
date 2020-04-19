"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _litElement = require("lit-element");

var _decidableElement = _interopRequireDefault(require("./decidable-element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        :host {\n          display: flex;\n\n          flex-direction: column;\n\n          align-items: center;\n          justify-content: center;\n        }\n\n        /* Adapted from https://codepen.io/guuslieben/pen/YyPRVP */\n        input[type=checkbox] {\n          /* visuallyhidden: https://github.com/h5bp/html5-boilerplate/blob/master/dist/doc/css.md */\n          position: absolute;\n\n          width: 1px;\n          height: 1px;\n          padding: 0;\n          margin: -1px;\n          overflow: hidden;\n          clip: rect(0 0 0 0);\n\n          white-space: nowrap;\n\n          border: 0;\n          clip-path: inset(100%); /* May cause a performance issue: https://github.com/h5bp/html5-boilerplate/issues/2021 */\n        }\n\n        input[type=checkbox] + label {\n          order: 1;\n\n          margin: 0 0.25rem 0.25rem;\n\n          font-weight: 400;\n        }\n\n        input[type=checkbox] + label + label {\n          position: relative;\n\n          min-width: 24px;\n          padding: 0 0 36px;\n          margin: 0.25rem 0.25rem 0;\n\n          font-weight: 400;\n\n          outline: none;\n        }\n\n        input[type=checkbox] + label + label::before,\n        input[type=checkbox] + label + label::after {\n          position: absolute;\n\n          left: 50%;\n\n          margin: 0;\n\n          content: \"\";\n\n          outline: 0;\n\n          transition: all var(---transition-duration) ease;\n          transform: translate(-50%, 0);\n        }\n\n        input[type=checkbox] + label + label::before {\n          bottom: 1px;\n\n          width: 8px;\n          height: 34px;\n\n          background-color: var(---color-element-disabled);\n          border-radius: 4px;\n        }\n\n        input[type=checkbox] + label + label::after {\n          bottom: 0;\n\n          width: 18px;\n          height: 18px;\n\n          background-color: var(---color-element-enabled);\n          border-radius: 50%;\n          box-shadow: var(---shadow-2);\n        }\n\n        input[type=checkbox]:checked + label + label::after {\n          transform: translate(-50%, -100%);\n        }\n\n        input[type=checkbox]:disabled + label + label::after {\n          background-color: var(---color-element-disabled);\n          box-shadow: none;\n        }\n\n        input[type=checkbox]:enabled + label,\n        input[type=checkbox]:enabled + label + label {\n          cursor: pointer;\n        }\n\n        input[type=checkbox]:enabled + label:hover + label::after,\n        input[type=checkbox]:enabled + label + label:hover::after {\n          box-shadow: var(---shadow-4);\n        }\n\n        input[type=checkbox]:enabled + label:active + label::after,\n        input[type=checkbox]:enabled + label + label:active::after {\n          box-shadow: var(---shadow-8);\n        }\n\n        /* stylelint-disable-next-line selector-max-compound-selectors */\n        :host(.keyboard) input[type=checkbox]:enabled:focus + label + label::after {\n          box-shadow: var(---shadow-4);\n        }\n\n        /* stylelint-disable-next-line selector-max-compound-selectors */\n        :host(.keyboard) input[type=checkbox]:enabled:focus + label + label:active::after,\n        :host(.keyboard) input[type=checkbox]:enabled:focus:active + label + label::after {\n          box-shadow: var(---shadow-8);\n        }\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <input type=\"checkbox\" id=", " ?checked=", " ?disabled=", " @change=", ">\n      <label for=", ">\n        <slot name=\"off-label\"></slot>\n      </label>\n      <label for=", ">\n        <slot></slot>\n      </label>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DecidableSwitch = /*#__PURE__*/function (_DecidableElement) {
  _inherits(DecidableSwitch, _DecidableElement);

  _createClass(DecidableSwitch, null, [{
    key: "properties",
    get: function get() {
      return {
        checked: {
          attribute: 'checked',
          type: Boolean,
          reflect: true
        },
        disabled: {
          attribute: 'disabled',
          type: Boolean,
          reflect: true
        }
      };
    }
  }]);

  function DecidableSwitch() {
    var _this;

    _classCallCheck(this, DecidableSwitch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DecidableSwitch).call(this)); // Attributes

    _this.checked = false;
    _this.disabled = false;
    return _this;
  }

  _createClass(DecidableSwitch, [{
    key: "changed",
    value: function changed(event) {
      this.checked = event.target.checked;
      this.dispatchEvent(new CustomEvent('change', {
        detail: {
          checked: this.checked
        },
        bubbles: true
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _litElement.html)(_templateObject(), "".concat(this.uniqueId, "-checkbox"), this.checked, this.disabled, this.changed.bind(this), "".concat(this.uniqueId, "-checkbox"), "".concat(this.uniqueId, "-checkbox"));
    }
  }], [{
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(DecidableSwitch), "styles", this), (0, _litElement.css)(_templateObject2())];
    }
  }]);

  return DecidableSwitch;
}(_decidableElement.default);

exports.default = DecidableSwitch;
customElements.define('decidable-switch', DecidableSwitch);
//# sourceMappingURL=switch.js.map
