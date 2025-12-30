
import {css, html} from 'lit';
import * as d3 from 'd3';
import * as d33d from 'd3-3d';

import CPTMath from '@decidables/prospectable-math';
import {DecidablesMixinResizeable} from '@decidables/decidables-elements';

import ProspectableElement from '../prospectable-element';

/*
  DecisionSpace element
  <decision-space>

  Attributes:
    interactive: true/false

    surface: true/false
    point: 'all', 'first', 'rest', 'none'
    updateable: true/false

    a: numeric [0, 1]
    l: numeric [0, 100]
    g: numeric [0, 1]

    xl: numeric (-infinity, infinity)
    xw: numeric (-infinity, infinity)
    pw: numeric [0, 1]
    xs: numeric (-infinity, infinity)

  Styles:
    ??
*/
export default class DecisionSpace extends DecidablesMixinResizeable(ProspectableElement) {
  static get properties() {
    return {
      surface: {
        attribute: 'surface',
        type: Boolean,
        reflect: true,
      },
      point: {
        attribute: 'point',
        type: String,
        reflect: true,
      },
      updateable: {
        attribute: 'updateable',
        type: Boolean,
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
      g: {
        attribute: 'gamma',
        type: Number,
        reflect: true,
      },

      xl: {
        attribute: 'loss',
        type: Number,
        reflect: true,
      },
      xw: {
        attribute: 'win',
        type: Number,
        reflect: true,
      },
      pw: {
        attribute: 'probability',
        type: Number,
        reflect: true,
      },
      xs: {
        attribute: 'sure',
        type: Number,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    this.firstUpdate = true;

    this.surface = true;
    this.points = ['all', 'first', 'rest', 'none'];
    this.point = 'first';
    this.updateable = false;

    this.a = CPTMath.a.DEFAULT;
    this.l = CPTMath.l.DEFAULT;
    this.g = CPTMath.g.DEFAULT;

    this.xl = 0;
    this.xw = 20;
    this.pw = 0.5;
    this.xs = 10;

    this.response = '';
    this.label = '';

    this.choices = [
      {
        name: 'default',
        xw: this.xw,
        pw: this.pw,
        xs: this.xs,
        response: this.response,
        label: '',
      },
    ];

    this.range = {
      xs: {start: 5, stop: 15, step: 0.5}, // Sure Value
      xw: {start: 10, stop: 30, step: 1}, // Gamble Win Value
      pw: {start: 0, stop: 1, step: 0.05}, // Gamble Win Probability
      uDiff: {start: -20, stop: 20}, // Difference in Utility (Gamble - Sure)
    };

    this.boundary = [];
    this.mapXY = [];
    this.mapXZ = [];
    this.mapYZ = [];

    this.rotationX = 0;
    this.rotationY = 0;
    this.mx = 0;
    this.my = 0;
    this.mouseX = 0;
    this.mouseY = 0;

    this.alignState();
  }

  alignState() {
    this.choices[0].name = 'default';
    this.choices[0].xw = this.xw;
    this.choices[0].pw = this.pw;
    this.choices[0].xs = this.xs;
    this.choices[0].response = this.response;
    this.choices[0].label = this.label;

    if (this.updateable) {
      this.choices.forEach((item) => {
        item.response = (
          (CPTMath.xal2v(item.xw, this.a, this.l) * CPTMath.pg2w(item.pw, this.g))
          + (CPTMath.xal2v(this.xl, this.a, this.l) * (1 - CPTMath.pg2w(item.pw, this.g)))
        ) > CPTMath.xal2v(item.xs, this.a, this.l)
          ? 'gamble'
          : 'sure';
      });
      this.response = this.choices[0].response;
    }

    function diff(xw, xl, pw, xs, a, l, g) {
      return CPTMath.xal2v(xw, a, l) * CPTMath.pg2w(pw, g) // Win
        + CPTMath.xal2v(xl, a, l) * (1 - CPTMath.pg2w(pw, g)) // Loss
        - CPTMath.xal2v(xs, a, l); // Sure
    }

    // For each combination of xs and xw, find the xp using bisection method
    this.boundary = d3.range(this.range.xs.start, this.range.xs.stop + 0.01, this.range.xs.step)
      .flatMap((xs) => {
        return d3.range(this.range.xw.start, this.range.xw.stop + 0.01, this.range.xw.step)
          .map((xw) => {
            let lowP = this.range.pw.start;
            let highP = this.range.pw.stop;
            let midP = (highP - lowP) / 2 + lowP;
            const lowDiff = diff(xw, this.xl, lowP, xs, this.a, this.l, this.g);
            const highDiff = diff(xw, this.xl, highP, xs, this.a, this.l, this.g);
            let midDiff;
            if (lowDiff > 0) {
              midP = -0.1;
            } else if (highDiff < 0) {
              midP = 1.1;
            } else {
              d3.range(0, 10, 1)
                .forEach(() => {
                  midDiff = diff(xw, this.xl, midP, xs, this.a, this.l, this.g);
                  if (midDiff < 0) {
                    lowP = midP;
                  } else {
                    highP = midP;
                  }
                  midP = (highP - lowP) / 2 + lowP;
                });
            }
            return {xw, xs, pw: midP};
            // console.log(`xw: ${xw}, xs: ${xs}, pw: ${midP}, diff: ${midDiff}`);
          });
      });

    const xwConst = this.range.xw.stop;
    this.mapXY = d3.range(this.range.xs.start, this.range.xs.stop + 0.01, this.range.xs.step)
      .flatMap((xs) => {
        return d3.range(this.range.pw.start, this.range.pw.stop + 0.01, this.range.pw.step)
          .map((pw) => {
            const uDiff = diff(xwConst, this.xl, pw, xs, this.a, this.l, this.g);
            return {
              xw: xwConst,
              xs,
              pw,
              uDiff,
            };
          });
      });

    const pwConst = this.range.pw.start;
    this.mapXZ = d3.range(this.range.xs.start, this.range.xs.stop + 0.01, this.range.xs.step)
      .flatMap((xs) => {
        return d3.range(this.range.xw.start, this.range.xw.stop + 0.01, this.range.xw.step)
          .map((xw) => {
            const uDiff = diff(xw, this.xl, pwConst, xs, this.a, this.l, this.g);
            return {
              xw,
              xs,
              pw: pwConst,
              uDiff,
            };
          });
      });

    const xsConst = this.range.xs.start;
    this.mapYZ = d3.range(this.range.pw.start, this.range.pw.stop + 0.01, this.range.pw.step)
      .flatMap((pw) => {
        return d3.range(this.range.xw.start, this.range.xw.stop + 0.01, this.range.xw.step)
          .map((xw) => {
            const uDiff = diff(xw, this.xl, pw, xsConst, this.a, this.l, this.g);
            return {
              xw,
              xs: xsConst,
              pw,
              uDiff,
            };
          });
      });
  }

  clear() {
    this.choices = [{}];

    this.requestUpdate();
  }

  get(name = 'default') {
    const choice = this.choices.find((item) => {
      return (item.name === name);
    });

    return (choice === undefined) ? null : choice;
  }

  set(xw, pw, xs, response, name = 'default', label = '') {
    if (name === 'default') {
      this.xw = xw;
      this.pw = pw;
      this.xs = xs;
      this.response = response;
      this.label = label;
    }
    const choice = this.choices.find((item) => {
      return (item.name === name);
    });
    if (choice === undefined) {
      this.choices.push({
        name: name,
        xw: xw,
        pw: pw,
        xs: xs,
        response: response,
        label: label,
      });
    } else {
      choice.xw = xw;
      choice.pw = pw;
      choice.xs = xs;
      choice.response = response;
      choice.label = label;
    }

    this.requestUpdate();
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: inline-block;

          width: 28rem;
          height: 20rem;
        }

        .main {
          width: 100%;
          height: 100%;

          cursor: grab;
        }

        text {
          /* stylelint-disable property-no-vendor-prefix */
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;

          fill: var(---color-text);
        }

        .axis {
          stroke: var(---color-element-border);
          stroke-width: 1;
        }

        .title textPath {
          font-weight: 600;

          alignment-baseline: middle;
          text-anchor: middle;
        }

        .tick {
          stroke: var(---color-element-border);
          stroke-width: 1;
        }

        .label textPath {
          font-size: 0.75rem;

          alignment-baseline: middle;
          text-anchor: end;
        }

        .label-z textPath {
          text-anchor: start;
        }

        .point {
          fill: var(---color-element-background);
          stroke: var(---color-element-emphasis);
          stroke-width: 1;
          r: 6px;
        }

        .point.sure {
          fill: var(---color-better);
        }

        .point.gamble {
          fill: var(---color-worse);
        }

        .point.nr {
          fill: var(---color-nr);
        }

        .boundary {
          fill: var(---color-element-background);
          fill-opacity: 0.7;
          stroke: var(---color-element-background);
          stroke-opacity: 1;
          stroke-width: 0.5;
        }

        .map {
          stroke-width: 0.5;
        }

        .legend .title {
          font-weight: 600;

          alignment-baseline: middle;
          text-anchor: middle;
        }

        .legend .tick text {
          font-size: 0.75rem;
          font-weight: 400;

          stroke: none;
        }
      `,
    ];
  }

  render() { /* eslint-disable-line class-methods-use-this */
    return html`
    `;
  }

  willUpdate() {
    this.alignState();
  }

  update(changedProperties) {
    super.update(changedProperties);

    // Bail out if we can't get the width/height/rem
    if (Number.isNaN(this.width) || Number.isNaN(this.height) || Number.isNaN(this.rem)) {
      return;
    }

    const elementWidth = this.width;
    const elementHeight = this.height;
    const elementSize = Math.min(elementWidth, elementHeight);

    const margin = {
      top: this.rem * 3,
      bottom: this.rem * 5,
      left: this.rem * 2,
      right: this.rem * 6,
    };
    const height = elementSize - (margin.top + margin.bottom);
    const width = elementSize - (margin.left + margin.right);

    // const transitionDuration = parseInt(
    //   this.getComputedStyleValue('---transition-duration'),
    //   10,
    // );

    // Scales
    const xScale = d3.scaleLinear()
      .domain([this.range.xs.start, this.range.xs.stop])
      .range([0, width]);
    const yScale = d3.scaleLinear()
      .domain([this.range.pw.start, this.range.pw.stop])
      .range([0, -height]);
    const zScale = d3.scaleLinear()
      .domain([this.range.xw.start, this.range.xw.stop])
      .range([0, -height]);
    const colorBetterDark = this.getComputedStyleValue('---color-better-dark');
    const colorBetter = this.getComputedStyleValue('---color-better');
    const colorNr = this.getComputedStyleValue('---color-nr');
    const colorWorse = this.getComputedStyleValue('---color-worse');
    const colorWorseDark = this.getComputedStyleValue('---color-worse-dark');
    const colorScale = d3.scaleDiverging()
      .domain([this.range.uDiff.start, 0, this.range.uDiff.stop])
      .interpolator(
        d3.piecewise([colorBetterDark, colorBetter, colorNr, colorWorse, colorWorseDark]),
      );
    const legendScale = d3.scaleLinear()
      .domain([this.range.uDiff.start, this.range.uDiff.stop])
      .range([0, -elementHeight + this.rem * 4]);

    // 3D Shapes
    const startOrigin = {x: margin.left, y: elementSize - margin.bottom};
    const startScale = 1;
    const startRotationCenter = {
      x: xScale((this.range.xs.start + this.range.xs.stop) / 2),
      y: yScale((this.range.pw.start + this.range.pw.stop) / 2),
      z: zScale((this.range.xw.start + this.range.xw.stop) / 2),
    };
    const startRotationX = -Math.PI / 8;
    const startRotationY = -Math.PI / 8;
    const startRotationZ = 0;

    const lineStrips3D = d33d.lineStrips3D()
      .origin(startOrigin)
      .scale(startScale)
      .rotationCenter(startRotationCenter)
      .rotateX(startRotationX + this.rotationX)
      .rotateY(startRotationY + this.rotationY)
      .rotateZ(startRotationZ);

    const points3d = d33d.points3D()
      .origin(startOrigin)
      .scale(startScale)
      .rotationCenter(startRotationCenter)
      .rotateX(startRotationX + this.rotationX)
      .rotateY(startRotationY + this.rotationY)
      .rotateZ(startRotationZ);

    const grid3d = d33d.gridPlanes3D()
      .origin(startOrigin)
      .scale(startScale)
      .rotationCenter(startRotationCenter)
      .rotateX(startRotationX + this.rotationX)
      .rotateY(startRotationY + this.rotationY)
      .rotateZ(startRotationZ);

    // SVG Drag behaviors
    const svgDrag = d3.drag()
      .on('start', (event) => {
        this.mx = event.x;
        this.my = event.y;
      })
      .on('drag', (event) => {
        this.rotationY = (event.x - this.mx + this.mouseX) * (Math.PI / 230);
        this.rotationX = (event.y - this.my + this.mouseY) * (Math.PI / 230) * -1;

        this.requestUpdate();
      })
      .on('end', (event) => {
        this.mouseX = event.x - this.mx + this.mouseX;
        this.mouseY = event.y - this.my + this.mouseY;
      });

    // SVG
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
      .attr('viewBox', `0 0 ${elementSize} ${elementSize}`)
      .call(svgDrag);

    // Gradient Def
    const gradientEnter = svgEnter.append('defs').append('linearGradient')
      .attr('id', 'gradient-legend')
      // .attr('color-interpolation', 'linearRGB')
      .attr('x1', 0)
      .attr('x2', 0)
      .attr('y1', 1)
      .attr('y2', 0);
    gradientEnter.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', colorBetterDark);
    gradientEnter.append('stop')
      .attr('offset', '25%')
      .attr('stop-color', colorBetter);
    gradientEnter.append('stop')
      .attr('offset', '50%')
      .attr('stop-color', colorNr);
    gradientEnter.append('stop')
      .attr('offset', '75%')
      .attr('stop-color', colorWorse);
    gradientEnter.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', colorWorseDark);

    // Axis & Title Data
    const xAxis = [[
      {title: 'Sure Value', id: 'max', x: xScale.range()[1]},
      {id: 'min', x: xScale.range()[0]},
    ]];
    const yAxis = [[
      {title: 'Win Probability', id: 'max', y: yScale.range()[1]},
      {id: 'min', y: yScale.range()[0]},
    ]];
    const zAxis = [[
      {title: 'Win Value', id: 'max', z: zScale.range()[1]},
      {id: 'min', z: zScale.range()[0]},
    ]];

    // Axes
    //  DATA-JOIN
    const axisXUpdate = svgMerge.selectAll('.axis-x')
      .data(
        lineStrips3D
          .x((datum) => { return datum.x; })
          .y(() => { return yScale.range()[0]; })
          .z(() => { return zScale.range()[0]; })(xAxis),
      );
    const axisYUpdate = svgMerge.selectAll('.axis-y')
      .data(
        lineStrips3D
          .x(() => { return xScale.range()[0]; })
          .y((datum) => { return datum.y; })
          .z(() => { return zScale.range()[0]; })(yAxis),
      );
    const axisZUpdate = svgMerge.selectAll('.axis-z')
      .data(
        lineStrips3D
          .x(() => { return xScale.range()[1]; })
          .y(() => { return yScale.range()[0]; })
          .z((datum) => { return datum.z; })(zAxis),
      );
    //  ENTER
    const axisXEnter = axisXUpdate.enter().append('path')
      .attr('class', 'd3-3d axis axis-x');
    const axisYEnter = axisYUpdate.enter().append('path')
      .attr('class', 'd3-3d axis axis-y');
    const axisZEnter = axisZUpdate.enter().append('path')
      .attr('class', 'd3-3d axis axis-z');
    // MERGE
    const axisXMerge = axisXEnter.merge(axisXUpdate)
      .attr('d', lineStrips3D.draw);
    const axisYMerge = axisYEnter.merge(axisYUpdate)
      .attr('d', lineStrips3D.draw);
    const axisZMerge = axisZEnter.merge(axisZUpdate)
      .attr('d', lineStrips3D.draw);
    // EXIT
    axisXMerge.exit().remove();
    axisYMerge.exit().remove();
    axisZMerge.exit().remove();

    // Axis Titles
    //  DATA-JOIN
    const titlePathXUpdate = svgMerge.selectAll('.title-path-x')
      .data(
        lineStrips3D
          .x((datum) => {
            return datum.id === 'min' ? datum.x - this.rem * 20 : datum.x + this.rem * 20;
          })
          .y(() => { return yScale.range()[0] + this.rem * 1.75; })
          .z(() => { return zScale.range()[0] + this.rem * 1.75; })(xAxis),
      );
    const titlePathYUpdate = svgMerge.selectAll('.title-path-y')
      .data(
        lineStrips3D
          .x(() => { return xScale.range()[0] - this.rem * 1.75; })
          .y((datum) => {
            return datum.id === 'min' ? datum.y + this.rem * 20 : datum.y - this.rem * 20;
          })
          .z(() => { return zScale.range()[0] + this.rem * 1.75; })(yAxis),
      );
    const titlePathZUpdate = svgMerge.selectAll('.title-path-z')
      .data(
        lineStrips3D
          .x(() => { return xScale.range()[1] + this.rem * 1.75; })
          .y(() => { return yScale.range()[0] + this.rem * 1.75; })
          .z((datum) => {
            return datum.id === 'min' ? datum.z + this.rem * 20 : datum.z - this.rem * 20;
          })(zAxis),
      );
    const titleXUpdate = svgMerge.selectAll('.title-x')
      .data(
        xAxis,
        (datum) => { return datum[0].title; },
      );
    const titleYUpdate = svgMerge.selectAll('.title-y')
      .data(
        yAxis,
        (datum) => { return datum[0].title; },
      );
    const titleZUpdate = svgMerge.selectAll('.title-z')
      .data(
        zAxis,
        (datum) => { return datum[0].title; },
      );
    //  ENTER
    const titlePathXEnter = titlePathXUpdate.enter().append('path')
      .attr('class', 'd3-3d title-path title-path-x')
      .attr('id', 'title-x');
    const titlePathYEnter = titlePathYUpdate.enter().append('path')
      .attr('class', 'd3-3d title-path title-path-y')
      .attr('id', 'title-y');
    const titlePathZEnter = titlePathZUpdate.enter().append('path')
      .attr('class', 'd3-3d title-path title-path-z')
      .attr('id', 'title-z');
    const titleXEnter = titleXUpdate.enter().append('text')
      .attr('class', 'd3-3d title title-x');
    titleXEnter
      .append('textPath')
      .attr('href', '#title-x')
      .attr('startOffset', '50%');
    const titleYEnter = titleYUpdate.enter().append('text')
      .attr('class', 'd3-3d title title-y');
    titleYEnter
      .append('textPath')
      .attr('href', '#title-y')
      .attr('startOffset', '50%');
    const titleZEnter = titleZUpdate.enter().append('text')
      .attr('class', 'd3-3d title title-z');
    titleZEnter
      .append('textPath')
      .attr('href', '#title-z')
      .attr('startOffset', '50%');
    // MERGE
    const titlePathXMerge = titlePathXEnter.merge(titlePathXUpdate)
      .attr('d', lineStrips3D.draw);
    const titlePathYMerge = titlePathYEnter.merge(titlePathYUpdate)
      .attr('d', lineStrips3D.draw);
    const titlePathZMerge = titlePathZEnter.merge(titlePathZUpdate)
      .attr('d', lineStrips3D.draw);
    const titleXMerge = titleXEnter.merge(titleXUpdate)
      .select('textPath')
      .text((datum) => { return datum[0].title; });
    const titleYMerge = titleYEnter.merge(titleYUpdate)
      .select('textPath')
      .text((datum) => { return datum[0].title; });
    const titleZMerge = titleZEnter.merge(titleZUpdate)
      .select('textPath')
      .text((datum) => { return datum[0].title; });
    // EXIT
    titlePathXMerge.exit().remove();
    titlePathYMerge.exit().remove();
    titlePathZMerge.exit().remove();
    titleXMerge.exit().remove();
    titleYMerge.exit().remove();
    titleZMerge.exit().remove();

    // Axis Tick & Label Data
    const tickCount = 5;
    const xTicks = xScale.ticks(tickCount).map((tick) => {
      return [
        {id: 'min', label: xScale.tickFormat()(tick), x: xScale(tick)},
        {id: 'max', x: xScale(tick)},
      ];
    });
    const yTicks = yScale.ticks(tickCount).map((tick) => {
      return [
        {id: 'min', label: yScale.tickFormat()(tick), y: yScale(tick)},
        {id: 'max', y: yScale(tick)},
      ];
    });
    const zTicks = zScale.ticks(tickCount).map((tick) => {
      return [
        {id: 'max', label: zScale.tickFormat()(tick), z: zScale(tick)},
        {id: 'min', z: zScale(tick)},
      ];
    });

    // Axis Ticks
    //  DATA-JOIN
    const ticksXUpdate = svgMerge.selectAll('.tick-x')
      .data(
        lineStrips3D
          .x((datum) => { return datum.x; })
          .y((datum) => {
            return datum.id === 'min' ? yScale.range()[0] : yScale.range()[0] + this.rem * 0.35;
          })
          .z((datum) => {
            return datum.id === 'min' ? zScale.range()[0] : zScale.range()[0] + this.rem * 0.35;
          })(xTicks),
      );
    const ticksYUpdate = svgMerge.selectAll('.tick-y')
      .data(
        lineStrips3D
          .x((datum) => {
            return datum.id === 'min' ? xScale.range()[0] : xScale.range()[0] - this.rem * 0.35;
          })
          .y((datum) => { return datum.y; })
          .z((datum) => {
            return datum.id === 'min' ? zScale.range()[0] : zScale.range()[0] + this.rem * 0.35;
          })(yTicks),
      );
    const ticksZUpdate = svgMerge.selectAll('.tick-z')
      .data(
        lineStrips3D
          .x((datum) => {
            return datum.id === 'min' ? xScale.range()[1] : xScale.range()[1] + this.rem * 0.35;
          })
          .y((datum) => {
            return datum.id === 'min' ? yScale.range()[0] : yScale.range()[0] + this.rem * 0.35;
          })
          .z((datum) => { return datum.z; })(zTicks),
      );
    //  ENTER
    const ticksXEnter = ticksXUpdate.enter().append('path')
      .attr('class', 'd3-3d tick tick-x');
    const ticksYEnter = ticksYUpdate.enter().append('path')
      .attr('class', 'd3-3d tick tick-y');
    const ticksZEnter = ticksZUpdate.enter().append('path')
      .attr('class', 'd3-3d tick tick-z');
    // MERGE
    const ticksXMerge = ticksXEnter.merge(ticksXUpdate)
      .attr('d', lineStrips3D.draw);
    const ticksYMerge = ticksYEnter.merge(ticksYUpdate)
      .attr('d', lineStrips3D.draw);
    const ticksZMerge = ticksZEnter.merge(ticksZUpdate)
      .attr('d', lineStrips3D.draw);
    // EXIT
    ticksXMerge.exit().remove();
    ticksYMerge.exit().remove();
    ticksZMerge.exit().remove();

    // Axis Tick Labels
    //  DATA-JOIN
    const labelPathsXUpdate = svgMerge.selectAll('.label-path-x')
      .data(
        lineStrips3D
          .x((datum) => { return datum.x; })
          .y((datum) => {
            return datum.id === 'min'
              ? yScale.range()[0] + this.rem * 0.5
              : yScale.range()[0] + this.rem * 4;
          })
          .z((datum) => {
            return datum.id === 'min'
              ? zScale.range()[0] + this.rem * 0.5
              : zScale.range()[0] + this.rem * 4;
          })(xTicks),
        (datum) => { return datum[0].label; },
      );
    const labelPathsYUpdate = svgMerge.selectAll('.label-path-y')
      .data(
        lineStrips3D
          .x((datum) => {
            return datum.id === 'min'
              ? xScale.range()[0] - this.rem * 0.5
              : xScale.range()[0] - this.rem * 4;
          })
          .y((datum) => { return datum.y; })
          .z((datum) => {
            return datum.id === 'min'
              ? zScale.range()[0] + this.rem * 0.5
              : zScale.range()[0] + this.rem * 4;
          })(yTicks),
        (datum) => { return datum[0].label; },
      );
    const labelPathsZUpdate = svgMerge.selectAll('.label-path-z')
      .data(
        lineStrips3D
          .x((datum) => {
            return datum.id === 'min'
              ? xScale.range()[1] + this.rem * 0.5
              : xScale.range()[1] + this.rem * 4;
          })
          .y((datum) => {
            return datum.id === 'min'
              ? yScale.range()[0] + this.rem * 0.5
              : yScale.range()[0] + this.rem * 4;
          })
          .z((datum) => { return datum.z; })(zTicks),
        (datum) => { return datum[0].label; },
      );
    const labelsXUpdate = svgMerge.selectAll('.label-x')
      .data(
        xTicks,
        (datum) => { return datum[0].label; },
      );
    const labelsYUpdate = svgMerge.selectAll('.label-y')
      .data(
        yTicks,
        (datum) => { return datum[0].label; },
      );
    const labelsZUpdate = svgMerge.selectAll('.label-z')
      .data(
        zTicks,
        (datum) => { return datum[0].label; },
      );
    //  ENTER
    const labelPathsXEnter = labelPathsXUpdate.enter().append('path')
      .attr('class', 'd3-3d label-path label-path-x')
      .attr('id', (datum, index) => { return `label-x-${index}`; });
    const labelPathsYEnter = labelPathsYUpdate.enter().append('path')
      .attr('class', 'd3-3d label-path label-path-y')
      .attr('id', (datum, index) => { return `label-y-${index}`; });
    const labelPathsZEnter = labelPathsZUpdate.enter().append('path')
      .attr('class', 'd3-3d label-path label-path-z')
      .attr('id', (datum, index) => { return `label-z-${index}`; });
    const labelsXEnter = labelsXUpdate.enter().append('text')
      .attr('class', 'd3-3d label label-x');
    labelsXEnter
      .append('textPath')
      .attr('href', (datum, index) => { return `#label-x-${index}`; })
      .attr('startOffset', '100%');
    const labelsYEnter = labelsYUpdate.enter().append('text')
      .attr('class', 'd3-3d label label-y');
    labelsYEnter
      .append('textPath')
      .attr('href', (datum, index) => { return `#label-y-${index}`; })
      .attr('startOffset', '100%');
    const labelsZEnter = labelsZUpdate.enter().append('text')
      .attr('class', 'd3-3d label label-z');
    labelsZEnter
      .append('textPath')
      .attr('href', (datum, index) => { return `#label-z-${index}`; })
      .attr('startOffset', '0%');
    //  MERGE
    const labelPathsXMerge = labelPathsXEnter.merge(labelPathsXUpdate)
      .attr('d', lineStrips3D.draw);
    const labelPathsYMerge = labelPathsYEnter.merge(labelPathsYUpdate)
      .attr('d', lineStrips3D.draw);
    const labelPathsZMerge = labelPathsZEnter.merge(labelPathsZUpdate)
      .attr('d', lineStrips3D.draw);
    const labelsXMerge = labelsXEnter.merge(labelsXUpdate)
      .select('textPath')
      .text((datum) => { return datum[0].label; });
    const labelsYMerge = labelsYEnter.merge(labelsYUpdate)
      .select('textPath')
      .text((datum) => { return datum[0].label; });
    const labelsZMerge = labelsZEnter.merge(labelsZUpdate)
      .select('textPath')
      .text((datum) => { return datum[0].label; });
    // EXIT
    labelPathsXMerge.exit().remove();
    labelPathsYMerge.exit().remove();
    labelPathsZMerge.exit().remove();
    labelsXMerge.exit().remove();
    labelsYMerge.exit().remove();
    labelsZMerge.exit().remove();

    // Points
    //  DATA-JOIN
    const pointsUpdate = svgMerge.selectAll('.point')
      .data(
        points3d
          .x((datum) => { return xScale(datum.xs); })
          .y((datum) => { return yScale(datum.pw); })
          .z((datum) => { return zScale(datum.xw); })(
            this.choices.slice(
              this.point === 'rest' ? 1 : 0,
              this.point === 'first' ? 1 : undefined,
            ),
          ),
        (datum) => { return datum.name; },
      );
    //  ENTER
    const pointsEnter = pointsUpdate.enter().append('circle')
      .attr('class', 'd3-3d point');
    //  MERGE
    pointsEnter.merge(pointsUpdate)
      .attr('class', (datum) => { return `d3-3d point ${datum.response}`; })
      .attr('cx', (datum) => { return datum.projected.x; })
      .attr('cy', (datum) => { return datum.projected.y; });
    //  EXIT
    pointsUpdate.exit().remove();

    // Decision Boundary
    //  DATA-JOIN
    const boundaryUpdate = svgMerge.selectAll('.boundary')
      .data(
        grid3d
          .rows(d3.range(this.range.xw.start, this.range.xw.stop + 0.01, this.range.xw.step).length)
          .x((datum) => { return xScale(datum.xs); })
          .y((datum) => { return yScale(datum.pw); })
          .z((datum) => { return zScale(datum.xw); })(this.boundary)
          .filter((datum) => {
            return (
              (datum[0].pw >= 0 && datum[0].pw <= 1)
              && (datum[1].pw >= 0 && datum[1].pw <= 1)
              && (datum[2].pw >= 0 && datum[2].pw <= 1)
              && (datum[3].pw >= 0 && datum[3].pw <= 1)
            );
          }),
      );
    //  ENTER
    const boundaryEnter = boundaryUpdate.enter().append('path')
      .attr('class', 'd3-3d boundary');
    //  MERGE
    boundaryEnter.merge(boundaryUpdate)
      .attr('d', grid3d.draw);
    //  EXIT
    boundaryUpdate.exit().remove();

    // Decision Maps
    //  DATA-JOIN
    const mapXYUpdate = svgMerge.selectAll('.map-xy')
      .data(
        grid3d
          .rows(d3.range(this.range.pw.start, this.range.pw.stop + 0.01, this.range.pw.step).length)
          .x((datum) => { return xScale(datum.xs); })
          .y((datum) => { return yScale(datum.pw); })
          .z((datum) => { return zScale(datum.xw); })(this.mapXY),
      );
    const mapXZUpdate = svgMerge.selectAll('.map-xz')
      .data(
        grid3d
          .rows(d3.range(this.range.xw.start, this.range.xw.stop + 0.01, this.range.xw.step).length)
          .x((datum) => { return xScale(datum.xs); })
          .y((datum) => { return yScale(datum.pw); })
          .z((datum) => { return zScale(datum.xw); })(this.mapXZ),
      );
    const mapYZUpdate = svgMerge.selectAll('.map-yz')
      .data(
        grid3d
          .rows(d3.range(this.range.xw.start, this.range.xw.stop + 0.01, this.range.xw.step).length)
          .x((datum) => { return xScale(datum.xs); })
          .y((datum) => { return yScale(datum.pw); })
          .z((datum) => { return zScale(datum.xw); })(this.mapYZ),
      );
    //  ENTER
    const mapXYEnter = mapXYUpdate.enter().append('path')
      .attr('class', 'd3-3d map map-xy');
    const mapXZEnter = mapXZUpdate.enter().append('path')
      .attr('class', 'd3-3d map map-xz');
    const mapYZEnter = mapYZUpdate.enter().append('path')
      .attr('class', 'd3-3d map map-yz');
    //  MERGE
    mapXYEnter.merge(mapXYUpdate)
      .attr('d', grid3d.draw)
      .attr('fill', (datum) => { return colorScale(datum[0].uDiff); })
      .attr('stroke', (datum) => { return colorScale(datum[0].uDiff); });
    mapXZEnter.merge(mapXZUpdate)
      .attr('d', grid3d.draw)
      .attr('fill', (datum) => { return colorScale(datum[0].uDiff); })
      .attr('stroke', (datum) => { return colorScale(datum[0].uDiff); });
    mapYZEnter.merge(mapYZUpdate)
      .attr('d', grid3d.draw)
      .attr('fill', (datum) => { return colorScale(datum[0].uDiff); })
      .attr('stroke', (datum) => { return colorScale(datum[0].uDiff); });
    //  EXIT
    mapXYUpdate.exit().remove();
    mapXZUpdate.exit().remove();
    mapYZUpdate.exit().remove();

    // Depth sorting
    d3.select(this.renderRoot).selectAll('.d3-3d').sort(points3d.sort);

    // Color Legend
    //  DATA-JOIN
    const legendUpdate = svgMerge.selectAll('.legend')
      .data([{
        x: elementSize + this.rem * 2,
        y: elementSize - this.rem * 2,
        rem: this.rem,
      }]);
    //  ENTER
    const legendEnter = legendUpdate.enter().append('g')
      .attr('class', 'legend');
    //  MERGE
    const legendMerge = legendEnter.merge(legendUpdate)
      .attr('transform', (datum) => { return `translate(${datum.x} ${datum.y})`; });
    //  EXIT
    legendUpdate.exit().remove();

    // Color Legend Axis
    //  ENTER
    legendEnter.append('g')
      .attr('class', 'axis axis-legend');
    //  MERGE
    legendMerge.select('.axis-legend')
      .call(d3.axisLeft(legendScale).ticks(7))
      .attr('font-size', null)
      .attr('font-family', null);

    // Color Legend Title
    //  ENTER
    legendEnter.append('text')
      .attr('class', 'title title-legend')
      .text('Difference in Utility (Gamble - Sure)');
    //  MERGE
    legendMerge.select('.title-legend')
      .attr(
        'transform',
        `translate(${-this.rem * 2.5},${(legendScale(this.range.uDiff.start) + legendScale(this.range.uDiff.stop)) / 2})rotate(-90)`,
      );

    // Color Legend Bar
    //  ENTER
    legendEnter.append('rect')
      .attr('class', 'bar bar-legend')
      .attr('fill', 'url("#gradient-legend")');
    //  MERGE
    legendMerge.select('.bar-legend')
      .attr('x', 0)
      .attr('y', legendScale(this.range.uDiff.stop))
      .attr('width', this.rem)
      .attr('height', legendScale(this.range.uDiff.start) - legendScale(this.range.uDiff.stop));

    this.firstUpdate = false;
  }
}

customElements.define('decision-space', DecisionSpace);


// //////////////////////////////////////////////////////////////////
// if (this.surface) {
//     {
//       name: 'Difference in Subjective Utility',
//       type: 'isosurface',
//       x: this.decisionSpace.xs,
//       y: this.decisionSpace.xw,
//       z: this.decisionSpace.pw,
//       value: this.decisionSpace.uDiff,
//       caps: {
//         x: {show: false},
//         y: {show: false},
//         z: {show: false},
//       },
//       coloraxis: 'coloraxis',
//       isomin: -30,
//       isomax: 30,
//       showscale: false,
//       slices: {
//         x: {show: true, locations: [this.range.xs.stop]},
//         y: {show: true, locations: [this.range.xw.stop]},
//         z: {show: true, locations: [this.range.pw.start]},
//       },
//       surface: {show: false},
//     },
//   );
// }
//
// const layout = {
//   coloraxis: {
//     cmin: -30,
//     cmax: 30,
//     colorbar: {
//       title: {
//         font: {
//           size: this.rem * 1.125,
//         },
//         text: 'Difference in Utility (Gamble - Sure)',
//         side: 'right',
//       },
//       thickness: 16,
//       ypad: 32,
//     },
//     colorscale: [
//       [0, 'rgb(35, 35, 104)'],
//       [0.35, 'rgb(69,69,208)'],
//       [0.5, 'rgb(190,190,190)'],
//       [0.65, 'rgb(240,50,230)'],
//       [1, 'rgb(120,25,115)'],
//     ],
//   },
//     xaxis: {
//       backgroundcolor: colorElementBackground,
//     },
//     yaxis: {
//       backgroundcolor: colorElementBackground,
//     },
//     zaxis: {
//       backgroundcolor: colorElementBackground,
//     },
//   },
// };
// //////////////////////////////////////////////////////////////////
