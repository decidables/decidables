
import {css, html} from 'lit';
import * as d3 from 'd3';
import * as d33d from 'd3-3d';
import color from 'color';

import CPTMath from '@decidables/prospectable-math';
import {DecidablesMixinResizeable} from '@decidables/decidables-elements';

import ProspectableElement from '../prospectable-element';

/*
  CPTSpace element
  <cpt-space>

  Attributes:
    interactive: true/false

    surface: true/false
    point: true/false
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
export default class CPTSpace extends DecidablesMixinResizeable(ProspectableElement) {
  static get properties() {
    return {
      surface: {
        attribute: 'surface',
        type: Boolean,
        reflect: true,
      },
      point: {
        attribute: 'point',
        type: Boolean,
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
    this.point = true;
    this.updateable = false;

    this.a = CPTMath.a.DEFAULT;
    this.l = CPTMath.l.DEFAULT;
    this.g = CPTMath.g.DEFAULT;

    this.xl = 0; // Gamble Loss Value
    this.xw = 20;
    this.pw = 0.5;
    this.xs = 10;
    this.response = this.DEFAULT;

    this.range = {
      a: {start: 0.0001, stop: 1, step: 0.05}, // Sure Value
      l: {start: 0, stop: 10, step: 0.5}, // Gamble Win Value
      g: {start: 0, stop: 1, step: 0.05}, // Gamble Win Probability
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
    if (this.updateable) {
      this.response = ((CPTMath.xal2v(this.xw, this.a, this.l) * CPTMath.pg2w(this.pw, this.g))
        + (CPTMath.xal2v(this.xl, this.a, this.l) * (1 - CPTMath.pg2w(this.pw, this.g)))
      ) > CPTMath.xal2v(this.xs, this.a, this.l)
        ? 'gamble'
        : 'sure';
    }

    const pg2wSafe = (p, g) => {
      const w = CPTMath.pg2w(p, g);
      return Number.isNaN(w) ? p : w;
    };

    const diff = (xw, xl, pw, xs, a, l, g) => {
      return CPTMath.xal2v(xw, a, l) * pg2wSafe(pw, g) // Win
        + CPTMath.xal2v(xl, a, l) * (1 - pg2wSafe(pw, g)) // Loss
        - CPTMath.xal2v(xs, a, l); // Sure
    };

    // For each combination of l and g, find the a using bisection method
    this.boundary = d3.range(this.range.l.start, this.range.l.stop + 0.01, this.range.l.step)
      .flatMap((l) => {
        return d3.range(this.range.g.start, this.range.g.stop + 0.01, this.range.g.step)
          .map((g) => {
            let lowA = this.range.a.start;
            let highA = 10; // this.range.a.stop;
            let midA = (lowA + highA) / 2;
            const lowDiff = diff(this.xw, this.xl, this.pw, this.xs, lowA, l, g);
            const highDiff = diff(this.xw, this.xl, this.pw, this.xs, highA, l, g);
            let midDiff;
            if (lowDiff > 0) {
              midA = -Infinity;
            } else if (highDiff < 0) {
              midA = Infinity;
            } else {
              d3.range(0, 15, 1)
                .forEach(() => {
                  midDiff = diff(this.xw, this.xl, this.pw, this.xs, midA, l, g);
                  if (midDiff < 0) {
                    lowA = midA;
                  } else {
                    highA = midA;
                  }
                  midA = (lowA + highA) / 2;
                });
            }
            return {a: midA, l, g};
          });
      });

    const aIn = (point) => {
      return (point?.a >= this.range.a.start) && (point?.a <= this.range.a.stop);
    };

    // Interpolation where map goes off the plot
    this.boundary = this.boundary.map((point, index, map) => {
      // a is in bounds
      if (aIn(point)) {
        return point;
      }

      // sizes
      const columns = d3
        .range(this.range.g.start, this.range.g.stop + 0.01, this.range.g.step).length;
      const rows = d3
        .range(this.range.l.start, this.range.l.stop + 0.01, this.range.l.step).length;

      // neighbours
      const left = ((index % columns) === 0) ? null : map[index - 1];
      const right = ((index % columns) === (columns - 1)) ? null : map[index + 1];
      const top = (Math.trunc(index / columns) === 0) ? null : map[index - columns];
      const bottom = (Math.trunc(index / columns) === (rows - 1)) ? null : map[index + columns];
      const leftIn = aIn(left) ? 1 : 0;
      const rightIn = aIn(right) ? 1 : 0;
      const topIn = aIn(top) ? 1 : 0;
      const bottomIn = aIn(bottom) ? 1 : 0;
      const totalIn = leftIn + rightIn + topIn + bottomIn;

      // consider neighbors
      if (
        (totalIn === 0)
        || ((totalIn === 2) && ((leftIn + rightIn) !== 1))
        || (totalIn === 3)
        || (totalIn === 4)
      ) {
        return point;
      }

      // otherwise interpolate!
      const newPoint = {
        a: (point.a < this.range.a.start) ? this.range.a.start : this.range.a.stop,
        g: point.g,
        l: point.l,
      };
      let other;
      if (totalIn === 1) {
        other = leftIn ? left : rightIn ? right : topIn ? top : bottom;
      } else {
        const other1 = leftIn ? left : right;
        const other2 = topIn ? top : bottom;
        other = {
          a: (other1.a + other2.a) / 2,
          g: (other1.g + other2.g) / 2,
          l: (other1.l + other2.l) / 2,
        };
      }
      const ratio = (newPoint.a - other.a) / (point.a - other.a);
      newPoint.g = other.g + (point.g - other.g) * ratio;
      newPoint.l = other.l + (point.l - other.l) * ratio;
      return newPoint;
    });

    const lConst = this.range.l.stop;
    this.mapXY = d3.range(this.range.a.start, this.range.a.stop + 0.01, this.range.a.step)
      .flatMap((a) => {
        return d3.range(this.range.g.start, this.range.g.stop + 0.01, this.range.g.step)
          .map((g) => {
            const uDiff = diff(this.xw, this.xl, this.pw, this.xs, a, lConst, g);
            return {
              a,
              l: lConst,
              g,
              uDiff,
            };
          });
      });

    const gConst = this.range.g.start;
    this.mapXZ = d3.range(this.range.a.start, this.range.a.stop + 0.01, this.range.a.step)
      .flatMap((a) => {
        return d3.range(this.range.l.start, this.range.l.stop + 0.01, this.range.l.step)
          .map((l) => {
            const uDiff = diff(this.xw, this.xl, this.pw, this.xs, a, l, gConst);
            return {
              a,
              l,
              g: gConst,
              uDiff,
            };
          });
      });

    const aConst = this.range.a.stop;
    this.mapYZ = d3.range(this.range.g.start, this.range.g.stop + 0.01, this.range.g.step)
      .flatMap((g) => {
        return d3.range(this.range.l.start, this.range.l.stop + 0.01, this.range.l.step)
          .map((l) => {
            const uDiff = diff(this.xw, this.xl, this.pw, this.xs, aConst, l, g);
            return {
              a: aConst,
              l,
              g,
              uDiff,
            };
          });
      });
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

        .title tspan {
          alignment-baseline: middle;
        }

        .title .subscript {
          font-size: 66.667%;

          alignment-baseline: initial;
          baseline-shift: sub;
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

        .label-x textPath {
          text-anchor: start;
        }

        .point {
          fill: var(---color-element-background);
          stroke: var(---color-element-emphasis);
          stroke-width: 1px;
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
          fill-opacity: 0.7;
          stroke-opacity: 1;
          stroke-width: 0.5px;
        }

        .map {
          stroke-width: 1px;
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
      .domain([this.range.a.start, this.range.a.stop])
      .range([0, width]);
    const yScale = d3.scaleLinear()
      .domain([this.range.g.start, this.range.g.stop])
      .range([0, -height]);
    const zScale = d3.scaleLinear()
      .domain([this.range.l.start, this.range.l.stop])
      .range([0, -height]);
    const colorElementBackground = color(this.getComputedStyleValue('---color-element-background')).hex();
    const colorBetterDark = color(this.getComputedStyleValue('---color-better-dark')).hex();
    const colorBetter = color(this.getComputedStyleValue('---color-better')).hex();
    const colorNr = color(this.getComputedStyleValue('---color-nr')).hex();
    const colorWorse = color(this.getComputedStyleValue('---color-worse')).hex();
    const colorWorseDark = color(this.getComputedStyleValue('---color-worse-dark')).hex();
    const colorScale = d3.scaleDiverging()
      .domain([this.range.uDiff.start, 0, this.range.uDiff.stop])
      .clamp(true)
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
      x: xScale((this.range.a.start + this.range.a.stop) / 2),
      y: yScale((this.range.g.start + this.range.g.stop) / 2),
      z: zScale((this.range.l.start + this.range.l.stop) / 2),
    };
    const startRotationX = (-0.85 * Math.PI) / 8;
    const startRotationY = (3 * Math.PI) / 8;
    const startRotationZ = 0.0000001; // Avoid d3-3d bug

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
      .classed('main', true)
      .call(svgDrag);
    //  MERGE
    const svgMerge = svgEnter.merge(svgUpdate)
      .attr('viewBox', `0 0 ${elementSize} ${elementSize}`);

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
      {title: 'Alpha (<tspan class="math-var">α</tspan>)', id: 'max', x: xScale.range()[1]},
      {id: 'min', x: xScale.range()[0]},
    ]];
    const yAxis = [[
      {title: 'Gamma (<tspan class="math-var">γ</tspan>)', id: 'max', y: yScale.range()[1]},
      {id: 'min', y: yScale.range()[0]},
    ]];
    const zAxis = [[
      {title: 'Lambda (<tspan class="math-var">λ</tspan>)', id: 'max', z: zScale.range()[1]},
      {id: 'min', z: zScale.range()[0]},
    ]];

    // Axes
    //  DATA-JOIN
    const axisXUpdate = svgMerge.selectAll('.axis-x')
      .data(
        lineStrips3D
          .x((datum) => { return datum.x; })
          .y(() => { return yScale.range()[0]; })
          .z(() => { return zScale.range()[0]; })
          .data(xAxis),
      );
    const axisYUpdate = svgMerge.selectAll('.axis-y')
      .data(
        lineStrips3D
          .x(() => { return xScale.range()[0]; })
          .y((datum) => { return datum.y; })
          .z(() => { return zScale.range()[1]; })
          .data(yAxis),
      );
    const axisZUpdate = svgMerge.selectAll('.axis-z')
      .data(
        lineStrips3D
          .x(() => { return xScale.range()[0]; })
          .y(() => { return yScale.range()[0]; })
          .z((datum) => { return datum.z; })
          .data(zAxis),
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
          .z(() => { return zScale.range()[0] + this.rem * 1.75; })
          .data(xAxis),
      );
    const titlePathYUpdate = svgMerge.selectAll('.title-path-y')
      .data(
        lineStrips3D
          .x(() => { return xScale.range()[0] - this.rem * 1.75; })
          .y((datum) => {
            return datum.id === 'min' ? datum.y + this.rem * 20 : datum.y - this.rem * 20;
          })
          .z(() => { return zScale.range()[1] - this.rem * 1.75; })
          .data(yAxis),
      );
    const titlePathZUpdate = svgMerge.selectAll('.title-path-z')
      .data(
        lineStrips3D
          .x(() => { return xScale.range()[0] - this.rem * 1.75; })
          .y(() => { return yScale.range()[0] + this.rem * 1.75; })
          .z((datum) => {
            return datum.id === 'min' ? datum.z - this.rem * 20 : datum.z + this.rem * 20;
          })
          .data(zAxis),
      );
    const titleXUpdate = svgMerge.selectAll('.title-x')
      .data(
        lineStrips3D
          .x((datum) => {
            return datum.id === 'min' ? datum.x - this.rem * 20 : datum.x + this.rem * 20;
          })
          .y(() => { return yScale.range()[0] + this.rem * 1.75; })
          .z(() => { return zScale.range()[0] + this.rem * 1.75; })
          .data(xAxis),
        (datum) => { return datum[0].title; },
      );
    const titleYUpdate = svgMerge.selectAll('.title-y')
      .data(
        lineStrips3D
          .x(() => { return xScale.range()[0] - this.rem * 1.75; })
          .y((datum) => {
            return datum.id === 'min' ? datum.y + this.rem * 20 : datum.y - this.rem * 20;
          })
          .z(() => { return zScale.range()[1] - this.rem * 1.75; })
          .data(yAxis),
        (datum) => { return datum[0].title; },
      );
    const titleZUpdate = svgMerge.selectAll('.title-z')
      .data(
        lineStrips3D
          .x(() => { return xScale.range()[0] - this.rem * 1.75; })
          .y(() => { return yScale.range()[0] + this.rem * 1.75; })
          .z((datum) => {
            return datum.id === 'min' ? datum.z - this.rem * 20 : datum.z + this.rem * 20;
          })
          .data(zAxis),
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
      .html((datum) => { return datum[0].title; });
    const titleYMerge = titleYEnter.merge(titleYUpdate)
      .select('textPath')
      .html((datum) => { return datum[0].title; });
    const titleZMerge = titleZEnter.merge(titleZUpdate)
      .select('textPath')
      .html((datum) => { return datum[0].title; });
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
          })
          .data(xTicks),
      );
    const ticksYUpdate = svgMerge.selectAll('.tick-y')
      .data(
        lineStrips3D
          .x((datum) => {
            return datum.id === 'min' ? xScale.range()[0] : xScale.range()[0] - this.rem * 0.35;
          })
          .y((datum) => { return datum.y; })
          .z((datum) => {
            return datum.id === 'min' ? zScale.range()[1] : zScale.range()[1] - this.rem * 0.35;
          })
          .data(yTicks),
      );
    const ticksZUpdate = svgMerge.selectAll('.tick-z')
      .data(
        lineStrips3D
          .x((datum) => {
            return datum.id === 'min' ? xScale.range()[0] : xScale.range()[0] - this.rem * 0.35;
          })
          .y((datum) => {
            return datum.id === 'min' ? yScale.range()[0] : yScale.range()[0] + this.rem * 0.35;
          })
          .z((datum) => { return datum.z; })
          .data(zTicks),
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
              ? yScale.range()[0] + this.rem * 4
              : yScale.range()[0] + this.rem * 0.5;
          })
          .z((datum) => {
            return datum.id === 'min'
              ? zScale.range()[0] + this.rem * 4
              : zScale.range()[0] + this.rem * 0.5;
          })
          .data(xTicks),
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
              ? zScale.range()[1] - this.rem * 0.5
              : zScale.range()[1] - this.rem * 4;
          })
          .data(yTicks),
        (datum) => { return datum[0].label; },
      );
    const labelPathsZUpdate = svgMerge.selectAll('.label-path-z')
      .data(
        lineStrips3D
          .x((datum) => {
            return datum.id === 'min'
              ? xScale.range()[0] - this.rem * 4
              : xScale.range()[0] - this.rem * 0.5;
          })
          .y((datum) => {
            return datum.id === 'min'
              ? yScale.range()[0] + this.rem * 4
              : yScale.range()[0] + this.rem * 0.5;
          })
          .z((datum) => { return datum.z; })
          .data(zTicks),
        (datum) => { return datum[0].label; },
      );
    const labelsXUpdate = svgMerge.selectAll('.label-x')
      .data(
        lineStrips3D
          .x((datum) => { return datum.x; })
          .y((datum) => {
            return datum.id === 'min'
              ? yScale.range()[0] + this.rem * 4
              : yScale.range()[0] + this.rem * 0.5;
          })
          .z((datum) => {
            return datum.id === 'min'
              ? zScale.range()[0] + this.rem * 4
              : zScale.range()[0] + this.rem * 0.5;
          })
          .data(xTicks),
        (datum) => { return datum[0].label; },
      );
    const labelsYUpdate = svgMerge.selectAll('.label-y')
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
              ? zScale.range()[1] - this.rem * 0.5
              : zScale.range()[1] - this.rem * 4;
          })
          .data(yTicks),
        (datum) => { return datum[0].label; },
      );
    const labelsZUpdate = svgMerge.selectAll('.label-z')
      .data(
        lineStrips3D
          .x((datum) => {
            return datum.id === 'min'
              ? xScale.range()[0] - this.rem * 4
              : xScale.range()[0] - this.rem * 0.5;
          })
          .y((datum) => {
            return datum.id === 'min'
              ? yScale.range()[0] + this.rem * 4
              : yScale.range()[0] + this.rem * 0.5;
          })
          .z((datum) => { return datum.z; })
          .data(zTicks),
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
      .attr('startOffset', '0%');
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
      .attr('startOffset', '100%');
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
          .x((datum) => { return xScale(datum.a); })
          .y((datum) => { return yScale(datum.g); })
          .z((datum) => { return zScale(datum.l); })
          .data(
            this.point
              ? [{
                a: this.a,
                g: this.g,
                l: this.l,
                response: this.response,
              }]
              : [],
          ),
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

    // Lighting!

    // a, b: point
    // return: vector
    function points2vector(a, b) {
      return {
        x: b.x - a.x,
        y: b.y - a.y,
        z: b.z - a.z,
      };
    }

    // a: vector
    // return: scalar
    function magnitude(a) {
      return Math.sqrt((a.x * a.x) + (a.y * a.y) + (a.z * a.z));
    }

    // a, b: vector
    // return: scalar
    function dotProduct(a, b) {
      return (a.x * b.x) + (a.y * b.y) + (a.z * b.z);
    }

    // a, b: vector
    // return: vector
    function crossProduct(a, b) {
      return {
        x: (a.y * b.z) - (a.z * b.y),
        y: (a.z * b.x) - (a.x * b.z),
        z: (a.x * b.y) - (a.y * b.x),
      };
    }

    // a, b, c: point
    // return: vector
    function points2surfaceNormal(a, b, c) {
      return crossProduct(points2vector(a, b), points2vector(a, c));
    }

    // a, b: vector
    // return: cosine angle
    function cosineAngle(a, b) {
      return dotProduct(a, b) / (magnitude(a) * magnitude(b));
    }

    const lightSource = {x: -0.5, y: 1, z: -1};

    // Decision Boundary
    //  DATA-JOIN
    const boundaryUpdate = svgMerge.selectAll('.boundary')
      .data(
        this.surface
          ? grid3d
            .rows(d3.range(this.range.g.start, this.range.g.stop + 0.01, this.range.g.step).length)
            .x((datum) => { return xScale(datum.a); })
            .y((datum) => { return yScale(datum.g); })
            .z((datum) => { return zScale(datum.l); })
            .data(this.boundary)
            .filter((datum) => {
              return (
                (datum[0].a >= this.range.a.start && datum[0].a <= this.range.a.stop)
                && (datum[1].a >= this.range.a.start && datum[1].a <= this.range.a.stop)
                && (datum[2].a >= this.range.a.start && datum[2].a <= this.range.a.stop)
                && (datum[3].a >= this.range.a.start && datum[3].a <= this.range.a.stop)
              );
            })
          : [],
      );
    //  ENTER
    const boundaryEnter = boundaryUpdate.enter().append('path')
      .attr('class', 'd3-3d boundary');
    //  MERGE
    boundaryEnter.merge(boundaryUpdate)
      .attr('d', grid3d.draw)
      .each((datum) => {
        const surface = datum.ccw
          ? points2surfaceNormal(datum[0].rotated, datum[1].rotated, datum[2].rotated)
          : points2surfaceNormal(datum[2].rotated, datum[1].rotated, datum[0].rotated);
        datum.ratio = cosineAngle(surface, lightSource) - 0.5;
        datum.color = d3.color(colorElementBackground).brighter(datum.ratio);
      })
      .attr('fill', (datum) => { return datum.color; })
      .attr('stroke', (datum) => { return datum.color; });
    //  EXIT
    boundaryUpdate.exit().remove();

    // Decision Maps
    //  DATA-JOIN
    const mapXYUpdate = svgMerge.selectAll('.map-xy')
      .data(
        grid3d
          .rows(d3.range(this.range.g.start, this.range.g.stop + 0.01, this.range.g.step).length)
          .x((datum) => { return xScale(datum.a); })
          .y((datum) => { return yScale(datum.g); })
          .z((datum) => { return zScale(datum.l); })
          .data(this.mapXY),
      );
    const mapXZUpdate = svgMerge.selectAll('.map-xz')
      .data(
        grid3d
          .rows(d3.range(this.range.l.start, this.range.l.stop + 0.01, this.range.l.step).length)
          .x((datum) => { return xScale(datum.a); })
          .y((datum) => { return yScale(datum.g); })
          .z((datum) => { return zScale(datum.l); })
          .data(this.mapXZ),
      );
    const mapYZUpdate = svgMerge.selectAll('.map-yz')
      .data(
        grid3d
          .rows(d3.range(this.range.l.start, this.range.l.stop + 0.01, this.range.l.step).length)
          .x((datum) => { return xScale(datum.a); })
          .y((datum) => { return yScale(datum.g); })
          .z((datum) => { return zScale(datum.l); })
          .data(this.mapYZ),
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
      .each((datum) => {
        const surface = datum.ccw
          ? points2surfaceNormal(datum[0].rotated, datum[1].rotated, datum[2].rotated)
          : points2surfaceNormal(datum[2].rotated, datum[1].rotated, datum[0].rotated);
        datum.ratio = cosineAngle(surface, lightSource) - 0.5;
        datum.color = d3.color(colorScale(datum[0].uDiff)).brighter(datum.ratio);
      })
      .attr('fill', (datum) => { return datum.color; })
      .attr('stroke', (datum) => { return datum.color; });
    mapXZEnter.merge(mapXZUpdate)
      .attr('d', grid3d.draw)
      .each((datum) => {
        const surface = datum.ccw
          ? points2surfaceNormal(datum[0].rotated, datum[1].rotated, datum[2].rotated)
          : points2surfaceNormal(datum[2].rotated, datum[1].rotated, datum[0].rotated);
        datum.ratio = cosineAngle(surface, lightSource) - 0.5;
        datum.color = d3.color(colorScale(datum[0].uDiff)).brighter(datum.ratio);
      })
      .attr('fill', (datum) => { return datum.color; })
      .attr('stroke', (datum) => { return datum.color; });
    mapYZEnter.merge(mapYZUpdate)
      .attr('d', grid3d.draw)
      .each((datum) => {
        const surface = datum.ccw
          ? points2surfaceNormal(datum[0].rotated, datum[1].rotated, datum[2].rotated)
          : points2surfaceNormal(datum[2].rotated, datum[1].rotated, datum[0].rotated);
        datum.ratio = cosineAngle(surface, lightSource) - 0.5;
        datum.color = d3.color(colorScale(datum[0].uDiff)).brighter(datum.ratio);
      })
      .attr('fill', (datum) => { return datum.color; })
      .attr('stroke', (datum) => { return datum.color; });
    //  EXIT
    mapXYUpdate.exit().remove();
    mapXZUpdate.exit().remove();
    mapYZUpdate.exit().remove();

    // Depth sorting
    d3.select(this.renderRoot).selectAll('.d3-3d').sort(d33d.sort);

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
      .html('Difference in Utility (<tspan class="math-var">U<tspan class="subscript">gamble</tspan></tspan> − <tspan class="math-var">U<tspan class="subscript">sure</tspan></tspan>)');
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

customElements.define('cpt-space', CPTSpace);
