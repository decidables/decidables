"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _litElement = require("lit-element");

var d3 = _interopRequireWildcard(require("d3"));

var _sdtElement = _interopRequireDefault(require("../sdt-element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        :host {\n          display: inline-block;\n        }\n\n        .main {\n          width: 100%;\n          height: 100%;\n        }\n\n        .background {\n          fill: var(---color-element-disabled);\n          stroke: none;\n        }\n\n        .outline {\n          fill: none;\n          stroke: var(---color-element-emphasis);\n          stroke-width: 2px;\n        }\n\n        .dot {\n          /* r: 2px; HACK: Firefox does not support CSS SVG Geometry Properties */\n        }\n\n        .dots.coherent {\n          fill: var(---color-background);\n        }\n\n        .dots.random {\n          fill: var(---color-background);\n        }\n\n        .fixation {\n          stroke: var(---color-text);\n          stroke-width: 2px;\n        }\n\n        .query {\n          font-size: 1.75rem;\n          font-weight: 600;\n        }\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

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
  RDKTask element
  <rdk-task>

  Attributes:
  Dots; Coherence;
  # Direction, Speed, Lifetime
*/
var RDKTask = /*#__PURE__*/function (_SDTElement) {
  _inherits(RDKTask, _SDTElement);

  _createClass(RDKTask, null, [{
    key: "properties",
    get: function get() {
      return {
        coherence: {
          attribute: 'coherence',
          type: Number,
          reflect: true
        },
        count: {
          attribute: 'count',
          type: Number,
          reflect: true
        },
        probability: {
          attribute: 'probability',
          type: Number,
          reflect: true
        },
        duration: {
          attribute: 'duration',
          type: Number,
          reflect: true
        },
        wait: {
          attribute: 'wait',
          type: Number,
          reflect: true
        },
        iti: {
          attribute: 'iti',
          type: Number,
          reflect: true
        },
        trials: {
          attribute: 'trials',
          type: Number,
          reflect: true
        },
        running: {
          attribute: 'running',
          type: Boolean,
          reflect: true
        },
        direction: {
          attribute: false,
          type: Number,
          reflect: false
        },
        lifetime: {
          attribute: false,
          type: Number,
          reflect: false
        },
        speed: {
          attribute: false,
          type: Number,
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

  function RDKTask() {
    var _this;

    _classCallCheck(this, RDKTask);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RDKTask).call(this)); // Attributes

    _this.coherence = 0.5; // Proportion of dots moving coherently

    _this.count = 100; // Number of dots

    _this.probability = 0.5; // Probability of signal (as opposed to noise)

    _this.duration = 2000; // Duration of stimulus in milliseconds

    _this.wait = 2000; // Duration of wait period for response in milliseconds

    _this.iti = 2000; // Duration of inter-trial interval in milliseconds

    _this.trials = 5; // Number of trials per block

    _this.running = false; // Currently executing block of trials
    // Properties

    _this.direction = -1; // Direction of current trial in degrees

    _this.lifetime = 400; // Lifetime of each dot in milliseconds

    _this.speed = 50; // Rate of dot movement in pixels per second

    _this.width = NaN; // Width of component in pixels

    _this.height = NaN; // Height of component in pixels

    _this.rem = NaN; // Pixels per rem for component
    // Private

    _this.COHERENT = 0; // "Constant" for index to coherent dots

    _this.RANDOM = 1; // "Constant" for index to random dots

    _this.dots = [[], []]; // Array of array of dots

    _this.trial = 0; // Count of current trial

    _this.states = ['resetted', 'iti', 'stimulus', 'wait', 'ended']; // Possible states of task

    _this.state = 'resetted'; // Current state of task

    _this.baseTime = 0; // Real time, in milliseconds, that the current block started

    _this.pauseTime = 0; // Real time, in milliseconds, that block was paused at

    _this.startTime = 0; // Virtual time, in milliseconds, that current stage of trial started

    _this.lastTime = 0; // Virtual time, in milliseconds, of the most recent frame

    _this.currentDirection = undefined; // Direction in degrees for current trial

    _this.signals = ['present', 'absent']; // Possible trial types

    _this.signal = undefined; // Current trial type

    _this.runner = undefined; // D3 Interval for frame timing

    _this.xScale = undefined; // D3 Scale for x-axis

    _this.yScale = undefined; // D3 Scale for y-axis

    return _this;
  }

  _createClass(RDKTask, [{
    key: "render",
    value: function render() {
      // eslint-disable-line class-methods-use-this
      return (0, _litElement.html)(_templateObject());
    }
  }, {
    key: "getDimensions",
    value: function getDimensions() {
      this.width = parseFloat(this.getComputedStyleValue('width'), 10);
      this.height = parseFloat(this.getComputedStyleValue('height'), 10);
      this.rem = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('font-size'), 10); // console.log(`rdk-task: width = ${this.width}, height = ${this.height}, rem = ${this.rem}`);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(RDKTask.prototype), "connectedCallback", this).call(this);

      window.addEventListener('resize', this.getDimensions.bind(this));
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      window.removeEventListener('resize', this.getDimensions.bind(this));

      _get(_getPrototypeOf(RDKTask.prototype), "disconnectedCallback", this).call(this);
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated(changedProperties) {
      _get(_getPrototypeOf(RDKTask.prototype), "firstUpdated", this).call(this, changedProperties); // Get the width and height after initial render/update has occurred
      // HACK Edge: Edge doesn't have width/height until after a 0ms timeout


      window.setTimeout(this.getDimensions.bind(this), 0);
    }
  }, {
    key: "update",
    value: function update(changedProperties) {
      var _this2 = this;

      _get(_getPrototypeOf(RDKTask.prototype), "update", this).call(this, changedProperties); // Bail out if we can't get the width/height/rem


      if (Number.isNaN(this.width) || Number.isNaN(this.height) || Number.isNaN(this.rem)) {
        return;
      }

      var elementWidth = this.width;
      var elementHeight = this.height;
      var elementSize = Math.min(elementWidth, elementHeight);
      var margin = {
        top: 0.25 * this.rem,
        bottom: 0.25 * this.rem,
        left: 0.25 * this.rem,
        right: 0.25 * this.rem
      };
      var height = elementSize - (margin.top + margin.bottom);
      var width = elementSize - (margin.left + margin.right); // X Scale

      this.xScale = d3.scaleLinear().domain([-1, 1]).range([0, width]); // Y Scale

      this.yScale = d3.scaleLinear().domain([1, -1]).range([0, height]); // Svg
      //  DATA-JOIN

      var svgUpdate = d3.select(this.renderRoot).selectAll('.main').data([{
        width: this.width,
        height: this.height,
        rem: this.rem
      }]); //  ENTER

      var svgEnter = svgUpdate.enter().append('svg').classed('main', true); //  MERGE

      var svgMerge = svgEnter.merge(svgUpdate).attr('viewBox', "0 0 ".concat(elementSize, " ").concat(elementSize)); // Clippath
      //  ENTER

      svgEnter.append('clipPath').attr('id', 'clip-rdk-task').append('circle'); //  MERGE

      svgMerge.select('clipPath circle').attr('cx', this.xScale(0)).attr('cy', this.yScale(0)).attr('r', this.xScale(1) - this.xScale(0)); // Plot
      //  ENTER

      var plotEnter = svgEnter.append('g').classed('plot', true); //  MERGE

      var plotMerge = svgMerge.select('.plot').attr('transform', "translate(".concat(margin.left, ", ").concat(margin.top, ")")); // Underlayer
      //  ENTER

      var underlayerEnter = plotEnter.append('g').classed('underlayer', true); // MERGE

      var underlayerMerge = plotMerge.select('.underlayer'); // Background
      //  ENTER

      underlayerEnter.append('circle').classed('background', true); //  MERGE

      underlayerMerge.select('.background').attr('cx', this.xScale(0)).attr('cy', this.yScale(0)).attr('r', this.xScale(1) - this.xScale(0)); // Content
      //  ENTER

      plotEnter.append('g').classed('content', true).attr('clip-path', 'url(#clip-rdk-task)'); //  MERGE

      var contentMerge = plotMerge.select('.content'); // Dot Groups
      //  DATA-JOIN

      var dotsUpdate = contentMerge.selectAll('.dots').data([[], []]); //  ENTER

      dotsUpdate.enter().append('g').classed('dots', true).classed('coherent', function (datum, index) {
        return index === _this2.COHERENT;
      }).classed('random', function (datum, index) {
        return index === _this2.RANDOM;
      }); // Overlayer
      //  ENTER

      var overlayerEnter = plotEnter.append('g').classed('overlayer', true); // MERGE

      var overlayerMerge = plotMerge.select('.overlayer'); // Outline
      //  ENTER

      overlayerEnter.append('circle').classed('outline', true); //  MERGE

      overlayerMerge.select('.outline').attr('cx', this.xScale(0)).attr('cy', this.yScale(0)).attr('r', this.xScale(1) - this.yScale(0)); // Start or stop trial block

      if (changedProperties.has('running')) {
        if (this.running) {
          // (Re)Start
          if (this.pauseTime) {
            // Shift timeline forward as if paused time never happened
            this.baseTime += d3.now() - this.pauseTime;
            this.pauseTime = 0;
          }

          this.runner = d3.interval(this.run.bind(this), 20); // FIXME??
        } else if (this.runner !== undefined) {
          // Pause
          this.runner.stop();
          this.pauseTime = d3.now();
        }
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.runner.stop();
      this.running = false;
      this.trial = 0;
      this.state = 'resetted';
      this.baseTime = 0;
      this.pauseTime = 0;
      this.startTime = 0;
      this.lastTime = 0;
      this.signal = undefined;
      this.currentDirection = undefined;
      var dotsUpdate = d3.select(this.renderRoot).select('.content').selectAll('.dots').data([[], []]);
      var dotUpdate = dotsUpdate.selectAll('.dot').data(function (datum) {
        return datum;
      });
      dotUpdate.exit().remove();
      var fixationUpdate = d3.select(this.renderRoot).select('.content').selectAll('.fixation').data([]);
      fixationUpdate.exit().remove();
      var queryUpdate = d3.select(this.renderRoot).select('.content').selectAll('.query').data([]);
      queryUpdate.exit().remove();
    }
  }, {
    key: "run",
    value: function run()
    /* elapsed */
    {
      var realTime = d3.now();
      var currentTime = this.baseTime ? realTime - this.baseTime : 0;
      var elapsedTime = this.baseTime ? currentTime - this.startTime : 0;
      var frameTime = this.baseTime ? currentTime - this.lastTime : 0;
      this.lastTime = currentTime;
      var newTrial = false;

      if (this.state === 'resetted') {
        // Start block with an ITI
        this.state = 'iti';
        this.baseTime = realTime;
        this.startTime = 0;
        this.dispatchEvent(new CustomEvent('rdk-block-start', {
          detail: {
            trials: this.trials
          },
          bubbles: true
        }));
      } else if (this.state === 'iti' && elapsedTime >= this.iti) {
        // Start new trial with a stimulus
        newTrial = true;
        this.trial += 1;
        this.state = 'stimulus';
        this.startTime = currentTime;
        this.signal = Math.random() < this.probability ? 'present' : 'absent';
        this.currentDirection = this.signal === 'absent' ? undefined : this.direction >= 0 ? this.direction : Math.random() * 360;
        this.dispatchEvent(new CustomEvent('rdk-trial-start', {
          detail: {
            trials: this.trials,
            duration: this.duration,
            wait: this.wait,
            iti: this.iti,
            trial: this.trial,
            signal: this.signal
          },
          bubbles: true
        }));
      } else if (this.state === 'stimulus' && elapsedTime >= this.duration) {
        // Stimulus is over, now wait
        this.state = 'wait';
        this.startTime = currentTime;
        this.dispatchEvent(new CustomEvent('rdk-trial-middle', {
          detail: {
            trials: this.trials,
            duration: this.duration,
            wait: this.wait,
            iti: this.iti,
            trial: this.trial,
            signal: this.signal
          },
          bubbles: true
        }));
      } else if (this.state === 'wait' && elapsedTime >= this.wait) {
        // Wait is over, end of trial
        this.dispatchEvent(new CustomEvent('rdk-trial-end', {
          detail: {
            trials: this.trials,
            duration: this.duration,
            wait: this.wait,
            iti: this.iti,
            trial: this.trial,
            signal: this.signal
          },
          bubbles: true
        }));

        if (this.trial >= this.trials) {
          // End of block
          this.runner.stop();
          this.running = false;
          this.state = 'ended';
          this.baseTime = 0;
          this.pauseTime = 0;
          this.startTime = 0;
          this.lastTime = 0;
          this.signal = undefined;
          this.currentDirection = undefined;
          this.dispatchEvent(new CustomEvent('rdk-block-end', {
            detail: {
              trials: this.trial
            },
            bubbles: true
          }));
        } else {
          // ITI
          this.state = 'iti';
          this.startTime = currentTime;
        }
      } // Dots


      if (this.state === 'stimulus') {
        this.dots[this.COHERENT].length = this.signal === 'present' ? Math.round(this.count * this.coherence) : 0;
        this.dots[this.RANDOM].length = this.signal === 'present' ? this.count - this.dots[this.COHERENT].length : this.count;

        for (var t = 0; t < this.dots.length; t += 1) {
          for (var i = 0; i < this.dots[t].length; i += 1) {
            var newDot = this.dots[t][i] === undefined;

            if (newDot) {
              this.dots[t][i] = {};
            }

            var dot = this.dots[t][i];

            if (newTrial || newDot) {
              dot.direction = t === this.RANDOM ? Math.random() * 360 : this.currentDirection;
              dot.birth = currentTime - Math.floor(Math.random() * this.lifetime);
              var angle = Math.random() * 2 * Math.PI;
              var radius = Math.sqrt(Math.random());
              dot.x = this.xScale(radius * Math.cos(angle));
              dot.y = this.yScale(radius * Math.sin(angle));
            } else if (currentTime > dot.birth + this.lifetime) {
              // Dot has died, so rebirth
              dot.birth += this.lifetime;
              dot.direction = t === this.RANDOM ? Math.random() * 360 : this.currentDirection;

              var _angle = Math.random() * 2 * Math.PI;

              var _radius = Math.sqrt(Math.random());

              dot.x = this.xScale(_radius * Math.cos(_angle));
              dot.y = this.yScale(_radius * Math.sin(_angle));
            } else {
              if (t === this.COHERENT) {
                dot.direction = this.currentDirection;
              }

              var directionR = dot.direction * (Math.PI / 180);
              dot.dx = this.speed * (frameTime / 1000) * Math.cos(directionR);
              dot.dy = this.speed * (frameTime / 1000) * Math.sin(directionR); // Update position

              dot.x += dot.dx;
              dot.y += dot.dy; // Calculate squared distance from center

              var distance2 = Math.pow(dot.x - this.xScale(0), 2) + Math.pow(dot.y - this.yScale(0), 2);
              var radius2 = Math.pow(this.xScale(1) - this.xScale(0), 2);

              if (distance2 > radius2) {
                // Dot has exited so move to other side
                dot.x = -(dot.x - this.xScale(0)) + this.xScale(0);
                dot.y = -(dot.y - this.yScale(0)) + this.yScale(0);
              }
            }
          }
        }
      } // Fixation
      //  DATA-JOIN


      var fixationUpdate = d3.select(this.renderRoot).select('.content').selectAll('.fixation').data(this.state === 'iti' ? [true] : []); //  ENTER

      var fixationEnter = fixationUpdate.enter().append('g').classed('fixation', true);
      fixationEnter.append('line').attr('x1', this.xScale(-0.1)).attr('y1', this.xScale(0)).attr('x2', this.xScale(0.1)).attr('y2', this.xScale(0));
      fixationEnter.append('line').attr('x1', this.xScale(0)).attr('y1', this.xScale(-0.1)).attr('x2', this.xScale(0)).attr('y2', this.xScale(0.1)); //  EXIT

      fixationUpdate.exit().remove(); // Dots
      //  DATA-JOIN

      var dotsUpdate = d3.select(this.renderRoot).select('.content').selectAll('.dots').data(this.state === 'stimulus' ? this.dots : [[], []]);
      var dotUpdate = dotsUpdate.selectAll('.dot').data(function (datum) {
        return datum;
      }); //  ENTER

      var dotEnter = dotUpdate.enter().append('circle').classed('dot', true).attr('r', 2);
      /* HACK: Firefox does not support CSS SVG Geometry Properties */
      //  MERGE

      dotEnter.merge(dotUpdate).attr('cx', function (datum) {
        return datum.x;
      }).attr('cy', function (datum) {
        return datum.y;
      }); //  EXIT

      dotUpdate.exit().remove(); // Query
      //  DATA-JOIN

      var queryUpdate = d3.select(this.renderRoot).select('.content').selectAll('.query').data(this.state === 'wait' ? [true] : []); //  ENTER

      var queryEnter = queryUpdate.enter().append('g').classed('query', true);
      queryEnter.append('text').attr('x', this.xScale(0)).attr('y', this.xScale(0)).attr('text-anchor', 'middle').attr('alignment-baseline', 'middle').text('?'); //  EXIT

      queryUpdate.exit().remove();
    }
  }], [{
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(RDKTask), "styles", this), (0, _litElement.css)(_templateObject2())];
    }
  }]);

  return RDKTask;
}(_sdtElement.default);

exports.default = RDKTask;
customElements.define('rdk-task', RDKTask);
//# sourceMappingURL=rdk-task.js.map
