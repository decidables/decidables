"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _litElement = require("lit-element");

var _sdtElement = _interopRequireDefault(require("../sdt-element"));

var _styleSpinner = _interopRequireDefault(require("../mixins/styleSpinner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        :host {\n          display: block;\n\n          margin: 1rem;\n        }\n\n        /* Containing <div> */\n        .holder {\n          display: flex;\n\n          flex-direction: row;\n\n          justify-content: left;\n        }\n\n        /* Overall <table> */\n        .equation {\n          text-align: center;\n\n          border-collapse: collapse;\n\n          border: 0;\n        }\n\n        /* Modifies <td> */\n        .underline {\n          border-bottom: 1px solid var(---color-text);\n        }\n\n        /* Basic <span> and <var> w/modifiers */\n        span,\n        var {\n          padding: 0 0.25rem;\n\n          font-style: normal;\n        }\n\n        .tight {\n          padding: 0;\n        }\n\n        .paren {\n          font-size: 150%;\n        }\n\n        .bracket {\n          font-size: 175%;\n        }\n\n        .exp {\n          font-size: 0.75rem;\n        }\n\n        /* Input wrapping <label> */\n        label {\n          display: inline-flex;\n\n          flex-direction: column;\n\n          align-items: center;\n\n          padding: 0.125rem 0.375rem 0.375rem;\n\n          vertical-align: middle;\n        }\n\n        .bottom {\n          vertical-align: bottom;\n        }\n\n        /* Nested <var> */\n        label var {\n          font-size: 0.75rem;\n        }\n\n        /* User <input> */\n        input {\n          width: 4rem;\n\n          background: none;\n        }\n\n        /* Color scheme */\n        .h,\n        .h input {\n          background: var(---color-h-light);\n        }\n\n        .m,\n        .m input {\n          background: var(---color-m-light);\n        }\n\n        .hr,\n        .hr input {\n          background: var(---color-hr-light);\n        }\n\n        .fa,\n        .fa input {\n          background: var(---color-fa-light);\n        }\n\n        .acc,\n        .acc input {\n          background: var(---color-acc-light);\n        }\n\n        .cr,\n        .cr input {\n          background: var(---color-cr-light);\n        }\n\n        .far,\n        .far input {\n          background: var(---color-far-light);\n        }\n\n        .d,\n        .d input {\n          background: var(---color-d-light);\n        }\n\n        .c,\n        .c input {\n          background: var(---color-c-light);\n        }\n\n        .s,\n        .s input {\n          background: var(---color-s-light);\n        }\n      "]);

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

/*
  SDTEquation Base Class - Not intended for instantiation!
  <sdt-equation>
*/
var SDTEquation = /*#__PURE__*/function (_SDTMixinStyleSpinner) {
  _inherits(SDTEquation, _SDTMixinStyleSpinner);

  _createClass(SDTEquation, null, [{
    key: "properties",
    get: function get() {
      return {
        numeric: {
          attribute: 'numeric',
          type: Boolean,
          reflect: true
        }
      };
    }
  }]);

  function SDTEquation() {
    var _this;

    _classCallCheck(this, SDTEquation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SDTEquation).call(this));
    _this.numeric = false;
    return _this;
  }

  _createClass(SDTEquation, null, [{
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(SDTEquation), "styles", this), (0, _litElement.css)(_templateObject())];
    }
  }]);

  return SDTEquation;
}((0, _styleSpinner.default)(_sdtElement.default));

exports.default = SDTEquation;
//# sourceMappingURL=sdt-equation.js.map
