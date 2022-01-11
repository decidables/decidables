
import {html, css} from 'lit';

import DecidableElement from './decidable-element';

export default class DecidableToggle extends DecidableElement {
  static get properties() {
    return {
      disabled: {
        attribute: 'disabled',
        type: Boolean,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    // Attributes
    this.disabled = false;
  }

  static get styles() {
    return [
      super.styles,
      css`
        fieldset {
          display: flex;

          flex-direction: column;

          align-items: stretch;
          justify-content: center;

          margin: 0.25rem;

          border: 0;
        }

        legend {
          text-align: center;
        }
      `,
    ];
  }

  render() {
    return html`
      <fieldset ?disabled=${this.disabled}>
        <legend><slot name="label"></slot></legend>
        <slot></slot>
      </fieldset>
    `;
  }
}

customElements.define('decidable-toggle', DecidableToggle);
