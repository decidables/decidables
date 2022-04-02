
import {html, css} from 'lit';

import '@decidables/decidables-elements/spinner';
import DecidablesConverterSet from '@decidables/decidables-elements/converter-set';
import SDTMath from '@decidables/detectable-math';

import DetectableElement from '../detectable-element';

/*
  DetectableTable element
  <detectable-table>

  Attributes:
  Hit; Miss; FalseAlarm; CorrectRejection;
*/
export default class DetectableTable extends DetectableElement {
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
      h: {
        attribute: 'hits',
        type: Number,
        reflect: true,
      },
      m: {
        attribute: 'misses',
        type: Number,
        reflect: true,
      },
      fa: {
        attribute: 'false-alarms',
        type: Number,
        reflect: true,
      },
      cr: {
        attribute: 'correct-rejections',
        type: Number,
        reflect: true,
      },

      payoff: {
        attribute: 'payoff',
        type: Boolean,
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

      far: {
        attribute: false,
        type: Number,
        reflect: false,
      },
      hr: {
        attribute: false,
        type: Number,
        reflect: false,
      },
      acc: {
        attribute: false,
        type: Number,
        reflect: false,
      },
      // positive predictive value (https://en.wikipedia.org/wiki/Receiver_operating_characteristic)
      ppv: {
        attribute: false,
        type: Number,
        reflect: false,
      },
      // false omission rate (https://en.wikipedia.org/wiki/Receiver_operating_characteristic)
      // Using "fomr" to avoid keyword "for"
      fomr: {
        attribute: false,
        type: Number,
        reflect: false,
      },
    };
  }

  constructor() {
    super();

    this.numeric = false;

    this.summaries = ['stimulusRates', 'responseRates', 'accuracy'];
    this.summary = new Set();

    this.colors = ['none', 'accuracy', 'stimulus', 'response', 'outcome', 'all'];
    this.color = 'all';

    this.h = 40;
    this.m = 60;
    this.fa = 75;
    this.cr = 25;
    this.alignState();

    this.payoff = false;
    this.hPayoff = undefined; // Hit payoff
    this.mPayoff = undefined; // Miss payoff
    this.crPayoff = undefined; // Correct Rejection payoff
    this.faPayoff = undefined; // False Alarm payoff
  }

  alignState() {
    this.hr = SDTMath.hM2Hr(this.h, this.m);
    this.far = SDTMath.faCr2Far(this.fa, this.cr);
    this.acc = SDTMath.hMFaCr2Acc(this.h, this.m, this.fa, this.cr);
    this.ppv = SDTMath.hFa2Ppv(this.h, this.fa);
    this.fomr = SDTMath.mCr2Fomr(this.m, this.cr);
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('detectable-table-change', {
      detail: {
        h: this.h,
        m: this.m,
        hr: this.hr,
        fa: this.fa,
        cr: this.cr,
        far: this.far,
        acc: this.acc,
        ppv: this.ppv,
        fomr: this.fomr,
      },
      bubbles: true,
    }));
  }

  hInput(e) {
    this.h = parseInt(e.target.value, 10);
    this.alignState();
    this.sendEvent();
  }

  mInput(e) {
    this.m = parseInt(e.target.value, 10);
    this.alignState();
    this.sendEvent();
  }

  faInput(e) {
    this.fa = parseInt(e.target.value, 10);
    this.alignState();
    this.sendEvent();
  }

  crInput(e) {
    this.cr = parseInt(e.target.value, 10);
    this.alignState();
    this.sendEvent();
  }

  hrInput(e) {
    const newhr = parseFloat(e.target.value);
    const present = this.h + this.m;
    this.h = Math.round(newhr * present);
    this.m = present - this.h;
    this.alignState();
    this.sendEvent();
  }

  farInput(e) {
    const newfar = parseFloat(e.target.value);
    const absent = this.fa + this.cr;
    this.fa = Math.round(newfar * absent);
    this.cr = absent - this.fa;
    this.alignState();
    this.sendEvent();
  }

  accInput(e) {
    const newacc = parseFloat(e.target.value);
    const present = this.h + this.m;
    const absent = this.fa + this.cr;
    const x = (this.hr + this.far - 1) / 2; // Rotate into ACC
    let newhr = x + newacc;
    let newfar = 1 + x - newacc;

    if (newfar > 1) {
      newfar = 1;
      newhr = newfar + 2 * newacc - 1;
    }
    if (newfar < 0) {
      newfar = 0;
      newhr = newfar + 2 * newacc - 1;
    }
    if (newhr > 1) {
      newhr = 1;
      newfar = newhr - 2 * newacc + 1;
    }
    if (newhr < 0) {
      newhr = 0;
      newfar = newhr - 2 * newacc + 1;
    }
    this.h = Math.round(newhr * present);
    this.m = present - this.h;
    this.fa = Math.round(newfar * absent);
    this.cr = absent - this.fa;

    this.alignState();
    this.sendEvent();
  }

  ppvInput(e) {
    const newppv = parseFloat(e.target.value);
    const present = this.h + this.fa;
    this.h = Math.round(newppv * present);
    this.fa = present - this.h;
    this.alignState();
    this.sendEvent();
  }

  fomrInput(e) {
    const newfomr = parseFloat(e.target.value);
    const present = this.m + this.cr;
    this.m = Math.round(newfomr * present);
    this.cr = present - this.m;
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

        /* Color schemes & Table emphasis */

        /* (Default) All color scheme */
        .h {
          background: var(---color-h-light);
          border-top: 2px solid var(---color-element-emphasis);
          border-left: 2px solid var(---color-element-emphasis);
        }

        .m {
          background: var(---color-m-light);
          border-top: 2px solid var(---color-element-emphasis);
          border-right: 2px solid var(---color-element-emphasis);
        }

        .fa {
          background: var(---color-fa-light);
          border-bottom: 2px solid var(---color-element-emphasis);
          border-left: 2px solid var(---color-element-emphasis);
        }

        .cr {
          background: var(---color-cr-light);
          border-right: 2px solid var(---color-element-emphasis);
          border-bottom: 2px solid var(---color-element-emphasis);
        }

        .hr {
          background: var(---color-hr-light);
        }

        .far {
          background: var(---color-far-light);
        }

        .acc {
          background: var(---color-acc-light);
        }

        .ppv {
          background: var(---color-present-light);
        }

        .fomr {
          background: var(---color-absent-light);
        }

        /* Accuracy color scheme */
        :host([color="accuracy"]) .h,
        :host([color="accuracy"]) .cr {
          background: var(---color-correct-light);
        }

        :host([color="accuracy"]) .m,
        :host([color="accuracy"]) .fa {
          color: var(---color-text-inverse);

          background: var(---color-error-light);
        }

        :host([color="accuracy"]) .hr,
        :host([color="accuracy"]) .far,
        :host([color="accuracy"]) .ppv,
        :host([color="accuracy"]) .fomr {
          background: var(---color-element-background);
        }

        /* Stimulus color scheme */
        :host([color="stimulus"]) .cr,
        :host([color="stimulus"]) .fa {
          background: var(---color-far-light);
        }

        :host([color="stimulus"]) .m,
        :host([color="stimulus"]) .h {
          background: var(---color-hr-light);
        }

        :host([color="stimulus"]) .ppv,
        :host([color="stimulus"]) .fomr,
        :host([color="stimulus"]) .acc {
          background: var(---color-element-background);
        }

        /* Response color scheme */
        :host([color="response"]) .cr,
        :host([color="response"]) .m {
          background: var(---color-absent-light);
        }

        :host([color="response"]) .fa,
        :host([color="response"]) .h {
          background: var(---color-present-light);
        }

        :host([color="response"]) .hr,
        :host([color="response"]) .far,
        :host([color="response"]) .acc {
          background: var(---color-element-background);
        }

        /* Outcome color scheme */
        :host([color="outcome"]) .hr,
        :host([color="outcome"]) .far,
        :host([color="outcome"]) .ppv,
        :host([color="outcome"]) .fomr,
        :host([color="outcome"]) .acc {
          background: var(---color-element-background);
        }

        /* No color scheme */
        :host([color="none"]) .cr,
        :host([color="none"]) .fa,
        :host([color="none"]) .m,
        :host([color="none"]) .h,
        :host([color="none"]) .hr,
        :host([color="none"]) .far,
        :host([color="none"]) .ppv,
        :host([color="none"]) .fomr,
        :host([color="none"]) .acc {
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

    this.alignState();
    let h;
    let m;
    let fa;
    let cr;
    let hr;
    let far;
    let acc;
    let ppv;
    let fomr;
    if (this.numeric) {
      h = html`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${this.h}" @input=${this.hInput.bind(this)}>
          <span>Hits</span>
          ${this.payoff ? html`<span class="payoff">${payoffFormatter.format(this.hPayoff)}</span>` : html``}
        </decidables-spinner>
      `;
      m = html`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${this.m}" @input=${this.mInput.bind(this)}>
          <span>Misses</span>
          ${this.payoff ? html`<span class="payoff">${payoffFormatter.format(this.mPayoff)}</span>` : html``}
        </decidables-spinner>
      `;
      fa = html`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${this.fa}" @input=${this.faInput.bind(this)}>
          <span>False Alarms</span>
          ${this.payoff ? html`<span class="payoff">${payoffFormatter.format(this.faPayoff)}</span>` : html``}
        </decidables-spinner>
      `;
      cr = html`
        <decidables-spinner ?disabled=${!this.interactive} min="0" .value="${this.cr}" @input=${this.crInput.bind(this)}>
          <span>Correct Rejections</span>
          ${this.payoff ? html`<span class="payoff">${payoffFormatter.format(this.crPayoff)}</span>` : html``}
        </decidables-spinner>
      `;
      hr = html`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${+this.hr.toFixed(3)}" @input=${this.hrInput.bind(this)}>
          <span>Hit Rate</span>
        </decidables-spinner>
      `;
      far = html`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${+this.far.toFixed(3)}" @input=${this.farInput.bind(this)}>
          <span>False Alarm Rate</span>
        </decidables-spinner>
      `;
      acc = html`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${+this.acc.toFixed(3)}" @input=${this.accInput.bind(this)}>
          <span>Accuracy</span>
        </decidables-spinner>
      `;
      ppv = html`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${+this.ppv.toFixed(3)}" @input=${this.ppvInput.bind(this)}>
          <span>Positive Predictive Value</span>
        </decidables-spinner>
      `;
      fomr = html`
        <decidables-spinner ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${+this.fomr.toFixed(3)}" @input=${this.fomrInput.bind(this)}>
          <span>False Omission Rate</span>
        </decidables-spinner>
      `;
    } else {
      h = html`<span>Hits</span>
        ${this.payoff ? html`<span class="payoff">${payoffFormatter.format(this.hPayoff)}</span>` : html``}`;
      m = html`<span>Misses</span>
        ${this.payoff ? html`<span class="payoff">${payoffFormatter.format(this.mPayoff)}</span>` : html``}`;
      fa = html`<span>False Alarms</span>
        ${this.payoff ? html`<span class="payoff">${payoffFormatter.format(this.faPayoff)}</span>` : html``}`;
      cr = html`<span>Correct Rejections</span>
        ${this.payoff ? html`<span class="payoff">${payoffFormatter.format(this.crPayoff)}</span>` : html``}`;
      hr = html`<span>Hit Rate</span>`;
      far = html`<span>False Alarm Rate</span>`;
      acc = html`<span>Accuracy</span>`;
      ppv = html`<span>Positive Predictive Value</span>`;
      fomr = html`<span>False Omission Rate</span>`;
    }
    return html`
      <table class=${this.numeric ? 'numeric' : ''}>
        <thead>
          <tr>
            <th colspan="2" rowspan="2"></th>
            <th class="th th-main" colspan="2" scope="col">
              Response
            </th>
          </tr>
          <tr>
            <th class="th th-sub" scope="col">
              ‘Present’
            </th>
            <th class="th th-sub" scope="col">
              ‘Absent’
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="th th-main" rowspan="2" scope="row">
              Signal
            </th>
            <th class="th th-sub th-left" scope="row">
              Present
            </th>
            <td class="td td-data h">
              ${h}
            </td>
            <td class="td td-data m">
              ${m}
            </td>
            ${(this.summary.has('stimulusRates'))
              ? html`
                <td class="td td-summary hr">
                  ${hr}
                </td>`
              : html``}
          </tr>
          <tr>
            <th class="th th-sub th-left" scope="row">
              Absent
            </th>
            <td class="td td-data fa">
              ${fa}
            </td>
            <td class="td td-data cr">
              ${cr}
            </td>
            ${(this.summary.has('stimulusRates'))
              ? html`
                <td class="td td-summary far">
                  ${far}
                </td>`
              : html``}
          </tr>
          ${(this.summary.has('responseRates') || this.summary.has('accuracy'))
            ? html`
              <tr>
                <td colspan="2"></td>
                ${(this.summary.has('responseRates'))
                  ? html`
                    <td class="td td-summary ppv">
                      ${ppv}
                    </td>
                    <td class="td td-summary fomr">
                      ${fomr}
                    </td>`
                  : html`
                    <td colspan="2"></td>`}
                ${(this.summary.has('accuracy'))
                  ? html`
                    <td class="td td-summary acc" rowspan="2">
                      ${acc}
                    </td>`
                  : html``}
              </tr>`
            : html``}
        </tbody>
      </table>`;
  }
}

customElements.define('detectable-table', DetectableTable);
