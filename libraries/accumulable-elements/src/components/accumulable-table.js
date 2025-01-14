
import {html, css} from 'lit';

import '@decidables/decidables-elements/spinner';

import AccumulableElement from '../accumulable-element';

/*
  AccumulableTable element
  <accumulable-table>

  Attributes:
  ????Hit; Miss; FalseAlarm; CorrectRejection;
*/
export default class AccumulableTable extends AccumulableElement {
  static get properties() {
    return {
      numeric: {
        attribute: 'numeric',
        type: Boolean,
        reflect: true,
      },
      summary: {
        attribute: 'summary',
        type: Boolean,
        reflect: true,
      },
      color: {
        attribute: 'color',
        type: String,
        reflect: true,
      },

      correctCount: {
        attribute: 'correct-count',
        type: Number,
        reflect: true,
      },
      errorCount: {
        attribute: 'error-count',
        type: Number,
        reflect: true,
      },
      nrCount: {
        attribute: 'nr-count',
        type: Number,
        reflect: true,
      },
      accuracy: {
        attribute: 'accuracy',
        type: Number,
        reflect: true,
      },
      correctMeanRT: {
        attribute: 'correct-mean-rt',
        type: Number,
        reflect: true,
      },
      errorMeanRT: {
        attribute: 'error-mean-rt',
        type: Number,
        reflect: true,
      },
      meanRT: {
        attribute: 'mean-rt',
        type: Number,
        reflect: true,
      },
      correctSDRT: {
        attribute: 'correct-sd-rt',
        type: Number,
        reflect: true,
      },
      errorSDRT: {
        attribute: 'error-sd-rt',
        type: Number,
        reflect: true,
      },
      sdRT: {
        attribute: 'sd-rt',
        type: Number,
        reflect: true,
      },

      payoff: {
        attribute: 'payoff',
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
    };
  }

  constructor() {
    super();

    this.numeric = false;
    this.summary = false;

    this.colors = ['none', 'measure', 'outcome', 'all'];
    this.color = 'all';

    this.payoff = false;
    this.correctPayoff = undefined; // Correct payoff
    this.errorPayoff = undefined; // Error payoff
    this.nrPayoff = undefined; // No Response payoff

    this.correctCount = NaN;
    this.errorCount = NaN;
    this.nrCount = NaN;
    this.accuracy = NaN;
    this.correctMeanRT = NaN;
    this.errorMeanRT = NaN;
    this.meanRT = NaN;
    this.correctSDRT = NaN;
    this.errorSDRT = NaN;
    this.sdRT = NaN;
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('accumulable-table-change', {
      detail: {
        correctCount: this.correctCount,
        errorCount: this.errorCount,
        nrCount: this.nrCount,
        accuracy: this.accuracy,
        correctMeanRT: this.correctMeanRT,
        errorMeanRT: this.errorMeanRT,
        meanRT: this.meanRT,
        correctSDRT: this.correctSDRT,
        errorSDRT: this.errorSDRT,
        sdRT: this.sdRT,
      },
      bubbles: true,
    }));
  }

  correctCountInput(e) {
    this.correctCount = parseInt(e.target.value, 10);
    this.sendEvent();
  }

  errorCountInput(e) {
    this.errorCount = parseInt(e.target.value, 10);
    this.sendEvent();
  }

  accuracyInput(e) {
    this.accuracy = parseFloat(e.target.value);
    this.sendEvent();
  }

  correctMeanRTInput(e) {
    this.correctMeanRT = parseFloat(e.target.value);
    this.sendEvent();
  }

  errorMeanRTInput(e) {
    this.errorMeanRT = parseFloat(e.target.value);
    this.sendEvent();
  }

  meanRTInput(e) {
    this.meanRT = parseFloat(e.target.value);
    this.sendEvent();
  }

  correctSDRTInput(e) {
    this.correctSDRT = parseFloat(e.target.value);
    this.sendEvent();
  }

  errorSDRTInput(e) {
    this.errorSDRT = parseFloat(e.target.value);
    this.sendEvent();
  }

  sdRTInput(e) {
    this.sdRT = parseFloat(e.target.value);
    this.sendEvent();
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: inline-block;
        }

        /* Overall element */
        table {
          text-align: center;

          border-collapse: collapse;

          border: 0;
        }

        /* Headers */
        .th-main {
          padding: 0;

          font-weight: bold;
        }

        .th-sub {
          padding: 0 0.25rem;

          font-weight: 600;
        }

        .th-left {
          padding-left: 0;

          text-align: right;
        }

        /* Cells */
        .td {
          width: 10rem;

          padding: 0.25rem 0.25rem 0.375rem;

          transition: all var(---transition-duration) ease;
        }

        .numeric .td {
          width: 7rem;
        }

        /* Labels */
        .payoff {
          font-weight: 600;
          line-height: 0.75rem;
        }

        /* User interaction <input> */
        .td-data decidables-spinner {
          --decidables-spinner-input-width: 3.5rem;
        }

        .td-summary decidables-spinner {
          --decidables-spinner-input-width: 4.5rem;
        }

        /* Table emphasis */
        .td-data.correct {
          border-left: 2px solid var(---color-element-emphasis);
        }

        .td-data.error {
          border-right: 2px solid var(---color-element-emphasis);
        }

        .td-data.count {
          border-top: 2px solid var(---color-element-emphasis);
        }

        .td-data.sd-rt {
          border-bottom: 2px solid var(---color-element-emphasis);
        }

        /* Color schemes */

        /* (Default) All color scheme */
        .correct.count {
          background: var(---color-element-background); /* ###### */
        }

        .error.count {
          background: var(---color-element-background); /* ###### */
        }

        .overall.proportion-correct {
          background: var(---color-element-background); /* ###### */
        }

        .correct.mean-rt {
          background: var(---color-element-background); /* ###### */
        }

        .error.mean-rt {
          background: var(---color-element-background); /* ###### */
        }

        .overall.mean-rt {
          background: var(---color-element-background); /* ###### */
        }

        .correct.sd-rt {
          background: var(---color-element-background); /* ###### */
        }

        .error.sd-rt {
          background: var(---color-element-background); /* ###### */
        }

        .overall.sd-rt {
          background: var(---color-element-background); /* ###### */
        }

        /* Outcome color scheme */
        :host([color="outcome"]) .correct {
          background: var(---color-correct-light);
        }

        :host([color="outcome"]) .error {
          background: var(---color-error-light);
        }

        :host([color="outcome"]) .overall {
          background: var(---color-element-background);
        }

        /* Measure color scheme */
        :host([color="measure"]) .count,
        :host([color="measure"]) .proportion-correct {
          background: var(---color-element-background); /* ###### */
        }

        :host([color="measure"]) .mean-rt {
          background: var(---color-element-background); /* ###### */
        }

        :host([color="measure"]) .sd-rt {
          background: var(---color-element-background); /* ###### */
        }

        /* No color scheme */
        :host([color="none"]) .td-data,
        :host([color="none"]) .td-summary {
          background: var(---color-element-background);
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

    let correctCount;
    let errorCount;
    let accuracy;
    let correctMeanRT;
    let errorMeanRT;
    let meanRT;
    let correctSDRT;
    let errorSDRT;
    let sdRT;
    if (this.numeric) {
      correctCount = html`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.correctCount}" @input=${this.correctCountInput.bind(this)}>
          <span>Correct Count</span>
          ${this.payoff ? html`<span class="payoff">${payoffFormat(this.correctPayoff)}</span>` : html``}
        </decidables-spinner>
      `;
      errorCount = html`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.errorCount}" @input=${this.errorCountInput.bind(this)}>
          <span>Error Count</span>
          ${this.payoff ? html`<span class="payoff">${payoffFormat(this.errorPayoff)}</span>` : html``}
        </decidables-spinner>
      `;
      accuracy = html`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".01" .value="${+this.accuracy.toFixed(2)}" @input=${this.accuracyInput.bind(this)}>
          <span>Accuracy</span>
        </decidables-spinner>
        `;
      correctMeanRT = html`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.correctMeanRT.toFixed(0)}" @input=${this.correctMeanRTInput.bind(this)}>
          <span>Correct Mean RT</span>
        </decidables-spinner>
      `;
      errorMeanRT = html`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.errorMeanRT.toFixed(0)}" @input=${this.errorMeanRTInput.bind(this)}>
          <span>Error Mean RT</span>
        </decidables-spinner>
      `;
      meanRT = html`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.meanRT.toFixed(0)}" @input=${this.meanRTInput.bind(this)}>
          <span>Mean RT</span>
        </decidables-spinner>
      `;
      correctSDRT = html`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.correctSDRT.toFixed(0)}" @input=${this.correctSDRTInput.bind(this)}>
          <span>Correct SD RT</span>
        </decidables-spinner>
      `;
      errorSDRT = html`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.errorSDRT.toFixed(0)}" @input=${this.errorSDRTInput.bind(this)}>
          <span>Error SD RT</span>
        </decidables-spinner>
      `;
      sdRT = html`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.sdRT.toFixed(0)}" @input=${this.sdRTInput.bind(this)}>
          <span>SD RT</span>
        </decidables-spinner>
      `;
    } else {
      correctCount = html`<span>Correct Count</span>
        ${this.payoff ? html`<span class="payoff">${payoffFormat(this.correctPayoff)}</span>` : html``}`;
      errorCount = html`<span>Error Count</span>
        ${this.payoff ? html`<span class="payoff">${payoffFormat(this.errorPayoff)}</span>` : html``}`;
      accuracy = html`<span>Accuracy</span>`;
      correctMeanRT = html`<span>Correct Mean RT</span>`;
      errorMeanRT = html`<span>Error Mean RT</span>`;
      meanRT = html`<span>Mean RT</span>`;
      correctSDRT = html`<span>Correct SD RT</span>`;
      errorSDRT = html`<span>Error SD RT</span>`;
      sdRT = html`<span>SD RT</span>`;
    }
    return html`
      <table class=${this.numeric ? 'numeric' : ''}>
        <thead>
          <tr>
            <th rowspan="2"></th>
            <th class="th th-main" colspan="2" scope="col">
              Outcome
            </th>
          </tr>
          <tr>
            <th class="th th-sub" scope="col">
              Correct
            </th>
            <th class="th th-sub" scope="col">
              Error
            </th>
            ${(this.summary)
              ? html`
                <th class="th th-main" scope="col">
                  Overall
                </th>`
              : html``}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="th th-sub th-left" scope="row">
              Count
            </th>
            <td class="td td-data correct count">
              ${correctCount}
            </td>
            <td class="td td-data error count">
              ${errorCount}
            </td>
            ${(this.summary)
              ? html`
                <td class="td td-summary overall proportion-correct">
                  ${accuracy}
                </td>`
              : html``}
          </tr>
          <tr>
            <th class="th th-sub th-left" scope="row">
              Mean RT
            </th>
            <td class="td td-data correct mean-rt">
              ${correctMeanRT}
            </td>
            <td class="td td-data error mean-rt">
              ${errorMeanRT}
            </td>
            ${(this.summary)
              ? html`
                <td class="td td-summary overall mean-rt">
                  ${meanRT}
                </td>`
              : html``}
          </tr>
          <tr>
            <th class="th th-sub th-left" scope="row">
              SD RT
            </th>
            <td class="td td-data correct sd-rt">
              ${correctSDRT}
            </td>
            <td class="td td-data error sd-rt">
              ${errorSDRT}
            </td>
            ${(this.summary)
              ? html`
                <td class="td td-summary overall sd-rt">
                  ${sdRT}
                </td>`
              : html``}
          </tr>
        </tbody>
      </table>`;
  }
}

customElements.define('accumulable-table', AccumulableTable);
