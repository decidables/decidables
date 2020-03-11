"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _detectableMath = _interopRequireDefault(require("@decidable/detectable-math"));

var _sdtExample = _interopRequireDefault(require("./sdt-example"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  SDTExample_DoubleInteractive element
  <sdt-example-interactive>
*/
var SDTExampleDoubleInteractive = /*#__PURE__*/function (_SDTExample) {
  _inherits(SDTExampleDoubleInteractive, _SDTExample);

  function SDTExampleDoubleInteractive() {
    _classCallCheck(this, SDTExampleDoubleInteractive);

    return _possibleConstructorReturn(this, _getPrototypeOf(SDTExampleDoubleInteractive).apply(this, arguments));
  }

  _createClass(SDTExampleDoubleInteractive, [{
    key: "firstUpdated",
    value: function firstUpdated()
    /* changedProperties */
    {
      var _this = this;

      this.one = {};
      this.one.h = 95;
      this.one.m = 5;
      this.one.fa = 35;
      this.one.cr = 65;
      this.one.hr = _detectableMath.default.hM2Hr(this.one.h, this.one.m);
      this.one.far = _detectableMath.default.faCr2Far(this.one.fa, this.one.cr);
      this.one.d = _detectableMath.default.hrFar2D(this.one.hr, this.one.far);
      this.one.c = _detectableMath.default.hrFar2C(this.one.hr, this.one.far);
      this.two = {};
      this.two.h = 40;
      this.two.m = 60;
      this.two.fa = 20;
      this.two.cr = 80;
      this.two.hr = _detectableMath.default.hM2Hr(this.two.h, this.two.m);
      this.two.far = _detectableMath.default.faCr2Far(this.two.fa, this.two.cr);
      this.two.d = _detectableMath.default.hrFar2D(this.two.hr, this.two.far);
      this.two.c = _detectableMath.default.hrFar2C(this.two.hr, this.two.far);
      this.sdtTableOne = this.querySelector('sdt-table:nth-of-type(1)');
      this.sdtTableTwo = this.querySelector('sdt-table:nth-of-type(2)');
      this.rocSpace = this.querySelector('roc-space');
      this.sdtModelOne = this.querySelector('sdt-model:nth-of-type(1)');
      this.sdtModelTwo = this.querySelector('sdt-model:nth-of-type(2)');

      if (this.sdtTableOne) {
        this.sdtTableOne.h = this.one.h;
        this.sdtTableOne.m = this.one.m;
        this.sdtTableOne.fa = this.one.fa;
        this.sdtTableOne.cr = this.one.cr;
        this.sdtTableOne.addEventListener('sdt-table-change', function (event) {
          if (_this.rocSpace) {
            _this.rocSpace.set(event.detail.hr, event.detail.far, 'default', '↑');
          }

          if (_this.sdtModelOne) {
            _this.sdtModelOne.d = _detectableMath.default.hrFar2D(event.detail.hr, event.detail.far);
            _this.sdtModelOne.c = _detectableMath.default.hrFar2C(event.detail.hr, event.detail.far);
          }
        });
      }

      if (this.sdtTableTwo) {
        this.sdtTableTwo.h = this.two.h;
        this.sdtTableTwo.m = this.two.m;
        this.sdtTableTwo.fa = this.two.fa;
        this.sdtTableTwo.cr = this.two.cr;
        this.sdtTableTwo.addEventListener('sdt-table-change', function (event) {
          if (_this.rocSpace) {
            _this.rocSpace.set(event.detail.hr, event.detail.far, 'two', '↓');
          }

          if (_this.sdtModelTwo) {
            _this.sdtModelTwo.d = _detectableMath.default.hrFar2D(event.detail.hr, event.detail.far);
            _this.sdtModelTwo.c = _detectableMath.default.hrFar2C(event.detail.hr, event.detail.far);
          }
        });
      }

      if (this.rocSpace) {
        this.rocSpace.set(this.one.hr, this.one.far, 'default', '↑');
        this.rocSpace.set(this.two.hr, this.two.far, 'two', '↓');
        this.rocSpace.addEventListener('roc-point-change', function (event) {
          if (event.detail.name === 'default' && _this.sdtModelOne) {
            _this.sdtModelOne.d = event.detail.d;
            _this.sdtModelOne.c = event.detail.c;
          } else if (event.detail.name === 'two' && _this.sdtModelTwo) {
            _this.sdtModelTwo.d = event.detail.d;
            _this.sdtModelTwo.c = event.detail.c;
          }

          if (event.detail.name === 'default' && _this.sdtTableOne) {
            var newh = Math.round((_this.sdtTableOne.h + _this.sdtTableOne.m) * event.detail.hr);
            var newm = _this.sdtTableOne.h + _this.sdtTableOne.m - newh;
            var newfa = Math.round((_this.sdtTableOne.fa + _this.sdtTableOne.cr) * event.detail.far);
            var newcr = _this.sdtTableOne.fa + _this.sdtTableOne.cr - newfa;
            _this.sdtTableOne.h = newh;
            _this.sdtTableOne.m = newm;
            _this.sdtTableOne.fa = newfa;
            _this.sdtTableOne.cr = newcr;
          } else if (event.detail.name === 'two' && _this.sdtTableTwo) {
            var _newh = Math.round((_this.sdtTableTwo.h + _this.sdtTableTwo.m) * event.detail.hr);

            var _newm = _this.sdtTableTwo.h + _this.sdtTableTwo.m - _newh;

            var _newfa = Math.round((_this.sdtTableTwo.fa + _this.sdtTableTwo.cr) * event.detail.far);

            var _newcr = _this.sdtTableTwo.fa + _this.sdtTableTwo.cr - _newfa;

            _this.sdtTableTwo.h = _newh;
            _this.sdtTableTwo.m = _newm;
            _this.sdtTableTwo.fa = _newfa;
            _this.sdtTableTwo.cr = _newcr;
          }
        });
      }

      if (this.sdtModelOne) {
        this.sdtModelOne.h = this.one.d;
        this.sdtModelOne.m = this.one.c;
        this.sdtModelOne.addEventListener('sdt-model-change', function (event) {
          if (_this.rocSpace) {
            _this.rocSpace.setWithSDT(event.detail.d, event.detail.c, 'default', '↑');
          }

          if (_this.sdtTableOne) {
            var newh = Math.round((_this.sdtTableOne.h + _this.sdtTableOne.m) * event.detail.hr);
            var newm = _this.sdtTableOne.h + _this.sdtTableOne.m - newh;
            var newfa = Math.round((_this.sdtTableOne.fa + _this.sdtTableOne.cr) * event.detail.far);
            var newcr = _this.sdtTableOne.fa + _this.sdtTableOne.cr - newfa;
            _this.sdtTableOne.h = newh;
            _this.sdtTableOne.m = newm;
            _this.sdtTableOne.fa = newfa;
            _this.sdtTableOne.cr = newcr;
          }
        });
      }

      if (this.sdtModelTwo) {
        this.sdtModelTwo.h = this.two.d;
        this.sdtModelTwo.m = this.two.c;
        this.sdtModelTwo.addEventListener('sdt-model-change', function (event) {
          if (_this.rocSpace) {
            _this.rocSpace.setWithSDT(event.detail.d, event.detail.c, 'two', '↓');
          }

          if (_this.sdtTableTwo) {
            var newh = Math.round((_this.sdtTableTwo.h + _this.sdtTableTwo.m) * event.detail.hr);
            var newm = _this.sdtTableTwo.h + _this.sdtTableTwo.m - newh;
            var newfa = Math.round((_this.sdtTableTwo.fa + _this.sdtTableTwo.cr) * event.detail.far);
            var newcr = _this.sdtTableTwo.fa + _this.sdtTableTwo.cr - newfa;
            _this.sdtTableTwo.h = newh;
            _this.sdtTableTwo.m = newm;
            _this.sdtTableTwo.fa = newfa;
            _this.sdtTableTwo.cr = newcr;
          }
        });
      }
    }
  }]);

  return SDTExampleDoubleInteractive;
}(_sdtExample.default);

exports.default = SDTExampleDoubleInteractive;
customElements.define('sdt-example-double-interactive', SDTExampleDoubleInteractive);
//# sourceMappingURL=double-interactive.js.map
