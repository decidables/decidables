"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var d3 = _interopRequireWildcard(require("d3"));

var _sdtExample = _interopRequireDefault(require("./sdt-example"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
  SDTExampleUnequal element
  <sdt-example-unequal>
*/
var SDTExampleUnequal = /*#__PURE__*/function (_SDTExample) {
  _inherits(SDTExampleUnequal, _SDTExample);

  function SDTExampleUnequal() {
    _classCallCheck(this, SDTExampleUnequal);

    return _possibleConstructorReturn(this, _getPrototypeOf(SDTExampleUnequal).apply(this, arguments));
  }

  _createClass(SDTExampleUnequal, [{
    key: "firstUpdated",
    value: function firstUpdated()
    /* changedProperties */
    {
      var _this = this;

      this.sdtControl = this.querySelector('sdt-control');
      this.rocSpace = this.querySelector('roc-space');
      this.sdtModel = this.querySelector('sdt-model');

      if (this.sdtControl) {
        this.sdtControl.addEventListener('sdt-control-z-roc', function (event) {
          _this.rocSpace.zRoc = event.detail.zRoc;
        });
      }

      if (this.rocSpace) {
        this.rocSpace.setWithSDT(1, 0, 'default', '', 1); // Set 'default' to equal variance for contours
      }

      if (this.sdtModel) {
        if (this.rocSpace) {
          d3.range(-1.5, 1.6, 0.5).forEach(function (c, index) {
            _this.rocSpace.setWithSDT(_this.sdtModel.d, c, "point".concat(index), '', _this.sdtModel.s);
          });
        }

        this.sdtModel.addEventListener('sdt-model-change', function (event) {
          if (_this.rocSpace) {
            d3.range(-1.5, 1.6, 0.5).forEach(function (c, index) {
              _this.rocSpace.setWithSDT(event.detail.d, c, "point".concat(index), '', event.detail.s);
            });
          }
        });
      }
    }
  }]);

  return SDTExampleUnequal;
}(_sdtExample.default);

exports.default = SDTExampleUnequal;
customElements.define('sdt-example-unequal', SDTExampleUnequal);
//# sourceMappingURL=unequal.js.map
