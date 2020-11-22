
import {html, css} from 'lit-element';

import '@decidable/decidable-elements';

import CPTElement from '../cpt-element';

/*
  DecisionResponse element
  <decision-response>

  Attributes:

*/
export default class DecisionResponse extends CPTElement {
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
    this.feedbacks = ['none', 'outcome']; // Possible values for 'feedback'
    this.feedback = 'none'; // What feedback to display
    this.trial = false; // Show trial count?
    this.payoffs = ['none', 'selection', 'both']; // Possible types of 'payoff' info
    this.payoff = 'none'; // What payoff info to display

    // Properties
    this.states = ['off', 'waiting', 'feedback']; // Possible states
    this.state = 'off'; // Current state

    this.trialCount = 0; // Current trial
    this.trialTotal = 0; // Total trials

    // Private
    this.xl = 0;
    this.xw = 0;
    this.pw = 0;
    this.xs = 0;
    this.gamblePayoff = 0;
    this.surePayoff = 0;
    this.nrPayoff = 0;
    this.betters = ['gamble', 'sure', 'even']; // Possible values of 'better'
    this.better = undefined; // Better option for current trial
    this.responses = ['gamble', 'sure', 'nr']; // Possible values of 'response'
    this.response = undefined; // Response for current trial
    this.outcomes = ['better', 'worse', 'even', 'nr']; // Possible values of 'outcome'
    this.outcome = undefined; // Outcome for current trial
  }

  get trialPayoff() {
    switch (this.response) {
      case 'gamble':
        return this.gamblePayoff;
      case 'sure':
        return this.surePayoff;
      case 'nr':
        return this.nrPayoff;
      default:
        return undefined;
    }
  }

  start(xl, xw, pw, xs, gamblePayoff, surePayoff, better, trial) {
    this.state = 'waiting';

    this.xl = xl;
    this.xw = xw;
    this.pw = pw;
    this.xs = xs;
    this.gamblePayoff = gamblePayoff;
    this.surePayoff = surePayoff;
    this.better = better;
    this.trialCount = trial;

    this.response = undefined;
    this.outcome = undefined;
  }

  stop() {
    this.state = 'feedback';
    if (this.response === undefined) {
      this.outcome = 'nr';
    }
  }

  gamble() {
    this.responded('gamble');
  }

  sure() {
    this.responded('sure');
  }

  responded(response) {
    this.state = 'feedback';
    this.response = response;
    this.outcome = (this.better === 'even')
      ? 'even'
      : (this.better === this.response)
        ? 'better'
        : 'worse';

    this.dispatchEvent(new CustomEvent('decision-response', {
      detail: {
        trial: this.trialCount,
        better: this.better,
        gamblePayoff: this.gamblePayoff,
        surePayoff: this.surePayoff,
        xl: this.xl,
        xw: this.xw,
        pw: this.pw,
        xs: this.xs,
        response: this.response,
        outcome: this.outcome,
        payoff: this.trialPayoff,
      },
      bubbles: true,
    }));
  }

  reset() {
    this.state = 'off';
    this.trialCount = 0;
    this.better = undefined;
    this.gamblePayoff = 0;
    this.surePayoff = 0;
    this.response = undefined;
    this.outcome = undefined;
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
          --decidable-button-background-color: var(---color-element-enabled);
        }

        .selected[disabled][name="gamble"] {
          --decidable-button-background-color: var(---color-worse);
        }

        .selected[disabled][name="sure"] {
          --decidable-button-background-color: var(---color-better);
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

        .feedback.better {
          background-color: var(---color-better-light);
        }

        .feedback.worse {
          background-color: var(---color-worse-light);
        }

        .feedback.even {
          background-color: var(---color-even-light);
        }

        .feedback.nr {
          background-color: var(---color-nr-light);
        }

        .feedback .outcome {
          font-weight: 600;
          line-height: 1.15;
        }

        :host([payoff="selection"]) .feedback,
        :host([payoff="both"]) .feedback {
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
        ${(this.trial)
          ? html`
            <div class="trials">
              <div class="trial">
                <span class="label">Trial: </span><span class="count">${this.trialCount}</span><span class="of"> of </span><span class="total">${this.trialTotal}</span>
              </div>
            </div>`
          : html``}
        <div class="responses">
          <decidable-button name="gamble" class="response ${(this.state === 'feedback' && this.response === 'gamble') ? 'selected' : ((this.state === 'waiting') ? 'waiting' : '')}" ?disabled=${this.state !== 'waiting' || this.interactive !== true} @click=${this.gamble.bind(this)}>Gamble</decidable-button>
          <decidable-button name="sure" class="response ${(this.state === 'feedback' && this.response === 'sure') ? 'selected' : ((this.state === 'waiting') ? 'waiting' : '')}" ?disabled=${this.state !== 'waiting' || this.interactive !== true} @click=${this.sure.bind(this)}>Sure</decidable-button>
        </div>
        ${(this.feedback !== 'none' || this.payoff !== 'none')
          ? html`
            <div class="feedbacks">
              <div class="feedback gamble
                ${((this.state === 'feedback') && (this.feedback === 'outcome') && (this.response === 'gamble'))
                  ? this.outcome
                  : ''}">
                ${((this.state === 'feedback') && (this.feedback === 'outcome') && (this.response === 'gamble'))
                  ? (this.outcome === 'better')
                    ? html`<span class="outcome">Better</span>`
                    : (this.outcome === 'worse')
                      ? html`<span class="outcome">Worse</span>`
                      : (this.outcome === 'even')
                        ? html`<span class="outcome">Even</span>`
                        : html`<span class="outcome">No<br>Response</span>`
                  : ''}
                ${(((this.payoff === 'both') || (this.payoff === 'selection')) && (this.response === 'gamble'))
                  ? html`<span class="payoff">${(this.response === 'gamble') ? 'Win:' : 'Miss:'} ${this.trialPayoff}</span>`
                  : html``}
              </div>
              <div class="feedback sure
                ${((this.state === 'feedback') && (this.feedback === 'outcome') && (this.response === 'sure'))
                  ? this.outcome
                  : ''}">
                ${((this.state === 'feedback') && (this.feedback === 'outcome') && (this.response === 'sure'))
                  ? (this.outcome === 'better')
                    ? html`<span class="outcome">Better</span>`
                    : (this.outcome === 'worse')
                      ? html`<span class="outcome">Worse</span>`
                      : (this.outcome === 'even')
                        ? html`<span class="outcome">Even</span>`
                        : html`<span class="outcome">No<br>Response</span>`
                  : ''}
                ${(((this.payoff === 'both') || (this.payoff === 'selection')) && (this.response === 'sure'))
                  ? html`<span class="payoff">${(this.response === 'sure') ? 'Win:' : 'Miss:'} ${this.trialPayoff}</span>`
                  : html``}
              </div>
            </div>`
          : html``}
      </div>`;
  }
}

customElements.define('decision-response', DecisionResponse);
