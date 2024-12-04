
import {html, css} from 'lit';

import DDMMath from '@decidables/accumulable-math';
import '@decidables/decidables-elements/button';

import AccumulableElement from '../accumulable-element';

/*
  AccumulableResponse element
  <accumulable-response>

  Attributes:

*/
export default class AccumulableResponse extends AccumulableElement {
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
      correctPayoff: {
        attribute: 'correct-payoff',
        type: Number,
        reflect: true,
      },
      errorPayoff: {
        attribute: 'error-payoff',
        type: Number,
        reflect: true,
      },
      nrPayoff: {
        attribute: 'no-response-payoff',
        type: Number,
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
    this.feedback = false; // Display feedback?
    this.trial = false; // Show trial count?
    this.payoffs = ['none', 'trial', 'total']; // Possible types of 'payoff' info
    this.payoff = 'none'; // What payoff info to display

    this.correctPayoff = 0; // Correct payoff
    this.errorPayoff = 0; // Error payoff
    this.nrPayoff = 0; // No Response payoff

    // Properties
    this.states = ['off', 'waiting', 'feedback']; // Possible states
    this.state = 'off'; // Current state

    this.trialCount = 0; // Current trial
    this.trialTotal = 0; // Total trials

    // Private
    this.signals = ['left', 'right']; // Possible values of 'signal'
    this.signal = undefined; // Signal for current trial
    this.responses = ['left', 'right']; // Possible values of 'response'
    this.response = undefined; // Response for current trial
    this.outcomes = ['correct', 'error', 'nr']; // Possible values of 'outcome'
    this.outcome = undefined; // Outcome for current trial
    this.startTime = undefined; // Start time of current trial
    this.rt = undefined; // RT for current trial

    this.correctCount = 0; // Count of Correct Trials
    this.errorCount = 0; // Count of Error Trials
    this.nrCount = 0; // Count of No Response trials

    this.trials = []; // Record of trials in block
    this.alignState();
  }

  get trialPayoff() {
    switch (this.outcome) {
      case 'correct':
        return this.correctPayoff;
      case 'error':
        return this.errorPayoff;
      case 'nr':
        return this.nrPayoff;
      default:
        return undefined;
    }
  }

  get totalPayoff() {
    return ((this.correctCount * this.correctPayoff)
      + (this.errorCount * this.errorPayoff)
      + (this.nrCount * this.nrPayoff));
  }

  alignState() {
    const stats = DDMMath.trials2stats(this.trials);
    Object.assign(this, stats);
  }

  start(signal, trial) {
    this.startTime = Date.now();
    this.trialCount = trial;
    this.state = 'waiting';
    this.signal = signal;
    this.response = undefined;
    this.outcome = undefined;
    this.rt = undefined;
  }

  stop() {
    this.state = 'feedback';
    if (this.response === undefined) {
      this.outcome = 'nr';
      this.nrCount += 1;
      this.rt = undefined;

      this.trials.push({
        trial: this.trialCount,
        rt: this.rt,
        signal: this.signal,
        response: this.response,
        outcome: this.outcome,
        payoff: this.trialPayoff,
      });
      this.alignState();
    }
  }

  left() {
    this.responded('left');
  }

  right() {
    this.responded('right');
  }

  responded(response) {
    this.rt = Date.now() - this.startTime;
    this.state = 'feedback';
    this.response = response;
    if (this.signal === this.response) {
      this.outcome = 'correct';
      this.correctCount += 1;
    } else if (this.signal !== this.response) {
      this.outcome = 'error';
      this.errorCount += 1;
    }
    this.trials.push({
      trial: this.trialCount,
      rt: this.rt,
      signal: this.signal,
      response: this.response,
      outcome: this.outcome,
      payoff: this.trialPayoff,
    });
    this.alignState();

    this.dispatchEvent(new CustomEvent('accumulable-response', {
      detail: {
        trial: this.trialCount,
        rt: this.rt,
        signal: this.signal,
        response: this.response,
        outcome: this.outcome,
        payoff: this.trialPayoff,

        correctCount: this.correctCount,
        errorCount: this.errorCount,
        nrCount: this.nrCount,
        accuracy: this.accuracy,
        meanRT: this.meanRT,
        correctMeanRT: this.correctMeanRT,
        errorMeanRT: this.errorMeanRT,
        sdRT: this.sdRT,
        correctSDRT: this.correctSDRT,
        errorSDRT: this.errorSDRT,

        totalPayoff: this.totalPayoff,
      },
      bubbles: true,
    }));
  }

  reset() {
    this.state = 'off';
    this.trialCount = 0;
    this.rt = undefined;
    this.signal = undefined;
    this.response = undefined;
    this.outcome = undefined;
    this.correctCount = 0;
    this.errorCount = 0;
    this.nrCount = 0;

    this.trials = [];
    this.alignState();
  }

  keydown(event) {
    if (this.state === 'waiting') {
      if (event.key === 'ArrowLeft') {
        this.responded('left');
        event.preventDefault();
      } else if (event.key === 'ArrowRight') {
        this.responded('right');
        event.preventDefault();
      }
    }
  }

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener('keydown', this.keydown.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('keydown', this.keydown.bind(this));

    super.disconnectedCallback();
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

        /* Response buttons */
        .responses {
          display: flex;

          flex-direction: row;

          align-items: stretch;
          justify-content: center;
        }

        .response {
          flex: 1 0 50%;
        }

        .waiting[disabled] {
          --decidables-button-background-color: var(---color-element-enabled);
        }

        .selected[disabled][name="left"] {
          --decidables-button-background-color: var(---color-left);
        }

        .selected[disabled][name="right"] {
          --decidables-button-background-color: var(---color-right);
        }

        /* Feedback messages */
        .feedbacks {
          display: flex;

          flex-direction: column;

          align-items: center;

          margin: 0.25rem;
        }

        /* Trial feedback */
        .trial {
          text-align: center;
        }

        .trial .label {
          font-weight: 600;
        }

        /* Outcome feedback */
        .feedback {
          display: flex;

          flex-direction: column;

          align-items: center;
          justify-content: center;

          width: 6rem;
          height: 3.5rem;
          padding: 0.375rem 0.75rem;
          margin: 0.25rem;

          text-align: center;

          background-color: var(---color-element-background);
          border: 1px solid var(---color-element-border);
        }

        :host([payoff="trial"]) .feedback,
        :host([payoff="total"]) .feedback {
          height: 5rem;
        }

        .feedback.correct {
          background-color: var(---color-correct-light);
        }

        .feedback.error {
          background-color: var(---color-error-light);
        }

        .feedback.nr {
          background-color: var(---color-nr-light);
        }

        .feedback .outcome {
          font-weight: 600;
          line-height: 1.15;
        }

        /* Payoff feedback */
        .total {
          text-align: center;
        }

        .total .label {
          font-weight: 600;
        }
      `,
    ];
  }

  render() {
    const payoffFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    const payoffFormat = (number) => {
      return payoffFormatter.formatToParts(number).map(({type, value}) => {
        if (type === 'minusSign') {
          return '−';
        }
        return value;
      }).reduce((string, part) => { return string + part; });
    };

    return html`
      <div class="holder">
        <div class="responses">
          <decidables-button name="left" class=${`response ${(this.state === 'feedback' && this.response === 'left') ? 'selected' : ((this.state === 'waiting') ? 'waiting' : '')}`} ?disabled=${this.state !== 'waiting' || this.interactive !== true} @click=${this.left.bind(this)}>Left</decidables-button>
          <decidables-button name="right" class=${`response ${(this.state === 'feedback' && this.response === 'right') ? 'selected' : ((this.state === 'waiting') ? 'waiting' : '')}`} ?disabled=${this.state !== 'waiting' || this.interactive !== true} @click=${this.right.bind(this)}>Right</decidables-button>
        </div>
        ${(this.trial || this.feedback || this.payoff === 'total')
          ? html`
            <div class="feedbacks">
              ${(this.trial)
                ? html`
                  <div class="trial">
                    <span class="label">Trial: </span><span class="count">${this.trialCount}</span><span class="of"> of </span><span class="total">${this.trialTotal}</span>
                  </div>`
                : html``}
              ${(this.feedback)
                ? html`
                  <div class=${`feedback ${((this.state === 'feedback') && this.feedback)
                    ? this.outcome
                    : ''}`}>
                    ${((this.state === 'feedback') && this.feedback)
                      ? (this.outcome === 'correct')
                        ? html`<span class="outcome">Correct</span>`
                        : (this.outcome === 'error')
                          ? html`<span class="outcome">Error</span>`
                          : html`<span class="outcome">No<br>Response</span>`
                      : ''}
                    ${((this.state === 'feedback') && (this.payoff === 'trial' || this.payoff === 'total'))
                      ? html`<span class="payoff">${payoffFormat(this.trialPayoff)}</span>`
                      : html``}
                  </div>`
                : html``}
              ${(this.payoff === 'total')
                ? html`
                  <div class="total">
                    <span class="label">Total: </span><span class="value">${payoffFormat(this.totalPayoff)}</span>
                  </div>`
                : html``}
            </div>`
          : html``}
      </div>`;
  }
}

customElements.define('accumulable-response', AccumulableResponse);
