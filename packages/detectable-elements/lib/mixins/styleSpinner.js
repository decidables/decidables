"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _litElement = require("lit-element");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n          input[type=number] {\n            font-family: var(---font-family-base);\n            font-size: 1.125rem;\n            color: inherit;\n            text-align: right;\n\n            border: 0;\n            border-radius: 0;\n            outline: none;\n            box-shadow: var(---shadow-2);\n\n            -webkit-appearance: none; /* stylelint-disable-line property-no-vendor-prefix */\n          }\n\n          input[type=number]:hover {\n            box-shadow: var(---shadow-4);\n          }\n\n          input[type=number]:focus,\n          input[type=number]:active {\n            box-shadow: var(---shadow-8);\n          }\n\n          input[type=number]:disabled {\n            color: var(---color-text);\n\n            border: 0;\n            box-shadow: none;\n\n            /* HACK: Use correct text color in Safari */\n            -webkit-opacity: 1;\n            /* HACK: Hide spinners in disabled input for Firefox and Safari */\n            -moz-appearance: textfield; /* stylelint-disable-line property-no-vendor-prefix */\n            /* HACK: Use correct text color in Safari */\n            -webkit-text-fill-color: var(---color-text);\n          }\n\n          /* HACK: Hide spinners in disabled input for Firefox and Safari */\n          input[type=number]:disabled::-webkit-outer-spin-button,\n          input[type=number]:disabled::-webkit-inner-spin-button {\n            margin: 0;\n            -webkit-appearance: none; /* stylelint-disable-line property-no-vendor-prefix */\n          }\n        "]);

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

var SDTMixinStyleSpinner = function SDTMixinStyleSpinner(superclass) {
  return (/*#__PURE__*/function (_superclass) {
      _inherits(_class, _superclass);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, null, [{
        key: "styles",
        get: function get() {
          return [_get(_getPrototypeOf(_class), "styles", this), (0, _litElement.css)(_templateObject())];
        }
      }]);

      return _class;
    }(superclass)
  );
};

exports.default = SDTMixinStyleSpinner;
//# sourceMappingURL=styleSpinner.js.map
