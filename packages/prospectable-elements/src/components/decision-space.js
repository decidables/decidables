
import {html, css} from 'lit-element';
import * as d3 from 'd3';
import * as Plotly from 'plotly.js/lib/core';
import * as PlotlyIsoSurface from 'plotly.js/lib/isosurface';
import * as PlotlyScatter3d from 'plotly.js/lib/scatter3d';

import CPTMath from '@decidable/prospectable-math';

import CPTElement from '../cpt-element';
import plotlyStyle from './plotly-style';

// Load in the needed trace type
Plotly.register([PlotlyIsoSurface, PlotlyScatter3d]);

/*
  CPTValue element
  <cpt-value>

*** Add handles to lines?

  Attributes:
    interactive: true/false

    line: 'all', 'first', 'rest', 'none'
    point: 'all', 'first', 'rest', 'none'

    x: numeric (-infinity, infinity)
    a: numeric [0, 1]
    l: numeric [0, 100]

  Styles:
    ??
*/
export default class DecisionSpace extends CPTElement {
  static get properties() {
    return {
      surface: {
        attribute: 'surface',
        type: Boolean,
        reflect: true,
      },
      points: {
        attribute: 'points',
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

    this.surface = true;
    this.points = false;

    this.a = 0.8;
    this.l = 1.2;
    this.g = 0.8;
    this.xl = 0; // Gamble Loss Value

    this.xw = 20;
    this.pw = 0.5;
    this.xs = 10;

    this.range = {};
    this.range.xs = {start: 5, stop: 15, step: 1}; // Sure Value
    this.range.xw = {start: 10, stop: 30, step: 2}; // Gamble Win Value
    this.range.pw = {start: 0, stop: 1, step: 0.1}; // Gamble Win Probability

    this.width = NaN;
    this.height = NaN;
    this.rem = NaN;

    this.decisionSpace = [];

    this.alignState();
  }

  alignState() {
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

                const uDiff = CPTMath.xpalg2u(xw, pw, this.a, this.l, this.g)
                  + CPTMath.xpalg2u(this.xl, 1 - pw, this.a, this.l, this.g)
                  - CPTMath.xal2v(xs, this.a, this.l);

                this.decisionSpace.uDiff.push(uDiff);
              });
          });
      });
  }

  set(x, a, l, name = 'default', label = '') {
    if (name === 'default') {
      this.x = x;
      this.a = a;
      this.l = l;
      this.label = label;
    }
    const location = this.locations.find((item) => {
      return (item.name === name);
    });
    if (location === undefined) {
      this.locations.push({
        name: name,
        x: x,
        a: a,
        l: l,
        label: label,
      });
    } else {
      location.x = x;
      location.a = a;
      location.l = l;
      location.label = label;
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
        }

        .plotly {
          height: 100%;
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

  render() { // eslint-disable-line class-methods-use-this
    return html`
      <div class="plotly"></div>
    `;
    // ${CPTElement.svgFilters}
  }

  getDimensions() {
    this.width = parseFloat(this.getComputedStyleValue('width'), 10);
    this.height = parseFloat(this.getComputedStyleValue('height'), 10);
    this.rem = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('font-size'), 10);
    // console.log(`cpt-value: width = ${this.width}, height = ${this.height}, rem = ${this.rem}`);
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

    // Bail out if we can't get the width/height/rem
    if (Number.isNaN(this.width) || Number.isNaN(this.height) || Number.isNaN(this.rem)) {
      return;
    }

    const colorText = this.getComputedStyleValue('---color-text');
    const colorElementBorder = this.getComputedStyleValue('---color-element-border');
    const colorElementBackground = this.getComputedStyleValue('---color-element-background');

    const data = [
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
      {
        name: 'Current Decision',
        type: 'scatter3d',
        x: [this.xs],
        y: [this.xw],
        z: [this.pw],
        mode: 'markers',
        marker: {
          color: 'black',
        },
      },
    ];

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
          [0, 'rgb(5,10,172)'],
          [0.25, 'rgb(5,10,172)'],
          [0.425, 'rgb(106,137,247)'],
          [0.5, 'rgb(190,190,190)'],
          [0.55, 'rgb(220,170,132)'],
          [0.6, 'rgb(230,145,90)'],
          [0.75, 'rgb(178,10,28)'],
          [1, 'rgb(178,10,28)'],
        ],
      },
      font: {
        family: '"Source Sans Pro", sans-serif',
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
