
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
          ---color-a: var(--color-a, ${unsafeCSS(this.colors.a)});
          ---color-z: var(--color-z, ${unsafeCSS(this.colors.z)});
          ---color-v: var(--color-v, ${unsafeCSS(this.colors.v)});
          ---color-t0: var(--color-t0, ${unsafeCSS(this.colors.t0)});
          ---color-correct: var(--color-correct, ${unsafeCSS(this.colors.correct)});
          ---color-error: var(--color-error, ${unsafeCSS(this.colors.error)});
          ---color-nr: var(--color-nr, ${unsafeCSS(this.colors.nr)});

          ---color-a-light: var(--color-a-light, ${unsafeCSS(this.lights.a)});
          ---color-z-light: var(--color-z-light, ${unsafeCSS(this.lights.z)});
          ---color-v-light: var(--color-v-light, ${unsafeCSS(this.lights.v)});
          ---color-t0-light: var(--color-t0-light, ${unsafeCSS(this.lights.t0)});
          ---color-correct-light: var(--color-correct-light, ${unsafeCSS(this.lights.correct)});
          ---color-error-light: var(--color-error-light, ${unsafeCSS(this.lights.error)});
          ---color-nr-light: var(--color-nr-light, ${unsafeCSS(this.lights.nr)});

          ---color-a-dark: var(--color-a-dark, ${unsafeCSS(this.darks.a)});
          ---color-z-dark: var(--color-z-dark, ${unsafeCSS(this.darks.z)});
          ---color-v-dark: var(--color-v-dark, ${unsafeCSS(this.darks.v)});
          ---color-t0-dark: var(--color-t0-dark, ${unsafeCSS(this.darks.t0)});
          ---color-correct-dark: var(--color-correct-dark, ${unsafeCSS(this.darks.correct)});
          ---color-error-dark: var(--color-error-dark, ${unsafeCSS(this.darks.error)});
          ---color-nr-dark: var(--color-nr-dark, ${unsafeCSS(this.darks.nr)});
        }
      `,
    ];
  }
}
