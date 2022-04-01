
import {html, css} from 'lit';
import * as d3 from 'd3';

import CPTMath from '@decidables/prospectable-math';

import CPTElement from '../cpt-element';

/*
  CPTProbability element
  <cpt-probability>

*** Add handles to lines?

  Attributes:
    interactive: true/false

    p: numeric [0, 1]
    g: numeric [0, 1]
    label: string

  Styles:
    ??
*/
export default class CPTProbability extends CPTElement {
  static get properties() {
    return {
      p: {
        attribute: 'probability',
        type: Number,
        reflect: true,
      },
      g: {
        attribute: 'gamma',
        type: Number,
        reflect: true,
      },
      label: {
        attribute: 'label',
        type: String,
        reflect: true,
      },

      w: {
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

    this.g = 0.5;
    this.p = null;
    this.label = '';
    this.function = 'default';

    this.functions = [
      {
        name: 'default',
        g: this.g,
      },
    ];

    this.probabilities = [
      {
        name: 'default',
        p: this.p,
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
    this.functions[0].g = this.g;

    // Default probabilities
    this.probabilities[0].p = this.p;
    this.probabilities[0].label = this.label;
    this.probabilities[0].function = this.function;

    // Update subjective decision weights
    this.probabilities.forEach((probability) => {
      const myFunction = this.functions.find((func) => {
        return func.name === probability.function;
      });

      probability.w = CPTMath.pg2w(probability.p, myFunction.g);
    });
    this.w = this.probabilities[0].w;
  }

  trial(xl, xw, pw, xs, trial, response) {
    // Remove the old trial
    if (this.trialCount) this.removeProbability(`${this.trialCount}`);

    this.xl = xl;
    this.xw = xw;
    this.pw = pw;
    this.xs = xs;
    this.trialCount = trial;
    this.response = response;

    // Add the new trial
    this.setProbability(this.pw, `${this.trialCount}`, '', 'default', true);
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

  clearProbabilities() {
    this.probabilities.splice(1);

    this.requestUpdate();
  }

  clear() {
    this.clearFunctions();
    this.clearProbabilities();
  }

  removeFunction(name) {
    this.functions = this.functions.filter((func) => {
      return (func.name !== name);
    });

    this.requestUpdate();
  }

  removeProbability(name) {
    this.probabilities = this.probabilities.filter((probability) => {
      return (probability.name !== name);
    });

    this.requestUpdate();
  }

  remove(name) {
    this.removeFunction(name);
    this.removeProbability(name);
  }

  getFunction(name = 'default') {
    return this.functions.find((func) => {
      return (func.name === name);
    });
  }

  getProbability(name = 'default') {
    return this.probabilities.find((probability) => {
      return (probability.name === name);
    });
  }

  get(name = 'default') {
    return {...this.getFunction(name), ...this.getProbability(name)};
  }

  setFunction(g, name = 'default') {
    if (name === 'default') {
      this.g = g;
    }

    const myFunction = this.functions.find((func) => {
      return (func.name === name);
    });
    if (myFunction === undefined) {
      this.functions.push({
        name: name,
        g: g,
      });
    } else {
      myFunction.g = g;
    }

    this.requestUpdate();
  }

  setProbability(p, name = 'default', label = '', func = name, trial = false) {
    if (name === 'default') {
      this.p = p;
      this.label = label;
    }

    const myProbability = this.probabilities.find((probability) => {
      return (probability.name === name);
    });
    if (myProbability === undefined) {
      this.probabilities.push({
        name: name,
        p: p,
        label: label,
        function: func,
        trial: trial,
        new: trial,
      });
    } else {
      myProbability.p = p;
      myProbability.label = label;
      myProbability.function = func;
    }

    this.requestUpdate();
  }

  set(p, g, name = 'default', label = '', func = name) {
    this.setFunction(g, name);
    this.setProbability(p, name, label, func);
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

        .curve.interactive {
          cursor: nwse-resize;

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

        .diagonal {
          stroke: var(---color-element-border);
          stroke-dasharray: 4;
          stroke-width: 1;
        }

        .curve {
          fill: none;
          stroke: var(---color-element-emphasis);
          stroke-width: 2;
        }

        .line-p,
        .line-w {
          fill: none;
          stroke-width: 2;
        }

        .line-p {
          stroke: var(---color-p);
        }

        .line-w {
          stroke: var(---color-w);
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

    // X Scale
    const xScale = d3.scaleLinear()
      .domain([0, 1])
      .range([0, width])
      .clamp(true);
    this.xScale = xScale;

    // Y Scale
    const yScale = d3.scaleLinear()
      .domain([1, 0])
      .range([0, height]);
    this.yScale = yScale;

    // Drag behaviors
    const curveDrag = d3.drag()
      .subject((event, datum) => {
        return {
          x: event.x,
          y: this.yScale(CPTMath.pg2w(this.xScale.invert(event.x), datum.g)),

          p: this.xScale.invert(event.x),
          g: datum.g,
          w: CPTMath.pg2w(this.xScale.invert(event.x), datum.g),
        };
      })
      .on('start', (event) => {
        const element = event.currentTarget;
        d3.select(element).classed('dragging', true);
      })
      .on('drag', (event, datum) => {
        this.drag = true;
        const p = this.xScale.invert(event.x);
        const w = this.yScale.invert(event.y);
        const pDiff = p - event.subject.p;
        const wDiff = w - event.subject.w;
        const distance = (pDiff ** 2 + wDiff ** 2) ** 0.5;
        const g = (event.subject.p > event.subject.w)
          ? ((pDiff > wDiff)
            ? event.subject.g - distance
            : event.subject.g + distance)
          : ((pDiff > wDiff)
            ? event.subject.g + distance
            : event.subject.g - distance);
        // Clamp g to legal values [0, 1]
        datum.g = (g > 1)
          ? 1
          : ((g < 0)
            ? 0
            : g);
        if (datum.name === 'default') {
          this.g = datum.g;
        }
        this.alignState();
        this.requestUpdate();
        this.dispatchEvent(new CustomEvent('cpt-probability-change', {
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
          x: this.xScale(datum.p),
          y: this.yScale(datum.w),
        };
      })
      .on('start', (event) => {
        const element = event.currentTarget;
        d3.select(element).classed('dragging', true);
      })
      .on('drag', (event, datum) => {
        this.drag = true;
        const p = this.xScale.invert(event.x);
        // Clamp p to visible plot
        datum.p = (p < 0)
          ? 0
          : ((p > 1)
            ? 1
            : p);

        if (datum.name === 'default') {
          this.p = datum.p;
        }
        this.alignState();
        this.requestUpdate();
        this.dispatchEvent(new CustomEvent('cpt-probability-change', {
          detail: {
            name: datum.name,
            p: datum.p,
            w: datum.w,
            label: datum.label,
            g: this.getFunction(datum.function).g,
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
      .x((datum) => { return xScale(datum.p); })
      .y((datum) => { return yScale(datum.w); });

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

    // X Axis/Scale
    //  ENTER
    underlayerEnter.append('g')
      .classed('scale-x', true);
    //  MERGE
    const scaleXMerge = underlayerMerge.select('.scale-x')
      .attr('transform', `translate(0, ${height})`);
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
      .text('Probability (');
    titleXEnter.append('tspan')
      .classed('math-var p', true)
      .text('p');
    titleXEnter.append('tspan')
      .classed('name', true)
      .text(')');
    //  MERGE
    underlayerMerge.select('.title-x')
      .attr('transform', `translate(${(width / 2)}, ${(height + (2.25 * this.rem))})`);

    // Y Axis/Scale
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

    // Y Axis Title
    //  ENTER
    const titleYEnter = underlayerEnter.append('text')
      .classed('title-y', true)
      .attr('text-anchor', 'middle');
    titleYEnter.append('tspan')
      .classed('name', true)
      .text('Decision Weight (');
    titleYEnter.append('tspan')
      .classed('math-var v', true)
      .text('w');
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
      .attr('x1', xScale(0))
      .attr('y1', yScale(0))
      .attr('x2', xScale(1))
      .attr('y2', yScale(1));

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
        this.probabilities.filter((probability) => { return (probability.p != null); }),
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
          .classed('line-p above', true);
        selection.append('line')
          .classed('line-p below', true);
        selection.append('line')
          .classed('line-w before', true);
        selection.append('line')
          .classed('line-w after', true);
      });
    //  ENTER - Animating
    lineEnter
      .filter((datum) => { return datum.new; })
      .attr('data-animating-ease-time-1', 0)
      .attr('data-animating-ease-time-2', 0)
      .each((datum, index, elements) => {
        const element = elements[index];
        const selection = d3.select(element);
        selection.select('.line-p.above')
          .attr('x1', xScale(datum.p))
          .attr('x2', xScale(datum.p))
          .attr('y1', yScale(1))
          .attr('y2', yScale(1));
        selection.select('.line-p.below')
          .attr('x1', xScale(datum.p))
          .attr('x2', xScale(datum.p))
          .attr('y1', yScale(0))
          .attr('y2', yScale(0));
        selection.select('.line-w.before')
          .attr('x1', xScale(datum.p))
          .attr('x2', xScale(datum.p))
          .attr('y1', yScale(datum.w))
          .attr('y2', yScale(datum.w));
        selection.select('.line-w.after')
          .attr('x1', xScale(datum.p))
          .attr('x2', xScale(datum.p))
          .attr('y1', yScale(datum.w))
          .attr('y2', yScale(datum.w));
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
          const interpolateP = d3.interpolate(
            (element.p !== undefined) ? element.p : datum.p,
            datum.p,
          );
          const interpolateG = d3.interpolate(
            (element.g !== undefined) ? element.g : this.getFunction(datum.function).g,
            this.getFunction(datum.function).g,
          );
          const interpolateAbove = d3.interpolate(
            yScale.invert(selection.select('.line-p.above').attr('y1')),
            datum.w,
          );
          const interpolateBelow = d3.interpolate(
            yScale.invert(selection.select('.line-p.below').attr('y1')),
            datum.w,
          );
          return (time) => {
            element.p = interpolateP(d3.easeCubicOut(scaleIn1Inverse(time)));
            element.g = interpolateG(d3.easeCubicOut(scaleIn1Inverse(time)));
            element.w = CPTMath.pg2w(element.p, element.g);
            selection.select('.line-p.above')
              .attr('x1', xScale(element.p))
              .attr('x2', xScale(element.p))
              .attr('y1', yScale(interpolateAbove(scaleOutGenerator1(d3.easeCubicIn)(time))))
              .attr('y2', yScale(1));
            selection.select('.line-p.below')
              .attr('x1', xScale(element.p))
              .attr('x2', xScale(element.p))
              .attr('y1', yScale(interpolateBelow(scaleOutGenerator1(d3.easeCubicIn)(time))))
              .attr('y2', yScale(0));
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
          const interpolateP = d3.interpolate(
            (element.p !== undefined) ? element.p : datum.p,
            datum.p,
          );
          const interpolateG = d3.interpolate(
            (element.g !== undefined) ? element.g : this.getFunction(datum.function).g,
            this.getFunction(datum.function).g,
          );
          const interpolateBefore = d3.interpolate(
            xScale.invert(selection.select('.line-w.before').attr('x1')),
            0,
          );
          const interpolateAfter = d3.interpolate(
            xScale.invert(selection.select('.line-w.after').attr('x1')),
            1,
          );
          return (time) => {
            element.p = interpolateP(d3.easeCubicOut(scaleIn2Inverse(time)));
            element.g = interpolateG(d3.easeCubicOut(scaleIn2Inverse(time)));
            element.w = CPTMath.pg2w(element.p, element.g);
            selection.select('.line-w.before')
              .attr('x1', xScale(interpolateBefore(scaleOutGenerator2(d3.easeCubicOut)(time))))
              .attr('x2', xScale(element.p))
              .attr('y1', yScale(element.w))
              .attr('y2', yScale(element.w));
            selection.select('.line-w.after')
              .attr('x1', xScale(interpolateAfter(scaleOutGenerator2(d3.easeCubicOut)(time))))
              .attr('x2', xScale(element.p))
              .attr('y1', yScale(element.w))
              .attr('y2', yScale(element.w));
          };
        })
        .on('end', (datum, index, elements) => {
          const element = elements[index];
          element.removeAttribute('data-animating-ease-time-1');
          element.removeAttribute('data-animating-ease-time-2');
          datum.new = false;
          this.dispatchEvent(new CustomEvent('decision-response', {
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
          const interpolateP = d3.interpolate(
            (element.p !== undefined) ? element.p : datum.p,
            datum.p,
          );
          const interpolateG = d3.interpolate(
            (element.g !== undefined) ? element.g : this.getFunction(datum.function).g,
            this.getFunction(datum.function).g,
          );
          const interpolateAbove = d3.interpolate(1, datum.w);
          const interpolateBelow = d3.interpolate(0, datum.w);
          const interpolateBefore = d3.interpolate(datum.p, 0);
          const interpolateAfter = d3.interpolate(datum.p, 1);
          return (time) => {
            element.p = interpolateP(time);
            element.g = interpolateG(time);
            element.w = CPTMath.pg2w(element.p, element.g);
            selection.select('.line-p.above')
              .attr('x1', xScale(element.p))
              .attr('x2', xScale(element.p))
              .attr('y1', yScale(interpolateAbove(d3.easeCubicIn(easeTime1))))
              .attr('y2', yScale(1));
            selection.select('.line-p.below')
              .attr('x1', xScale(element.p))
              .attr('x2', xScale(element.p))
              .attr('y1', yScale(interpolateBelow(d3.easeCubicIn(easeTime1))))
              .attr('y2', yScale(0));
            selection.select('.line-w.before')
              .attr('x1', xScale(interpolateBefore(d3.easeCubicOut(easeTime2))))
              .attr('x2', xScale(element.p))
              .attr('y1', yScale(element.w))
              .attr('y2', yScale(element.w));
            selection.select('.line-w.after')
              .attr('x1', xScale(interpolateAfter(d3.easeCubicOut(easeTime2))))
              .attr('x2', xScale(element.p))
              .attr('y1', yScale(element.w))
              .attr('y2', yScale(element.w));
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
        const interpolateP = d3.interpolate(
          (element.p !== undefined) ? element.p : datum.p,
          datum.p,
        );
        const interpolateG = d3.interpolate(
          (element.g !== undefined) ? element.g : this.getFunction(datum.function).g,
          this.getFunction(datum.function).g,
        );
        return (time) => {
          element.p = interpolateP(time);
          element.g = interpolateG(time);
          element.w = CPTMath.pg2w(element.p, element.g);
          selection.select('.line-p.above')
            .attr('x1', xScale(element.p))
            .attr('x2', xScale(element.p))
            .attr('y1', yScale(element.w))
            .attr('y2', yScale(1));
          selection.select('.line-p.below')
            .attr('x1', xScale(element.p))
            .attr('x2', xScale(element.p))
            .attr('y1', yScale(element.w))
            .attr('y2', yScale(0));
          selection.select('.line-w.before')
            .attr('x1', xScale(0))
            .attr('x2', xScale(element.p))
            .attr('y1', yScale(element.w))
            .attr('y2', yScale(element.w));
          selection.select('.line-w.after')
            .attr('x1', xScale(1))
            .attr('x2', xScale(element.p))
            .attr('y1', yScale(element.w))
            .attr('y2', yScale(element.w));
        };
      });
    //  EXIT
    // NOTE: Could add a transition here
    lineUpdate.exit().remove();

    // Probability Curve
    //  DATA-JOIN
    const curveUpdate = contentMerge.selectAll('.curve')
      .data(this.functions, (datum) => { return datum.name; });
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
          .on('keydown', (event, datum) => {
            if (['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(event.key)) {
              let g = datum.g; /* eslint-disable-line prefer-destructuring */
              switch (event.key) {
                case 'ArrowUp':
                case 'ArrowLeft':
                  g += event.shiftKey ? 0.01 : 0.05;
                  break;
                case 'ArrowDown':
                case 'ArrowRight':
                  g -= event.shiftKey ? 0.01 : 0.05;
                  break;
                default:
                  // no-op
              }
              // Clamp g to legal values [0, 1]
              g = (g < 0)
                ? 0
                : ((g > 1)
                  ? 1
                  : g);
              if (g !== datum.g) {
                datum.g = g;
                if (datum.name === 'default') {
                  this.g = datum.g;
                }
                this.alignState();
                this.requestUpdate();
                this.dispatchEvent(new CustomEvent('cpt-probability-change', {
                  detail: this.get(datum.name),
                  bubbles: true,
                }));
              }
              event.preventDefault();
            }
          });
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
        const interpolateG = d3.interpolate(
          (element.g !== undefined) ? element.g : datum.g,
          datum.g,
        );
        return (time) => {
          element.g = interpolateG(time);
          const curve = d3.range(xScale.range()[0], xScale.range()[1] + 1, 1).map((range) => {
            return {
              p: xScale.invert(range),
              w: CPTMath.pg2w(
                xScale.invert(range),
                element.g,
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
        this.probabilities.filter((probability) => { return (probability.p != null); }),
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
          let p = datum.p; /* eslint-disable-line prefer-destructuring */
          switch (event.key) {
            case 'ArrowUp':
            case 'ArrowRight':
              p += event.shiftKey ? 0.01 : 0.05;
              break;
            case 'ArrowDown':
            case 'ArrowLeft':
              p -= event.shiftKey ? 0.01 : 0.05;
              break;
            default:
              // no-op
          }
          // Clamp p to visible plot
          p = (p < 0)
            ? 0
            : ((p > 1)
              ? 1
              : p);
          if (p !== datum.p) {
            datum.p = p;
            if (datum.name === 'default') {
              this.p = datum.p;
            }
            this.alignState();
            this.requestUpdate();
            this.dispatchEvent(new CustomEvent('cpt-probability-change', {
              detail: {
                name: datum.name,
                p: datum.p,
                w: datum.w,
                label: datum.label,
                g: this.getFunction(datum.function).g,
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
        const interpolateP = d3.interpolate(
          (element.p !== undefined) ? element.p : datum.p,
          datum.p,
        );
        const interpolateG = d3.interpolate(
          (element.g !== undefined) ? element.g : this.getFunction(datum.function).g,
          this.getFunction(datum.function).g,
        );
        return (time) => {
          element.p = interpolateP(time);
          element.g = interpolateG(time);
          return `translate(
            ${xScale(element.p)},
            ${yScale(CPTMath.pg2w(element.p, element.g))}
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

customElements.define('cpt-probability', CPTProbability);
