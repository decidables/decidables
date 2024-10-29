
import {
  css,
  unsafeCSS,
} from 'lit';
import * as d3 from 'd3';

import {DecidablesElement} from '@decidables/decidables-elements';

/*
  AccumulableElement Base Class - Not intended for instantiation!
*/
export default class AccumulableElement extends DecidablesElement {
  static get properties() {
    return {
      interactive: {
        attribute: 'interactive',
        type: Boolean,
        reflect: true,
      },
    };
  }

  constructor() {
    super();
    this.interactive = false;
  }

  static get colors() {
    return {
      a: d3.schemeSet1[0],
      z: d3.schemeSet1[1],
      v: d3.schemeSet1[4],
      t0: d3.schemeSet1[7],
      left: '#f032e6',
      right: '#10dbc9',
      correct: d3.schemeSet1[2],
      error: d3.schemeSet1[3],
      nr: '#cccccc',
    };
  }

  static get lights() {
    return Object.keys(AccumulableElement.colors).reduce((acc, cur) => {
      acc[cur] = d3.interpolateRgb(AccumulableElement.colors[cur], '#ffffff')(0.5);
      return acc;
    }, {});
  }

  static get darks() {
    return Object.keys(AccumulableElement.colors).reduce((acc, cur) => {
      acc[cur] = d3.interpolateRgb(AccumulableElement.colors[cur], '#000000')(0.5);
      return acc;
    }, {});
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          /* Declare base colors */
          ${
            unsafeCSS(Object.keys(AccumulableElement.colors).map((color) => {
              return `---color-${color}: var(--color-${color}, ${this.colors[color]});`;
            }).join('\n'))
          }

          /* Declare light colors */
          ${
            unsafeCSS(Object.keys(AccumulableElement.colors).map((color) => {
              return `---color-${color}-light: var(--color-${color}-light, ${this.lights[color]});`;
            }).join('\n'))
          }

          /* Declare dark colors */
          ${
            unsafeCSS(Object.keys(AccumulableElement.colors).map((color) => {
              return `---color-${color}-dark: var(--color-${color}-dark, ${this.darks[color]});`;
            }).join('\n'))
          }
        }
      `,
    ];
  }
}
