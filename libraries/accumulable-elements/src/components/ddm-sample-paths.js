
import {html, css} from 'lit';
import * as d3 from 'd3';

import DDMMath from '@decidables/accumulable-math';
import {DecidablesMixinResizeable} from '@decidables/decidables-elements';

import AccumulableElement from '../accumulable-element';

/*
  DDMSamplePaths element
  <ddm-sample-paths>

  Attributes:
    interactive: true/false

    a: numeric (-infinity, infinity)
    d: numeric [0, infinity)
    k: numeric [0, infinity)
    label: string

  Styles:
    ??
*/
export default class DDMSamplePaths extends DecidablesMixinResizeable(AccumulableElement) {
  static get properties() {
    return {
      trials: {
        attribute: 'trials',
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

      s: {
        attribute: false, // within-trial variability in drift rate
        type: Number,
        reflect: false,
      },

      sz: {
        attribute: false, // starting point range
        type: Number,
        reflect: false,
      },
      eta: {
        attribute: false, // standard deviation for across-trial variability in drift rate
        type: Number,
        reflect: false,
      },
      st: {
        attribute: false, // nondecision-time range
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

    this.trials = 10;
    this.a = 1;
    this.z = 0.5;
    this.v = 0.2;
    this.t0 = 100;

    this.s = 1;

    // this.sz = null;
    // this.eta = null;
    // this.st = null;

    this.precision = 0.005;
    this.seed = d3.randomUniform(0, 1)();
    this.random = null;

    this.bounds = null;
    this.startingPoint = null;
    this.paths = null;
    this.accuracy = null;
    this.dists = null;

    this.alignState();
  }

  alignState() {
    this.random = d3.randomUniform.source(d3.randomLcg(this.seed))(0, 1);

    this.bounds = {
      lower: -this.a / 2,
      upper: this.a / 2,
    };
    this.startingPoint = this.a * this.z - this.a / 2;
    const drift = this.v * this.precision;

    let correct = 0;
    this.paths = Array.from({length: this.trials}, () => {
      const seed = (this.random() / 1000) * 997; // HACK to avoid randomLcg repetition
      const random = d3.randomNormal.source(d3.randomLcg(seed))(0, this.precision ** 0.5);
      const path = [];
      path.push(
        {t: this.t0, e: this.startingPoint},
      );
      while ((path.at(-1).e > this.bounds.lower) && (path.at(-1).e < this.bounds.upper)) {
        path.push({
          t: path.at(-1).t + (this.precision * 1000),
          e: path.at(-1).e + drift + this.s * random(),
        });
      }
      const outcome = (path.at(-1).e <= this.bounds.lower)
        ? 'error'
        : (path.at(-1).e >= this.bounds.upper)
          ? 'correct'
          : 'nr';
      correct += (outcome === 'correct') ? 1 : 0;
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
        seed, path, rt, outcome,
      };
    });
    this.paths.accuracy = correct / this.trials;

    this.accuracy = {
      correct: DDMMath.azvs2pC(this.a, this.z, this.v, this.s),
      error: DDMMath.azvs2pE(this.a, this.z, this.v, this.s),
    };

    this.meanRT = {
      correct: this.t0 + DDMMath.azvs2mC(this.a, this.z, this.v, this.s) * 1000,
      error: this.t0 + DDMMath.azvs2mE(this.a, this.z, this.v, this.s) * 1000,
    };

    this.dists = {correct: [], error: []};
    this.dists.correct.push(
      {t: 0, d: 0},
      {t: this.t0, d: 0},
    );
    this.dists.error.push(
      {t: 0, d: 0},
      {t: this.t0, d: 0},
    );
    for (
      let i = this.scale.time.min;
      i <= (this.scale.time.max - (this.t0));
      i += this.scale.time.step) {
      if (i > 0) {
        this.dists.correct.push({
          t: this.t0 + i,
          d: DDMMath.tazvs2gC(i / 1000, this.a, this.z, this.v, this.s) / this.accuracy.correct,
        });
        this.dists.error.push({
          t: this.t0 + i,
          d: DDMMath.tazvs2gE(i / 1000, this.a, this.z, this.v, this.s) / this.accuracy.error,
        });
      }
    }
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

        .tick {
          font-size: 0.75rem;
        }

        .axis path,
        .axis line {
          stroke: var(---color-element-border);
          /* shape-rendering: crispEdges; */
        }

        .curve {
          fill: none;
          stroke: var(---color-element-emphasis);
          stroke-width: 2;
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

        .dist.correct .curve {
          fill: var(---color-correct-light);
          stroke: var(---color-correct);
        }

        .dist.error .curve {
          fill: var(---color-error-light);
          stroke: var(---color-error);
        }

        .rt.correct .mark {
          stroke: var(---color-correct);
          stroke-width: 1;
        }

        .rt.error .mark {
          stroke: var(---color-error);
          stroke-width: 1;
        }

        .path.correct .curve {
          opacity: 0.5;

          stroke: var(---color-correct);
        }

        .path.error .curve {
          opacity: 0.5;

          stroke: var(---color-error);
        }

        .boundary {
          fill: none;
          stroke: var(---color-element-emphasis);
          stroke-width: 2;
        }

        .boundary.interactive {
          cursor: ns-resize;
          
          filter: url("#shadow-2");
          outline: none;
        }

        .boundary.interactive:hover {
          filter: url("#shadow-4");
        }

        .boundary.interactive:active {
          filter: url("#shadow-8");
        }

        :host(.keyboard) .boundary.interactive:focus {
          filter: url("#shadow-8");
        }

        .t0z.interactive {
          cursor: move;

          filter: url("#shadow-2");
          outline: none;
        }

        .t0z.interactive:hover {
          filter: url("#shadow-4");
        }

        .t0z.interactive:active {
          filter: url("#shadow-8");
        }

        :host(.keyboard) .t0z.interactive:focus {
          filter: url("#shadow-8");
        }

        .line {
          fill: none;
          stroke: var(---color-element-emphasis);
          stroke-width: 2;
        }

        .drift {
          pointer-events: visible;
        }

        .drift .line {
          fill: none;
          stroke: var(---color-element-emphasis);
          stroke-dasharray: 8 4;
          stroke-width: 2;
        }

        .drift .arrow {
          fill: none;
          stroke: var(---color-element-emphasis);
          stroke-width: 2;
        }

        .drift.interactive {
          cursor: ns-resize;
          
          filter: url("#shadow-2");
          outline: none;
        }

        .drift.interactive:hover {
          filter: url("#shadow-4");
        }

        .drift.interactive:active {
          filter: url("#shadow-8");
        }

        :host(.keyboard) .drift.interactive:focus {
          filter: url("#shadow-8");
        }

        .handle {
          fill: var(---color-element-emphasis);

          r: 6px;
        }

        .bar {
          fill: none;
          stroke: var(---color-element-emphasis);
          stroke-width: 2;
        }

        .bar.interactive {
          cursor: ew-resize;
          
          filter: url("#shadow-2");
          outline: none;
        }

        .bar.interactive:hover {
          filter: url("#shadow-4");
        }

        .bar.interactive:active {
          filter: url("#shadow-8");
        }

        :host(.keyboard) .bar.interactive:focus {
          filter: url("#shadow-8");
        }

        .accuracy.correct .bar {
          fill: var(---color-correct);
          stroke: none;
        }

        .accuracy.error .bar {
          fill: var(---color-error);
          stroke: none;
        }

        .percent-correct .mark.correct {
          stroke: var(---color-correct-light);
          stroke-width: 2;
        }

        .percent-correct .mark.error {
          stroke: var(---color-error-light);
          stroke-width: 2;
        }

        .measure-a .line {
          stroke: var(---color-a);
          stroke-width: 2;
        }

        .measure-a .label {
          font-size: 0.75rem;

          dominant-baseline: auto;
          text-anchor: end;
          fill: currentColor;
        }

        .measure-z .line {
          stroke: var(---color-z);
          stroke-width: 2;
        }

        .measure-z .label {
          font-size: 0.75rem;

          dominant-baseline: hanging;
          text-anchor: start;
          fill: currentColor;
        }

        .measure-v .line {
          stroke: var(---color-v);
          stroke-width: 2;
        }

        .measure-v .label {
          font-size: 0.75rem;

          dominant-baseline: auto;
          text-anchor: start;
          fill: currentColor;
        }

        .measure-t0 .line {
          stroke: var(---color-t0);
          stroke-width: 2;
        }

        .measure-t0 .label {
          font-size: 0.75rem;

          dominant-baseline: auto;
          text-anchor: middle;
          fill: currentColor;
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
        this.dispatchEvent(new CustomEvent('ddm-sample-paths-t0', {
          detail: {
            t0: this.t0,
          },
          bubbles: true,
        }));
        this.dispatchEvent(new CustomEvent('ddm-sample-paths-z', {
          detail: {
            z: this.z,
          },
          bubbles: true,
        }));
      })
      .on('end', (event) => {
        const element = event.currentTarget;
        d3.select(element).classed('dragging', false);
      });

    // Drift Rate Drag behavior
    const dragDrift = d3.drag()
      .on('start', (event) => {
        const element = event.currentTarget;
        d3.select(element).classed('dragging', true);
      })
      .on('drag', (event) => {
        this.drag = true;
        let v = (evidenceScale.invert(event.y) / (timeScale.invert(event.x) - this.t0)) * 1000;
        // Clamp drift rate
        v = (v < 0.01)
          ? 0.01
          : (v > 5)
            ? 5
            : v;
        this.v = v;
        this.alignState();
        this.dispatchEvent(new CustomEvent('ddm-sample-paths-v', {
          detail: {
            v: this.v,
          },
          bubbles: true,
        }));
      })
      .on('end', (event) => {
        const element = event.currentTarget;
        d3.select(element).classed('dragging', false);
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
        this.dispatchEvent(new CustomEvent('ddm-sample-paths-a', {
          detail: {
            a: this.a,
          },
          bubbles: true,
        }));
      })
      .on('end', (event) => {
        const element = event.currentTarget;
        d3.select(element).classed('dragging', false);
      });

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
    svgEnter.html(AccumulableElement.svgDefs);
    //  MERGE
    const svgMerge = svgEnter.merge(svgUpdate)
      .attr('viewBox', `0 0 ${elementWidth} ${elementHeight}`);

    // Arrow head marker for measures
    svgEnter.append('defs').append('marker')
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

    // Plots
    //  ENTER
    const evidencePlotEnter = svgEnter.append('g')
      .classed('plot evidence', true);
    const correctDensityPlotEnter = svgEnter.append('g')
      .classed('plot density correct', true);
    const errorDensityPlotEnter = svgEnter.append('g')
      .classed('plot density error', true);
    const accuracyPlotEnter = svgEnter.append('g')
      .classed('plot accuracy', true);
    //  MERGE
    const evidencePlotMerge = svgMerge.select('.plot.evidence')
      .attr('transform', `translate(${margin.left}, ${margin.top + densityHeight + gapHeight})`);
    const correctDensityPlotMerge = svgMerge.select('.plot.density.correct')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);
    const errorDensityPlotMerge = svgMerge.select('.plot.density.error')
      .attr(
        'transform',
        `translate(${margin.left}, ${margin.top + densityHeight + evidenceHeight + 2 * gapHeight})`,
      );
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

    // Underlayers
    //  ENTER
    const evidenceUnderlayerEnter = evidencePlotEnter.append('g')
      .classed('underlayer', true);
    const correctDensityUnderlayerEnter = correctDensityPlotEnter.append('g')
      .classed('underlayer', true);
    const errorDensityUnderlayerEnter = errorDensityPlotEnter.append('g')
      .classed('underlayer', true);
    const accuracyUnderlayerEnter = accuracyPlotEnter.append('g')
      .classed('underlayer', true);
    //  MERGE
    const evidenceUnderlayerMerge = evidencePlotMerge.select('.underlayer');
    const correctDensityUnderlayerMerge = correctDensityPlotMerge.select('.underlayer');
    const errorDensityUnderlayerMerge = errorDensityPlotMerge.select('.underlayer');
    const accuracyUnderlayerMerge = accuracyPlotMerge.select('.underlayer');

    // Backgrounds
    //  ENTER
    evidenceUnderlayerEnter.append('rect')
      .classed('background', true);
    correctDensityUnderlayerEnter.append('rect')
      .classed('background', true);
    errorDensityUnderlayerEnter.append('rect')
      .classed('background', true);
    //  MERGE
    evidenceUnderlayerMerge.select('.background')
      .attr('y', evidenceScale(this.bounds.upper))
      .attr('height', evidenceScale(this.bounds.lower) - evidenceScale(this.bounds.upper))
      .attr('width', timeWidth);
    correctDensityUnderlayerEnter.select('.background')
      .attr('height', densityHeight)
      .attr('width', timeWidth);
    errorDensityUnderlayerEnter.select('.background')
      .attr('height', densityHeight)
      .attr('width', timeWidth);

    // X Axes (Time)
    //  ENTER
    errorDensityUnderlayerEnter.append('g')
      .classed('axis time', true);
    //  MERGE
    const timeScaleMerge = errorDensityUnderlayerMerge.select('.axis.time')
      .attr('transform', `translate(0, ${densityHeight + (0.25 * this.rem)})`);
    const timeScaleTransition = timeScaleMerge.transition()
      .duration(transitionDuration * 2) // Extra long transition!
      .ease(d3.easeCubicOut)
      .call(d3.axisBottom(timeScale))
      .attr('font-size', null)
      .attr('font-family', null);
    timeScaleTransition.selectAll('line, path')
      .attr('stroke', null);

    // X Axes Titles
    //  ENTER
    const timeTitleEnter = errorDensityUnderlayerEnter.append('text')
      .classed('title time', true)
      .attr('text-anchor', 'middle');
    timeTitleEnter.append('tspan')
      .classed('name', true)
      .text('Time (ms)');
    //  MERGE
    errorDensityUnderlayerMerge.select('.title.time')
      .attr(
        'transform',
        `translate(${(timeWidth / 2)}, ${(densityHeight + (2.5 * this.rem))})`,
      );

    // Y Axes (Evidence, Density, Accuracy)
    //  ENTER
    evidenceUnderlayerEnter.append('g')
      .classed('axis evidence', true);
    correctDensityUnderlayerEnter.append('g')
      .classed('axis density correct', true);
    errorDensityUnderlayerEnter.append('g')
      .classed('axis density error', true);
    accuracyUnderlayerEnter.append('g')
      .classed('axis accuracy', true);
    // MERGE
    const evidenceScaleMerge = evidenceUnderlayerMerge.select('.axis.evidence')
      .attr('transform', `translate(${-0.25 * this.rem}, 0)`);
    const correctDensityScaleMerge = correctDensityUnderlayerMerge.select('.axis.density.correct')
      .attr('transform', `translate(${-0.25 * this.rem}, 0)`);
    const errorDensityScaleMerge = errorDensityUnderlayerMerge.select('.axis.density.error')
      .attr('transform', `translate(${-0.25 * this.rem}, 0)`);
    const accuracyScaleMerge = accuracyUnderlayerMerge.select('.axis.accuracy')
      .attr('transform', `translate(${accuracyWidth + (0.25 * this.rem)}, 0)`);
    const evidenceScaleTransition = evidenceScaleMerge.transition()
      .duration(transitionDuration * 2) // Extra long transition!
      .ease(d3.easeCubicOut)
      .call(d3.axisLeft(evidenceScale))
      .attr('font-size', null)
      .attr('font-family', null);
    const correctDensityScaleTransition = correctDensityScaleMerge.transition()
      .duration(transitionDuration * 2) // Extra long transition!
      .ease(d3.easeCubicOut)
      .call(d3.axisLeft(correctDensityScale).ticks(2))
      .attr('font-size', null)
      .attr('font-family', null);
    const errorDensityScaleTransition = errorDensityScaleMerge.transition()
      .duration(transitionDuration * 2) // Extra long transition!
      .ease(d3.easeCubicOut)
      .call(d3.axisLeft(errorDensityScale).ticks(2))
      .attr('font-size', null)
      .attr('font-family', null);
    const accuracyScaleTransition = accuracyScaleMerge.transition()
      .duration(transitionDuration * 2) // Extra long transition!
      .ease(d3.easeCubicOut)
      .call(d3.axisRight(accuracyScale))
      .attr('font-size', null)
      .attr('font-family', null);
    evidenceScaleTransition.selectAll('line, path')
      .attr('stroke', null);
    correctDensityScaleTransition.selectAll('line, path')
      .attr('stroke', null);
    errorDensityScaleTransition.selectAll('line, path')
      .attr('stroke', null);
    accuracyScaleTransition.selectAll('line, path')
      .attr('stroke', null);

    // Y Axes Titles (Evidence & Density)
    //  ENTER
    const evidenceTitleEnter = evidenceUnderlayerEnter.append('text')
      .classed('title evidence', true)
      .attr('text-anchor', 'middle');
    const correctDensityTitleEnter = correctDensityUnderlayerEnter.append('text')
      .classed('title density correct', true)
      .attr('text-anchor', 'middle');
    const errorDensityTitleEnter = errorDensityUnderlayerEnter.append('text')
      .classed('title density error', true)
      .attr('text-anchor', 'middle');
    const accuracyTitleEnter = accuracyUnderlayerEnter.append('text')
      .classed('title accuracy', true)
      .attr('text-anchor', 'middle');
    evidenceTitleEnter.append('tspan')
      .classed('name', true)
      .text('Evidence');
    correctDensityTitleEnter.append('tspan')
      .classed('name', true)
      .text('Density');
    errorDensityTitleEnter.append('tspan')
      .classed('name', true)
      .text('Density');
    accuracyTitleEnter.append('tspan')
      .classed('name', true)
      .text('Accuracy');
    //  MERGE
    evidenceUnderlayerMerge.select('.title.evidence')
      .attr('transform', `translate(${-2.5 * this.rem}, ${(evidenceHeight / 2)})rotate(-90)`);
    correctDensityUnderlayerMerge.select('.title.density.correct')
      .attr('transform', `translate(${-2.5 * this.rem}, ${(densityHeight / 2)})rotate(-90)`);
    errorDensityUnderlayerMerge.select('.title.density.error')
      .attr('transform', `translate(${-2.5 * this.rem}, ${(densityHeight / 2)})rotate(-90)`);
    accuracyUnderlayerMerge.select('.title.accuracy')
      .attr('transform', `translate(${accuracyWidth + 2.25 * this.rem}, ${(height / 2)})rotate(90)`);

    // Contents
    //  ENTER
    evidencePlotEnter.append('g')
      .classed('content', true)
      .append('g').classed('paths', true);
    correctDensityPlotEnter.append('g')
      .classed('content', true);
    errorDensityPlotEnter.append('g')
      .classed('content', true);
    accuracyPlotEnter.append('g')
      .classed('content', true);
    //  MERGE
    const evidenceContentMerge = evidencePlotMerge.select('.content');
    const correctDensityContentMerge = correctDensityPlotMerge.select('.content');
    const errorDensityContentMerge = errorDensityPlotMerge.select('.content');
    const accuracyContentMerge = accuracyPlotMerge.select('.content');

    // Paths
    //  DATA-JOIN
    const pathUpdate = evidenceContentMerge.select('.paths').selectAll('.path')
      .data(
        this.paths,
      );
    //  ENTER
    const pathEnter = pathUpdate.enter().append('g')
      .classed('path', true);
    pathEnter.append('path')
      .classed('curve', true)
      .attr('clip-path', 'url(#clip-evidence)');
    //  MERGE
    const pathMerge = pathEnter.merge(pathUpdate)
      .attr('class', (datum) => {
        return `path ${datum.outcome}`;
      });
    pathMerge.select('.curve')
      .attr('d', (datum) => {
        return evidenceLine(datum.path);
      });
    //  EXIT
    pathUpdate.exit().remove();

    // Nondecision Time/Starting Point
    //  DATA-JOIN
    const t0zUpdate = evidenceContentMerge.selectAll('.t0z')
      .data([
        {t0: this.t0, startingPoint: this.startingPoint},
      ]);
    //  ENTER
    const t0zEnter = t0zUpdate.enter().append('g')
      .classed('t0z', true);
    t0zEnter.append('line')
      .classed('line', true);
    t0zEnter.append('circle')
      .classed('handle', true);
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
            this.dispatchEvent(new CustomEvent('ddm-sample-paths-z', {
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
            this.dispatchEvent(new CustomEvent('ddm-sample-paths-t0', {
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
      .attr('x1', timeScale(0))
      .attr('x2', (datum) => { return timeScale(datum.t0); })
      .attr('y1', (datum) => { return evidenceScale(datum.startingPoint); })
      .attr('y2', (datum) => { return evidenceScale(datum.startingPoint); });
    t0zMerge.select('.handle')
      .attr('cx', (datum) => { return timeScale(datum.t0); })
      .attr('cy', (datum) => { return evidenceScale(datum.startingPoint); });

    // Drift Rate
    //  DATA-JOIN
    const driftUpdate = evidenceContentMerge.selectAll('.drift')
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
            this.dispatchEvent(new CustomEvent('ddm-sample-paths-v', {
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

    // Boundaries
    //  DATA-JOIN
    const boundaryUpdate = evidenceContentMerge.selectAll('.boundary')
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
      .classed('border', true);
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
            this.dispatchEvent(new CustomEvent('ddm-sample-paths-a', {
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
    boundaryMerge.select('.border')
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

    // a Measure
    //  DATA-JOIN
    const aUpdate = evidenceContentMerge.selectAll('.measure-a')
      .data([this.a]);
    //  ENTER
    const aEnter = aUpdate.enter().append('g')
      .classed('measure-a', true);
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
      .attr('x1', timeScale(this.scale.time.max) - this.rem * 0.75)
      .attr('y1', evidenceScale(this.bounds.upper) + 2)
      .attr('x2', timeScale(this.scale.time.max) - this.rem * 0.75)
      .attr('y2', evidenceScale(this.bounds.lower) - 2);
    const aLabelMerge = aMerge.select('.label')
      .attr('x', timeScale(this.scale.time.max))
      .attr('y', evidenceScale(this.bounds.upper) - this.rem * 0.25);
    aLabelMerge.select('.value')
      .text(d3.format('.2f')(this.a));
    //  EXIT
    aUpdate.exit().remove();

    // z Measure
    //  DATA-JOIN
    const zUpdate = evidenceContentMerge.selectAll('.measure-z')
      .data([this.z]);
    //  ENTER
    const zEnter = zUpdate.enter().append('g')
      .classed('measure-z', true);
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
      .attr('x1', timeScale(this.scale.time.min) + this.rem * 0.75)
      .attr('y1', evidenceScale(this.startingPoint) + 2)
      .attr('x2', timeScale(this.scale.time.min) + this.rem * 0.75)
      .attr('y2', evidenceScale(this.bounds.lower) - 2);
    const zLabelMerge = zMerge.select('.label')
      .attr('x', timeScale(this.scale.time.min))
      .attr('y', evidenceScale(this.bounds.lower) + this.rem * 0.125);
    zLabelMerge.select('.value')
      .text(d3.format('.0%')(this.z));
    //  EXIT
    zUpdate.exit().remove();

    // v Measure
    //  DATA-JOIN
    const vUpdate = evidenceContentMerge.selectAll('.measure-v')
      .data([this.v]);
    //  ENTER
    const vEnter = vUpdate.enter().append('g')
      .classed('measure-v', true);
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
      .attr('d', `
        M ${timeScale(this.t0 + 200) + this.rem * 0.75}, ${evidenceScale(this.startingPoint)}
        A ${timeScale(200) - timeScale(0)} ${timeScale(200) - timeScale(0)} 0 0 0 ${timeScale(this.t0) + driftX} ${evidenceScale(this.startingPoint) - driftY}
      `);
    const vLabelMerge = vMerge.select('.label')
      .attr('x', timeScale(this.t0 + 200) + this.rem * 0.5)
      .attr('y', evidenceScale(this.bounds.upper) - this.rem * 0.25);
    vLabelMerge.select('.value')
      .text(d3.format('.2f')(this.v));
    //  EXIT
    vUpdate.exit().remove();

    // t0 Measure
    //  DATA-JOIN
    const t0Update = evidenceContentMerge.selectAll('.measure-t0')
      .data([this.t0]);
    //  ENTER
    const t0Enter = t0Update.enter().append('g')
      .classed('measure-t0', true);
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
      .attr('x1', timeScale(0) + 2)
      .attr('y1', evidenceScale(this.startingPoint) - this.rem * 0.75)
      .attr('x2', timeScale(this.t0) - 2)
      .attr('y2', evidenceScale(this.startingPoint) - this.rem * 0.75);
    const t0LabelMerge = t0Merge.select('.label')
      .attr('x', timeScale(this.t0) + this.rem * 0.25)
      .attr('y', evidenceScale(this.bounds.upper) - this.rem * 0.25);
    t0LabelMerge.select('.value')
      .text(d3.format('d')(this.t0));
    //  EXIT
    t0Update.exit().remove();

    // Distributions
    // DATA-JOIN
    const correctDistUpdate = correctDensityContentMerge.selectAll('.dist.correct')
      .data(
        [this.dists.correct],
      );
    const errorDistUpdate = errorDensityContentMerge.selectAll('.dist.error')
      .data(
        [this.dists.error],
      );
    //  ENTER
    const correctDistEnter = correctDistUpdate.enter().append('g')
      .classed('dist correct', true);
    const errorDistEnter = errorDistUpdate.enter().append('g')
      .classed('dist error', true);
    correctDistEnter.append('path')
      .classed('curve', true);
    errorDistEnter.append('path')
      .classed('curve', true);
    //  MERGE
    const correctDistMerge = correctDistEnter.merge(correctDistUpdate);
    correctDistMerge.select('.curve')
      .attr('d', (datum) => {
        return correctDensityLine(datum);
      });
    const errorDistMerge = errorDistEnter.merge(errorDistUpdate);
    errorDistMerge.select('.curve')
      .attr('d', (datum) => {
        return errorDensityLine(datum);
      });
    //  EXIT
    correctDistUpdate.exit().remove();
    errorDistUpdate.exit().remove();

    // Means
    // DATA-JOIN
    const correctMeanUpdate = correctDensityContentMerge.selectAll('.mean.correct')
      .data(
        [this.meanRT.correct],
      );
    const errorMeanUpdate = errorDensityContentMerge.selectAll('.mean.error')
      .data(
        [this.meanRT.error],
      );
    //  ENTER
    const correctMeanEnter = correctMeanUpdate.enter().append('g')
      .classed('mean correct', true);
    const errorMeanEnter = errorMeanUpdate.enter().append('g')
      .classed('mean error', true);
    correctMeanEnter.append('line')
      .classed('line', true);
    errorMeanEnter.append('line')
      .classed('line', true);
    //  MERGE
    const correctMeanMerge = correctMeanEnter.merge(correctMeanUpdate);
    correctMeanMerge.select('.line')
      .attr('x1', (datum) => {
        return timeScale(datum);
      })
      .attr('x2', (datum) => {
        return timeScale(datum);
      })
      .attr('y1', correctDensityScale(this.scale.density.min))
      .attr('y2', correctDensityScale(this.scale.density.max));
    const errorMeanMerge = errorMeanEnter.merge(errorMeanUpdate);
    errorMeanMerge.select('.line')
      .attr('x1', (datum) => {
        return timeScale(datum);
      })
      .attr('x2', (datum) => {
        return timeScale(datum);
      })
      .attr('y1', errorDensityScale(this.scale.density.min))
      .attr('y2', errorDensityScale(this.scale.density.max));
    //  EXIT
    correctMeanUpdate.exit().remove();
    errorMeanUpdate.exit().remove();

    // RTs
    //  DATA-JOIN
    const correctRtUpdate = correctDensityContentMerge.selectAll('.rt.correct')
      .data(
        this.paths.filter((path) => {
          return ((path.outcome === 'correct') && (path.rt < this.scale.time.max));
        }),
      );
    const errorRtUpdate = errorDensityContentMerge.selectAll('.rt.error')
      .data(
        this.paths.filter((path) => {
          return ((path.outcome === 'error') && (path.rt < this.scale.time.max));
        }),
      );
    //  ENTER
    const correctRtEnter = correctRtUpdate.enter().append('g')
      .classed('rt correct', true);
    const errorRtEnter = errorRtUpdate.enter().append('g')
      .classed('rt error', true);
    correctRtEnter.append('line')
      .classed('mark', true);
    errorRtEnter.append('line')
      .classed('mark', true);
    //  MERGE
    const correctRtMerge = correctRtEnter.merge(correctRtUpdate);
    correctRtMerge.select('.mark')
      .attr('x1', (datum) => {
        return timeScale(datum.rt);
      })
      .attr('x2', (datum) => {
        return timeScale(datum.rt);
      })
      .attr('y1', correctDensityScale(0) + 0.125 * this.rem)
      .attr('y2', correctDensityScale(0) + 0.675 * this.rem);
    const errorRtMerge = errorRtEnter.merge(errorRtUpdate);
    errorRtMerge.select('.mark')
      .attr('x1', (datum) => {
        return timeScale(datum.rt);
      })
      .attr('x2', (datum) => {
        return timeScale(datum.rt);
      })
      .attr('y1', errorDensityScale(0) - 0.125 * this.rem)
      .attr('y2', errorDensityScale(0) - 0.675 * this.rem);
    //  EXIT
    correctRtUpdate.exit().remove();
    errorRtUpdate.exit().remove();

    // Accuracy
    //  DATA-JOIN
    const accuracyUpdate = accuracyContentMerge.selectAll('.accuracy')
      .data(
        [this.accuracy.correct, this.accuracy.error],
      );
    //  ENTER
    const accuracyEnter = accuracyUpdate.enter().append('g')
      .attr('class', (_, index) => {
        return `accuracy ${(index === 0) ? 'correct' : 'error'}`;
      });
    accuracyEnter.append('rect')
      .classed('bar', true)
      .attr('x', 0);
    //  MERGE
    const accuracyMerge = accuracyEnter.merge(accuracyUpdate);
    accuracyMerge.select('rect')
      .attr('y', (datum, index) => {
        return (index === 0) ? accuracyScale(0) : accuracyScale(1 - datum);
      })
      .attr('width', accuracyWidth)
      .attr('height', (datum) => {
        return accuracyScale(datum);
      });

    // Sample Accuracy
    //  DATA-JOIN
    const percentCorrectUpdate = accuracyContentMerge.selectAll('.percent-correct')
      .data(
        [this.paths.accuracy],
      );
    //  ENTER
    const percentCorrectEnter = percentCorrectUpdate.enter().append('g')
      .classed('percent-correct', true);
    percentCorrectEnter.append('line')
      .classed('mark', true);
    //  MERGE
    const percentCorrectMerge = percentCorrectEnter.merge(percentCorrectUpdate);
    percentCorrectMerge.select('.mark')
      .attr('class', (datum) => { return `mark ${(datum < this.accuracy.correct) ? 'correct' : 'error'}`; })
      .attr('x1', 0 + 0.25 * this.rem)
      .attr('x2', accuracyWidth - 0.25 * this.rem)
      .attr('y1', (datum) => {
        return accuracyScale(datum) - 1;
      })
      .attr('y2', (datum) => {
        return accuracyScale(datum) - 1;
      });

    this.drag = false;
    this.firstUpdate = false;
  }
}

customElements.define('ddm-sample-paths', DDMSamplePaths);
