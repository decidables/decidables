
import {html, css} from 'lit-element';
import * as d3 from 'd3';

import SDTMath from '@decidable/detectable-math';

import SDTElement from '../sdt-element';

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
export default class ROCSpace extends SDTElement {
  static get properties() {
    return {
      contour: {
        attribute: 'contour',
        type: String,
        reflect: true,
      },
      point: {
        attribute: 'point',
        type: String,
        reflect: true,
      },
      isoD: {
        attribute: 'iso-d',
        type: String,
        reflect: true,
      },
      isoC: {
        attribute: 'iso-c',
        type: String,
        reflect: true,
      },

      zRoc: {
        attribute: 'z-roc',
        type: Boolean,
        reflect: true,
      },

      far: {
        attribute: 'far',
        type: Number,
        reflect: true,
      },
      hr: {
        attribute: 'hr',
        type: Number,
        reflect: true,
      },

      d: {
        attribute: false,
        type: Number,
        reflect: false,
      },
      c: {
        attribute: false,
        type: Number,
        reflect: false,
      },
      s: {
        attribute: false,
        type: Number,
        reflect: false,
      },

      width: {
        attribute: false,
        type: Number,
        reflect: false,
      },
      height: {
        attribute: false,
        type: Number,
        reflect: false,
      },
      rem: {
        attribute: false,
        type: Number,
        reflect: false,
      },
    };
  }

  constructor() {
    super();

    this.firstUpdate = true;
    this.drag = false;
    this.sdt = false;

    this.contours = ['sensitivity', 'bias', 'accuracy'];
    this.contour = undefined;
    this.points = ['all', 'first', 'rest', 'none'];
    this.point = 'all';
    this.isoDs = ['all', 'first', 'rest', 'none'];
    this.isoD = 'first';
    this.isoCs = ['all', 'first', 'rest', 'none'];
    this.isoC = 'first';

    this.zRoc = false;

    this.far = 0.25;
    this.hr = 0.75;

    this.s = 1;

    this.label = '';

    this.locations = [
      {
        name: 'default',
        far: this.far,
        hr: this.hr,
        s: this.s,
        label: '',
      },
    ];

    this.pointArray = [];
    this.isoDArray = [];
    this.isoCArray = [];

    this.width = NaN;
    this.height = NaN;
    this.rem = NaN;

    this.alignState();
  }

  alignState() {
    this.locations[0].hr = this.hr;
    this.locations[0].far = this.far;
    this.locations[0].s = this.s;
    this.locations[0].label = this.label;

    this.d = SDTMath.hrFar2D(this.hr, this.far, this.s);
    this.c = SDTMath.hrFar2C(this.hr, this.far, this.s);

    this.pointArray = [];
    this.isoDArray = [];
    this.isoCArray = [];
    this.locations.forEach((item, index) => {
      item.d = SDTMath.hrFar2D(item.hr, item.far, item.s);
      item.c = SDTMath.hrFar2C(item.hr, item.far, item.s);

      if ((index === 0) && (this.point === 'first' || this.point === 'all')) {
        this.pointArray.push(item);
      } else if ((index > 0) && (this.point === 'rest' || this.point === 'all')) {
        this.pointArray.push(item);
      }

      if ((index === 0) && (this.isoD === 'first' || this.isoD === 'all')) {
        this.isoDArray.push(item);
      } else if ((index > 0) && (this.isoD === 'rest' || this.isoD === 'all')) {
        this.isoDArray.push(item);
      }

      if ((index === 0) && (this.isoC === 'first' || this.isoC === 'all')) {
        this.isoCArray.push(item);
      } else if ((index > 0) && (this.isoC === 'rest' || this.isoC === 'all')) {
        this.isoCArray.push(item);
      }
    });
  }

  set(hr, far, name = 'default', label = '', s = 1) {
    if (name === 'default') {
      this.hr = hr;
      this.far = far;
      this.s = s;
      this.label = label;
    }
    const location = this.locations.find((item) => {
      return (item.name === name);
    });
    if (location === undefined) {
      this.locations.push({
        name: name,
        far: far,
        hr: hr,
        s: s,
        label: label,
      });
    } else {
      location.hr = hr;
      location.far = far;
      location.s = s;
      location.label = label;
    }

    this.requestUpdate();
  }

  setWithSDT(d, c, name = 'default', label = '', s = 1) {
    if (name === 'default') {
      this.hr = SDTMath.dC2Hr(d, c, s);
      this.far = SDTMath.dC2Far(d, c, s);
      this.s = s;
      this.label = label;
    }
    const location = this.locations.find((item) => {
      return (item.name === name);
    });
    if (location === undefined) {
      this.locations.push({
        name: name,
        far: SDTMath.dC2Far(d, c, s),
        hr: SDTMath.dC2Hr(d, c, s),
        s: s,
        label: label,
      });
    } else {
      location.hr = SDTMath.dC2Hr(d, c, s);
      location.far = SDTMath.dC2Far(d, c, s);
      location.s = s;
      location.label = label;
    }

    this.sdt = true;
    this.requestUpdate();
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: inline-block;
        }

        .main {
          width: 100%;
          height: 100%;
        }

        .plot-contour,
        .legend-contour .contour {
          stroke: var(---color-background);
          stroke-width: 0.5;
        }

        text {
          /* stylelint-disable property-no-vendor-prefix */
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        .point.interactive {
          cursor: move;

          filter: url("#shadow-2");
          outline: none;

          /* HACK: This gets Safari to correctly apply the filter! */
          /* https://github.com/emilbjorklund/svg-weirdness/issues/27 */
          stroke: #000000;
          stroke-opacity: 0;
          stroke-width: 0;
        }

        /* Make a larger target for touch users */
        @media (pointer: coarse) {
          .point.interactive .circle {
            stroke: #000000;
            stroke-opacity: 0;
            stroke-width: 12px;
          }
        }

        .point.interactive:hover {
          filter: url("#shadow-4");

          /* HACK: This gets Safari to correctly apply the filter! */
          stroke: #ff0000;
        }

        .point.interactive:active {
          filter: url("#shadow-8");

          /* HACK: This gets Safari to correctly apply the filter! */
          stroke: #00ff00;
        }

        :host(.keyboard) .point.interactive:focus {
          filter: url("#shadow-8");

          /* HACK: This gets Safari to correctly apply the filter! */
          stroke: #0000ff;
        }

        .background {
          fill: var(---color-element-background);
          stroke: var(---color-element-border);
          stroke-width: 1;
          shape-rendering: crispEdges;
        }

        .title-x,
        .title-y,
        .title-contour {
          font-weight: 600;

          fill: currentColor;
        }

        .tick {
          font-size: 0.75rem;
        }

        .axis-x path,
        .axis-x line,
        .axis-y path,
        .axis-y line {
          stroke: var(---color-element-border);
        }

        .axis-contour .domain {
          stroke: none;
        }

        .diagonal {
          stroke: var(---color-element-border);
          stroke-dasharray: 4;
          stroke-width: 1;
        }

        .curve-iso-d {
          fill: none;
          stroke: var(---color-d);
          stroke-width: 2;
        }

        .curve-iso-c {
          fill: none;
          stroke: var(---color-c);
          stroke-width: 2;
        }

        .point .circle {
          fill: var(---color-element-emphasis);

          /* r: 6; HACK: Firefox does not support CSS SVG Geometry Properties */
        }

        .point .label {
          font-size: 0.75rem;

          dominant-baseline: middle;
          text-anchor: middle;

          fill: var(---color-text-inverse);
        }
      `,
    ];
  }

  render() { // eslint-disable-line class-methods-use-this
    return html`
      ${SDTElement.svgFilters}
    `;
  }

  getDimensions() {
    this.width = parseFloat(this.getComputedStyleValue('width'), 10);
    this.height = parseFloat(this.getComputedStyleValue('height'), 10);
    this.rem = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('font-size'), 10);
    // console.log(`roc-space: width = ${this.width}, height = ${this.height}, rem = ${this.rem}`);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this.getDimensions.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.getDimensions.bind(this));
    super.disconnectedCallback();
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);

    // Get the width and height after initial render/update has occurred
    // HACK Edge: Edge doesn't have width/height until after a 0ms timeout
    window.setTimeout(this.getDimensions.bind(this), 0);
  }

  update(changedProperties) {
    super.update(changedProperties);

    this.alignState();

    // Bail out if we can't get the width/height/rem
    if (Number.isNaN(this.width) || Number.isNaN(this.height) || Number.isNaN(this.rem)) {
      return;
    }

    const elementWidth = this.width;
    const elementHeight = this.height;
    const elementSize = Math.min(elementWidth, elementHeight);

    const margin = {
      top: 2 * this.rem,
      bottom: 3 * this.rem,
      left: 3 * this.rem,
      right: 2 * this.rem,
    };
    const height = elementSize - (margin.top + margin.bottom);
    const width = elementSize - (margin.left + margin.right);

    const transitionDuration = parseInt(this.getComputedStyleValue('---transition-duration'), 10);

    // X Scale
    const xScale = d3.scaleLinear()
      .domain(this.zRoc ? [-3, 3] : [0, 1]) // zFAR or FAR
      .range([0, width]);
    this.xScale = xScale;

    // Y Scale
    const yScale = d3.scaleLinear()
      .domain(this.zRoc ? [3, -3] : [1, 0]) // zHR or HR
      .range([0, height]);
    this.yScale = yScale;

    // Drag behavior
    const drag = d3.drag()
      .subject((datum) => {
        return {
          x: this.xScale(this.zRoc ? SDTMath.far2Zfar(datum.far) : datum.far),
          y: this.yScale(this.zRoc ? SDTMath.hr2Zhr(datum.hr) : datum.hr),
        };
      })
      .on('start', (datum, index, elements) => {
        const element = elements[index];
        d3.select(element).classed('dragging', true);
      })
      .on('drag', (datum) => {
        this.drag = true;
        const far = this.zRoc
          ? SDTMath.zfar2Far(this.xScale.invert(d3.event.x))
          : this.xScale.invert(d3.event.x);
        const hr = this.zRoc
          ? SDTMath.zhr2Hr(this.yScale.invert(d3.event.y))
          : this.yScale.invert(d3.event.y);
        // Clamp FAR and HR to ROC Space
        datum.far = (far < 0.001)
          ? 0.001
          : ((far > 0.999)
            ? 0.999
            : far);
        datum.hr = (hr <= 0.001)
          ? 0.001
          : (hr >= 0.999)
            ? 0.999
            : hr;
        // console.log(`roc-space.drag: far = ${datum.far}, hr = ${datum.hr}`);
        if (datum.name === 'default') {
          this.far = datum.far;
          this.hr = datum.hr;
        }
        this.alignState();
        this.requestUpdate();
        this.dispatchEvent(new CustomEvent('roc-point-change', {
          detail: {
            name: datum.name,
            far: datum.far,
            hr: datum.hr,
            d: datum.d,
            c: datum.c,
            s: datum.s,
            label: datum.label,
          },
          bubbles: true,
        }));
      })
      .on('end', (datum, index, elements) => {
        const element = elements[index];
        d3.select(element).classed('dragging', false);
      });

    // Line for FAR/HR Space
    const line = d3.line()
      .x((datum) => { return xScale(this.zRoc ? SDTMath.far2Zfar(datum.far) : datum.far); })
      .y((datum) => { return yScale(this.zRoc ? SDTMath.hr2Zhr(datum.hr) : datum.hr); });

    // Svg
    //  DATA-JOIN
    const svgUpdate = d3.select(this.renderRoot).selectAll('.main')
      .data([{
        width: this.width,
        height: this.height,
        rem: this.rem,
      }]);
    //  ENTER
    const svgEnter = svgUpdate.enter().append('svg')
      .classed('main', true);
    //  MERGE
    const svgMerge = svgEnter.merge(svgUpdate)
      .attr('viewBox', `0 0 ${elementSize} ${elementSize}`);

    // Plot
    //  ENTER
    const plotEnter = svgEnter.append('g')
      .classed('plot', true);
    //  MERGE
    const plotMerge = svgMerge.select('.plot')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Clippath
    //  ENTER
    plotEnter.append('clipPath')
      .attr('id', 'clip-roc-space')
      .append('rect');
    //  MERGE
    plotMerge.select('clipPath rect')
      .attr('height', height + 1)
      .attr('width', width + 1);

    // Underlayer
    //  ENTER
    const underlayerEnter = plotEnter.append('g')
      .classed('underlayer', true);
    // MERGE
    const underlayerMerge = plotMerge.select('.underlayer');

    // Background
    //  ENTER
    underlayerEnter.append('rect')
      .classed('background', true);
    //  MERGE
    underlayerMerge.select('.background')
      .attr('height', height)
      .attr('width', width);

    // Contour Plotting
    //  Handles: Bias, Sensitivity, & Accuracy
    if (
      this.firstUpdate
      || changedProperties.has('contour')
      || changedProperties.has('zRoc')
      || changedProperties.has('width')
      || changedProperties.has('height')
      || changedProperties.has('rem')
      || changedProperties.has('s')
    ) {
      if (this.contour !== undefined) {
        // Contour Plot
        const n = 100; // Resolution
        const contourValues = [];
        for (let j = 0.5, k = 0; j < n; j += 1) {
          for (let i = 0.5; i < n; i += 1, k += 1) {
            const hr = this.zRoc
              ? SDTMath.zhr2Hr(((i / n) * 6) - 3)
              : i / n;
            const far = this.zRoc
              ? SDTMath.zfar2Far(((1 - j / n) * 6) - 3)
              : (1 - j / n);
            contourValues[k] = (this.contour === 'bias')
              ? SDTMath.hrFar2C(hr, far, this.s)
              : (this.contour === 'sensitivity')
                ? SDTMath.hrFar2D(hr, far, this.s)
                : (this.contour === 'accuracy')
                  ? SDTMath.hrFar2Acc(hr, far)
                  : null;
          }
        }
        const contourThresholds = (this.contour === 'bias')
          ? d3.range(-3, 3, 0.25)
          : (this.contour === 'sensitivity')
            ? d3.range(-6, 6, 0.5)
            : (this.contour === 'accuracy')
              ? d3.range(0, 1, 0.05)
              : null;
        const contours = d3.contours()
          .size([n, n])
          .thresholds(contourThresholds);
        const contourColorStart = this.getComputedStyleValue((this.contour === 'bias')
          ? '---color-element-background'
          : (this.contour === 'sensitivity')
            ? '---color-d'
            : (this.contour === 'accuracy')
              ? '---color-acc-dark'
              : null);
        const contourColorEnd = this.getComputedStyleValue((this.contour === 'bias')
          ? '---color-c'
          : (this.contour === 'sensitivity')
            ? '---color-element-background'
            : (this.contour === 'accuracy')
              ? '---color-element-background'
              : null);
        const contourColor = d3.scaleLinear()
          .domain(d3.extent(contourThresholds))
          .interpolate(() => { return d3.interpolateRgb(contourColorStart, contourColorEnd); });
        //  DATA-JOIN
        const contourPlotUpdate = underlayerMerge.selectAll('.plot-contour')
          .data([this.contour]);
        //  ENTER
        const contourPlotEnter = contourPlotUpdate.enter().append('g')
          .classed('plot-contour', true);
        //  MERGE
        const contourPlotMerge = contourPlotEnter.merge(contourPlotUpdate);

        // Contour Plot Contours
        //  DATA-JOIN
        const contoursUpdate = contourPlotMerge.selectAll('.contour')
          .data(contours(contourValues));
        //  ENTER
        const contoursEnter = contoursUpdate.enter().append('path')
          .classed('contour', true);
        //  MERGE
        contoursEnter.merge(contoursUpdate).transition()
          .duration(transitionDuration * 2) // Extra long transition!
          .ease(d3.easeCubicOut)
          .attr('d', d3.geoPath(d3.geoIdentity().scale(width / n))) // ????
          .attr('fill', (datum) => { return contourColor(datum.value); });
        //  EXIT
        contoursUpdate.exit().remove();

        // Contour Title
        //  DATA-JOIN
        const contourTitleUpdate = underlayerMerge.selectAll('.title-contour')
          .data([this.contour]);
        //  ENTER
        const contourTitleEnter = contourTitleUpdate.enter().append('text')
          .classed('title-contour', true)
          .attr('text-anchor', 'middle');
        //  MERGE
        contourTitleEnter.merge(contourTitleUpdate)
          .classed('math-var', (this.contour === 'bias') || (this.contour === 'sensitivity'))
          .attr('transform', (this.contour === 'bias')
            ? `translate(${(width + (1.25 * this.rem))}, ${this.rem})`
            : (this.contour === 'sensitivity')
              ? `translate(${(width + (1.25 * this.rem))}, ${this.rem})`
              : (this.contour === 'accuracy')
                ? `translate(${(width + (1.125 * this.rem))}, ${this.rem})`
                : null)
          .text((this.contour === 'bias')
            ? 'c'
            : (this.contour === 'sensitivity')
              ? 'd′'
              : (this.contour === 'accuracy')
                ? 'Acc'
                : null);

        // Contour Legend
        const l = 100;
        const contourLegendValues = []; // new Array(4 * l);
        for (let i = 0.5, k = 0; i < l; i += 1, k += 4) {
          contourLegendValues[k] = (this.contour === 'bias')
            ? -(((i / n) * 6) - 3)
            : (this.contour === 'sensitivity')
              ? ((i / n) * 12) - 6
              : (this.contour === 'accuracy')
                ? (i / n)
                : null;
          contourLegendValues[k + 1] = contourLegendValues[k];
          contourLegendValues[k + 2] = contourLegendValues[k];
          contourLegendValues[k + 3] = contourLegendValues[k];
        }
        const legendContours = d3.contours()
          .size([4, l])
          .thresholds(contourThresholds);
        const legendScale = d3.scaleLinear()
          .domain((this.contour === 'bias')
            ? [3, -3]
            : (this.contour === 'sensitivity')
              ? [6, -6]
              : (this.contour === 'accuracy')
                ? [1, 0]
                : null)
          .range([0, (10 * this.rem)]);
        //  DATA-JOIN
        const contourLegendUpdate = underlayerMerge.selectAll('.legend-contour')
          .data([this.contour]);
        //  ENTER
        const contourLegendEnter = contourLegendUpdate.enter().append('g')
          .classed('legend-contour', true);
        //  MERGE
        const contourLegendMerge = contourLegendEnter.merge(contourLegendUpdate)
          .attr('transform', (this.contour === 'bias')
            ? `translate(${(width + (1.25 * this.rem))}, ${(1.5 * this.rem)})`
            : (this.contour === 'sensitivity')
              ? `translate(${(width + (1.25 * this.rem))}, ${(1.5 * this.rem)})`
              : (this.contour === 'accuracy')
                ? `translate(${(width + (1.5 * this.rem))}, ${(1.5 * this.rem)})`
                : null);
        //  EXIT
        contourLegendUpdate.exit().remove();

        // Contour Legend Axis
        //  ENTER
        contourLegendEnter.append('g')
          .classed('axis-contour', true);
        //  MERGE
        contourLegendMerge.select('.axis-contour')
          .call(d3.axisLeft(legendScale).ticks(7).tickSize(0))
          .attr('font-size', null)
          .attr('font-family', null);

        // Contour Legend Contours
        //  DATA-JOIN
        const legendContoursUpdate = contourLegendMerge.selectAll('.contour')
          .data(legendContours(contourLegendValues));
        //  ENTER
        const legendContoursEnter = legendContoursUpdate.enter().append('path')
          .classed('contour', true);
        //  MERGE
        legendContoursEnter.merge(legendContoursUpdate)
          .attr('d', d3.geoPath(d3.geoIdentity().scale((10 * this.rem) / l))) // ????
          .attr('fill', (datum) => { return contourColor(datum.value); });
        //  EXIT
        legendContoursUpdate.exit().remove();
      } else {
        // Contour Plot
        //  DATA-JOIN
        const contourPlotUpdate = underlayerMerge.selectAll('.plot-contour')
          .data([]);
        //  EXIT
        contourPlotUpdate.exit().remove();

        // Contour Title
        //  DATA-JOIN
        const contourTitleUpdate = underlayerMerge.selectAll('.title-contour')
          .data([]);
        //  EXIT
        contourTitleUpdate.exit().remove();

        // Contour Legend
        //  DATA-JOIN
        const contourLegendUpdate = underlayerMerge.selectAll('.legend-contour')
          .data([]);
        //  EXIT
        contourLegendUpdate.exit().remove();
      }
    }

    // X Axis
    //  ENTER
    underlayerEnter.append('g')
      .classed('axis-x', true);
    //  MERGE
    const axisXMerge = underlayerMerge.select('.axis-x')
      .attr('transform', `translate(0, ${height})`);
    const axisXTransition = axisXMerge.transition()
      .duration(transitionDuration * 2) // Extra long transition!
      .ease(d3.easeCubicOut)
      .call(d3.axisBottom(xScale))
      .attr('font-size', null)
      .attr('font-family', null);
    axisXTransition.selectAll('line, path')
      .attr('stroke', null);

    // X Axis Title
    //  ENTER
    const titleXEnter = underlayerEnter.append('text')
      .classed('title-x', true)
      .attr('text-anchor', 'middle');
    titleXEnter.append('tspan')
      .classed('z math-var', true);
    titleXEnter.append('tspan')
      .classed('name', true);
    //  MERGE
    const titleXMerge = underlayerMerge.select('.title-x')
      .attr('transform', `translate(${(width / 2)}, ${(height + (2.25 * this.rem))})`);
    titleXMerge.select('tspan.z')
      .text(this.zRoc ? 'z' : '');
    titleXMerge.select('tspan.name')
      .text(this.zRoc ? '(False Alarm Rate)' : 'False Alarm Rate');

    // Y Axis
    //  ENTER
    underlayerEnter.append('g')
      .classed('axis-y', true);
    // MERGE
    const axisYTransition = underlayerMerge.select('.axis-y').transition()
      .duration(transitionDuration * 2) // Extra long transition!
      .ease(d3.easeCubicOut)
      .call(d3.axisLeft(yScale))
      .attr('font-size', null)
      .attr('font-family', null);
    axisYTransition.selectAll('line, path')
      .attr('stroke', null);

    // Y Axis Title
    //  ENTER
    const titleYEnter = underlayerEnter.append('text')
      .classed('title-y', true)
      .attr('text-anchor', 'middle');
    titleYEnter.append('tspan')
      .classed('z math-var', true);
    titleYEnter.append('tspan')
      .classed('name', true);
    //  MERGE
    const titleYMerge = underlayerMerge.select('.title-y')
      .attr('transform', `translate(${-2 * this.rem}, ${(height / 2)})rotate(-90)`);
    titleYMerge.select('tspan.z')
      .text(this.zRoc ? 'z' : '');
    titleYMerge.select('tspan.name')
      .text(this.zRoc ? '(Hit Rate)' : 'Hit Rate');

    // No-Information Line
    //  ENTER
    underlayerEnter.append('line')
      .classed('diagonal', true);
    //  MERGE
    underlayerMerge.select('.diagonal')
      .attr('x1', this.zRoc ? xScale(-3) : xScale(0))
      .attr('y1', this.zRoc ? yScale(-3) : yScale(0))
      .attr('x2', this.zRoc ? xScale(3) : xScale(1))
      .attr('y2', this.zRoc ? yScale(3) : yScale(1));

    // Content
    //  ENTER
    plotEnter.append('g')
      .classed('content', true);
    //  MERGE
    const contentMerge = plotMerge.select('.content');

    // Iso-sensitivity Curve
    //  DATA-JOIN
    const isoDUpdate = contentMerge.selectAll('.curve-iso-d')
      .data(this.isoDArray, (datum) => { return datum.name; });
    //  ENTER
    const isoDEnter = isoDUpdate.enter().append('path')
      .classed('curve-iso-d', true)
      .attr('clip-path', 'url(#clip-roc-space)');
    //  MERGE
    const isoDMerge = isoDEnter.merge(isoDUpdate);
    if (this.firstUpdate || changedProperties.has('zRoc')) {
      isoDMerge.transition()
        .duration(this.drag ? 0 : (transitionDuration * 2)) // Extra long transition!
        .ease(d3.easeCubicOut)
        .attr('d', (datum) => {
          return line(d3.range(xScale.range()[0], xScale.range()[1] + 1, 1).map((x) => {
            return {
              far: (this.zRoc
                ? SDTMath.zfar2Far(xScale.invert(x))
                : xScale.invert(x)),
              hr: (this.zRoc
                ? SDTMath.dFar2Hr(datum.d, SDTMath.zfar2Far(xScale.invert(x)), datum.s)
                : SDTMath.dFar2Hr(datum.d, xScale.invert(x), datum.s)),
            };
          }));
        });
    } else if (this.sdt) {
      isoDMerge.transition()
        .duration(this.drag ? 0 : transitionDuration)
        .ease(d3.easeCubicOut)
        .attrTween('d', (datum, index, elements) => {
          const element = elements[index];
          element.hr = undefined;
          element.far = undefined;
          const interpolateD = d3.interpolate(
            (element.d !== undefined) ? element.d : datum.d,
            datum.d,
          );
          const interpolateS = d3.interpolate(
            (element.s !== undefined) ? element.s : datum.s,
            datum.s,
          );
          return (time) => {
            element.d = interpolateD(time);
            element.s = interpolateS(time);
            const isoD = d3.range(xScale.range()[0], xScale.range()[1] + 1, 1).map((x) => {
              return {
                far: (this.zRoc
                  ? SDTMath.zfar2Far(xScale.invert(x))
                  : xScale.invert(x)),
                hr: (this.zRoc
                  ? SDTMath.dFar2Hr(element.d, SDTMath.zfar2Far(xScale.invert(x)), element.s)
                  : SDTMath.dFar2Hr(element.d, xScale.invert(x), element.s)),
              };
            });
            return line(isoD);
          };
        });
    } else {
      isoDMerge.transition()
        .duration(this.drag ? 0 : transitionDuration)
        .ease(d3.easeCubicOut)
        .attrTween('d', (datum, index, elements) => {
          const element = elements[index];
          element.d = undefined;
          element.s = undefined;
          const interpolateHr = d3.interpolate(
            (element.hr !== undefined) ? element.hr : datum.hr,
            datum.hr,
          );
          const interpolateFar = d3.interpolate(
            (element.far !== undefined) ? element.far : datum.far,
            datum.far,
          );
          return (time) => {
            element.hr = interpolateHr(time);
            element.far = interpolateFar(time);
            const isoD = d3.range(xScale.range()[0], xScale.range()[1] + 1, 1).map((x) => {
              return {
                far: (this.zRoc
                  ? SDTMath.zfar2Far(xScale.invert(x))
                  : xScale.invert(x)),
                hr: (this.zRoc
                  ? SDTMath.dFar2Hr(
                    SDTMath.hrFar2D(element.hr, element.far, datum.s),
                    SDTMath.zfar2Far(xScale.invert(x)),
                    datum.s,
                  )
                  : SDTMath.dFar2Hr(
                    SDTMath.hrFar2D(element.hr, element.far, datum.s),
                    xScale.invert(x),
                    datum.s,
                  )
                ),
              };
            });
            return line(isoD);
          };
        });
    }
    //  EXIT
    // NOTE: Could add a transition here
    isoDUpdate.exit().remove();

    // Iso-bias Curve
    //  DATA-JOIN
    const isoCUpdate = contentMerge.selectAll('.curve-iso-c')
      .data(this.isoCArray, (datum) => { return datum.name; });
    //  ENTER
    const isoCEnter = isoCUpdate.enter().append('path')
      .classed('curve-iso-c', true)
      .attr('clip-path', 'url(#clip-roc-space)');
    //  MERGE
    const isoCMerge = isoCEnter.merge(isoCUpdate);
    if (this.firstUpdate || changedProperties.has('zRoc')) {
      isoCMerge.transition()
        .duration(this.drag ? 0 : (transitionDuration * 2)) // Extra long transition!
        .ease(d3.easeCubicOut)
        .attr('d', (datum) => {
          return line(d3.range(xScale.range()[0], xScale.range()[1] + 1, 1).map((x) => {
            return {
              far: (this.zRoc
                ? SDTMath.zfar2Far(xScale.invert(x))
                : xScale.invert(x)),
              hr: (this.zRoc
                ? SDTMath.cFar2Hr(datum.c, SDTMath.zfar2Far(xScale.invert(x)), datum.s)
                : SDTMath.cFar2Hr(datum.c, xScale.invert(x), datum.s)),
            };
          }));
        });
    } else if (this.sdt) {
      isoCMerge.transition()
        .duration(this.drag ? 0 : transitionDuration)
        .ease(d3.easeCubicOut)
        .attrTween('d', (datum, index, elements) => {
          const element = elements[index];
          element.hr = undefined;
          element.far = undefined;
          const interpolateC = d3.interpolate(
            (element.c !== undefined) ? element.c : datum.c,
            datum.c,
          );
          const interpolateS = d3.interpolate(
            (element.s !== undefined) ? element.s : datum.s,
            datum.s,
          );
          return (time) => {
            element.c = interpolateC(time);
            element.s = interpolateS(time);
            const isoC = d3.range(xScale.range()[0], xScale.range()[1] + 1, 1).map((x) => {
              return {
                far: (this.zRoc
                  ? SDTMath.zfar2Far(xScale.invert(x))
                  : xScale.invert(x)),
                hr: (this.zRoc
                  ? SDTMath.cFar2Hr(element.c, SDTMath.zfar2Far(xScale.invert(x)), element.s)
                  : SDTMath.cFar2Hr(element.c, xScale.invert(x), element.s)),
              };
            });
            return line(isoC);
          };
        });
    } else {
      isoCMerge.transition()
        .duration(this.drag ? 0 : transitionDuration)
        .ease(d3.easeCubicOut)
        .attrTween('d', (datum, index, elements) => {
          const element = elements[index];
          element.c = undefined;
          element.s = undefined;
          const interpolateHr = d3.interpolate(
            (element.hr !== undefined) ? element.hr : datum.hr,
            datum.hr,
          );
          const interpolateFar = d3.interpolate(
            (element.far !== undefined) ? element.far : datum.far,
            datum.far,
          );
          return (time) => {
            element.hr = interpolateHr(time);
            element.far = interpolateFar(time);
            const isoC = d3.range(xScale.range()[0], xScale.range()[1] + 1, 1).map((x) => {
              return {
                far: (this.zRoc
                  ? SDTMath.zfar2Far(xScale.invert(x))
                  : xScale.invert(x)),
                hr: (this.zRoc
                  ? SDTMath.cFar2Hr(
                    SDTMath.hrFar2C(element.hr, element.far, datum.s),
                    SDTMath.zfar2Far(xScale.invert(x)),
                    datum.s,
                  )
                  : SDTMath.cFar2Hr(
                    SDTMath.hrFar2C(element.hr, element.far, datum.s),
                    xScale.invert(x),
                    datum.s,
                  )
                ),
              };
            });
            return line(isoC);
          };
        });
    }
    //  EXIT
    // NOTE: Could add a transition here
    isoCUpdate.exit().remove();

    // Point
    //  DATA-JOIN
    const pointUpdate = contentMerge.selectAll('.point')
      .data(this.pointArray, (datum) => { return datum.name; });
    //  ENTER
    const pointEnter = pointUpdate.enter().append('g')
      .classed('point', true);
    pointEnter.append('circle')
      .classed('circle', true)
      .attr('r', 6); /* HACK: Firefox does not support CSS SVG Geometry Properties */
    pointEnter.append('text')
      .classed('label', true);
    //  MERGE
    const pointMerge = pointEnter.merge(pointUpdate);
    pointMerge.select('text')
      .text((datum) => { return datum.label; });
    if (this.firstUpdate || changedProperties.has('interactive')) {
      if (this.interactive) {
        pointMerge
          .attr('tabindex', 0)
          .classed('interactive', true)
          .call(drag)
          .on('keydown', (datum) => {
            if (['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(d3.event.key)) {
              let hr = this.zRoc ? SDTMath.hr2Zhr(datum.hr) : datum.hr;
              let far = this.zRoc ? SDTMath.far2Zfar(datum.far) : datum.far;
              switch (d3.event.key) {
                case 'ArrowUp':
                  hr += this.zRoc
                    ? (d3.event.shiftKey ? 0.05 : 0.25)
                    : (d3.event.shiftKey ? 0.01 : 0.05);
                  break;
                case 'ArrowDown':
                  hr -= this.zRoc
                    ? (d3.event.shiftKey ? 0.05 : 0.25)
                    : (d3.event.shiftKey ? 0.01 : 0.05);
                  break;
                case 'ArrowRight':
                  far += this.zRoc
                    ? (d3.event.shiftKey ? 0.05 : 0.25)
                    : (d3.event.shiftKey ? 0.01 : 0.05);
                  break;
                case 'ArrowLeft':
                  far -= this.zRoc
                    ? (d3.event.shiftKey ? 0.05 : 0.25)
                    : (d3.event.shiftKey ? 0.01 : 0.05);
                  break;
                default:
                  // no-op
              }
              hr = this.zRoc ? SDTMath.zhr2Hr(hr) : hr;
              far = this.zRoc ? SDTMath.zfar2Far(far) : far;
              // Clamp FAR and HR to ROC Space
              hr = (hr < 0.001)
                ? 0.001
                : (hr > 0.999)
                  ? 0.999
                  : hr;
              far = (far < 0.001)
                ? 0.001
                : (far > 0.999)
                  ? 0.999
                  : far;
              if ((hr !== datum.hr) || (far !== datum.far)) {
                datum.hr = hr;
                datum.far = far;
                if (datum.name === 'default') {
                  this.hr = datum.hr;
                  this.far = datum.far;
                }
                this.alignState();
                this.requestUpdate();
                this.dispatchEvent(new CustomEvent('roc-point-change', {
                  detail: {
                    name: datum.name,
                    far: datum.far,
                    hr: datum.hr,
                    d: datum.d,
                    c: datum.c,
                    s: datum.s,
                    label: datum.label,
                  },
                  bubbles: true,
                }));
              }
              d3.event.preventDefault();
            }
          });
      } else {
        pointMerge
          .attr('tabindex', null)
          .classed('interactive', false)
          .on('drag', null)
          .on('keydown', null);
      }
    }
    if (this.firstUpdate || changedProperties.has('zRoc')) {
      pointMerge.transition()
        .duration(this.drag ? 0 : (transitionDuration * 2)) // Extra long transition!
        .ease(d3.easeCubicOut)
        .attr('transform', (datum, index, elements) => {
          const element = elements[index];
          element.d = undefined;
          element.c = undefined;
          element.s = undefined;
          return `translate(
            ${xScale(this.zRoc ? SDTMath.far2Zfar(datum.far) : datum.far)},
            ${yScale(this.zRoc ? SDTMath.hr2Zhr(datum.hr) : datum.hr)}
          )`;
        });
    } else if (this.sdt) {
      pointMerge.transition()
        .duration(this.drag ? 0 : transitionDuration)
        .ease(d3.easeCubicOut)
        .attrTween('transform', (datum, index, elements) => {
          const element = elements[index];
          const interpolateD = d3.interpolate(
            (element.d !== undefined) ? element.d : datum.d,
            datum.d,
          );
          const interpolateC = d3.interpolate(
            (element.c !== undefined) ? element.c : datum.c,
            datum.c,
          );
          const interpolateS = d3.interpolate(
            (element.s !== undefined) ? element.s : datum.s,
            datum.s,
          );
          return (time) => {
            element.d = interpolateD(time);
            element.c = interpolateC(time);
            element.s = interpolateS(time);
            return `translate(
              ${xScale(
                this.zRoc
                  ? SDTMath.far2Zfar(SDTMath.dC2Far(element.d, element.c, element.s))
                  : SDTMath.dC2Far(element.d, element.c, element.s),
              )},
              ${yScale(
                this.zRoc
                  ? SDTMath.hr2Zhr(SDTMath.dC2Hr(element.d, element.c, element.s))
                  : SDTMath.dC2Hr(element.d, element.c, element.s),
              )}
            )`;
          };
        });
    } else {
      pointMerge.transition()
        .duration(this.drag ? 0 : transitionDuration)
        .ease(d3.easeCubicOut)
        .attr('transform', (datum, index, elements) => {
          const element = elements[index];
          element.d = undefined;
          element.c = undefined;
          element.s = undefined;
          return `translate(
            ${xScale(this.zRoc ? SDTMath.far2Zfar(datum.far) : datum.far)},
            ${yScale(this.zRoc ? SDTMath.hr2Zhr(datum.hr) : datum.hr)}
          )`;
        });
    }
    //  EXIT
    // NOTE: Could add a transition here
    pointUpdate.exit().remove();

    this.drag = false;
    this.sdt = false;
    this.firstUpdate = false;
  }
}

customElements.define('roc-space', ROCSpace);
