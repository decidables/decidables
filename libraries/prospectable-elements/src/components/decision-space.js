
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

    this.range = {};
    this.range.xs = {start: 5, stop: 15, step: 0.5}; // Sure Value
    this.range.xw = {start: 10, stop: 30, step: 1}; // Gamble Win Value
    this.range.pw = {start: 0, stop: 1, step: 0.05}; // Gamble Win Probability

    this.decisionSpace = [];


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

    this.decisionSpace = {
      xs: [],
      xw: [],
      pw: [],
      uDiff: [],
    };
    d3.range(this.range.xs.start, this.range.xs.stop + 0.01, this.range.xs.step)
      .forEach((xs) => {
        d3.range(this.range.xw.start, this.range.xw.stop + 0.01, this.range.xw.step)
          .forEach((xw) => {
            d3.range(this.range.pw.start, this.range.pw.stop + 0.01, this.range.pw.step)
              .forEach((pw) => {
                this.decisionSpace.xs.push(xs);
                this.decisionSpace.xw.push(xw);
                this.decisionSpace.pw.push(pw);

                const uDiff = CPTMath.xal2v(xw, this.a, this.l) * CPTMath.pg2w(pw, this.g) // Win
                  + CPTMath.xal2v(this.xl, this.a, this.l) * (1 - CPTMath.pg2w(pw, this.g)) // Loss
                  - CPTMath.xal2v(xs, this.a, this.l); // Sure

                this.decisionSpace.uDiff.push(uDiff);
              });
          });
      });

    // /////////////////////////////
    const xGrid = [];

    const j = 10;

    for (let z = -j; z < j; z += 1) {
      for (let x = -j; x < j; x += 1) {
        xGrid.push({x: x, y: 1, z: z});
      }
    }

    this.data = {
      xGrid,
    };
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

        .tick {
          stroke: var(---color-element-border);
          stroke-width: 1;
        }

        .label {
          font-size: 0.75rem;

          alignment-baseline: middle;
          text-anchor: end;
        }

        .title {
          font-weight: 600;

          alignment-baseline: middle;
          text-anchor: middle;
        }

        .point {
          fill: var(---color-better);
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
      top: 1 * this.rem,
      bottom: 4 * this.rem,
      left: 1 * this.rem,
      right: 4 * this.rem,
    };
    const height = elementSize - (margin.top + margin.bottom);
    const width = elementSize - (margin.left + margin.right);

    // const transitionDuration = parseInt(
    //   this.getComputedStyleValue('---transition-duration'),
    //   10,
    // );

    // const colorElementEmphasis = this.getComputedStyleValue('---color-element-emphasis');
    // const colorWorse = this.getComputedStyleValue('---color-worse');
    // const colorBetter = this.getComputedStyleValue('---color-better');
    // const colorNr = this.getComputedStyleValue('---color-nr');

    const startOrigin = {x: margin.left, y: elementSize - margin.bottom};
    const startScale = 1;
    const startRotationX = -Math.PI / 8;
    const startRotationY = -Math.PI / 8;
    const startRotationZ = 0;

    const lineStrips3D = d33d.lineStrips3D()
      .origin(startOrigin)
      .scale(startScale)
      .rotateX(startRotationX + this.rotationX)
      .rotateY(startRotationY + this.rotationY)
      .rotateZ(startRotationZ);

    const points3d = d33d.points3D()
      .origin(startOrigin)
      .scale(startScale)
      .rotateX(startRotationX + this.rotationX)
      .rotateY(startRotationY + this.rotationY)
      .rotateZ(startRotationZ);

    // const grid3d = d33d.gridPlanes3D()
    //   .rows(20)
    //   .origin(origin)
    //   .rotateY(startAngle)
    //   .rotateX(-startAngle)
    //   .scale(scale);

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
      // .each((datum, index, nodes) => {
      //   // Filters for shadows
      //   render(ProspectableElement.svgFilters, nodes[index]);
      // });
    //  MERGE
    const svgMerge = svgEnter.merge(svgUpdate)
      .attr('viewBox', `0 0 ${elementSize} ${elementSize}`)
      .call(svgDrag);

    // Scales
    const xScale = d3.scaleLinear()
      .domain([this.range.xs.start, this.range.xs.stop])
      .range([0, width]);
    this.xScale = xScale;
    const yScale = d3.scaleLinear()
      .domain([this.range.pw.start, this.range.pw.stop])
      .range([0, -height]);
    this.yScale = yScale;
    const zScale = d3.scaleLinear()
      .domain([this.range.xw.start, this.range.xw.stop])
      .range([0, -height]);
    this.zScale = zScale;

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
          .y(() => { return 0; })
          .z(() => { return 0; })(xAxis),
      );
    const axisYUpdate = svgMerge.selectAll('.axis-y')
      .data(
        lineStrips3D
          .x(() => { return 0; })
          .y((datum) => { return datum.y; })
          .z(() => { return 0; })(yAxis),
      );
    const axisZUpdate = svgMerge.selectAll('.axis-z')
      .data(
        lineStrips3D
          .x(() => { return 0; })
          .y(() => { return 0; })
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
          .y(() => { return this.rem * 1.75; })
          .z(() => { return this.rem * 1.75; })(xAxis),
      );
    const titlePathYUpdate = svgMerge.selectAll('.title-path-y')
      .data(
        lineStrips3D
          .x(() => { return -this.rem * 1.75; })
          .y((datum) => {
            return datum.id === 'min' ? datum.y + this.rem * 20 : datum.y - this.rem * 20;
          })
          .z(() => { return this.rem * 1.75; })(yAxis),
      );
    const titlePathZUpdate = svgMerge.selectAll('.title-path-z')
      .data(
        lineStrips3D
          .x(() => { return -this.rem * 1.75; })
          .y(() => { return this.rem * 1.75; })
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
    const titleXEnter = titleXUpdate.enter().append('text').append('textPath')
      .attr('class', 'title title-x')
      .attr('href', '#title-x')
      .attr('startOffset', '50%');
    const titleYEnter = titleYUpdate.enter().append('text').append('textPath')
      .attr('class', 'title title-y')
      .attr('href', '#title-y')
      .attr('startOffset', '50%');
    const titleZEnter = titleZUpdate.enter().append('text').append('textPath')
      .attr('class', 'title title-z')
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
      .text((datum) => { return datum[0].title; });
    const titleYMerge = titleYEnter.merge(titleYUpdate)
      .text((datum) => { return datum[0].title; });
    const titleZMerge = titleZEnter.merge(titleZUpdate)
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
        {id: 'min', label: zScale.tickFormat()(tick), z: zScale(tick)},
        {id: 'max', z: zScale(tick)},
      ];
    });

    // Axis Ticks
    //  DATA-JOIN
    const ticksXUpdate = svgMerge.selectAll('.tick-x')
      .data(
        lineStrips3D
          .x((datum) => { return datum.x; })
          .y((datum) => { return datum.id === 'min' ? 0 : this.rem * 0.35; })
          .z((datum) => { return datum.id === 'min' ? 0 : this.rem * 0.35; })(xTicks),
      );
    const ticksYUpdate = svgMerge.selectAll('.tick-y')
      .data(
        lineStrips3D
          .x((datum) => { return datum.id === 'min' ? 0 : -this.rem * 0.35; })
          .y((datum) => { return datum.y; })
          .z((datum) => { return datum.id === 'min' ? 0 : this.rem * 0.35; })(yTicks),
      );
    const ticksZUpdate = svgMerge.selectAll('.tick-z')
      .data(
        lineStrips3D
          .x((datum) => { return datum.id === 'min' ? 0 : -this.rem * 0.35; })
          .y((datum) => { return datum.id === 'min' ? 0 : this.rem * 0.35; })
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
          .y((datum) => { return datum.id === 'min' ? this.rem * 0.5 : this.rem * 4; })
          .z((datum) => { return datum.id === 'min' ? this.rem * 0.5 : this.rem * 4; })(xTicks),
        (datum) => { return datum[0].label; },
      );
    const labelPathsYUpdate = svgMerge.selectAll('.label-path-y')
      .data(
        lineStrips3D
          .x((datum) => { return datum.id === 'min' ? -this.rem * 0.5 : -this.rem * 4; })
          .y((datum) => { return datum.y; })
          .z((datum) => { return datum.id === 'min' ? this.rem * 0.5 : this.rem * 4; })(yTicks),
        (datum) => { return datum[0].label; },
      );
    const labelPathsZUpdate = svgMerge.selectAll('.label-path-z')
      .data(
        lineStrips3D
          .x((datum) => { return datum.id === 'min' ? -this.rem * 0.5 : -this.rem * 4; })
          .y((datum) => { return datum.id === 'min' ? this.rem * 0.5 : this.rem * 4; })
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
    const labelsXEnter = labelsXUpdate.enter().append('text').append('textPath')
      .attr('class', 'label label-x')
      .attr('href', (datum, index) => { return `#label-x-${index}`; })
      .attr('startOffset', '100%');
    const labelsYEnter = labelsYUpdate.enter().append('text').append('textPath')
      .attr('class', 'label label-y')
      .attr('href', (datum, index) => { return `#label-y-${index}`; })
      .attr('startOffset', '100%');
    const labelsZEnter = labelsZUpdate.enter().append('text').append('textPath')
      .attr('class', 'label label-z')
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
      .text((datum) => { return datum[0].label; });
    const labelsYMerge = labelsYEnter.merge(labelsYUpdate)
      .text((datum) => { return datum[0].label; });
    const labelsZMerge = labelsZEnter.merge(labelsZUpdate)
      .text((datum) => { return datum[0].label; });
    // EXIT
    labelPathsXMerge.exit().remove();
    labelPathsYMerge.exit().remove();
    labelPathsZMerge.exit().remove();
    labelsXMerge.exit().remove();
    labelsYMerge.exit().remove();
    labelsZMerge.exit().remove();

    /* ----------- GRID ----------- */
    // const xGrid = svg.selectAll('path.grid').data(data[0], key);
    // xGrid
    //   .enter()
    //   .append('path')
    //   .attr('class', 'd3-3d grid')
    //   .merge(xGrid)
    //   .attr('stroke', 'black')
    //   .attr('stroke-width', 0.3)
    //   .attr('fill', (d) => { return (d.ccw ? '#eee' : '#aaa'); })
    //   .attr('fill-opacity', 0.9)
    //   .attr('d', grid3d.draw);
    // xGrid.exit().remove();

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

    // Depth sorting
    d3.select(this.renderRoot).selectAll('.d3-3d').sort(points3d.sort);

    this.firstUpdate = false;
  }
}

customElements.define('decision-space', DecisionSpace);


// //////////////////////////////////////////////////////////////////
// if (this.surface) {
//   data.push(
//     {
//       name: 'Decision Boundary',
//       type: 'isosurface',
//       x: this.decisionSpace.xs,
//       y: this.decisionSpace.xw,
//       z: this.decisionSpace.pw,
//       value: this.decisionSpace.uDiff,
//       coloraxis: 'coloraxis',
//       isomin: 0,
//       isomax: 0,
//       opacity: 0.5,
//     },
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
//   margin: {t: 0, l: 0, b: 0},
//   scene: {
//     camera: {
//       center: {
//         x: 0,
//         y: 0.1,
//         z: -0.2,
//       },
//       eye: {
//         x: -2.5 * 0.8,
//         y: -1 * 0.8,
//         z: 1 * 0.8,
//       },
//     },
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
