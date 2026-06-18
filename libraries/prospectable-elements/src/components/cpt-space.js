
import {css, html} from 'lit';
import * as d3 from 'd3';
import * as d33d from 'd3-3d';
import color from 'color';

import CPTMath from '@decidables/prospectable-math';
import DecidablesMixinResizeable from '@decidables/decidables-elements/mixins/mixin-resizeable';

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
              class: 'map-xy',
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
              class: 'map-xz',
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
              class: 'map-yz',
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

        .title {
          font-weight: 600;

          text-anchor: middle;
        }

        .title .subscript {
          font-size: 66.667%;

          baseline-shift: -25%;
        }

        .tick {
          stroke: var(---color-element-border);
          stroke-width: 1;
        }

        .label {
          font-size: 0.75rem;

          text-anchor: middle;
        }

        .label-y {
          dominant-baseline: central;
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

    // Axes
    //  DATA-JOIN
    const axesUpdate = svgMerge.selectAll('.axis')
      .data(lineStrips3D.data([
        [
          {
            class: 'axis-x',
            x: xScale.range()[0],
            y: yScale.range()[0],
            z: zScale.range()[0],
          },
          {
            class: 'axis-x',
            x: xScale.range()[1],
            y: yScale.range()[0],
            z: zScale.range()[0],
          },
        ],
        [
          {
            class: 'axis-y',
            x: xScale.range()[0],
            y: yScale.range()[0],
            z: zScale.range()[1],
          },
          {
            class: 'axis-y',
            x: xScale.range()[0],
            y: yScale.range()[1],
            z: zScale.range()[1],
          },
        ],
        [
          {
            class: 'axis-z',
            x: xScale.range()[0],
            y: yScale.range()[0],
            z: zScale.range()[0],
          },
          {
            class: 'axis-z',
            x: xScale.range()[0],
            y: yScale.range()[0],
            z: zScale.range()[1],
          },
        ],
      ]));
    //  ENTER
    const axesEnter = axesUpdate.enter().append('path')
      .attr('class', (datum) => { return `d3-3d axis ${datum[0].class}`; });
    // MERGE
    const axesMerge = axesEnter.merge(axesUpdate)
      .attr('d', lineStrips3D.draw);
    // EXIT
    axesMerge.exit().remove();

    // Axis Titles
    const titleOffset = this.rem * 1.5;
    //  DATA-JOIN
    const titlesUpdate = svgMerge.selectAll('.title')
      .data(points3d.data([
        {
          class: 'title-x',
          title: 'Marginal Utility (<tspan class="math-var">α</tspan>)',
          x: xScale.range()[0] + (xScale.range()[1] - xScale.range()[0]) / 2,
          y: yScale.range()[0] + titleOffset,
          z: zScale.range()[0] + titleOffset,
          transform: 'rotateX(45deg)',
        },
        {
          class: 'title-y',
          title: 'Probability Weighting (<tspan class="math-var">γ</tspan>)',
          x: xScale.range()[0] - titleOffset,
          y: yScale.range()[0] + (yScale.range()[1] - yScale.range()[0]) / 2,
          z: zScale.range()[1] - titleOffset,
          transform: 'rotateZ(-90deg) rotateX(45deg)',
        },
        {
          class: 'title-z',
          title: 'Loss Aversion (<tspan class="math-var">λ</tspan>)',
          x: xScale.range()[0] - titleOffset,
          y: yScale.range()[0] + titleOffset,
          z: zScale.range()[0] + (zScale.range()[1] - zScale.range()[0]) / 2,
          transform: 'rotateY(-90deg) rotateX(45deg)',
        },
      ]));
    //  ENTER
    const titlesEnter = titlesUpdate.enter().append('text')
      .attr('class', (datum) => { return `d3-3d title ${datum.class}`; });
    // MERGE
    const titlesMerge = titlesEnter.merge(titlesUpdate)
      .style('transform', (datum) => {
        return `
          translate3D(${startOrigin.x + startRotationCenter.x}px, ${startOrigin.y + startRotationCenter.y}px, ${startRotationCenter.z}px)
          rotateX(${startRotationX + this.rotationX}rad)
          rotateY(${startRotationY + this.rotationY}rad)
          rotateZ(${startRotationZ}rad)
          translate3D(${-(startOrigin.x + startRotationCenter.x)}px, ${-(startOrigin.y + startRotationCenter.y)}px, ${-(startRotationCenter.z)}px)
          translate3D(${startOrigin.x + datum.x}px, ${startOrigin.y + datum.y}px, ${datum.z}px)
          ${datum.transform}
        `;
      })
      .html((datum) => { return datum.title; });
    // EXIT
    titlesMerge.exit().remove();

    // Axis Ticks
    const tickCount = 5;
    const tickLength = this.rem * 0.25;
    //  DATA-JOIN
    const ticksUpdate = svgMerge.selectAll('.tick')
      .data(lineStrips3D.data([
        ...xScale.ticks(tickCount).map((tick) => {
          return [
            {
              class: 'tick-x',
              x: xScale(tick),
              y: yScale.range()[0],
              z: zScale.range()[0],
            },
            {
              class: 'tick-x',
              x: xScale(tick),
              y: yScale.range()[0] + tickLength,
              z: zScale.range()[0] + tickLength,
            },
          ];
        }),
        ...yScale.ticks(tickCount).map((tick) => {
          return [
            {
              class: 'tick-y',
              x: xScale.range()[0],
              y: yScale(tick),
              z: zScale.range()[1],
            },
            {
              class: 'tick-y',
              x: xScale.range()[0] - tickLength,
              y: yScale(tick),
              z: zScale.range()[1] - tickLength,
            },
          ];
        }),
        ...zScale.ticks(tickCount).map((tick) => {
          return [
            {
              class: 'tick-z',
              x: xScale.range()[0],
              y: yScale.range()[0],
              z: zScale(tick),
            },
            {
              class: 'tick-z',
              x: xScale.range()[0] - tickLength,
              y: yScale.range()[0] + tickLength,
              z: zScale(tick),
            },
          ];
        }),
      ]));
    //  ENTER
    const ticksEnter = ticksUpdate.enter().append('path')
      .attr('class', (datum) => { return `d3-3d tick ${datum.class}`; });
    // MERGE
    const ticksMerge = ticksEnter.merge(ticksUpdate)
      .attr('d', lineStrips3D.draw);
    // EXIT
    ticksMerge.exit().remove();

    // Axis Tick Labels
    const labelCount = 5;
    const labelOffset = this.rem * 0.75;
    //  DATA-JOIN
    const labelsUpdate = svgMerge.selectAll('.label')
      .data(
        points3d.data([
          ...xScale.ticks(labelCount).map((tick) => {
            return {
              class: 'label-x',
              label: xScale.tickFormat()(tick),
              x: xScale(tick),
              y: yScale.range()[0] + labelOffset,
              z: zScale.range()[0] + labelOffset,
              transform: 'rotateX(45deg)',
            };
          }),
          ...yScale.ticks(labelCount).map((tick) => {
            return {
              class: 'label-y',
              label: yScale.tickFormat()(tick),
              x: xScale.range()[0] - labelOffset,
              y: yScale(tick),
              z: zScale.range()[1] - labelOffset,
              transform: 'rotateY(-45deg)',
            };
          }),
          ...zScale.ticks(labelCount).map((tick) => {
            return {
              class: 'label-z',
              label: zScale.tickFormat()(tick),
              x: xScale.range()[0] - labelOffset,
              y: yScale.range()[0] + labelOffset,
              z: zScale(tick),
              transform: 'rotateY(-90deg) rotateX(45deg)',
            };
          }),
        ]),
        (datum) => { return `${datum.class}: ${datum.label}`; },
      );
    //  ENTER
    const labelsEnter = labelsUpdate.enter().append('text')
      .attr('class', (datum) => { return `d3-3d label ${datum.class}`; });
    //  MERGE
    const labelsMerge = labelsEnter.merge(labelsUpdate)
      .style('transform', (datum) => {
        return `
          translate3D(${startOrigin.x + startRotationCenter.x}px, ${startOrigin.y + startRotationCenter.y}px, ${startRotationCenter.z}px)
          rotateX(${startRotationX + this.rotationX}rad)
          rotateY(${startRotationY + this.rotationY}rad)
          rotateZ(${startRotationZ}rad)
          translate3D(${-(startOrigin.x + startRotationCenter.x)}px, ${-(startOrigin.y + startRotationCenter.y)}px, ${-(startRotationCenter.z)}px)
          translate3D(${startOrigin.x + datum.x}px, ${startOrigin.y + datum.y}px, ${datum.z}px)
          ${datum.transform}
        `;
      })
      .text((datum) => { return datum.label; });
    // EXIT
    labelsMerge.exit().remove();

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
    const mapsUpdate = svgMerge.selectAll('.map')
      .data([
        ...grid3d
          .rows(d3.range(this.range.g.start, this.range.g.stop + 0.01, this.range.g.step).length)
          .x((datum) => { return xScale(datum.a); })
          .y((datum) => { return yScale(datum.g); })
          .z((datum) => { return zScale(datum.l); })
          .data(this.mapXY),
        ...grid3d
          .rows(d3.range(this.range.l.start, this.range.l.stop + 0.01, this.range.l.step).length)
          .x((datum) => { return xScale(datum.a); })
          .y((datum) => { return yScale(datum.g); })
          .z((datum) => { return zScale(datum.l); })
          .data(this.mapXZ),
        ...grid3d
          .rows(d3.range(this.range.l.start, this.range.l.stop + 0.01, this.range.l.step).length)
          .x((datum) => { return xScale(datum.a); })
          .y((datum) => { return yScale(datum.g); })
          .z((datum) => { return zScale(datum.l); })
          .data(this.mapYZ),
      ]);
    //  ENTER
    const mapsEnter = mapsUpdate.enter().append('path')
      .attr('class', (datum) => { return `d3-3d map ${datum.class}`; });
    //  MERGE
    mapsEnter.merge(mapsUpdate)
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
    mapsUpdate.exit().remove();

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
        `translate(${-this.rem * 2.25},${(legendScale(this.range.uDiff.start) + legendScale(this.range.uDiff.stop)) / 2})rotate(-90)`,
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
