
import {html, css} from 'lit-element';
import * as d3 from 'd3';

import CPTMath from '@decidable/prospectable-math';

import CPTElement from '../cpt-element';

/*
  CPTValue element
  <cpt-value>

*** Add handles to lines?

  Attributes:
    interactive: true/false

    line: 'all', 'first', 'rest', 'none'
    point: 'all', 'first', 'rest', 'none'

    x: numeric (-infinity, infinity)
    a: numeric [0, 1]
    l: numeric [0, 100]

  Styles:
    ??
*/
export default class CPTValue extends CPTElement {
  static get properties() {
    return {
      line: {
        attribute: 'line',
        type: String,
        reflect: true,
      },
      point: {
        attribute: 'point',
        type: String,
        reflect: true,
      },

      x: {
        attribute: 'value',
        type: Number,
        reflect: true,
      },
      a: {
        attribute: 'alpha',
        type: Number,
        reflect: true,
      },
      l: {
        attribute: 'lambda',
        type: Number,
        reflect: true,
      },

      v: {
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

    this.lines = ['all', 'first', 'rest', 'none'];
    this.line = 'first';
    this.points = ['all', 'first', 'rest', 'none'];
    this.point = 'first';

    this.x = 10;
    this.a = 0.5;
    this.l = 2;

    this.label = '';

    this.locations = [
      {
        name: 'default',
        x: this.x,
        a: this.a,
        l: this.l,
        label: '',
      },
    ];

    this.lineArray = [];
    this.pointArray = [];

    this.width = NaN;
    this.height = NaN;
    this.rem = NaN;

    this.alignState();
  }

  alignState() {
    this.locations[0].x = this.x;
    this.locations[0].a = this.a;
    this.locations[0].l = this.l;
    this.locations[0].label = this.label;

    this.v = CPTMath.xal2v(this.x, this.a, this.l);

    this.lineArray = [];
    this.pointArray = [];
    this.locations.forEach((item, index) => {
      item.v = CPTMath.xal2v(item.x, item.a, item.l);

      if ((index === 0) && (this.line === 'first' || this.line === 'all')) {
        this.lineArray.push(item);
      } else if ((index > 0) && (this.line === 'rest' || this.line === 'all')) {
        this.lineArray.push(item);
      }

      if ((index === 0) && (this.point === 'first' || this.point === 'all')) {
        this.pointArray.push(item);
      } else if ((index > 0) && (this.point === 'rest' || this.point === 'all')) {
        this.pointArray.push(item);
      }
    });
  }

  get(name = 'default') {
    const location = this.locations.find((item) => {
      return (item.name === name);
    });

    return (location === undefined) ? null : location;
  }

  set(x, a, l, name = 'default', label = '') {
    if (name === 'default') {
      this.x = x;
      this.a = a;
      this.l = l;
      this.label = label;
    }
    const location = this.locations.find((item) => {
      return (item.name === name);
    });
    if (location === undefined) {
      this.locations.push({
        name: name,
        x: x,
        a: a,
        l: l,
        label: label,
      });
    } else {
      location.x = x;
      location.a = a;
      location.l = l;
      location.label = label;
    }

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

        text {
          /* stylelint-disable property-no-vendor-prefix */
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        .curve-p.interactive,
        .curve-n.interactive {
          cursor: nwse-resize;

          filter: url("#shadow-2");
          outline: none;
        }

        .curve-p.interactive:hover,
        .curve-n.interactive:hover {
          filter: url("#shadow-4");
        }

        .curve-p.interactive:active,
        .curve-n.interactive:active {
          filter: url("#shadow-8");
        }

        :host(.keyboard) .curve-p.interactive:focus,
        :host(.keyboard) .curve-n.interactive:focus {
          filter: url("#shadow-8");
        }

        .point.interactive {
          cursor: nesw-resize;

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
        .title-y {
          font-weight: 600;

          fill: currentColor;
        }

        .tick {
          font-size: 0.75rem;
        }

        .scale-x path,
        .scale-x line,
        .scale-y path,
        .scale-y line {
          stroke: var(---color-element-border);
        }

        .axis-x,
        .axis-y {
          stroke: var(---color-element-border);
          shape-rendering: crispEdges;
        }

        .diagonal {
          stroke: var(---color-element-border);
          stroke-dasharray: 4;
          stroke-width: 1;
        }

        .curve-p,
        .curve-n {
          fill: none;
          stroke: var(---color-element-emphasis);
          stroke-width: 2;
        }

        .line-x,
        .line-v {
          fill: none;
          stroke-width: 2;
        }

        .line-x {
          stroke: var(---color-x);
        }

        .line-v {
          stroke: var(---color-v);
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
      ${CPTElement.svgFilters}
    `;
  }

  getDimensions() {
    this.width = parseFloat(this.getComputedStyleValue('width'), 10);
    this.height = parseFloat(this.getComputedStyleValue('height'), 10);
    this.rem = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('font-size'), 10);
    // console.log(`cpt-value: width = ${this.width}, height = ${this.height}, rem = ${this.rem}`);
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

    const domainScale = 20;
    // X Scale
    const xScale = d3.scaleLinear()
      .domain([-domainScale, domainScale])
      .range([0, width]);
    this.xScale = xScale;

    // Y Scale
    const yScale = d3.scaleLinear()
      .domain([domainScale, -domainScale])
      .range([0, height]);
    this.yScale = yScale;

    // Drag behaviors
    const curvePDrag = d3.drag()
      .subject((datum) => {
        return {
          x: d3.event.x,
          y: this.yScale(CPTMath.xal2v(this.xScale.invert(d3.event.x), datum.a, datum.l)),
        };
      })
      .on('start', (datum, index, elements) => {
        const element = elements[index];
        d3.select(element).classed('dragging', true);
      })
      .on('drag', (datum) => {
        this.drag = true;
        const x = this.xScale.invert(d3.event.x);
        const v = this.yScale.invert(d3.event.y);
        const a = CPTMath.xlv2a(x, datum.l, v);
        // Clamp a to legal values [0, 1]
        datum.a = (Number.isNaN(a) || (a < 0) || (a > 1) || (x < 0) || (v < 0))
          ? ((x > v)
            ? 0
            : 1)
          : a;

        if (datum.name === 'default') {
          this.a = datum.a;
        }
        this.alignState();
        this.requestUpdate();
        this.dispatchEvent(new CustomEvent('cpt-value-change', {
          detail: {
            name: datum.name,
            x: datum.x,
            a: datum.a,
            l: datum.l,
            v: datum.v,
            label: datum.label,
          },
          bubbles: true,
        }));
      })
      .on('end', (datum, index, elements) => {
        const element = elements[index];
        d3.select(element).classed('dragging', false);
      });

    const curveNDrag = d3.drag()
      .subject((datum) => {
        return {
          x: d3.event.x,
          y: this.yScale(CPTMath.xal2v(this.xScale.invert(d3.event.x), datum.a, datum.l)),
        };
      })
      .on('start', (datum, index, elements) => {
        const element = elements[index];
        d3.select(element).classed('dragging', true);
      })
      .on('drag', (datum) => {
        this.drag = true;
        const x = this.xScale.invert(d3.event.x);
        const v = this.yScale.invert(d3.event.y);
        const l = CPTMath.xav2l(x, datum.a, v);
        // Clamp l to legal values [0, ?
        datum.l = (Number.isNaN(l) || (l < 0) || (l > 100) || (x > 0) || (v > 0))
          ? ((x > v)
            ? 100
            : 0)
          : l;

        if (datum.name === 'default') {
          this.l = datum.l;
        }
        this.alignState();
        this.requestUpdate();
        this.dispatchEvent(new CustomEvent('cpt-value-change', {
          detail: {
            name: datum.name,
            x: datum.x,
            a: datum.a,
            l: datum.l,
            v: datum.v,
            label: datum.label,
          },
          bubbles: true,
        }));
      })
      .on('end', (datum, index, elements) => {
        const element = elements[index];
        d3.select(element).classed('dragging', false);
      });

    const pointDrag = d3.drag()
      .subject((datum) => {
        return {
          x: this.xScale(datum.x),
          y: this.yScale(datum.v),
        };
      })
      .on('start', (datum, index, elements) => {
        const element = elements[index];
        d3.select(element).classed('dragging', true);
      })
      .on('drag', (datum) => {
        this.drag = true;
        const x = this.xScale.invert(d3.event.x);
        // Clamp x to visible plot
        datum.x = (x < -domainScale)
          ? -domainScale
          : ((x > domainScale)
            ? domainScale
            : x);

        if (datum.name === 'default') {
          this.x = datum.x;
        }
        this.alignState();
        this.requestUpdate();
        this.dispatchEvent(new CustomEvent('cpt-value-change', {
          detail: {
            name: datum.name,
            x: datum.x,
            a: datum.a,
            l: datum.l,
            v: datum.v,
            label: datum.label,
          },
          bubbles: true,
        }));
      })
      .on('end', (datum, index, elements) => {
        const element = elements[index];
        d3.select(element).classed('dragging', false);
      });

    // Line for value
    const line = d3.line()
      .x((datum) => { return xScale(datum.x); })
      .y((datum) => { return yScale(datum.v); });

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
      .attr('id', 'clip-cpt-value')
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

    // X Scale
    //  ENTER
    underlayerEnter.append('g')
      .classed('scale-x', true);
    //  MERGE
    const scaleXMerge = underlayerMerge.select('.scale-x')
      .attr('transform', `translate(0, ${yScale(-domainScale)})`);
    const scaleXTransition = scaleXMerge.transition()
      .duration(transitionDuration * 2) // Extra long transition!
      .ease(d3.easeCubicOut)
      .call(d3.axisBottom(xScale))
      .attr('font-size', null)
      .attr('font-family', null);
    scaleXTransition.selectAll('line, path')
      .attr('stroke', null);

    // X Axis
    //  ENTER
    underlayerEnter.append('line')
      .classed('axis-x', true);
    //  MERGE
    underlayerMerge.select('.axis-x').transition()
      .duration(transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('x1', xScale(-domainScale))
      .attr('x2', xScale(domainScale))
      .attr('y1', yScale(0))
      .attr('y2', yScale(0));

    // X Axis Title
    //  ENTER
    const titleXEnter = underlayerEnter.append('text')
      .classed('title-x', true)
      .attr('text-anchor', 'middle');
    titleXEnter.append('tspan')
      .classed('name', true)
      .text('Objective Value (');
    titleXEnter.append('tspan')
      .classed('math-var x', true)
      .text('x');
    titleXEnter.append('tspan')
      .classed('name', true)
      .text(')');
    //  MERGE
    underlayerMerge.select('.title-x')
      .attr('transform', `translate(${(width / 2)}, ${(height + (2.25 * this.rem))})`);

    // Y Scale
    //  ENTER
    underlayerEnter.append('g')
      .classed('scale-y', true);
    // MERGE
    const scaleYTransition = underlayerMerge.select('.scale-y').transition()
      .duration(transitionDuration * 2) // Extra long transition!
      .ease(d3.easeCubicOut)
      .call(d3.axisLeft(yScale))
      .attr('font-size', null)
      .attr('font-family', null);
    scaleYTransition.selectAll('line, path')
      .attr('stroke', null);

    // Y Axis
    //  ENTER
    underlayerEnter.append('line')
      .classed('axis-y', true);
    //  MERGE
    underlayerMerge.select('.axis-y').transition()
      .duration(transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('x1', xScale(0))
      .attr('x2', xScale(0))
      .attr('y1', yScale(domainScale))
      .attr('y2', yScale(-domainScale));

    // Y Axis Title
    //  ENTER
    const titleYEnter = underlayerEnter.append('text')
      .classed('title-y', true)
      .attr('text-anchor', 'middle');
    titleYEnter.append('tspan')
      .classed('name', true)
      .text('Subjective Value (');
    titleYEnter.append('tspan')
      .classed('math-var v', true)
      .text('v');
    titleYEnter.append('tspan')
      .classed('name', true)
      .text(')');
    //  MERGE
    underlayerMerge.select('.title-y')
      .attr('transform', `translate(${-2 * this.rem}, ${(height / 2)})rotate(-90)`);

    // No-Subjectivity Line
    //  ENTER
    underlayerEnter.append('line')
      .classed('diagonal', true);
    //  MERGE
    underlayerMerge.select('.diagonal').transition()
      .duration(transitionDuration * 2) // Extra long transition!
      .ease(d3.easeCubicOut)
      .attr('x1', xScale(-domainScale))
      .attr('y1', yScale(-domainScale))
      .attr('x2', xScale(domainScale))
      .attr('y2', yScale(domainScale));

    // Content
    //  ENTER
    plotEnter.append('g')
      .classed('content', true);
    //  MERGE
    const contentMerge = plotMerge.select('.content');

    // Indicator lines
    //  DATA-JOIN
    const lineUpdate = contentMerge.selectAll('.lines')
      .data(this.pointArray, (datum) => { return datum.name; });
    //  ENTER
    const lineEnter = lineUpdate.enter().append('g')
      .classed('lines', true);
    lineEnter.append('line')
      .classed('line-x', true);
    lineEnter.append('line')
      .classed('line-v', true);
    //  MERGE
    const lineMerge = lineEnter.merge(lineUpdate);
    lineMerge.select('.line-x')
      .transition()
      .duration(this.drag
        ? 0
        : (this.firstUpdate
          ? (transitionDuration * 2)
          : transitionDuration))
      .ease(d3.easeCubicOut)
      .attr('x1', (datum) => {
        return `${xScale(datum.x)}`;
      })
      .attr('x2', (datum) => {
        return `${xScale(datum.x)}`;
      })
      .attr('y1', (datum) => {
        return `${yScale(datum.v)}`;
      })
      .attr('y2', () => {
        return `${yScale(-domainScale)}`;
      });
    lineMerge.select('.line-v')
      .transition()
      .duration(this.drag
        ? 0
        : (this.firstUpdate
          ? (transitionDuration * 2)
          : transitionDuration))
      .ease(d3.easeCubicOut)
      .attr('x1', (datum) => {
        return `${xScale(datum.x)}`;
      })
      .attr('x2', () => {
        return `${xScale(-domainScale)}`;
      })
      .attr('y1', (datum) => {
        return `${yScale(datum.v)}`;
      })
      .attr('y2', (datum) => {
        return `${yScale(datum.v)}`;
      });
    //  EXIT
    // NOTE: Could add a transition here
    lineUpdate.exit().remove();

    // Positive Value Curve
    //  DATA-JOIN
    const curvePUpdate = contentMerge.selectAll('.curve-p')
      .data(this.lineArray, (datum) => { return datum.name; });
    //  ENTER
    const curvePEnter = curvePUpdate.enter().append('path')
      .classed('curve-p', true)
      .attr('clip-path', 'url(#clip-cpt-value)');
    //  MERGE
    const curvePMerge = curvePEnter.merge(curvePUpdate);
    if (this.firstUpdate || changedProperties.has('interactive')) {
      if (this.interactive) {
        curvePMerge
          .attr('tabindex', 0)
          .classed('interactive', true)
          .call(curvePDrag)
          .on('keydown', (datum) => {
            if (['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(d3.event.key)) {
              let a = datum.a; // eslint-disable-line prefer-destructuring
              switch (d3.event.key) {
                case 'ArrowUp':
                case 'ArrowLeft':
                  a += d3.event.shiftKey ? 0.01 : 0.05;
                  break;
                case 'ArrowDown':
                case 'ArrowRight':
                  a -= d3.event.shiftKey ? 0.01 : 0.05;
                  break;
                default:
                  // no-op
              }
              // Clamp a to legal values [0, 1]
              a = (a < 0)
                ? 0
                : ((a > 1)
                  ? 1
                  : a);
              if (a !== datum.a) {
                datum.a = a;
                if (datum.name === 'default') {
                  this.a = datum.a;
                }
                this.alignState();
                this.requestUpdate();
                this.dispatchEvent(new CustomEvent('cpt-value-change', {
                  detail: {
                    name: datum.name,
                    x: datum.x,
                    a: datum.a,
                    l: datum.l,
                    v: datum.v,
                    label: datum.label,
                  },
                  bubbles: true,
                }));
              }
              d3.event.preventDefault();
            }
          });
      } else {
        curvePMerge
          .attr('tabindex', null)
          .classed('interactive', false)
          .on('drag', null)
          .on('keydown', null);
      }
    }
    curvePMerge.transition()
      .duration(this.drag
        ? 0
        : (this.firstUpdate
          ? (transitionDuration * 2)
          : transitionDuration))
      .ease(d3.easeCubicOut)
      .attrTween('d', (datum, index, elements) => {
        const element = elements[index];
        const interpolateX = d3.interpolate(
          (element.x !== undefined) ? element.x : datum.x,
          datum.x,
        );
        const interpolateA = d3.interpolate(
          (element.a !== undefined) ? element.a : datum.a,
          datum.a,
        );
        const interpolateL = d3.interpolate(
          (element.l !== undefined) ? element.l : datum.l,
          datum.l,
        );
        return (time) => {
          element.x = interpolateX(time);
          element.a = interpolateA(time);
          element.l = interpolateL(time);
          const curveP = d3.range(xScale(0), xScale.range()[1] + 1, 1).map((range) => {
            return {
              x: xScale.invert(range),
              v: CPTMath.xal2v(
                xScale.invert(range),
                element.a,
                element.l,
              ),
            };
          });
          return line(curveP);
        };
      });
    //  EXIT
    // NOTE: Could add a transition here
    curvePUpdate.exit().remove();

    // Negative Value Curve
    //  DATA-JOIN
    const curveNUpdate = contentMerge.selectAll('.curve-n')
      .data(this.lineArray, (datum) => { return datum.name; });
    //  ENTER
    const curveNEnter = curveNUpdate.enter().append('path')
      .classed('curve-n', true)
      .attr('clip-path', 'url(#clip-cpt-value)');
    //  MERGE
    const curveNMerge = curveNEnter.merge(curveNUpdate);
    if (this.firstUpdate || changedProperties.has('interactive')) {
      if (this.interactive) {
        curveNMerge
          .attr('tabindex', 0)
          .classed('interactive', true)
          .call(curveNDrag)
          .on('keydown', (datum) => {
            if (['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(d3.event.key)) {
              let l = datum.l; // eslint-disable-line prefer-destructuring
              switch (d3.event.key) {
                case 'ArrowUp':
                case 'ArrowLeft':
                  l -= d3.event.shiftKey ? 0.01 : 0.05;
                  break;
                case 'ArrowDown':
                case 'ArrowRight':
                  l += d3.event.shiftKey ? 0.01 : 0.05;
                  break;
                default:
                  // no-op
              }
              // Clamp l to legal values [0, ?
              l = (l < 0)
                ? 0
                : ((l > 100)
                  ? 100
                  : l);
              if (l !== datum.l) {
                datum.l = l;
                if (datum.name === 'default') {
                  this.l = datum.l;
                }
                this.alignState();
                this.requestUpdate();
                this.dispatchEvent(new CustomEvent('cpt-value-change', {
                  detail: {
                    name: datum.name,
                    x: datum.x,
                    a: datum.a,
                    l: datum.l,
                    v: datum.v,
                    label: datum.label,
                  },
                  bubbles: true,
                }));
              }
              d3.event.preventDefault();
            }
          });
      } else {
        curveNMerge
          .attr('tabindex', null)
          .classed('interactive', false)
          .on('drag', null)
          .on('keydown', null);
      }
    }
    curveNMerge.transition()
      .duration(this.drag
        ? 0
        : (this.firstUpdate
          ? (transitionDuration * 2)
          : transitionDuration))
      .ease(d3.easeCubicOut)
      .attrTween('d', (datum, index, elements) => {
        const element = elements[index];
        const interpolateX = d3.interpolate(
          (element.x !== undefined) ? element.x : datum.x,
          datum.x,
        );
        const interpolateA = d3.interpolate(
          (element.a !== undefined) ? element.a : datum.a,
          datum.a,
        );
        const interpolateL = d3.interpolate(
          (element.l !== undefined) ? element.l : datum.l,
          datum.l,
        );
        return (time) => {
          element.x = interpolateX(time);
          element.a = interpolateA(time);
          element.l = interpolateL(time);
          const curveN = d3.range(xScale.range()[0], xScale(0) + 1, 1).map((range) => {
            return {
              x: xScale.invert(range),
              v: CPTMath.xal2v(
                xScale.invert(range),
                element.a,
                element.l,
              ),
            };
          });
          return line(curveN);
        };
      });
    //  EXIT
    // NOTE: Could add a transition here
    curveNUpdate.exit().remove();

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
          .call(pointDrag)
          .on('keydown', (datum) => {
            if (['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(d3.event.key)) {
              let x = datum.x; // eslint-disable-line prefer-destructuring
              switch (d3.event.key) {
                case 'ArrowUp':
                case 'ArrowRight':
                  x += d3.event.shiftKey ? 0.01 : 0.05;
                  break;
                case 'ArrowDown':
                case 'ArrowLeft':
                  x -= d3.event.shiftKey ? 0.01 : 0.05;
                  break;
                default:
                  // no-op
              }
              // Clamp x to visible plot
              x = (x < -domainScale)
                ? -domainScale
                : ((x > domainScale)
                  ? domainScale
                  : x);
              if (x !== datum.x) {
                datum.x = x;
                if (datum.name === 'default') {
                  this.x = datum.x;
                }
                this.alignState();
                this.requestUpdate();
                this.dispatchEvent(new CustomEvent('cpt-value-change', {
                  detail: {
                    name: datum.name,
                    x: datum.x,
                    a: datum.a,
                    l: datum.l,
                    v: datum.v,
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
    pointMerge.transition()
      .duration(this.drag
        ? 0
        : (this.firstUpdate
          ? (transitionDuration * 2)
          : transitionDuration))
      .ease(d3.easeCubicOut)
      .attrTween('transform', (datum, index, elements) => {
        const element = elements[index];
        const interpolateX = d3.interpolate(
          (element.x !== undefined) ? element.x : datum.x,
          datum.x,
        );
        const interpolateA = d3.interpolate(
          (element.a !== undefined) ? element.a : datum.a,
          datum.a,
        );
        const interpolateL = d3.interpolate(
          (element.l !== undefined) ? element.l : datum.l,
          datum.l,
        );
        return (time) => {
          element.x = interpolateX(time);
          element.a = interpolateA(time);
          element.l = interpolateL(time);
          return `translate(
            ${xScale(element.x)},
            ${yScale(CPTMath.xal2v(element.x, element.a, element.l))}
          )`;
        };
      });
    //  EXIT
    // NOTE: Could add a transition here
    pointUpdate.exit().remove();

    this.drag = false;
    // this.sdt = false;
    this.firstUpdate = false;
  }
}

customElements.define('cpt-value', CPTValue);
