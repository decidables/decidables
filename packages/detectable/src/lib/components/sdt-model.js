
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
      unequal: {
        attribute: 'unequal',
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
      variance: {
        attribute: 'variance',
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
      s: {
        attribute: 's',
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

    this.firstUpdate = true;
    this.drag = false;

    this.colors = ['outcome', 'response', 'stimulus', 'none'];
    this.color = 'outcome';

    this.histogram = false;
    this.distributions = false;
    this.threshold = false;
    this.unequal = false;
    this.sensitivity = false;
    this.bias = false;
    this.variance = false;

    this.d = 1;
    this.c = 0;
    this.s = 1;

    this.muN = NaN;
    this.muS = NaN;
    this.l = NaN;
    this.hS = NaN;

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
      trial.trueEvidence = trial.evidence * this.s + this.muS;
      trial.response = (trial.trueEvidence > this.l) ? 'present' : 'absent';
      if (trial.response === 'present') {
        trial.outcome = 'h';
        this.h += 1;
      } else { // trial.response == 'absent'
        trial.outcome = 'm';
        this.m += 1;
      }
    } else { // trial.signal == 'absent'
      trial.trueEvidence = trial.evidence + this.muN;
      trial.response = (trial.trueEvidence > this.l) ? 'present' : 'absent';
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
    this.far = SDTElement.dc2far(this.d, this.c, this.s);
    this.hr = SDTElement.dc2hr(this.d, this.c, this.s);

    this.muN = SDTElement.d2muN(this.d, this.s);
    this.muS = SDTElement.d2muS(this.d, this.s);
    this.l = SDTElement.c2l(this.c, this.s);
    this.hS = SDTElement.s2h(this.s);

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

        .noise.interactive,
        .signal.interactive,
        .threshold.interactive {
          cursor: ew-resize;

          filter: url("#shadow-2");
          outline: none;
        }

        .signal.unequal {
          cursor: ns-resize;

          filter: url("#shadow-2");
          outline: none;
        }

        .signal.interactive.unequal {
          cursor: move;
        }

        .noise.interactive:hover,
        .signal.interactive:hover,
        .signal.unequal:hover,
        .threshold.interactive:hover {
          filter: url("#shadow-4");

          /* HACK: This gets Safari to correctly apply the filter! */
          transform: translateX(0);
        }

        .noise.interactive:hover,
        .signal.interactive:hover,
        .signal.unequal:hover,
        .threshold.interactive:active {
          filter: url("#shadow-8");

          /* HACK: This gets Safari to correctly apply the filter! */
          transform: translateY(0);
        }

        :host(.keyboard) .noise.interactive:focus,
        :host(.keyboard) .signal.interactive:focus,
        :host(.keyboard) .signal.unequal:focus,
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

        .curve-cr,
        .curve-fa,
        .curve-m,
        .curve-h {
          fill-opacity: 0.5;
          stroke: none;

          transition: fill var(---transition-duration) ease;
        }

        .curve-cr {
          fill: var(---color-cr);
        }

        .curve-fa {
          fill: var(---color-fa);
        }

        .curve-m {
          fill: var(---color-m);
        }

        .curve-h {
          fill: var(---color-h);
        }

        :host([color="accuracy"]) .curve-h,
        :host([color="accuracy"]) .curve-cr {
          fill: var(---color-correct);
        }

        :host([color="accuracy"]) .curve-m,
        :host([color="accuracy"]) .curve-fa {
          fill: var(---color-error);
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

        .measure-d,
        .measure-c,
        .measure-s {
          pointer-events: none;
        }

        .threshold .line {
          stroke: var(---color-element-emphasis);
          stroke-width: 2;
        }

        .threshold .handle {
          fill: var(---color-element-emphasis);

          /* r: 6; HACK: Firefox does not support CSS SVG Geometry Properties */
        }

        /* Make a larger target for touch users */
        @media (pointer: coarse) {
          .threshold.interactive .handle {
            stroke: #000000;
            stroke-opacity: 0;
            stroke-width: 12px;
          }
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

          text-anchor: start;
          fill: currentColor;
        }

        .measure-c .line,
        .measure-c .cap-zero {
          stroke: var(---color-c);
          stroke-width: 2;
          shape-rendering: crispEdges;
        }

        .measure-c .label {
          font-size: 0.75rem;

          fill: currentColor;
        }

        .measure-s .line,
        .measure-s .cap-left,
        .measure-s .cap-right {
          stroke: var(---color-s);
          stroke-width: 2;
          shape-rendering: crispEdges;
        }

        .measure-s .label {
          font-size: 0.75rem;

          text-anchor: middle;
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
        s: this.s,
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
    // console.log(`sdt-model: width = ${this.width}, height = ${this.height}, rem = ${this.rem}`);
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

    const transitionDuration = parseInt(this.getComputedStyleValue('---transition-duration'), 10);

    // X Scale
    const xScale = d3.scaleLinear()
      .domain([-3, 3]) // Evidence // FIX - no hardcoding
      .range([0, width]);

    // Y Scale
    const yScale = d3.scaleLinear()
      .domain([0.5, 0]) // Probability // FIX - no hardcoding
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
        return {x: xScale(this.l), y: 0};
      })
      .on('start', (datum, index, elements) => {
        const element = elements[index];
        d3.select(element).classed('dragging', true);
      })
      .on('drag', (/* datum */) => {
        this.drag = true;
        let l = xScale.invert(d3.event.x);
        // Clamp lambda to stay visible
        l = (l < xScale.domain()[0])
          ? xScale.domain()[0]
          : (l > xScale.domain()[1])
            ? xScale.domain()[1]
            : l;
        this.c = SDTElement.l2c(l, this.s);
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
        return {x: xScale(this.muN), y: 0};
      })
      .on('start', (datum, index, elements) => {
        const element = elements[index];
        d3.select(element).classed('dragging', true);
      })
      .on('drag', (/* datum */) => {
        this.drag = true;
        let muN = xScale.invert(d3.event.x);
        // Clamp Noise Curve to stay visible
        muN = (muN < xScale.domain()[0])
          ? xScale.domain()[0]
          : (muN > xScale.domain()[1])
            ? xScale.domain()[1]
            : muN;
        this.d = SDTElement.muN2d(muN, this.s);
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
        return {x: xScale(this.muS), y: yScale(this.hS)};
      })
      .on('start', (datum, index, elements) => {
        const element = elements[index];
        d3.select(element).classed('dragging', true);
        datum.startX = d3.event.x;
        datum.startY = d3.event.y;
        datum.startHS = this.hS;
        datum.startMuS = this.muS;
      })
      .on('drag', (datum) => {
        this.drag = true;
        let muS = this.muS; // eslint-disable-line prefer-destructuring
        if (this.interactive) {
          muS = xScale.invert(d3.event.x);
          // Clamp Signal Curve to stay visible
          muS = (muS < xScale.domain()[0])
            ? xScale.domain()[0]
            : (muS > xScale.domain()[1])
              ? xScale.domain()[1]
              : muS;
        }
        let hS = this.hS; // eslint-disable-line prefer-destructuring
        if (this.unequal) {
          hS = yScale.invert(d3.event.y);
          // Clamp Signal Curve to stay visible
          hS = (hS < 0.01)
            ? 0.01
            : (hS > yScale.domain()[0])
              ? yScale.domain()[0]
              : hS;
        }
        if (this.interactive && this.unequal) {
          // Use shift key as modifier for single dimension
          if (d3.event.sourceEvent.shiftKey) {
            if (Math.abs(d3.event.x - datum.startX) > Math.abs(d3.event.y - datum.startY)) {
              hS = datum.startHS;
            } else {
              muS = datum.startMuS;
            }
          }
        }
        if (this.unequal) {
          this.s = SDTElement.h2s(hS);
          this.c = SDTElement.l2c(this.l, this.s);
        }
        this.d = SDTElement.muS2d(muS, this.s);
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
      .attr('transform', this.distributions ? `translate(${width}, 0)` : '')
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
    const signalNoiseMerge = signalNoiseEnter.merge(signalNoiseUpdate);
    //  EXIT
    signalNoiseUpdate.exit().remove();

    // Noise Distribution
    //  ENTER
    const noiseEnter = signalNoiseEnter.append('g')
      .classed('noise', true);
    //  MERGE
    const noiseMerge = signalNoiseMerge.selectAll('.noise')
      .attr('tabindex', this.interactive ? 0 : null)
      .classed('interactive', this.interactive)
      .on('keydown', this.interactive
        ? (/* datum */) => {
          if (['ArrowRight', 'ArrowLeft'].includes(d3.event.key)) {
            let muN = this.muN; // eslint-disable-line prefer-destructuring
            switch (d3.event.key) {
              case 'ArrowRight':
                muN += d3.event.shiftKey ? 0.01 : 0.1;
                break;
              case 'ArrowLeft':
                muN -= d3.event.shiftKey ? 0.01 : 0.1;
                break;
              default:
            }
            // Clamp C to visible extent
            muN = (muN < xScale.domain()[0])
              ? xScale.domain()[0]
              : (muN > xScale.domain()[1])
                ? xScale.domain()[1]
                : muN;
            if (muN !== this.muN) {
              this.d = SDTElement.muN2d(muN, this.s);
              this.alignState();
              this.sendEvent();
            }
            d3.event.preventDefault();
          }
        }
        : null);
    if (
      this.firstUpdate
      || changedProperties.has('interactive')
    ) {
      if (this.interactive) {
        noiseMerge.call(dragNoise);
      } else {
        noiseMerge.on('.drag', null);
      }
    }

    // CR Curve
    //  ENTER
    noiseEnter.append('path')
      .classed('curve-cr', true);
    //  MERGE
    noiseMerge.select('.curve-cr').transition()
      .duration(this.drag ? 0 : transitionDuration)
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
        const interpolateS = d3.interpolate(
          (element.s !== undefined) ? element.s : this.s,
          this.s,
        );
        return (time) => {
          element.d = interpolateD(time);
          element.c = interpolateC(time);
          element.s = interpolateS(time);
          const correctRejections = d3.range(
            xScale.domain()[0],
            SDTElement.c2l(element.c, element.s),
            0.05,
          ).map((e) => {
            return {
              e: e,
              p: jStat.normal.pdf(e, SDTElement.d2muN(element.d, element.s), 1),
            };
          });
          correctRejections.push({
            e: SDTElement.c2l(element.c, element.s),
            p: jStat.normal.pdf(
              SDTElement.c2l(element.c, element.s),
              SDTElement.d2muN(element.d, element.s),
              1,
            ),
          });
          correctRejections.push({
            e: SDTElement.c2l(element.c, element.s),
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
      .duration(this.drag ? 0 : transitionDuration)
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
        const interpolateS = d3.interpolate(
          (element.s !== undefined) ? element.s : this.s,
          this.s,
        );
        return (time) => {
          element.d = interpolateD(time);
          element.c = interpolateC(time);
          element.s = interpolateS(time);
          const falseAlarms = d3.range(
            SDTElement.c2l(element.c, element.s),
            xScale.domain()[1],
            0.05,
          ).map((e) => {
            return {
              e: e,
              p: jStat.normal.pdf(e, SDTElement.d2muN(element.d, element.s), 1),
            };
          });
          falseAlarms.push({
            e: xScale.domain()[1],
            p: jStat.normal.pdf(xScale.domain()[1], SDTElement.d2muN(element.d, element.s), 1),
          });
          falseAlarms.push({
            e: xScale.domain()[1],
            p: 0,
          });
          falseAlarms.push({
            e: SDTElement.c2l(element.c, element.s),
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
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attrTween('d', (datum, index, elements) => {
        const element = elements[index];
        const interpolateD = d3.interpolate(
          (element.d !== undefined) ? element.d : this.d,
          this.d,
        );
        const interpolateS = d3.interpolate(
          (element.s !== undefined) ? element.s : this.s,
          this.s,
        );
        return (time) => {
          element.d = interpolateD(time);
          element.s = interpolateS(time);
          const noise = d3.range(
            xScale.domain()[0],
            xScale.domain()[1],
            0.05,
          ).map((e) => {
            return {
              e: e,
              p: jStat.normal.pdf(e, SDTElement.d2muN(element.d, element.s), 1),
            };
          });
          noise.push({
            e: xScale.domain()[1],
            p: jStat.normal.pdf(xScale.domain()[1], SDTElement.d2muN(element.d, element.s), 1),
          });
          return line(noise);
        };
      });

    // Signal + Noise Distribution
    //  ENTER
    const signalEnter = signalNoiseEnter.append('g')
      .classed('signal', true);
    //  MERGE
    const signalMerge = signalNoiseMerge.selectAll('.signal')
      .attr('tabindex', (this.interactive || this.unequal) ? 0 : null)
      .classed('interactive', this.interactive)
      .classed('unequal', this.unequal)
      .on('keydown.sensitivity', this.interactive
        ? (/* datum */) => {
          if (['ArrowRight', 'ArrowLeft'].includes(d3.event.key)) {
            let muS = this.muS; // eslint-disable-line prefer-destructuring
            switch (d3.event.key) {
              case 'ArrowRight':
                muS += d3.event.shiftKey ? 0.01 : 0.1;
                break;
              case 'ArrowLeft':
                muS -= d3.event.shiftKey ? 0.01 : 0.1;
                break;
              default:
            }
            // Clamp C to visible extent
            muS = (muS < xScale.domain()[0])
              ? xScale.domain()[0]
              : (muS > xScale.domain()[1])
                ? xScale.domain()[1]
                : muS;
            if (muS !== this.muS) {
              this.d = SDTElement.muS2d(muS, this.s);
              this.alignState();
              this.sendEvent();
            }
            d3.event.preventDefault();
          }
        }
        : null)
      .on('keydown.variance', this.unequal
        ? (/* datum */) => {
          if (['ArrowUp', 'ArrowDown'].includes(d3.event.key)) {
            let hS = this.hS; // eslint-disable-line prefer-destructuring
            switch (d3.event.key) {
              case 'ArrowUp':
                hS += d3.event.shiftKey ? 0.002 : 0.02;
                break;
              case 'ArrowDown':
                hS -= d3.event.shiftKey ? 0.002 : 0.02;
                break;
              default:
            }
            // Clamp s so distribution stays visible
            hS = (hS < 0.01)
              ? 0.01
              : (hS > yScale.domain()[0])
                ? yScale.domain()[0]
                : hS;
            if (hS !== this.hS) {
              this.s = SDTElement.h2s(hS);
              this.d = SDTElement.muN2d(this.muN, this.s);
              this.c = SDTElement.l2c(this.l, this.s);
              this.alignState();
              this.sendEvent();
            }
            d3.event.preventDefault();
          }
        }
        : null);
    if (
      this.firstUpdate
      || changedProperties.has('interactive')
      || changedProperties.has('unequal')
    ) {
      if (this.interactive || this.unequal) {
        signalMerge.call(dragSignal);
      } else {
        signalMerge.on('.drag', null);
      }
    }

    // M Curve
    //  ENTER
    signalEnter.append('path')
      .classed('curve-m', true);
    //  MERGE
    signalMerge.select('.curve-m').transition()
      .duration(this.drag ? 0 : transitionDuration)
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
        const interpolateS = d3.interpolate(
          (element.s !== undefined) ? element.s : this.s,
          this.s,
        );
        return (time) => {
          element.d = interpolateD(time);
          element.c = interpolateC(time);
          element.s = interpolateS(time);
          const misses = d3.range(
            xScale.domain()[0],
            SDTElement.c2l(element.c, element.s),
            0.05,
          ).map((e) => {
            return {
              e: e,
              p: jStat.normal.pdf(e, SDTElement.d2muS(element.d, element.s), element.s),
            };
          });
          misses.push({
            e: SDTElement.c2l(element.c, element.s),
            p: jStat.normal.pdf(
              SDTElement.c2l(element.c, element.s),
              SDTElement.d2muS(element.d, element.s),
              element.s,
            ),
          });
          misses.push({
            e: SDTElement.c2l(element.c, element.s),
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
      .duration(this.drag ? 0 : transitionDuration)
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
        const interpolateS = d3.interpolate(
          (element.s !== undefined) ? element.s : this.s,
          this.s,
        );
        return (time) => {
          element.d = interpolateD(time);
          element.c = interpolateC(time);
          element.s = interpolateS(time);
          const hits = d3.range(
            SDTElement.c2l(element.c, element.s),
            xScale.domain()[1],
            0.05,
          ).map((e) => {
            return {
              e: e,
              p: jStat.normal.pdf(e, SDTElement.d2muS(element.d, element.s), element.s),
            };
          });
          hits.push({
            e: xScale.domain()[1],
            p: jStat.normal.pdf(
              xScale.domain()[1],
              SDTElement.d2muS(element.d, element.s),
              element.s,
            ),
          });
          hits.push({
            e: xScale.domain()[1],
            p: 0,
          });
          hits.push({
            e: SDTElement.c2l(element.c, element.s),
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
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attrTween('d', (datum, index, elements) => {
        const element = elements[index];
        const interpolateD = d3.interpolate(
          (element.d !== undefined) ? element.d : this.d,
          this.d,
        );
        const interpolateS = d3.interpolate(
          (element.s !== undefined) ? element.s : this.s,
          this.s,
        );
        return (time) => {
          element.d = interpolateD(time);
          element.s = interpolateS(time);
          const signal = d3.range(
            xScale.domain()[0],
            xScale.domain()[1],
            0.05,
          ).map((e) => {
            return {
              e: e,
              p: jStat.normal.pdf(e, SDTElement.d2muS(element.d, element.s), element.s),
            };
          });
          signal.push({
            e: xScale.domain()[1],
            p: jStat.normal.pdf(
              xScale.domain()[1],
              SDTElement.d2muS(element.d, element.s),
              element.s,
            ),
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
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('x1', xScale(this.muN))
      .attr('y1', yScale(0.43)) // FIX - no hardcoding
      .attr('x2', xScale(this.muS))
      .attr('y2', yScale(0.43)); // FIX - no hardcoding
    dMerge.select('.cap-left').transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('x1', xScale(this.muN))
      .attr('y1', yScale(0.43) + 5) // FIX - no hardcoding
      .attr('x2', xScale(this.muN))
      .attr('y2', yScale(0.43) - 5); // FIX - no hardcoding
    dMerge.select('.cap-right').transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('x1', xScale(this.muS))
      .attr('y1', yScale(0.43) + 5) // FIX - no hardcoding
      .attr('x2', xScale(this.muS))
      .attr('y2', yScale(0.43) - 5); // FIX - no hardcoding
    const dLabelTransition = dMerge.select('.label').transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('x', xScale((this.muN > this.muS) ? this.muN : this.muS) + 5)
      .attr('y', yScale(0.43) + 3); // FIX - no hardcoding
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
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('x1', xScale(this.l))
      .attr('y1', yScale(0.47)) // FIX - no hardcoding
      .attr('x2', xScale(0))
      .attr('y2', yScale(0.47)); // FIX - no hardcoding
    cMerge.select('.cap-zero').transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('x1', xScale(0))
      .attr('y1', yScale(0.47) + 5) // FIX - no hardcoding
      .attr('x2', xScale(0))
      .attr('y2', yScale(0.47) - 5); // FIX - no hardcoding
    const cLabelTransition = cMerge.select('.label').transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('x', xScale(0) + ((this.l < 0) ? 5 : -5))
      .attr('y', yScale(0.47) + 3) // FIX - no hardcoding
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

    // s Measure
    //  DATA-JOIN
    const sUpdate = contentMerge.selectAll('.measure-s')
      .data(this.variance ? [{}] : []);
    //  ENTER
    const sEnter = sUpdate.enter().append('g')
      .classed('measure-s', true);
    sEnter.append('line')
      .classed('line', true);
    sEnter.append('line')
      .classed('cap-left', true);
    sEnter.append('line')
      .classed('cap-right', true);
    const sLabel = sEnter.append('text')
      .classed('label', true);
    sLabel.append('tspan')
      .classed('s math-var', true)
      .text('σ');
    sLabel.append('tspan')
      .classed('equals', true)
      .text(' = ');
    sLabel.append('tspan')
      .classed('value', true);
    //  MERGE
    const sMerge = sEnter.merge(sUpdate);
    sMerge.select('.line').transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('x1', xScale(this.muS - this.s))
      .attr('y1', yScale(jStat.normal.pdf(this.s, 0, this.s)) + (10 / this.s)) // FIX - no hardcoding
      .attr('x2', xScale(this.muS + this.s))
      .attr('y2', yScale(jStat.normal.pdf(this.s, 0, this.s)) + (10 / this.s)); // FIX - no hardcoding
    sMerge.select('.cap-left').transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('x1', xScale(this.muS - this.s))
      .attr('y1', yScale(jStat.normal.pdf(this.s, 0, this.s)) + (10 / this.s) + 5) // FIX - no hardcoding
      .attr('x2', xScale(this.muS - this.s))
      .attr('y2', yScale(jStat.normal.pdf(this.s, 0, this.s)) + (10 / this.s) - 5); // FIX - no hardcoding
    sMerge.select('.cap-right').transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('x1', xScale(this.muS + this.s))
      .attr('y1', yScale(jStat.normal.pdf(this.s, 0, this.s)) + (10 / this.s) + 5) // FIX - no hardcoding
      .attr('x2', xScale(this.muS + this.s))
      .attr('y2', yScale(jStat.normal.pdf(this.s, 0, this.s)) + (10 / this.s) - 5); // FIX - no hardcoding
    const sLabelTransition = sMerge.select('.label').transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('x', xScale(this.muS))
      .attr('y', yScale(jStat.normal.pdf(this.s, 0, this.s)) + (10 / this.s) - 3); // FIX - no hardcoding
    sLabelTransition.select('.value')
      .tween('text', (datum, index, elements) => {
        const element = elements[index];
        const interpolateS = d3.interpolate(
          (element.s !== undefined) ? element.s : this.s,
          this.s,
        );
        return (time) => {
          element.s = interpolateS(time);
          d3.select(element).text(+(element.s).toFixed(3));
        };
      });
    //  EXIT
    sUpdate.exit().remove();

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
    if (
      this.firstUpdate
      || changedProperties.has('interactive')
    ) {
      if (this.interactive) {
        thresholdMerge
          .call(dragThreshold)
          .on('keydown', (/* datum */) => {
            if (['ArrowRight', 'ArrowLeft'].includes(d3.event.key)) {
              let l = this.l; // eslint-disable-line prefer-destructuring
              switch (d3.event.key) {
                case 'ArrowRight':
                  l += d3.event.shiftKey ? 0.01 : 0.1;
                  break;
                case 'ArrowLeft':
                  l -= d3.event.shiftKey ? 0.01 : 0.1;
                  break;
                default:
              }
              // Clamp C to visible extent
              l = (l < xScale.domain()[0])
                ? xScale.domain()[0]
                : (l > xScale.domain()[1])
                  ? xScale.domain()[1]
                  : l;
              if (l !== this.l) {
                this.c = SDTElement.l2c(l, this.s);
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
    }
    thresholdMerge.select('.line').transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('x1', xScale(this.l))
      .attr('y1', yScale(0))
      .attr('x2', xScale(this.l))
      .attr('y2', yScale(0.54));
    thresholdMerge.select('.handle').transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('cx', xScale(this.l))
      .attr('cy', yScale(0.54));
    //  EXIT
    thresholdUpdate.exit().remove();

    // CURRENT!

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
        .duration(transitionDuration)
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
        .duration(transitionDuration)
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
    this.firstUpdate = false;
  }
}

customElements.define('sdt-model', SDTModel);
