"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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
  SDTExample_Interactive element
  <sdt-example-interactive>
*/
var SDTExampleInteractive = /*#__PURE__*/function (_SDTExample) {
  _inherits(SDTExampleInteractive, _SDTExample);

  function SDTExampleInteractive() {
    _classCallCheck(this, SDTExampleInteractive);

    return _possibleConstructorReturn(this, _getPrototypeOf(SDTExampleInteractive).apply(this, arguments));
  }

  _createClass(SDTExampleInteractive, [{
    key: "firstUpdated",
    value: function firstUpdated()
    /* changedProperties */
    {
      var _this = this;

      this.sdtControl = this.querySelector('sdt-control');
      this.sdtTable = this.querySelector('sdt-table');
      this.rocSpace = this.querySelector('roc-space');
      this.sdtModel = this.querySelector('sdt-model');
      this.rocSpaces = this.querySelectorAll('roc-space');

      if (this.sdtControl && this.sdtControl.hasAttribute('color')) {
        this.sdtControl.addEventListener('sdt-control-color', function (event) {
          if (_this.sdtModel) {
            _this.sdtModel.color = event.detail.color;
          }

          if (_this.sdtTable) {
            _this.sdtTable.color = event.detail.color;
          }
        });
      }

      if (this.sdtControl) {
        this.sdtControl.addEventListener('sdt-control-z-roc', function (event) {
          if (_this.rocSpaces.length > 0) {
            _this.rocSpaces.forEach(function (rocSpace) {
              rocSpace.zRoc = event.detail.zRoc;
            });
          }
        });
      }

      if (this.sdtTable) {
        if (this.rocSpace) {
          this.rocSpace.hr = _sdtExample.default.hm2hr(this.sdtTable.h, this.sdtTable.m);
          this.rocSpace.far = _sdtExample.default.facr2far(this.sdtTable.fa, this.sdtTable.cr);
        }

        if (this.sdtModel) {
          this.sdtModel.d = _sdtExample.default.hrfar2d(_sdtExample.default.hm2hr(this.sdtTable.h, this.sdtTable.m), _sdtExample.default.facr2far(this.sdtTable.fa, this.sdtTable.cr), this.sdtModel.s);
          this.sdtModel.c = _sdtExample.default.hrfar2c(_sdtExample.default.hm2hr(this.sdtTable.h, this.sdtTable.m), _sdtExample.default.facr2far(this.sdtTable.fa, this.sdtTable.cr), this.sdtModel.s);
        }

        this.sdtTable.addEventListener('sdt-table-change', function (event) {
          if (_this.rocSpace) {
            _this.rocSpace.far = event.detail.far;
            _this.rocSpace.hr = event.detail.hr;
          }

          if (_this.sdtModel) {
            _this.sdtModel.d = _sdtExample.default.hrfar2d(event.detail.hr, event.detail.far, _this.sdtModel.s);
            _this.sdtModel.c = _sdtExample.default.hrfar2c(event.detail.hr, event.detail.far, _this.sdtModel.s);
          }
        });
      }

      if (this.rocSpace) {
        if (this.sdtModel && !this.sdtTable) {
          this.sdtModel.d = _sdtExample.default.hrfar2d(this.rocSpace.hr, this.rocSpace.far, this.rocSpace.s);
          this.sdtModel.c = _sdtExample.default.hrfar2c(this.rocSpace.hr, this.rocSpace.far, this.rocSpace.s);
          this.sdtModel.s = this.rocSpace.s;
        }

        this.rocSpace.addEventListener('roc-point-change', function (event) {
          if (_this.sdtModel) {
            _this.sdtModel.d = event.detail.d;
            _this.sdtModel.c = event.detail.c;
            _this.sdtModel.s = event.detail.s;
          }

          if (_this.sdtTable) {
            var newh = Math.round((_this.sdtTable.h + _this.sdtTable.m) * event.detail.hr);
            var newm = _this.sdtTable.h + _this.sdtTable.m - newh;
            var newfa = Math.round((_this.sdtTable.fa + _this.sdtTable.cr) * event.detail.far);
            var newcr = _this.sdtTable.fa + _this.sdtTable.cr - newfa;
            _this.sdtTable.h = newh;
            _this.sdtTable.m = newm;
            _this.sdtTable.fa = newfa;
            _this.sdtTable.cr = newcr;
          }
        });
      }

      if (this.sdtModel) {
        this.sdtModel.addEventListener('sdt-model-change', function (event) {
          if (_this.rocSpaces.length > 0) {
            _this.rocSpaces.forEach(function (rocSpace) {
              rocSpace.setWithSDT(event.detail.d, event.detail.c, 'default', '', event.detail.s);
            });
          }

          if (_this.sdtTable) {
            var newh = Math.round((_this.sdtTable.h + _this.sdtTable.m) * event.detail.hr);
            var newm = _this.sdtTable.h + _this.sdtTable.m - newh;
            var newfa = Math.round((_this.sdtTable.fa + _this.sdtTable.cr) * event.detail.far);
            var newcr = _this.sdtTable.fa + _this.sdtTable.cr - newfa;
            _this.sdtTable.h = newh;
            _this.sdtTable.m = newm;
            _this.sdtTable.fa = newfa;
            _this.sdtTable.cr = newcr;
          }
        });
      }
    }
  }]);

  return SDTExampleInteractive;
}(_sdtExample.default);

exports.default = SDTExampleInteractive;
customElements.define('sdt-example-interactive', SDTExampleInteractive);
//# sourceMappingURL=interactive.js.map
