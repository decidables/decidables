
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
      a: d3.schemeSet1[0],
      d: d3.schemeSet1[1],
      k: d3.schemeSet1[2],
      v: d3.schemeSet1[3],
      sooner: d3.schemeSet1[5],
      later: d3.schemeSet1[7],
      larger: '#4545d0',
      smaller: '#f032e6',
      equal: '#10dbc9',
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
          ---color-a: var(--color-a, ${unsafeCSS(this.colors.a)});
          ---color-d: var(--color-d, ${unsafeCSS(this.colors.d)});
          ---color-k: var(--color-k, ${unsafeCSS(this.colors.k)});
          ---color-v: var(--color-v, ${unsafeCSS(this.colors.v)});
          ---color-sooner: var(--color-sooner, ${unsafeCSS(this.colors.sooner)});
          ---color-later: var(--color-later, ${unsafeCSS(this.colors.later)});
          ---color-larger: var(--color-larger, ${unsafeCSS(this.colors.larger)});
          ---color-smaller: var(--color-smaller, ${unsafeCSS(this.colors.smaller)});
          ---color-equal: var(--color-equal, ${unsafeCSS(this.colors.equal)});
          ---color-nr: var(--color-nr, ${unsafeCSS(this.colors.nr)});

          ---color-a-light: var(--color-a-light, ${unsafeCSS(this.lights.a)});
          ---color-d-light: var(--color-d-light, ${unsafeCSS(this.lights.d)});
          ---color-k-light: var(--color-k-light, ${unsafeCSS(this.lights.k)});
          ---color-v-light: var(--color-v-light, ${unsafeCSS(this.lights.v)});
          ---color-sooner-light: var(--color-sooner-light, ${unsafeCSS(this.lights.sooner)});
          ---color-later-light: var(--color-later-light, ${unsafeCSS(this.lights.later)});
          ---color-larger-light: var(--color-larger-light, ${unsafeCSS(this.lights.larger)});
          ---color-smaller-light: var(--color-smaller-light, ${unsafeCSS(this.lights.smaller)});
          ---color-equal-light: var(--color-equal-light, ${unsafeCSS(this.lights.equal)});
          ---color-nr-light: var(--color-nr-light, ${unsafeCSS(this.lights.nr)});

          ---color-a-dark: var(--color-a-dark, ${unsafeCSS(this.darks.a)});
          ---color-d-dark: var(--color-d-dark, ${unsafeCSS(this.darks.d)});
          ---color-k-dark: var(--color-k-dark, ${unsafeCSS(this.darks.k)});
          ---color-v-dark: var(--color-v-dark, ${unsafeCSS(this.darks.v)});
          ---color-sooner-dark: var(--color-sooner-dark, ${unsafeCSS(this.darks.sooner)});
          ---color-later-dark: var(--color-later-dark, ${unsafeCSS(this.darks.later)});
          ---color-larger-dark: var(--color-larger-dark, ${unsafeCSS(this.darks.larger)});
          ---color-smaller-dark: var(--color-smaller-dark, ${unsafeCSS(this.darks.smaller)});
          ---color-equal-dark: var(--color-equal-dark, ${unsafeCSS(this.darks.equal)});
          ---color-nr-dark: var(--color-nr-dark, ${unsafeCSS(this.darks.nr)});
        }
      `,
    ];
  }
}
