
import {html, css} from 'lit';
import * as d3 from 'd3';

import DDMMath from '@decidables/accumulable-math';
import {DecidablesMixinResizeable} from '@decidables/decidables-elements';

import AccumulableElement from '../accumulable-element';

/*
  DDMModel element
  <ddm-model>

  Attributes:
    interactive: true/false

    measures: boolean
    means: boolean

    seed: numeric
    trials: numeric

    a: numeric
    z: numeric
    v: numeric
    t0: numeric

    // s: numeric
    // sz: numeric
    // eta: numeric
    // st: numeric

  Styles:
    ??
*/
export default class DDMModel extends DecidablesMixinResizeable(AccumulableElement) {
  static get properties() {
    return {
      measures: {
        attribute: 'measures',
        type: Boolean,
        reflect: true,
      },
      means: {
        attribute: 'means',
        type: Boolean,
        reflect: true,
      },
      sds: {
        attribute: 'sds',
        type: Boolean,
        reflect: true,
      },

      human: {
        attribute: 'human',
        type: Boolean,
        reflect: true,
      },
      trials: {
        attribute: 'trials',
        type: Number,
        reflect: true,
      },
      seed: {
        attribute: 'seed',
        type: Number,
        reflect: true,
      },

      a: {
        attribute: 'boundary-separation',
        type: Number,
        reflect: true,
      },
      z: {
        attribute: 'starting-point',
        type: Number,
        reflect: true,
      },
      v: {
        attribute: 'drift-rate',
        type: Number,
        reflect: true,
      },
      t0: {
        attribute: 'nondecision-time',
        type: Number,
        reflect: true,
      },

      // s: {
      //   attribute: false, // within-trial variability in drift rate
      //   type: Number,
      //   reflect: false,
      // },
      // sz: {
      //   attribute: false, // starting point range
      //   type: Number,
      //   reflect: false,
      // },
      // eta: {
      //   attribute: false, // standard deviation for across-trial variability in drift rate
      //   type: Number,
      //   reflect: false,
      // },
      // st: {
      //   attribute: false, // nondecision-time range
      //   type: Number,
      //   reflect: false,
      // },
    };
  }

  constructor() {
    super();

    this.firstUpdate = true;
    this.drag = false;

    this.scale = {
      time: {
        min: 0,
        max: 1000,
        step: 1,
        round: Math.round,
      },
      evidence: {
        min: -1,
        max: 1,
        step: 0.01,
        round: Math.round,
      },
      density: {
        min: 0,
        max: 10,
        step: 0.01,
        round: Math.round,
      },
    };

    this.measures = false;
    this.means = false;
    this.sds = false;

    this.resample();
    this.human = false;
    this.trials = 10;

    this.a = 1.2;
    this.z = 0.35;
    this.v = 1.5;
    this.t0 = 150;

    // this.s = null;
    // this.sz = null;
    // this.eta = null;
    // this.st = null;

    this.precision = 0.005;
    this.random = null;

    this.bounds = null;
    this.startingPoint = null;

    this.data = {};
    this.model = {};
    this.animate = false;
    this.paused = false;

    this.alignState();
  }

  clear() {
    this.trials = 0;
    this.data.trials = [];
  }

  trial(trial = {}) {
    this.trials += 1;
    if (this.human) {
      this.data.trials.push(trial);
    } else {
      this.animate = true;
    }
  }

  // Called to pause trial animations!
  pauseTrial() {
    const pathNew = d3.select(this.renderRoot).select('.path[data-new-trial-ease-time]');
    pathNew.interrupt('new').select('.curve').interrupt('new');
    this.paused = true;
  }

  // Called to resume trial animations!
  resumeTrial() {
    this.paused = false;
    this.requestUpdate();
  }

  resample() {
    this.seed = d3.randomUniform(0, 1)();
  }

  alignPath(seed, a, z, v, t0) {
    const random = d3.randomNormal.source(d3.randomLcg(seed))(0, this.precision ** 0.5);
    const bounds = {
      lower: -a / 2,
      upper: a / 2,
    };
    const startingPoint = a * z - a / 2;
    const drift = v * this.precision;

    const path = [];
    path.push(
      {t: t0, e: startingPoint},
    );
    while ((path.at(-1).e > bounds.lower) && (path.at(-1).e < bounds.upper)) {
      path.push({
        t: path.at(-1).t + (this.precision * 1000),
        e: path.at(-1).e + drift + DDMMath.s * random(),
      });
    }
    return path;
  }

  alignCorrectDistribution(a, z, v, t0) {
    const proportionCorrect = DDMMath.azvs2pC(a, z, v);

    const dist = [
      {t: 0, d: 0},
      {t: this.t0, d: 0},
    ];
    for (
      let i = this.scale.time.min;
      i <= (this.scale.time.max - (t0));
      i += this.scale.time.step) {
      if (i > 0) {
        dist.push({
          t: t0 + i,
          d: DDMMath.tazvs2gC(i / 1000, a, z, v) / proportionCorrect,
        });
      }
    }

    return dist;
  }

  alignErrorDistribution(a, z, v, t0) {
    const proportionError = DDMMath.azvs2pE(a, z, v);

    const dist = [
      {t: 0, d: 0},
      {t: this.t0, d: 0},
    ];
    for (
      let i = this.scale.time.min;
      i <= (this.scale.time.max - (t0));
      i += this.scale.time.step) {
      if (i > 0) {
        dist.push({
          t: t0 + i,
          d: DDMMath.tazvs2gE(i / 1000, a, z, v) / proportionError,
        });
      }
    }

    return dist;
  }

  alignState() {
    this.random = d3.randomUniform.source(d3.randomLcg(this.seed))(0, 1);

    this.bounds = {
      lower: -this.a / 2,
      upper: this.a / 2,
    };
    this.startingPoint = this.a * this.z - this.a / 2;

    // Data Trials
    if (this.human) {
      this.trials = this.data.trials.length;
    } else {
      this.data.trials = Array.from({length: this.trials}, (element, index) => {
        const seed = (this.random() / 1000) * 997; // HACK to avoid randomLcg repetition
        const animate = this.animate && (index === (this.trials - 1));

        // Sample Paths
        const path = this.alignPath(seed, this.a, this.z, this.v, this.t0);
        const outcome = (path.at(-1).e <= this.bounds.lower)
          ? 'error'
          : (path.at(-1).e >= this.bounds.upper)
            ? 'correct'
            : 'nr';
        const rt = (outcome === 'error')
          ? path.at(-2).t + (
            ((this.bounds.lower - path.at(-2).e) / (path.at(-1).e - path.at(-2).e))
            * (this.precision * 1000)
          )
          : (outcome === 'correct')
            ? path.at(-2).t + (
              ((this.bounds.upper - path.at(-2).e) / (path.at(-1).e - path.at(-2).e))
              * (this.precision * 1000)
            )
            : null;

        return {
          index, seed, path, rt, outcome, animate,
        };
      });
    }

    // Data Summary Stats
    const trials = this.data.trials
      .filter((path) => { return !path.animate; })
      .reduce((stats, path) => {
        stats.correct += (path.outcome === 'correct') ? 1 : 0;
        stats.error += (path.outcome === 'error') ? 1 : 0;
        return stats;
      }, {
        correct: 0,
        error: 0,
      });
    this.data.correctCount = trials.correct;
    this.data.errorCount = trials.error;
    this.data.accuracy = (this.trials > 0) ? (trials.correct / this.trials) : NaN;

    const rts = this.data.trials
      .filter((path) => { return !path.animate; })
      .reduce((stats, path) => {
        stats.correct += (path.outcome === 'correct') ? path.rt : 0;
        stats.error += (path.outcome === 'error') ? path.rt : 0;
        return stats;
      }, {
        correct: 0,
        error: 0,
      });
    this.data.correctMeanRT = (trials.correct > 0) ? (rts.correct / trials.correct) : NaN;
    this.data.errorMeanRT = (trials.error > 0) ? (rts.error / trials.error) : NaN;
    this.data.meanRT = (this.trials > 0)
      ? ((rts.correct + rts.error) / (trials.correct + trials.error))
      : NaN;

    const sss = this.data.trials
      .filter((path) => { return !path.animate; })
      .reduce((stats, path) => {
        stats.correct += (path.outcome === 'correct')
          ? (path.rt - this.data.correctMeanRT) ** 2
          : 0;
        stats.error += (path.outcome === 'error')
          ? (path.rt - this.data.errorMeanRT) ** 2
          : 0;
        stats.overall += (path.rt - this.data.meanRT) ** 2;
        return stats;
      }, {
        correct: 0,
        error: 0,
        overall: 0,
      });
    this.data.correctSDRT = (trials.correct > 1)
      ? Math.sqrt(sss.correct / (trials.correct - 1))
      : NaN;
    this.data.errorSDRT = (trials.error > 1) ? Math.sqrt(sss.error / (trials.error - 1)) : NaN;
    this.data.sdRT = (this.trials > 1) ? Math.sqrt(sss.overall / (this.trials - 1)) : NaN;

    // Model Summary Stats
    this.model.accuracy = DDMMath.azvs2pC(this.a, this.z, this.v);

    this.model.correctMeanRT = DDMMath.azvt0s2mC(this.a, this.z, this.v, this.t0);
    this.model.errorMeanRT = DDMMath.azvt0s2mE(this.a, this.z, this.v, this.t0);

    this.model.correctSDRT = DDMMath.azvs2sdC(this.a, this.z, this.v);
    this.model.errorSDRT = DDMMath.azvs2sdE(this.a, this.z, this.v);

    // Model Distributions
    this.model.correctDist = this.alignCorrectDistribution(this.a, this.z, this.v, this.t0);
    this.model.errorDist = this.alignErrorDistribution(this.a, this.z, this.v, this.t0);

    this.dispatchEvent(new CustomEvent('ddm-model-output', {
      detail: {
        data: this.data,
        model: this.model,
      },
      bubbles: true,
    }));
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: inline-block;

          width: 27rem;
          height: 18rem;
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

        /*  
          UNDERLAYER
        */
        .background {
          fill: var(---color-element-background);
          stroke: none;
          stroke-width: 1;
          shape-rendering: crispEdges;
        }

        .title {
          font-weight: 600;

          fill: currentColor;
        }

        .axis path,
        .axis line {
          stroke: var(---color-element-border);
          /* shape-rendering: crispEdges; */
        }

        .tick {
          font-size: 0.75rem;
        }

        /*  
          CONTENT
        */
        .line {
          fill: none;
          stroke: var(---color-element-emphasis);
          stroke-width: 2;
        }

        .curve {
          stroke-width: 2;
        }

        .path .curve {
          opacity: 0.5;

          fill: none;

          transition: opacity 0.5s;
        }

        .path.highlight .curve {
          filter: url("#shadow-2");
          opacity: 1;
        }

        .path.correct .curve {
          /* stroke: var(---color-correct); */
        }

        .path.error .curve {
          /* stroke: var(---color-error); */
        }

        .stop-0 {
          stop-color: var(---color-correct);
        }

        .stop-100 {
          stop-color: var(---color-error);
        }

        .path.animate .curve {
          opacity: 1;

          stroke: url("#path-animate");
        }

        .dist.correct .curve {
          fill: var(---color-correct-light);
          stroke: var(---color-correct);
        }

        .dist.error .curve {
          fill: var(---color-error-light);
          stroke: var(---color-error);
        }

        .rt .mark {
          stroke-width: 1;
        }

        .accuracy.model .bar {
          stroke: none;
        }

        .accuracy.model.correct .bar {
          fill: var(---color-correct);
        }

        .accuracy.model.error .bar {
          fill: var(---color-error);
        }

        .accuracy.data .mark {
          stroke-width: 2;
        }

        .accuracy.data.correct .mark {
          stroke: var(---color-correct-light);
        }

        .accuracy.data.error .mark {
          stroke: var(---color-error-light);
        }

        /*
          OVERLAYER
        */
        .interactive {
          filter: url("#shadow-2");
          outline: none;
        }

        .interactive:hover {
          filter: url("#shadow-4");
        }

        .interactive:active {
          filter: url("#shadow-8");
        }

        :host(.keyboard) .interactive:focus {
          filter: url("#shadow-8");
        }

        .boundary {
          fill: none;
          stroke: var(---color-element-emphasis);
          stroke-width: 2;
        }

        .boundary.interactive {
          cursor: ns-resize;
        }

        .drift {
          pointer-events: visible;

          fill: none;
          stroke: var(---color-element-emphasis);
          stroke-dasharray: 8 4;
          stroke-width: 2;
        }

        .drift.interactive {
          cursor: ns-resize;
        }

        .drift .arrow {
          stroke-dasharray: none;
        }

        .t0z.interactive {
          cursor: move;
        }

        .t0z .point {
          fill: var(---color-element-emphasis);

          r: 6px;
        }

        .measure {
          stroke-width: 2;
        }

        .measure .label {
          font-size: 0.75rem;

          fill: currentColor;
        }

        .measure.a .line {
          stroke: var(---color-a);
        }

        .measure.a .label {
          dominant-baseline: auto;
          text-anchor: end;
        }

        .measure.z .line {
          stroke: var(---color-z);
        }

        .measure.z .label {
          dominant-baseline: hanging;
          text-anchor: start;
        }

        .measure.v .line {
          stroke: var(---color-v);
        }

        .measure.v .label {
          dominant-baseline: auto;
          text-anchor: start;
        }

        .measure.t0 .line {
          stroke: var(---color-t0);
        }

        .measure.t0 .label {
          dominant-baseline: auto;
          text-anchor: middle;
        }

        .sd .indicator,
        .mean .indicator {
          stroke-width: 2;
        }

        .sd.model .indicator,
        .mean.model .indicator {
          stroke-dasharray: 2 2;
        }

        .sd.data .indicator,
        .mean.data .indicator {
          stroke-dasharray: 1 1;
        }

        .sd.correct .indicator,
        .mean.correct .indicator {
          stroke: var(---color-correct-dark);
        }

        .sd.error .indicator,
        .mean.error .indicator {
          stroke: var(---color-error-dark);
        }

        .rt-label rect {
          filter: url("#shadow-2");

          fill: var(--color-background);
          rx: 4;
        }

        .rt-label text {
          font-size: 0.75rem;
          
          text-anchor: middle;
        }

        .rt-label.correct text {
          dominant-baseline: auto;
        }

        .rt-label.error text {
          dominant-baseline: hanging;
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

    const elementAspectRatio = 1.5;
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
      top: 1 * this.rem,
      bottom: 3 * this.rem,
      left: 3.75 * this.rem,
      right: 3.25 * this.rem,
    };
    const height = elementHeight - (margin.top + margin.bottom);
    const width = elementWidth - (margin.left + margin.right);

    const gapHeight = 0.75 * this.rem;
    const evidenceHeight = height * 0.5;
    const densityHeight = height * 0.25 - gapHeight;

    const gapWidth = 0.75 * this.rem;
    const timeWidth = width * 0.90;
    const accuracyWidth = width * 0.10 - gapWidth;

    const transitionDuration = parseInt(this.getComputedStyleValue('---transition-duration'), 10);

    //
    // SCALES
    //

    // Time Scale
    const timeScale = d3.scaleLinear()
      .domain([this.scale.time.min, this.scale.time.max])
      .range([0, timeWidth]);

    // Evidence Scale
    const evidenceScale = d3.scaleLinear()
      .domain([this.scale.evidence.min, this.scale.evidence.max])
      .range([evidenceHeight, 0]);

    // Correct Density Scale
    const correctDensityScale = d3.scaleLinear()
      .domain([this.scale.density.min, this.scale.density.max])
      .range([densityHeight, 0]);

    // Error Density Scale
    const errorDensityScale = d3.scaleLinear()
      .domain([this.scale.density.min, this.scale.density.max])
      .range([0, densityHeight]);

    // Accuracy Scale
    const accuracyScale = d3.scaleLinear()
      .domain([0, 1])
      .range([0, height]);

    //
    // DRAG BEHAVIORS
    //

    // Nondecision Time/Starting Point Drag behavior
    const dragT0z = d3.drag()
      .subject((event, datum) => {
        return {x: timeScale(datum.t0), y: evidenceScale(datum.startingPoint)};
      })
      .on('start', (event) => {
        const element = event.currentTarget;
        d3.select(element).classed('dragging', true);
      })
      .on('drag', (event) => {
        this.drag = true;
        const shift = event.sourceEvent.shiftKey
          ? (Math.abs(event.x - event.subject.x) > Math.abs(event.y - event.subject.y))
            ? 't0'
            : 'z'
          : false;
        let t0 = timeScale.invert(event.x);
        let z = (evidenceScale.invert(event.y) + (this.a / 2)) / this.a;
        // Clamp t0
        t0 = (shift === 'z')
          ? timeScale.invert(event.subject.x)
          : (t0 < 0)
            ? 0
            : (t0 > 500)
              ? 500
              : t0;
        // Clamp z
        z = (shift === 't0')
          ? (evidenceScale.invert(event.subject.y) + (this.a / 2)) / this.a
          : (z < 0.01)
            ? 0.01
            : (z > 0.99)
              ? 0.99
              : z;
        this.t0 = t0;
        this.z = z;
        this.alignState();
        this.dispatchEvent(new CustomEvent('ddm-model-t0', {
          detail: {
            t0: this.t0,
          },
          bubbles: true,
        }));
        this.dispatchEvent(new CustomEvent('ddm-model-z', {
          detail: {
            z: this.z,
          },
          bubbles: true,
        }));
      })
      .on('end', (event) => {
        const element = event.currentTarget;
        d3.select(element).classed('dragging', false);
        this.drag = false;
      });

    // Drift Rate Drag behavior
    const dragDrift = d3.drag()
      .on('start', (event) => {
        const element = event.currentTarget;
        d3.select(element).classed('dragging', true);
      })
      .on('drag', (event) => {
        this.drag = true;
        let v = ((evidenceScale.invert(event.y) - this.startingPoint)
          / (timeScale.invert(event.x) - this.t0)) * 1000;
        // Clamp drift rate
        v = (v < 0.01)
          ? 0.01
          : (v > 5)
            ? 5
            : v;
        this.v = v;
        this.alignState();
        this.dispatchEvent(new CustomEvent('ddm-model-v', {
          detail: {
            v: this.v,
          },
          bubbles: true,
        }));
      })
      .on('end', (event) => {
        const element = event.currentTarget;
        d3.select(element).classed('dragging', false);
        this.drag = false;
      });

    // Boundary Drag behavior
    const dragBoundary = d3.drag()
      .subject((event, datum) => {
        return {x: 0, y: evidenceScale(datum.value)};
      })
      .on('start', (event) => {
        const element = event.currentTarget;
        d3.select(element).classed('dragging', true);
      })
      .on('drag', (event, datum) => {
        this.drag = true;
        let boundary = evidenceScale.invert(event.y);
        // Clamp boundaries to visible evidence
        boundary = (boundary < this.scale.evidence.min)
          ? this.scale.evidence.min
          : (boundary > this.scale.evidence.max)
            ? this.scale.evidence.max
            : (datum.bound === 'upper' && boundary < 0.005)
              ? 0.005
              : (datum.bound === 'lower' && boundary > -0.005)
                ? -0.005
                : boundary;
        this.a = Math.abs(boundary * 2);
        this.alignState();
        this.dispatchEvent(new CustomEvent('ddm-model-a', {
          detail: {
            a: this.a,
          },
          bubbles: true,
        }));
      })
      .on('end', (event) => {
        const element = event.currentTarget;
        d3.select(element).classed('dragging', false);
        this.drag = false;
      });

    //
    // LINES
    //

    // Line for time/evidence space
    const evidenceLine = d3.line()
      .x((datum) => { return timeScale(datum.t); })
      .y((datum) => { return evidenceScale(datum.e); });

    // Line for correct time/density space
    const correctDensityLine = d3.line()
      .x((datum) => { return timeScale(datum.t); })
      .y((datum) => { return correctDensityScale(datum.d); });

    // Line for error time/density space
    const errorDensityLine = d3.line()
      .x((datum) => { return timeScale(datum.t); })
      .y((datum) => { return errorDensityScale(datum.d); });

    //
    // PLOTS
    //

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
      .classed('main', true)
      .html(AccumulableElement.svgDefs);
    const svgDefs = svgEnter.append('defs');
    // Arrowhead marker for measures
    svgDefs.append('marker')
      .attr('id', 'measure-arrow')
      .attr('orient', 'auto-start-reverse')
      .attr('markerUnits', 'userSpaceOnUse')
      .attr('viewBox', '-5 -5 10 10')
      .attr('refX', '2')
      .attr('refY', '0')
      .attr('markerWidth', '10')
      .attr('markerHeight', '10')
      .append('path')
      .attr('stroke', 'context-stroke')
      .attr('fill', 'context-stroke')
      .attr('d', 'M -3 -3 l 6 3 l -6 3 z');
    // Flat markers for SDs
    svgDefs.append('marker')
      .attr('id', 'model-sd-cap')
      .attr('orient', 'auto-start-reverse')
      .attr('markerUnits', 'userSpaceOnUse')
      .attr('viewBox', '-5 -5 10 10')
      .attr('refX', '0')
      .attr('refY', '0')
      .attr('markerWidth', '10')
      .attr('markerHeight', '10')
      .append('path')
      .attr('stroke', 'context-stroke')
      .attr('fill', 'context-stroke')
      .attr('stroke-width', '2')
      .attr('d', 'M 0 -4 l 0 8');
    svgDefs.append('marker')
      .attr('id', 'data-sd-cap')
      .attr('orient', 'auto-start-reverse')
      .attr('markerUnits', 'userSpaceOnUse')
      .attr('viewBox', '-5 -5 10 10')
      .attr('refX', '0')
      .attr('refY', '0')
      .attr('markerWidth', '10')
      .attr('markerHeight', '10')
      .append('path')
      .attr('stroke', 'context-stroke')
      .attr('fill', 'context-stroke')
      .attr('stroke-width', '2')
      .attr('d', 'M 0 -3 l 0 6');
    const gradient = svgDefs.append('linearGradient')
      .attr('id', 'path-animate')
      .attr('gradientUnits', 'userSpaceOnUse')
      .attr('color-interpolation', 'linearRGB')
      .attr('x1', '0')
      .attr('x2', '0')
      .attr('y1', evidenceScale(this.bounds.upper))
      .attr('y2', evidenceScale(this.bounds.lower));
    gradient.append('stop')
      .classed('stop-0', true)
      .attr('offset', '0%');
    gradient.append('stop')
      .classed('stop-100', true)
      .attr('offset', '100%');
    //  MERGE
    const svgMerge = svgEnter.merge(svgUpdate)
      .attr('viewBox', `0 0 ${elementWidth} ${elementHeight}`);

    // Plots
    //  DATA-JOIN
    const densityPlotUpdate = svgMerge.selectAll('.plot.density')
      .data([
        {
          outcome: 'correct',
          data: {
            meanRT: this.data.correctMeanRT,
            sdRT: this.data.correctSDRT,
          },
          model: {
            meanRT: this.model.correctMeanRT,
            sdRT: this.model.correctSDRT,
            dist: this.model.correctDist,
          },
          densityScale: correctDensityScale,
          densityLine: correctDensityLine,
          alignDistribution: this.alignCorrectDistribution.bind(this),
        },
        {
          outcome: 'error',
          data: {
            meanRT: this.data.errorMeanRT,
            sdRT: this.data.errorSDRT,
          },
          model: {
            meanRT: this.model.errorMeanRT,
            sdRT: this.model.errorSDRT,
            dist: this.model.errorDist,
          },
          densityScale: errorDensityScale,
          densityLine: errorDensityLine,
          alignDistribution: this.alignErrorDistribution.bind(this),
        },
      ]);
    //  ENTER
    const evidencePlotEnter = svgEnter.append('g')
      .classed('plot evidence', true);
    const densityPlotEnter = densityPlotUpdate.enter().append('g')
      .attr('class', (datum) => { return `plot density ${datum.outcome}`; });
    const accuracyPlotEnter = svgEnter.append('g')
      .classed('plot accuracy', true);
    //  MERGE
    const evidencePlotMerge = svgMerge.select('.plot.evidence')
      .attr('transform', `translate(${margin.left}, ${margin.top + densityHeight + gapHeight})`);
    const densityPlotMerge = densityPlotEnter.merge(densityPlotUpdate)
      .attr('transform', (datum) => {
        return `translate(${margin.left}, ${
          (datum.outcome === 'correct')
            ? margin.top
            : margin.top + densityHeight + evidenceHeight + 2 * gapHeight
        })`;
      });
    const accuracyPlotMerge = svgMerge.select('.plot.accuracy')
      .attr('transform', `translate(${margin.left + timeWidth + gapWidth}, ${margin.top})`);

    // Clippaths
    //  ENTER
    evidencePlotEnter.append('clipPath')
      .attr('id', 'clip-evidence')
      .append('rect');
    //  MERGE
    evidencePlotMerge.select('clipPath rect')
      .attr('y', evidenceScale(this.bounds.upper))
      .attr('height', evidenceScale(this.bounds.lower) - evidenceScale(this.bounds.upper) + 1)
      .attr('width', timeWidth + 1);

    //
    // LAYERS
    //

    // Underlayers
    //  ENTER
    const evidenceUnderlayerEnter = evidencePlotEnter.append('g')
      .classed('underlayer', true);
    const densityUnderlayerEnter = densityPlotEnter.append('g')
      .classed('underlayer', true);
    const accuracyUnderlayerEnter = accuracyPlotEnter.append('g')
      .classed('underlayer', true);
    //  MERGE
    const evidenceUnderlayerMerge = evidencePlotMerge.select('.underlayer');
    const densityUnderlayerMerge = densityPlotMerge.select('.underlayer');
    const accuracyUnderlayerMerge = accuracyPlotMerge.select('.underlayer');

    // Contents
    //  ENTER
    evidencePlotEnter.append('g')
      .classed('content', true)
      .append('g').classed('paths', true);
    const densityContentEnter = densityPlotEnter.append('g')
      .classed('content', true);
    accuracyPlotEnter.append('g')
      .classed('content', true);
    //  MERGE
    const evidenceContentMerge = evidencePlotMerge.select('.content');
    const densityContentMerge = densityPlotMerge.select('.content');
    const accuracyContentMerge = accuracyPlotMerge.select('.content');

    // Overlayers
    //  ENTER
    evidencePlotEnter.append('g')
      .classed('overlayer', true);
    densityPlotEnter.append('g')
      .classed('overlayer', true);
    accuracyPlotEnter.append('g')
      .classed('overlayer', true);
    //  MERGE
    const evidenceOverlayerMerge = evidencePlotMerge.select('.overlayer');
    const densityOverlayerMerge = densityPlotMerge.select('.overlayer');
    // const accuracyOverlayerMerge = accuracyPlotMerge.select('.overlayer');

    //
    // UNDERLAYERS
    //

    // Backgrounds
    //  ENTER
    evidenceUnderlayerEnter.append('rect')
      .classed('background', true);
    densityUnderlayerEnter.append('rect')
      .classed('background', true);
    //  MERGE
    evidenceUnderlayerMerge.select('.background')
      .transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('y', evidenceScale(this.bounds.upper))
      .attr('height', evidenceScale(this.bounds.lower) - evidenceScale(this.bounds.upper))
      .attr('width', timeWidth);
    densityUnderlayerMerge.select('.background')
      .transition()
      .duration(transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('height', densityHeight)
      .attr('width', timeWidth);

    // X Axes (Time)
    //  ENTER
    densityUnderlayerEnter
      .filter((datum) => { return datum.outcome === 'error'; })
      .append('g')
      .classed('axis time', true);
    //  MERGE
    const timeScaleMerge = densityUnderlayerMerge
      .filter((datum) => { return datum.outcome === 'error'; })
      .select('.axis.time')
      .attr('transform', `translate(0, ${densityHeight + (0.25 * this.rem)})`);
    const timeScaleTransition = timeScaleMerge.transition()
      .duration(transitionDuration)
      .ease(d3.easeCubicOut)
      .call(d3.axisBottom(timeScale))
      .attr('font-size', null)
      .attr('font-family', null);
    timeScaleTransition.selectAll('line, path')
      .attr('stroke', null);

    // X Axes Titles
    //  ENTER
    const timeTitleEnter = densityUnderlayerEnter
      .filter((datum) => { return datum.outcome === 'error'; })
      .append('text')
      .classed('title time', true)
      .attr('text-anchor', 'middle');
    timeTitleEnter.append('tspan')
      .classed('name', true)
      .text('Time (ms)');
    //  MERGE
    densityUnderlayerMerge
      .filter((datum) => { return datum.outcome === 'error'; })
      .select('.title.time')
      .transition()
      .duration(transitionDuration)
      .ease(d3.easeCubicOut)
      .attr(
        'transform',
        `translate(${(timeWidth / 2)}, ${(densityHeight + (2.5 * this.rem))})`,
      );

    // Y Axes (Evidence, Density, Accuracy)
    //  ENTER
    evidenceUnderlayerEnter.append('g')
      .classed('axis evidence', true);
    densityUnderlayerEnter.append('g')
      .attr('class', (datum) => { return `axis density ${datum.outcome}`; });
    accuracyUnderlayerEnter.append('g')
      .classed('axis accuracy', true);
    // MERGE
    const evidenceScaleMerge = evidenceUnderlayerMerge.select('.axis.evidence')
      .attr('transform', `translate(${-0.25 * this.rem}, 0)`);
    const densityScaleMerge = densityUnderlayerMerge.select('.axis.density')
      .attr('transform', `translate(${-0.25 * this.rem}, 0)`);
    const accuracyScaleMerge = accuracyUnderlayerMerge.select('.axis.accuracy')
      .attr('transform', `translate(${accuracyWidth + (0.25 * this.rem)}, 0)`);
    const evidenceScaleTransition = evidenceScaleMerge.transition()
      .duration(transitionDuration)
      .ease(d3.easeCubicOut)
      .call(d3.axisLeft(evidenceScale))
      .attr('font-size', null)
      .attr('font-family', null);
    const densityScaleTransition = densityScaleMerge.transition()
      .duration(transitionDuration)
      .ease(d3.easeCubicOut)
      .each((datum, index, elements) => {
        d3.axisLeft(datum.densityScale).ticks(2)(d3.select(elements[index]));
      })
      .attr('font-size', null)
      .attr('font-family', null);
    const accuracyScaleTransition = accuracyScaleMerge.transition()
      .duration(transitionDuration)
      .ease(d3.easeCubicOut)
      .call(d3.axisRight(accuracyScale))
      .attr('font-size', null)
      .attr('font-family', null);
    evidenceScaleTransition.selectAll('line, path')
      .attr('stroke', null);
    densityScaleTransition.selectAll('line, path')
      .attr('stroke', null);
    accuracyScaleTransition.selectAll('line, path')
      .attr('stroke', null);

    // Y Axes Titles (Evidence & Density)
    //  ENTER
    const evidenceTitleEnter = evidenceUnderlayerEnter.append('text')
      .classed('title evidence', true)
      .attr('text-anchor', 'middle');
    const densityTitleEnter = densityUnderlayerEnter.append('text')
      .attr('class', (datum) => { return `title density ${datum.outcome}`; })
      .attr('text-anchor', 'middle');
    const accuracyTitleEnter = accuracyUnderlayerEnter.append('text')
      .classed('title accuracy', true)
      .attr('text-anchor', 'middle');
    evidenceTitleEnter.append('tspan')
      .classed('name', true)
      .text('Evidence');
    densityTitleEnter.append('tspan')
      .classed('name', true)
      .text('Density');
    accuracyTitleEnter.append('tspan')
      .classed('name', true)
      .text('Accuracy');
    //  MERGE
    evidenceUnderlayerMerge.select('.title.evidence')
      .transition()
      .duration(transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('transform', `translate(${-2.5 * this.rem}, ${(evidenceHeight / 2)})rotate(-90)`);
    densityUnderlayerMerge.select('.title.density')
      .transition()
      .duration(transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('transform', `translate(${-2.5 * this.rem}, ${(densityHeight / 2)})rotate(-90)`);
    accuracyUnderlayerMerge.select('.title.accuracy')
      .transition()
      .duration(transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('transform', `translate(${accuracyWidth + 2.25 * this.rem}, ${(height / 2)})rotate(90)`);

    //
    // CONTENTS
    //

    // Paths
    //  DATA-JOIN
    const pathUpdate = evidenceContentMerge.select('.paths').selectAll('.path')
      .data(
        this.data.trials.filter((trial) => { return trial.path !== undefined; }),
      );
    //  ENTER
    const rtLabel = d3.local();
    const pathEnter = pathUpdate.enter().append('g')
      .classed('path', true)
      .attr('data-new-trial-ease-time', 0)
      .on('pointerenter', (event, datum) => {
        if (!this.drag) {
          d3.select(event.currentTarget)
            .classed('highlight', true)
            .raise();
          const myRtLabel = evidenceOverlayerMerge.append('g')
            .classed(`rt-label ${datum.outcome}`, true);
          const rect = myRtLabel.append('rect');
          const text = myRtLabel.append('text')
            .text(`RT = ${datum.rt.toFixed()}`)
            .attr('x', timeScale(datum.rt))
            .attr('y', datum.outcome === 'correct'
              ? evidenceScale(this.bounds.upper) - this.rem * 0.25
              : evidenceScale(this.bounds.lower) + this.rem * 0.125);
          const bbox = text.node().getBBox();
          rect
            .attr('x', bbox.x - this.rem * 0.125)
            .attr('y', bbox.y + this.rem * 0.125)
            .attr('width', bbox.width + this.rem * 0.25)
            .attr('height', bbox.height - this.rem * 0.25);
          rtLabel.set(event.currentTarget, myRtLabel);
        }
      })
      .on('pointerout', (event, datum) => {
        if (!this.drag) {
          d3.select(event.currentTarget)
            .classed('highlight', false)
            .lower();
          event.currentTarget.parentNode.insertBefore(
            event.currentTarget,
            event.currentTarget.parentNode.children[datum.index],
          );
          rtLabel.get(event.currentTarget).remove();
        }
      });
    pathEnter.append('path')
      .classed('curve', true)
      .attr('clip-path', 'url(#clip-evidence)')
      .attr('pathLength', 1)
      .attr('stroke-dashoffset', 1);
    //  MERGE
    const pathMerge = pathEnter.merge(pathUpdate)
      .attr('class', (datum) => {
        return `path ${datum.outcome}`;
      });
    pathMerge.select('.curve')
      .transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('stroke', (datum) => {
        return this.getComputedStyleValue(`---color-${datum.outcome}`);
      })
      .attrTween('d', (datum, index, elements) => {
        const element = elements[index];
        const interpolateA = d3.interpolate(
          (element.a !== undefined) ? element.a : this.a,
          this.a,
        );
        const interpolateZ = d3.interpolate(
          (element.z !== undefined) ? element.z : this.z,
          this.z,
        );
        const interpolateV = d3.interpolate(
          (element.v !== undefined) ? element.v : this.v,
          this.v,
        );
        const interpolateT0 = d3.interpolate(
          (element.t0 !== undefined) ? element.t0 : this.t0,
          this.t0,
        );
        return (time) => {
          element.a = interpolateA(time);
          element.z = interpolateZ(time);
          element.v = interpolateV(time);
          element.t0 = interpolateT0(time);
          const path = this.alignPath(datum.seed, element.a, element.z, element.v, element.t0);
          return evidenceLine(path);
        };
      });
    //  MERGE - Active Animate Paths
    const pathMergeNewActive = pathMerge.filter((datum) => {
      return (datum.animate && !this.paused);
    });
    if (!pathMergeNewActive.empty()) {
      const easeTime = pathMergeNewActive.attr('data-new-trial-ease-time');
      const scaleIn = (time) => {
        return d3.scaleLinear().domain([0, 1]).range([easeTime, 1])(time);
      };
      const scaleOutGenerator = (easeFunction) => {
        return (time) => {
          return d3.scaleLinear()
            .domain([easeFunction(easeTime), 1]).range([0, 1])(easeFunction(time));
        };
      };
      pathMergeNewActive
        .classed('animate', true)
        .select('.curve')
        .attr('stroke-dasharray', 1);
      pathMergeNewActive
        .transition('new')
        .duration((datum) => {
          // scale the RT for viewing pleasure
          return Math.floor((datum.rt * 1.5) * (1 - easeTime));
        })
        .ease(scaleIn)
        .attr('data-new-trial-ease-time', 1)
        .select('.curve')
        .attrTween('stroke-dashoffset', (datum, index, elements) => {
          const element = elements[index];
          const interpolator = d3.interpolate(
            element.getAttribute('stroke-dashoffset'),
            0,
          );
          return (time) => { return interpolator(scaleOutGenerator(d3.easeLinear)(time)); };
        })
        .on('end', (datum, index, elements) => {
          const element = elements[index];
          d3.select(element.parentElement)
            .classed('animate', false)
            .attr('data-new-trial-ease-time', null);
          datum.animate = false;
          this.animate = false;
          this.alignState();
          this.requestUpdate();
          this.dispatchEvent(new CustomEvent('accumulable-response', {
            detail: {
              outcome: datum.outcome,
              data: this.data,
              model: this.model,
            },
            bubbles: true,
          }));
        });
    }
    //  MERGE - Paused Animate Paths
    const pathMergeNewPaused = pathMerge.filter((datum) => {
      return (datum.animate && this.paused);
    });
    if (!pathMergeNewPaused.empty()) {
      const easeTime = pathMergeNewPaused.attr('data-new-trial-ease-time');
      pathMergeNewPaused
        .classed('animate', true)
        .select('.curve')
        .attr('stroke-dasharray', 1)
        .attr('stroke-dashoffset', () => {
          const interpolator = d3.interpolate(1, 0);
          return interpolator(d3.easeLinear(easeTime));
        });
    }
    //  MERGE - Non-Animate Paths
    pathMerge.filter((datum) => { return (!datum.animate); })
      .attr('data-new-trial-ease-time', null);
    //  EXIT
    pathUpdate.exit().remove();

    // Distributions
    //  ENTER
    const distEnter = densityContentEnter.append('g')
      .attr('class', (datum) => { return `dist ${datum.outcome}`; });
    distEnter.append('path')
      .classed('curve', true);
    //  MERGE
    densityContentMerge.select('.dist').select('.curve')
      .transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attrTween('d', (datum, index, elements) => {
        const element = elements[index];
        const interpolateA = d3.interpolate(
          (element.a !== undefined) ? element.a : this.a,
          this.a,
        );
        const interpolateZ = d3.interpolate(
          (element.z !== undefined) ? element.z : this.z,
          this.z,
        );
        const interpolateV = d3.interpolate(
          (element.v !== undefined) ? element.v : this.v,
          this.v,
        );
        const interpolateT0 = d3.interpolate(
          (element.t0 !== undefined) ? element.t0 : this.t0,
          this.t0,
        );
        return (time) => {
          element.a = interpolateA(time);
          element.z = interpolateZ(time);
          element.v = interpolateV(time);
          element.t0 = interpolateT0(time);
          const path = datum.alignDistribution(element.a, element.z, element.v, element.t0);
          return datum.densityLine(path);
        };
      });

    // RTs
    //  DATA-JOIN
    const rtUpdate = evidenceContentMerge.selectAll('.rt')
      .data(this.data.trials);
    //  ENTER
    const rtEnter = rtUpdate.enter().append('g');
    rtEnter.append('line')
      .classed('mark', true)
      .attr('x1', (datum) => {
        return timeScale(datum.rt);
      })
      .attr('x2', (datum) => {
        return timeScale(datum.rt);
      })
      .attr('y1', (datum) => {
        return (datum.outcome === 'correct')
          ? evidenceScale(1) - 0.125 * this.rem
          : evidenceScale(-1) + 0.125 * this.rem;
      })
      .attr('y2', (datum) => {
        return (datum.outcome === 'correct')
          ? evidenceScale(1) - 0.675 * this.rem
          : evidenceScale(-1) + 0.675 * this.rem;
      });
    //  MERGE
    const rtMerge = rtEnter.merge(rtUpdate)
      .attr('class', (datum) => { return `rt ${datum.outcome}`; });
    rtMerge.filter((datum) => { return (!datum.animate); }).select('.mark')
      .transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('stroke', (datum) => {
        return this.getComputedStyleValue(`---color-${datum.outcome}`);
      })
      .attr('x1', (datum) => {
        return timeScale(datum.rt);
      })
      .attr('x2', (datum) => {
        return timeScale(datum.rt);
      })
      .attr('y1', (datum) => {
        return (datum.outcome === 'correct')
          ? evidenceScale(1) - 0.125 * this.rem
          : evidenceScale(-1) + 0.125 * this.rem;
      })
      .attr('y2', (datum) => {
        return (datum.outcome === 'correct')
          ? evidenceScale(1) - 0.675 * this.rem
          : evidenceScale(-1) + 0.675 * this.rem;
      });
    //  EXIT
    rtUpdate.exit().remove();

    // Model Accuracy
    //  DATA-JOIN
    const accuracyUpdate = accuracyContentMerge.selectAll('.accuracy.model')
      .data(
        [this.model.accuracy, 1 - this.model.accuracy],
      );
    //  ENTER
    const accuracyEnter = accuracyUpdate.enter().append('g')
      .attr('class', (_, index) => {
        return `accuracy model ${(index === 0) ? 'correct' : 'error'}`;
      });
    accuracyEnter.append('rect')
      .classed('bar', true)
      .attr('x', 0);
    //  MERGE
    accuracyEnter.merge(accuracyUpdate).select('rect')
      .transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      // ## Tween based on params?
      .attr('y', (datum, index) => {
        return (index === 0) ? accuracyScale(0) : accuracyScale(1 - datum);
      })
      .attr('width', accuracyWidth)
      .attr('height', (datum) => {
        return accuracyScale(datum);
      });
    //  EXIT
    accuracyUpdate.exit().remove();

    // Data Accuracy
    //  DATA-JOIN
    const dataAccuracyUpdate = accuracyContentMerge.selectAll('.accuracy.data')
      .data(
        !Number.isNaN(this.data.accuracy) ? [this.data.accuracy] : [],
      );
    //  ENTER
    const dataAccuracyEnter = dataAccuracyUpdate.enter().append('g')
      .classed('accuracy data', true);
    dataAccuracyEnter.append('line')
      .classed('mark', true);
    //  MERGE
    const dataAccuracyMerge = dataAccuracyEnter.merge(dataAccuracyUpdate)
      .attr('class', (datum) => {
        return `accuracy data ${(datum < this.model.accuracy.correct) ? 'correct' : 'error'}`;
      });
    dataAccuracyMerge.select('.mark')
      .transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      // ## Tween based on params?
      .attr('x1', 0 + 0.25 * this.rem)
      .attr('x2', accuracyWidth - 0.25 * this.rem)
      .attr('y1', (datum) => {
        return accuracyScale(datum) - 1;
      })
      .attr('y2', (datum) => {
        return accuracyScale(datum) - 1;
      });
    //  EXIT
    dataAccuracyUpdate.exit().remove();

    //
    // OVERLAYERS
    //

    // Boundaries
    //  DATA-JOIN
    const boundaryUpdate = evidenceOverlayerMerge.selectAll('.boundary')
      .data([
        {bound: 'upper', value: this.bounds.upper},
        {bound: 'lower', value: this.bounds.lower},
      ]);
    //  ENTER
    const boundaryEnter = boundaryUpdate.enter().append('g')
      .attr('class', (_, index) => {
        return `boundary ${(index === 0) ? 'correct' : 'error'}`;
      });
    boundaryEnter.append('line')
      .classed('line', true);
    //  MERGE
    const boundaryMerge = boundaryEnter.merge(boundaryUpdate)
      .attr('tabindex', this.interactive ? 0 : null)
      .classed('interactive', this.interactive)
      .on('keydown', this.interactive
        ? (event, datum) => {
          if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
            let a = this.a; /* eslint-disable-line prefer-destructuring */
            switch (event.key) {
              case 'ArrowUp':
                a += (datum.bound === 'upper')
                  ? event.shiftKey ? 0.01 : 0.1
                  : event.shiftKey ? -0.01 : -0.1;
                break;
              case 'ArrowDown':
                a += (datum.bound === 'upper')
                  ? event.shiftKey ? -0.01 : -0.1
                  : event.shiftKey ? 0.01 : 0.1;
                break;
              default:
            }
            // Clamp boundaries to visible evidence
            a = (a < 0.01)
              ? 0.01
              : (a > this.scale.evidence.max * 2)
                ? this.scale.evidence.max * 2
                : a;
            this.a = a;
            this.alignState();
            this.dispatchEvent(new CustomEvent('ddm-model-a', {
              detail: {
                a: this.a,
              },
              bubbles: true,
            }));
            event.preventDefault();
          }
        }
        : null);
    if (
      this.firstUpdate
      || changedProperties.has('interactive')
    ) {
      if (this.interactive) {
        boundaryMerge.call(dragBoundary);
      } else {
        boundaryMerge.on('.drag', null);
      }
    }
    boundaryMerge.select('.line')
      .transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('x1', timeScale(this.scale.time.min))
      .attr('x2', timeScale(this.scale.time.max))
      .attr('y1', (datum) => {
        return evidenceScale(datum.value);
      })
      .attr('y2', (datum) => {
        return evidenceScale(datum.value);
      });
    //  EXIT
    boundaryUpdate.exit().remove();

    // Drift Rate
    //  DATA-JOIN
    const driftUpdate = evidenceOverlayerMerge.selectAll('.drift')
      .data([
        {v: this.v, t0: this.t0, startingPoint: this.startingPoint},
      ]);
    //  ENTER
    const driftEnter = driftUpdate.enter().append('g')
      .classed('drift', true);
    driftEnter.append('line')
      .classed('line', true);
    driftEnter.append('path')
      .classed('arrow', true);
    //  MERGE
    const driftMerge = driftEnter.merge(driftUpdate)
      .attr('tabindex', this.interactive ? 0 : null)
      .classed('interactive', this.interactive)
      .on('keydown', this.interactive
        ? (event) => {
          if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
            let v = this.v; /* eslint-disable-line prefer-destructuring */
            switch (event.key) {
              case 'ArrowUp':
                v += event.shiftKey ? 0.01 : 0.1;
                break;
              case 'ArrowDown':
                v -= event.shiftKey ? 0.01 : 0.1;
                break;
              default:
            }
            // Clamp z
            v = (v < 0.01)
              ? 0.01
              : (v > 5)
                ? 5
                : v;
            this.v = v;
            this.alignState();
            this.dispatchEvent(new CustomEvent('ddm-model-v', {
              detail: {
                v: this.v,
              },
              bubbles: true,
            }));
            event.preventDefault();
          }
        }
        : null);
    if (
      this.firstUpdate
      || changedProperties.has('interactive')
    ) {
      if (this.interactive) {
        driftMerge.call(dragDrift);
      } else {
        driftMerge.on('.drag', null);
      }
    }
    const scaleRatio = (evidenceScale(0) - evidenceScale(1)) / (timeScale(1) - timeScale(0));
    driftMerge
      .transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('transform', (datum) => {
        return `translate(${timeScale(datum.t0)}, ${evidenceScale(datum.startingPoint)})
          rotate(${-Math.atan((datum.v / 1000) * scaleRatio) * (180 / Math.PI)})`;
      });
    driftMerge.select('.line')
      .attr('x2', timeScale(200));
    driftMerge.select('.arrow')
      .attr('d', `
        M ${timeScale(200) - this.rem * 0.5},${-this.rem * 0.5}
        l ${this.rem * 0.5},${this.rem * 0.5}
        l ${-this.rem * 0.5},${this.rem * 0.5}
      `);
    //  EXIT
    driftUpdate.exit().remove();

    // Nondecision Time/Starting Point
    //  DATA-JOIN
    const t0zUpdate = evidenceOverlayerMerge.selectAll('.t0z')
      .data([
        {t0: this.t0, startingPoint: this.startingPoint},
      ]);
    //  ENTER
    const t0zEnter = t0zUpdate.enter().append('g')
      .classed('t0z', true);
    t0zEnter.append('line')
      .classed('line', true);
    t0zEnter.append('circle')
      .classed('point', true);
    //  MERGE
    const t0zMerge = t0zEnter.merge(t0zUpdate)
      .attr('tabindex', this.interactive ? 0 : null)
      .classed('interactive', this.interactive)
      .on('keydown', this.interactive
        ? (event) => {
          if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
            let z = this.z; /* eslint-disable-line prefer-destructuring */
            switch (event.key) {
              case 'ArrowUp':
                z += event.shiftKey ? 0.01 : 0.1;
                break;
              case 'ArrowDown':
                z -= event.shiftKey ? 0.01 : 0.1;
                break;
              default:
            }
            // Clamp z
            z = (z < 0.01)
              ? 0.01
              : (z > 0.99)
                ? 0.99
                : z;
            this.z = z;
            this.alignState();
            this.dispatchEvent(new CustomEvent('ddm-model-z', {
              detail: {
                z: this.z,
              },
              bubbles: true,
            }));
            event.preventDefault();
          }
          if (['ArrowLeft', 'ArrowRight'].includes(event.key)) {
            let t0 = this.t0; /* eslint-disable-line prefer-destructuring */
            switch (event.key) {
              case 'ArrowRight':
                t0 += event.shiftKey ? 1 : 10;
                break;
              case 'ArrowLeft':
                t0 -= event.shiftKey ? 1 : 10;
                break;
              default:
            }
            // Clamp t0
            t0 = (t0 < 0)
              ? 0
              : (t0 > 500)
                ? 500
                : t0;
            this.t0 = t0;
            this.alignState();
            this.dispatchEvent(new CustomEvent('ddm-model-t0', {
              detail: {
                t0: this.t0,
              },
              bubbles: true,
            }));
            event.preventDefault();
          }
        }
        : null);
    if (
      this.firstUpdate
      || changedProperties.has('interactive')
    ) {
      if (this.interactive) {
        t0zMerge.call(dragT0z);
      } else {
        t0zMerge.on('.drag', null);
      }
    }
    t0zMerge.select('.line')
      .transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('x1', timeScale(0))
      .attr('x2', (datum) => { return timeScale(datum.t0); })
      .attr('y1', (datum) => { return evidenceScale(datum.startingPoint); })
      .attr('y2', (datum) => { return evidenceScale(datum.startingPoint); });
    t0zMerge.select('.point')
      .transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('cx', (datum) => { return timeScale(datum.t0); })
      .attr('cy', (datum) => { return evidenceScale(datum.startingPoint); });
    //  EXIT
    t0zUpdate.exit().remove();

    // a Measure
    //  DATA-JOIN
    const aUpdate = evidenceOverlayerMerge.selectAll('.measure.a')
      .data(this.measures ? [this.a] : []);
    //  ENTER
    const aEnter = aUpdate.enter().append('g')
      .classed('measure a', true);
    aEnter.append('line')
      .classed('line', true)
      .attr('marker-start', 'url(#measure-arrow)')
      .attr('marker-end', 'url(#measure-arrow)');
    const aLabel = aEnter.append('text')
      .classed('label', true);
    aLabel.append('tspan')
      .classed('a math-var', true)
      .text('a');
    aLabel.append('tspan')
      .classed('equals', true)
      .text(' = ');
    aLabel.append('tspan')
      .classed('value', true);
    //  MERGE
    const aMerge = aEnter.merge(aUpdate);
    aMerge.select('.line')
      .transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('x1', timeScale(this.scale.time.max) - this.rem * 0.75)
      .attr('y1', evidenceScale(this.bounds.upper) + 2)
      .attr('x2', timeScale(this.scale.time.max) - this.rem * 0.75)
      .attr('y2', evidenceScale(this.bounds.lower) - 2);
    const aLabelMerge = aMerge.select('.label')
      .transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('x', timeScale(this.scale.time.max))
      .attr('y', evidenceScale(this.bounds.upper) - this.rem * 0.25);
    aLabelMerge.select('.value')
      .text(d3.format('.2f')(this.a));
    //  EXIT
    aUpdate.exit().remove();

    // z Measure
    //  DATA-JOIN
    const zUpdate = evidenceOverlayerMerge.selectAll('.measure.z')
      .data(this.measures ? [this.z] : []);
    //  ENTER
    const zEnter = zUpdate.enter().append('g')
      .classed('measure z', true);
    zEnter.append('line')
      .classed('line', true)
      .attr('marker-start', 'url(#measure-arrow)')
      .attr('marker-end', 'url(#measure-arrow)');
    const zLabel = zEnter.append('text')
      .classed('label', true);
    zLabel.append('tspan')
      .classed('z math-var', true)
      .text('z');
    zLabel.append('tspan')
      .classed('equals', true)
      .text(' = ');
    zLabel.append('tspan')
      .classed('value', true);
    //  MERGE
    const zMerge = zEnter.merge(zUpdate);
    zMerge.select('.line')
      .transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('x1', timeScale(this.scale.time.min) + this.rem * 0.75)
      .attr('y1', evidenceScale(this.startingPoint) + 2)
      .attr('x2', timeScale(this.scale.time.min) + this.rem * 0.75)
      .attr('y2', evidenceScale(this.bounds.lower) - 2);
    const zLabelMerge = zMerge.select('.label')
      .transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('x', timeScale(this.scale.time.min))
      .attr('y', evidenceScale(this.bounds.lower) + this.rem * 0.125);
    zLabelMerge.select('.value')
      .text(d3.format('.0%')(this.z));
    //  EXIT
    zUpdate.exit().remove();

    // v Measure
    //  DATA-JOIN
    const vUpdate = evidenceOverlayerMerge.selectAll('.measure.v')
      .data(this.measures ? [this.v] : []);
    //  ENTER
    const vEnter = vUpdate.enter().append('g')
      .classed('measure v', true);
    vEnter.append('path')
      .classed('line', true)
      .attr('marker-start', 'url(#measure-arrow)')
      .attr('marker-end', 'url(#measure-arrow)');
    const vLabel = vEnter.append('text')
      .classed('label', true);
    vLabel.append('tspan')
      .classed('v math-var', true)
      .text('v');
    vLabel.append('tspan')
      .classed('equals', true)
      .text(' = ');
    vLabel.append('tspan')
      .classed('value', true);
    //  MERGE
    const driftAngle = Math.atan((this.v / 1000) * scaleRatio);
    const driftHypotenuse = timeScale(200) - timeScale(0) + this.rem * 0.75;
    const driftX = Math.cos(driftAngle) * driftHypotenuse;
    const driftY = Math.sin(driftAngle) * driftHypotenuse;
    const vMerge = vEnter.merge(vUpdate);
    vMerge.select('.line')
      .transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('d', `
        M ${timeScale(this.t0 + 200) + this.rem * 0.75}, ${evidenceScale(this.startingPoint)}
        A ${timeScale(200) - timeScale(0)} ${timeScale(200) - timeScale(0)} 0 0 0 ${timeScale(this.t0) + driftX} ${evidenceScale(this.startingPoint) - driftY}
      `);
    const vLabelMerge = vMerge.select('.label')
      .transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('x', timeScale(this.t0 + 200) + this.rem * 0.5)
      .attr('y', evidenceScale(this.bounds.upper) - this.rem * 0.25);
    vLabelMerge.select('.value')
      .text(d3.format('.2f')(this.v));
    //  EXIT
    vUpdate.exit().remove();

    // t0 Measure
    //  DATA-JOIN
    const t0Update = evidenceOverlayerMerge.selectAll('.measure.t0')
      .data(this.measures ? [this.t0] : []);
    //  ENTER
    const t0Enter = t0Update.enter().append('g')
      .classed('measure t0', true);
    t0Enter.append('line')
      .classed('line', true)
      .attr('marker-start', 'url(#measure-arrow)')
      .attr('marker-end', 'url(#measure-arrow)');
    const t0Label = t0Enter.append('text')
      .classed('label', true);
    t0Label.append('tspan')
      .classed('t0 math-var', true)
      .text('t₀');
    t0Label.append('tspan')
      .classed('equals', true)
      .text(' = ');
    t0Label.append('tspan')
      .classed('value', true);
    //  MERGE
    const t0Merge = t0Enter.merge(t0Update);
    t0Merge.select('.line')
      .transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('x1', timeScale(0) + 2)
      .attr('y1', evidenceScale(this.startingPoint) - this.rem * 0.75)
      .attr('x2', timeScale(this.t0) - 2)
      .attr('y2', evidenceScale(this.startingPoint) - this.rem * 0.75);
    const t0LabelMerge = t0Merge.select('.label')
      .transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('x', timeScale(this.t0) + this.rem * 0.25)
      .attr('y', evidenceScale(this.bounds.upper) - this.rem * 0.25);
    t0LabelMerge.select('.value')
      .text(d3.format('d')(this.t0));
    //  EXIT
    t0Update.exit().remove();

    // Means
    // DATA-JOIN
    const meanUpdate = densityOverlayerMerge.selectAll('.model.mean')
      .data((datum) => {
        return this.means ? [datum] : [];
      });
    //  ENTER
    const meanEnter = meanUpdate.enter().append('g')
      .attr('class', (datum) => { return `model mean ${datum.outcome}`; });
    meanEnter.append('line')
      .classed('indicator', true);
    //  MERGE
    const meanMerge = meanEnter.merge(meanUpdate);
    meanMerge.select('.indicator')
      .transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('x1', (datum) => { return timeScale(datum.model.meanRT); })
      .attr('x2', (datum) => { return timeScale(datum.model.meanRT); })
      .attr('y1', (datum) => { return datum.densityScale(this.scale.density.min); })
      .attr('y2', (datum) => { return datum.densityScale(this.scale.density.max); });
    //  EXIT
    meanUpdate.exit().remove();

    // Data Means
    // DATA-JOIN
    const dataMeanUpdate = densityOverlayerMerge.selectAll('.data.mean')
      .data((datum) => {
        return (this.means && !Number.isNaN(datum.data.meanRT)) ? [datum] : [];
      });
    //  ENTER
    const dataMeanEnter = dataMeanUpdate.enter().append('g')
      .attr('class', (datum) => { return `data mean ${datum.outcome}`; });
    dataMeanEnter.append('line')
      .classed('indicator', true)
      .attr('y1', (datum) => {
        return datum.densityScale(0) + ((datum.outcome === 'correct') ? 0.125 : -0.125) * this.rem;
      })
      .attr('y2', (datum) => {
        return datum.densityScale(0) + ((datum.outcome === 'correct') ? 0.675 : -0.675) * this.rem;
      });
    //  MERGE
    const dataMeanMerge = dataMeanEnter.merge(dataMeanUpdate);
    dataMeanMerge.select('.indicator')
      .transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('x1', (datum) => { return timeScale(datum.data.meanRT); })
      .attr('x2', (datum) => { return timeScale(datum.data.meanRT); })
      .attr('y1', (datum) => {
        return datum.densityScale(0) + ((datum.outcome === 'correct') ? 0.125 : -0.125) * this.rem;
      })
      .attr('y2', (datum) => {
        return datum.densityScale(0) + ((datum.outcome === 'correct') ? 0.675 : -0.675) * this.rem;
      });
    //  EXIT
    dataMeanUpdate.exit().select('.indicator')
      .transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('x1', 0)
      .attr('x2', 0)
      .on('end', (datum, index, elements) => {
        d3.select(elements[index].parentElement).remove();
      });

    // Standard Deviations
    // DATA-JOIN
    const sdUpdate = densityOverlayerMerge.selectAll('.model.sd')
      .data((datum) => {
        return this.sds ? [datum] : [];
      });
    //  ENTER
    const sdEnter = sdUpdate.enter().append('g')
      .attr('class', (datum) => { return `model sd ${datum.outcome}`; });
    sdEnter.append('line')
      .classed('indicator', true)
      .attr('marker-start', 'url(#model-sd-cap)')
      .attr('marker-end', 'url(#model-sd-cap)');
    //  MERGE
    const sdMerge = sdEnter.merge(sdUpdate);
    sdMerge.select('.indicator')
      .transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('x1', (datum) => { return timeScale(datum.model.meanRT - (datum.model.sdRT / 2)); })
      .attr('x2', (datum) => { return timeScale(datum.model.meanRT + (datum.model.sdRT / 2)); })
      .attr('y1', (datum) => { return datum.densityScale(5); })
      .attr('y2', (datum) => { return datum.densityScale(5); });
    //  EXIT
    sdUpdate.exit().remove();

    // Data Standard Deviation
    // DATA-JOIN
    const dataSDUpdate = densityOverlayerMerge.selectAll('.data.sd')
      .data((datum) => {
        return (this.sds && !Number.isNaN(datum.data.meanRT) && !Number.isNaN(datum.data.sdRT))
          ? [datum]
          : [];
      });
    //  ENTER
    const dataSDEnter = dataSDUpdate.enter().append('g')
      .attr('class', (datum) => { return `data sd ${datum.outcome}`; });
    dataSDEnter.append('line')
      .classed('indicator', true)
      .attr('marker-start', 'url(#data-sd-cap)')
      .attr('marker-end', 'url(#data-sd-cap)')
      .attr('y1', (datum) => {
        return datum.densityScale(0) + ((datum.outcome === 'correct') ? 0.375 : -0.375) * this.rem;
      })
      .attr('y2', (datum) => {
        return datum.densityScale(0) + ((datum.outcome === 'correct') ? 0.375 : -0.375) * this.rem;
      });
    //  MERGE
    const dataSDMerge = dataSDEnter.merge(dataSDUpdate);
    dataSDMerge.select('.indicator')
      .transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('x1', (datum) => {
        return timeScale(datum.data.meanRT - (datum.data.sdRT / 2));
      })
      .attr('x2', (datum) => {
        return timeScale(datum.data.meanRT + (datum.data.sdRT / 2));
      })
      .attr('y1', (datum) => {
        return datum.densityScale(0) + ((datum.outcome === 'correct') ? 0.375 : -0.375) * this.rem;
      })
      .attr('y2', (datum) => {
        return datum.densityScale(0) + ((datum.outcome === 'correct') ? 0.375 : -0.375) * this.rem;
      });
    //  EXIT
    dataSDUpdate.exit().select('.indicator')
      .transition()
      .duration(this.drag ? 0 : transitionDuration)
      .ease(d3.easeCubicOut)
      .attr('x1', 0)
      .attr('x2', 0)
      .on('end', (datum, index, elements) => {
        d3.select(elements[index].parentElement).remove();
      });

    this.firstUpdate = false;
  }
}

customElements.define('ddm-model', DDMModel);
