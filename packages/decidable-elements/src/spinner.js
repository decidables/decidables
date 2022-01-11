
import {ifDefined} from 'lit/directives/if-defined';
import {html, css} from 'lit';

import DecidableElement from './decidable-element';

export default class DecidableSpinner extends DecidableElement {
  static get properties() {
    return {
      disabled: {
        attribute: 'disabled',
        type: Boolean,
        reflect: true,
      },
      max: {
        attribute: 'max',
        type: Number,
        reflect: true,
      },
      min: {
        attribute: 'min',
        type: Number,
        reflect: true,
      },
      step: {
        attribute: 'step',
        type: Number,
        reflect: true,
      },
      value: {
        attribute: 'value',
        type: Number,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    // Attributes
    this.disabled = false;
    this.max = undefined;
    this.min = undefined;
    this.step = undefined;
    this.value = undefined;
  }

  inputted(event) {
    this.value = event.target.value;
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          ---decidable-spinner-font-size: var(--decidable-spinner-font-size, 1.125rem);
          ---decidable-spinner-input-width: var(--decidable-spinner-input-width, 4rem);
          ---decidable-spinner-prefix: var(--decidable-spinner-prefix, "");

          display: block;
        }

        label {
          position: relative;
          display: flex;

          flex-direction: column;

          align-items: center;

          margin: 0;

          font-size: 0.75rem;
        }

        label::before {
          position: absolute;
          bottom: 1px;
          left: calc(50% - var(---decidable-spinner-input-width) / 2 + 0.25rem);

          font-size: var(---decidable-spinner-font-size);
          line-height: normal;

          content: var(---decidable-spinner-prefix);
        }

        input[type=number] {
          width: var(---decidable-spinner-input-width);

          font-family: var(---font-family-base);
          font-size: var(---decidable-spinner-font-size);
          color: inherit;
          text-align: right;

          background: none;
          border: 0;
          border-radius: 0;
          outline: none;
          box-shadow: var(---shadow-2);

          -webkit-appearance: none; /* stylelint-disable-line property-no-vendor-prefix */
        }

        input[type=number]:hover {
          box-shadow: var(---shadow-4);
        }

        input[type=number]:focus,
        input[type=number]:active {
          box-shadow: var(---shadow-8);
        }

        input[type=number]:disabled {
          color: var(---color-text);

          border: 0;
          box-shadow: none;

          /* HACK: Use correct text color in Safari */
          -webkit-opacity: 1;
          /* HACK: Hide spinners in disabled input for Firefox and Safari */
          -moz-appearance: textfield; /* stylelint-disable-line property-no-vendor-prefix */
          /* HACK: Use correct text color in Safari */
          -webkit-text-fill-color: var(---color-text);
        }

        /* HACK: Hide spinners in disabled input for Firefox and Safari */
        input[type=number]:disabled::-webkit-outer-spin-button,
        input[type=number]:disabled::-webkit-inner-spin-button {
          margin: 0;
          -webkit-appearance: none; /* stylelint-disable-line property-no-vendor-prefix */
        }
      `,
    ];
  }

  render() {
    return html`
      <label>
        <slot></slot>
        <input ?disabled=${this.disabled} type="number" min=${ifDefined(this.min)} max=${ifDefined(this.max)} step=${ifDefined(this.step)} .value=${this.value} @input=${this.inputted.bind(this)}>
      </label>
    `;
  }
}

customElements.define('decidable-spinner', DecidableSpinner);
