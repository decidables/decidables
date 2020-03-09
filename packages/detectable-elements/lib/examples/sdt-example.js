"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _litElement = require("lit-element");

var _sdtElement = _interopRequireDefault(require("../sdt-element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        :host {\n          ---border: var(--border, 1px solid var(---color-border));\n          display: inline-block;\n\n          /* This makes IE11 happy */\n          width: 100%;\n\n          margin-bottom: 1rem;\n        }\n\n        .holder {\n          display: flex;\n        }\n\n        .body {\n          display: flex;\n\n          flex-wrap: wrap;\n\n          align-items: center;\n          justify-content: left;\n\n          padding: 0.625rem;\n\n          border: var(---border);\n          border-radius: 0.25rem;\n        }\n\n        .body ::slotted(*) {\n          margin: 0.625rem;\n        }\n\n        /* HACK: Sibling selectors not working with ::slotted */\n        /* .body > rdk-task + sdt-response,\n        ::slotted(rdk-task) + ::slotted(sdt-response) { */\n        .body ::slotted(sdt-response) {\n          margin-left: 0;\n        }\n\n        /* HACK: Sibling selectors not working with ::slotted */\n        /* .body > sdt-control + rdk-task,\n        ::slotted(sdt-control) + ::slotted(rdk-task) {\n          margin-left: 0;\n        } */\n        .body ::slotted(rdk-task) {\n          width: 10rem;\n          height: 10rem;\n          margin-left: 0;\n        }\n\n        .body ::slotted(roc-space) {\n          width: 20rem;\n          height: 20rem;\n        }\n\n        .body ::slotted(sdt-model) {\n          width: 27rem;\n          height: 15rem;\n        }\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <div class=\"holder\">\n        <div class=\"body\">\n          <slot>Empty!</slot>\n        </div>\n      </div>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
  SDTExample Base Class - Not intended for instantiation!
  <sdt-example>
*/
var SDTExample = /*#__PURE__*/function (_SDTElement) {
  _inherits(SDTExample, _SDTElement);

  function SDTExample() {
    _classCallCheck(this, SDTExample);

    return _possibleConstructorReturn(this, _getPrototypeOf(SDTExample).apply(this, arguments));
  }

  _createClass(SDTExample, [{
    key: "render",
    value: function render() {
      // eslint-disable-line class-methods-use-this
      return (0, _litElement.html)(_templateObject());
    }
  }], [{
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(SDTExample), "styles", this), (0, _litElement.css)(_templateObject2())];
    }
  }]);

  return SDTExample;
}(_sdtElement.default);

exports.default = SDTExample;
customElements.define('sdt-example', SDTExample);
//# sourceMappingURL=sdt-example.js.map
