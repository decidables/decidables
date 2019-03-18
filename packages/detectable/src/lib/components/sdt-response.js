
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
    };
  }

  constructor() {
    super();

    this.feedbacks = ['none', 'accuracy', 'outcome', 'payoff', 'total-payoff'];
    this.feedback = 'outcome';

    this.payoffs = ['none', 'trial', 'total'];
    this.payoff = 'none';

    this.states = ['off', 'waiting', 'feedback'];
    this.state = 'off';

    this.signals = ['present', 'absent'];
    this.signal = undefined;

    this.responses = ['present', 'absent'];
    this.response = undefined;

    this.outcomes = ['h', 'm', 'fa', 'cr', 'nr'];
    this.outcome = undefined;

    this.accuracies = ['c', 'e', 'nr'];
    this.accuracy = undefined;

    this.h = 0;
    this.m = 0;
    this.cr = 0;
    this.fa = 0;

    this.c = 0;
    this.e = 0;

    this.nr = 0;

    this.hPayoff = 0;
    this.mPayoff = 0;
    this.crPayoff = 0;
    this.faPayoff = 0;
    this.nrPayoff = 0;

    this.trialPayoff = undefined;
    this.totalPayoff = 0;
  }

  start(signal) {
    this.state = 'waiting';
    this.signal = signal;
    this.response = undefined;
    this.outcome = undefined;
    this.trialPayoff = undefined;
  }

  stop() {
    this.state = 'feedback';
    if (this.response === undefined) {
      this.outcome = 'nr';
      this.nr += 1;
      this.accuracy = 'nr';
      this.trialPayoff = this.nrPayoff;
      this.totalPayoff += this.nrPayoff;
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
      this.trialPayoff = this.hPayoff;
      this.totalPayoff += this.hPayoff;
    } else if (this.signal === 'present' && this.response === 'absent') {
      this.outcome = 'm';
      this.m += 1;
      this.accuracy = 'e';
      this.e += 1;
      this.trialPayoff = this.mPayoff;
      this.totalPayoff += this.mPayoff;
    } else if (this.signal === 'absent' && this.response === 'present') {
      this.outcome = 'fa';
      this.fa += 1;
      this.accuracy = 'e';
      this.e += 1;
      this.trialPayoff = this.faPayoff;
      this.totalPayoff += this.faPayoff;
    } else if (this.signal === 'absent' && this.response === 'absent') {
      this.outcome = 'cr';
      this.cr += 1;
      this.accuracy = 'c';
      this.c += 1;
      this.trialPayoff = this.crPayoff;
      this.totalPayoff += this.crPayoff;
    }

    this.dispatchEvent(new CustomEvent('sdt-response', {
      detail: {
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
    this.signal = undefined;
    this.response = undefined;
    this.outcome = undefined;
    this.accuracy = undefined;
    this.trialPayoff = undefined;
    this.h = 0;
    this.m = 0;
    this.cr = 0;
    this.fa = 0;
    this.nr = 0;
    this.c = 0;
    this.e = 0;
    this.totalPayoff = 0;
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
          background-color: var(---color-background);
        }

        .feedback.e {
          color: var(---color-background);

          background-color: var(---color-text);
        }

        .feedback .outcome {
          font-weight: 600;
          line-height: 1.15;
        }

        :host([payoff="trial"]) .feedback,
        :host([payoff="total"]) .feedback {
          height: 4rem;
        }

        /* Payoff outcomes */
        .payoffs {
          display: flex;

          flex-direction: column;

          justify-content: center;
        }

        .payoffs .payoff {
          display: flex;

          flex-direction: column;

          align-items: center;
          justify-content: center;

          margin: 0.25rem;

          text-align: center;
        }

        .payoffs .payoff .label {
          font-weight: 600;
          line-height: 1.15;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="holder">
        <div class="responses">
          <button name="present" class=${(this.state === 'feedback' && this.response === 'present') ? 'selected' : ''} ?disabled=${this.state !== 'waiting'} @click=${this.present.bind(this)}>Present</button>
          <button name="absent" class=${(this.state === 'feedback' && this.response === 'absent') ? 'selected' : ''} ?disabled=${this.state !== 'waiting'} @click=${this.absent.bind(this)}>Absent</button>
        </div>
        ${(this.feedback === 'none')
          ? html``
          : html`
            <div class="feedbacks">
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
              </div>`}
        ${(this.payoff === 'total')
          ? html`
            <div class="payoffs">
              <div class="payoff">
                <span class="label">Total</span><span class="value">${this.totalPayoff}</span>
              </div>
            </div>`
          : html``}
        </div>
      </div>`;
  }
}

customElements.define('sdt-response', SDTResponse);
