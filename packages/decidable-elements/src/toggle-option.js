
import {html, css} from 'lit-element';

import DecidableElement from './decidable-element';

export default class DecidableToggleOption extends DecidableElement {
  static get properties() {
    return {
      checked: {
        attribute: 'checked',
        type: Boolean,
        reflect: true,
      },
      disabled: {
        attribute: 'disabled',
        type: Boolean,
        reflect: true,
      },
      name: {
        attribute: 'name',
        type: String,
        reflect: true,
      },
      value: {
        attribute: 'value',
        type: String,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    // Attributes
    this.checked = false;
    this.disabled = false;
    this.name = undefined;
    this.value = undefined;
  }

  changed(event) {
    this.checked = event.target.checked;
    this.dispatchEvent(new CustomEvent('change', {
      detail: {
        checked: this.checked,
        value: this.value,
      },
      bubbles: true,
    }));
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: flex;
        }

        input[type=radio] {
          /* visuallyhidden: https://github.com/h5bp/html5-boilerplate/blob/master/dist/doc/css.md */
          position: absolute;

          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0 0 0 0);

          white-space: nowrap;

          border: 0;
          clip-path: inset(100%); /* May cause a performance issue: https://github.com/h5bp/html5-boilerplate/issues/2021 */
        }

        input[type=radio] + label {
          width: 100%;
          padding: 0.375rem 0.75rem;

          font-family: var(---font-family-base);
          font-size: 1.125rem;
          line-height: 1.5;
          color: var(---color-text-inverse);
          text-align: center;

          cursor: pointer;

          background-color: var(---color-element-enabled);
          border: 0;
          border-radius: 0;
          outline: none;

          box-shadow: var(---shadow-2);
        }

        input[type=radio]:checked + label {
          background-color: var(---color-element-selected);
          outline: none;
          box-shadow: var(---shadow-2);
        }

        input[type=radio] + label:hover {
          z-index: 1;

          outline: none;
          box-shadow: var(---shadow-4);
        }

        input[type=radio] + label:active {
          z-index: 2;

          outline: none;
          box-shadow: var(---shadow-8);
        }

        :host(:first-of-type) input[type=radio] + label {
          border-top-left-radius: 0.25rem;
          border-top-right-radius: 0.25rem;
        }

        :host(:last-of-type) input[type=radio] + label {
          border-bottom-right-radius: 0.25rem;
          border-bottom-left-radius: 0.25rem;
        }

        :host(.keyboard) input[type=radio]:focus + label {
          z-index: 1;

          outline: none;
          box-shadow: var(---shadow-4);
        }

        :host(.keyboard) input[type=radio]:focus:checked + label {
          z-index: 1;

          background-color: var(---color-element-selected);
          outline: none;
          box-shadow: var(---shadow-4);
        }

        :host(.keyboard) input[type=radio]:focus + label:active {
          z-index: 2;

          outline: none;
          box-shadow: var(---shadow-8);
        }
      `,
    ];
  }

  render() {
    return html`
      <input type="radio" id=${`${this.uniqueId}-radio`} name=${this.name} value=${this.value} .checked=${this.checked} @change=${this.changed.bind(this)}>
      <label for=${`${this.uniqueId}-radio`}>
        <slot></slot>
      </label>
    `;
  }
}

customElements.define('decidable-toggle-option', DecidableToggleOption);
