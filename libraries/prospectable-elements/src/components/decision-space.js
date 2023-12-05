
import {html, css} from 'lit';
import * as d3 from 'd3';
import * as Plotly from 'plotly.js/lib/core';
import * as PlotlyIsoSurface from 'plotly.js/lib/isosurface';
import * as PlotlyScatter3d from 'plotly.js/lib/scatter3d';
// import Plotly from 'plotly.js-dist';

import CPTMath from '@decidables/prospectable-math';
import {DecidablesMixinResizeable} from '@decidables/decidables-elements';

import ProspectableElement from '../prospectable-element';
import plotlyStyle from './plotly-style.auto';

// Load in the needed trace type
Plotly.register([PlotlyIsoSurface, PlotlyScatter3d]);

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

    this.a = 0.8;
    this.l = 1.2;
    this.g = 0.8;
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

    // Constants for categorical color codes
    this.GAMBLE = 0;
    this.SURE = 1;
    this.NR = 0.25;
    this.DEFAULT = 0.75;

    this.pointList = [];

    this.range = {};
    this.range.xs = {start: 5, stop: 15, step: 0.5}; // Sure Value
    this.range.xw = {start: 10, stop: 30, step: 1}; // Gamble Win Value
    this.range.pw = {start: 0, stop: 1, step: 0.05}; // Gamble Win Probability

    this.decisionSpace = [];

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

    this.pointList = {
      xw: [],
      pw: [],
      xs: [],
      response: [],
      label: [],
    };
    this.choices.forEach((item, index) => {
      if (((index === 0) && (this.point === 'first' || this.point === 'all'))
        || ((index > 0) && (this.point === 'rest' || this.point === 'all'))) {
        this.pointList.xw.push(item.xw);
        this.pointList.pw.push(item.pw);
        this.pointList.xs.push(item.xs);
        this.pointList.response.push(
          (item.response === 'gamble')
            ? this.GAMBLE
            : (item.response === 'sure')
              ? this.SURE
              : (item.response === 'nr')
                ? this.NR
                : this.DEFAULT,
        );
        this.pointList.label.push(item.label);
      }
    });

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
      plotlyStyle,
      css`
        :host {
          display: inline-block;

          width: 28rem;
          height: 20rem;
        }

        .plotly {
          height: 100%;

          cursor: grab;
        }

        /* Plotly modebar styles */
        /* Drawn from: https://github.com/plotly/plotly.js/blob/master/src/components/modebar/modebar.js */
        .plotly:hover .modebar .modebar-group {
          background-color: rgba(255, 255, 255, 0.5);
        }

        .modebar-btn .icon path {
          fill: rgba(68, 68, 68, 0.3);
        }

        .modebar-btn:hover .icon path {
          fill: rgba(68, 68, 68, 0.7);
        }

        .modebar-btn.active .icon path {
          fill: rgba(68, 68, 68, 0.7);
        }
      `,
    ];
  }

  render() { /* eslint-disable-line class-methods-use-this */
    return html`
      <div class="plotly"></div>
    `;
    // ${ProspectableElement.svgFilters}
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

    const colorText = this.getComputedStyleValue('---color-text');
    const colorElementBorder = this.getComputedStyleValue('---color-element-border');
    const colorElementBackground = this.getComputedStyleValue('---color-element-background');
    const colorElementEmphasis = this.getComputedStyleValue('---color-element-emphasis');
    const colorWorse = this.getComputedStyleValue('---color-worse');
    const colorBetter = this.getComputedStyleValue('---color-better');
    const colorNr = this.getComputedStyleValue('---color-nr');

    const data = [];

    if (this.surface) {
      data.push(
        {
          name: 'Decision Boundary',
          type: 'isosurface',
          x: this.decisionSpace.xs,
          y: this.decisionSpace.xw,
          z: this.decisionSpace.pw,
          value: this.decisionSpace.uDiff,
          coloraxis: 'coloraxis',
          isomin: 0,
          isomax: 0,
          opacity: 0.5,
        },
        {
          name: 'Difference in Subjective Utility',
          type: 'isosurface',
          x: this.decisionSpace.xs,
          y: this.decisionSpace.xw,
          z: this.decisionSpace.pw,
          value: this.decisionSpace.uDiff,
          caps: {
            x: {show: false},
            y: {show: false},
            z: {show: false},
          },
          coloraxis: 'coloraxis',
          isomin: -30,
          isomax: 30,
          showscale: false,
          slices: {
            x: {show: true, locations: [this.range.xs.stop]},
            y: {show: true, locations: [this.range.xw.stop]},
            z: {show: true, locations: [this.range.pw.start]},
          },
          surface: {show: false},
        },
      );
    }

    data.push(
      {
        name: 'Current Decision',
        type: 'scatter3d',
        x: this.pointList.xs,
        y: this.pointList.xw,
        z: this.pointList.pw,
        mode: 'markers',
        marker: {
          color: this.pointList.response,
          coloraxis: 'coloraxis2',
          line: {
            color: colorElementEmphasis,
            width: 2,
          },
          size: 6,
        },
      },
    );

    const layout = {
      coloraxis: {
        cmin: -30,
        cmax: 30,
        colorbar: {
          title: {
            font: {
              size: this.rem * 1.125,
            },
            text: 'Difference in Utility (Gamble - Sure)',
            side: 'right',
          },
          thickness: 16,
          ypad: 32,
        },
        colorscale: [
          [0, 'rgb(35, 35, 104)'],
          [0.35, 'rgb(69,69,208)'],
          [0.5, 'rgb(190,190,190)'],
          [0.65, 'rgb(240,50,230)'],
          [1, 'rgb(120,25,115)'],
        ],
      },
      coloraxis2: {
        cmin: 0,
        cmax: 1,
        colorscale: [
          [0, colorWorse],
          [0.01, colorWorse],
          [0.24, colorNr],
          [0.26, colorNr],
          [0.74, colorElementEmphasis],
          [0.76, colorElementEmphasis],
          [0.99, colorBetter],
          [1, colorBetter],
        ],
        showscale: false,
      },
      font: {
        family: '"Source Sans", sans-serif',
        color: colorText,
      },
      margin: {t: 0, l: 0, b: 0},
      scene: {
        hovermode: false,
        camera: {
          center: {
            x: 0,
            y: 0.1,
            z: -0.2,
          },
          eye: {
            x: -2.5 * 0.8,
            y: -1 * 0.8,
            z: 1 * 0.8,
          },
        },
        xaxis: {
          mirror: true,
          showbackground: true,
          backgroundcolor: colorElementBackground,
          showgrid: false,
          showspikes: false,
          ticks: 'outside',
          tickcolor: colorElementBorder,
          showline: true,
          linecolor: colorElementBorder,
          zeroline: false,
          range: [this.range.xs.start, this.range.xs.stop],
          title: {
            text: 'Sure Value',
            font: {
              size: this.rem * 1.125,
            },
          },
        },
        yaxis: {
          mirror: true,
          showbackground: true,
          backgroundcolor: colorElementBackground,
          showgrid: false,
          showspikes: false,
          ticks: 'outside',
          tickcolor: colorElementBorder,
          showline: true,
          linecolor: colorElementBorder,
          zeroline: false,
          range: [this.range.xw.start, this.range.xw.stop],
          title: {
            text: 'Win Value',
            font: {
              size: this.rem * 1.125,
            },
          },
        },
        zaxis: {
          mirror: true,
          showbackground: true,
          backgroundcolor: colorElementBackground,
          showgrid: false,
          showspikes: false,
          ticks: 'outside',
          tickcolor: colorElementBorder,
          showline: true,
          linecolor: colorElementBorder,
          zeroline: false,
          range: [this.range.pw.start, this.range.pw.stop],
          title: {
            text: 'Win Probability',
            font: {
              size: this.rem * 1.125,
            },
          },
        },
      },
      uirevision: true,
    };

    const config = {
      displaylogo: false,
      modeBarButtonsToRemove: [
        'orbitRotation',
        'resetCameraDefault3d',
        'hoverClosest3d',
        'toImage',
      ],
      responsive: true,
    };

    Plotly.react(this.shadowRoot.querySelector('.plotly'), data, layout, config);

    this.firstUpdate = false;
  }
}

customElements.define('decision-space', DecisionSpace);
