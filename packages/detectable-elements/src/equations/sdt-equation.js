
import {css} from 'lit-element';

import SDTElement from '../sdt-element';
import SDTMixinStyleSpinner from '../mixins/styleSpinner';

/*
  SDTEquation Base Class - Not intended for instantiation!
  <sdt-equation>
*/
export default class SDTEquation extends SDTMixinStyleSpinner(SDTElement) {
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
          font-size: 0.75rem;
        }

        /* Input wrapping <label> */
        label {
          display: inline-flex;

          flex-direction: column;

          align-items: center;

          padding: 0.125rem 0.375rem 0.375rem;

          vertical-align: middle;
        }

        .bottom {
          vertical-align: bottom;
        }

        /* Nested <var> */
        label var {
          font-size: 0.75rem;
        }

        /* User <input> */
        input {
          width: 4rem;

          background: none;
        }

        /* Color scheme */
        .h,
        .h input {
          background: var(---color-h-light);
        }

        .m,
        .m input {
          background: var(---color-m-light);
        }

        .hr,
        .hr input {
          background: var(---color-hr-light);
        }

        .fa,
        .fa input {
          background: var(---color-fa-light);
        }

        .acc,
        .acc input {
          background: var(---color-acc-light);
        }

        .cr,
        .cr input {
          background: var(---color-cr-light);
        }

        .far,
        .far input {
          background: var(---color-far-light);
        }

        .d,
        .d input {
          background: var(---color-d-light);
        }

        .c,
        .c input {
          background: var(---color-c-light);
        }

        .s,
        .s input {
          background: var(---color-s-light);
        }
      `,
    ];
  }
}
