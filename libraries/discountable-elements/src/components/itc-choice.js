
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

      as: {
        attribute: 'amount-ss',
        type: Number,
        reflect: true,
      },
      ds: {
        attribute: 'delay-ss',
        type: Number,
        reflect: true,
      },
      al: {
        attribute: 'amount-ll',
        type: Number,
        reflect: true,
      },
      dl: {
        attribute: 'delay-ll',
        type: Number,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    this.states = ['choice', 'fixation', 'blank']; // Possible states
    this.state = 'choice'; // Current state

    this.as = 10;
    this.ds = 5;
    this.al = 40;
    this.dl = 30;
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
        as: this.as,
        ds: this.ds,
        al: this.al,
        dl: this.dl,
      },
      bubbles: true,
    }));
  }

  ssChange(event) {
    this.as = parseFloat(event.detail.a);
    this.ds = parseFloat(event.detail.d);
    this.sendEvent();
  }

  llChange(event) {
    this.al = parseFloat(event.detail.a);
    this.dl = parseFloat(event.detail.d);
    this.sendEvent();
  }

  render() {
    return html`
      <div class="holder">
        <itc-option 
          state=${this.state}
          ?interactive=${this.interactive}
          amount="${this.as}"
          delay="${this.ds}"
          @itc-option-change=${this.ssChange.bind(this)}>
        </itc-option><span class="query"
         >${(this.state === 'choice') ? '?' : (this.state === 'fixation') ? '+' : html`∙`}</span
        ><itc-option 
          state=${this.state}
          ?interactive=${this.interactive}
          amount="${this.al}"
          delay="${this.dl}"
          @itc-option-change=${this.llChange.bind(this)}>
        </itc-option>
      </div>`;
  }
}

customElements.define('itc-choice', ITCChoice);
