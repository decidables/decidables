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
  SDTExample_Human element
  <sdt-example-human>
*/
var SDTExampleHuman = /*#__PURE__*/function (_SDTExample) {
  _inherits(SDTExampleHuman, _SDTExample);

  function SDTExampleHuman() {
    _classCallCheck(this, SDTExampleHuman);

    return _possibleConstructorReturn(this, _getPrototypeOf(SDTExampleHuman).apply(this, arguments));
  }

  _createClass(SDTExampleHuman, [{
    key: "firstUpdated",
    value: function firstUpdated()
    /* changedProperties */
    {
      var _this = this;

      this.count = 1;
      this.sdtControl = this.querySelector('sdt-control');
      this.rdkTask = this.querySelector('rdk-task');
      this.sdtResponse = this.querySelector('sdt-response');
      this.sdtTable = this.querySelector('sdt-table');
      this.rocSpace = this.querySelector('roc-space');
      this.sdtModel = this.querySelector('sdt-model');

      if (this.rocSpace) {
        if (this.rocSpace.hasAttribute('history')) {
          this.rocSpace.set(0.5, 0.5, 'default', this.count);
        }
      }

      if (this.sdtControl && this.sdtControl.hasAttribute('trials')) {
        this.sdtControl.addEventListener('sdt-control-trials', function (event) {
          if (_this.rdkTask) {
            _this.rdkTask.trials = event.detail.trials;
          }

          if (_this.sdtResponse) {
            _this.sdtResponse.trialTotal = event.detail.trials;
          }
        });
      }

      if (this.sdtControl && this.sdtControl.hasAttribute('duration')) {
        this.sdtControl.addEventListener('sdt-control-duration', function (event) {
          if (_this.rdkTask) {
            _this.rdkTask.duration = event.detail.duration;
            _this.rdkTask.wait = event.detail.duration;
            _this.rdkTask.iti = event.detail.duration;
          }
        });
      }

      if (this.sdtControl && this.sdtControl.hasAttribute('coherence')) {
        this.sdtControl.addEventListener('sdt-control-coherence', function (event) {
          if (_this.rdkTask) {
            _this.rdkTask.coherence = event.detail.coherence;
          }
        });
      }

      if (this.sdtControl && this.sdtControl.hasAttribute('payoff')) {
        this.sdtControl.addEventListener('sdt-control-payoff', function (event) {
          if (_this.sdtResponse) {
            _this.sdtResponse.hPayoff = event.detail.payoff;
            _this.sdtResponse.mPayoff = -event.detail.payoff + 0; // Get rid of -0

            _this.sdtResponse.faPayoff = -(100 - event.detail.payoff) + 0; // Get rid of -0

            _this.sdtResponse.crPayoff = 100 - event.detail.payoff;
          }

          if (_this.sdtTable) {
            _this.sdtTable.hPayoff = event.detail.payoff;
            _this.sdtTable.mPayoff = -event.detail.payoff + 0; // Get rid of -0

            _this.sdtTable.faPayoff = -(100 - event.detail.payoff) + 0; // Get rid of -0

            _this.sdtTable.crPayoff = 100 - event.detail.payoff;
          }
        });
      }

      if (this.sdtControl && this.sdtControl.hasAttribute('run')) {
        this.sdtControl.addEventListener('sdt-control-run', function ()
        /* event */
        {
          if (_this.rdkTask) {
            _this.rdkTask.running = true;
          }
        });
      }

      if (this.sdtControl && this.sdtControl.hasAttribute('pause')) {
        this.sdtControl.addEventListener('sdt-control-pause', function ()
        /* event */
        {
          if (_this.rdkTask) {
            _this.rdkTask.running = false;
          }
        });
      }

      if (this.sdtControl && this.sdtControl.hasAttribute('reset')) {
        this.sdtControl.addEventListener('sdt-control-reset', function ()
        /* event */
        {
          if (_this.rdkTask) {
            _this.rdkTask.reset();
          }

          if (_this.sdtResponse) {
            _this.sdtResponse.reset();
          }

          if (_this.sdtTable) {
            _this.sdtTable.h = 0;
            _this.sdtTable.m = 0;
            _this.sdtTable.fa = 0;
            _this.sdtTable.cr = 0;
          }

          if (_this.rocSpace) {
            if (_this.rocSpace.hasAttribute('history')) {
              _this.count += 1;

              _this.rocSpace.set(0.5, 0.5, "point".concat(_this.count), _this.count);
            } else {
              _this.rocSpace.hr = 0.5;
              _this.rocSpace.far = 0.5;
            }
          }

          if (_this.sdtModel) {
            _this.sdtModel.d = 0;
            _this.sdtModel.c = 0;
          }
        });
      }

      if (this.rdkTask) {
        if (this.sdtResponse) {
          this.sdtResponse.trialTotal = this.rdkTask.trials;
        }
      }

      if (this.rdkTask) {
        this.rdkTask.addEventListener('rdk-trial-start', function (event) {
          if (_this.sdtResponse) {
            _this.sdtResponse.start(event.detail.signal, event.detail.trial);
          }
        });
      }

      if (this.rdkTask) {
        this.rdkTask.addEventListener('rdk-trial-end', function ()
        /* event */
        {
          if (_this.sdtResponse) {
            _this.sdtResponse.stop();
          }
        });
      }

      if (this.rdkTask) {
        this.rdkTask.addEventListener('rdk-block-end', function ()
        /* event */
        {
          if (_this.sdtControl) {
            _this.sdtControl.complete();
          }
        });
      }

      if (this.sdtResponse) {
        this.sdtResponse.addEventListener('sdt-response', function (event) {
          if (_this.sdtTable) {
            _this.sdtTable.h = event.detail.h;
            _this.sdtTable.m = event.detail.m;
            _this.sdtTable.fa = event.detail.fa;
            _this.sdtTable.cr = event.detail.cr;
          }

          var newhr = _detectableMath.default.hM2Hr(event.detail.h + 1, event.detail.m + 1);

          var newfar = _detectableMath.default.faCr2Far(event.detail.fa + 1, event.detail.cr + 1);

          if (_this.rocSpace) {
            if (_this.rocSpace.hasAttribute('history')) {
              _this.rocSpace.set(newhr, newfar, _this.count === 1 ? 'default' : "point".concat(_this.count), _this.count);
            } else {
              _this.rocSpace.hr = newhr;
              _this.rocSpace.far = newfar;
            }
          }

          if (_this.sdtModel) {
            _this.sdtModel.d = _detectableMath.default.hrFar2D(newhr, newfar);
            _this.sdtModel.c = _detectableMath.default.hrFar2C(newhr, newfar);
          }
        });
      }
    }
  }]);

  return SDTExampleHuman;
}(_sdtExample.default);

exports.default = SDTExampleHuman;
customElements.define('sdt-example-human', SDTExampleHuman);
//# sourceMappingURL=human.js.map
