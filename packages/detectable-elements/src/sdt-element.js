
import {
  css,
  unsafeCSS,
} from 'lit-element';
import * as d3 from 'd3';

import {DecidableElement} from '@decidable/decidable-elements';

/*
  SDTElement Base Class - Not intended for instantiation!
  <sdt-element>
*/
export default class SDTElement extends DecidableElement {
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
      h: d3.schemeSet1[2],
      m: d3.schemeSet1[4],
      fa: d3.schemeSet1[1],
      cr: d3.schemeSet1[0],
      hr: d3.schemeSet1[5],
      far: d3.schemeSet1[3],
      acc: d3.schemeSet1[8],
      d: d3.schemeSet1[7],
      c: d3.schemeSet1[6],
      s: '#4545d0',
      present: '#f032e6',
      absent: '#10dbc9',
      correct: '#ffffff',
      error: '#000000',
      nr: '#cccccc',
    };
  }

  static get lights() {
    return Object.keys(SDTElement.colors).reduce((acc, cur) => {
      acc[cur] = d3.interpolateRgb(SDTElement.colors[cur], '#ffffff')(0.5);
      return acc;
    }, {});
  }

  static get darks() {
    return Object.keys(SDTElement.colors).reduce((acc, cur) => {
      acc[cur] = d3.interpolateRgb(SDTElement.colors[cur], '#000000')(0.5);
      return acc;
    }, {});
  }


  static get styles() {
    return [
      super.styles,
      css`
        :host {
          ---color-h: var(--color-h, ${unsafeCSS(this.colors.h)});
          ---color-m: var(--color-m, ${unsafeCSS(this.colors.m)});
          ---color-fa: var(--color-fa, ${unsafeCSS(this.colors.fa)});
          ---color-cr: var(--color-cr, ${unsafeCSS(this.colors.cr)});
          ---color-hr: var(--color-hr, ${unsafeCSS(this.colors.hr)});
          ---color-far: var(--color-far, ${unsafeCSS(this.colors.far)});
          ---color-acc: var(--color-acc, ${unsafeCSS(this.colors.acc)});
          ---color-d: var(--color-d, ${unsafeCSS(this.colors.d)});
          ---color-c: var(--color-c, ${unsafeCSS(this.colors.c)});
          ---color-s: var(--color-s, ${unsafeCSS(this.colors.s)});
          ---color-present: var(--color-present, ${unsafeCSS(this.colors.present)});
          ---color-absent: var(--color-absent, ${unsafeCSS(this.colors.absent)});
          ---color-correct: var(--color-correct, ${unsafeCSS(this.colors.correct)});
          ---color-error: var(--color-error, ${unsafeCSS(this.colors.error)});
          ---color-nr: var(--color-nr, ${unsafeCSS(this.colors.nr)});

          ---color-h-light: var(--color-h-light, ${unsafeCSS(this.lights.h)});
          ---color-m-light: var(--color-m-light, ${unsafeCSS(this.lights.m)});
          ---color-fa-light: var(--color-fa-light, ${unsafeCSS(this.lights.fa)});
          ---color-cr-light: var(--color-cr-light, ${unsafeCSS(this.lights.cr)});
          ---color-hr-light: var(--color-hr-light, ${unsafeCSS(this.lights.hr)});
          ---color-far-light: var(--color-far-light, ${unsafeCSS(this.lights.far)});
          ---color-acc-light: var(--color-acc-light, ${unsafeCSS(this.lights.acc)});
          ---color-d-light: var(--color-d-light, ${unsafeCSS(this.lights.d)});
          ---color-c-light: var(--color-c-light, ${unsafeCSS(this.lights.c)});
          ---color-s-light: var(--color-s-light, ${unsafeCSS(this.lights.s)});
          ---color-present-light: var(--color-present-light, ${unsafeCSS(this.lights.present)});
          ---color-absent-light: var(--color-absent-light, ${unsafeCSS(this.lights.absent)});
          ---color-correct-light: var(--color-correct-light, ${unsafeCSS(this.lights.correct)});
          ---color-error-light: var(--color-error-light, ${unsafeCSS(this.lights.error)});
          ---color-nr-light: var(--color-nr-light, ${unsafeCSS(this.lights.nr)});

          ---color-h-dark: var(--color-h-dark, ${unsafeCSS(this.darks.h)});
          ---color-m-dark: var(--color-m-dark, ${unsafeCSS(this.darks.m)});
          ---color-fa-dark: var(--color-fa-dark, ${unsafeCSS(this.darks.fa)});
          ---color-cr-dark: var(--color-cr-dark, ${unsafeCSS(this.darks.cr)});
          ---color-hr-dark: var(--color-hr-dark, ${unsafeCSS(this.darks.hr)});
          ---color-far-dark: var(--color-far-dark, ${unsafeCSS(this.darks.far)});
          ---color-acc-dark: var(--color-acc-dark, ${unsafeCSS(this.darks.acc)});
          ---color-d-dark: var(--color-d-dark, ${unsafeCSS(this.darks.d)});
          ---color-c-dark: var(--color-c-dark, ${unsafeCSS(this.darks.c)});
          ---color-s-dark: var(--color-s-dark, ${unsafeCSS(this.darks.s)});
          ---color-present-dark: var(--color-present-dark, ${unsafeCSS(this.darks.present)});
          ---color-absent-dark: var(--color-absent-dark, ${unsafeCSS(this.darks.absent)});
          ---color-correct-dark: var(--color-correct-dark, ${unsafeCSS(this.darks.correct)});
          ---color-error-dark: var(--color-error-dark, ${unsafeCSS(this.darks.error)});
          ---color-nr-dark: var(--color-nr-dark, ${unsafeCSS(this.darks.nr)});
        }
      `,
    ];
  }
}
