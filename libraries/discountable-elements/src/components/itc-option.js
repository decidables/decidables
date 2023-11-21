
import {html, css} from 'lit';

import DiscountableElement from '../discountable-element';

/*
  ITCOption element
  <itc-option>

  Attributes:
  State
  Amount, Delay
*/
export default class ITCOption extends DiscountableElement {
  static get properties() {
    return {
      state: {
        attribute: 'state',
        type: String,
        reflect: true,
      },

      a: {
        attribute: 'amount',
        type: Number,
        reflect: true,
      },
      d: {
        attribute: 'delay',
        type: Number,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    this.states = ['choice', 'fixation', 'blank']; // Possible states
    this.state = 'choice'; // Current state

    this.a = 0;
    this.d = 0;
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: inline-block;
          
          width: 10rem;
          height: 10rem;
        }

        .holder {
          display: flex;
          
          flex-flow: column nowrap;

          align-items: center;
          justify-content: center;

          width: 100%;
          height: 100%;
          overflow: visible;
          

          background: var(---color-element-background);
          border: 2px solid var(---color-element-emphasis);
          border-radius: var(---border-radius);
        }

        .interactive,
        .static {
          font-size: 1.75rem;
        }

        .interactive {
          --decidables-spinner-font-size: 1.75rem;
        }

        .static {
          padding: 0 0.25rem;
          
          border-radius: var(---border-radius);
        }

        .amount {
          --decidables-spinner-prefix: "$";
          background-color: var(---color-a-light);
        }

        .amount.interactive {
          --decidables-spinner-input-width: 4rem;
        }

        .delay {
          background-color: var(---color-d-light);
        }
        
        .delay.interactive {
          --decidables-spinner-input-width: 6.75rem;
          --decidables-spinner-postfix: "days";
          --decidables-spinner-postfix-padding: 3.75rem;
        }
      `,
    ];
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('itc-option-change', {
      detail: {
        a: this.a,
        d: this.d,
      },
      bubbles: true,
    }));
  }

  aInput(event) {
    this.a = parseFloat(event.target.value);
    this.sendEvent();
  }

  dInput(event) {
    this.d = parseFloat(event.target.value);
    this.sendEvent();
  }

  render() { /* eslint-disable-line class-methods-use-this */
    return html`
      <div class="holder">
        ${(this.state === 'choice')
          ? this.interactive
            ? html`<decidables-spinner
              class="amount interactive"
              ?disabled=${!this.interactive}
              step="1"
              .value="${this.a}"
              @input=${this.aInput.bind(this)}
              ></decidables-spinner>`
            : html`<div
              class="amount static"
              >$${this.a}</div>`
          : ''
        }
        ${(this.state === 'choice')
          ? html`<div class="in">in</div>`
          : ''
        }
        ${(this.state === 'choice')
          ? this.interactive
            ? html`<decidables-spinner
              class="delay interactive"
              ?disabled=${!this.interactive}
              min="0" 
              step="1"
              .value="${this.d}"
              @input=${this.dInput.bind(this)}
              ></decidables-spinner>`
            : html`<div
              class="delay static"
              >${this.d} days</div>`
          : ''
        }
      </div>
    `;
  }
}

customElements.define('itc-option', ITCOption);
