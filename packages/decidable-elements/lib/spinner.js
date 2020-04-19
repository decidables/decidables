"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ifDefined = require("lit-html/directives/if-defined");

var _litElement = require("lit-element");

var _decidableElement = _interopRequireDefault(require("./decidable-element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        :host {\n          display: block;\n        }\n\n        label {\n          position: relative;\n          display: flex;\n\n          flex-direction: column;\n\n          align-items: center;\n\n          margin: 0;\n\n          font-size: 0.75rem;\n        }\n\n        label::before {\n          position: absolute;\n          bottom: 1px;\n          left: calc(50% - var(--decidable-spinner-input-width, 4rem) / 2 + 0.25rem);\n\n          font-size: 1.125rem;\n          line-height: normal;\n\n          content: var(--decidable-spinner-prefix, \"\");\n        }\n\n        input[type=number] {\n          width: var(--decidable-spinner-input-width, 4rem);\n\n          font-family: var(---font-family-base);\n          font-size: 1.125rem;\n          color: inherit;\n          text-align: right;\n\n          background: none;\n          border: 0;\n          border-radius: 0;\n          outline: none;\n          box-shadow: var(---shadow-2);\n\n          -webkit-appearance: none; /* stylelint-disable-line property-no-vendor-prefix */\n        }\n\n        input[type=number]:hover {\n          box-shadow: var(---shadow-4);\n        }\n\n        input[type=number]:focus,\n        input[type=number]:active {\n          box-shadow: var(---shadow-8);\n        }\n\n        input[type=number]:disabled {\n          color: var(---color-text);\n\n          border: 0;\n          box-shadow: none;\n\n          /* HACK: Use correct text color in Safari */\n          -webkit-opacity: 1;\n          /* HACK: Hide spinners in disabled input for Firefox and Safari */\n          -moz-appearance: textfield; /* stylelint-disable-line property-no-vendor-prefix */\n          /* HACK: Use correct text color in Safari */\n          -webkit-text-fill-color: var(---color-text);\n        }\n\n        /* HACK: Hide spinners in disabled input for Firefox and Safari */\n        input[type=number]:disabled::-webkit-outer-spin-button,\n        input[type=number]:disabled::-webkit-inner-spin-button {\n          margin: 0;\n          -webkit-appearance: none; /* stylelint-disable-line property-no-vendor-prefix */\n        }\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <label>\n        <slot></slot>\n        <input ?disabled=", " type=\"number\" min=", " max=", " step=", " .value=", " @input=", ">\n      </label>\n    "]);

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

var DecidableSpinner = /*#__PURE__*/function (_DecidableElement) {
  _inherits(DecidableSpinner, _DecidableElement);

  _createClass(DecidableSpinner, null, [{
    key: "properties",
    get: function get() {
      return {
        disabled: {
          attribute: 'disabled',
          type: Boolean,
          reflect: true
        },
        max: {
          attribute: 'max',
          type: Number,
          reflect: true
        },
        min: {
          attribute: 'min',
          type: Number,
          reflect: true
        },
        step: {
          attribute: 'step',
          type: Number,
          reflect: true
        },
        value: {
          attribute: 'value',
          type: Number,
          reflect: true
        }
      };
    }
  }]);

  function DecidableSpinner() {
    var _this;

    _classCallCheck(this, DecidableSpinner);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DecidableSpinner).call(this)); // Attributes

    _this.disabled = false;
    _this.max = undefined;
    _this.min = undefined;
    _this.step = undefined;
    _this.value = undefined;
    return _this;
  }

  _createClass(DecidableSpinner, [{
    key: "inputted",
    value: function inputted(event) {
      this.value = event.target.value;
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _litElement.html)(_templateObject(), this.disabled, (0, _ifDefined.ifDefined)(this.min), (0, _ifDefined.ifDefined)(this.max), (0, _ifDefined.ifDefined)(this.step), this.value, this.inputted.bind(this));
    }
  }], [{
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(DecidableSpinner), "styles", this), (0, _litElement.css)(_templateObject2())];
    }
  }]);

  return DecidableSpinner;
}(_decidableElement.default);

exports.default = DecidableSpinner;
customElements.define('decidable-spinner', DecidableSpinner);
//# sourceMappingURL=spinner.js.map
