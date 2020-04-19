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
  var data = _taggedTemplateLiteral(["\n        fieldset {\n          display: flex;\n\n          flex-direction: column;\n\n          align-items: stretch;\n          justify-content: center;\n\n          margin: 0.25rem;\n\n          border: 0;\n        }\n\n        legend {\n          text-align: center;\n        }\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <fieldset ?disabled=", ">\n        <legend><slot name=\"label\"></slot></legend>\n        <slot></slot>\n      </fieldset>\n    "]);

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

var DecidableToggle = /*#__PURE__*/function (_DecidableElement) {
  _inherits(DecidableToggle, _DecidableElement);

  _createClass(DecidableToggle, null, [{
    key: "properties",
    get: function get() {
      return {
        disabled: {
          attribute: 'disabled',
          type: Boolean,
          reflect: true
        }
      };
    }
  }]);

  function DecidableToggle() {
    var _this;

    _classCallCheck(this, DecidableToggle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DecidableToggle).call(this)); // Attributes

    _this.disabled = false;
    return _this;
  }

  _createClass(DecidableToggle, [{
    key: "render",
    value: function render() {
      return (0, _litElement.html)(_templateObject(), this.disabled);
    }
  }], [{
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(DecidableToggle), "styles", this), (0, _litElement.css)(_templateObject2())];
    }
  }]);

  return DecidableToggle;
}(_decidableElement.default);

exports.default = DecidableToggle;
customElements.define('decidable-toggle', DecidableToggle);
//# sourceMappingURL=toggle.js.map
