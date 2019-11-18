
import {html, css} from 'lit-element';

import SDTElement from '../sdt-element';
import SDTMixinStyleButton from '../mixins/styleButton';

/*
  SDTResponse element
  <sdt-response>

  Attributes:

*/
export default class SDTResponse extends SDTMixinStyleButton(SDTElement) {
  static get properties() {
    return {
      feedback: {
        attribute: 'feedback',
        type: String,
        reflect: true,
      },
      trial: {
        attribute: 'trial',
        type: Boolean,
        reflect: true,
      },
      payoff: {
        attribute: 'payoff',
        type: String,
        reflect: true,
      },
      hPayoff: {
        attribute: 'hit-payoff',
        type: Number,
        reflect: true,
      },
      mPayoff: {
        attribute: 'miss-payoff',
        type: Number,
        reflect: true,
      },
      faPayoff: {
        attribute: 'false-alarm-payoff',
        type: Number,
        reflect: true,
      },
      crPayoff: {
        attribute: 'correct-rejection-payoff',
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
    this.feedbacks = ['none', 'accuracy', 'outcome']; // Possible values for 'feedback'
    this.feedback = 'outcome'; // What feedback to display
    this.trial = false; // Show trial count?
    this.payoffs = ['none', 'trial', 'total']; // Possible types of 'payoff' info
    this.payoff = 'none'; // What payoff info to display

    this.hPayoff = 0; // Hit payoff
    this.mPayoff = 0; // Miss payoff
    this.crPayoff = 0; // Correct Rejection payoff
    this.faPayoff = 0; // False Alarm payoff
    this.nrPayoff = 0; // No Response payoff

    // Properties
    this.states = ['off', 'waiting', 'feedback']; // Possible states
    this.state = 'off'; // Current state

    this.trialCount = 0; // Current trial
    this.trialTotal = 0; // Total trials

    // Private
    this.signals = ['present', 'absent']; // Possible values of 'signal'
    this.signal = undefined; // Signal for current trial
    this.responses = ['present', 'absent']; // Possible values of 'response'
    this.response = undefined; // Response for current trial
    this.outcomes = ['h', 'm', 'fa', 'cr', 'nr']; // Possible values of 'outcome'
    this.outcome = undefined; // Outcome for current trial
    this.accuracies = ['c', 'e', 'nr']; // Possible values of 'accuracy'
    this.accuracy = undefined; // Accuracy for current trial

    this.h = 0; // Count of Hits
    this.m = 0; // Count of Misses
    this.cr = 0; // Count of Correct Rejections
    this.fa = 0; // Count of False Alarms

    this.c = 0; // Count of Correct trials
    this.e = 0; // Count of Error trials

    this.nr = 0; // Count of No Response trials
  }

  get trialPayoff() {
    switch (this.outcome) {
      case 'h':
        return this.hPayoff;
      case 'm':
        return this.mPayoff;
      case 'fa':
        return this.faPayoff;
      case 'cr':
        return this.crPayoff;
      case 'nr':
        return this.nrPayoff;
      default:
        return undefined;
    }
  }

  get totalPayoff() {
    return ((this.h * this.hPayoff)
      + (this.m * this.mPayoff)
      + (this.cr * this.crPayoff)
      + (this.fa * this.faPayoff)
      + (this.nr * this.nrPayoff));
  }

  start(signal, trial) {
    this.trialCount = trial;
    this.state = 'waiting';
    this.signal = signal;
    this.response = undefined;
    this.outcome = undefined;
  }

  stop() {
    this.state = 'feedback';
    if (this.response === undefined) {
      this.outcome = 'nr';
      this.nr += 1;
      this.accuracy = 'nr';
    }
  }

  present() {
    this.responded('present');
  }

  absent() {
    this.responded('absent');
  }

  responded(response) {
    this.state = 'feedback';
    this.response = response;
    if (this.signal === 'present' && this.response === 'present') {
      this.outcome = 'h';
      this.h += 1;
      this.accuracy = 'c';
      this.c += 1;
    } else if (this.signal === 'present' && this.response === 'absent') {
      this.outcome = 'm';
      this.m += 1;
      this.accuracy = 'e';
      this.e += 1;
    } else if (this.signal === 'absent' && this.response === 'present') {
      this.outcome = 'fa';
      this.fa += 1;
      this.accuracy = 'e';
      this.e += 1;
    } else if (this.signal === 'absent' && this.response === 'absent') {
      this.outcome = 'cr';
      this.cr += 1;
      this.accuracy = 'c';
      this.c += 1;
    }

    this.dispatchEvent(new CustomEvent('sdt-response', {
      detail: {
        trial: this.trialCount,
        signal: this.signal,
        response: this.response,
        outcome: this.outcome,
        payoff: this.trialPayoff,
        h: this.h,
        m: this.m,
        fa: this.fa,
        cr: this.cr,
        nr: this.nr,
        totalPayoff: this.totalPayoff,
      },
      bubbles: true,
    }));
  }

  reset() {
    this.state = 'off';
    this.trialCount = 0;
    this.signal = undefined;
    this.response = undefined;
    this.outcome = undefined;
    this.accuracy = undefined;
    this.h = 0;
    this.m = 0;
    this.cr = 0;
    this.fa = 0;
    this.nr = 0;
    this.c = 0;
    this.e = 0;
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

          flex-direction: row;
        }

        /* Response buttons */
        .responses {
          display: flex;

          flex-direction: column;

          align-items: stretch;
          justify-content: center;
        }

        .waiting:disabled {
          background-color: var(---color-element-enabled);
          outline: none;
          box-shadow: none;
        }

        .selected[name="present"]:disabled {
          background-color: var(---color-present);
        }

        .selected[name="absent"]:disabled {
          background-color: var(---color-absent);
        }

        /* Feedback messages */
        .feedbacks {
          display: flex;

          flex-direction: column;

          justify-content: center;
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

        .feedback.h {
          background-color: var(---color-h-light);
        }

        .feedback.m {
          background-color: var(---color-m-light);
        }

        .feedback.fa {
          background-color: var(---color-fa-light);
        }

        .feedback.cr {
          background-color: var(---color-cr-light);
        }

        .feedback.nr {
          background-color: var(---color-element-background);
        }

        .feedback.c {
          background-color: var(---color-correct-light);
        }

        .feedback.e {
          color: var(---color-background);

          background-color: var(---color-error-light);
        }

        .feedback .outcome {
          font-weight: 600;
          line-height: 1.15;
        }

        :host([payoff="trial"]) .feedback,
        :host([payoff="total"]) .feedback {
          height: 4rem;
        }

        /* Payoff feedback */
        .payoff {
          text-align: center;
        }

        .payoff .label {
          font-weight: 600;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="holder">
        <div class="responses">
          <button name="present" class=${(this.state === 'feedback' && this.response === 'present') ? 'selected' : ((this.state === 'waiting') ? 'waiting' : '')} ?disabled=${this.state !== 'waiting' || this.interactive !== true} @click=${this.present.bind(this)}>Present</button>
          <button name="absent" class=${(this.state === 'feedback' && this.response === 'absent') ? 'selected' : ((this.state === 'waiting') ? 'waiting' : '')} ?disabled=${this.state !== 'waiting' || this.interactive !== true} @click=${this.absent.bind(this)}>Absent</button>
        </div>
        ${(this.trial || this.feedback !== 'none' || this.payoff === 'total')
          ? html`
            <div class="feedbacks">
              ${(this.trial)
                ? html`
                  <div class="trial">
                    <span class="label">Trial: </span><span class="count">${this.trialCount}</span><span class="of"> of </span><span class="total">${this.trialTotal}</span>
                  </div>`
                : html``}
              ${(this.feedback !== 'none')
                ? html`
                  <div class=${`feedback ${(this.state === 'feedback')
                    ? (this.feedback === 'outcome')
                      ? this.outcome
                      : this.accuracy
                    : ''}`}>
                    ${(this.state === 'feedback')
                      ? (this.feedback === 'outcome')
                        ? (this.outcome === 'h')
                          ? html`<span class="outcome">Hit</span>`
                          : (this.outcome === 'm')
                            ? html`<span class="outcome">Miss</span>`
                            : (this.outcome === 'fa')
                              ? html`<span class="outcome">False<br>Alarm</span>`
                              : (this.outcome === 'cr')
                                ? html`<span class="outcome">Correct<br>Rejection</span>`
                                : html`<span class="outcome">No<br>Response</span>`
                        : (this.accuracy === 'c')
                          ? html`<span class="outcome">Correct</span>`
                          : (this.accuracy === 'e')
                            ? html`<span class="outcome">Error</span>`
                            : html`<span class="outcome">No<br>Response</span>`
                      : ''}
                    ${(this.payoff === 'trial' || this.payoff === 'total')
                      ? html`<span class="payoff">${this.trialPayoff}</span>`
                      : html``}
                  </div>`
                : html``}
              ${(this.payoff === 'total')
                ? html`
                  <div class="payoff">
                    <span class="label">Total: </span><span class="value">${this.totalPayoff}</span>
                  </div>`
                : html``}
            </div>`
          : html``}
      </div>`;
  }
}

customElements.define('sdt-response', SDTResponse);
