
import {html, css} from 'lit';
import * as d3 from 'd3';

import HTDMath from '@decidables/discountable-math';
import {DecidablesMixinResizeable} from '@decidables/decidables-elements';

import DiscountableElement from '../discountable-element';

/*
  HTDCurves element
  <htd-curves>

  Attributes:
    interactive: true/false

    a: numeric (-infinity, infinity)
    d: numeric [0, infinity)
    k: numeric [0, infinity)
    label: string

  Styles:
    ??
*/
export default class HTDCurves extends DecidablesMixinResizeable(DiscountableElement) {
  static get properties() {
    return {
      a: {
        attribute: 'amount',
        type: Number,
        reflect: true,
      },
      d: {
        attribute: 'delay',
        type: Number,
        reflect: true,
      },
      label: {
        attribute: 'label',
        type: String,
        reflect: true,
      },

      k: {
        attribute: 'k',
        type: Number,
        reflect: true,
      },

      v: {
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

    this.scale = {
      value: {
        min: 0,
        max: 80,
        step: 1,
        round: Math.round,
      },
      time: {
        min: 0,
        max: 100,
        step: 1,
        round: Math.round,
      },
    };

    this.a = null;
    this.d = null;
    this.label = '';
    this.k = HTDMath.k.DEFAULT;

    this.options = [
      {
        name: 'default',
        a: this.a,
        d: this.d,
        label: this.label,
      },
    ];

    this.as = null;
    this.ds = null;
    this.al = null;
    this.dl = null;
    this.trialCount = null;
    this.response = null;

    this.alignState();
  }

  alignState() {
    // Default options
    this.options[0].a = this.a;
    this.options[0].d = this.d;
    this.options[0].label = this.label;

    // Update values
    this.options.forEach((option) => {
      option.v = HTDMath.adk2v(option.a, option.d, this.k);
    });
    this.v = this.options[0].v;
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

  getOption(name = 'default') {
    return this.options.find((option) => {
      return (option.name === name);
    });
  }

  setOption(a, d, name = 'default', label = '', trial = false) {
    if (name === 'default') {
      this.a = a;
      this.d = d;
      this.label = label;
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

        .option .interactive {
          filter: url("#shadow-2");
        }

        .option .interactive:hover {
          filter: url("#shadow-4");
        }

        .option .body.interactive:has(~ .point:hover) {
          filter: url("#shadow-4");
        }

        .option .interactive:active {
          filter: url("#shadow-8");
        }

        .option .body.interactive:has(~ .point:active) {
          filter: url("#shadow-8");
        }

        :host(.keyboard) .option .interactive:focus-within {
          filter: url("#shadow-8");
        }

        :host(.keyboard) .option .body.interactive:has(~ .point:focus-within) {
          filter: url("#shadow-8");
        }

        .gradient.sooner stop {
          stop-color: var(---color-sooner);
        }

        .gradient.later stop {
          stop-color: var(---color-later);
        }

        .stop-0,
        .stop-before {
          stop-opacity: 0;
        }

        .stop-after,
        .stop-100 {
          stop-opacity: 1;
        }

        .fill {
          fill: var(---color-element-enabled);
          fill-opacity: 0.5;
          stroke: none;
        }

        .interactive .fill {
          cursor: move;

          outline: none;
        }

        .sooner .fill {
          fill: var(---color-sooner);
        }

        .later .fill {
          fill: var(---color-later);
        }

        .trial.sooner .fill {
          fill: url("#sooner-gradient");
        }

        .trial.later .fill {
          fill: url("#later-gradient");
        }

        .bar {
          fill: none;
          stroke: var(---color-element-emphasis);
          stroke-width: 2;
        }

        .interactive .bar {
          cursor: ew-resize;

          outline: none;
        }

        .point .mark {
          fill: var(---color-element-emphasis);

          r: 6px;
        }

        .point .label {
          font-size: 0.75rem;

          dominant-baseline: middle;
          text-anchor: middle;

          fill: var(---color-text-inverse);
        }

        .point.interact {
          cursor: ns-resize;

          outline: none;
        }

        .curve {
          fill: none;
          stroke: var(---color-element-emphasis);
          stroke-width: 2;
        }

        .curve.interactive {
          cursor: nwse-resize;

          outline: none;
        }

        /* Make larger targets for touch users */
        .interactive .touch {
          stroke: #000000;
          stroke-opacity: 0;
        }

        @media (pointer: coarse) {
          .interactive .touch {
            stroke-linecap: round;
            stroke-width: 12;
          }
        }
      `,
    ];
  }

  render() { /* eslint-disable-line class-methods-use-this */
    return html``;
  }

  willUpdate() {
    this.alignState();
  }

  update(changedProperties) {
    super.update(changedProperties);

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
    const xScale = d3.scaleLinear()
      .domain([this.scale.time.min, this.scale.time.max])
      .range([0, width]);

    // Y Scale
    const yScale = d3.scaleLinear()
      .domain([this.scale.value.min, this.scale.value.max])
      .range([height, 0]);

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
    // Gradients for fill animations
    const svgDefs = svgEnter.append('defs');
    const soonerGradient = svgDefs.append('linearGradient')
      .classed('gradient sooner', true)
      .attr('id', 'sooner-gradient');
    soonerGradient.append('stop')
      .classed('stop-0', true)
      .attr('offset', '0');
    soonerGradient.append('stop')
      .classed('stop-before animation', true)
      .attr('offset', '1');
    soonerGradient.append('stop')
      .classed('stop-after animation', true)
      .attr('offset', '1');
    soonerGradient.append('stop')
      .classed('stop-100', true)
      .attr('offset', '1');
    const laterGradient = svgDefs.append('linearGradient')
      .classed('gradient later', true)
      .attr('id', 'later-gradient');
    laterGradient.append('stop')
      .classed('stop-0', true)
      .attr('offset', '0');
    laterGradient.append('stop')
      .classed('stop-before animation', true)
      .attr('offset', '1');
    laterGradient.append('stop')
      .classed('stop-after animation', true)
      .attr('offset', '1');
    laterGradient.append('stop')
      .classed('stop-100', true)
      .attr('offset', '1');
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
      .attr('id', 'clip-htd-curves')
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

    // Options
    // DATA-JOIN
    const optionUpdate = contentMerge.selectAll('.option')
      .data(
        this.options.filter((option) => { return ((option.a !== null) && (option.d !== null)); }),
        (datum) => { return datum.name; },
      );
    //  ENTER
    const optionEnter = optionUpdate.enter().append('g')
      .attr('class', (datum) => {
        const labelClass = datum.label === 's' ? 'sooner' : datum.label === 'l' ? 'later' : '';
        const trialClass = datum.trial ? 'trial' : '';
        return `option ${labelClass} ${trialClass}`;
      });
    // Body (Fill, Bar, Point)
    const bodyEnter = optionEnter.append('g')
      .classed('body', true);
    // Fill
    const fillEnter = bodyEnter.append('g')
      .classed('fill', true)
      .attr('clip-path', 'url(#clip-htd-curves)')
      .each((datum) => {
        if (datum.trial) {
          svgMerge
            .selectAll('.gradient .animation')
            .attr('offset', 1);
        }
      });
    fillEnter.append('path')
      .classed('region', true)
      .attr('d', (datum) => {
        const curve = d3.range(xScale(datum.d), xScale(0), -1).map((range) => {
          return {
            d: xScale.invert(range),
            v: HTDMath.adk2v(
              datum.a,
              datum.d - xScale.invert(range),
              this.k,
            ),
          };
        });
        return line([...curve, {d: 0, v: 0}, {d: datum.d, v: 0}]);
      });
    // Bar
    const barEnter = bodyEnter.append('g')
      .classed('bar', true);
    barEnter.append('line')
      .classed('line', true);
    barEnter.append('line')
      .classed('line touch', true);
    barEnter.selectAll('.line')
      .attr('x1', (datum) => { return xScale(datum.d); })
      .attr('x2', (datum) => { return xScale(datum.d); })
      .attr('y1', yScale(0))
      .attr('y2', (datum) => { return yScale(datum.a); })
      .attr('stroke-dasharray', (datum, index, nodes) => {
        if (datum.trial) {
          const length = nodes[index].getTotalLength();
          return `0,${length}`;
        }
        return 'none';
      });
    // Point
    const pointEnter = bodyEnter.append('g')
      .classed('point', true);
    pointEnter.append('circle')
      .classed('mark touch', true);
    // Curve
    const curveEnter = optionEnter.append('g')
      .classed('curve', true)
      .attr('clip-path', 'url(#clip-htd-curves)');
    curveEnter.append('path')
      .classed('path', true);
    curveEnter.append('path')
      .classed('path touch', true);
    curveEnter.selectAll('.path')
      .attr('d', (datum) => {
        const curve = d3.range(xScale(datum.d), xScale(0), -1).map((range) => {
          return {
            d: xScale.invert(range),
            v: HTDMath.adk2v(
              datum.a,
              datum.d - xScale.invert(range),
              this.k,
            ),
          };
        });
        return line(curve);
      })
      .attr('stroke-dasharray', (datum, index, nodes) => {
        if (datum.trial) {
          const length = nodes[index].getTotalLength();
          return `0,${length}`;
        }
        return 'none';
      });
    // Point (again)
    const topPointEnter = optionEnter.append('g')
      .classed('point top-point', true);
    topPointEnter.append('circle')
      .classed('mark touch', true);
    topPointEnter.append('text')
      .classed('label', true);
    optionEnter.selectAll('.point')
      .attr('transform', (datum) => {
        return `translate(${xScale(datum.d)}, ${yScale(datum.a)})`;
      })
      .attr('opacity', (datum) => {
        if (datum.trial) {
          return 0;
        }
        return 1;
      });

    //  MERGE
    const optionMerge = optionEnter.merge(optionUpdate);

    // Interactive options
    // Body (Fill, Bar, Point)
    const bodyMergeInteractive = optionMerge
      .filter((datum, index, nodes) => {
        return (this.interactive && !datum.trial && !d3.select(nodes[index]).select('.body').classed('interactive'));
      })
      .select('.body');
    bodyMergeInteractive.classed('interactive', true);
    // Fill
    bodyMergeInteractive.select('.fill')
      .attr('tabindex', 0)
      // Drag interaction
      .call(d3.drag()
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
          datum.d = (d < this.scale.time.min)
            ? this.scale.time.min
            : (d > this.scale.time.max)
              ? this.scale.time.max
              : this.scale.time.round(d);
          datum.a = (a < this.scale.value.min)
            ? this.scale.value.min
            : (a > this.scale.value.max)
              ? this.scale.value.max
              : this.scale.value.round(a);
          if (datum.name === 'default') {
            this.d = datum.d;
            this.a = datum.a;
          }
          this.alignState();
          this.requestUpdate();
          this.dispatchEvent(new CustomEvent('htd-curves-change', {
            detail: {
              name: datum.name,
              a: datum.a,
              d: datum.d,
              k: this.k,
              label: datum.label,
            },
            bubbles: true,
          }));
        })
        .on('end', (event) => {
          const element = event.currentTarget;
          d3.select(element).classed('dragging', false);
        }))
      // Keyboard interaction
      .on('keydown', (event, datum) => {
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
          let keyA = datum.a;
          let keyD = datum.d;
          switch (event.key) {
            case 'ArrowUp':
              keyA += event.shiftKey ? 1 : 5;
              break;
            case 'ArrowDown':
              keyA -= event.shiftKey ? 1 : 5;
              break;
            case 'ArrowRight':
              keyD += event.shiftKey ? 1 : 5;
              break;
            case 'ArrowLeft':
              keyD -= event.shiftKey ? 1 : 5;
              break;
            default:
              // no-op
          }
          keyD = (keyD < this.scale.time.min)
            ? this.scale.time.min
            : ((keyD > this.scale.time.max)
              ? this.scale.time.max
              : keyD);
          keyA = (keyA < this.scale.value.min)
            ? this.scale.value.min
            : ((keyA > this.scale.value.max)
              ? this.scale.value.max
              : keyA);
          if ((keyD !== datum.d) || (keyA !== datum.a)) {
            datum.d = keyD;
            datum.a = keyA;
            if (datum.name === 'default') {
              this.d = datum.d;
              this.a = datum.a;
            }
            this.alignState();
            this.requestUpdate();
            this.dispatchEvent(new CustomEvent('htd-curves-change', {
              detail: {
                name: datum.name,
                a: datum.a,
                d: datum.d,
                k: this.k,
                label: datum.label,
              },
              bubbles: true,
            }));
          }
          event.preventDefault();
        }
      });
    // Bar
    bodyMergeInteractive.select('.bar')
      // Drag interaction
      .call(d3.drag()
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
          datum.d = (d < this.scale.time.min)
            ? this.scale.time.min
            : (d > this.scale.time.max)
              ? this.scale.time.max
              : this.scale.time.round(d);
          if (datum.name === 'default') {
            this.d = datum.d;
          }
          this.alignState();
          this.requestUpdate();
          this.dispatchEvent(new CustomEvent('htd-curves-change', {
            detail: {
              name: datum.name,
              a: datum.a,
              d: datum.d,
              k: this.k,
              label: datum.label,
            },
            bubbles: true,
          }));
        })
        .on('end', (event) => {
          const element = event.currentTarget;
          d3.select(element).classed('dragging', false);
        }))
      // Keyboard interaction
      .on('keydown', (event, datum) => {
        if (['ArrowLeft', 'ArrowRight'].includes(event.key)) {
          let keyD = datum.d;
          switch (event.key) {
            case 'ArrowRight':
              keyD += event.shiftKey ? 1 : 5;
              break;
            case 'ArrowLeft':
              keyD -= event.shiftKey ? 1 : 5;
              break;
            default:
              // no-op
          }
          keyD = (keyD < this.scale.time.min)
            ? this.scale.time.min
            : ((keyD > this.scale.time.max)
              ? this.scale.time.max
              : keyD);
          if (keyD !== datum.d) {
            datum.d = keyD;
            if (datum.name === 'default') {
              this.d = datum.d;
            }
            this.alignState();
            this.requestUpdate();
            this.dispatchEvent(new CustomEvent('htd-curves-change', {
              detail: {
                name: datum.name,
                a: datum.a,
                d: datum.d,
                k: this.k,
                label: datum.label,
              },
              bubbles: true,
            }));
          }
          event.preventDefault();
        }
      });
    // Point
    optionMerge
      .filter((datum, index, nodes) => {
        return (this.interactive && !datum.trial && !d3.select(nodes[index]).select('.top-point').classed('interact'));
      })
      .select('.top-point')
      .classed('interact', true)
      // Drag interaction
      .call(d3.drag()
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
          const a = yScale.invert(event.y);
          datum.a = (a < this.scale.value.min)
            ? this.scale.value.min
            : (a > this.scale.value.max)
              ? this.scale.value.max
              : this.scale.value.round(a);
          if (datum.name === 'default') {
            this.a = datum.a;
          }
          this.alignState();
          this.requestUpdate();
          this.dispatchEvent(new CustomEvent('htd-curves-change', {
            detail: {
              name: datum.name,
              a: datum.a,
              d: datum.d,
              k: this.k,
              label: datum.label,
            },
            bubbles: true,
          }));
        })
        .on('end', (event) => {
          const element = event.currentTarget;
          d3.select(element).classed('dragging', false);
        }))
      // Keyboard interaction
      .on('keydown', (event, datum) => {
        if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
          let keyA = datum.a;
          switch (event.key) {
            case 'ArrowUp':
              keyA += event.shiftKey ? 1 : 5;
              break;
            case 'ArrowDown':
              keyA -= event.shiftKey ? 1 : 5;
              break;
            default:
              // no-op
          }
          keyA = (keyA < this.scale.value.min)
            ? this.scale.value.min
            : ((keyA > this.scale.value.max)
              ? this.scale.value.max
              : keyA);
          if (keyA !== datum.a) {
            datum.a = keyA;
            if (datum.name === 'default') {
              this.a = datum.a;
            }
            this.alignState();
            this.requestUpdate();
            this.dispatchEvent(new CustomEvent('htd-curves-change', {
              detail: {
                name: datum.name,
                a: datum.a,
                d: datum.d,
                k: this.k,
                label: datum.label,
              },
              bubbles: true,
            }));
          }
          event.preventDefault();
        }
      });
    // Curve
    optionMerge
      .filter((datum, index, nodes) => {
        return (this.interactive && !d3.select(nodes[index]).select('.curve').classed('interactive'));
      })
      .select('.curve')
      .classed('interactive', true)
      .attr('tabindex', 0)
      // Drag interaction
      .call(d3.drag()
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
          const d = (dragD < 0)
            ? 0
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
          this.k = (k < HTDMath.k.MIN)
            ? HTDMath.k.MIN
            : (k > HTDMath.k.MAX)
              ? HTDMath.k.MAX
              : k;
          this.alignState();
          this.requestUpdate();
          this.dispatchEvent(new CustomEvent('htd-curves-change', {
            detail: {
              name: datum.name,
              a: datum.a,
              d: datum.d,
              k: this.k,
              label: datum.label,
            },
            bubbles: true,
          }));
        })
        .on('end', (event) => {
          const element = event.currentTarget;
          d3.select(element).classed('dragging', false);
        }))
      // Keyboard interaction
      .on('keydown', (event, datum) => {
        if (['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(event.key)) {
          let {k} = this;
          switch (event.key) {
            case 'ArrowUp':
            case 'ArrowLeft':
              k *= event.shiftKey ? 0.95 : 0.85;
              break;
            case 'ArrowDown':
            case 'ArrowRight':
              k *= event.shiftKey ? (1 / 0.95) : (1 / 0.85);
              break;
            default:
              // no-op
          }
          k = (k < HTDMath.k.MIN)
            ? HTDMath.k.MIN
            : (k > HTDMath.k.MAX)
              ? HTDMath.k.MAX
              : k;
          if (k !== this.k) {
            this.k = k;
            this.alignState();
            this.requestUpdate();
            this.dispatchEvent(new CustomEvent('htd-curves-change', {
              detail: {
                name: datum.name,
                a: datum.a,
                d: datum.d,
                k: this.k,
                label: datum.label,
              },
              bubbles: true,
            }));
          }
          event.preventDefault();
        }
      });

    // Non-interactive options
    // Body (Fill, Bar, Point)
    const bodyMergeNoninteractive = optionMerge
      .filter((datum, index, nodes) => {
        return ((!this.interactive || datum.trial) && d3.select(nodes[index]).select('.body').classed('interactive'));
      });
    bodyMergeNoninteractive.classed('interactive', false);
    // Fill
    bodyMergeNoninteractive
      .select('.fill')
      .attr('tabindex', null)
      .on('drag', null)
      .on('keydown', null);
    // Bar
    bodyMergeNoninteractive
      .select('.bar')
      .on('drag', null)
      .on('keydown', null);
    // Point
    optionMerge
      .filter((datum, index, nodes) => {
        return ((!this.interactive || datum.trial) && d3.select(nodes[index]).select('.top-point').classed('interact'));
      })
      .select('.top-point')
      .classed('interact', false)
      .on('drag', null)
      .on('keydown', null);
    // Curve
    optionMerge
      .filter((datum, index, nodes) => {
        return (!this.interactive && d3.select(nodes[index]).select('.curve').classed('interactive'));
      })
      .select('.curve')
      .classed('interactive', false)
      .attr('tabindex', null)
      .on('drag', null)
      .on('keydown', null);

    // Trial Animation
    // Fill
    optionMerge
      .filter((datum) => {
        return (datum.new);
      })
      .each(() => {
        svgMerge
          .selectAll('.gradient .animation').transition()
          .duration(transitionDuration)
          .delay(transitionDuration + transitionDuration / 10)
          .ease(d3.easeLinear)
          .attrTween('offset', () => { return d3.interpolate(1, 0); });
      });
    // Bar
    optionMerge
      .filter((datum) => {
        return (datum.new);
      })
      .selectAll('.bar .line').transition()
      .duration(transitionDuration)
      .ease(d3.easeLinear)
      .attrTween('stroke-dasharray', (datum, index, nodes) => {
        const length = nodes[index].getTotalLength();
        return d3.interpolate(`0,${length}`, `${length},${length}`);
      });
    // Point
    optionMerge
      .filter((datum) => {
        return (datum.new);
      })
      .selectAll('.point').transition()
      .duration(transitionDuration / 10)
      .delay(transitionDuration)
      .ease(d3.easeLinear)
      .attrTween('opacity', () => { return d3.interpolate(0, 1); });
    // Curve
    optionMerge
      .filter((datum) => {
        return (datum.new);
      })
      .selectAll('.curve .path').transition()
      .duration(transitionDuration)
      .delay(transitionDuration + transitionDuration / 10)
      .ease(d3.easeLinear)
      .attrTween('stroke-dasharray', (datum, index, nodes) => {
        const length = nodes[index].getTotalLength();
        return d3.interpolate(`0,${length}`, `${length},${0}`);
      })
      .on('end', (datum) => {
        datum.new = false;
        this.dispatchEvent(new CustomEvent('discountable-response', {
          detail: {
            trial: this.trialCount,
            as: this.as,
            ds: this.ds,
            al: this.al,
            dl: this.dl,
            response: this.response,
          },
          bubbles: true,
        }));
      });

    // All options
    optionMerge.filter((datum) => { return datum.label === 's'; })
      .raise();
    optionMerge.filter((datum) => { return datum.label === 'l'; })
      .lower();
    // Fill
    optionUpdate.select('.fill .region').transition()
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
          const curve = d3.range(xScale(element.d), xScale(0), -1).map((range) => {
            return {
              d: xScale.invert(range),
              v: HTDMath.adk2v(
                element.a,
                element.d - xScale.invert(range),
                this.k,
              ),
            };
          });
          return line([...curve, {d: 0, v: 0}, {d: element.d, v: 0}]);
        };
      });
    // Bar
    optionUpdate.selectAll('.bar .line').transition()
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
      .attrTween('y2', (datum, index, elements) => {
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
    // Point
    optionUpdate.selectAll('.point').transition()
      .duration(this.drag
        ? 0
        : (this.firstUpdate
          ? (transitionDuration * 2)
          : transitionDuration))
      .ease(d3.easeCubicOut)
      .attrTween('transform', (datum, index, elements) => {
        const element = elements[index];
        const interpolateD = d3.interpolate(
          (element.d !== undefined) ? element.d : datum.d,
          datum.d,
        );
        const interpolateA = d3.interpolate(
          (element.a !== undefined) ? element.a : datum.a,
          datum.a,
        );
        return (time) => {
          element.d = interpolateD(time);
          element.a = interpolateA(time);
          return `translate(${xScale(element.d)}, ${yScale(element.a)})`;
        };
      });
    optionMerge.select('.point .label')
      .text((datum) => { return datum.label; });
    // Curve
    optionUpdate.selectAll('.curve .path').transition()
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
          const curve = d3.range(xScale(element.d), xScale(0), -1).map((range) => {
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
    optionUpdate.exit().remove();

    this.drag = false;
    this.firstUpdate = false;
  }
}

customElements.define('htd-curves', HTDCurves);
