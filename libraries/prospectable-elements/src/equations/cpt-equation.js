
import {css} from 'lit';

import ProspectableElement from '../prospectable-element';

/*
  CPTEquation Base Class - Not intended for instantiation!
  <cpt-equation>
*/
export default class CPTEquation extends ProspectableElement {
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
          white-space: nowrap;

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

        var {
          border-radius: var(---border-radius);
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

        .brace {
          font-size: 200%;
        }

        .addend {
          position: relative;
          display: inline-block;
        }

        .comparison {
          position: relative;
          display: inline-block;

          font-size: 125%;
          font-weight: 600;
        }

        .function {
          display: inline-block;

          border-radius: var(---border-radius);
        }

        :host([numeric]) .function {
          padding: 0.25rem;
        }

        .exp {
          display: inline-block;

          font-size: 0.75rem;
        }

        .subscript {
          display: inline-block;

          font-size: 66.667%;
        }

        .summation {
          display: flex;

          flex-direction: column;

          line-height: 0.8;
        }

        .sigma {
          display: inline-block;

          font-size: 200%;
        }

        /* Input wrapping <label> */
        decidables-spinner {
          --decidables-spinner-input-width: 4rem;

          display: inline-block;

          padding: 0.125rem 0.375rem 0.375rem;

          line-height: 1.5;
          vertical-align: middle;

          border-radius: var(---border-radius);
        }

        .n {
          --decidables-spinner-input-width: 2rem;
        }

        .left {
          text-align: left;
        }

        .right {
          text-align: right;
        }

        .bottom {
          vertical-align: bottom;
        }

        .top {
          vertical-align: top;
        }

        /* Color scheme */
        /* .win {
          background: var(---color-better);
        }

        .loss {
          background: var(---color-worse);
        }

        .sure {
          background: var(---color-even);
        } */

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
