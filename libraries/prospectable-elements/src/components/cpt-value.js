
import {html, css} from 'lit';
import * as d3 from 'd3';

import CPTMath from '@decidables/prospectable-math';

import ProspectableElement from '../prospectable-element';

/*
  CPTValue element
  <cpt-value>

*** Add handles to lines?

  Attributes:
    interactive: true/false

    x: numeric (-infinity, infinity)
    a: numeric [0, 1]
    l: numeric [0, 100]
    label: string

  Styles:
    ??
*/
export default class CPTValue extends ProspectableElement {
  static get properties() {
    return {
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
      label: {
        attribute: 'label',
        type: String,
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

    this.a = 0.5;
    this.l = 2;
    this.x = null;
    this.label = '';
    this.function = 'default';

    this.functions = [
      {
        name: 'default',
        a: this.a,
        l: this.l,
      },
    ];

    this.values = [
      {
        name: 'default',
        x: this.x,
        label: this.label,
        function: this.function,
      },
    ];

    this.xl = null;
    this.xw = null;
    this.pw = null;
    this.xs = null;
    this.trialCount = null;
    this.response = null;

    this.width = NaN;
    this.height = NaN;
    this.rem = NaN;

    this.alignState();
  }

  alignState() {
    // Default function
    this.functions[0].a = this.a;
    this.functions[0].l = this.l;

    // Default values
    this.values[0].x = this.x;
    this.values[0].label = this.label;
    this.values[0].function = this.function;

    // Update subjective values
    this.values.forEach((value) => {
      const myFunction = this.functions.find((func) => {
        return func.name === value.function;
      });
      value.v = CPTMath.xal2v(value.x, myFunction.a, myFunction.l);
    });
    this.v = this.values[0].v;
  }

  trial(xl, xw, pw, xs, trial, response) {
    // Remove the old trial
    if (this.trialCount) this.removeValue(`${this.trialCount}-w`);
    if (this.trialCount) this.removeValue(`${this.trialCount}-s`);

    this.xl = xl;
    this.xw = xw;
    this.pw = pw;
    this.xs = xs;
    this.trialCount = trial;
    this.response = response;

    // Add the new trial
    this.setValue(this.xw, `${this.trialCount}-w`, 'g', 'default', true);
    this.setValue(this.xs, `${this.trialCount}-s`, 's', 'default', true);
  }

  // Called to pause trial animations!
  pauseTrial() {
    const lineNew = d3.select(this.renderRoot).selectAll('.lines[data-animating-ease-time-1]');
    lineNew.interrupt('new-1');
    lineNew.interrupt('new-2');
    lineNew.datum((datum) => {
      datum.paused = true;
      return datum;
    });
  }

  // Called to resume trial animations!
  resumeTrial() {
    const lineNew = d3.select(this.renderRoot).selectAll('.lines[data-animating-ease-time-1]');
    lineNew.datum((datum) => {
      datum.paused = false;
      return datum;
    });
    this.requestUpdate();
  }

  clearFunctions() {
    this.functions.splice(1);

    this.requestUpdate();
  }

  clearValues() {
    this.values.splice(1);

    this.requestUpdate();
  }

  clear() {
    this.clearFunctions();
    this.clearValues();
  }

  removeFunction(name) {
    this.functions = this.functions.filter((func) => {
      return (func.name !== name);
    });

    this.requestUpdate();
  }

  removeValue(name) {
    this.values = this.values.filter((value) => {
      return (value.name !== name);
    });

    this.requestUpdate();
  }

  remove(name) {
    this.removeFunction(name);
    this.removeValue(name);
  }

  getFunction(name = 'default') {
    return this.functions.find((func) => {
      return (func.name === name);
    });
  }

  getValue(name = 'default') {
    return this.values.find((value) => {
      return (value.name === name);
    });
  }

  get(name = 'default') {
    return {...this.getFunction(name), ...this.getValue(name)};
  }

  setFunction(a, l, name = 'default') {
    if (name === 'default') {
      this.a = a;
      this.l = l;
    }

    const myFunction = this.functions.find((func) => {
      return (func.name === name);
    });
    if (myFunction === undefined) {
      this.functions.push({
        name: name,
        a: a,
        l: l,
      });
    } else {
      myFunction.a = a;
      myFunction.l = l;
    }

    this.requestUpdate();
  }

  setValue(x, name = 'default', label = '', func = name, trial = false) {
    if (name === 'default') {
      this.x = x;
      this.label = label;
    }

    const myValue = this.values.find((value) => {
      return (value.name === name);
    });
    if (myValue === undefined) {
      this.values.push({
        name: name,
        x: x,
        label: label,
        function: func,
        trial: trial,
        new: trial,
      });
    } else {
      myValue.x = x;
      myValue.label = label;
      myValue.function = func;
    }

    this.requestUpdate();
  }

  set(x, a, l, name = 'default', label = '', func = name) {
    this.setFunction(a, l, func);
    this.setValue(x, name, label, func);
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: inline-block;

          width: 20rem;
          height: 20rem;
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

          r: 6px;
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

  render() { /* eslint-disable-line class-methods-use-this */
    return html`
      ${ProspectableElement.svgFilters}
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
    this.getDimensions();
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
      .subject((event, datum) => {
        return {
          x: event.x,
          y: this.yScale(CPTMath.xal2v(this.xScale.invert(event.x), datum.a, datum.l)),
        };
      })
      .on('start', (event) => {
        const element = event.currentTarget;
        d3.select(element).classed('dragging', true);
      })
      .on('drag', (event, datum) => {
        this.drag = true;
        const x = this.xScale.invert(event.x);
        const v = this.yScale.invert(event.y);
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
          detail: this.get(datum.name),
          bubbles: true,
        }));
      })
      .on('end', (event) => {
        const element = event.currentTarget;
        d3.select(element).classed('dragging', false);
      });

    const curveNDrag = d3.drag()
      .subject((event, datum) => {
        return {
          x: event.x,
          y: this.yScale(CPTMath.xal2v(this.xScale.invert(event.x), datum.a, datum.l)),
        };
      })
      .on('start', (event) => {
        const element = event.currentTarget;
        d3.select(element).classed('dragging', true);
      })
      .on('drag', (event, datum) => {
        this.drag = true;
        const x = this.xScale.invert(event.x);
        const v = this.yScale.invert(event.y);
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
          detail: this.get(datum.name),
          bubbles: true,
        }));
      })
      .on('end', (event) => {
        const element = event.currentTarget;
        d3.select(element).classed('dragging', false);
      });

    const pointDrag = d3.drag()
      .subject((event, datum) => {
        return {
          x: this.xScale(datum.x),
          y: this.yScale(datum.v),
        };
      })
      .on('start', (event) => {
        const element = event.currentTarget;
        d3.select(element).classed('dragging', true);
      })
      .on('drag', (event, datum) => {
        this.drag = true;
        const x = this.xScale.invert(event.x);
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
            v: datum.v,
            label: datum.label,
            a: this.getFunction(datum.function).a,
            l: this.getFunction(datum.function).l,
          },
          bubbles: true,
        }));
      })
      .on('end', (event) => {
        const element = event.currentTarget;
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
      .data(
        this.values.filter((value) => { return (value.x != null); }),
        (datum) => { return datum.name; },
      );
    //  ENTER
    const lineEnter = lineUpdate.enter().append('g')
      .classed('lines', true);
    //  ENTER - All
    lineEnter
      .each((datum, index, elements) => {
        const element = elements[index];
        const selection = d3.select(element);
        selection.append('line')
          .classed('line-x above', true);
        selection.append('line')
          .classed('line-x below', true);
        selection.append('line')
          .classed('line-v before', true);
        selection.append('line')
          .classed('line-v after', true);
      });
    //  ENTER - Animating
    lineEnter
      .filter((datum) => { return datum.new; })
      .attr('data-animating-ease-time-1', 0)
      .attr('data-animating-ease-time-2', 0)
      .each((datum, index, elements) => {
        const element = elements[index];
        const selection = d3.select(element);
        selection.select('.line-x.above')
          .attr('x1', xScale(datum.x))
          .attr('x2', xScale(datum.x))
          .attr('y1', yScale(domainScale))
          .attr('y2', yScale(domainScale));
        selection.select('.line-x.below')
          .attr('x1', xScale(datum.x))
          .attr('x2', xScale(datum.x))
          .attr('y1', yScale(-domainScale))
          .attr('y2', yScale(-domainScale));
        selection.select('.line-v.before')
          .attr('x1', xScale(datum.x))
          .attr('x2', xScale(datum.x))
          .attr('y1', yScale(datum.v))
          .attr('y2', yScale(datum.v));
        selection.select('.line-v.after')
          .attr('x1', xScale(datum.x))
          .attr('x2', xScale(datum.x))
          .attr('y1', yScale(datum.v))
          .attr('y2', yScale(datum.v));
      });
    //  MERGE
    const lineMerge = lineEnter.merge(lineUpdate);
    //  MERGE - Active Animating
    const lineMergeActive = lineMerge.filter((datum) => {
      return (datum.new && !datum.paused);
    });
    if (!lineMergeActive.empty()) {
      const easeTime1 = lineMergeActive.attr('data-animating-ease-time-1');
      const easeTime2 = lineMergeActive.attr('data-animating-ease-time-2');
      const scaleIn1 = (time) => {
        return d3.scaleLinear().domain([0, 1]).range([easeTime1, 1])(time);
      };
      const scaleIn1Inverse = (time) => {
        return d3.scaleLinear().range([0, 1]).domain([easeTime1, 1])(time);
      };
      const scaleIn2 = (time) => {
        return d3.scaleLinear().domain([0, 1]).range([easeTime2, 1])(time);
      };
      const scaleIn2Inverse = (time) => {
        return d3.scaleLinear().range([0, 1]).domain([easeTime2, 1])(time);
      };
      const scaleOutGenerator1 = (easeFunction) => {
        return (time) => {
          return d3.scaleLinear()
            .domain([easeFunction(easeTime1), 1]).range([0, 1])(easeFunction(time));
        };
      };
      const scaleOutGenerator2 = (easeFunction) => {
        return (time) => {
          return d3.scaleLinear()
            .domain([easeFunction(easeTime2), 1]).range([0, 1])(easeFunction(time));
        };
      };
      lineMergeActive
        .transition('new-1')
        .duration(() => {
          return Math.floor(transitionDuration * (1 - easeTime1));
        })
        .ease(scaleIn1)
        .attr('data-animating-ease-time-1', 1)
        .tween('animating', (datum, index, elements) => {
          const element = elements[index];
          const selection = d3.select(element);
          const interpolateX = d3.interpolate(
            (element.x !== undefined) ? element.x : datum.x,
            datum.x,
          );
          const interpolateA = d3.interpolate(
            (element.a !== undefined) ? element.a : this.getFunction(datum.function).a,
            this.getFunction(datum.function).a,
          );
          const interpolateL = d3.interpolate(
            (element.l !== undefined) ? element.l : this.getFunction(datum.function).l,
            this.getFunction(datum.function).l,
          );
          const interpolateAbove = d3.interpolate(
            yScale.invert(selection.select('.line-x.above').attr('y1')),
            datum.v,
          );
          const interpolateBelow = d3.interpolate(
            yScale.invert(selection.select('.line-x.below').attr('y1')),
            datum.v,
          );
          return (time) => {
            element.x = interpolateX(d3.easeCubicOut(scaleIn1Inverse(time)));
            element.a = interpolateA(d3.easeCubicOut(scaleIn1Inverse(time)));
            element.l = interpolateL(d3.easeCubicOut(scaleIn1Inverse(time)));
            element.v = CPTMath.xal2v(element.x, element.a, element.l);
            selection.select('.line-x.above')
              .attr('x1', xScale(element.x))
              .attr('x2', xScale(element.x))
              .attr('y1', yScale(interpolateAbove(scaleOutGenerator1(d3.easeCubicIn)(time))))
              .attr('y2', yScale(domainScale));
            selection.select('.line-x.below')
              .attr('x1', xScale(element.x))
              .attr('x2', xScale(element.x))
              .attr('y1', yScale(interpolateBelow(scaleOutGenerator1(d3.easeCubicIn)(time))))
              .attr('y2', yScale(-domainScale));
          };
        })
        .transition('new-2')
        .duration(() => {
          return Math.floor(transitionDuration * (1 - easeTime2));
        })
        .ease(scaleIn2)
        .attr('data-animating-ease-time-2', 1)
        .tween('animating', (datum, index, elements) => {
          const element = elements[index];
          const selection = d3.select(element);
          const interpolateX = d3.interpolate(
            (element.x !== undefined) ? element.x : datum.x,
            datum.x,
          );
          const interpolateA = d3.interpolate(
            (element.a !== undefined) ? element.a : this.getFunction(datum.function).a,
            this.getFunction(datum.function).a,
          );
          const interpolateL = d3.interpolate(
            (element.l !== undefined) ? element.l : this.getFunction(datum.function).l,
            this.getFunction(datum.function).l,
          );
          const interpolateBefore = d3.interpolate(
            xScale.invert(selection.select('.line-v.before').attr('x1')),
            -domainScale,
          );
          const interpolateAfter = d3.interpolate(
            xScale.invert(selection.select('.line-v.after').attr('x1')),
            domainScale,
          );
          return (time) => {
            element.x = interpolateX(d3.easeCubicOut(scaleIn2Inverse(time)));
            element.a = interpolateA(d3.easeCubicOut(scaleIn2Inverse(time)));
            element.l = interpolateL(d3.easeCubicOut(scaleIn2Inverse(time)));
            element.v = CPTMath.xal2v(element.x, element.a, element.l);
            selection.select('.line-v.before')
              .attr('x1', xScale(interpolateBefore(scaleOutGenerator2(d3.easeCubicOut)(time))))
              .attr('x2', xScale(element.x))
              .attr('y1', yScale(element.v))
              .attr('y2', yScale(element.v));
            selection.select('.line-v.after')
              .attr('x1', xScale(interpolateAfter(scaleOutGenerator2(d3.easeCubicOut)(time))))
              .attr('x2', xScale(element.x))
              .attr('y1', yScale(element.v))
              .attr('y2', yScale(element.v));
          };
        })
        .on('end', (datum, index, elements) => {
          const element = elements[index];
          element.removeAttribute('data-animating-ease-time-1');
          element.removeAttribute('data-animating-ease-time-2');
          datum.new = false;
          this.dispatchEvent(new CustomEvent('risky-response', {
            detail: {
              trial: this.trialCount,
              xl: this.xl,
              xw: this.xw,
              pw: this.pw,
              xs: this.xs,
              response: this.response,
            },
            bubbles: true,
          }));
        });
    }
    //  MERGE - Paused Animating
    const lineMergePaused = lineMerge.filter((datum) => {
      return (datum.new && datum.paused);
    });
    if (!lineMergePaused.empty()) {
      const easeTime1 = lineMergePaused.attr('data-animating-ease-time-1');
      const easeTime2 = lineMergePaused.attr('data-animating-ease-time-2');
      lineMergePaused.transition()
        .duration(this.drag
          ? 0
          : (this.firstUpdate
            ? (transitionDuration * 2)
            : transitionDuration))
        .ease(d3.easeCubicOut)
        .tween('paused', (datum, index, elements) => {
          const element = elements[index];
          const selection = d3.select(element);
          const interpolateX = d3.interpolate(
            (element.x !== undefined) ? element.x : datum.x,
            datum.x,
          );
          const interpolateA = d3.interpolate(
            (element.a !== undefined) ? element.a : this.getFunction(datum.function).a,
            this.getFunction(datum.function).a,
          );
          const interpolateL = d3.interpolate(
            (element.l !== undefined) ? element.l : this.getFunction(datum.function).l,
            this.getFunction(datum.function).l,
          );
          const interpolateAbove = d3.interpolate(domainScale, datum.v);
          const interpolateBelow = d3.interpolate(-domainScale, datum.v);
          const interpolateBefore = d3.interpolate(datum.x, -domainScale);
          const interpolateAfter = d3.interpolate(datum.x, domainScale);
          return (time) => {
            element.x = interpolateX(time);
            element.a = interpolateA(time);
            element.l = interpolateL(time);
            element.v = CPTMath.xal2v(element.x, element.a, element.l);
            selection.select('.line-x.above')
              .attr('x1', xScale(element.x))
              .attr('x2', xScale(element.x))
              .attr('y1', yScale(interpolateAbove(d3.easeCubicIn(easeTime1))))
              .attr('y2', yScale(domainScale));
            selection.select('.line-x.below')
              .attr('x1', xScale(element.x))
              .attr('x2', xScale(element.x))
              .attr('y1', yScale(interpolateBelow(d3.easeCubicIn(easeTime1))))
              .attr('y2', yScale(-domainScale));
            selection.select('.line-v.before')
              .attr('x1', xScale(interpolateBefore(d3.easeCubicOut(easeTime2))))
              .attr('x2', xScale(element.x))
              .attr('y1', yScale(element.v))
              .attr('y2', yScale(element.v));
            selection.select('.line-v.after')
              .attr('x1', xScale(interpolateAfter(d3.easeCubicOut(easeTime2))))
              .attr('x2', xScale(element.x))
              .attr('y1', yScale(element.v))
              .attr('y2', yScale(element.v));
          };
        });
    }
    //  MERGE - Non-animating
    lineMerge.filter((datum) => { return !datum.new; })
      .transition()
      .duration(this.drag
        ? 0
        : (this.firstUpdate
          ? (transitionDuration * 2)
          : transitionDuration))
      .ease(d3.easeCubicOut)
      .tween('non-animating', (datum, index, elements) => {
        const element = elements[index];
        const selection = d3.select(element);
        const interpolateX = d3.interpolate(
          (element.x !== undefined) ? element.x : datum.x,
          datum.x,
        );
        const interpolateA = d3.interpolate(
          (element.a !== undefined) ? element.a : this.getFunction(datum.function).a,
          this.getFunction(datum.function).a,
        );
        const interpolateL = d3.interpolate(
          (element.l !== undefined) ? element.l : this.getFunction(datum.function).l,
          this.getFunction(datum.function).l,
        );
        return (time) => {
          element.x = interpolateX(time);
          element.a = interpolateA(time);
          element.l = interpolateL(time);
          element.v = CPTMath.xal2v(element.x, element.a, element.l);
          selection.select('.line-x.above')
            .attr('x1', xScale(element.x))
            .attr('x2', xScale(element.x))
            .attr('y1', yScale(element.v))
            .attr('y2', yScale(domainScale));
          selection.select('.line-x.below')
            .attr('x1', xScale(element.x))
            .attr('x2', xScale(element.x))
            .attr('y1', yScale(element.v))
            .attr('y2', yScale(-domainScale));
          selection.select('.line-v.before')
            .attr('x1', xScale(-domainScale))
            .attr('x2', xScale(element.x))
            .attr('y1', yScale(element.v))
            .attr('y2', yScale(element.v));
          selection.select('.line-v.after')
            .attr('x1', xScale(domainScale))
            .attr('x2', xScale(element.x))
            .attr('y1', yScale(element.v))
            .attr('y2', yScale(element.v));
        };
      });
    //  EXIT
    // NOTE: Could add a transition here
    lineUpdate.exit().remove();

    // Positive Value Curve
    //  DATA-JOIN
    const curvePUpdate = contentMerge.selectAll('.curve-p')
      .data(this.functions, (datum) => { return datum.name; });
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
          .on('keydown', (event, datum) => {
            if (['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(event.key)) {
              let a = datum.a; /* eslint-disable-line prefer-destructuring */
              switch (event.key) {
                case 'ArrowUp':
                case 'ArrowLeft':
                  a += event.shiftKey ? 0.01 : 0.05;
                  break;
                case 'ArrowDown':
                case 'ArrowRight':
                  a -= event.shiftKey ? 0.01 : 0.05;
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
                  detail: this.get(datum.name),
                  bubbles: true,
                }));
              }
              event.preventDefault();
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
        const interpolateA = d3.interpolate(
          (element.a !== undefined) ? element.a : datum.a,
          datum.a,
        );
        const interpolateL = d3.interpolate(
          (element.l !== undefined) ? element.l : datum.l,
          datum.l,
        );
        return (time) => {
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
      .data(this.functions, (datum) => { return datum.name; });
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
          .on('keydown', (event, datum) => {
            if (['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(event.key)) {
              let l = datum.l; /* eslint-disable-line prefer-destructuring */
              switch (event.key) {
                case 'ArrowUp':
                case 'ArrowLeft':
                  l -= event.shiftKey ? 0.01 : 0.05;
                  break;
                case 'ArrowDown':
                case 'ArrowRight':
                  l += event.shiftKey ? 0.01 : 0.05;
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
                  detail: this.get(datum.name),
                  bubbles: true,
                }));
              }
              event.preventDefault();
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
        const interpolateA = d3.interpolate(
          (element.a !== undefined) ? element.a : datum.a,
          datum.a,
        );
        const interpolateL = d3.interpolate(
          (element.l !== undefined) ? element.l : datum.l,
          datum.l,
        );
        return (time) => {
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
      .data(
        this.values.filter((value) => { return (value.x != null); }),
        (datum) => { return datum.name; },
      );
    //  ENTER
    const pointEnter = pointUpdate.enter().append('g')
      .classed('point', true);
    pointEnter.append('circle')
      .classed('circle', true);
    pointEnter.append('text')
      .classed('label', true);
    //  MERGE
    const pointMerge = pointEnter.merge(pointUpdate);
    pointMerge.select('text')
      .text((datum) => { return datum.label; });
    // Interactive points
    pointMerge.filter((datum) => { return ((this.firstUpdate || changedProperties.has('interactive')) && this.interactive && !datum.trial); })
      .attr('tabindex', 0)
      .classed('interactive', true)
      .call(pointDrag)
      .on('keydown', (event, datum) => {
        if (['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(event.key)) {
          let x = datum.x; /* eslint-disable-line prefer-destructuring */
          switch (event.key) {
            case 'ArrowUp':
            case 'ArrowRight':
              x += event.shiftKey ? 0.2 : 1;
              break;
            case 'ArrowDown':
            case 'ArrowLeft':
              x -= event.shiftKey ? 0.2 : 1;
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
                v: datum.v,
                label: datum.label,
                a: this.getFunction(datum.function).a,
                l: this.getFunction(datum.function).l,
              },
              bubbles: true,
            }));
          }
          event.preventDefault();
        }
      });
    // Non-interactive points
    pointMerge.filter((datum) => { return (((this.firstUpdate || changedProperties.has('interactive')) && !this.interactive) || datum.trial); })
      .attr('tabindex', null)
      .classed('interactive', false)
      .on('drag', null)
      .on('keydown', null);
    // All points
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
          (element.a !== undefined) ? element.a : this.getFunction(datum.function).a,
          this.getFunction(datum.function).a,
        );
        const interpolateL = d3.interpolate(
          (element.l !== undefined) ? element.l : this.getFunction(datum.function).l,
          this.getFunction(datum.function).l,
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
