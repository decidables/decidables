
import {
  css,
  unsafeCSS,
} from 'lit';
import * as d3 from 'd3';

import {DecidablesElement} from '@decidables/decidables-elements';

/*
  DiscountableElement Base Class - Not intended for instantiation!
  <sdt-element>
*/
export default class DiscountableElement extends DecidablesElement {
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
      x: d3.schemeSet1[0],
      a: d3.schemeSet1[4],
      l: d3.schemeSet1[5],
      v: d3.schemeSet1[7],
      p: d3.schemeSet1[1],
      g: d3.schemeSet1[2],
      w: d3.schemeSet1[3],
      u: d3.schemeSet1[6],
      chosen: d3.schemeSet1[8],
      better: '#4545d0',
      worse: '#f032e6',
      even: '#10dbc9',
      correct: '#ffffff',
      error: '#000000',
      nr: '#cccccc',
    };
  }

  static get lights() {
    return Object.keys(DiscountableElement.colors).reduce((acc, cur) => {
      acc[cur] = d3.interpolateRgb(DiscountableElement.colors[cur], '#ffffff')(0.5);
      return acc;
    }, {});
  }

  static get darks() {
    return Object.keys(DiscountableElement.colors).reduce((acc, cur) => {
      acc[cur] = d3.interpolateRgb(DiscountableElement.colors[cur], '#000000')(0.5);
      return acc;
    }, {});
  }


  static get styles() {
    return [
      super.styles,
      css`
        :host {
          ---color-x: var(--color-x, ${unsafeCSS(this.colors.x)});
          ---color-a: var(--color-a, ${unsafeCSS(this.colors.a)});
          ---color-l: var(--color-l, ${unsafeCSS(this.colors.l)});
          ---color-v: var(--color-v, ${unsafeCSS(this.colors.v)});
          ---color-p: var(--color-p, ${unsafeCSS(this.colors.p)});
          ---color-g: var(--color-g, ${unsafeCSS(this.colors.g)});
          ---color-w: var(--color-w, ${unsafeCSS(this.colors.w)});
          ---color-u: var(--color-u, ${unsafeCSS(this.colors.u)});
          ---color-chosen: var(--color-chosen, ${unsafeCSS(this.colors.chosen)});
          ---color-better: var(--color-better, ${unsafeCSS(this.colors.better)});
          ---color-worse: var(--color-worse, ${unsafeCSS(this.colors.worse)});
          ---color-even: var(--color-even, ${unsafeCSS(this.colors.even)});
          ---color-correct: var(--color-correct, ${unsafeCSS(this.colors.correct)});
          ---color-error: var(--color-error, ${unsafeCSS(this.colors.error)});
          ---color-nr: var(--color-nr, ${unsafeCSS(this.colors.nr)});

          ---color-x-light: var(--color-x-light, ${unsafeCSS(this.lights.x)});
          ---color-a-light: var(--color-a-light, ${unsafeCSS(this.lights.a)});
          ---color-l-light: var(--color-l-light, ${unsafeCSS(this.lights.l)});
          ---color-v-light: var(--color-v-light, ${unsafeCSS(this.lights.v)});
          ---color-p-light: var(--color-p-light, ${unsafeCSS(this.lights.p)});
          ---color-g-light: var(--color-g-light, ${unsafeCSS(this.lights.g)});
          ---color-w-light: var(--color-w-light, ${unsafeCSS(this.lights.w)});
          ---color-u-light: var(--color-u-light, ${unsafeCSS(this.lights.u)});
          ---color-chosen-light: var(--color-chosen-light, ${unsafeCSS(this.lights.chosen)});
          ---color-better-light: var(--color-better-light, ${unsafeCSS(this.lights.better)});
          ---color-worse-light: var(--color-worse-light, ${unsafeCSS(this.lights.worse)});
          ---color-even-light: var(--color-even-light, ${unsafeCSS(this.lights.even)});
          ---color-correct-light: var(--color-correct-light, ${unsafeCSS(this.lights.correct)});
          ---color-error-light: var(--color-error-light, ${unsafeCSS(this.lights.error)});
          ---color-nr-light: var(--color-nr-light, ${unsafeCSS(this.lights.nr)});

          ---color-x-dark: var(--color-x-dark, ${unsafeCSS(this.darks.x)});
          ---color-a-dark: var(--color-a-dark, ${unsafeCSS(this.darks.a)});
          ---color-l-dark: var(--color-l-dark, ${unsafeCSS(this.darks.l)});
          ---color-v-dark: var(--color-v-dark, ${unsafeCSS(this.darks.v)});
          ---color-p-dark: var(--color-p-dark, ${unsafeCSS(this.darks.p)});
          ---color-g-dark: var(--color-g-dark, ${unsafeCSS(this.darks.g)});
          ---color-w-dark: var(--color-w-dark, ${unsafeCSS(this.darks.w)});
          ---color-u-dark: var(--color-u-dark, ${unsafeCSS(this.darks.u)});
          ---color-chosen-dark: var(--color-chosen-dark, ${unsafeCSS(this.darks.chosen)});
          ---color-better-dark: var(--color-better-dark, ${unsafeCSS(this.darks.better)});
          ---color-worse-dark: var(--color-worse-dark, ${unsafeCSS(this.darks.worse)});
          ---color-even-dark: var(--color-even-dark, ${unsafeCSS(this.darks.even)});
          ---color-correct-dark: var(--color-correct-dark, ${unsafeCSS(this.darks.correct)});
          ---color-error-dark: var(--color-error-dark, ${unsafeCSS(this.darks.error)});
          ---color-nr-dark: var(--color-nr-dark, ${unsafeCSS(this.darks.nr)});
        }
      `,
    ];
  }
}
