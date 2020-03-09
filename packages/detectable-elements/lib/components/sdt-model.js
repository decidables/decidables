"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _litElement = require("lit-element");

var d3 = _interopRequireWildcard(require("d3"));

var jStat = _interopRequireWildcard(require("jstat"));

var _sdtElement = _interopRequireDefault(require("../sdt-element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        :host {\n          display: inline-block;\n        }\n\n        .main {\n          width: 100%;\n          height: 100%;\n        }\n\n        text {\n          /* stylelint-disable property-no-vendor-prefix */\n          -webkit-user-select: none;\n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n        }\n\n        .tick {\n          font-size: 0.75rem;\n        }\n\n        .axis-x path,\n        .axis-x line,\n        .axis-y path,\n        .axis-y line,\n        .axis-y2 path,\n        .axis-y2 line {\n          stroke: var(---color-element-border);\n        }\n\n        .noise.interactive,\n        .signal.interactive,\n        .threshold.interactive {\n          cursor: ew-resize;\n\n          filter: url(\"#shadow-2\");\n          outline: none;\n        }\n\n        .signal.unequal {\n          cursor: ns-resize;\n\n          filter: url(\"#shadow-2\");\n          outline: none;\n        }\n\n        .signal.interactive.unequal {\n          cursor: move;\n        }\n\n        .noise.interactive:hover,\n        .signal.interactive:hover,\n        .signal.unequal:hover,\n        .threshold.interactive:hover {\n          filter: url(\"#shadow-4\");\n\n          /* HACK: This gets Safari to correctly apply the filter! */\n          transform: translateX(0);\n        }\n\n        .noise.interactive:hover,\n        .signal.interactive:hover,\n        .signal.unequal:hover,\n        .threshold.interactive:active {\n          filter: url(\"#shadow-8\");\n\n          /* HACK: This gets Safari to correctly apply the filter! */\n          transform: translateY(0);\n        }\n\n        :host(.keyboard) .noise.interactive:focus,\n        :host(.keyboard) .signal.interactive:focus,\n        :host(.keyboard) .signal.unequal:focus,\n        :host(.keyboard) .threshold.interactive:focus {\n          filter: url(\"#shadow-8\");\n\n          /* HACK: This gets Safari to correctly apply the filter! */\n          transform: translateZ(0);\n        }\n\n        .underlayer .background {\n          fill: var(---color-element-background);\n          stroke: none;\n        }\n\n        .overlayer .background {\n          fill: none;\n          stroke: var(---color-element-border);\n          stroke-width: 1;\n          shape-rendering: crispEdges;\n        }\n\n        .title-x,\n        .title-y,\n        .title-y2 {\n          font-weight: 600;\n\n          fill: currentColor;\n        }\n\n        .curve-cr,\n        .curve-fa,\n        .curve-m,\n        .curve-h {\n          fill-opacity: 0.5;\n          stroke: none;\n\n          transition: fill var(---transition-duration) ease;\n        }\n\n        .curve-cr {\n          fill: var(---color-cr);\n        }\n\n        .curve-fa {\n          fill: var(---color-fa);\n        }\n\n        .curve-m {\n          fill: var(---color-m);\n        }\n\n        .curve-h {\n          fill: var(---color-h);\n        }\n\n        :host([color=\"accuracy\"]) .curve-h,\n        :host([color=\"accuracy\"]) .curve-cr {\n          fill: var(---color-correct);\n        }\n\n        :host([color=\"accuracy\"]) .curve-m,\n        :host([color=\"accuracy\"]) .curve-fa {\n          fill: var(---color-error);\n        }\n\n        :host([color=\"stimulus\"]) .curve-cr,\n        :host([color=\"stimulus\"]) .curve-fa {\n          fill: var(---color-far);\n        }\n\n        :host([color=\"stimulus\"]) .curve-m,\n        :host([color=\"stimulus\"]) .curve-h {\n          fill: var(---color-hr);\n        }\n\n        :host([color=\"response\"]) .curve-cr,\n        :host([color=\"response\"]) .curve-m {\n          fill: var(---color-absent);\n        }\n\n        :host([color=\"response\"]) .curve-fa,\n        :host([color=\"response\"]) .curve-h {\n          fill: var(---color-present);\n        }\n\n        :host([color=\"none\"]) .curve-cr,\n        :host([color=\"none\"]) .curve-fa,\n        :host([color=\"none\"]) .curve-m,\n        :host([color=\"none\"]) .curve-h {\n          fill: var(---color-element-enabled);\n        }\n\n        .curve-noise,\n        .curve-signal {\n          fill: none;\n          stroke: var(---color-element-emphasis);\n          stroke-width: 2;\n        }\n\n        .measure-d,\n        .measure-c,\n        .measure-s {\n          pointer-events: none;\n        }\n\n        .threshold .line {\n          stroke: var(---color-element-emphasis);\n          stroke-width: 2;\n        }\n\n        .threshold .handle {\n          fill: var(---color-element-emphasis);\n\n          /* r: 6; HACK: Firefox does not support CSS SVG Geometry Properties */\n        }\n\n        /* Make a larger target for touch users */\n        @media (pointer: coarse) {\n          .threshold.interactive .handle {\n            stroke: #000000;\n            stroke-opacity: 0;\n            stroke-width: 12px;\n          }\n        }\n\n        .measure-d .line,\n        .measure-d .cap-left,\n        .measure-d .cap-right {\n          stroke: var(---color-d);\n          stroke-width: 2;\n          shape-rendering: crispEdges;\n        }\n\n        .measure-d .label {\n          font-size: 0.75rem;\n\n          text-anchor: start;\n          fill: currentColor;\n        }\n\n        .measure-c .line,\n        .measure-c .cap-zero {\n          stroke: var(---color-c);\n          stroke-width: 2;\n          shape-rendering: crispEdges;\n        }\n\n        .measure-c .label {\n          font-size: 0.75rem;\n\n          fill: currentColor;\n        }\n\n        .measure-s .line,\n        .measure-s .cap-left,\n        .measure-s .cap-right {\n          stroke: var(---color-s);\n          stroke-width: 2;\n          shape-rendering: crispEdges;\n        }\n\n        .measure-s .label {\n          font-size: 0.75rem;\n\n          text-anchor: middle;\n          fill: currentColor;\n        }\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      ", "\n    "]);

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
  SDTModel element
  <sdt-model>

  Attributes:
    d'; C;
    FAR; HR; zFAR; zHR;

    draggable: d'; C;
    highlight: H; M; CR; FA;

    Styles:
      ??
*/
var SDTModel = /*#__PURE__*/function (_SDTElement) {
  _inherits(SDTModel, _SDTElement);

  _createClass(SDTModel, null, [{
    key: "properties",
    get: function get() {
      return {
        color: {
          attribute: 'color',
          type: String,
          reflect: true
        },
        distributions: {
          attribute: 'distributions',
          type: Boolean,
          reflect: true
        },
        threshold: {
          attribute: 'threshold',
          type: Boolean,
          reflect: true
        },
        unequal: {
          attribute: 'unequal',
          type: Boolean,
          reflect: true
        },
        sensitivity: {
          attribute: 'sensitivity',
          type: Boolean,
          reflect: true
        },
        bias: {
          attribute: 'bias',
          type: Boolean,
          reflect: true
        },
        variance: {
          attribute: 'variance',
          type: Boolean,
          reflect: true
        },
        histogram: {
          attribute: 'histogram',
          type: Boolean,
          reflect: true
        },
        d: {
          attribute: 'd',
          type: Number,
          reflect: true
        },
        c: {
          attribute: 'c',
          type: Number,
          reflect: true
        },
        s: {
          attribute: 's',
          type: Number,
          reflect: true
        },
        far: {
          attribute: false,
          type: Number,
          reflect: false
        },
        hr: {
          attribute: false,
          type: Number,
          reflect: false
        },
        binWidth: {
          attribute: false,
          type: Number,
          reflect: false
        },
        trials: {
          attribute: false,
          type: Array,
          reflect: false
        },
        width: {
          attribute: false,
          type: Number,
          reflect: false
        },
        height: {
          attribute: false,
          type: Number,
          reflect: false
        },
        rem: {
          attribute: false,
          type: Number,
          reflect: false
        }
      };
    }
  }]);

  function SDTModel() {
    var _this;

    _classCallCheck(this, SDTModel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SDTModel).call(this)); // Attributes

    _this.colors = ['outcome', 'response', 'stimulus', 'none']; // Allowable values of 'color'

    _this.color = 'outcome'; // How to color distributions and trials

    _this.distributions = false; // Show distributions?

    _this.threshold = false; // Show threshold?

    _this.unequal = false; // Allow unequal variance?

    _this.sensitivity = false; // Show d'?

    _this.bias = false; // Show c?

    _this.variance = false; // Show variance?

    _this.histogram = false; // Show histogram?

    _this.d = 1; // Sensitivity

    _this.c = 0; // Bias

    _this.s = 1; // Variance
    // Properties

    _this.binWidth = 0.25; // Histogram bin width in units of evidence

    _this.signals = ['present', 'absent']; // Allowable values of trial.signal

    _this.responses = ['present', 'absent']; // Allowable values of trial.response

    _this.trials = []; // Array of simulated trials

    _this.width = NaN; // Width of component in pixels

    _this.height = NaN; // Height of component in pixels

    _this.rem = NaN; // Pixels per rem for component
    // Private

    _this.muN = NaN; // Mean of noise distribution

    _this.muS = NaN; // Mean of signal distribution

    _this.l = NaN; // lambda (threshold location)

    _this.hS = NaN; // Height of signal distribution

    _this.binRange = [-3.0, 3.0]; // Range of histogram

    _this.h = 0; // Hits

    _this.m = 0; // Misses

    _this.fa = 0; // False alarms

    _this.cr = 0; // Correct rejections

    _this.firstUpdate = true; // Are we waiting for the first update?

    _this.drag = false; // Are we currently dragging?

    _this.alignState();

    return _this;
  }

  _createClass(SDTModel, [{
    key: "reset",
    value: function reset() {
      this.trials = [];
      this.h = 0;
      this.m = 0;
      this.fa = 0;
      this.cr = 0;
    }
  }, {
    key: "trial",
    value: function trial(trialNumber, signal, duration, wait, iti) {
      var trial = {};
      trial.new = true;
      trial.paused = false;
      trial.trial = trialNumber;
      trial.signal = signal;
      trial.duration = duration;
      trial.wait = wait;
      trial.iti = iti;
      trial.evidence = jStat.normal.sample(0, 1);
      this.alignTrial(trial);
      this.trials.push(trial);
      this.requestUpdate();
    }
  }, {
    key: "alignTrial",
    value: function alignTrial(trial) {
      if (trial.signal === 'present') {
        trial.trueEvidence = trial.evidence * this.s + this.muS;
        trial.response = trial.trueEvidence > this.l ? 'present' : 'absent';
        trial.outcome = trial.response === 'present' ? 'h' : 'm';
      } else {
        // trial.signal == 'absent'
        trial.trueEvidence = trial.evidence + this.muN;
        trial.response = trial.trueEvidence > this.l ? 'present' : 'absent';
        trial.outcome = trial.response === 'present' ? 'fa' : 'cr';
      }

      if (!trial.new) this[trial.outcome] += 1;
      return trial;
    }
  }, {
    key: "alignState",
    value: function alignState() {
      this.far = _sdtElement.default.dc2far(this.d, this.c, this.s);
      this.hr = _sdtElement.default.dc2hr(this.d, this.c, this.s);
      this.muN = _sdtElement.default.d2muN(this.d, this.s);
      this.muS = _sdtElement.default.d2muS(this.d, this.s);
      this.l = _sdtElement.default.c2l(this.c, this.s);
      this.hS = _sdtElement.default.s2h(this.s);
      this.h = 0;
      this.m = 0;
      this.fa = 0;
      this.cr = 0;

      for (var i = 0; i < this.trials.length; i += 1) {
        this.alignTrial(this.trials[i]);
      }
    }
  }, {
    key: "render",
    value: function render() {
      // eslint-disable-line class-methods-use-this
      return (0, _litElement.html)(_templateObject(), _sdtElement.default.svgFilters);
    }
  }, {
    key: "sendEvent",
    value: function sendEvent() {
      this.dispatchEvent(new CustomEvent('sdt-model-change', {
        detail: {
          d: this.d,
          c: this.c,
          s: this.s,
          far: this.far,
          hr: this.hr,
          h: this.h,
          m: this.m,
          fa: this.fa,
          cr: this.cr
        },
        bubbles: true
      }));
    }
  }, {
    key: "getDimensions",
    value: function getDimensions() {
      this.width = parseFloat(this.getComputedStyleValue('width'), 10);
      this.height = parseFloat(this.getComputedStyleValue('height'), 10);
      this.rem = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('font-size'), 10); // console.log(`sdt-model: width = ${this.width}, height = ${this.height}, rem = ${this.rem}`);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(SDTModel.prototype), "connectedCallback", this).call(this);

      window.addEventListener('resize', this.getDimensions.bind(this));
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      window.removeEventListener('resize', this.getDimensions.bind(this));

      _get(_getPrototypeOf(SDTModel.prototype), "disconnectedCallback", this).call(this);
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated(changedProperties) {
      _get(_getPrototypeOf(SDTModel.prototype), "firstUpdated", this).call(this, changedProperties); // Get the width and height after initial render/update has occurred
      // HACK Edge: Edge doesn't have width/height until after a 0ms timeout


      window.setTimeout(this.getDimensions.bind(this), 0);
    }
  }, {
    key: "update",
    value: function update(changedProperties) {
      var _this2 = this;

      _get(_getPrototypeOf(SDTModel.prototype), "update", this).call(this, changedProperties);

      this.alignState(); // Bail out if we can't get the width/height

      if (Number.isNaN(this.width) || Number.isNaN(this.height) || Number.isNaN(this.rem)) {
        return;
      }

      var hostWidth = this.width;
      var hostHeight = this.height;
      var hostAspectRatio = hostWidth / hostHeight;
      var elementAspectRatio = 1.8;
      var elementWidth;
      var elementHeight;

      if (hostAspectRatio > elementAspectRatio) {
        elementHeight = hostHeight;
        elementWidth = elementHeight * elementAspectRatio;
      } else {
        elementWidth = hostWidth;
        elementHeight = elementWidth / elementAspectRatio;
      }

      var margin = {
        top: 2 * this.rem,
        bottom: 3 * this.rem,
        left: 3 * this.rem,
        right: (this.histogram && this.distributions ? 3 : 0.75) * this.rem
      };
      var height = elementHeight - (margin.top + margin.bottom);
      var width = elementWidth - (margin.left + margin.right);
      var transitionDuration = parseInt(this.getComputedStyleValue('---transition-duration'), 10); // X Scale

      var xScale = d3.scaleLinear().domain([-3, 3]) // Evidence // FIX - no hardcoding
      .range([0, width]); // Y Scale

      var yScale = d3.scaleLinear().domain([0.5, 0]) // Probability // FIX - no hardcoding
      .range([0, height]); // 2nd Y Scale

      var strokeWidth = 3; // FIX - no hardcoding

      var binWidth = xScale(this.binWidth) - xScale(0);
      var y2Scale = d3.scaleLinear().domain([height / binWidth, 0]) // Number of Stimuli
      .range([0, height]); // Threshold Drag behavior

      var dragThreshold = d3.drag().subject(function ()
      /* datum */
      {
        return {
          x: xScale(_this2.l),
          y: 0
        };
      }).on('start', function (datum, index, elements) {
        var element = elements[index];
        d3.select(element).classed('dragging', true);
      }).on('drag', function ()
      /* datum */
      {
        _this2.drag = true;
        var l = xScale.invert(d3.event.x); // Clamp lambda to stay visible

        l = l < xScale.domain()[0] ? xScale.domain()[0] : l > xScale.domain()[1] ? xScale.domain()[1] : l;
        _this2.c = _sdtElement.default.l2c(l, _this2.s);

        _this2.alignState();

        _this2.sendEvent();
      }).on('end', function (datum, index, elements) {
        var element = elements[index];
        d3.select(element).classed('dragging', false);
      }); // Noise Curve Drag behavior

      var dragNoise = d3.drag().subject(function ()
      /* datum */
      {
        return {
          x: xScale(_this2.muN),
          y: 0
        };
      }).on('start', function (datum, index, elements) {
        var element = elements[index];
        d3.select(element).classed('dragging', true);
      }).on('drag', function ()
      /* datum */
      {
        _this2.drag = true;
        var muN = xScale.invert(d3.event.x); // Clamp Noise Curve to stay visible

        muN = muN < xScale.domain()[0] ? xScale.domain()[0] : muN > xScale.domain()[1] ? xScale.domain()[1] : muN;
        _this2.d = _sdtElement.default.muN2d(muN, _this2.s);

        _this2.alignState();

        _this2.sendEvent();
      }).on('end', function (datum, index, elements) {
        var element = elements[index];
        d3.select(element).classed('dragging', false);
      }); // Signal+Noise Curve Drag behavior

      var dragSignal = d3.drag().subject(function ()
      /* datum */
      {
        return {
          x: xScale(_this2.muS),
          y: yScale(_this2.hS)
        };
      }).on('start', function (datum, index, elements) {
        var element = elements[index];
        d3.select(element).classed('dragging', true);
        datum.startX = d3.event.x;
        datum.startY = d3.event.y;
        datum.startHS = _this2.hS;
        datum.startMuS = _this2.muS;
      }).on('drag', function (datum) {
        _this2.drag = true;
        var muS = _this2.muS; // eslint-disable-line prefer-destructuring

        if (_this2.interactive) {
          muS = xScale.invert(d3.event.x); // Clamp Signal Curve to stay visible

          muS = muS < xScale.domain()[0] ? xScale.domain()[0] : muS > xScale.domain()[1] ? xScale.domain()[1] : muS;
        }

        var hS = _this2.hS; // eslint-disable-line prefer-destructuring

        if (_this2.unequal) {
          hS = yScale.invert(d3.event.y); // Clamp Signal Curve to stay visible

          hS = hS < 0.01 ? 0.01 : hS > yScale.domain()[0] ? yScale.domain()[0] : hS;
        }

        if (_this2.interactive && _this2.unequal) {
          // Use shift key as modifier for single dimension
          if (d3.event.sourceEvent.shiftKey) {
            if (Math.abs(d3.event.x - datum.startX) > Math.abs(d3.event.y - datum.startY)) {
              hS = datum.startHS;
            } else {
              muS = datum.startMuS;
            }
          }
        }

        if (_this2.unequal) {
          _this2.s = _sdtElement.default.h2s(hS);
          _this2.c = _sdtElement.default.l2c(_this2.l, _this2.s);
        }

        _this2.d = _sdtElement.default.muS2d(muS, _this2.s);

        _this2.alignState();

        _this2.sendEvent();
      }).on('end', function (datum, index, elements) {
        var element = elements[index];
        d3.select(element).classed('dragging', false);
      }); // Line for Evidence/Probability Space

      var line = d3.line().x(function (datum) {
        return xScale(datum.e);
      }).y(function (datum) {
        return yScale(datum.p);
      }); // Svg
      //  DATA-JOIN

      var svgUpdate = d3.select(this.renderRoot).selectAll('.main').data([{
        width: this.width,
        height: this.height,
        rem: this.rem
      }]); // ENTER

      var svgEnter = svgUpdate.enter().append('svg').classed('main', true); // MERGE

      var svgMerge = svgEnter.merge(svgUpdate).attr('viewBox', "0 0 ".concat(elementWidth, " ").concat(elementHeight)); // Plot
      //  ENTER

      var plotEnter = svgEnter.append('g').classed('plot', true); //  MERGE

      var plotMerge = svgMerge.select('.plot').attr('transform', "translate(".concat(margin.left, ", ").concat(margin.top, ")")); // Underlayer
      //  ENTER

      var underlayerEnter = plotEnter.append('g').classed('underlayer', true); // MERGE

      var underlayerMerge = plotMerge.select('.underlayer'); // Background
      //  ENTER

      underlayerEnter.append('rect').classed('background', true); //  MERGE

      underlayerMerge.select('.background').attr('height', height).attr('width', width); // X Axis
      //  ENTER

      underlayerEnter.append('g').classed('axis-x', true); //  MERGE

      var axisXMerge = underlayerMerge.select('.axis-x').attr('transform', "translate(0, ".concat(height, ")")).call(d3.axisBottom(xScale)).attr('font-size', null).attr('font-family', null);
      axisXMerge.selectAll('line, path').attr('stroke', null); // X Axis Title
      //  ENTER

      underlayerEnter.append('text').classed('title-x', true).attr('text-anchor', 'middle').text('Evidence'); //  MERGE

      underlayerMerge.select('.title-x').attr('transform', "translate(".concat(width / 2, ", ").concat(height + 2.25 * this.rem, ")")); // Y Axis
      //  DATA-JOIN

      var axisYUpdate = underlayerMerge.selectAll('.axis-y').data(this.distributions ? [{}] : []); //  ENTER

      var axisYEnter = axisYUpdate.enter().append('g').classed('axis-y', true); //  MERGE

      var axisYMerge = axisYEnter.merge(axisYUpdate).call(d3.axisLeft(yScale).ticks(5)).attr('font-size', null).attr('font-family', null);
      axisYMerge.selectAll('line, path').attr('stroke', null); //  EXIT

      axisYUpdate.exit().remove(); // Y Axis Title
      //  DATA-JOIN

      var titleYUpdate = underlayerMerge.selectAll('.title-y').data(this.distributions ? [{}] : []); //  ENTER

      var titleYEnter = titleYUpdate.enter().append('text').classed('title-y', true).attr('text-anchor', 'middle').text('Probability'); //  MERGE

      titleYEnter.merge(titleYUpdate).attr('transform', "translate(".concat(-2 * this.rem, ", ").concat(height / 2, ")rotate(-90)")); //  EXIT

      titleYUpdate.exit().remove(); // 2nd Y Axis
      //  DATA-JOIN

      var axisY2Update = underlayerMerge.selectAll('.axis-y2').data(this.histogram ? [{}] : []); //  ENTER

      var axisY2Enter = axisY2Update.enter().append('g').classed('axis-y2', true); //  MERGE

      var axisY2Merge = axisY2Enter.merge(axisY2Update).attr('transform', this.distributions ? "translate(".concat(width, ", 0)") : '').call(this.distributions ? d3.axisRight(y2Scale).ticks(10) : d3.axisLeft(y2Scale).ticks(10)).attr('font-size', null).attr('font-family', null);
      axisY2Merge.selectAll('line, path').attr('stroke', null); //  EXIT

      axisY2Update.exit().remove(); // 2nd Y Axis Title
      //  DATA-JOIN

      var titleY2Update = underlayerMerge.selectAll('.title-y2').data(this.histogram ? [{}] : []); //  ENTER

      var titleY2Enter = titleY2Update.enter().append('text').classed('title-y2', true).attr('text-anchor', 'middle').text('Count'); //  MERGE

      titleY2Enter.merge(titleY2Update).attr('transform', this.distributions ? "translate(".concat(width + 1.5 * this.rem, ", ").concat(height / 2, ")rotate(90)") : "translate(".concat(-1.5 * this.rem, ", ").concat(height / 2, ")rotate(-90)")); //  EXIT

      titleY2Update.exit().remove(); // Plot Content

      plotEnter.append('g').classed('content', true); //  MERGE

      var contentMerge = plotMerge.select('.content'); // Noise & Signal + Noise Distributions
      //  DATA-JOIN

      var signalNoiseUpdate = contentMerge.selectAll('.signal-noise').data(this.distributions ? [{}] : []); //  ENTER

      var signalNoiseEnter = signalNoiseUpdate.enter().append('g').classed('signal-noise', true); //  MERGE

      var signalNoiseMerge = signalNoiseEnter.merge(signalNoiseUpdate); //  EXIT

      signalNoiseUpdate.exit().remove(); // Noise Distribution
      //  ENTER

      var noiseEnter = signalNoiseEnter.append('g').classed('noise', true); //  MERGE

      var noiseMerge = signalNoiseMerge.selectAll('.noise').attr('tabindex', this.interactive ? 0 : null).classed('interactive', this.interactive).on('keydown', this.interactive ? function ()
      /* datum */
      {
        if (['ArrowRight', 'ArrowLeft'].includes(d3.event.key)) {
          var muN = _this2.muN; // eslint-disable-line prefer-destructuring

          switch (d3.event.key) {
            case 'ArrowRight':
              muN += d3.event.shiftKey ? 0.01 : 0.1;
              break;

            case 'ArrowLeft':
              muN -= d3.event.shiftKey ? 0.01 : 0.1;
              break;

            default:
          } // Clamp C to visible extent


          muN = muN < xScale.domain()[0] ? xScale.domain()[0] : muN > xScale.domain()[1] ? xScale.domain()[1] : muN;

          if (muN !== _this2.muN) {
            _this2.d = _sdtElement.default.muN2d(muN, _this2.s);

            _this2.alignState();

            _this2.sendEvent();
          }

          d3.event.preventDefault();
        }
      } : null);

      if (this.firstUpdate || changedProperties.has('interactive')) {
        if (this.interactive) {
          noiseMerge.call(dragNoise);
        } else {
          noiseMerge.on('.drag', null);
        }
      } // CR Curve
      //  ENTER


      noiseEnter.append('path').classed('curve-cr', true); //  MERGE

      noiseMerge.select('.curve-cr').transition().duration(this.drag ? 0 : transitionDuration).ease(d3.easeCubicOut).attrTween('d', function (datum, index, elements) {
        var element = elements[index];
        var interpolateD = d3.interpolate(element.d !== undefined ? element.d : _this2.d, _this2.d);
        var interpolateC = d3.interpolate(element.c !== undefined ? element.c : _this2.c, _this2.c);
        var interpolateS = d3.interpolate(element.s !== undefined ? element.s : _this2.s, _this2.s);
        return function (time) {
          element.d = interpolateD(time);
          element.c = interpolateC(time);
          element.s = interpolateS(time);
          var correctRejections = d3.range(xScale.domain()[0], _sdtElement.default.c2l(element.c, element.s), 0.05).map(function (e) {
            return {
              e: e,
              p: jStat.normal.pdf(e, _sdtElement.default.d2muN(element.d, element.s), 1)
            };
          });
          correctRejections.push({
            e: _sdtElement.default.c2l(element.c, element.s),
            p: jStat.normal.pdf(_sdtElement.default.c2l(element.c, element.s), _sdtElement.default.d2muN(element.d, element.s), 1)
          });
          correctRejections.push({
            e: _sdtElement.default.c2l(element.c, element.s),
            p: 0
          });
          correctRejections.push({
            e: xScale.domain()[0],
            p: 0
          });
          return line(correctRejections);
        };
      }); // FA Curve
      //  ENTER

      noiseEnter.append('path').classed('curve-fa', true); //  MERGE

      noiseMerge.select('.curve-fa').transition().duration(this.drag ? 0 : transitionDuration).ease(d3.easeCubicOut).attrTween('d', function (datum, index, elements) {
        var element = elements[index];
        var interpolateD = d3.interpolate(element.d !== undefined ? element.d : _this2.d, _this2.d);
        var interpolateC = d3.interpolate(element.c !== undefined ? element.c : _this2.c, _this2.c);
        var interpolateS = d3.interpolate(element.s !== undefined ? element.s : _this2.s, _this2.s);
        return function (time) {
          element.d = interpolateD(time);
          element.c = interpolateC(time);
          element.s = interpolateS(time);
          var falseAlarms = d3.range(_sdtElement.default.c2l(element.c, element.s), xScale.domain()[1], 0.05).map(function (e) {
            return {
              e: e,
              p: jStat.normal.pdf(e, _sdtElement.default.d2muN(element.d, element.s), 1)
            };
          });
          falseAlarms.push({
            e: xScale.domain()[1],
            p: jStat.normal.pdf(xScale.domain()[1], _sdtElement.default.d2muN(element.d, element.s), 1)
          });
          falseAlarms.push({
            e: xScale.domain()[1],
            p: 0
          });
          falseAlarms.push({
            e: _sdtElement.default.c2l(element.c, element.s),
            p: 0
          });
          return line(falseAlarms);
        };
      }); // Noise Curve
      //  ENTER

      noiseEnter.append('path').classed('curve-noise', true); //  MERGE

      noiseMerge.select('.curve-noise').transition().duration(this.drag ? 0 : transitionDuration).ease(d3.easeCubicOut).attrTween('d', function (datum, index, elements) {
        var element = elements[index];
        var interpolateD = d3.interpolate(element.d !== undefined ? element.d : _this2.d, _this2.d);
        var interpolateS = d3.interpolate(element.s !== undefined ? element.s : _this2.s, _this2.s);
        return function (time) {
          element.d = interpolateD(time);
          element.s = interpolateS(time);
          var noise = d3.range(xScale.domain()[0], xScale.domain()[1], 0.05).map(function (e) {
            return {
              e: e,
              p: jStat.normal.pdf(e, _sdtElement.default.d2muN(element.d, element.s), 1)
            };
          });
          noise.push({
            e: xScale.domain()[1],
            p: jStat.normal.pdf(xScale.domain()[1], _sdtElement.default.d2muN(element.d, element.s), 1)
          });
          return line(noise);
        };
      }); // Signal + Noise Distribution
      //  ENTER

      var signalEnter = signalNoiseEnter.append('g').classed('signal', true); //  MERGE

      var signalMerge = signalNoiseMerge.selectAll('.signal').attr('tabindex', this.interactive || this.unequal ? 0 : null).classed('interactive', this.interactive).classed('unequal', this.unequal).on('keydown.sensitivity', this.interactive ? function ()
      /* datum */
      {
        if (['ArrowRight', 'ArrowLeft'].includes(d3.event.key)) {
          var muS = _this2.muS; // eslint-disable-line prefer-destructuring

          switch (d3.event.key) {
            case 'ArrowRight':
              muS += d3.event.shiftKey ? 0.01 : 0.1;
              break;

            case 'ArrowLeft':
              muS -= d3.event.shiftKey ? 0.01 : 0.1;
              break;

            default:
          } // Clamp C to visible extent


          muS = muS < xScale.domain()[0] ? xScale.domain()[0] : muS > xScale.domain()[1] ? xScale.domain()[1] : muS;

          if (muS !== _this2.muS) {
            _this2.d = _sdtElement.default.muS2d(muS, _this2.s);

            _this2.alignState();

            _this2.sendEvent();
          }

          d3.event.preventDefault();
        }
      } : null).on('keydown.variance', this.unequal ? function ()
      /* datum */
      {
        if (['ArrowUp', 'ArrowDown'].includes(d3.event.key)) {
          var hS = _this2.hS; // eslint-disable-line prefer-destructuring

          switch (d3.event.key) {
            case 'ArrowUp':
              hS += d3.event.shiftKey ? 0.002 : 0.02;
              break;

            case 'ArrowDown':
              hS -= d3.event.shiftKey ? 0.002 : 0.02;
              break;

            default:
          } // Clamp s so distribution stays visible


          hS = hS < 0.01 ? 0.01 : hS > yScale.domain()[0] ? yScale.domain()[0] : hS;

          if (hS !== _this2.hS) {
            _this2.s = _sdtElement.default.h2s(hS);
            _this2.d = _sdtElement.default.muN2d(_this2.muN, _this2.s);
            _this2.c = _sdtElement.default.l2c(_this2.l, _this2.s);

            _this2.alignState();

            _this2.sendEvent();
          }

          d3.event.preventDefault();
        }
      } : null);

      if (this.firstUpdate || changedProperties.has('interactive') || changedProperties.has('unequal')) {
        if (this.interactive || this.unequal) {
          signalMerge.call(dragSignal);
        } else {
          signalMerge.on('.drag', null);
        }
      } // M Curve
      //  ENTER


      signalEnter.append('path').classed('curve-m', true); //  MERGE

      signalMerge.select('.curve-m').transition().duration(this.drag ? 0 : transitionDuration).ease(d3.easeCubicOut).attrTween('d', function (datum, index, elements) {
        var element = elements[index];
        var interpolateD = d3.interpolate(element.d !== undefined ? element.d : _this2.d, _this2.d);
        var interpolateC = d3.interpolate(element.c !== undefined ? element.c : _this2.c, _this2.c);
        var interpolateS = d3.interpolate(element.s !== undefined ? element.s : _this2.s, _this2.s);
        return function (time) {
          element.d = interpolateD(time);
          element.c = interpolateC(time);
          element.s = interpolateS(time);
          var misses = d3.range(xScale.domain()[0], _sdtElement.default.c2l(element.c, element.s), 0.05).map(function (e) {
            return {
              e: e,
              p: jStat.normal.pdf(e, _sdtElement.default.d2muS(element.d, element.s), element.s)
            };
          });
          misses.push({
            e: _sdtElement.default.c2l(element.c, element.s),
            p: jStat.normal.pdf(_sdtElement.default.c2l(element.c, element.s), _sdtElement.default.d2muS(element.d, element.s), element.s)
          });
          misses.push({
            e: _sdtElement.default.c2l(element.c, element.s),
            p: 0
          });
          misses.push({
            e: xScale.domain()[0],
            p: 0
          });
          return line(misses);
        };
      }); // H Curve
      //  ENTER

      signalEnter.append('path').classed('curve-h', true); //  MERGE

      signalMerge.select('.curve-h').transition().duration(this.drag ? 0 : transitionDuration).ease(d3.easeCubicOut).attrTween('d', function (datum, index, elements) {
        var element = elements[index];
        var interpolateD = d3.interpolate(element.d !== undefined ? element.d : _this2.d, _this2.d);
        var interpolateC = d3.interpolate(element.c !== undefined ? element.c : _this2.c, _this2.c);
        var interpolateS = d3.interpolate(element.s !== undefined ? element.s : _this2.s, _this2.s);
        return function (time) {
          element.d = interpolateD(time);
          element.c = interpolateC(time);
          element.s = interpolateS(time);
          var hits = d3.range(_sdtElement.default.c2l(element.c, element.s), xScale.domain()[1], 0.05).map(function (e) {
            return {
              e: e,
              p: jStat.normal.pdf(e, _sdtElement.default.d2muS(element.d, element.s), element.s)
            };
          });
          hits.push({
            e: xScale.domain()[1],
            p: jStat.normal.pdf(xScale.domain()[1], _sdtElement.default.d2muS(element.d, element.s), element.s)
          });
          hits.push({
            e: xScale.domain()[1],
            p: 0
          });
          hits.push({
            e: _sdtElement.default.c2l(element.c, element.s),
            p: 0
          });
          return line(hits);
        };
      }); // Signal Curve
      //  ENTER

      signalEnter.append('path').classed('curve-signal', true); //  MERGE

      signalMerge.select('.curve-signal').transition().duration(this.drag ? 0 : transitionDuration).ease(d3.easeCubicOut).attrTween('d', function (datum, index, elements) {
        var element = elements[index];
        var interpolateD = d3.interpolate(element.d !== undefined ? element.d : _this2.d, _this2.d);
        var interpolateS = d3.interpolate(element.s !== undefined ? element.s : _this2.s, _this2.s);
        return function (time) {
          element.d = interpolateD(time);
          element.s = interpolateS(time);
          var signal = d3.range(xScale.domain()[0], xScale.domain()[1], 0.05).map(function (e) {
            return {
              e: e,
              p: jStat.normal.pdf(e, _sdtElement.default.d2muS(element.d, element.s), element.s)
            };
          });
          signal.push({
            e: xScale.domain()[1],
            p: jStat.normal.pdf(xScale.domain()[1], _sdtElement.default.d2muS(element.d, element.s), element.s)
          });
          return line(signal);
        };
      }); // d' Measure
      //  DATA-JOIN

      var dUpdate = contentMerge.selectAll('.measure-d').data(this.sensitivity ? [{}] : []); //  ENTER

      var dEnter = dUpdate.enter().append('g').classed('measure-d', true);
      dEnter.append('line').classed('line', true);
      dEnter.append('line').classed('cap-left', true);
      dEnter.append('line').classed('cap-right', true);
      var dLabel = dEnter.append('text').classed('label', true);
      dLabel.append('tspan').classed('d math-var', true).text('d′');
      dLabel.append('tspan').classed('equals', true).text(' = ');
      dLabel.append('tspan').classed('value', true); //  MERGE

      var dMerge = dEnter.merge(dUpdate);
      dMerge.select('.line').transition().duration(this.drag ? 0 : transitionDuration).ease(d3.easeCubicOut).attr('x1', xScale(this.muN)).attr('y1', yScale(0.43)) // FIX - no hardcoding
      .attr('x2', xScale(this.muS)).attr('y2', yScale(0.43)); // FIX - no hardcoding

      dMerge.select('.cap-left').transition().duration(this.drag ? 0 : transitionDuration).ease(d3.easeCubicOut).attr('x1', xScale(this.muN)).attr('y1', yScale(0.43) + 5) // FIX - no hardcoding
      .attr('x2', xScale(this.muN)).attr('y2', yScale(0.43) - 5); // FIX - no hardcoding

      dMerge.select('.cap-right').transition().duration(this.drag ? 0 : transitionDuration).ease(d3.easeCubicOut).attr('x1', xScale(this.muS)).attr('y1', yScale(0.43) + 5) // FIX - no hardcoding
      .attr('x2', xScale(this.muS)).attr('y2', yScale(0.43) - 5); // FIX - no hardcoding

      var dLabelTransition = dMerge.select('.label').transition().duration(this.drag ? 0 : transitionDuration).ease(d3.easeCubicOut).attr('x', xScale(this.muN > this.muS ? this.muN : this.muS) + 5).attr('y', yScale(0.43) + 3); // FIX - no hardcoding

      dLabelTransition.select('.value').tween('text', function (datum, index, elements) {
        var element = elements[index];
        var interpolateD = d3.interpolate(element.d !== undefined ? element.d : _this2.d, _this2.d);
        return function (time) {
          element.d = interpolateD(time);
          d3.select(element).text(+element.d.toFixed(3));
        };
      }); //  EXIT

      dUpdate.exit().remove(); // c Measure
      //  DATA-JOIN

      var cUpdate = contentMerge.selectAll('.measure-c').data(this.bias ? [{}] : []); //  ENTER

      var cEnter = cUpdate.enter().append('g').classed('measure-c', true);
      cEnter.append('line').classed('line', true);
      cEnter.append('line').classed('cap-zero', true);
      var cLabel = cEnter.append('text').classed('label', true);
      cLabel.append('tspan').classed('c math-var', true).text('c');
      cLabel.append('tspan').classed('equals', true).text(' = ');
      cLabel.append('tspan').classed('value', true); //  MERGE

      var cMerge = cEnter.merge(cUpdate);
      cMerge.select('.line').transition().duration(this.drag ? 0 : transitionDuration).ease(d3.easeCubicOut).attr('x1', xScale(this.l)).attr('y1', yScale(0.47)) // FIX - no hardcoding
      .attr('x2', xScale(0)).attr('y2', yScale(0.47)); // FIX - no hardcoding

      cMerge.select('.cap-zero').transition().duration(this.drag ? 0 : transitionDuration).ease(d3.easeCubicOut).attr('x1', xScale(0)).attr('y1', yScale(0.47) + 5) // FIX - no hardcoding
      .attr('x2', xScale(0)).attr('y2', yScale(0.47) - 5); // FIX - no hardcoding

      var cLabelTransition = cMerge.select('.label').transition().duration(this.drag ? 0 : transitionDuration).ease(d3.easeCubicOut).attr('x', xScale(0) + (this.l < 0 ? 5 : -5)).attr('y', yScale(0.47) + 3) // FIX - no hardcoding
      .attr('text-anchor', this.c < 0 ? 'start' : 'end');
      cLabelTransition.select('.value').tween('text', function (datum, index, elements) {
        var element = elements[index];
        var interpolateC = d3.interpolate(element.c !== undefined ? element.c : _this2.c, _this2.c);
        return function (time) {
          element.c = interpolateC(time);
          d3.select(element).text(+element.c.toFixed(3));
        };
      }); //  EXIT

      cUpdate.exit().remove(); // s Measure
      //  DATA-JOIN

      var sUpdate = contentMerge.selectAll('.measure-s').data(this.variance ? [{}] : []); //  ENTER

      var sEnter = sUpdate.enter().append('g').classed('measure-s', true);
      sEnter.append('line').classed('line', true);
      sEnter.append('line').classed('cap-left', true);
      sEnter.append('line').classed('cap-right', true);
      var sLabel = sEnter.append('text').classed('label', true);
      sLabel.append('tspan').classed('s math-var', true).text('σ');
      sLabel.append('tspan').classed('equals', true).text(' = ');
      sLabel.append('tspan').classed('value', true); //  MERGE

      var sMerge = sEnter.merge(sUpdate);
      sMerge.select('.line').transition().duration(this.drag ? 0 : transitionDuration).ease(d3.easeCubicOut).attr('x1', xScale(this.muS - this.s)).attr('y1', yScale(jStat.normal.pdf(this.s, 0, this.s)) + 10 / this.s) // FIX - no hardcoding
      .attr('x2', xScale(this.muS + this.s)).attr('y2', yScale(jStat.normal.pdf(this.s, 0, this.s)) + 10 / this.s); // FIX - no hardcoding

      sMerge.select('.cap-left').transition().duration(this.drag ? 0 : transitionDuration).ease(d3.easeCubicOut).attr('x1', xScale(this.muS - this.s)).attr('y1', yScale(jStat.normal.pdf(this.s, 0, this.s)) + 10 / this.s + 5) // FIX - no hardcoding
      .attr('x2', xScale(this.muS - this.s)).attr('y2', yScale(jStat.normal.pdf(this.s, 0, this.s)) + 10 / this.s - 5); // FIX - no hardcoding

      sMerge.select('.cap-right').transition().duration(this.drag ? 0 : transitionDuration).ease(d3.easeCubicOut).attr('x1', xScale(this.muS + this.s)).attr('y1', yScale(jStat.normal.pdf(this.s, 0, this.s)) + 10 / this.s + 5) // FIX - no hardcoding
      .attr('x2', xScale(this.muS + this.s)).attr('y2', yScale(jStat.normal.pdf(this.s, 0, this.s)) + 10 / this.s - 5); // FIX - no hardcoding

      var sLabelTransition = sMerge.select('.label').transition().duration(this.drag ? 0 : transitionDuration).ease(d3.easeCubicOut).attr('x', xScale(this.muS)).attr('y', yScale(jStat.normal.pdf(this.s, 0, this.s)) + 10 / this.s - 3); // FIX - no hardcoding

      sLabelTransition.select('.value').tween('text', function (datum, index, elements) {
        var element = elements[index];
        var interpolateS = d3.interpolate(element.s !== undefined ? element.s : _this2.s, _this2.s);
        return function (time) {
          element.s = interpolateS(time);
          d3.select(element).text(+element.s.toFixed(3));
        };
      }); //  EXIT

      sUpdate.exit().remove(); // Threshold Line
      //  DATA-JOIN

      var thresholdUpdate = contentMerge.selectAll('.threshold').data(this.threshold ? [{}] : []); //  ENTER

      var thresholdEnter = thresholdUpdate.enter().append('g').classed('threshold', true);
      thresholdEnter.append('line').classed('line', true);
      thresholdEnter.append('circle').classed('handle', true).attr('r', 6);
      /* HACK: Firefox does not support CSS SVG Geometry Properties */
      //  MERGE

      var thresholdMerge = thresholdEnter.merge(thresholdUpdate).attr('tabindex', this.interactive ? 0 : null).classed('interactive', this.interactive);

      if (this.firstUpdate || changedProperties.has('interactive')) {
        if (this.interactive) {
          thresholdMerge.call(dragThreshold).on('keydown', function ()
          /* datum */
          {
            if (['ArrowRight', 'ArrowLeft'].includes(d3.event.key)) {
              var l = _this2.l; // eslint-disable-line prefer-destructuring

              switch (d3.event.key) {
                case 'ArrowRight':
                  l += d3.event.shiftKey ? 0.01 : 0.1;
                  break;

                case 'ArrowLeft':
                  l -= d3.event.shiftKey ? 0.01 : 0.1;
                  break;

                default:
              } // Clamp C to visible extent


              l = l < xScale.domain()[0] ? xScale.domain()[0] : l > xScale.domain()[1] ? xScale.domain()[1] : l;

              if (l !== _this2.l) {
                _this2.c = _sdtElement.default.l2c(l, _this2.s);

                _this2.alignState();

                _this2.sendEvent();
              }

              d3.event.preventDefault();
            }
          });
        } else {
          thresholdMerge.on('drag', null).on('keydown', null);
        }
      }

      thresholdMerge.select('.line').transition().duration(this.drag ? 0 : transitionDuration).ease(d3.easeCubicOut).attr('x1', xScale(this.l)).attr('y1', yScale(0)).attr('x2', xScale(this.l)).attr('y2', yScale(0.54));
      thresholdMerge.select('.handle').transition().duration(this.drag ? 0 : transitionDuration).ease(d3.easeCubicOut).attr('cx', xScale(this.l)).attr('cy', yScale(0.54)); //  EXIT

      thresholdUpdate.exit().remove(); // Histogram
      //  DATA-JOIN

      var histogramUpdate = contentMerge.selectAll('.histogram').data(this.histogram ? [{}] : []); //  ENTER

      var histogramEnter = histogramUpdate.enter().append('g').classed('histogram', true); //  MERGE

      var histogramMerge = histogramEnter.merge(histogramUpdate); //  EXIT

      histogramUpdate.exit().remove(); // Trials

      if (this.histogram) {
        var histogram = d3.histogram().value(function (datum) {
          return datum.trueEvidence;
        }).domain(xScale.domain()).thresholds(d3.range(this.binRange[0], this.binRange[1], this.binWidth));
        var hist = histogram(this.trials);
        var binCountLeft = -1;
        var binCountRight = -1;

        for (var i = 0; i < hist.length; i += 1) {
          for (var j = 0; j < hist[i].length; j += 1) {
            hist[i][j].binValue = hist[i].x0;
            hist[i][j].binCount = j;
            if (i === 0) binCountLeft = j;
            if (i === hist.length - 1) binCountRight = j;
          }
        } // Put out-of-range values in extreme left/right bins


        for (var _i = 0; _i < this.trials.length; _i += 1) {
          if (this.trials[_i].trueEvidence < this.binRange[0]) {
            binCountLeft += 1;
            this.trials[_i].binCount = binCountLeft;
            this.trials[_i].binValue = hist[0].x0;
          }

          if (this.trials[_i].trueEvidence > this.binRange[1]) {
            binCountRight += 1;
            this.trials[_i].binCount = binCountRight;
            this.trials[_i].binValue = hist[hist.length - 1].x0;
          }
        } //  DATA-JOIN


        var trialUpdate = histogramMerge.selectAll('.trial').data(this.trials, function (datum) {
          return datum.trial;
        }); //  ENTER

        var trialEnter = trialUpdate.enter().append('rect').attr('stroke-width', strokeWidth).attr('data-new-trial-ease-time', 0) // use 'data-trial-enter'
        .attr('stroke', this.getComputedStyleValue('---color-acc')).attr('fill', this.getComputedStyleValue('---color-acc-light')); //  MERGE

        var trialMerge = trialEnter.merge(trialUpdate).attr('class', function (datum) {
          return "trial ".concat(datum.outcome);
        }).attr('width', binWidth - strokeWidth).attr('height', binWidth - strokeWidth); //  MERGE - Active New Trials

        var trialMergeNewActive = trialMerge.filter(function (datum) {
          return datum.new && !datum.paused;
        });

        if (!trialMergeNewActive.empty()) {
          var easeTime = trialMergeNewActive.attr('data-new-trial-ease-time');

          var scaleIn = function scaleIn(time) {
            return d3.scaleLinear().domain([0, 1]).range([easeTime, 1])(time);
          };

          var scaleOutGenerator = function scaleOutGenerator(easeFunction) {
            return function (time) {
              return d3.scaleLinear().domain([easeFunction(easeTime), 1]).range([0, 1])(easeFunction(time));
            };
          };

          trialMergeNewActive.transition('new').duration(function (datum) {
            return Math.floor((datum.duration * 0.75 + datum.wait * 0.25) * (1 - easeTime));
          }).ease(scaleIn).attr('data-new-trial-ease-time', 1).attrTween('stroke', function (datum, index, elements) {
            var element = elements[index];
            var interpolator = d3.interpolateRgb(element.getAttribute('stroke'), _this2.color === 'stimulus' ? datum.signal === 'present' ? _this2.getComputedStyleValue('---color-hr') : _this2.getComputedStyleValue('---color-far') : _this2.color === 'response' ? _this2.getComputedStyleValue("---color-".concat(datum.response)) : _this2.color === 'outcome' ? _this2.getComputedStyleValue("---color-".concat(datum.outcome)) : _this2.getComputedStyleValue('---color-acc'));
            return function (time) {
              return interpolator(scaleOutGenerator(d3.easeCubicIn)(time));
            };
          }).attrTween('fill', function (datum, index, elements) {
            var element = elements[index];
            var interpolator = d3.interpolateRgb(element.getAttribute('fill'), _this2.color === 'stimulus' ? datum.signal === 'present' ? _this2.getComputedStyleValue('---color-hr-light') : _this2.getComputedStyleValue('---color-far-light') : _this2.color === 'response' ? _this2.getComputedStyleValue("---color-".concat(datum.response, "-light")) : _this2.color === 'outcome' ? _this2.getComputedStyleValue("---color-".concat(datum.outcome, "-light")) : _this2.getComputedStyleValue('---color-acc-light'));
            return function (time) {
              return interpolator(scaleOutGenerator(d3.easeCubicIn)(time));
            };
          }).attrTween('x', function (datum, index, elements) {
            var element = elements[index];
            var interpolator = d3.interpolate(element.getAttribute('x'), xScale(datum.binValue) + strokeWidth / 2);
            return function (time) {
              return interpolator(scaleOutGenerator(d3.easeCubicOut)(time));
            };
          }).attrTween('y', function (datum, index, elements) {
            var element = elements[index];
            var interpolator = d3.interpolate(element.getAttribute('y'), yScale(0) + strokeWidth / 2 - (datum.binCount + 1) * binWidth);
            return function (time) {
              return interpolator(scaleOutGenerator(d3.easeCubicIn)(time));
            };
          }).on('end', function (datum, index, elements) {
            var element = elements[index];
            element.removeAttribute('data-new-trial-ease-time');
            datum.new = false;

            _this2.alignTrial(datum);

            _this2.dispatchEvent(new CustomEvent('sdt-response', {
              detail: {
                stimulus: datum.signal,
                response: datum.response,
                outcome: datum.outcome,
                h: _this2.h,
                m: _this2.m,
                fa: _this2.fa,
                cr: _this2.cr,
                nr: 0
              },
              bubbles: true
            }));
          });
        } // MERGE - Paused New Trials


        var trialMergeNewPaused = trialMerge.filter(function (datum) {
          return datum.new && datum.paused;
        });

        if (!trialMergeNewPaused.empty()) {
          var _easeTime = trialMergeNewPaused.attr('data-new-trial-ease-time');

          trialMergeNewPaused.transition().duration(transitionDuration).ease(d3.easeCubicOut).attr('x', function (datum) {
            var interpolator = d3.interpolate(0, xScale(datum.binValue) + strokeWidth / 2);
            return interpolator(d3.easeCubicOut(_easeTime));
          }).attr('y', function (datum) {
            var interpolator = d3.interpolate(0, yScale(0) + strokeWidth / 2 - (datum.binCount + 1) * binWidth);
            return interpolator(d3.easeCubicIn(_easeTime));
          }).attr('stroke', function (datum) {
            var interpolator = d3.interpolateRgb(_this2.getComputedStyleValue('---color-acc'), _this2.color === 'stimulus' ? datum.signal === 'present' ? _this2.getComputedStyleValue('---color-hr') : _this2.getComputedStyleValue('---color-far') : _this2.color === 'response' ? _this2.getComputedStyleValue("---color-".concat(datum.response)) : _this2.color === 'outcome' ? _this2.getComputedStyleValue("---color-".concat(datum.outcome)) : _this2.getComputedStyleValue('---color-acc'));
            return interpolator(d3.easeCubicIn(_easeTime));
          }).attr('fill', function (datum) {
            var interpolator = d3.interpolateRgb(_this2.getComputedStyleValue('---color-acc-light'), _this2.color === 'stimulus' ? datum.signal === 'present' ? _this2.getComputedStyleValue('---color-hr-light') : _this2.getComputedStyleValue('---color-far-light') : _this2.color === 'response' ? _this2.getComputedStyleValue("---color-".concat(datum.response, "-light")) : _this2.color === 'outcome' ? _this2.getComputedStyleValue("---color-".concat(datum.outcome, "-light")) : _this2.getComputedStyleValue('---color-acc-light'));
            return interpolator(d3.easeCubicIn(_easeTime));
          });
        } //  MERGE - Old Trials


        trialMerge.filter(function (datum) {
          return !datum.new;
        }).transition().duration(transitionDuration).ease(d3.easeCubicOut).attr('x', function (datum) {
          return xScale(datum.binValue) + strokeWidth / 2;
        }).attr('y', function (datum) {
          return yScale(0) + strokeWidth / 2 - (datum.binCount + 1) * binWidth;
        }).attr('stroke', function (datum) {
          return _this2.color === 'stimulus' ? datum.signal === 'present' ? _this2.getComputedStyleValue('---color-hr') : _this2.getComputedStyleValue('---color-far') : _this2.color === 'response' ? _this2.getComputedStyleValue("---color-".concat(datum.response)) : _this2.color === 'outcome' ? _this2.getComputedStyleValue("---color-".concat(datum.outcome)) : _this2.getComputedStyleValue('---color-acc');
        }).attr('fill', function (datum) {
          return _this2.color === 'stimulus' ? datum.signal === 'present' ? _this2.getComputedStyleValue('---color-hr-light') : _this2.getComputedStyleValue('---color-far-light') : _this2.color === 'response' ? _this2.getComputedStyleValue("---color-".concat(datum.response, "-light")) : _this2.color === 'outcome' ? _this2.getComputedStyleValue("---color-".concat(datum.outcome, "-light")) : _this2.getComputedStyleValue('---color-acc-light');
        }); //  EXIT

        trialUpdate.exit().transition().duration(transitionDuration).ease(d3.easeLinear).attrTween('stroke', function (datum, index, elements) {
          var element = elements[index];
          var interpolator = d3.interpolateRgb(element.getAttribute('stroke'), _this2.getComputedStyleValue('---color-acc'));
          return function (time) {
            return interpolator(d3.easeCubicIn(time));
          };
        }).attrTween('fill', function (datum, index, elements) {
          var element = elements[index];
          var interpolator = d3.interpolateRgb(element.getAttribute('fill'), _this2.getComputedStyleValue('---color-acc-light'));
          return function (time) {
            return interpolator(d3.easeCubicIn(time));
          };
        }).attrTween('x', function (datum, index, elements) {
          var element = elements[index];
          var interpolator = d3.interpolate(element.getAttribute('x'), 0);
          return function (time) {
            return interpolator(d3.easeCubicIn(time));
          };
        }).attrTween('y', function (datum, index, elements) {
          var element = elements[index];
          var interpolator = d3.interpolate(element.getAttribute('y'), 0);
          return function (time) {
            return interpolator(d3.easeCubicOut(time));
          };
        }).remove();
      } // Overlayer
      //  ENTER


      var overlayerEnter = plotEnter.append('g').classed('overlayer', true); // MERGE

      var overlayerMerge = plotMerge.select('.overlayer'); // Background
      //  ENTER

      overlayerEnter.append('rect').classed('background', true); //  MERGE

      overlayerMerge.select('.background').attr('height', height).attr('width', width);
      this.drag = false;
      this.firstUpdate = false;
    } // Called to pause trial animations!

  }, {
    key: "pauseTrial",
    value: function pauseTrial() {
      var trialNew = d3.select(this.renderRoot).select('.trial[data-new-trial-ease-time]');
      trialNew.interrupt('new');
      trialNew.datum(function (datum) {
        datum.paused = true;
        return datum;
      });
    } // Called to resume trial animations!

  }, {
    key: "resumeTrial",
    value: function resumeTrial() {
      var trialNew = d3.select(this.renderRoot).select('.trial[data-new-trial-ease-time]');
      trialNew.datum(function (datum) {
        datum.paused = false;
        return datum;
      });
      this.requestUpdate();
    }
  }], [{
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(SDTModel), "styles", this), (0, _litElement.css)(_templateObject2())];
    }
  }]);

  return SDTModel;
}(_sdtElement.default);

exports.default = SDTModel;
customElements.define('sdt-model', SDTModel);
//# sourceMappingURL=sdt-model.js.map
