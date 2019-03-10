
import {html, css} from 'lit-element';
import * as d3 from 'd3';

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

    this.locations = [
      {
        name: 'default',
        far: this.far,
        hr: this.hr,
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

    this.d = SDTElement.hrfar2d(this.hr, this.far);
    this.c = SDTElement.hrfar2c(this.hr, this.far);

    this.pointArray = [];
    this.isoDArray = [];
    this.isoCArray = [];
    this.locations.forEach((item, index) => {
      item.d = SDTElement.hrfar2d(item.hr, item.far);
      item.c = SDTElement.hrfar2c(item.hr, item.far);

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

  set(hr, far, name = 'default') {
    if (name === 'default') {
      this.hr = hr;
      this.far = far;
    }
    const location = this.locations.find((item) => {
      return (item.name === name);
    });
    if (location === undefined) {
      this.locations.push({
        name: name,
        far: far,
        hr: hr,
      });
    } else {
      location.hr = hr;
      location.far = far;
    }

    this.requestUpdate();
  }

  setWithSDT(d, c, name = 'default') {
    if (name === 'default') {
      this.hr = SDTElement.dc2hr(d, c);
      this.far = SDTElement.dc2far(d, c);
    }
    const location = this.locations.find((item) => {
      return (item.name === name);
    });
    if (location === undefined) {
      this.locations.push({
        name: name,
        far: SDTElement.dc2far(d, c),
        hr: SDTElement.dc2hr(d, c),
      });
    } else {
      location.hr = SDTElement.dc2hr(d, c);
      location.far = SDTElement.dc2far(d, c);
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
        }

        .point.interactive:hover {
          filter: url("#shadow-4");

          /* HACK: This gets Safari to correctly apply the filter! */
          transform: translateX(0);
        }

        .point.interactive:active {
          filter: url("#shadow-8");

          /* HACK: This gets Safari to correctly apply the filter! */
          transform: translateY(0);
        }

        :host(.keyboard) .point.interactive:focus {
          filter: url("#shadow-8");

          /* HACK: This gets Safari to correctly apply the filter! */
          transform: translateZ(0);
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

        .point {
          fill: var(---color-element-emphasis);

          /* r: 6; HACK: Firefox does not support CSS SVG Geometry Properties */
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
          x: this.xScale(this.zRoc ? SDTElement.far2zfar(datum.far) : datum.far),
          y: this.yScale(this.zRoc ? SDTElement.hr2zhr(datum.hr) : datum.hr),
        };
      })
      .on('start', (datum, index, elements) => {
        const element = elements[index];
        d3.select(element).classed('dragging', true);
      })
      .on('drag', (datum) => {
        this.drag = true;
        const far = this.zRoc
          ? SDTElement.zfar2far(this.xScale.invert(d3.event.x))
          : this.xScale.invert(d3.event.x);
        const hr = this.zRoc
          ? SDTElement.zhr2hr(this.yScale.invert(d3.event.y))
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
      .x((datum) => { return xScale(this.zRoc ? SDTElement.far2zfar(datum.far) : datum.far); })
      .y((datum) => { return yScale(this.zRoc ? SDTElement.hr2zhr(datum.hr) : datum.hr); });

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
    ) {
      if (this.contour !== undefined) {
        // Contour Plot
        const n = 100; // Resolution
        const contourValues = [];
        for (let j = 0.5, k = 0; j < n; j += 1) {
          for (let i = 0.5; i < n; i += 1, k += 1) {
            const hr = this.zRoc
              ? SDTElement.zhr2hr(((i / n) * 6) - 3)
              : i / n;
            const far = this.zRoc
              ? SDTElement.zfar2far(((1 - j / n) * 6) - 3)
              : (1 - j / n);
            contourValues[k] = (this.contour === 'bias')
              ? SDTElement.hrfar2c(hr, far)
              : (this.contour === 'sensitivity')
                ? SDTElement.hrfar2d(hr, far)
                : (this.contour === 'accuracy')
                  ? SDTElement.hrfar2acc(hr, far)
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
          .duration(1000)
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
              ? 'd\u2032'
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
      .duration(1000)
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
      .duration(1000)
      .ease(d3.easeCubicOut)
      .call(d3.axisLeft(yScale))
      .attr('font-size', null)
      .attr('font-family', null);
    axisYTransition.selectAll('line, path')
      .attr('stroke', null);

    // Y Axis Title
    //  ENTER
    const yTitle = underlayerEnter.append('text')
      .classed('title-y', true)
      .attr('text-anchor', 'middle');
    yTitle.append('tspan')
      .classed('z math-var', true);
    yTitle.append('tspan')
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
    if (changedProperties.has('zRoc') || this.firstUpdate) {
      isoDMerge.transition()
        .duration(this.drag ? 0 : 1000)
        .ease(d3.easeCubicOut)
        .attr('d', (datum) => {
          return line(d3.range(xScale.range()[0], xScale.range()[1] + 1, 1).map((x) => {
            return {
              far: (this.zRoc
                ? SDTElement.zfar2far(xScale.invert(x))
                : xScale.invert(x)),
              hr: (this.zRoc
                ? SDTElement.dfar2hr(datum.d, SDTElement.zfar2far(xScale.invert(x)))
                : SDTElement.dfar2hr(datum.d, xScale.invert(x))),
            };
          }));
        });
    } else if (this.sdt) {
      isoDMerge.transition()
        .duration(this.drag ? 0 : 500)
        .ease(d3.easeCubicOut)
        .attrTween('d', (datum, index, elements) => {
          const element = elements[index];
          element.hr = undefined;
          element.far = undefined;
          const interpolateD = d3.interpolate(
            (element.d !== undefined) ? element.d : datum.d,
            datum.d,
          );
          return (time) => {
            element.d = interpolateD(time);
            const isoD = d3.range(xScale.range()[0], xScale.range()[1] + 1, 1).map((x) => {
              return {
                far: (this.zRoc
                  ? SDTElement.zfar2far(xScale.invert(x))
                  : xScale.invert(x)),
                hr: (this.zRoc
                  ? SDTElement.dfar2hr(element.d, SDTElement.zfar2far(xScale.invert(x)))
                  : SDTElement.dfar2hr(element.d, xScale.invert(x))),
              };
            });
            return line(isoD);
          };
        });
    } else {
      isoDMerge.transition()
        .duration(this.drag ? 0 : 500)
        .ease(d3.easeCubicOut)
        .attrTween('d', (datum, index, elements) => {
          const element = elements[index];
          element.d = undefined;
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
                  ? SDTElement.zfar2far(xScale.invert(x))
                  : xScale.invert(x)),
                hr: (this.zRoc
                  ? SDTElement.dfar2hr(
                    SDTElement.hrfar2d(element.hr, element.far),
                    SDTElement.zfar2far(xScale.invert(x)),
                  )
                  : SDTElement.dfar2hr(
                    SDTElement.hrfar2d(element.hr, element.far),
                    xScale.invert(x),
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
    if (changedProperties.has('zRoc') || this.firstUpdate) {
      isoCMerge.transition()
        .duration(this.drag ? 0 : 1000)
        .ease(d3.easeCubicOut)
        .attr('d', (datum) => {
          return line(d3.range(xScale.range()[0], xScale.range()[1] + 1, 1).map((x) => {
            return {
              far: (this.zRoc
                ? SDTElement.zfar2far(xScale.invert(x))
                : xScale.invert(x)),
              hr: (this.zRoc
                ? SDTElement.cfar2hr(datum.c, SDTElement.zfar2far(xScale.invert(x)))
                : SDTElement.cfar2hr(datum.c, xScale.invert(x))),
            };
          }));
        });
    } else if (this.sdt) {
      isoCMerge.transition()
        .duration(this.drag ? 0 : 500)
        .ease(d3.easeCubicOut)
        .attrTween('d', (datum, index, elements) => {
          const element = elements[index];
          element.hr = undefined;
          element.far = undefined;
          const interpolateC = d3.interpolate(
            (element.c !== undefined) ? element.c : datum.c,
            datum.c,
          );
          return (time) => {
            element.c = interpolateC(time);
            const isoC = d3.range(xScale.range()[0], xScale.range()[1] + 1, 1).map((x) => {
              return {
                far: (this.zRoc
                  ? SDTElement.zfar2far(xScale.invert(x))
                  : xScale.invert(x)),
                hr: (this.zRoc
                  ? SDTElement.cfar2hr(element.c, SDTElement.zfar2far(xScale.invert(x)))
                  : SDTElement.cfar2hr(element.c, xScale.invert(x))),
              };
            });
            return line(isoC);
          };
        });
    } else {
      isoCMerge.transition()
        .duration(this.drag ? 0 : 500)
        .ease(d3.easeCubicOut)
        .attrTween('d', (datum, index, elements) => {
          const element = elements[index];
          element.c = undefined;
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
                  ? SDTElement.zfar2far(xScale.invert(x))
                  : xScale.invert(x)),
                hr: (this.zRoc
                  ? SDTElement.cfar2hr(
                    SDTElement.hrfar2c(element.hr, element.far),
                    SDTElement.zfar2far(xScale.invert(x)),
                  )
                  : SDTElement.cfar2hr(
                    SDTElement.hrfar2c(element.hr, element.far),
                    xScale.invert(x),
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
    const pointEnter = pointUpdate.enter().append('circle')
      .classed('point', true)
      .attr('r', 6); /* HACK: Firefox does not support CSS SVG Geometry Properties */
    if (this.interactive) {
      pointEnter
        .attr('tabindex', 0)
        .classed('interactive', true)
        .call(drag)
        .on('keydown', (datum) => {
          if (['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(d3.event.key)) {
            let hr = this.zRoc ? SDTElement.hr2zhr(datum.hr) : datum.hr;
            let far = this.zRoc ? SDTElement.far2zfar(datum.far) : datum.far;
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
            hr = this.zRoc ? SDTElement.zhr2hr(hr) : hr;
            far = this.zRoc ? SDTElement.zfar2far(far) : far;
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
                },
                bubbles: true,
              }));
            }
            d3.event.preventDefault();
          }
        });
    } else {
      pointEnter
        .attr('tabindex', null)
        .classed('interactive', false)
        .on('drag', null)
        .on('keydown', null);
    }
    //  MERGE
    const pointMerge = pointEnter.merge(pointUpdate);
    if (changedProperties.has('zRoc') || this.firstUpdate) {
      pointMerge.transition()
        .duration(this.drag ? 0 : 1000)
        .ease(d3.easeCubicOut)
        .attr('cx', (datum, index, elements) => {
          const element = elements[index];
          element.d = undefined;
          return xScale(this.zRoc ? SDTElement.far2zfar(datum.far) : datum.far);
        })
        .attr('cy', (datum, index, elements) => {
          const element = elements[index];
          element.c = undefined;
          return yScale(this.zRoc ? SDTElement.hr2zhr(datum.hr) : datum.hr);
        });
    } else if (this.sdt) {
      pointMerge.transition()
        .duration(this.drag ? 0 : 500)
        .ease(d3.easeCubicOut)
        .attrTween('cx', (datum, index, elements) => {
          const element = elements[index];
          const interpolateD = d3.interpolate(
            (element.d !== undefined) ? element.d : datum.d,
            datum.d,
          );
          const interpolateC = d3.interpolate(
            (element.c !== undefined) ? element.c : datum.c,
            datum.c,
          );
          return (time) => {
            element.d = interpolateD(time);
            element.c = interpolateC(time);
            return xScale(this.zRoc
              ? SDTElement.far2zfar(SDTElement.dc2far(element.d, element.c))
              : SDTElement.dc2far(element.d, element.c));
          };
        })
        .attrTween('cy', (datum, index, elements) => {
          const element = elements[index];
          const interpolateD = d3.interpolate(
            (element.d !== undefined) ? element.d : datum.d,
            datum.d,
          );
          const interpolateC = d3.interpolate(
            (element.c !== undefined) ? element.c : datum.c,
            datum.c,
          );
          return (time) => {
            element.d = interpolateD(time);
            element.c = interpolateC(time);
            return yScale(this.zRoc
              ? SDTElement.hr2zhr(SDTElement.dc2hr(element.d, element.c))
              : SDTElement.dc2hr(element.d, element.c));
          };
        });
    } else {
      pointMerge.transition()
        .duration(this.drag ? 0 : 500)
        .ease(d3.easeCubicOut)
        .attr('cx', (datum, index, elements) => {
          const element = elements[index];
          element.d = undefined;
          return xScale(this.zRoc ? SDTElement.far2zfar(datum.far) : datum.far);
        })
        .attr('cy', (datum, index, elements) => {
          const element = elements[index];
          element.c = undefined;
          return yScale(this.zRoc ? SDTElement.hr2zhr(datum.hr) : datum.hr);
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
