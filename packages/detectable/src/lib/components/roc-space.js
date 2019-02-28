
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
    this.pointes = ['all', 'first', 'none'];
    this.point = 'all';
    this.isoDs = ['all', 'first', 'none'];
    this.isoD = 'first';
    this.isoCs = ['all', 'first', 'none'];
    this.isoC = 'first';

    this.zRoc = false;

    this.far = 0.25;
    this.hr = 0.75;

    this.points = [
      {
        name: 'default',
        far: this.far,
        hr: this.hr,
      },
    ];

    this.width = NaN;
    this.height = NaN;
    this.rem = NaN;

    this.alignState();
  }

  alignState() {
    this.points[0].hr = this.hr;
    this.points[0].far = this.far;

    this.d = SDTElement.hrfar2d(this.hr, this.far);
    this.c = SDTElement.hrfar2c(this.hr, this.far);

    this.points.forEach((item) => {
      item.d = SDTElement.hrfar2d(item.hr, item.far);
      item.c = SDTElement.hrfar2c(item.hr, item.far);
    });
  }

  set(hr, far, name = 'default') {
    if (name === 'default') {
      this.hr = hr;
      this.far = far;
    }
    const point = this.points.find((item) => {
      return (item.name === name);
    });
    if (point === undefined) {
      this.points.push({
        name: name,
        far: far,
        hr: hr,
      });
    } else {
      point.hr = hr;
      point.far = far;
    }

    this.requestUpdate();
  }

  setWithSDT(d, c, name = 'default') {
    if (name === 'default') {
      this.hr = SDTElement.dc2hr(d, c);
      this.far = SDTElement.dc2far(d, c);
    }
    const point = this.points.find((item) => {
      return (item.name === name);
    });
    if (point === undefined) {
      this.points.push({
        name: name,
        far: SDTElement.dc2far(d, c),
        hr: SDTElement.dc2hr(d, c),
      });
    } else {
      point.hr = SDTElement.dc2hr(d, c);
      point.far = SDTElement.dc2far(d, c);
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
          box-sizing: border-box;

          width: 100%;
          height: 100%;
        }

        .c-plot,
        .d-plot,
        .acc-plot,
        .c-legend .contour,
        .d-legend .contour,
        .acc-legend .contour {
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
        .c-title,
        .d-title,
        .acc-title {
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

        .c-axis .domain,
        .d-axis .domain,
        .acc-axis .domain {
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
    console.log(`roc-space: width = ${this.width}, height = ${this.height}, rem = ${this.rem}`);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this.getDimensions.bind(this));
  }

  disconnectedCallback() {
    document.removeEventListener('resize', this.getDimensions.bind(this));
    window.disconnectedCallback();
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
    //  DATA JOIN
    const svgUpdate = d3.select(this.renderRoot).selectAll('svg.main')
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
      .attr('id', 'clip')
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

    // Bias Plot
    if (this.contour === 'bias' && (
      this.firstUpdate
      || changedProperties.has('zRoc')
      || changedProperties.has('width')
      || changedProperties.has('height')
      || changedProperties.has('rem')
      || changedProperties.has('contour')
    )) {
      const n = 100;
      const values = []; // new Array(n * n);
      for (let j = 0.5, k = 0; j < n; j += 1) {
        for (let i = 0.5; i < n; i += 1, k += 1) {
          const hr = this.zRoc
            ? SDTElement.zhr2hr(((i / n) * 6) - 3)
            : i / n;
          const far = this.zRoc
            ? SDTElement.zfar2far(((1 - j / n) * 6) - 3)
            : (1 - j / n);
          values[k] = SDTElement.hrfar2c(hr, far);
        }
      }
      const thresholds = d3.range(-3, 3, 0.25);
      const contours = d3.contours()
        .size([n, n])
        .thresholds(thresholds);
      const colorBackground = this.getComputedStyleValue('---color-element-background');
      const colorC = this.getComputedStyleValue('---color-c');
      const color = d3.scaleLinear()
        .domain(d3.extent(thresholds))
        .interpolate(() => { return d3.interpolateRgb(colorBackground, colorC); });
      //  ENTER
      underlayerEnter.append('g')
        .classed('c-plot', true);
      //  MERGE
      const cPlotMerge = underlayerMerge.select('.c-plot');

      // Bias Contours
      //  DATA-JOIN
      const cContoursUpdate = cPlotMerge.selectAll('.contour')
        .data(contours(values));
      //  ENTER
      const cContoursEnter = cContoursUpdate.enter().append('path')
        .classed('contour', true);
      //  MERGE
      cContoursEnter.merge(cContoursUpdate).transition()
        .duration(1000)
        .ease(d3.easeCubicOut)
        .attr('d', d3.geoPath(d3.geoIdentity().scale(width / n))) // ????
        .attr('fill', (datum) => { return color(datum.value); });

      // Bias Legend Title
      //  ENTER
      underlayerEnter.append('text')
        .classed('c-title math-var', true)
        .attr('text-anchor', 'middle');
      //  MERGE
      underlayerMerge.select('.c-title')
        .attr('transform', `translate(${(width + (1.25 * this.rem))}, ${this.rem})`)
        .text('c');

      // Bias Legend Plot
      const l = 100;
      const lValues = []; // new Array(4 * l);
      for (let i = 0.5, k = 0; i < l; i += 1, k += 4) {
        lValues[k] = -(((i / n) * 6) - 3);
        lValues[k + 1] = lValues[k];
        lValues[k + 2] = lValues[k];
        lValues[k + 3] = lValues[k];
      }
      const lContours = d3.contours()
        .size([4, l])
        .thresholds(thresholds);
      const cScale = d3.scaleLinear()
        .domain([3, -3]) // c
        .range([0, (10 * this.rem)]);
      //  ENTER
      const cLegendEnter = underlayerEnter.append('g')
        .classed('c-legend', true);
      //  MERGE
      underlayerMerge.select('.c-legend')
        .attr('transform', `translate(${(width + (1.25 * this.rem))}, ${(1.5 * this.rem)})`);

      // Bias Legend Axis
      //  ENTER
      cLegendEnter.append('g')
        .classed('c-axis', true);
      //  MERGE
      underlayerMerge.select('.c-axis')
        .call(d3.axisLeft(cScale).ticks(7).tickSize(0))
        .attr('font-size', null)
        .attr('font-family', null);

      // Bias Legend Contours
      //  DATA-JOIN
      const lContoursUpdate = underlayerMerge.select('.c-legend').selectAll('.contour')
        .data(lContours(lValues));
      //  ENTER
      const lContoursEnter = lContoursUpdate.enter().append('path')
        .classed('contour', true);
      //  MERGE
      lContoursEnter.merge(lContoursUpdate)
        .attr('d', d3.geoPath(d3.geoIdentity().scale((10 * this.rem) / l))) // ????
        .attr('fill', (datum) => { return color(datum.value); });
    }

    // Sensitivity Plot
    if (this.contour === 'sensitivity' && (
      this.firstUpdate
      || changedProperties.has('zRoc')
      || changedProperties.has('width')
      || changedProperties.has('height')
      || changedProperties.has('rem')
      || changedProperties.has('contour')
    )) {
      const n = 100;
      const values = []; // new Array(n * n);
      for (let j = 0.5, k = 0; j < n; j += 1) {
        for (let i = 0.5; i < n; i += 1, k += 1) {
          const hr = this.zRoc
            ? SDTElement.zhr2hr(((i / n) * 6) - 3)
            : i / n;
          const far = this.zRoc
            ? SDTElement.zfar2far(((1 - j / n) * 6) - 3)
            : (1 - j / n);
          values[k] = SDTElement.hrfar2d(hr, far);
        }
      }
      const thresholds = d3.range(-6, 6, 0.5);
      const contours = d3.contours()
        .size([n, n])
        .thresholds(thresholds);
      const colorBackground = this.getComputedStyleValue('---color-element-background');
      const colorD = this.getComputedStyleValue('---color-d');
      const color = d3.scaleLinear()
        .domain(d3.extent(thresholds))
        .interpolate(() => { return d3.interpolateRgb(colorD, colorBackground); });
      //  ENTER
      underlayerEnter.append('g')
        .classed('d-plot', true);
      //  MERGE
      const dPlotMerge = underlayerMerge.select('.d-plot');

      // Sensitivity Contours
      //  DATA-JOIN
      const dContoursUpdate = dPlotMerge.selectAll('.contour')
        .data(contours(values));
      //  ENTER
      const dContoursEnter = dContoursUpdate.enter().append('path')
        .classed('contour', true);
      // MERGE
      dContoursEnter.merge(dContoursUpdate).transition()
        .duration(1000)
        .ease(d3.easeCubicOut)
        .attr('d', d3.geoPath(d3.geoIdentity().scale(width / n))) // ????
        .attr('fill', (datum) => { return color(datum.value); });

      // Sensitivity Legend Title
      //  ENTER
      underlayerEnter.append('text')
        .classed('d-title math-var', true)
        .attr('text-anchor', 'middle');
      //  MERGE
      underlayerMerge.select('.d-title')
        .attr('transform', `translate(${(width + (1.25 * this.rem))}, ${this.rem})`)
        .text('d\u2032');

      // Sensitivity Legend Plot
      const l = 100;
      const lValues = []; // new Array(4 * l);
      for (let i = 0.5, k = 0; i < l; i += 1, k += 4) {
        lValues[k] = ((i / n) * 12) - 6;
        lValues[k + 1] = lValues[k];
        lValues[k + 2] = lValues[k];
        lValues[k + 3] = lValues[k];
      }
      const lContours = d3.contours()
        .size([4, l])
        .thresholds(thresholds);
      const dScale = d3.scaleLinear()
        .domain([6, -6]) // d
        .range([0, (10 * this.rem)]);
      //  ENTER
      const dLegendEnter = underlayerEnter.append('g')
        .classed('d-legend', true);
      //  MERGE
      underlayerMerge.select('.d-legend')
        .attr('transform', `translate(${(width + (1.25 * this.rem))}, ${(1.5 * this.rem)})`);

      // Sensitivity Legend Axis
      //  ENTER
      dLegendEnter.append('g')
        .classed('d-axis', true);
      //  MERGE
      underlayerMerge.select('.d-axis')
        .call(d3.axisLeft(dScale).ticks(7).tickSize(0))
        .attr('font-size', null)
        .attr('font-family', null);

      // Sensitivity Legend Contours
      //  DATA-JOIN
      const lContoursUpdate = underlayerMerge.select('.d-legend').selectAll('.contour')
        .data(lContours(lValues));
      //  ENTER
      const lContoursEnter = lContoursUpdate.enter().append('path')
        .classed('contour', true);
      // MERGE
      lContoursEnter.merge(lContoursUpdate)
        .attr('d', d3.geoPath(d3.geoIdentity().scale((10 * this.rem) / l))) // ????
        .attr('fill', (datum) => { return color(datum.value); });
    }

    // Accuracy Plot
    if (this.contour === 'accuracy' && (
      this.firstUpdate
      || changedProperties.has('zRoc')
      || changedProperties.has('width')
      || changedProperties.has('height')
      || changedProperties.has('rem')
      || changedProperties.has('contour')
    )) {
      const n = 100;
      const values = []; // new Array(n * n);
      for (let j = 0.5, k = 0; j < n; j += 1) {
        for (let i = 0.5; i < n; i += 1, k += 1) {
          const hr = this.zRoc
            ? SDTElement.zhr2hr(((i / n) * 6) - 3)
            : i / n;
          const far = this.zRoc
            ? SDTElement.zfar2far(((1 - j / n) * 6) - 3)
            : (1 - j / n);
          values[k] = SDTElement.hrfar2acc(hr, far);
        }
      }
      const thresholds = d3.range(0, 1, 0.05);
      const contours = d3.contours()
        .size([n, n])
        .thresholds(thresholds);
      const colorBackground = this.getComputedStyleValue('---color-element-background');
      const colorAcc = this.getComputedStyleValue('---color-acc-dark');
      const color = d3.scaleLinear()
        .domain(d3.extent(thresholds))
        .interpolate(() => { return d3.interpolateRgb(colorAcc, colorBackground); });
      //  ENTER
      underlayerEnter.append('g')
        .classed('acc-plot', true);
      //  MERGE
      const accPlotMerge = underlayerMerge.select('.acc-plot');

      // Accuracy Contours
      //  DATA-JOIN
      const accContoursUpdate = accPlotMerge.selectAll('.contour')
        .data(contours(values));
      //  ENTER
      const accContoursEnter = accContoursUpdate.enter().append('path')
        .classed('contour', true);
      // MERGE
      accContoursEnter.merge(accContoursUpdate).transition()
        .duration(1000)
        .ease(d3.easeCubicOut)
        .attr('d', d3.geoPath(d3.geoIdentity().scale(width / n))) // ????
        .attr('fill', (datum) => { return color(datum.value); });

      // Accuracy Legend Title
      //  ENTER
      underlayerEnter.append('text')
        .classed('acc-title', true)
        .attr('text-anchor', 'middle');
      //  MERGE
      underlayerMerge.select('.acc-title')
        .attr('transform', `translate(${(width + (1.125 * this.rem))}, ${this.rem})`)
        .text('Acc');

      // Accuracy Legend Plot
      const l = 100;
      const lValues = []; // new Array(4 * l);
      for (let i = 0.5, k = 0; i < l; i += 1, k += 4) {
        lValues[k] = (i / n);
        lValues[k + 1] = lValues[k];
        lValues[k + 2] = lValues[k];
        lValues[k + 3] = lValues[k];
      }
      const lContours = d3.contours()
        .size([4, l])
        .thresholds(thresholds);
      const accScale = d3.scaleLinear()
        .domain([1, 0]) // acc
        .range([0, (10 * this.rem)]);
      //  ENTER
      const accLegendEnter = underlayerEnter.append('g')
        .classed('acc-legend', true);
      //  MERGE
      underlayerMerge.select('.acc-legend')
        .attr('transform', `translate(${(width + (1.5 * this.rem))}, ${(1.5 * this.rem)})`);

      // Accuracy Legend Axis
      //  ENTER
      accLegendEnter.append('g')
        .classed('acc-axis', true);
      //  MERGE
      underlayerMerge.select('.acc-axis')
        .call(d3.axisLeft(accScale).ticks(7).tickSize(0))
        .attr('font-size', null)
        .attr('font-family', null);

      // Accuracy Legend Contours
      //  DATA-JOIN
      const lContoursUpdate = underlayerMerge.select('.acc-legend').selectAll('.contour')
        .data(lContours(lValues));
      //  ENTER
      const lContoursEnter = lContoursUpdate.enter().append('path')
        .classed('contour', true);
      //  MERGE
      lContoursEnter.merge(lContoursUpdate)
      .attr('d', d3.geoPath(d3.geoIdentity().scale((10 * this.rem) / l))) // ????
        .attr('fill', (datum) => { return color(datum.value); });
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
    const contentEnter = plotEnter.append('g')
      .classed('content', true);
    //  MERGE
    const contentMerge = plotMerge.select('.content');

    // Iso-sensitivity Curve
    if (this.isoD === 'all' || this.isoD === 'first') {
      //  ENTER
      contentEnter.append('path')
        .classed('curve-iso-d', true)
        .attr('clip-path', 'url(#clip)');
      //  MERGE
      if (changedProperties.has('zRoc') || this.firstUpdate) {
        contentMerge.select('.curve-iso-d').transition()
          .duration(this.drag ? 0 : 1000)
          .ease(d3.easeCubicOut)
          .attr('d', line(d3.range(xScale.range()[0], xScale.range()[1] + 1, 1).map((x) => {
            return {
              far: (this.zRoc
                ? SDTElement.zfar2far(xScale.invert(x))
                : xScale.invert(x)),
              hr: (this.zRoc
                ? SDTElement.dfar2hr(this.d, SDTElement.zfar2far(xScale.invert(x)))
                : SDTElement.dfar2hr(this.d, xScale.invert(x))),
            };
          })));
      } else if (this.sdt) {
        contentMerge.select('.curve-iso-d').transition()
          .duration(this.drag ? 0 : 500)
          .ease(d3.easeCubicOut)
          .attrTween('d', (datum, index, elements) => {
            const element = elements[index];
            element.hr = undefined;
            element.far = undefined;
            const interpolateD = d3.interpolate(
              (element.d !== undefined) ? element.d : this.d,
              this.d,
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
        contentMerge.select('.curve-iso-d').transition()
          .duration(this.drag ? 0 : 500)
          .ease(d3.easeCubicOut)
          .attrTween('d', (datum, index, elements) => {
            const element = elements[index];
            element.d = undefined;
            const interpolateHr = d3.interpolate(
              (element.hr !== undefined) ? element.hr : this.hr,
              this.hr,
            );
            const interpolateFar = d3.interpolate(
              (element.far !== undefined) ? element.far : this.far,
              this.far,
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
    }

    // Iso-bias Curve
    if (this.isoC === 'all' || this.isoC === 'first') {
      //  ENTER
      contentEnter.append('path')
        .classed('curve-iso-c', true)
        .attr('clip-path', 'url(#clip)');
      //  MERGE
      if (changedProperties.has('zRoc') || this.firstUpdate) {
        contentMerge.select('.curve-iso-c').transition()
          .duration(this.drag ? 0 : 1000)
          .ease(d3.easeCubicOut)
          .attr('d', line(d3.range(xScale.range()[0], xScale.range()[1] + 1, 1).map((x) => {
            return {
              far: (this.zRoc
                ? SDTElement.zfar2far(xScale.invert(x))
                : xScale.invert(x)),
              hr: (this.zRoc
                ? SDTElement.cfar2hr(this.c, SDTElement.zfar2far(xScale.invert(x)))
                : SDTElement.cfar2hr(this.c, xScale.invert(x))),
            };
          })));
      } else if (this.sdt) {
        contentMerge.select('.curve-iso-c').transition()
          .duration(this.drag ? 0 : 500)
          .ease(d3.easeCubicOut)
          .attrTween('d', (datum, index, elements) => {
            const element = elements[index];
            element.hr = undefined;
            element.far = undefined;
            const interpolateC = d3.interpolate(
              (element.c !== undefined) ? element.c : this.c,
              this.c,
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
        contentMerge.select('.curve-iso-c').transition()
          .duration(this.drag ? 0 : 500)
          .ease(d3.easeCubicOut)
          .attrTween('d', (datum, index, elements) => {
            const element = elements[index];
            element.c = undefined;
            const interpolateHr = d3.interpolate(
              (element.hr !== undefined) ? element.hr : this.hr,
              this.hr,
            );
            const interpolateFar = d3.interpolate(
              (element.far !== undefined) ? element.far : this.far,
              this.far,
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
    }

    // Point
    if (this.point === 'all' || this.point === 'first') {
      //  DATA-JOIN
      const pointUpdate = contentMerge.selectAll('.point')
        .data(this.points);
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
    }

    this.drag = false;
    this.sdt = false;
    this.firstUpdate = false;
  }
}

customElements.define('roc-space', ROCSpace);
