
import {html, css} from 'lit';

import '@decidables/decidables-elements/button';

import DiscountableElement from '../discountable-element';

/*
  DiscountableResponse element
  <discountable-response>

  Attributes:

*/
export default class DiscountableResponse extends DiscountableElement {
  static get properties() {
    return {
      feedback: {
        attribute: 'feedback',
        type: Boolean,
        reflect: true,
      },
      trial: {
        attribute: 'trial',
        type: Boolean,
        reflect: true,
      },

      state: {
        attribute: false,
        type: String,
        reflect: false,
      },
      trialCount: {
        attribute: false,
        type: Number,
        reflect: false,
      },
      trialTotal: {
        attribute: false,
        type: Number,
        reflect: false,
      },
    };
  }

  constructor() {
    super();

    // Attributes
    this.trial = false; // Show trial count?
    this.feedback = false; // Show response feedback?

    // Properties
    this.states = ['off', 'waiting', 'feedback']; // Possible states
    this.state = 'off'; // Current state

    this.trialCount = 0; // Current trial
    this.trialTotal = 0; // Total trials

    // Private
    this.as = 0;
    this.ds = 0;
    this.al = 0;
    this.dl = 0;
    this.responses = ['first', 'second', 'nr']; // Possible values of 'response'
    this.response = undefined; // Response for current trial
  }

  start(as, ds, al, dl, trial) {
    this.state = 'waiting';

    this.as = as;
    this.ds = ds;
    this.al = al;
    this.dl = dl;
    this.trialCount = trial;

    this.response = undefined;
  }

  stop() {
    this.state = 'feedback';
    if (this.response === undefined) {
      this.response = 'nr';
    }
  }

  first() {
    this.responded('first');
  }

  second() {
    this.responded('second');
  }

  responded(response) {
    this.state = 'feedback';
    this.response = response;

    this.dispatchEvent(new CustomEvent('discountable-response', {
      detail: {
        trial: this.trialCount,
        as: this.as,
        ds: this.ds,
        al: this.al,
        dl: this.dl,
        response: this.response,
      },
      bubbles: true,
    }));
  }

  reset() {
    this.state = 'off';
    this.trialCount = 0;
    this.response = undefined;
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: inline-block;
        }

        /* Overall container */
        .holder {
          display: flex;

          flex-direction: column;
        }

        /* Trial messages */
        .trials {
          display: flex;

          flex-direction: column;

          justify-content: center;
        }

        .trial {
          text-align: center;
        }

        .trial .label {
          font-weight: 600;
        }

        /* Response buttons */
        .responses {
          display: flex;

          flex-direction: row;

          align-items: stretch;
          justify-content: center;
        }

        .response {
          width: 5.25rem;
        }

        .waiting[disabled] {
          --decidables-button-background-color: var(---color-element-enabled);
        }

        .selected[disabled][name="first"] {
          --decidables-button-background-color: var(---color-worse);
        }

        .selected[disabled][name="second"] {
          --decidables-button-background-color: var(---color-better);
        }

        /* Feedback messages */
        .feedbacks {
          display: flex;

          flex-direction: row;

          justify-content: center;
        }

        /* Outcome feedback */
        .feedback {
          display: flex;

          flex-direction: column;

          align-items: center;
          justify-content: center;

          width: 5.25rem;
          height: 3.5rem;
          padding: 0.375rem 0.75rem;
          margin: 0.25rem;

          text-align: center;

          background-color: var(---color-element-background);
          border: 1px solid var(---color-element-border);
        }

        .feedback.first {
          background-color: var(---color-worse-light);
        }

        .feedback.second {
          background-color: var(---color-better-light);
        }

        .feedback.nr {
          background-color: var(---color-nr-light);
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="holder">
        ${(this.trial)
          ? html`
            <div class="trials">
              <div class="trial">
                <span class="label">Trial: </span
                ><span class="count">${this.trialCount}</span
                ><span class="of"> of </span
                ><span class="total">${this.trialTotal}</span>
              </div>
            </div>`
          : html``}
        <div class="responses">
          <decidables-button 
            name="first"
            class="response ${
              (this.state === 'feedback' && this.response === 'first')
                ? 'selected'
                : (this.state === 'waiting')
                  ? 'waiting'
                  : ''
            }"
            ?disabled=${this.state !== 'waiting' || this.interactive !== true}
            @click=${this.first.bind(this)}
          >First</decidables-button>
          <decidables-button 
            name="second"
            class="response ${
              (this.state === 'feedback' && this.response === 'second')
                ? 'selected'
                : (this.state === 'waiting')
                  ? 'waiting'
                  : ''
            }"
            ?disabled=${this.state !== 'waiting' || this.interactive !== true}
            @click=${this.second.bind(this)}
          >Second</decidables-button>
        </div>
        ${this.feedback
          ? html`
            <div class="feedbacks">
              <div class="feedback
                ${((this.state === 'feedback') && this.feedback)
                  ? this.response
                  : ''}">
                ${((this.state === 'feedback') && this.feedback)
                  ? (this.response === 'first')
                    ? html`<span class="response">First</span>`
                    : (this.response === 'second')
                      ? html`<span class="response">Second</span>`
                      : html`<span class="response">No<br>Response</span>`
                  : ''}
              </div>
            </div>`
          : html``}
      </div>`;
  }
}

customElements.define('discountable-response', DiscountableResponse);
