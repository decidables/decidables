
import {html, css} from 'lit-element';
import * as d3 from 'd3';
import * as jStat from 'jstat';

import SDTElement from '../sdt-element';

/*
  SDTModel element
  <sdt-model>

  Attributes:
    d'; C;
    FAR; HR; zFAR; zHR;

    draggable: d'; C;
    highlight: H; M; CR; FA;

    Styles:
      ??
*/
export default class SDTModel extends SDTElement {
  static get properties() {
    return {
      color: {
        attribute: 'color',
        type: String,
        reflect: true,
      },
      distributions: {
        attribute: 'distributions',
        type: Boolean,
        reflect: true,
      },
      threshold: {
        attribute: 'threshold',
        type: Boolean,
        reflect: true,
      },
      sensitivity: {
        attribute: 'sensitivity',
        type: Boolean,
        reflect: true,
      },
      bias: {
        attribute: 'bias',
        type: Boolean,
        reflect: true,
      },
      histogram: {
        attribute: 'histogram',
        type: Boolean,
        reflect: true,
      },
      d: {
        attribute: 'd',
        type: Number,
        reflect: true,
      },
      c: {
        attribute: 'c',
        type: Number,
        reflect: true,
      },
      far: {
        attribute: false,
        type: Number,
        reflect: false,
      },
      hr: {
        attribute: false,
        type: Number,
        reflect: false,
      },
      binWidth: {
        attribute: false,
        type: Number,
        reflect: false,
      },
      trials: {
        attribute: false,
        type: Array,
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

    this.drag = false;

    this.colors = ['outcome', 'response', 'stimulus', 'none'];
    this.color = 'outcome';

    this.histogram = false;
    this.distributions = false;
    this.threshold = false;
    this.sensitivity = false;
    this.bias = false;

    this.d = 1;
    this.c = 0;

    this.signals = ['present', 'absent'];
    this.responses = ['present', 'absent'];

    this.binRange = [-3.0, 3.0];
    this.binWidth = 0.25;
    this.trials = [];
    this.h = 0;
    this.m = 0;
    this.fa = 0;
    this.cr = 0;

    this.width = NaN;
    this.height = NaN;
    this.rem = NaN;

    this.alignState();
  }

  reset() {
    this.trials = [];
    this.h = 0;
    this.m = 0;
    this.fa = 0;
    this.cr = 0;
  }

  trial(trialNumber, signal) {
    const trial = {};
    trial.trial = trialNumber;
    trial.signal = signal;
    trial.evidence = jStat.normal.sample(0, 1);

    this.alignTrial(trial);

    this.trials.push(trial);

    this.requestUpdate();
  }

  alignTrial(trial) {
    if (trial.signal === 'present') {
      trial.trueEvidence = trial.evidence + (this.d / 2);
      trial.response = (trial.trueEvidence > this.c) ? 'present' : 'absent';
      if (trial.response === 'present') {
        trial.outcome = 'h';
        this.h += 1;
      } else { // trial.response == 'absent'
        trial.outcome = 'm';
        this.m += 1;
      }
    } else { // trial.signal == 'absent'
      trial.trueEvidence = trial.evidence - (this.d / 2);
      trial.response = (trial.trueEvidence > this.c) ? 'present' : 'absent';
      if (trial.response === 'present') {
        trial.outcome = 'fa';
        this.fa += 1;
      } else { // trial.response == 'absent'
        trial.outcome = 'cr';
        this.cr += 1;
      }
    }
    return trial;
  }

  alignState() {
    this.far = SDTElement.dc2far(this.d, this.c);
    this.hr = SDTElement.dc2hr(this.d, this.c);

    this.h = 0;
    this.m = 0;
    this.fa = 0;
    this.cr = 0;
    for (let i = 0; i < this.trials.length; i += 1) {
      this.alignTrial(this.trials[i]);
    }
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

        .tick {
          font-size: 0.75rem;
        }

        .axis-x path,
        .axis-x line,
        .axis-y path,
        .axis-y line,
        .axis-y2 path,
        .axis-y2 line {
          stroke: var(---color-element-border);
        }

        .signal-noise.interactive,
        .threshold.interactive {
          cursor: ew-resize;

          filter: url("#shadow-2");
          outline: none;
        }

        .signal-noise.interactive:hover,
        .threshold.interactive:hover {
          filter: url("#shadow-4");

          /* HACK: This gets Safari to correctly apply the filter! */
          transform: translateX(0);
        }

        .signal-noise.interactive:active,
        .threshold.interactive:active {
          filter: url("#shadow-8");

          /* HACK: This gets Safari to correctly apply the filter! */
          transform: translateY(0);
        }

        :host(.keyboard) .signal-noise.interactive:focus,
        :host(.keyboard) .threshold.interactive:focus {
          filter: url("#shadow-8");

          /* HACK: This gets Safari to correctly apply the filter! */
          transform: translateZ(0);
        }

        .underlayer .background {
          fill: var(---color-element-background);
          stroke: none;
        }

        .overlayer .background {
          fill: none;
          stroke: var(---color-element-border);
          stroke-width: 1;
          shape-rendering: crispEdges;
        }

        .title-x,
        .title-y,
        .title-y2 {
          font-weight: 600;

          fill: currentColor;
        }

        .curve-cr {
          fill: var(---color-cr);
          fill-opacity: 0.5;
          stroke: none;
        }

        .curve-fa {
          fill: var(---color-fa);
          fill-opacity: 0.5;
          stroke: none;
        }

        .curve-m {
          fill: var(---color-m);
          fill-opacity: 0.5;
          stroke: none;
        }

        .curve-h {
          fill: var(---color-h);
          fill-opacity: 0.5;
          stroke: none;
        }

        :host([color="stimulus"]) .curve-cr,
        :host([color="stimulus"]) .curve-fa {
          fill: var(---color-far);
        }

        :host([color="stimulus"]) .curve-m,
        :host([color="stimulus"]) .curve-h {
          fill: var(---color-hr);
        }

        :host([color="response"]) .curve-cr,
        :host([color="response"]) .curve-m {
          fill: var(---color-absent);
        }

        :host([color="response"]) .curve-fa,
        :host([color="response"]) .curve-h {
          fill: var(---color-present);
        }

        :host([color="none"]) .curve-cr,
        :host([color="none"]) .curve-fa,
        :host([color="none"]) .curve-m,
        :host([color="none"]) .curve-h {
          fill: var(---color-element-enabled);
        }

        .curve-noise,
        .curve-signal {
          fill: none;
          stroke: var(---color-element-emphasis);
          stroke-width: 2;
        }

        .measure-d .line,
        .measure-d .cap-left,
        .measure-d .cap-right {
          stroke: var(---color-d);
          stroke-width: 2;
          shape-rendering: crispEdges;
        }

        .measure-d .label {
          font-size: 0.75rem;

          alignment-baseline: middle;
          text-anchor: start;
          fill: currentColor;
        }

        .threshold .line {
          stroke: var(---color-element-emphasis);
          stroke-width: 2;
        }

        .threshold .handle {
          fill: var(---color-element-emphasis);

          /* r: 6; HACK: Firefox does not support CSS SVG Geometry Properties */
        }

        .measure-c .line,
        .measure-c .cap-zero {
          stroke: var(---color-c);
          stroke-width: 2;
          shape-rendering: crispEdges;
        }

        .measure-c .label {
          font-size: 0.75rem;

          alignment-baseline: middle;
          fill: currentColor;
        }
      `,
    ];
  }

  render() { // eslint-disable-line class-methods-use-this
    return html`
      ${SDTElement.svgFilters}
    `;
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('sdt-model-change', {
      detail: {
        d: this.d,
        c: this.c,
        far: this.far,
        hr: this.hr,
        h: this.h,
        m: this.m,
        fa: this.fa,
        cr: this.cr,
      },
      bubbles: true,
    }));
  }

  getDimensions() {
    this.width = parseFloat(this.getComputedStyleValue('width'), 10);
    this.height = parseFloat(this.getComputedStyleValue('height'), 10);
    this.rem = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('font-size'), 10);
    console.log(`sdt-model: width = ${this.width}, height = ${this.height}, rem = ${this.rem}`);
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
      right: ((this.histogram && this.distributions) ? 3 : 0.75) * this.rem,
    };
    const height = elementHeight - (margin.top + margin.bottom);
    const width = elementWidth - (margin.left + margin.right);

    // X Scale
    const xScale = d3.scaleLinear()
      .domain([-3, 3]) // Evidence
      .range([0, width]);

    // Y Scale
    const yScale = d3.scaleLinear()
      .domain([0.5, 0]) // Probability
      .range([0, height]);

    // 2nd Y Scale
    const strokeWidth = 3;
    const binWidth = xScale(this.binWidth) - xScale(0);
    const y2Scale = d3.scaleLinear()
      .domain([height / binWidth, 0]) // Number of Stimuli
      .range([0, height]);

    // Threshold Drag behavior
    const dragThreshold = d3.drag()
      .subject((/* datum */) => {
        return {x: xScale(this.c), y: 0};
      })
      .on('start', (datum, index, elements) => {
        const element = elements[index];
        d3.select(element).classed('dragging', true);
      })
      .on('drag', (/* datum */) => {
        this.drag = true;
        const c = xScale.invert(d3.event.x);
        // Clamp C to stay visible
        this.c = (c < xScale.domain()[0])
          ? xScale.domain()[0]
          : (c > xScale.domain()[1])
            ? xScale.domain()[1]
            : c;
        this.alignState();
        this.sendEvent();
      })
      .on('end', (datum, index, elements) => {
        const element = elements[index];
        d3.select(element).classed('dragging', false);
      });

    // Noise Curve Drag behavior
    const dragNoise = d3.drag()
      .subject((/* datum */) => {
        return {x: xScale(-this.d / 2), y: 0};
      })
      .on('start', (datum, index, elements) => {
        const element = elements[index];
        d3.select(element).classed('dragging', true);
      })
      .on('drag', (/* datum */) => {
        this.drag = true;
        const dN = xScale.invert(d3.event.x);
        // Clamp Noise Curve to stay visible
        this.d = (dN < xScale.domain()[0])
          ? (-xScale.domain()[0] * 2)
          : (dN > xScale.domain()[1])
            ? (-xScale.domain()[1] * 2)
            : (-dN * 2);
        this.alignState();
        this.sendEvent();
      })
      .on('end', (datum, index, elements) => {
        const element = elements[index];
        d3.select(element).classed('dragging', false);
      });

    // Signal+Noise Curve Drag behavior
    const dragSignal = d3.drag()
      .subject((/* datum */) => {
        return {x: xScale(this.d / 2), y: 0};
      })
      .on('start', (datum, index, elements) => {
        const element = elements[index];
        d3.select(element).classed('dragging', true);
      })
      .on('drag', (/* datum */) => {
        this.drag = true;
        const dS = xScale.invert(d3.event.x);
        // Clamp Signal Curve to stay visible
        this.d = (dS < xScale.domain()[0])
          ? (xScale.domain()[0] * 2)
          : (dS > xScale.domain()[1])
            ? (xScale.domain()[1] * 2)
            : (dS * 2);
        this.alignState();
        this.sendEvent();
      })
      .on('end', (datum, index, elements) => {
        const element = elements[index];
        d3.select(element).classed('dragging', false);
      });

    // Line for Evidence/Probability Space
    const line = d3.line()
      .x((datum) => { return xScale(datum.e); })
      .y((datum) => { return yScale(datum.p); });

    // Svg
    //  DATA-JOIN
    const svgUpdate = d3.select(this.renderRoot).selectAll('.main')
      .data([{
        width: this.width,
        height: this.height,
        rem: this.rem,
      }]);
    // ENTER
    const svgEnter = svgUpdate.enter().append('svg')
      .classed('main', true);
    // MERGE
    const svgMerge = svgEnter.merge(svgUpdate)
      .attr('viewBox', `0 0 ${elementWidth} ${elementHeight}`);

    // Plot
    //  ENTER
    const plotEnter = svgEnter.append('g')
      .classed('plot', true);
    //  MERGE
    const plotMerge = svgMerge.select('.plot')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

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
    const axisXMerge = underlayerMerge.select('.axis-x')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale))
      .attr('font-size', null)
      .attr('font-family', null);
    axisXMerge.selectAll('line, path')
      .attr('stroke', null);

    // X Axis Title
    //  ENTER
    underlayerEnter.append('text')
      .classed('title-x', true)
      .attr('text-anchor', 'middle')
      .text('Evidence');
    underlayerMerge.select('.title-x')
      .attr('transform', `translate(${width / 2}, ${height + (2.25 * this.rem)})`);

    // Y Axis
    //  DATA-JOIN
    const axisYUpdate = underlayerMerge.selectAll('.axis-y')
      .data(this.distributions ? [{}] : []);
    //  ENTER
    const axisYEnter = axisYUpdate.enter().append('g')
      .classed('axis-y', true);
    //  MERGE
    const axisYMerge = axisYEnter.merge(axisYUpdate)
      .call(d3.axisLeft(yScale).ticks(5))
      .attr('font-size', null)
      .attr('font-family', null);
    axisYMerge.selectAll('line, path')
      .attr('stroke', null);
    //  EXIT
    axisYUpdate.exit().remove();

    // Y Axis Title
    //  DATA-JOIN
    const titleYUpdate = underlayerMerge.selectAll('.title-y')
      .data(this.distributions ? [{}] : []);
    //  ENTER
    const titleYEnter = titleYUpdate.enter().append('text')
      .classed('title-y', true)
      .attr('text-anchor', 'middle')
      .text('Probability');
    //  MERGE
    titleYEnter.merge(titleYUpdate)
      .attr('transform', `translate(${-2 * this.rem}, ${height / 2})rotate(-90)`);
    //  EXIT
    titleYUpdate.exit().remove();

    // 2nd Y Axis
    //  DATA-JOIN
    const axisY2Update = underlayerMerge.selectAll('.axis-y2')
      .data(this.histogram ? [{}] : []);
    //  ENTER
    const axisY2Enter = axisY2Update.enter().append('g')
      .classed('axis-y2', true);
    //  MERGE
    const axisY2Merge = axisY2Enter.merge(axisY2Update)
      .attr('transform', this.distributions ? `translate(${width}, 0)` : 'none')
      .call(this.distributions ? d3.axisRight(y2Scale).ticks(10) : d3.axisLeft(y2Scale).ticks(10))
      .attr('font-size', null)
      .attr('font-family', null);
    axisY2Merge.selectAll('line, path')
      .attr('stroke', null);
    //  EXIT
    axisY2Update.exit().remove();

    // 2nd Y Axis Title
    //  DATA-JOIN
    const titleY2Update = underlayerMerge.selectAll('.title-y2')
      .data(this.histogram ? [{}] : []);
    //  ENTER
    const titleY2Enter = titleY2Update.enter().append('text')
      .classed('title-y2', true)
      .attr('text-anchor', 'middle')
      .text('Count');
    //  MERGE
    titleY2Enter.merge(titleY2Update)
      .attr('transform', this.distributions
        ? `translate(${width + (1.5 * this.rem)}, ${height / 2})rotate(90)`
        : `translate(${-1.5 * this.rem}, ${height / 2})rotate(-90)`);
    //  EXIT
    titleY2Update.exit().remove();

    // Plot Content
    plotEnter.append('g')
      .classed('content', true);
    //  MERGE
    const contentMerge = plotMerge.select('.content');

    // Noise & Signal + Noise Distributions
    //  DATA-JOIN
    const signalNoiseUpdate = contentMerge.selectAll('.signal-noise')
      .data(this.distributions ? [{}] : []);
    //  ENTER
    const signalNoiseEnter = signalNoiseUpdate.enter().append('g')
      .classed('signal-noise', true);
    //  MERGE
    const signalNoiseMerge = signalNoiseEnter.merge(signalNoiseUpdate)
      .attr('tabindex', this.interactive ? 0 : null)
      .classed('interactive', this.interactive)
      .on('keydown', this.interactive
        ? (/* datum */) => {
          if (['ArrowRight', 'ArrowLeft'].includes(d3.event.key)) {
            let d = this.d; // eslint-disable-line prefer-destructuring
            switch (d3.event.key) {
              case 'ArrowRight':
                d += d3.event.shiftKey ? 0.01 : 0.1;
                break;
              case 'ArrowLeft':
                d -= d3.event.shiftKey ? 0.01 : 0.1;
                break;
              default:
            }
            // Clamp C to visible extent
            d = (d < xScale.domain()[0])
              ? xScale.domain()[0]
              : (d > xScale.domain()[1])
                ? xScale.domain()[1]
                : d;
            if (d !== this.d) {
              this.d = d;
              this.alignState();
              this.sendEvent();
            }
            d3.event.preventDefault();
          }
        }
        : null);
    //  EXIT
    signalNoiseUpdate.exit().remove();

    // Noise Distribution
    //  ENTER
    const noiseEnter = signalNoiseEnter.append('g')
      .classed('noise', true);
    //  MERGE
    const noiseMerge = signalNoiseMerge.selectAll('.noise');
    if (this.interactive) {
      noiseMerge.call(dragNoise);
    } else {
      noiseMerge.on('.drag', null);
    }

    // CR Curve
    //  ENTER
    noiseEnter.append('path')
      .classed('curve-cr', true);
    //  MERGE
    noiseMerge.select('.curve-cr').transition()
      .duration(this.drag ? 0 : 500)
      .ease(d3.easeCubicOut)
      .attrTween('d', (datum, index, elements) => {
        const element = elements[index];
        const interpolateD = d3.interpolate(
          (element.d !== undefined) ? element.d : this.d,
          this.d,
        );
        const interpolateC = d3.interpolate(
          (element.c !== undefined) ? element.c : this.c,
          this.c,
        );
        return (time) => {
          element.d = interpolateD(time);
          element.c = interpolateC(time);
          const correctRejections = d3.range(
            xScale.domain()[0],
            element.c,
            0.05,
          ).map((e) => {
            return {
              e: e,
              p: jStat.normal.pdf(e, -element.d / 2, 1),
            };
          });
          correctRejections.push({
            e: element.c,
            p: jStat.normal.pdf(element.c, -element.d / 2, 1),
          });
          correctRejections.push({
            e: element.c,
            p: 0,
          });
          correctRejections.push({
            e: xScale.domain()[0],
            p: 0,
          });
          return line(correctRejections);
        };
      });

    // FA Curve
    //  ENTER
    noiseEnter.append('path')
      .classed('curve-fa', true);
    //  MERGE
    noiseMerge.select('.curve-fa').transition()
      .duration(this.drag ? 0 : 500)
      .ease(d3.easeCubicOut)
      .attrTween('d', (datum, index, elements) => {
        const element = elements[index];
        const interpolateD = d3.interpolate(
          (element.d !== undefined) ? element.d : this.d,
          this.d,
        );
        const interpolateC = d3.interpolate(
          (element.c !== undefined) ? element.c : this.c,
          this.c,
        );
        return (time) => {
          element.d = interpolateD(time);
          element.c = interpolateC(time);
          const falseAlarms = d3.range(
            element.c,
            xScale.domain()[1],
            0.05,
          ).map((e) => {
            return {
              e: e,
              p: jStat.normal.pdf(e, -element.d / 2, 1),
            };
          });
          falseAlarms.push({
            e: xScale.domain()[1],
            p: jStat.normal.pdf(xScale.domain()[1], -element.d / 2, 1),
          });
          falseAlarms.push({
            e: xScale.domain()[1],
            p: 0,
          });
          falseAlarms.push({
            e: element.c,
            p: 0,
          });
          return line(falseAlarms);
        };
      });

    // Noise Curve
    //  ENTER
    noiseEnter.append('path')
      .classed('curve-noise', true);
    //  MERGE
    noiseMerge.select('.curve-noise').transition()
      .duration(this.drag ? 0 : 500)
      .ease(d3.easeCubicOut)
      .attrTween('d', (datum, index, elements) => {
        const element = elements[index];
        const interpolateD = d3.interpolate(
          (element.d !== undefined) ? element.d : this.d,
          this.d,
        );
        return (time) => {
          element.d = interpolateD(time);
          const noise = d3.range(
            xScale.domain()[0],
            xScale.domain()[1],
            0.05,
          ).map((e) => {
            return {
              e: e,
              p: jStat.normal.pdf(e, -element.d / 2, 1),
            };
          });
          noise.push({
            e: xScale.domain()[1],
            p: jStat.normal.pdf(xScale.domain()[1], -element.d / 2, 1),
          });
          return line(noise);
        };
      });

    // Signal + Noise Distribution
    //  ENTER
    const signalEnter = signalNoiseEnter.append('g')
      .classed('signal', true);
    //  MERGE
    const signalMerge = signalNoiseMerge.selectAll('.signal');
    if (this.interactive) {
      signalMerge.call(dragSignal);
    } else {
      signalMerge.on('.drag', null);
    }

    // M Curve
    //  ENTER
    signalEnter.append('path')
      .classed('curve-m', true);
    //  MERGE
    signalMerge.select('.curve-m').transition()
      .duration(this.drag ? 0 : 500)
      .ease(d3.easeCubicOut)
      .attrTween('d', (datum, index, elements) => {
        const element = elements[index];
        const interpolateD = d3.interpolate(
          (element.d !== undefined) ? element.d : this.d,
          this.d,
        );
        const interpolateC = d3.interpolate(
          (element.c !== undefined) ? element.c : this.c,
          this.c,
        );
        return (time) => {
          element.d = interpolateD(time);
          element.c = interpolateC(time);
          const misses = d3.range(
            xScale.domain()[0],
            element.c,
            0.05,
          ).map((e) => {
            return {
              e: e,
              p: jStat.normal.pdf(e, element.d / 2, 1),
            };
          });
          misses.push({
            e: element.c,
            p: jStat.normal.pdf(element.c, element.d / 2, 1),
          });
          misses.push({
            e: element.c,
            p: 0,
          });
          misses.push({
            e: xScale.domain()[0],
            p: 0,
          });
          return line(misses);
        };
      });

    // H Curve
    //  ENTER
    signalEnter.append('path')
      .classed('curve-h', true);
    //  MERGE
    signalMerge.select('.curve-h').transition()
      .duration(this.drag ? 0 : 500)
      .ease(d3.easeCubicOut)
      .attrTween('d', (datum, index, elements) => {
        const element = elements[index];
        const interpolateD = d3.interpolate(
          (element.d !== undefined) ? element.d : this.d,
          this.d,
        );
        const interpolateC = d3.interpolate(
          (element.c !== undefined) ? element.c : this.c,
          this.c,
        );
        return (time) => {
          element.d = interpolateD(time);
          element.c = interpolateC(time);
          const hits = d3.range(
            element.c,
            xScale.domain()[1],
            0.05,
          ).map((e) => {
            return {
              e: e,
              p: jStat.normal.pdf(e, element.d / 2, 1),
            };
          });
          hits.push({
            e: xScale.domain()[1],
            p: jStat.normal.pdf(xScale.domain()[1], element.d / 2, 1),
          });
          hits.push({
            e: xScale.domain()[1],
            p: 0,
          });
          hits.push({
            e: element.c,
            p: 0,
          });
          return line(hits);
        };
      });

    // Signal Curve
    //  ENTER
    signalEnter.append('path')
      .classed('curve-signal', true);
    //  MERGE
    signalMerge.select('.curve-signal').transition()
      .duration(this.drag ? 0 : 500)
      .ease(d3.easeCubicOut)
      .attrTween('d', (datum, index, elements) => {
        const element = elements[index];
        const interpolateD = d3.interpolate(
          (element.d !== undefined) ? element.d : this.d,
          this.d,
        );
        return (time) => {
          element.d = interpolateD(time);
          const signal = d3.range(
            xScale.domain()[0],
            xScale.domain()[1],
            0.05,
          ).map((e) => {
            return {
              e: e,
              p: jStat.normal.pdf(e, element.d / 2, 1),
            };
          });
          signal.push({
            e: xScale.domain()[1],
            p: jStat.normal.pdf(xScale.domain()[1], element.d / 2, 1),
          });
          return line(signal);
        };
      });

    // d' Measure
    //  DATA-JOIN
    const dUpdate = contentMerge.selectAll('.measure-d')
      .data(this.sensitivity ? [{}] : []);
    //  ENTER
    const dEnter = dUpdate.enter().append('g')
      .classed('measure-d', true);
    dEnter.append('line')
      .classed('line', true);
    dEnter.append('line')
      .classed('cap-left', true);
    dEnter.append('line')
      .classed('cap-right', true);
    const dLabel = dEnter.append('text')
      .classed('label', true);
    dLabel.append('tspan')
      .classed('d math-var', true)
      .text('d\u2032');
    dLabel.append('tspan')
      .classed('equals', true)
      .text(' = ');
    dLabel.append('tspan')
      .classed('value', true);
    //  MERGE
    const dMerge = dEnter.merge(dUpdate);
    dMerge.select('.line').transition()
      .duration(this.drag ? 0 : 500)
      .ease(d3.easeCubicOut)
      .attr('x1', xScale(-this.d / 2))
      .attr('y1', yScale(0.43))
      .attr('x2', xScale(this.d / 2))
      .attr('y2', yScale(0.43));
    dMerge.select('.cap-left').transition()
      .duration(this.drag ? 0 : 500)
      .ease(d3.easeCubicOut)
      .attr('x1', xScale(-this.d / 2))
      .attr('y1', yScale(0.43) + 5)
      .attr('x2', xScale(-this.d / 2))
      .attr('y2', yScale(0.43) - 5);
    dMerge.select('.cap-right').transition()
      .duration(this.drag ? 0 : 500)
      .ease(d3.easeCubicOut)
      .attr('x1', xScale(this.d / 2))
      .attr('y1', yScale(0.43) + 5)
      .attr('x2', xScale(this.d / 2))
      .attr('y2', yScale(0.43) - 5);
    const dLabelTransition = dMerge.select('.label').transition()
      .duration(this.drag ? 0 : 500)
      .ease(d3.easeCubicOut)
      .attr('x', xScale(Math.abs(this.d) / 2) + 5)
      .attr('y', yScale(0.43) + 3);
    dLabelTransition.select('.value')
      .tween('text', (datum, index, elements) => {
        const element = elements[index];
        const interpolateD = d3.interpolate(
          (element.d !== undefined) ? element.d : this.d,
          this.d,
        );
        return (time) => {
          element.d = interpolateD(time);
          d3.select(element).text(+(element.d).toFixed(3));
        };
      });
    //  EXIT
    dUpdate.exit().remove();

    // c Measure
    //  DATA-JOIN
    const cUpdate = contentMerge.selectAll('.measure-c')
      .data(this.bias ? [{}] : []);
    //  ENTER
    const cEnter = cUpdate.enter().append('g')
      .classed('measure-c', true);
    cEnter.append('line')
      .classed('line', true);
    cEnter.append('line')
      .classed('cap-zero', true);
    const cLabel = cEnter.append('text')
      .classed('label', true);
    cLabel.append('tspan')
      .classed('c math-var', true)
      .text('c');
    cLabel.append('tspan')
      .classed('equals', true)
      .text(' = ');
    cLabel.append('tspan')
      .classed('value', true);
    //  MERGE
    const cMerge = cEnter.merge(cUpdate);
    cMerge.select('.line').transition()
      .duration(this.drag ? 0 : 500)
      .ease(d3.easeCubicOut)
      .attr('x1', xScale(this.c))
      .attr('y1', yScale(0.47))
      .attr('x2', xScale(0))
      .attr('y2', yScale(0.47));
    cMerge.select('.cap-zero').transition()
      .duration(this.drag ? 0 : 500)
      .ease(d3.easeCubicOut)
      .attr('x1', xScale(0))
      .attr('y1', yScale(0.47) + 5)
      .attr('x2', xScale(0))
      .attr('y2', yScale(0.47) - 5);
    const cLabelTransition = cMerge.select('.label').transition()
      .duration(this.drag ? 0 : 500)
      .ease(d3.easeCubicOut)
      .attr('x', xScale(0) + ((this.c < 0) ? 5 : -5))
      .attr('y', yScale(0.47) + 3)
      .attr('text-anchor', (this.c < 0) ? 'start' : 'end');
    cLabelTransition.select('.value')
      .tween('text', (datum, index, elements) => {
        const element = elements[index];
        const interpolateC = d3.interpolate(
          (element.c !== undefined) ? element.c : this.c,
          this.c,
        );
        return (time) => {
          element.c = interpolateC(time);
          d3.select(element).text(+(element.c).toFixed(3));
        };
      });
    //  EXIT
    cUpdate.exit().remove();

    // Threshold Line
    //  DATA-JOIN
    const thresholdUpdate = contentMerge.selectAll('.threshold')
      .data(this.threshold ? [{}] : []);
    //  ENTER
    const thresholdEnter = thresholdUpdate.enter().append('g')
      .classed('threshold', true);
    thresholdEnter.append('line')
      .classed('line', true);
    thresholdEnter.append('circle')
      .classed('handle', true)
      .attr('r', 6); /* HACK: Firefox does not support CSS SVG Geometry Properties */
    //  MERGE
    const thresholdMerge = thresholdEnter.merge(thresholdUpdate)
      .attr('tabindex', this.interactive ? 0 : null)
      .classed('interactive', this.interactive);
    if (this.interactive) {
      thresholdMerge
        .call(dragThreshold)
        .on('keydown', (/* datum */) => {
          if (['ArrowRight', 'ArrowLeft'].includes(d3.event.key)) {
            let c = this.c; // eslint-disable-line prefer-destructuring
            switch (d3.event.key) {
              case 'ArrowRight':
                c += d3.event.shiftKey ? 0.01 : 0.1;
                break;
              case 'ArrowLeft':
                c -= d3.event.shiftKey ? 0.01 : 0.1;
                break;
              default:
            }
            // Clamp C to visible extent
            c = (c < xScale.domain()[0])
              ? xScale.domain()[0]
              : (c > xScale.domain()[1])
                ? xScale.domain()[1]
                : c;
            if (c !== this.c) {
              this.c = c;
              this.alignState();
              this.sendEvent();
            }
            d3.event.preventDefault();
          }
        });
    } else {
      thresholdMerge
        .on('drag', null)
        .on('keydown', null);
    }
    thresholdMerge.select('.line').transition()
      .duration(this.drag ? 0 : 500)
      .ease(d3.easeCubicOut)
      .attr('x1', xScale(this.c))
      .attr('y1', yScale(0))
      .attr('x2', xScale(this.c))
      .attr('y2', yScale(0.54));
    thresholdMerge.select('.handle').transition()
      .duration(this.drag ? 0 : 500)
      .ease(d3.easeCubicOut)
      .attr('cx', xScale(this.c))
      .attr('cy', yScale(0.54));
    //  EXIT
    thresholdUpdate.exit().remove();

    // Histogram
    //  DATA-JOIN
    const histogramUpdate = contentMerge.selectAll('.histogram')
      .data(this.histogram ? [{}] : []);
    //  ENTER
    const histogramEnter = histogramUpdate.enter().append('g')
      .classed('histogram', true);
    //  MERGE
    const histogramMerge = histogramEnter.merge(histogramUpdate);
    //  EXIT
    histogramUpdate.exit().remove();

    // Trials
    if (this.histogram) {
      const histogram = d3.histogram()
        .value((datum) => { return datum.trueEvidence; })
        .domain(xScale.domain())
        .thresholds(d3.range(this.binRange[0], this.binRange[1], this.binWidth));
      const hist = histogram(this.trials);
      let binCountLeft = -1;
      let binCountRight = -1;
      for (let i = 0; i < hist.length; i += 1) {
        for (let j = 0; j < hist[i].length; j += 1) {
          hist[i][j].binValue = hist[i].x0;
          hist[i][j].binCount = j;
          if (i === 0) binCountLeft = j;
          if (i === hist.length - 1) binCountRight = j;
        }
      }
      // Put out-of-range values in extreme left/right bins
      for (let i = 0; i < this.trials.length; i += 1) {
        if (this.trials[i].trueEvidence < this.binRange[0]) {
          binCountLeft += 1;
          this.trials[i].binCount = binCountLeft;
          this.trials[i].binValue = hist[0].x0;
        }
        if (this.trials[i].trueEvidence > this.binRange[1]) {
          binCountRight += 1;
          this.trials[i].binCount = binCountRight;
          this.trials[i].binValue = hist[hist.length - 1].x0;
        }
      }
      //  DATA-JOIN
      const trialUpdate = histogramMerge.selectAll('.trial')
        .data(this.trials, (datum) => { return datum.trial; });
      //  ENTER
      const trialEnter = trialUpdate.enter().append('rect')
        .attr('stroke-width', strokeWidth)
        .attr('stroke', this.getComputedStyleValue('---color-acc'))
        .attr('fill', this.getComputedStyleValue('---color-acc-light'));
      trialEnter.transition()
        .duration(500)
        .ease(d3.easeLinear)
        .attrTween('stroke', (datum, index, elements) => {
          const element = elements[index];
          const interpolator = d3.interpolateRgb(
            element.getAttribute('stroke'),
            (this.color === 'stimulus')
              ? (datum.signal === 'present')
                ? this.getComputedStyleValue('---color-hr')
                : this.getComputedStyleValue('---color-far')
              : (this.color === 'response')
                ? this.getComputedStyleValue(`---color-${datum.response}`)
                : (this.color === 'outcome')
                  ? this.getComputedStyleValue(`---color-${datum.outcome}`)
                  : this.getComputedStyleValue('---color-acc'),
          );
          return (time) => { return interpolator(d3.easeCubicIn(time)); };
        })
        .attrTween('fill', (datum, index, elements) => {
          const element = elements[index];
          const interpolator = d3.interpolateRgb(
            element.getAttribute('fill'),
            (this.color === 'stimulus')
              ? (datum.signal === 'present')
                ? this.getComputedStyleValue('---color-hr-light')
                : this.getComputedStyleValue('---color-far-light')
              : (this.color === 'response')
                ? this.getComputedStyleValue(`---color-${datum.response}-light`)
                : (this.color === 'outcome')
                  ? this.getComputedStyleValue(`---color-${datum.outcome}-light`)
                  : this.getComputedStyleValue('---color-acc-light'),
          );
          return (time) => { return interpolator(d3.easeCubicIn(time)); };
        })
        .attrTween('x', (datum, index, elements) => {
          const element = elements[index];
          const interpolator = d3.interpolate(
            element.getAttribute('x'),
            xScale(datum.binValue) + (strokeWidth / 2),
          );
          return (time) => { return interpolator(d3.easeCubicOut(time)); };
        })
        .attrTween('y', (datum, index, elements) => {
          const element = elements[index];
          const interpolator = d3.interpolate(
            element.getAttribute('y'),
            yScale(0) + (strokeWidth / 2) - ((datum.binCount + 1) * binWidth),
          );
          return (time) => { return interpolator(d3.easeCubicIn(time)); };
        })
        .on('end', (datum) => {
          this.dispatchEvent(new CustomEvent('sdt-response', {
            detail: {
              stimulus: datum.signal,
              response: datum.response,
              outcome: datum.outcome,
              h: this.h,
              m: this.m,
              fa: this.fa,
              cr: this.cr,
              nr: 0,
            },
            bubbles: true,
          }));
        });
      //  UPDATE
      trialUpdate.transition()
        .duration(500)
        .ease(d3.easeCubicOut)
        .attr('x', (datum) => {
          return xScale(datum.binValue) + (strokeWidth / 2);
        })
        .attr('y', (datum) => {
          return yScale(0) + (strokeWidth / 2) - ((datum.binCount + 1) * binWidth);
        })
        .attr('stroke', (datum) => {
          return (this.color === 'stimulus')
            ? (datum.signal === 'present')
              ? this.getComputedStyleValue('---color-hr')
              : this.getComputedStyleValue('---color-far')
            : (this.color === 'response')
              ? this.getComputedStyleValue(`---color-${datum.response}`)
              : (this.color === 'outcome')
                ? this.getComputedStyleValue(`---color-${datum.outcome}`)
                : this.getComputedStyleValue('---color-acc');
        })
        .attr('fill', (datum) => {
          return (this.color === 'stimulus')
            ? (datum.signal === 'present')
              ? this.getComputedStyleValue('---color-hr-light')
              : this.getComputedStyleValue('---color-far-light')
            : (this.color === 'response')
              ? this.getComputedStyleValue(`---color-${datum.response}-light`)
              : (this.color === 'outcome')
                ? this.getComputedStyleValue(`---color-${datum.outcome}-light`)
                : this.getComputedStyleValue('---color-acc-light');
        });
      //  MERGE
      trialEnter.merge(trialUpdate)
        .attr('class', (datum) => { return `trial ${datum.outcome}`; })
        .attr('width', binWidth - strokeWidth)
        .attr('height', binWidth - strokeWidth);
      //  EXIT
      trialUpdate.exit().transition()
        .duration(500)
        .ease(d3.easeLinear)
        .attrTween('stroke', (datum, index, elements) => {
          const element = elements[index];
          const interpolator = d3.interpolateRgb(
            element.getAttribute('stroke'),
            this.getComputedStyleValue('---color-acc'),
          );
          return (time) => { return interpolator(d3.easeCubicIn(time)); };
        })
        .attrTween('fill', (datum, index, elements) => {
          const element = elements[index];
          const interpolator = d3.interpolateRgb(
            element.getAttribute('fill'),
            this.getComputedStyleValue('---color-acc-light'),
          );
          return (time) => { return interpolator(d3.easeCubicIn(time)); };
        })
        .attrTween('x', (datum, index, elements) => {
          const element = elements[index];
          const interpolator = d3.interpolate(element.getAttribute('x'), 0);
          return (time) => { return interpolator(d3.easeCubicIn(time)); };
        })
        .attrTween('y', (datum, index, elements) => {
          const element = elements[index];
          const interpolator = d3.interpolate(element.getAttribute('y'), 0);
          return (time) => { return interpolator(d3.easeCubicOut(time)); };
        })
        .remove();
    }

    // Overlayer
    //  ENTER
    const overlayerEnter = plotEnter.append('g')
      .classed('overlayer', true);
    // MERGE
    const overlayerMerge = plotMerge.select('.overlayer');

    // Background
    //  ENTER
    overlayerEnter.append('rect')
      .classed('background', true);
    //  MERGE
    overlayerMerge.select('.background')
      .attr('height', height)
      .attr('width', width);

    this.drag = false;
  }
}

customElements.define('sdt-model', SDTModel);
