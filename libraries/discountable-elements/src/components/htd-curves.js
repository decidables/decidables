
import {html, css} from 'lit';
import * as d3 from 'd3';

import HTDMath from '@decidables/discountable-math';

import DiscountableElement from '../discountable-element';

/*
  HTDCurves element
  <htd-curves>

  Attributes:
    interactive: true/false

    a1: numeric (-infinity, infinity)
    d1: numeric [0, infinity)
    a2: numeric (-infinity, infinity)
    d2: numeric [0, infinity)
    k: numeric [0, infinity)
    label: string

  Styles:
    ??
*/
export default class HTDCurves extends DiscountableElement {
  static get properties() {
    return {
      a1: {
        attribute: 'amount1',
        type: Number,
        reflect: true,
      },
      d1: {
        attribute: 'delay1',
        type: Number,
        reflect: true,
      },
      label1: {
        attribute: 'label1',
        type: String,
        reflect: true,
      },
      a2: {
        attribute: 'amount2',
        type: Number,
        reflect: true,
      },
      d2: {
        attribute: 'delay2',
        type: Number,
        reflect: true,
      },
      label2: {
        attribute: 'label2',
        type: String,
        reflect: true,
      },
      k: {
        attribute: 'k',
        type: Number,
        reflect: true,
      },

      v1: {
        attribute: false,
        type: Number,
        reflect: false,
      },
      v2: {
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

    this.a1 = 20;
    this.d1 = 5;
    this.label1 = 's';
    this.a2 = 50;
    this.d2 = 40;
    this.label2 = 'l';
    this.k = 0.1;

    this.options = [
      {
        name: 'default1',
        a: this.a1,
        d: this.d1,
        label: this.label1,
      },
      {
        name: 'default2',
        a: this.a2,
        d: this.d2,
        label: this.label2,
      },
    ];

    this.as = null;
    this.ds = null;
    this.al = null;
    this.dl = null;
    this.trialCount = null;
    this.response = null;

    this.width = NaN;
    this.height = NaN;
    this.rem = NaN;

    this.alignState();
  }

  alignState() {
    // Default options
    this.options[0].a = this.a1;
    this.options[0].d = this.d1;
    this.options[0].label = this.label1;

    this.options[1].a = this.a2;
    this.options[1].d = this.d2;
    this.options[1].label = this.label2;

    // Update values
    this.options.forEach((option) => {
      option.v = HTDMath.adk2v(option.a, option.d, this.k);
    });
    this.v1 = this.options[0].v;
    this.v2 = this.options[1].v;
  }

  trial(as, ds, al, dl, trial, response) {
    // Remove the old trial
    if (this.trialCount) this.removeOption(`${this.trialCount}-s`);
    if (this.trialCount) this.removeOption(`${this.trialCount}-l`);

    this.as = as;
    this.ds = ds;
    this.al = al;
    this.dl = dl;
    this.trialCount = trial;
    this.response = response;

    // Add the new trial
    this.setOption(this.as, this.ds, `${this.trialCount}-s`, 's', true);
    this.setOption(this.al, this.dl, `${this.trialCount}-l`, 'l', true);
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

  clearOptions() {
    this.options.splice(1);

    this.requestUpdate();
  }

  removeOption(name) {
    this.options = this.options.filter((option) => {
      return (option.name !== name);
    });

    this.requestUpdate();
  }

  getOption(name = 'default1') {
    return this.options.find((option) => {
      return (option.name === name);
    });
  }

  setOption(a, d, name = 'default1', label = '', trial = false) {
    if (name === 'default') {
      this.a1 = a;
      this.d1 = d;
      this.label1 = label;
    }

    const myOption = this.options.find((option) => {
      return (option.name === name);
    });
    if (myOption === undefined) {
      this.options.push({
        name: name,
        a: a,
        d: d,
        label: label,
        trial: trial,
        new: trial,
      });
    } else {
      myOption.a = a;
      myOption.d = d;
      myOption.label = label;
    }

    this.requestUpdate();
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: inline-block;

          width: 27rem;
          height: 15rem;
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

        .curve.interactive {
          cursor: ns-resize;

          filter: url("#shadow-2");
          outline: none;
        }

        .curve.interactive:hover {
          filter: url("#shadow-4");
        }

        .curve.interactive:active {
          filter: url("#shadow-8");
        }

        :host(.keyboard) .curve.interactive:focus {
          filter: url("#shadow-8");
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
        .title-y {
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
          /* shape-rendering: crispEdges; */
        }

        .curve {
          fill: none;
          stroke: var(---color-element-emphasis);
          stroke-width: 2;
        }

        .point .line {
          fill: none;
          stroke: var(---color-element-emphasis);
          stroke-opacity: 1;
          stroke-width: 4;
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
    return html``;
    //   ${DiscountableElement.svgFilters}
    // `;
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

    // Bail out if we can't get the width/height
    if (Number.isNaN(this.width) || Number.isNaN(this.height) || Number.isNaN(this.rem)) {
      return;
    }

    const hostWidth = this.width;
    const hostHeight = this.height;
    const hostAspectRatio = hostWidth / hostHeight;

    const elementAspectRatio = 1.8;
    let elementWidth;
    let elementHeight;

    if (hostAspectRatio > elementAspectRatio) {
      elementHeight = hostHeight;
      elementWidth = elementHeight * elementAspectRatio;
    } else {
      elementWidth = hostWidth;
      elementHeight = elementWidth / elementAspectRatio;
    }

    const margin = {
      top: 2 * this.rem,
      bottom: 3 * this.rem,
      left: 3 * this.rem,
      right: 2 * this.rem,
    };
    const height = elementHeight - (margin.top + margin.bottom);
    const width = elementWidth - (margin.left + margin.right);

    const transitionDuration = parseInt(this.getComputedStyleValue('---transition-duration'), 10);

    // X Scale
    const timeScale = 100;
    const xScale = d3.scaleLinear()
      .domain([0, timeScale])
      .range([0, width]);

    // Y Scale
    const valueScale = 80;
    const yScale = d3.scaleLinear()
      .domain([valueScale, 0])
      .range([0, height]);

    // Drag behaviors
    const curveDrag = d3.drag()
      .subject((event) => {
        return {
          x: event.x,
          y: event.y,
        };
      })
      .on('start', (event) => {
        const element = event.currentTarget;
        d3.select(element).classed('dragging', true);
      })
      .on('drag', (event, datum) => {
        this.drag = true;

        const dragD = datum.d - xScale.invert(event.x);
        const d = (dragD <= 0)
          ? 0.001
          : (dragD > datum.d)
            ? datum.d
            : dragD;

        const dragV = yScale.invert(event.y);
        const v = (dragV <= 0)
          ? 0.001
          : (dragV > datum.a)
            ? datum.a
            : dragV;

        const k = HTDMath.adv2k(datum.a, d, v);
        this.k = (k < 0)
          ? 0
          : (k > 100)
            ? 100
            : k;

        this.alignState();
        this.requestUpdate();
        this.dispatchEvent(new CustomEvent('htd-curves-change', {
          detail: {
            k: this.k,
          },
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
          x: xScale(datum.d),
          y: yScale(datum.a),
        };
      })
      .on('start', (event) => {
        const element = event.currentTarget;
        d3.select(element).classed('dragging', true);
      })
      .on('drag', (event, datum) => {
        this.drag = true;
        const d = xScale.invert(event.x);
        const a = yScale.invert(event.y);
        // Clamp values to visible plot
        datum.d = (d < 0)
          ? 0
          : (d > timeScale)
            ? timeScale
            : d;
        datum.a = (a < 0)
          ? 0
          : (a > valueScale)
            ? valueScale
            : a;

        if (datum.name === 'default1') {
          this.d1 = datum.d;
          this.a1 = datum.a;
        } else if (datum.name === 'default2') {
          this.d2 = datum.d;
          this.a2 = datum.a;
        }
        this.alignState();
        this.requestUpdate();
        this.dispatchEvent(new CustomEvent('htd-curves-change', {
          detail: {
            name: datum.name,
            a: datum.a,
            d: datum.d,
            label: datum.label,
          },
          bubbles: true,
        }));
      })
      .on('end', (event) => {
        const element = event.currentTarget;
        d3.select(element).classed('dragging', false);
      });

    // Line for time/value space
    const line = d3.line()
      .x((datum) => { return xScale(datum.d); })
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
    svgEnter.html(DiscountableElement.svgDefs);
    //  MERGE
    const svgMerge = svgEnter.merge(svgUpdate)
      .attr('viewBox', `0 0 ${elementWidth} ${elementHeight}`);

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

    // X Axis
    //  ENTER
    underlayerEnter.append('g')
      .classed('axis-x', true);
    //  MERGE
    const scaleXMerge = underlayerMerge.select('.axis-x')
      .attr('transform', `translate(0, ${yScale(0)})`);
    const scaleXTransition = scaleXMerge.transition()
      .duration(transitionDuration * 2) // Extra long transition!
      .ease(d3.easeCubicOut)
      .call(d3.axisBottom(xScale))
      .attr('font-size', null)
      .attr('font-family', null);
    scaleXTransition.selectAll('line, path')
      .attr('stroke', null);

    // X Axis Title
    //  ENTER
    const titleXEnter = underlayerEnter.append('text')
      .classed('title-x', true)
      .attr('text-anchor', 'middle');
    titleXEnter.append('tspan')
      .classed('name', true)
      .text('Delay (');
    titleXEnter.append('tspan')
      .classed('math-var d', true)
      .text('D');
    titleXEnter.append('tspan')
      .classed('name', true)
      .text(')');
    //  MERGE
    underlayerMerge.select('.title-x')
      .attr('transform', `translate(${(width / 2)}, ${(height + (2.25 * this.rem))})`);

    // Y Axis
    //  ENTER
    underlayerEnter.append('g')
      .classed('axis-y', true);
    // MERGE
    const scaleYTransition = underlayerMerge.select('.axis-y').transition()
      .duration(transitionDuration * 2) // Extra long transition!
      .ease(d3.easeCubicOut)
      .call(d3.axisLeft(yScale))
      .attr('font-size', null)
      .attr('font-family', null);
    scaleYTransition.selectAll('line, path')
      .attr('stroke', null);

    // Y Axis Title
    //  ENTER
    const titleYEnter = underlayerEnter.append('text')
      .classed('title-y', true)
      .attr('text-anchor', 'middle');
    titleYEnter.append('tspan')
      .classed('name', true)
      .text('Value (');
    titleYEnter.append('tspan')
      .classed('math-var v', true)
      .text('V');
    titleYEnter.append('tspan')
      .classed('name', true)
      .text(')');
    //  MERGE
    underlayerMerge.select('.title-y')
      .attr('transform', `translate(${-2 * this.rem}, ${(height / 2)})rotate(-90)`);

    // Content
    //  ENTER
    plotEnter.append('g')
      .classed('content', true);
    //  MERGE
    const contentMerge = plotMerge.select('.content');

    // // Indicator lines
    // //  DATA-JOIN
    // const lineUpdate = contentMerge.selectAll('.lines')
    //   .data(
    //     this.values.filter((value) => { return (value.x != null); }),
    //     (datum) => { return datum.name; },
    //   );
    // //  ENTER
    // const lineEnter = lineUpdate.enter().append('g')
    //   .classed('lines', true);
    // //  ENTER - All
    // lineEnter
    //   .each((datum, index, elements) => {
    //     const element = elements[index];
    //     const selection = d3.select(element);
    //     selection.append('line')
    //       .classed('line-x above', true);
    //     selection.append('line')
    //       .classed('line-x below', true);
    //     selection.append('line')
    //       .classed('line-v before', true);
    //     selection.append('line')
    //       .classed('line-v after', true);
    //   });
    // //  ENTER - Animating
    // lineEnter
    //   .filter((datum) => { return datum.new; })
    //   .attr('data-animating-ease-time-1', 0)
    //   .attr('data-animating-ease-time-2', 0)
    //   .each((datum, index, elements) => {
    //     const element = elements[index];
    //     const selection = d3.select(element);
    //     selection.select('.line-x.above')
    //       .attr('x1', xScale(datum.x))
    //       .attr('x2', xScale(datum.x))
    //       .attr('y1', yScale(domainScale))
    //       .attr('y2', yScale(domainScale));
    //     selection.select('.line-x.below')
    //       .attr('x1', xScale(datum.x))
    //       .attr('x2', xScale(datum.x))
    //       .attr('y1', yScale(-domainScale))
    //       .attr('y2', yScale(-domainScale));
    //     selection.select('.line-v.before')
    //       .attr('x1', xScale(datum.x))
    //       .attr('x2', xScale(datum.x))
    //       .attr('y1', yScale(datum.v))
    //       .attr('y2', yScale(datum.v));
    //     selection.select('.line-v.after')
    //       .attr('x1', xScale(datum.x))
    //       .attr('x2', xScale(datum.x))
    //       .attr('y1', yScale(datum.v))
    //       .attr('y2', yScale(datum.v));
    //   });
    // //  MERGE
    // const lineMerge = lineEnter.merge(lineUpdate);
    // //  MERGE - Active Animating
    // const lineMergeActive = lineMerge.filter((datum) => {
    //   return (datum.new && !datum.paused);
    // });
    // if (!lineMergeActive.empty()) {
    //   const easeTime1 = lineMergeActive.attr('data-animating-ease-time-1');
    //   const easeTime2 = lineMergeActive.attr('data-animating-ease-time-2');
    //   const scaleIn1 = (time) => {
    //     return d3.scaleLinear().domain([0, 1]).range([easeTime1, 1])(time);
    //   };
    //   const scaleIn1Inverse = (time) => {
    //     return d3.scaleLinear().range([0, 1]).domain([easeTime1, 1])(time);
    //   };
    //   const scaleIn2 = (time) => {
    //     return d3.scaleLinear().domain([0, 1]).range([easeTime2, 1])(time);
    //   };
    //   const scaleIn2Inverse = (time) => {
    //     return d3.scaleLinear().range([0, 1]).domain([easeTime2, 1])(time);
    //   };
    //   const scaleOutGenerator1 = (easeFunction) => {
    //     return (time) => {
    //       return d3.scaleLinear()
    //         .domain([easeFunction(easeTime1), 1]).range([0, 1])(easeFunction(time));
    //     };
    //   };
    //   const scaleOutGenerator2 = (easeFunction) => {
    //     return (time) => {
    //       return d3.scaleLinear()
    //         .domain([easeFunction(easeTime2), 1]).range([0, 1])(easeFunction(time));
    //     };
    //   };
    //   lineMergeActive
    //     .transition('new-1')
    //     .duration(() => {
    //       return Math.floor(transitionDuration * (1 - easeTime1));
    //     })
    //     .ease(scaleIn1)
    //     .attr('data-animating-ease-time-1', 1)
    //     .tween('animating', (datum, index, elements) => {
    //       const element = elements[index];
    //       const selection = d3.select(element);
    //       const interpolateX = d3.interpolate(
    //         (element.x !== undefined) ? element.x : datum.x,
    //         datum.x,
    //       );
    //       const interpolateA = d3.interpolate(
    //         (element.a !== undefined) ? element.a : this.getFunction(datum.function).a,
    //         this.getFunction(datum.function).a,
    //       );
    //       const interpolateL = d3.interpolate(
    //         (element.l !== undefined) ? element.l : this.getFunction(datum.function).l,
    //         this.getFunction(datum.function).l,
    //       );
    //       const interpolateAbove = d3.interpolate(
    //         yScale.invert(selection.select('.line-x.above').attr('y1')),
    //         datum.v,
    //       );
    //       const interpolateBelow = d3.interpolate(
    //         yScale.invert(selection.select('.line-x.below').attr('y1')),
    //         datum.v,
    //       );
    //       return (time) => {
    //         element.x = interpolateX(d3.easeCubicOut(scaleIn1Inverse(time)));
    //         element.a = interpolateA(d3.easeCubicOut(scaleIn1Inverse(time)));
    //         element.l = interpolateL(d3.easeCubicOut(scaleIn1Inverse(time)));
    //         element.v = CPTMath.xal2v(element.x, element.a, element.l);
    //         selection.select('.line-x.above')
    //           .attr('x1', xScale(element.x))
    //           .attr('x2', xScale(element.x))
    //           .attr('y1', yScale(interpolateAbove(scaleOutGenerator1(d3.easeCubicIn)(time))))
    //           .attr('y2', yScale(domainScale));
    //         selection.select('.line-x.below')
    //           .attr('x1', xScale(element.x))
    //           .attr('x2', xScale(element.x))
    //           .attr('y1', yScale(interpolateBelow(scaleOutGenerator1(d3.easeCubicIn)(time))))
    //           .attr('y2', yScale(-domainScale));
    //       };
    //     })
    //     .transition('new-2')
    //     .duration(() => {
    //       return Math.floor(transitionDuration * (1 - easeTime2));
    //     })
    //     .ease(scaleIn2)
    //     .attr('data-animating-ease-time-2', 1)
    //     .tween('animating', (datum, index, elements) => {
    //       const element = elements[index];
    //       const selection = d3.select(element);
    //       const interpolateX = d3.interpolate(
    //         (element.x !== undefined) ? element.x : datum.x,
    //         datum.x,
    //       );
    //       const interpolateA = d3.interpolate(
    //         (element.a !== undefined) ? element.a : this.getFunction(datum.function).a,
    //         this.getFunction(datum.function).a,
    //       );
    //       const interpolateL = d3.interpolate(
    //         (element.l !== undefined) ? element.l : this.getFunction(datum.function).l,
    //         this.getFunction(datum.function).l,
    //       );
    //       const interpolateBefore = d3.interpolate(
    //         xScale.invert(selection.select('.line-v.before').attr('x1')),
    //         -domainScale,
    //       );
    //       const interpolateAfter = d3.interpolate(
    //         xScale.invert(selection.select('.line-v.after').attr('x1')),
    //         domainScale,
    //       );
    //       return (time) => {
    //         element.x = interpolateX(d3.easeCubicOut(scaleIn2Inverse(time)));
    //         element.a = interpolateA(d3.easeCubicOut(scaleIn2Inverse(time)));
    //         element.l = interpolateL(d3.easeCubicOut(scaleIn2Inverse(time)));
    //         element.v = CPTMath.xal2v(element.x, element.a, element.l);
    //         selection.select('.line-v.before')
    //           .attr('x1', xScale(interpolateBefore(scaleOutGenerator2(d3.easeCubicOut)(time))))
    //           .attr('x2', xScale(element.x))
    //           .attr('y1', yScale(element.v))
    //           .attr('y2', yScale(element.v));
    //         selection.select('.line-v.after')
    //           .attr('x1', xScale(interpolateAfter(scaleOutGenerator2(d3.easeCubicOut)(time))))
    //           .attr('x2', xScale(element.x))
    //           .attr('y1', yScale(element.v))
    //           .attr('y2', yScale(element.v));
    //       };
    //     })
    //     .on('end', (datum, index, elements) => {
    //       const element = elements[index];
    //       element.removeAttribute('data-animating-ease-time-1');
    //       element.removeAttribute('data-animating-ease-time-2');
    //       datum.new = false;
    //       this.dispatchEvent(new CustomEvent('prospectable-response', {
    //         detail: {
    //           trial: this.trialCount,
    //           xl: this.xl,
    //           xw: this.xw,
    //           pw: this.pw,
    //           xs: this.xs,
    //           response: this.response,
    //         },
    //         bubbles: true,
    //       }));
    //     });
    // }
    // //  MERGE - Paused Animating
    // const lineMergePaused = lineMerge.filter((datum) => {
    //   return (datum.new && datum.paused);
    // });
    // if (!lineMergePaused.empty()) {
    //   const easeTime1 = lineMergePaused.attr('data-animating-ease-time-1');
    //   const easeTime2 = lineMergePaused.attr('data-animating-ease-time-2');
    //   lineMergePaused.transition()
    //     .duration(this.drag
    //       ? 0
    //       : (this.firstUpdate
    //         ? (transitionDuration * 2)
    //         : transitionDuration))
    //     .ease(d3.easeCubicOut)
    //     .tween('paused', (datum, index, elements) => {
    //       const element = elements[index];
    //       const selection = d3.select(element);
    //       const interpolateX = d3.interpolate(
    //         (element.x !== undefined) ? element.x : datum.x,
    //         datum.x,
    //       );
    //       const interpolateA = d3.interpolate(
    //         (element.a !== undefined) ? element.a : this.getFunction(datum.function).a,
    //         this.getFunction(datum.function).a,
    //       );
    //       const interpolateL = d3.interpolate(
    //         (element.l !== undefined) ? element.l : this.getFunction(datum.function).l,
    //         this.getFunction(datum.function).l,
    //       );
    //       const interpolateAbove = d3.interpolate(domainScale, datum.v);
    //       const interpolateBelow = d3.interpolate(-domainScale, datum.v);
    //       const interpolateBefore = d3.interpolate(datum.x, -domainScale);
    //       const interpolateAfter = d3.interpolate(datum.x, domainScale);
    //       return (time) => {
    //         element.x = interpolateX(time);
    //         element.a = interpolateA(time);
    //         element.l = interpolateL(time);
    //         element.v = CPTMath.xal2v(element.x, element.a, element.l);
    //         selection.select('.line-x.above')
    //           .attr('x1', xScale(element.x))
    //           .attr('x2', xScale(element.x))
    //           .attr('y1', yScale(interpolateAbove(d3.easeCubicIn(easeTime1))))
    //           .attr('y2', yScale(domainScale));
    //         selection.select('.line-x.below')
    //           .attr('x1', xScale(element.x))
    //           .attr('x2', xScale(element.x))
    //           .attr('y1', yScale(interpolateBelow(d3.easeCubicIn(easeTime1))))
    //           .attr('y2', yScale(-domainScale));
    //         selection.select('.line-v.before')
    //           .attr('x1', xScale(interpolateBefore(d3.easeCubicOut(easeTime2))))
    //           .attr('x2', xScale(element.x))
    //           .attr('y1', yScale(element.v))
    //           .attr('y2', yScale(element.v));
    //         selection.select('.line-v.after')
    //           .attr('x1', xScale(interpolateAfter(d3.easeCubicOut(easeTime2))))
    //           .attr('x2', xScale(element.x))
    //           .attr('y1', yScale(element.v))
    //           .attr('y2', yScale(element.v));
    //       };
    //     });
    // }
    // //  MERGE - Non-animating
    // lineMerge.filter((datum) => { return !datum.new; })
    //   .transition()
    //   .duration(this.drag
    //     ? 0
    //     : (this.firstUpdate
    //       ? (transitionDuration * 2)
    //       : transitionDuration))
    //   .ease(d3.easeCubicOut)
    //   .tween('non-animating', (datum, index, elements) => {
    //     const element = elements[index];
    //     const selection = d3.select(element);
    //     const interpolateX = d3.interpolate(
    //       (element.x !== undefined) ? element.x : datum.x,
    //       datum.x,
    //     );
    //     const interpolateA = d3.interpolate(
    //       (element.a !== undefined) ? element.a : this.getFunction(datum.function).a,
    //       this.getFunction(datum.function).a,
    //     );
    //     const interpolateL = d3.interpolate(
    //       (element.l !== undefined) ? element.l : this.getFunction(datum.function).l,
    //       this.getFunction(datum.function).l,
    //     );
    //     return (time) => {
    //       element.x = interpolateX(time);
    //       element.a = interpolateA(time);
    //       element.l = interpolateL(time);
    //       element.v = CPTMath.xal2v(element.x, element.a, element.l);
    //       selection.select('.line-x.above')
    //         .attr('x1', xScale(element.x))
    //         .attr('x2', xScale(element.x))
    //         .attr('y1', yScale(element.v))
    //         .attr('y2', yScale(domainScale));
    //       selection.select('.line-x.below')
    //         .attr('x1', xScale(element.x))
    //         .attr('x2', xScale(element.x))
    //         .attr('y1', yScale(element.v))
    //         .attr('y2', yScale(-domainScale));
    //       selection.select('.line-v.before')
    //         .attr('x1', xScale(-domainScale))
    //         .attr('x2', xScale(element.x))
    //         .attr('y1', yScale(element.v))
    //         .attr('y2', yScale(element.v));
    //       selection.select('.line-v.after')
    //         .attr('x1', xScale(domainScale))
    //         .attr('x2', xScale(element.x))
    //         .attr('y1', yScale(element.v))
    //         .attr('y2', yScale(element.v));
    //     };
    //   });
    // //  EXIT
    // // NOTE: Could add a transition here
    // lineUpdate.exit().remove();

    // Discounting Curve
    //  DATA-JOIN
    const curveUpdate = contentMerge.selectAll('.curve')
      .data(this.options, (datum) => { return datum.name; });
    //  ENTER
    const curveEnter = curveUpdate.enter().append('path')
      .classed('curve', true)
      .attr('clip-path', 'url(#clip-cpt-value)');
    //  MERGE
    const curveMerge = curveEnter.merge(curveUpdate);
    if (this.firstUpdate || changedProperties.has('interactive')) {
      if (this.interactive) {
        curveMerge
          .attr('tabindex', 0)
          .classed('interactive', true)
          .call(curveDrag)
          // .on('keydown', (event, datum) => {
          //   if (['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(event.key)) {
          //     let a = datum.a; /* eslint-disable-line prefer-destructuring */
          //     switch (event.key) {
          //       case 'ArrowUp':
          //       case 'ArrowLeft':
          //         a += event.shiftKey ? 0.01 : 0.05;
          //         break;
          //       case 'ArrowDown':
          //       case 'ArrowRight':
          //         a -= event.shiftKey ? 0.01 : 0.05;
          //         break;
          //       default:
          //         // no-op
          //     }
          //     // Clamp a to legal values [0, 1]
          //     a = (a < 0)
          //       ? 0
          //       : ((a > 1)
          //         ? 1
          //         : a);
          //     if (a !== datum.a) {
          //       datum.a = a;
          //       if (datum.name === 'default') {
          //         this.a = datum.a;
          //       }
          //       this.alignState();
          //       this.requestUpdate();
          //       this.dispatchEvent(new CustomEvent('cpt-value-change', {
          //         detail: this.get(datum.name),
          //         bubbles: true,
          //       }));
          //     }
          //     event.preventDefault();
          //   }
          // });
      } else {
        curveMerge
          .attr('tabindex', null)
          .classed('interactive', false)
          .on('drag', null)
          .on('keydown', null);
      }
    }
    curveMerge.transition()
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
        const interpolateD = d3.interpolate(
          (element.d !== undefined) ? element.d : datum.d,
          datum.d,
        );
        return (time) => {
          element.a = interpolateA(time);
          element.d = interpolateD(time);
          const curve = d3.range(xScale(0), xScale(element.d), 1).map((range) => {
            return {
              d: xScale.invert(range),
              v: HTDMath.adk2v(
                element.a,
                element.d - xScale.invert(range),
                this.k,
              ),
            };
          });
          return line(curve);
        };
      });
    //  EXIT
    // NOTE: Could add a transition here
    curveUpdate.exit().remove();

    // Point
    //  DATA-JOIN
    const pointUpdate = contentMerge.selectAll('.point')
      .data(
        this.options.filter((value) => { return (value.a != null); }),
        (datum) => { return datum.name; },
      );
    //  ENTER
    const pointEnter = pointUpdate.enter().append('g')
      .classed('point', true);
    pointEnter.append('line')
      .classed('line', true)
      .attr('y2', yScale(0));
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
      // .on('keydown', (event, datum) => {
      //   if (['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(event.key)) {
      //     let x = datum.x; /* eslint-disable-line prefer-destructuring */
      //     switch (event.key) {
      //       case 'ArrowUp':
      //       case 'ArrowRight':
      //         x += event.shiftKey ? 0.2 : 1;
      //         break;
      //       case 'ArrowDown':
      //       case 'ArrowLeft':
      //         x -= event.shiftKey ? 0.2 : 1;
      //         break;
      //       default:
      //         // no-op
      //     }
      //     // Clamp x to visible plot
      //     x = (x < -domainScale)
      //       ? -domainScale
      //       : ((x > domainScale)
      //         ? domainScale
      //         : x);
      //     if (x !== datum.x) {
      //       datum.x = x;
      //       if (datum.name === 'default') {
      //         this.x = datum.x;
      //       }
      //       this.alignState();
      //       this.requestUpdate();
      //       this.dispatchEvent(new CustomEvent('cpt-value-change', {
      //         detail: {
      //           name: datum.name,
      //           x: datum.x,
      //           v: datum.v,
      //           label: datum.label,
      //           a: this.getFunction(datum.function).a,
      //           l: this.getFunction(datum.function).l,
      //         },
      //         bubbles: true,
      //       }));
      //     }
      //     event.preventDefault();
      //   }
      // });
    // Non-interactive points
    pointMerge.filter((datum) => { return (((this.firstUpdate || changedProperties.has('interactive')) && !this.interactive) || datum.trial); })
      .attr('tabindex', null)
      .classed('interactive', false)
      .on('drag', null)
      .on('keydown', null);
    // All points
    pointMerge.select('line').transition()
      .duration(this.drag
        ? 0
        : (this.firstUpdate
          ? (transitionDuration * 2)
          : transitionDuration))
      .ease(d3.easeCubicOut)
      .attrTween('x1', (datum, index, elements) => {
        const element = elements[index];
        const interpolateD = d3.interpolate(
          (element.d !== undefined) ? element.d : datum.d,
          datum.d,
        );
        return (time) => {
          element.d = interpolateD(time);
          return `${xScale(element.d)}`;
        };
      })
      .attrTween('x2', (datum, index, elements) => {
        const element = elements[index];
        const interpolateD = d3.interpolate(
          (element.d !== undefined) ? element.d : datum.d,
          datum.d,
        );
        return (time) => {
          element.d = interpolateD(time);
          return `${xScale(element.d)}`;
        };
      })
      .attrTween('y1', (datum, index, elements) => {
        const element = elements[index];
        const interpolateA = d3.interpolate(
          (element.a !== undefined) ? element.a : datum.a,
          datum.a,
        );
        return (time) => {
          element.a = interpolateA(time);
          return `${yScale(element.a)}`;
        };
      });
    pointMerge.select('circle').transition()
      .duration(this.drag
        ? 0
        : (this.firstUpdate
          ? (transitionDuration * 2)
          : transitionDuration))
      .ease(d3.easeCubicOut)
      .attrTween('cx', (datum, index, elements) => {
        const element = elements[index];
        const interpolateD = d3.interpolate(
          (element.d !== undefined) ? element.d : datum.d,
          datum.d,
        );
        return (time) => {
          element.d = interpolateD(time);
          return `${xScale(element.d)}`;
        };
      })
      .attrTween('cy', (datum, index, elements) => {
        const element = elements[index];
        const interpolateA = d3.interpolate(
          (element.a !== undefined) ? element.a : datum.a,
          datum.a,
        );
        return (time) => {
          element.a = interpolateA(time);
          return `${yScale(element.a)}`;
        };
      });
    pointMerge.select('text').transition()
      .duration(this.drag
        ? 0
        : (this.firstUpdate
          ? (transitionDuration * 2)
          : transitionDuration))
      .ease(d3.easeCubicOut)
      .attrTween('x', (datum, index, elements) => {
        const element = elements[index];
        const interpolateD = d3.interpolate(
          (element.d !== undefined) ? element.d : datum.d,
          datum.d,
        );
        return (time) => {
          element.d = interpolateD(time);
          return `${xScale(element.d)}`;
        };
      })
      .attrTween('y', (datum, index, elements) => {
        const element = elements[index];
        const interpolateA = d3.interpolate(
          (element.a !== undefined) ? element.a : datum.a,
          datum.a,
        );
        return (time) => {
          element.a = interpolateA(time);
          return `${yScale(element.a)}`;
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

customElements.define('htd-curves', HTDCurves);
