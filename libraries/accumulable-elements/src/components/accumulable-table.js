
import {html, css} from 'lit';

import '@decidables/decidables-elements/spinner';
import DecidablesConverterSet from '@decidables/decidables-elements/converter-set';
// import SDTMath from '@decidables/detectable-math';

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
        converter: DecidablesConverterSet,
        reflect: true,
      },
      color: {
        attribute: 'color',
        type: String,
        reflect: true,
      },

      correctAccuracy: {
        attribute: 'correct-accuracy',
        type: Number,
        reflect: true,
      },
      errorAccuracy: {
        attribute: 'error-accuracy',
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

    this.summaries = ['total'];
    this.summary = new Set();

    this.colors = ['none', 'measure', 'outcome', 'all'];
    this.color = 'all';

    this.payoff = false;
    this.correctPayoff = undefined; // Correct payoff
    this.errorPayoff = undefined; // Error payoff
    this.nrPayoff = undefined; // No Response payoff

    this.correctAccuracy = NaN;
    this.errorAccuracy = NaN;
    this.correctMeanRT = NaN;
    this.errorMeanRT = NaN;
    this.meanRT = NaN;
    this.correctSDRT = NaN;
    this.errorSDRT = NaN;
    this.sdRT = NaN;
    this.alignState();
  }

  alignState() {
  //   this.hr = SDTMath.hM2Hr(this.h, this.m);
  //   this.far = SDTMath.faCr2Far(this.fa, this.cr);
  //   this.acc = SDTMath.hMFaCr2Acc(this.h, this.m, this.fa, this.cr);
  //   this.ppv = SDTMath.hFa2Ppv(this.h, this.fa);
  //   this.fomr = SDTMath.mCr2Fomr(this.m, this.cr);
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('accumulable-table-change', {
      detail: {
        correctAccuracy: this.correctAccuracy,
        errorAccuracy: this.errorAccuracy,
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

  correctAccuracyInput(e) {
    this.correctAccuracy = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }

  errorAccuracyInput(e) {
    this.errorAccuracy = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }

  correctMeanRTInput(e) {
    this.correctMeanRT = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }

  errorMeanRTInput(e) {
    this.errorMeanRT = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }

  meanRTInput(e) {
    this.meanRT = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }

  correctSDRTInput(e) {
    this.correctSDRT = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }

  errorSDRTInput(e) {
    this.errorSDRT = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }

  sdRTInput(e) {
    this.sdRT = parseFloat(e.target.value);
    this.alignState();
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

        .td-data.accuracy {
          border-top: 2px solid var(---color-element-emphasis);
        }

        .td-data.sd-rt {
          border-bottom: 2px solid var(---color-element-emphasis);
        }

        /* Color schemes */

        /* (Default) All color scheme */
        .correct.accuracy {
          background: var(---color-element-background); /* ###### */
        }

        .error.accuracy {
          background: var(---color-element-background); /* ###### */
        }

        .correct.mean-rt {
          background: var(---color-element-background); /* ###### */
        }

        .error.mean-rt {
          background: var(---color-element-background); /* ###### */
        }

        .total.mean-rt {
          background: var(---color-element-background); /* ###### */
        }

        .correct.sd-rt {
          background: var(---color-element-background); /* ###### */
        }

        .error.sd-rt {
          background: var(---color-element-background); /* ###### */
        }

        .total.sd-rt {
          background: var(---color-element-background); /* ###### */
        }

        /* Outcome color scheme */
        :host([color="outcome"]) .correct {
          background: var(---color-correct-light);
        }

        :host([color="outcome"]) .error {
          background: var(---color-error-light);
        }

        :host([color="outcome"]) .total {
          background: var(---color-element-background);
        }

        /* Measure color scheme */
        :host([color="measure"]) .accuracy {
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

  willUpdate() {
    this.alignState();
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

    let correctAccuracy;
    let errorAccuracy;
    let correctMeanRT;
    let errorMeanRT;
    let meanRT;
    let correctSDRT;
    let errorSDRT;
    let sdRT;
    if (this.numeric) {
      correctAccuracy = html`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".01" .value="${+this.correctAccuracy.toFixed(2)}" @input=${this.correctAccuracyInput.bind(this)}>
          <span>Correct Accuracy</span>
          ${this.payoff ? html`<span class="payoff">${payoffFormat(this.correctPayoff)}</span>` : html``}
        </decidables-spinner>
      `;
      errorAccuracy = html`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".01" .value="${+this.errorAccuracy.toFixed(2)}" @input=${this.errorAccuracyInput.bind(this)}>
          <span>Error Accuracy</span>
          ${this.payoff ? html`<span class="payoff">${payoffFormat(this.errorPayoff)}</span>` : html``}
        </decidables-spinner>
      `;
      correctMeanRT = html`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.correctMeanRT.toFixed(3)}" @input=${this.correctMeanRTInput.bind(this)}>
          <span>Correct Mean RT</span>
        </decidables-spinner>
      `;
      errorMeanRT = html`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.errorMeanRT.toFixed(3)}" @input=${this.errorMeanRTInput.bind(this)}>
          <span>Error Mean RT</span>
        </decidables-spinner>
      `;
      meanRT = html`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.meanRT.toFixed(3)}" @input=${this.meanRTInput.bind(this)}>
          <span>Mean RT</span>
        </decidables-spinner>
      `;
      correctSDRT = html`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.correctSDRT.toFixed(3)}" @input=${this.correctSDRTInput.bind(this)}>
          <span>Correct SD RT</span>
        </decidables-spinner>
      `;
      errorSDRT = html`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.errorSDRT.toFixed(3)}" @input=${this.errorSDRTInput.bind(this)}>
          <span>Error SD RT</span>
        </decidables-spinner>
      `;
      sdRT = html`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${+this.sdRT.toFixed(3)}" @input=${this.sdRTInput.bind(this)}>
          <span>SD RT</span>
        </decidables-spinner>
      `;
    } else {
      correctAccuracy = html`<span>Correct Accuracy</span>
        ${this.payoff ? html`<span class="payoff">${payoffFormat(this.correctPayoff)}</span>` : html``}`;
      errorAccuracy = html`<span>Error Accuracy</span>
        ${this.payoff ? html`<span class="payoff">${payoffFormat(this.errorPayoff)}</span>` : html``}`;
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
            <th colspan="2" rowspan="2"></th>
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
            ${(this.summary.has('total'))
              ? html`
                <th class="th th-main" scope="col">
                  Total
                </th>`
              : html``}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="th th-main" rowspan="3" scope="row">
              Measure
            </th>
            <th class="th th-sub th-left" scope="row">
              Accuracy
            </th>
            <td class="td td-data correct accuracy">
              ${correctAccuracy}
            </td>
            <td class="td td-data error accuracy">
              ${errorAccuracy}
            </td>
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
            ${(this.summary.has('total'))
              ? html`
                <td class="td td-summary total mean-rt">
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
            ${(this.summary.has('total'))
              ? html`
                <td class="td td-summary total sd-rt">
                  ${sdRT}
                </td>`
              : html``}
          </tr>
        </tbody>
      </table>`;
  }
}

customElements.define('accumulable-table', AccumulableTable);
