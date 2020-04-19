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
  var data = _taggedTemplateLiteral(["\n        :host {\n          display: flex;\n        }\n\n        input[type=radio] {\n          /* visuallyhidden: https://github.com/h5bp/html5-boilerplate/blob/master/dist/doc/css.md */\n          position: absolute;\n\n          width: 1px;\n          height: 1px;\n          padding: 0;\n          margin: -1px;\n          overflow: hidden;\n          clip: rect(0 0 0 0);\n\n          white-space: nowrap;\n\n          border: 0;\n          clip-path: inset(100%); /* May cause a performance issue: https://github.com/h5bp/html5-boilerplate/issues/2021 */\n        }\n\n        input[type=radio] + label {\n          width: 100%;\n          padding: 0.375rem 0.75rem;\n\n          font-family: var(---font-family-base);\n          font-size: 1.125rem;\n          line-height: 1.5;\n          color: var(---color-text-inverse);\n          text-align: center;\n\n          cursor: pointer;\n\n          background-color: var(---color-element-enabled);\n          border: 0;\n          border-radius: 0;\n          outline: none;\n\n          box-shadow: var(---shadow-2);\n        }\n\n        input[type=radio]:checked + label {\n          background-color: var(---color-element-selected);\n          outline: none;\n          box-shadow: var(---shadow-2);\n        }\n\n        input[type=radio] + label:hover {\n          z-index: 1;\n\n          outline: none;\n          box-shadow: var(---shadow-4);\n        }\n\n        input[type=radio] + label:active {\n          z-index: 2;\n\n          outline: none;\n          box-shadow: var(---shadow-8);\n        }\n\n        :host(:first-of-type) input[type=radio] + label {\n          border-top-left-radius: 0.25rem;\n          border-top-right-radius: 0.25rem;\n        }\n\n        :host(:last-of-type) input[type=radio] + label {\n          border-bottom-right-radius: 0.25rem;\n          border-bottom-left-radius: 0.25rem;\n        }\n\n        :host(.keyboard) input[type=radio]:focus + label {\n          z-index: 1;\n\n          outline: none;\n          box-shadow: var(---shadow-4);\n        }\n\n        :host(.keyboard) input[type=radio]:focus:checked + label {\n          z-index: 1;\n\n          background-color: var(---color-element-selected);\n          outline: none;\n          box-shadow: var(---shadow-4);\n        }\n\n        :host(.keyboard) input[type=radio]:focus + label:active {\n          z-index: 2;\n\n          outline: none;\n          box-shadow: var(---shadow-8);\n        }\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <input type=\"radio\" id=", " name=", " value=", " .checked=", " @change=", ">\n      <label for=", ">\n        <slot></slot>\n      </label>\n    "]);

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

var DecidableToggleOption = /*#__PURE__*/function (_DecidableElement) {
  _inherits(DecidableToggleOption, _DecidableElement);

  _createClass(DecidableToggleOption, null, [{
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
        },
        name: {
          attribute: 'name',
          type: String,
          reflect: true
        },
        value: {
          attribute: 'value',
          type: String,
          reflect: true
        }
      };
    }
  }]);

  function DecidableToggleOption() {
    var _this;

    _classCallCheck(this, DecidableToggleOption);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DecidableToggleOption).call(this)); // Attributes

    _this.checked = false;
    _this.disabled = false;
    _this.name = undefined;
    _this.value = undefined;
    return _this;
  }

  _createClass(DecidableToggleOption, [{
    key: "changed",
    value: function changed(event) {
      this.checked = event.target.checked;
      this.dispatchEvent(new CustomEvent('change', {
        detail: {
          checked: this.checked,
          value: this.value
        },
        bubbles: true
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _litElement.html)(_templateObject(), "".concat(this.uniqueId, "-radio"), this.name, this.value, this.checked, this.changed.bind(this), "".concat(this.uniqueId, "-radio"));
    }
  }], [{
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(DecidableToggleOption), "styles", this), (0, _litElement.css)(_templateObject2())];
    }
  }]);

  return DecidableToggleOption;
}(_decidableElement.default);

exports.default = DecidableToggleOption;
customElements.define('decidable-toggle-option', DecidableToggleOption);
//# sourceMappingURL=toggle-option.js.map
