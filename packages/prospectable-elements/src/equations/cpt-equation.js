
import {css} from 'lit-element';

import '@decidable/decidable-elements';

import CPTElement from '../cpt-element';

/*
  CPTEquation Base Class - Not intended for instantiation!
  <cpt-equation>
*/
export default class CPTEquation extends CPTElement {
  static get properties() {
    return {
      numeric: {
        attribute: 'numeric',
        type: Boolean,
        reflect: true,
      },
    };
  }

  constructor() {
    super();
    this.numeric = false;
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;

          margin: 1rem;
        }

        /* Containing <div> */
        .holder {
          display: flex;

          flex-direction: row;

          justify-content: left;
        }

        /* Overall <table> */
        .equation {
          text-align: center;

          border-collapse: collapse;

          border: 0;
        }

        /* Modifies <td> */
        .underline {
          border-bottom: 1px solid var(---color-text);
        }

        /* Basic <span> and <var> w/modifiers */
        span,
        var {
          padding: 0 0.25rem;

          font-style: normal;
        }

        .tight {
          padding: 0;
        }

        .paren {
          font-size: 150%;
        }

        .bracket {
          font-size: 175%;
        }

        .exp {
          display: inline-block;

          font-size: 0.75rem;
        }

        /* Input wrapping <label> */
        decidable-spinner {
          --decidable-spinner-input-width: 4rem;

          display: inline-block;

          padding: 0.125rem 0.375rem 0.375rem;

          vertical-align: middle;
        }

        .bottom {
          vertical-align: bottom;
        }

        /* Color scheme */
        .x {
          background: var(---color-x-light);
        }

        .a {
          background: var(---color-a-light);
        }

        .l {
          background: var(---color-l-light);
        }

        .v {
          background: var(---color-v-light);
        }

        .p {
          background: var(---color-p-light);
        }

        .g {
          background: var(---color-g-light);
        }

        .w {
          background: var(---color-w-light);
        }

        .u {
          background: var(---color-u-light);
        }
      `,
    ];
  }
}