"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _litElement = require("lit-element");

var d3 = _interopRequireWildcard(require("d3"));

var _decidableElements = require("@decidable/decidable-elements");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        :host {\n          ---color-h: var(--color-h, ", ");\n          ---color-m: var(--color-m, ", ");\n          ---color-fa: var(--color-fa, ", ");\n          ---color-cr: var(--color-cr, ", ");\n          ---color-hr: var(--color-hr, ", ");\n          ---color-far: var(--color-far, ", ");\n          ---color-acc: var(--color-acc, ", ");\n          ---color-d: var(--color-d, ", ");\n          ---color-c: var(--color-c, ", ");\n          ---color-s: var(--color-s, ", ");\n          ---color-present: var(--color-present, ", ");\n          ---color-absent: var(--color-absent, ", ");\n          ---color-correct: var(--color-correct, ", ");\n          ---color-error: var(--color-error, ", ");\n          ---color-nr: var(--color-nr, ", ");\n\n          ---color-h-light: var(--color-h-light, ", ");\n          ---color-m-light: var(--color-m-light, ", ");\n          ---color-fa-light: var(--color-fa-light, ", ");\n          ---color-cr-light: var(--color-cr-light, ", ");\n          ---color-hr-light: var(--color-hr-light, ", ");\n          ---color-far-light: var(--color-far-light, ", ");\n          ---color-acc-light: var(--color-acc-light, ", ");\n          ---color-d-light: var(--color-d-light, ", ");\n          ---color-c-light: var(--color-c-light, ", ");\n          ---color-s-light: var(--color-s-light, ", ");\n          ---color-present-light: var(--color-present-light, ", ");\n          ---color-absent-light: var(--color-absent-light, ", ");\n          ---color-correct-light: var(--color-correct-light, ", ");\n          ---color-error-light: var(--color-error-light, ", ");\n          ---color-nr-light: var(--color-nr-light, ", ");\n\n          ---color-h-dark: var(--color-h-dark, ", ");\n          ---color-m-dark: var(--color-m-dark, ", ");\n          ---color-fa-dark: var(--color-fa-dark, ", ");\n          ---color-cr-dark: var(--color-cr-dark, ", ");\n          ---color-hr-dark: var(--color-hr-dark, ", ");\n          ---color-far-dark: var(--color-far-dark, ", ");\n          ---color-acc-dark: var(--color-acc-dark, ", ");\n          ---color-d-dark: var(--color-d-dark, ", ");\n          ---color-c-dark: var(--color-c-dark, ", ");\n          ---color-s-dark: var(--color-s-dark, ", ");\n          ---color-present-dark: var(--color-present-dark, ", ");\n          ---color-absent-dark: var(--color-absent-dark, ", ");\n          ---color-correct-dark: var(--color-correct-dark, ", ");\n          ---color-error-dark: var(--color-error-dark, ", ");\n          ---color-nr-dark: var(--color-nr-dark, ", ");\n        }\n      "]);

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
  SDTElement Base Class - Not intended for instantiation!
  <sdt-element>
*/
var SDTElement = /*#__PURE__*/function (_DecidableElement) {
  _inherits(SDTElement, _DecidableElement);

  _createClass(SDTElement, null, [{
    key: "properties",
    get: function get() {
      return {
        interactive: {
          attribute: 'interactive',
          type: Boolean,
          reflect: true
        }
      };
    }
  }]);

  function SDTElement() {
    var _this;

    _classCallCheck(this, SDTElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SDTElement).call(this));
    _this.interactive = false;
    return _this;
  }

  _createClass(SDTElement, null, [{
    key: "colors",
    get: function get() {
      return {
        h: d3.schemeSet1[2],
        m: d3.schemeSet1[4],
        fa: d3.schemeSet1[1],
        cr: d3.schemeSet1[0],
        hr: d3.schemeSet1[5],
        far: d3.schemeSet1[3],
        acc: d3.schemeSet1[8],
        d: d3.schemeSet1[7],
        c: d3.schemeSet1[6],
        s: '#4545d0',
        present: '#f032e6',
        absent: '#10dbc9',
        correct: '#ffffff',
        error: '#000000',
        nr: '#cccccc'
      };
    }
  }, {
    key: "lights",
    get: function get() {
      return Object.keys(SDTElement.colors).reduce(function (acc, cur) {
        acc[cur] = d3.interpolateRgb(SDTElement.colors[cur], '#ffffff')(0.5);
        return acc;
      }, {});
    }
  }, {
    key: "darks",
    get: function get() {
      return Object.keys(SDTElement.colors).reduce(function (acc, cur) {
        acc[cur] = d3.interpolateRgb(SDTElement.colors[cur], '#000000')(0.5);
        return acc;
      }, {});
    }
  }, {
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(SDTElement), "styles", this), (0, _litElement.css)(_templateObject(), (0, _litElement.unsafeCSS)(this.colors.h), (0, _litElement.unsafeCSS)(this.colors.m), (0, _litElement.unsafeCSS)(this.colors.fa), (0, _litElement.unsafeCSS)(this.colors.cr), (0, _litElement.unsafeCSS)(this.colors.hr), (0, _litElement.unsafeCSS)(this.colors.far), (0, _litElement.unsafeCSS)(this.colors.acc), (0, _litElement.unsafeCSS)(this.colors.d), (0, _litElement.unsafeCSS)(this.colors.c), (0, _litElement.unsafeCSS)(this.colors.s), (0, _litElement.unsafeCSS)(this.colors.present), (0, _litElement.unsafeCSS)(this.colors.absent), (0, _litElement.unsafeCSS)(this.colors.correct), (0, _litElement.unsafeCSS)(this.colors.error), (0, _litElement.unsafeCSS)(this.colors.nr), (0, _litElement.unsafeCSS)(this.lights.h), (0, _litElement.unsafeCSS)(this.lights.m), (0, _litElement.unsafeCSS)(this.lights.fa), (0, _litElement.unsafeCSS)(this.lights.cr), (0, _litElement.unsafeCSS)(this.lights.hr), (0, _litElement.unsafeCSS)(this.lights.far), (0, _litElement.unsafeCSS)(this.lights.acc), (0, _litElement.unsafeCSS)(this.lights.d), (0, _litElement.unsafeCSS)(this.lights.c), (0, _litElement.unsafeCSS)(this.lights.s), (0, _litElement.unsafeCSS)(this.lights.present), (0, _litElement.unsafeCSS)(this.lights.absent), (0, _litElement.unsafeCSS)(this.lights.correct), (0, _litElement.unsafeCSS)(this.lights.error), (0, _litElement.unsafeCSS)(this.lights.nr), (0, _litElement.unsafeCSS)(this.darks.h), (0, _litElement.unsafeCSS)(this.darks.m), (0, _litElement.unsafeCSS)(this.darks.fa), (0, _litElement.unsafeCSS)(this.darks.cr), (0, _litElement.unsafeCSS)(this.darks.hr), (0, _litElement.unsafeCSS)(this.darks.far), (0, _litElement.unsafeCSS)(this.darks.acc), (0, _litElement.unsafeCSS)(this.darks.d), (0, _litElement.unsafeCSS)(this.darks.c), (0, _litElement.unsafeCSS)(this.darks.s), (0, _litElement.unsafeCSS)(this.darks.present), (0, _litElement.unsafeCSS)(this.darks.absent), (0, _litElement.unsafeCSS)(this.darks.correct), (0, _litElement.unsafeCSS)(this.darks.error), (0, _litElement.unsafeCSS)(this.darks.nr))];
    }
  }]);

  return SDTElement;
}(_decidableElements.DecidableElement);

exports.default = SDTElement;
//# sourceMappingURL=sdt-element.js.map
