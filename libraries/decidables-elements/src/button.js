
import {css, html} from 'lit';

import DecidablesElement from './decidables-element';

export default class DecidablesButton extends DecidablesElement {
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
        :host {
          ---decidables-button-background-color-disabled: var(--decidables-button-background-color, var(---color-element-disabled));
          ---decidables-button-background-color-enabled: var(--decidables-button-background-color, var(---color-element-enabled));

          margin: 0.25rem;
        }

        button {
          width: 100%;
          height: 100%;

          padding: 0.375rem 0.75rem;

          font-family: var(---font-family-base);
          font-size: 1.125rem;

          line-height: 1.5;

          color: var(---color-text-inverse);

          outline: none;

          border: 0;
          border-radius: var(---border-radius);
        }

        button:disabled {
          outline: none;

          background-color: var(---decidables-button-background-color-disabled);
          box-shadow: none;
        }

        button:enabled {
          cursor: pointer;
          outline: none;

          background-color: var(---decidables-button-background-color-enabled);
          box-shadow: var(---shadow-2);
        }

        button:enabled:hover {
          outline: none;

          box-shadow: var(---shadow-4);
        }

        button:enabled:active {
          outline: none;

          box-shadow: var(---shadow-8);
        }

        button:enabled:focus-visible {
          outline: none;

          box-shadow: var(---shadow-4);
        }

        button:enabled:focus-visible:active {
          outline: none;

          box-shadow: var(---shadow-8);
        }
      `,
    ];
  }

  render() {
    return html`
      <button ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `;
  }
}

customElements.define('decidables-button', DecidablesButton);
