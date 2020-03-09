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
  var data = _taggedTemplateLiteral(["\n        :host {\n          display: inline-block;\n        }\n\n        .main {\n          width: 100%;\n          height: 100%;\n        }\n\n        .plot-contour,\n        .legend-contour .contour {\n          stroke: var(---color-background);\n          stroke-width: 0.5;\n        }\n\n        text {\n          /* stylelint-disable property-no-vendor-prefix */\n          -webkit-user-select: none;\n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n        }\n\n        .point.interactive {\n          cursor: move;\n\n          filter: url(\"#shadow-2\");\n          outline: none;\n\n          /* HACK: This gets Safari to correctly apply the filter! */\n          /* https://github.com/emilbjorklund/svg-weirdness/issues/27 */\n          stroke: #000000;\n          stroke-opacity: 0;\n          stroke-width: 0;\n        }\n\n        /* Make a larger target for touch users */\n        @media (pointer: coarse) {\n          .point.interactive .circle {\n            stroke: #000000;\n            stroke-opacity: 0;\n            stroke-width: 12px;\n          }\n        }\n\n        .point.interactive:hover {\n          filter: url(\"#shadow-4\");\n\n          /* HACK: This gets Safari to correctly apply the filter! */\n          stroke: #ff0000;\n        }\n\n        .point.interactive:active {\n          filter: url(\"#shadow-8\");\n\n          /* HACK: This gets Safari to correctly apply the filter! */\n          stroke: #00ff00;\n        }\n\n        :host(.keyboard) .point.interactive:focus {\n          filter: url(\"#shadow-8\");\n\n          /* HACK: This gets Safari to correctly apply the filter! */\n          stroke: #0000ff;\n        }\n\n        .background {\n          fill: var(---color-element-background);\n          stroke: var(---color-element-border);\n          stroke-width: 1;\n          shape-rendering: crispEdges;\n        }\n\n        .title-x,\n        .title-y,\n        .title-contour {\n          font-weight: 600;\n\n          fill: currentColor;\n        }\n\n        .tick {\n          font-size: 0.75rem;\n        }\n\n        .axis-x path,\n        .axis-x line,\n        .axis-y path,\n        .axis-y line {\n          stroke: var(---color-element-border);\n        }\n\n        .axis-contour .domain {\n          stroke: none;\n        }\n\n        .diagonal {\n          stroke: var(---color-element-border);\n          stroke-dasharray: 4;\n          stroke-width: 1;\n        }\n\n        .curve-iso-d {\n          fill: none;\n          stroke: var(---color-d);\n          stroke-width: 2;\n        }\n\n        .curve-iso-c {\n          fill: none;\n          stroke: var(---color-c);\n          stroke-width: 2;\n        }\n\n        .point .circle {\n          fill: var(---color-element-emphasis);\n\n          /* r: 6; HACK: Firefox does not support CSS SVG Geometry Properties */\n        }\n\n        .point .label {\n          font-size: 0.75rem;\n\n          dominant-baseline: middle;\n          text-anchor: middle;\n\n          fill: var(---color-text-inverse);\n        }\n      "]);

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
  ROCSpace element
  <roc-space>

  Attributes:
    FAR; HR;
    d'; C; zFAR; zHR

    draggable: yes/no

    scale: FAR/HR; zFAR/zHR; d'/C
    grid: FAR/HR; zFAR/zHR; d'/C
    isos: d'; C; FAR; HR

  Styles:
    ??
*/
var ROCSpace = /*#__PURE__*/function (_SDTElement) {
  _inherits(ROCSpace, _SDTElement);

  _createClass(ROCSpace, null, [{
    key: "properties",
    get: function get() {
      return {
        contour: {
          attribute: 'contour',
          type: String,
          reflect: true
        },
        point: {
          attribute: 'point',
          type: String,
          reflect: true
        },
        isoD: {
          attribute: 'iso-d',
          type: String,
          reflect: true
        },
        isoC: {
          attribute: 'iso-c',
          type: String,
          reflect: true
        },
        zRoc: {
          attribute: 'z-roc',
          type: Boolean,
          reflect: true
        },
        far: {
          attribute: 'far',
          type: Number,
          reflect: true
        },
        hr: {
          attribute: 'hr',
          type: Number,
          reflect: true
        },
        d: {
          attribute: false,
          type: Number,
          reflect: false
        },
        c: {
          attribute: false,
          type: Number,
          reflect: false
        },
        s: {
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

  function ROCSpace() {
    var _this;

    _classCallCheck(this, ROCSpace);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ROCSpace).call(this));
    _this.firstUpdate = true;
    _this.drag = false;
    _this.sdt = false;
    _this.contours = ['sensitivity', 'bias', 'accuracy'];
    _this.contour = undefined;
    _this.points = ['all', 'first', 'rest', 'none'];
    _this.point = 'all';
    _this.isoDs = ['all', 'first', 'rest', 'none'];
    _this.isoD = 'first';
    _this.isoCs = ['all', 'first', 'rest', 'none'];
    _this.isoC = 'first';
    _this.zRoc = false;
    _this.far = 0.25;
    _this.hr = 0.75;
    _this.s = 1;
    _this.label = '';
    _this.locations = [{
      name: 'default',
      far: _this.far,
      hr: _this.hr,
      s: _this.s,
      label: ''
    }];
    _this.pointArray = [];
    _this.isoDArray = [];
    _this.isoCArray = [];
    _this.width = NaN;
    _this.height = NaN;
    _this.rem = NaN;

    _this.alignState();

    return _this;
  }

  _createClass(ROCSpace, [{
    key: "alignState",
    value: function alignState() {
      var _this2 = this;

      this.locations[0].hr = this.hr;
      this.locations[0].far = this.far;
      this.locations[0].s = this.s;
      this.locations[0].label = this.label;
      this.d = _sdtElement.default.hrfar2d(this.hr, this.far, this.s);
      this.c = _sdtElement.default.hrfar2c(this.hr, this.far, this.s);
      this.pointArray = [];
      this.isoDArray = [];
      this.isoCArray = [];
      this.locations.forEach(function (item, index) {
        item.d = _sdtElement.default.hrfar2d(item.hr, item.far, item.s);
        item.c = _sdtElement.default.hrfar2c(item.hr, item.far, item.s);

        if (index === 0 && (_this2.point === 'first' || _this2.point === 'all')) {
          _this2.pointArray.push(item);
        } else if (index > 0 && (_this2.point === 'rest' || _this2.point === 'all')) {
          _this2.pointArray.push(item);
        }

        if (index === 0 && (_this2.isoD === 'first' || _this2.isoD === 'all')) {
          _this2.isoDArray.push(item);
        } else if (index > 0 && (_this2.isoD === 'rest' || _this2.isoD === 'all')) {
          _this2.isoDArray.push(item);
        }

        if (index === 0 && (_this2.isoC === 'first' || _this2.isoC === 'all')) {
          _this2.isoCArray.push(item);
        } else if (index > 0 && (_this2.isoC === 'rest' || _this2.isoC === 'all')) {
          _this2.isoCArray.push(item);
        }
      });
    }
  }, {
    key: "set",
    value: function set(hr, far) {
      var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';
      var label = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

      if (name === 'default') {
        this.hr = hr;
        this.far = far;
        this.s = s;
        this.label = label;
      }

      var location = this.locations.find(function (item) {
        return item.name === name;
      });

      if (location === undefined) {
        this.locations.push({
          name: name,
          far: far,
          hr: hr,
          s: s,
          label: label
        });
      } else {
        location.hr = hr;
        location.far = far;
        location.s = s;
        location.label = label;
      }

      this.requestUpdate();
    }
  }, {
    key: "setWithSDT",
    value: function setWithSDT(d, c) {
      var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';
      var label = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

      if (name === 'default') {
        this.hr = _sdtElement.default.dc2hr(d, c, s);
        this.far = _sdtElement.default.dc2far(d, c, s);
        this.s = s;
        this.label = label;
      }

      var location = this.locations.find(function (item) {
        return item.name === name;
      });

      if (location === undefined) {
        this.locations.push({
          name: name,
          far: _sdtElement.default.dc2far(d, c, s),
          hr: _sdtElement.default.dc2hr(d, c, s),
          s: s,
          label: label
        });
      } else {
        location.hr = _sdtElement.default.dc2hr(d, c, s);
        location.far = _sdtElement.default.dc2far(d, c, s);
        location.s = s;
        location.label = label;
      }

      this.sdt = true;
      this.requestUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      // eslint-disable-line class-methods-use-this
      return (0, _litElement.html)(_templateObject(), _sdtElement.default.svgFilters);
    }
  }, {
    key: "getDimensions",
    value: function getDimensions() {
      this.width = parseFloat(this.getComputedStyleValue('width'), 10);
      this.height = parseFloat(this.getComputedStyleValue('height'), 10);
      this.rem = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('font-size'), 10); // console.log(`roc-space: width = ${this.width}, height = ${this.height}, rem = ${this.rem}`);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(ROCSpace.prototype), "connectedCallback", this).call(this);

      window.addEventListener('resize', this.getDimensions.bind(this));
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      window.removeEventListener('resize', this.getDimensions.bind(this));

      _get(_getPrototypeOf(ROCSpace.prototype), "disconnectedCallback", this).call(this);
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated(changedProperties) {
      _get(_getPrototypeOf(ROCSpace.prototype), "firstUpdated", this).call(this, changedProperties); // Get the width and height after initial render/update has occurred
      // HACK Edge: Edge doesn't have width/height until after a 0ms timeout


      window.setTimeout(this.getDimensions.bind(this), 0);
    }
  }, {
    key: "update",
    value: function update(changedProperties) {
      var _this3 = this;

      _get(_getPrototypeOf(ROCSpace.prototype), "update", this).call(this, changedProperties);

      this.alignState(); // Bail out if we can't get the width/height/rem

      if (Number.isNaN(this.width) || Number.isNaN(this.height) || Number.isNaN(this.rem)) {
        return;
      }

      var elementWidth = this.width;
      var elementHeight = this.height;
      var elementSize = Math.min(elementWidth, elementHeight);
      var margin = {
        top: 2 * this.rem,
        bottom: 3 * this.rem,
        left: 3 * this.rem,
        right: 2 * this.rem
      };
      var height = elementSize - (margin.top + margin.bottom);
      var width = elementSize - (margin.left + margin.right);
      var transitionDuration = parseInt(this.getComputedStyleValue('---transition-duration'), 10); // X Scale

      var xScale = d3.scaleLinear().domain(this.zRoc ? [-3, 3] : [0, 1]) // zFAR or FAR
      .range([0, width]);
      this.xScale = xScale; // Y Scale

      var yScale = d3.scaleLinear().domain(this.zRoc ? [3, -3] : [1, 0]) // zHR or HR
      .range([0, height]);
      this.yScale = yScale; // Drag behavior

      var drag = d3.drag().subject(function (datum) {
        return {
          x: _this3.xScale(_this3.zRoc ? _sdtElement.default.far2zfar(datum.far) : datum.far),
          y: _this3.yScale(_this3.zRoc ? _sdtElement.default.hr2zhr(datum.hr) : datum.hr)
        };
      }).on('start', function (datum, index, elements) {
        var element = elements[index];
        d3.select(element).classed('dragging', true);
      }).on('drag', function (datum) {
        _this3.drag = true;
        var far = _this3.zRoc ? _sdtElement.default.zfar2far(_this3.xScale.invert(d3.event.x)) : _this3.xScale.invert(d3.event.x);
        var hr = _this3.zRoc ? _sdtElement.default.zhr2hr(_this3.yScale.invert(d3.event.y)) : _this3.yScale.invert(d3.event.y); // Clamp FAR and HR to ROC Space

        datum.far = far < 0.001 ? 0.001 : far > 0.999 ? 0.999 : far;
        datum.hr = hr <= 0.001 ? 0.001 : hr >= 0.999 ? 0.999 : hr; // console.log(`roc-space.drag: far = ${datum.far}, hr = ${datum.hr}`);

        if (datum.name === 'default') {
          _this3.far = datum.far;
          _this3.hr = datum.hr;
        }

        _this3.alignState();

        _this3.requestUpdate();

        _this3.dispatchEvent(new CustomEvent('roc-point-change', {
          detail: {
            name: datum.name,
            far: datum.far,
            hr: datum.hr,
            d: datum.d,
            c: datum.c,
            s: datum.s,
            label: datum.label
          },
          bubbles: true
        }));
      }).on('end', function (datum, index, elements) {
        var element = elements[index];
        d3.select(element).classed('dragging', false);
      }); // Line for FAR/HR Space

      var line = d3.line().x(function (datum) {
        return xScale(_this3.zRoc ? _sdtElement.default.far2zfar(datum.far) : datum.far);
      }).y(function (datum) {
        return yScale(_this3.zRoc ? _sdtElement.default.hr2zhr(datum.hr) : datum.hr);
      }); // Svg
      //  DATA-JOIN

      var svgUpdate = d3.select(this.renderRoot).selectAll('.main').data([{
        width: this.width,
        height: this.height,
        rem: this.rem
      }]); //  ENTER

      var svgEnter = svgUpdate.enter().append('svg').classed('main', true); //  MERGE

      var svgMerge = svgEnter.merge(svgUpdate).attr('viewBox', "0 0 ".concat(elementSize, " ").concat(elementSize)); // Plot
      //  ENTER

      var plotEnter = svgEnter.append('g').classed('plot', true); //  MERGE

      var plotMerge = svgMerge.select('.plot').attr('transform', "translate(".concat(margin.left, ", ").concat(margin.top, ")")); // Clippath
      //  ENTER

      plotEnter.append('clipPath').attr('id', 'clip-roc-space').append('rect'); //  MERGE

      plotMerge.select('clipPath rect').attr('height', height + 1).attr('width', width + 1); // Underlayer
      //  ENTER

      var underlayerEnter = plotEnter.append('g').classed('underlayer', true); // MERGE

      var underlayerMerge = plotMerge.select('.underlayer'); // Background
      //  ENTER

      underlayerEnter.append('rect').classed('background', true); //  MERGE

      underlayerMerge.select('.background').attr('height', height).attr('width', width); // Contour Plotting
      //  Handles: Bias, Sensitivity, & Accuracy

      if (this.firstUpdate || changedProperties.has('contour') || changedProperties.has('zRoc') || changedProperties.has('width') || changedProperties.has('height') || changedProperties.has('rem') || changedProperties.has('s')) {
        if (this.contour !== undefined) {
          // Contour Plot
          var n = 100; // Resolution

          var contourValues = [];

          for (var j = 0.5, k = 0; j < n; j += 1) {
            for (var i = 0.5; i < n; i += 1, k += 1) {
              var hr = this.zRoc ? _sdtElement.default.zhr2hr(i / n * 6 - 3) : i / n;
              var far = this.zRoc ? _sdtElement.default.zfar2far((1 - j / n) * 6 - 3) : 1 - j / n;
              contourValues[k] = this.contour === 'bias' ? _sdtElement.default.hrfar2c(hr, far, this.s) : this.contour === 'sensitivity' ? _sdtElement.default.hrfar2d(hr, far, this.s) : this.contour === 'accuracy' ? _sdtElement.default.hrfar2acc(hr, far) : null;
            }
          }

          var contourThresholds = this.contour === 'bias' ? d3.range(-3, 3, 0.25) : this.contour === 'sensitivity' ? d3.range(-6, 6, 0.5) : this.contour === 'accuracy' ? d3.range(0, 1, 0.05) : null;
          var contours = d3.contours().size([n, n]).thresholds(contourThresholds);
          var contourColorStart = this.getComputedStyleValue(this.contour === 'bias' ? '---color-element-background' : this.contour === 'sensitivity' ? '---color-d' : this.contour === 'accuracy' ? '---color-acc-dark' : null);
          var contourColorEnd = this.getComputedStyleValue(this.contour === 'bias' ? '---color-c' : this.contour === 'sensitivity' ? '---color-element-background' : this.contour === 'accuracy' ? '---color-element-background' : null);
          var contourColor = d3.scaleLinear().domain(d3.extent(contourThresholds)).interpolate(function () {
            return d3.interpolateRgb(contourColorStart, contourColorEnd);
          }); //  DATA-JOIN

          var contourPlotUpdate = underlayerMerge.selectAll('.plot-contour').data([this.contour]); //  ENTER

          var contourPlotEnter = contourPlotUpdate.enter().append('g').classed('plot-contour', true); //  MERGE

          var contourPlotMerge = contourPlotEnter.merge(contourPlotUpdate); // Contour Plot Contours
          //  DATA-JOIN

          var contoursUpdate = contourPlotMerge.selectAll('.contour').data(contours(contourValues)); //  ENTER

          var contoursEnter = contoursUpdate.enter().append('path').classed('contour', true); //  MERGE

          contoursEnter.merge(contoursUpdate).transition().duration(transitionDuration * 2) // Extra long transition!
          .ease(d3.easeCubicOut).attr('d', d3.geoPath(d3.geoIdentity().scale(width / n))) // ????
          .attr('fill', function (datum) {
            return contourColor(datum.value);
          }); //  EXIT

          contoursUpdate.exit().remove(); // Contour Title
          //  DATA-JOIN

          var contourTitleUpdate = underlayerMerge.selectAll('.title-contour').data([this.contour]); //  ENTER

          var contourTitleEnter = contourTitleUpdate.enter().append('text').classed('title-contour', true).attr('text-anchor', 'middle'); //  MERGE

          contourTitleEnter.merge(contourTitleUpdate).classed('math-var', this.contour === 'bias' || this.contour === 'sensitivity').attr('transform', this.contour === 'bias' ? "translate(".concat(width + 1.25 * this.rem, ", ").concat(this.rem, ")") : this.contour === 'sensitivity' ? "translate(".concat(width + 1.25 * this.rem, ", ").concat(this.rem, ")") : this.contour === 'accuracy' ? "translate(".concat(width + 1.125 * this.rem, ", ").concat(this.rem, ")") : null).text(this.contour === 'bias' ? 'c' : this.contour === 'sensitivity' ? 'd′' : this.contour === 'accuracy' ? 'Acc' : null); // Contour Legend

          var l = 100;
          var contourLegendValues = []; // new Array(4 * l);

          for (var _i = 0.5, _k = 0; _i < l; _i += 1, _k += 4) {
            contourLegendValues[_k] = this.contour === 'bias' ? -(_i / n * 6 - 3) : this.contour === 'sensitivity' ? _i / n * 12 - 6 : this.contour === 'accuracy' ? _i / n : null;
            contourLegendValues[_k + 1] = contourLegendValues[_k];
            contourLegendValues[_k + 2] = contourLegendValues[_k];
            contourLegendValues[_k + 3] = contourLegendValues[_k];
          }

          var legendContours = d3.contours().size([4, l]).thresholds(contourThresholds);
          var legendScale = d3.scaleLinear().domain(this.contour === 'bias' ? [3, -3] : this.contour === 'sensitivity' ? [6, -6] : this.contour === 'accuracy' ? [1, 0] : null).range([0, 10 * this.rem]); //  DATA-JOIN

          var contourLegendUpdate = underlayerMerge.selectAll('.legend-contour').data([this.contour]); //  ENTER

          var contourLegendEnter = contourLegendUpdate.enter().append('g').classed('legend-contour', true); //  MERGE

          var contourLegendMerge = contourLegendEnter.merge(contourLegendUpdate).attr('transform', this.contour === 'bias' ? "translate(".concat(width + 1.25 * this.rem, ", ").concat(1.5 * this.rem, ")") : this.contour === 'sensitivity' ? "translate(".concat(width + 1.25 * this.rem, ", ").concat(1.5 * this.rem, ")") : this.contour === 'accuracy' ? "translate(".concat(width + 1.5 * this.rem, ", ").concat(1.5 * this.rem, ")") : null); //  EXIT

          contourLegendUpdate.exit().remove(); // Contour Legend Axis
          //  ENTER

          contourLegendEnter.append('g').classed('axis-contour', true); //  MERGE

          contourLegendMerge.select('.axis-contour').call(d3.axisLeft(legendScale).ticks(7).tickSize(0)).attr('font-size', null).attr('font-family', null); // Contour Legend Contours
          //  DATA-JOIN

          var legendContoursUpdate = contourLegendMerge.selectAll('.contour').data(legendContours(contourLegendValues)); //  ENTER

          var legendContoursEnter = legendContoursUpdate.enter().append('path').classed('contour', true); //  MERGE

          legendContoursEnter.merge(legendContoursUpdate).attr('d', d3.geoPath(d3.geoIdentity().scale(10 * this.rem / l))) // ????
          .attr('fill', function (datum) {
            return contourColor(datum.value);
          }); //  EXIT

          legendContoursUpdate.exit().remove();
        } else {
          // Contour Plot
          //  DATA-JOIN
          var _contourPlotUpdate = underlayerMerge.selectAll('.plot-contour').data([]); //  EXIT


          _contourPlotUpdate.exit().remove(); // Contour Title
          //  DATA-JOIN


          var _contourTitleUpdate = underlayerMerge.selectAll('.title-contour').data([]); //  EXIT


          _contourTitleUpdate.exit().remove(); // Contour Legend
          //  DATA-JOIN


          var _contourLegendUpdate = underlayerMerge.selectAll('.legend-contour').data([]); //  EXIT


          _contourLegendUpdate.exit().remove();
        }
      } // X Axis
      //  ENTER


      underlayerEnter.append('g').classed('axis-x', true); //  MERGE

      var axisXMerge = underlayerMerge.select('.axis-x').attr('transform', "translate(0, ".concat(height, ")"));
      var axisXTransition = axisXMerge.transition().duration(transitionDuration * 2) // Extra long transition!
      .ease(d3.easeCubicOut).call(d3.axisBottom(xScale)).attr('font-size', null).attr('font-family', null);
      axisXTransition.selectAll('line, path').attr('stroke', null); // X Axis Title
      //  ENTER

      var titleXEnter = underlayerEnter.append('text').classed('title-x', true).attr('text-anchor', 'middle');
      titleXEnter.append('tspan').classed('z math-var', true);
      titleXEnter.append('tspan').classed('name', true); //  MERGE

      var titleXMerge = underlayerMerge.select('.title-x').attr('transform', "translate(".concat(width / 2, ", ").concat(height + 2.25 * this.rem, ")"));
      titleXMerge.select('tspan.z').text(this.zRoc ? 'z' : '');
      titleXMerge.select('tspan.name').text(this.zRoc ? '(False Alarm Rate)' : 'False Alarm Rate'); // Y Axis
      //  ENTER

      underlayerEnter.append('g').classed('axis-y', true); // MERGE

      var axisYTransition = underlayerMerge.select('.axis-y').transition().duration(transitionDuration * 2) // Extra long transition!
      .ease(d3.easeCubicOut).call(d3.axisLeft(yScale)).attr('font-size', null).attr('font-family', null);
      axisYTransition.selectAll('line, path').attr('stroke', null); // Y Axis Title
      //  ENTER

      var titleYEnter = underlayerEnter.append('text').classed('title-y', true).attr('text-anchor', 'middle');
      titleYEnter.append('tspan').classed('z math-var', true);
      titleYEnter.append('tspan').classed('name', true); //  MERGE

      var titleYMerge = underlayerMerge.select('.title-y').attr('transform', "translate(".concat(-2 * this.rem, ", ").concat(height / 2, ")rotate(-90)"));
      titleYMerge.select('tspan.z').text(this.zRoc ? 'z' : '');
      titleYMerge.select('tspan.name').text(this.zRoc ? '(Hit Rate)' : 'Hit Rate'); // No-Information Line
      //  ENTER

      underlayerEnter.append('line').classed('diagonal', true); //  MERGE

      underlayerMerge.select('.diagonal').attr('x1', this.zRoc ? xScale(-3) : xScale(0)).attr('y1', this.zRoc ? yScale(-3) : yScale(0)).attr('x2', this.zRoc ? xScale(3) : xScale(1)).attr('y2', this.zRoc ? yScale(3) : yScale(1)); // Content
      //  ENTER

      plotEnter.append('g').classed('content', true); //  MERGE

      var contentMerge = plotMerge.select('.content'); // Iso-sensitivity Curve
      //  DATA-JOIN

      var isoDUpdate = contentMerge.selectAll('.curve-iso-d').data(this.isoDArray, function (datum) {
        return datum.name;
      }); //  ENTER

      var isoDEnter = isoDUpdate.enter().append('path').classed('curve-iso-d', true).attr('clip-path', 'url(#clip-roc-space)'); //  MERGE

      var isoDMerge = isoDEnter.merge(isoDUpdate);

      if (this.firstUpdate || changedProperties.has('zRoc')) {
        isoDMerge.transition().duration(this.drag ? 0 : transitionDuration * 2) // Extra long transition!
        .ease(d3.easeCubicOut).attr('d', function (datum) {
          return line(d3.range(xScale.range()[0], xScale.range()[1] + 1, 1).map(function (x) {
            return {
              far: _this3.zRoc ? _sdtElement.default.zfar2far(xScale.invert(x)) : xScale.invert(x),
              hr: _this3.zRoc ? _sdtElement.default.dfar2hr(datum.d, _sdtElement.default.zfar2far(xScale.invert(x)), datum.s) : _sdtElement.default.dfar2hr(datum.d, xScale.invert(x), datum.s)
            };
          }));
        });
      } else if (this.sdt) {
        isoDMerge.transition().duration(this.drag ? 0 : transitionDuration).ease(d3.easeCubicOut).attrTween('d', function (datum, index, elements) {
          var element = elements[index];
          element.hr = undefined;
          element.far = undefined;
          var interpolateD = d3.interpolate(element.d !== undefined ? element.d : datum.d, datum.d);
          var interpolateS = d3.interpolate(element.s !== undefined ? element.s : datum.s, datum.s);
          return function (time) {
            element.d = interpolateD(time);
            element.s = interpolateS(time);
            var isoD = d3.range(xScale.range()[0], xScale.range()[1] + 1, 1).map(function (x) {
              return {
                far: _this3.zRoc ? _sdtElement.default.zfar2far(xScale.invert(x)) : xScale.invert(x),
                hr: _this3.zRoc ? _sdtElement.default.dfar2hr(element.d, _sdtElement.default.zfar2far(xScale.invert(x)), element.s) : _sdtElement.default.dfar2hr(element.d, xScale.invert(x), element.s)
              };
            });
            return line(isoD);
          };
        });
      } else {
        isoDMerge.transition().duration(this.drag ? 0 : transitionDuration).ease(d3.easeCubicOut).attrTween('d', function (datum, index, elements) {
          var element = elements[index];
          element.d = undefined;
          element.s = undefined;
          var interpolateHr = d3.interpolate(element.hr !== undefined ? element.hr : datum.hr, datum.hr);
          var interpolateFar = d3.interpolate(element.far !== undefined ? element.far : datum.far, datum.far);
          return function (time) {
            element.hr = interpolateHr(time);
            element.far = interpolateFar(time);
            var isoD = d3.range(xScale.range()[0], xScale.range()[1] + 1, 1).map(function (x) {
              return {
                far: _this3.zRoc ? _sdtElement.default.zfar2far(xScale.invert(x)) : xScale.invert(x),
                hr: _this3.zRoc ? _sdtElement.default.dfar2hr(_sdtElement.default.hrfar2d(element.hr, element.far, datum.s), _sdtElement.default.zfar2far(xScale.invert(x)), datum.s) : _sdtElement.default.dfar2hr(_sdtElement.default.hrfar2d(element.hr, element.far, datum.s), xScale.invert(x), datum.s)
              };
            });
            return line(isoD);
          };
        });
      } //  EXIT
      // NOTE: Could add a transition here


      isoDUpdate.exit().remove(); // Iso-bias Curve
      //  DATA-JOIN

      var isoCUpdate = contentMerge.selectAll('.curve-iso-c').data(this.isoCArray, function (datum) {
        return datum.name;
      }); //  ENTER

      var isoCEnter = isoCUpdate.enter().append('path').classed('curve-iso-c', true).attr('clip-path', 'url(#clip-roc-space)'); //  MERGE

      var isoCMerge = isoCEnter.merge(isoCUpdate);

      if (this.firstUpdate || changedProperties.has('zRoc')) {
        isoCMerge.transition().duration(this.drag ? 0 : transitionDuration * 2) // Extra long transition!
        .ease(d3.easeCubicOut).attr('d', function (datum) {
          return line(d3.range(xScale.range()[0], xScale.range()[1] + 1, 1).map(function (x) {
            return {
              far: _this3.zRoc ? _sdtElement.default.zfar2far(xScale.invert(x)) : xScale.invert(x),
              hr: _this3.zRoc ? _sdtElement.default.cfar2hr(datum.c, _sdtElement.default.zfar2far(xScale.invert(x)), datum.s) : _sdtElement.default.cfar2hr(datum.c, xScale.invert(x), datum.s)
            };
          }));
        });
      } else if (this.sdt) {
        isoCMerge.transition().duration(this.drag ? 0 : transitionDuration).ease(d3.easeCubicOut).attrTween('d', function (datum, index, elements) {
          var element = elements[index];
          element.hr = undefined;
          element.far = undefined;
          var interpolateC = d3.interpolate(element.c !== undefined ? element.c : datum.c, datum.c);
          var interpolateS = d3.interpolate(element.s !== undefined ? element.s : datum.s, datum.s);
          return function (time) {
            element.c = interpolateC(time);
            element.s = interpolateS(time);
            var isoC = d3.range(xScale.range()[0], xScale.range()[1] + 1, 1).map(function (x) {
              return {
                far: _this3.zRoc ? _sdtElement.default.zfar2far(xScale.invert(x)) : xScale.invert(x),
                hr: _this3.zRoc ? _sdtElement.default.cfar2hr(element.c, _sdtElement.default.zfar2far(xScale.invert(x)), element.s) : _sdtElement.default.cfar2hr(element.c, xScale.invert(x), element.s)
              };
            });
            return line(isoC);
          };
        });
      } else {
        isoCMerge.transition().duration(this.drag ? 0 : transitionDuration).ease(d3.easeCubicOut).attrTween('d', function (datum, index, elements) {
          var element = elements[index];
          element.c = undefined;
          element.s = undefined;
          var interpolateHr = d3.interpolate(element.hr !== undefined ? element.hr : datum.hr, datum.hr);
          var interpolateFar = d3.interpolate(element.far !== undefined ? element.far : datum.far, datum.far);
          return function (time) {
            element.hr = interpolateHr(time);
            element.far = interpolateFar(time);
            var isoC = d3.range(xScale.range()[0], xScale.range()[1] + 1, 1).map(function (x) {
              return {
                far: _this3.zRoc ? _sdtElement.default.zfar2far(xScale.invert(x)) : xScale.invert(x),
                hr: _this3.zRoc ? _sdtElement.default.cfar2hr(_sdtElement.default.hrfar2c(element.hr, element.far, datum.s), _sdtElement.default.zfar2far(xScale.invert(x)), datum.s) : _sdtElement.default.cfar2hr(_sdtElement.default.hrfar2c(element.hr, element.far, datum.s), xScale.invert(x), datum.s)
              };
            });
            return line(isoC);
          };
        });
      } //  EXIT
      // NOTE: Could add a transition here


      isoCUpdate.exit().remove(); // Point
      //  DATA-JOIN

      var pointUpdate = contentMerge.selectAll('.point').data(this.pointArray, function (datum) {
        return datum.name;
      }); //  ENTER

      var pointEnter = pointUpdate.enter().append('g').classed('point', true);
      pointEnter.append('circle').classed('circle', true).attr('r', 6);
      /* HACK: Firefox does not support CSS SVG Geometry Properties */

      pointEnter.append('text').classed('label', true); //  MERGE

      var pointMerge = pointEnter.merge(pointUpdate);
      pointMerge.select('text').text(function (datum) {
        return datum.label;
      });

      if (this.firstUpdate || changedProperties.has('interactive')) {
        if (this.interactive) {
          pointMerge.attr('tabindex', 0).classed('interactive', true).call(drag).on('keydown', function (datum) {
            if (['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(d3.event.key)) {
              var _hr = _this3.zRoc ? _sdtElement.default.hr2zhr(datum.hr) : datum.hr;

              var _far = _this3.zRoc ? _sdtElement.default.far2zfar(datum.far) : datum.far;

              switch (d3.event.key) {
                case 'ArrowUp':
                  _hr += _this3.zRoc ? d3.event.shiftKey ? 0.05 : 0.25 : d3.event.shiftKey ? 0.01 : 0.05;
                  break;

                case 'ArrowDown':
                  _hr -= _this3.zRoc ? d3.event.shiftKey ? 0.05 : 0.25 : d3.event.shiftKey ? 0.01 : 0.05;
                  break;

                case 'ArrowRight':
                  _far += _this3.zRoc ? d3.event.shiftKey ? 0.05 : 0.25 : d3.event.shiftKey ? 0.01 : 0.05;
                  break;

                case 'ArrowLeft':
                  _far -= _this3.zRoc ? d3.event.shiftKey ? 0.05 : 0.25 : d3.event.shiftKey ? 0.01 : 0.05;
                  break;

                default: // no-op

              }

              _hr = _this3.zRoc ? _sdtElement.default.zhr2hr(_hr) : _hr;
              _far = _this3.zRoc ? _sdtElement.default.zfar2far(_far) : _far; // Clamp FAR and HR to ROC Space

              _hr = _hr < 0.001 ? 0.001 : _hr > 0.999 ? 0.999 : _hr;
              _far = _far < 0.001 ? 0.001 : _far > 0.999 ? 0.999 : _far;

              if (_hr !== datum.hr || _far !== datum.far) {
                datum.hr = _hr;
                datum.far = _far;

                if (datum.name === 'default') {
                  _this3.hr = datum.hr;
                  _this3.far = datum.far;
                }

                _this3.alignState();

                _this3.requestUpdate();

                _this3.dispatchEvent(new CustomEvent('roc-point-change', {
                  detail: {
                    name: datum.name,
                    far: datum.far,
                    hr: datum.hr,
                    d: datum.d,
                    c: datum.c,
                    s: datum.s,
                    label: datum.label
                  },
                  bubbles: true
                }));
              }

              d3.event.preventDefault();
            }
          });
        } else {
          pointMerge.attr('tabindex', null).classed('interactive', false).on('drag', null).on('keydown', null);
        }
      }

      if (this.firstUpdate || changedProperties.has('zRoc')) {
        pointMerge.transition().duration(this.drag ? 0 : transitionDuration * 2) // Extra long transition!
        .ease(d3.easeCubicOut).attr('transform', function (datum, index, elements) {
          var element = elements[index];
          element.d = undefined;
          element.c = undefined;
          element.s = undefined;
          return "translate(\n            ".concat(xScale(_this3.zRoc ? _sdtElement.default.far2zfar(datum.far) : datum.far), ",\n            ").concat(yScale(_this3.zRoc ? _sdtElement.default.hr2zhr(datum.hr) : datum.hr), "\n          )");
        });
      } else if (this.sdt) {
        pointMerge.transition().duration(this.drag ? 0 : transitionDuration).ease(d3.easeCubicOut).attrTween('transform', function (datum, index, elements) {
          var element = elements[index];
          var interpolateD = d3.interpolate(element.d !== undefined ? element.d : datum.d, datum.d);
          var interpolateC = d3.interpolate(element.c !== undefined ? element.c : datum.c, datum.c);
          var interpolateS = d3.interpolate(element.s !== undefined ? element.s : datum.s, datum.s);
          return function (time) {
            element.d = interpolateD(time);
            element.c = interpolateC(time);
            element.s = interpolateS(time);
            return "translate(\n              ".concat(xScale(_this3.zRoc ? _sdtElement.default.far2zfar(_sdtElement.default.dc2far(element.d, element.c, element.s)) : _sdtElement.default.dc2far(element.d, element.c, element.s)), ",\n              ").concat(yScale(_this3.zRoc ? _sdtElement.default.hr2zhr(_sdtElement.default.dc2hr(element.d, element.c, element.s)) : _sdtElement.default.dc2hr(element.d, element.c, element.s)), "\n            )");
          };
        });
      } else {
        pointMerge.transition().duration(this.drag ? 0 : transitionDuration).ease(d3.easeCubicOut).attr('transform', function (datum, index, elements) {
          var element = elements[index];
          element.d = undefined;
          element.c = undefined;
          element.s = undefined;
          return "translate(\n            ".concat(xScale(_this3.zRoc ? _sdtElement.default.far2zfar(datum.far) : datum.far), ",\n            ").concat(yScale(_this3.zRoc ? _sdtElement.default.hr2zhr(datum.hr) : datum.hr), "\n          )");
        });
      } //  EXIT
      // NOTE: Could add a transition here


      pointUpdate.exit().remove();
      this.drag = false;
      this.sdt = false;
      this.firstUpdate = false;
    }
  }], [{
    key: "styles",
    get: function get() {
      return [_get(_getPrototypeOf(ROCSpace), "styles", this), (0, _litElement.css)(_templateObject2())];
    }
  }]);

  return ROCSpace;
}(_sdtElement.default);

exports.default = ROCSpace;
customElements.define('roc-space', ROCSpace);
//# sourceMappingURL=roc-space.js.map
