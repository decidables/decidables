"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _litElement = require("lit-element");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n          /* Adapted from http://danielstern.ca/range.css/#/ */\n          /* Overall */\n          input[type=range] {\n            width: 4.75rem;\n            height: 3.5rem;\n            padding: 0;\n            margin: 0;\n\n            background-color: unset;\n\n            transform: rotate(-90deg);\n            transform-origin: 2.375rem 2.375rem;\n\n            /* stylelint-disable-next-line property-no-vendor-prefix */\n            -webkit-appearance: none;\n          }\n\n          input[type=range]:enabled {\n            cursor: ns-resize;\n          }\n\n          input[type=range]:focus {\n            outline: none;\n          }\n\n          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n          input[type=range]::-ms-tooltip {\n            display: none;\n          }\n\n          /* Track */\n          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n          input[type=range]::-webkit-slider-runnable-track {\n            width: 100%;\n            height: 4px;\n\n            background: var(---color-element-disabled);\n            border: 0;\n            border-radius: 2px;\n            box-shadow: none;\n          }\n\n          input[type=range]:focus::-webkit-slider-runnable-track {\n            background: var(---color-element-disabled);\n          }\n\n          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n          input[type=range]::-moz-range-track {\n            width: 100%;\n            height: 4px;\n\n            background: var(---color-element-disabled);\n            border: 0;\n            border-radius: 2px;\n            box-shadow: none;\n          }\n\n          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n          input[type=range]::-ms-track {\n            width: 100%;\n            height: 4px;\n\n            color: transparent;\n\n            background: transparent;\n            border-color: transparent;\n          }\n\n          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n          input[type=range]::-ms-fill-lower {\n            background: #cccccc;\n            /* background: var(---color-element-disabled); */\n            border: 0;\n            border-radius: 2px;\n            box-shadow: none;\n          }\n\n          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n          input[type=range]::-ms-fill-upper {\n            background: #cccccc;\n            /* background: var(---color-element-disabled); */\n            border: 0;\n            border-radius: 2px;\n            box-shadow: none;\n          }\n\n          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n          input[type=range]:focus::-ms-fill-lower {\n            background: var(---color-element-disabled);\n          }\n\n          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n          input[type=range]:focus::-ms-fill-upper {\n            background: var(---color-element-disabled);\n          }\n\n          /* Thumb */\n          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n          input[type=range]::-webkit-slider-thumb {\n            width: 10px;\n            height: 20px;\n            margin-top: -8px;\n\n            border: 0;\n            border-radius: 4px;\n\n            /* stylelint-disable-next-line property-no-vendor-prefix */\n            -webkit-appearance: none;\n          }\n\n          input[type=range]:disabled::-webkit-slider-thumb {\n            background: var(---color-element-disabled);\n            box-shadow: none;\n          }\n\n          input[type=range]:enabled::-webkit-slider-thumb {\n            background: var(---color-element-enabled);\n            box-shadow: var(---shadow-2-rotate);\n          }\n\n          input[type=range]:enabled:hover::-webkit-slider-thumb {\n            box-shadow: var(---shadow-4-rotate);\n          }\n\n          input[type=range]:enabled:active::-webkit-slider-thumb {\n            box-shadow: var(---shadow-8-rotate);\n          }\n\n          :host(.keyboard) input[type=range]:enabled:focus::-webkit-slider-thumb {\n            box-shadow: var(---shadow-4-rotate);\n          }\n\n          :host(.keyboard) input[type=range]:focus:active::-webkit-slider-thumb {\n            box-shadow: var(---shadow-8-rotate);\n          }\n\n          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n          input[type=range]::-moz-range-thumb {\n            width: 10px;\n            height: 20px;\n\n            border: 0;\n            border-radius: 4px;\n          }\n\n          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n          input[type=range]:disabled::-moz-range-thumb {\n            background: var(---color-element-disabled);\n            box-shadow: none;\n          }\n\n          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n          input[type=range]:enabled::-moz-range-thumb {\n            background: var(---color-element-enabled);\n            box-shadow: var(---shadow-2-rotate);\n          }\n\n          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n          input[type=range]:enabled:hover::-moz-range-thumb {\n            box-shadow: var(---shadow-4-rotate);\n          }\n\n          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n          input[type=range]:enabled:active::-moz-range-thumb {\n            box-shadow: var(---shadow-8-rotate);\n          }\n\n          :host(.keyboard) input[type=range]:enabled:focus::-moz-range-thumb {\n            box-shadow: var(---shadow-4-rotate);\n          }\n\n          :host(.keyboard) input[type=range]:enabled:focus:active::-moz-range-thumb {\n            box-shadow: var(---shadow-8-rotate);\n          }\n\n          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n          input[type=range]::-ms-thumb {\n            width: 10px;\n            height: 20px;\n            margin-top: 0;\n\n            background: #999999;\n            /* background: var(---color-element-enabled); */\n            border: 0;\n            border-radius: 4px;\n            box-shadow: var(---shadow-2-rotate);\n          }\n\n          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n          input[type=range]:disabled::-ms-thumb {\n            background: var(---color-element-disabled);\n            box-shadow: none;\n          }\n\n          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n          input[type=range]:enabled::-ms-thumb {\n            background: var(---color-element-enabled);\n            box-shadow: var(---shadow-2-rotate);\n          }\n\n          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n          input[type=range]:enabled:hover::-ms-thumb {\n            box-shadow: var(---shadow-4-rotate);\n          }\n\n          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n          input[type=range]:enabled:active::-ms-thumb {\n            box-shadow: var(---shadow-8-rotate);\n          }\n\n          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */\n          :host(.keyboard) input[type=range]:enabled:focus::-ms-thumb {\n            box-shadow: var(---shadow-4-rotate);\n          }\n\n          :host(.keyboard) input[type=range]:enabled:focus:active::-ms-thumb {\n            box-shadow: var(---shadow-8-rotate);\n          }\n        "]);

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
//# sourceMappingURL=styleSlider.js.map
