
import {html, css} from 'lit';

import DiscountableElement from '../discountable-element';
import './itc-option';

/*
  ITCChoice element
  <itc-choice>

  Attributes:
*/
export default class ITCChoice extends DiscountableElement {
  static get properties() {
    return {
      state: {
        attribute: 'state',
        type: String,
        reflect: true,
      },

      a1: {
        attribute: 'amount1',
        type: Number,
        reflect: true,
      },
      d1: {
        attribute: 'delay1',
        type: Number,
        reflect: true,
      },
      a2: {
        attribute: 'amount2',
        type: Number,
        reflect: true,
      },
      d2: {
        attribute: 'delay2',
        type: Number,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    this.states = ['choice', 'fixation', 'blank']; // Possible states
    this.state = 'choice'; // Current state

    this.a1 = 10;
    this.d1 = 5;
    this.a2 = 40;
    this.d2 = 30;
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: inline-block;
        }

        .holder {
          user-select: none;
        }

        .holder > * {
          vertical-align: middle;
        }

        .query {
          margin: 0 0.5rem;

          font-family: var(--font-family-code);
          font-size: 1.75rem;
        }

        itc-option {
          width: 10rem;
          height: 10rem;
        }
      `,
    ];
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('itc-choice-change', {
      detail: {
        a1: this.a1,
        d1: this.d1,
        a2: this.a2,
        d2: this.d2,
      },
      bubbles: true,
    }));
  }

  firstChange(event) {
    this.a1 = parseFloat(event.detail.a);
    this.d1 = parseFloat(event.detail.d);
    this.sendEvent();
  }

  secondChange(event) {
    this.a2 = parseFloat(event.detail.a);
    this.d2 = parseFloat(event.detail.d);
    this.sendEvent();
  }

  render() {
    return html`
      <div class="holder">
        <itc-option 
          state=${this.state}
          ?interactive=${this.interactive}
          amount="${this.a1}"
          delay="${this.d1}"
          @itc-option-change=${this.firstChange.bind(this)}>
        </itc-option><span class="query"
         >${(this.state === 'choice') ? '?' : (this.state === 'fixation') ? '+' : html`∙`}</span
        ><itc-option 
          state=${this.state}
          ?interactive=${this.interactive}
          amount="${this.a2}"
          delay="${this.d2}"
          @itc-option-change=${this.secondChange.bind(this)}>
        </itc-option>
      </div>`;
  }
}

customElements.define('itc-choice', ITCChoice);
