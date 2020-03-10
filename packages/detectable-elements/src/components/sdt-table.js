
import {html, css} from 'lit-element';

import SDTMath from '@decidable/detectable-math';

import SDTElement from '../sdt-element';
import SDTMixinStyleSpinner from '../mixins/styleSpinner';
import SDTMixinConverterSet from '../mixins/converterSet';

/*
  SDTTable element
  <sdt-table>

  Attributes:
  Hit; Miss; FalseAlarm; CorrectRejection;
*/
export default class SDTTable extends SDTMixinConverterSet(SDTMixinStyleSpinner(SDTElement)) {
  static get properties() {
    return {
      numeric: {
        attribute: 'numeric',
        type: Boolean,
        reflect: true,
      },
      summary: {
        attribute: 'summary',
        converter: SDTMixinConverterSet.converterSet,
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

    this.summaries = ['stimulusRates, responseRates, accuracy'];
    this.summary = new Set();

    this.colors = ['stimulus', 'response', 'outcome', 'none'];
    this.color = 'outcome';

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
    this.hr = SDTMath.hm2hr(this.h, this.m);
    this.far = SDTMath.facr2far(this.fa, this.cr);
    this.acc = SDTMath.hmfacr2acc(this.h, this.m, this.fa, this.cr);
    this.ppv = SDTMath.hfa2ppv(this.h, this.fa);
    this.fomr = SDTMath.mcr2fomr(this.m, this.cr);
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('sdt-table-change', {
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
        }

        .numeric .td {
          width: 7rem;
        }

        /* Labels */
        label {
          margin: 0;
        }

        label span {
          display: block;

          font-size: 0.75rem;
        }

        .payoff {
          font-weight: 600;
          line-height: 0.75rem;
        }

        /* User interaction <input> */
        input {
          background: none;
        }

        .td-data input {
          width: 3.5rem;
        }

        .td-summary input {
          width: 4.5rem;
        }

        /* Table emphasis */
        .h {
          border-top: 2px solid var(---color-element-emphasis);
          border-left: 2px solid var(---color-element-emphasis);
        }

        .m {
          border-top: 2px solid var(---color-element-emphasis);
          border-right: 2px solid var(---color-element-emphasis);
        }

        .fa {
          border-bottom: 2px solid var(---color-element-emphasis);
          border-left: 2px solid var(---color-element-emphasis);
        }

        .cr {
          border-right: 2px solid var(---color-element-emphasis);
          border-bottom: 2px solid var(---color-element-emphasis);
        }

        /* Color schemes */
        /* stylelint-disable-next-line no-descending-specificity */
        .td,
        .td input {
          transition: all var(---transition-duration) ease;
        }

        /* Outcome color scheme */
        .h,
        .h input {
          background: var(---color-h-light);
        }

        .m,
        .m input {
          background: var(---color-m-light);
        }

        .fa,
        .fa input {
          background: var(---color-fa-light);
        }

        .cr,
        .cr input {
          background: var(---color-cr-light);
        }

        .hr,
        .hr input {
          background: var(---color-hr-light);
        }

        .far,
        .far input {
          background: var(---color-far-light);
        }

        .acc,
        .acc input {
          background: var(---color-acc-light);
        }

        .ppv,
        .ppv input {
          background: var(---color-present-light);
        }

        .fomr,
        .fomr input {
          background: var(---color-absent-light);
        }

        /* Accuracy color scheme */
        :host([color="accuracy"]) .h,
        :host([color="accuracy"]) .h input,
        :host([color="accuracy"]) .cr,
        :host([color="accuracy"]) .cr input {
          background: var(---color-correct-light);
        }

        :host([color="accuracy"]) .m,
        :host([color="accuracy"]) .m input,
        :host([color="accuracy"]) .fa,
        :host([color="accuracy"]) .fa input {
          color: var(---color-text-inverse);

          background: var(---color-error-light);
        }

        :host([color="accuracy"]) .hr,
        :host([color="accuracy"]) .hr input,
        :host([color="accuracy"]) .far,
        :host([color="accuracy"]) .far input,
        :host([color="accuracy"]) .ppv,
        :host([color="accuracy"]) .ppv input,
        :host([color="accuracy"]) .fomr,
        :host([color="accuracy"]) .fomr input {
          background: var(---color-element-background);
        }

        /* Stimulus color scheme */
        :host([color="stimulus"]) .cr,
        :host([color="stimulus"]) .cr input,
        :host([color="stimulus"]) .fa,
        :host([color="stimulus"]) .fa input {
          background: var(---color-far-light);
        }

        :host([color="stimulus"]) .m,
        :host([color="stimulus"]) .m input,
        :host([color="stimulus"]) .h,
        :host([color="stimulus"]) .h input {
          background: var(---color-hr-light);
        }

        :host([color="stimulus"]) .ppv,
        :host([color="stimulus"]) .ppv input,
        :host([color="stimulus"]) .fomr,
        :host([color="stimulus"]) .fomr input,
        :host([color="stimulus"]) .acc,
        :host([color="stimulus"]) .acc input {
          background: var(---color-element-background);
        }

        /* Response color scheme */
        :host([color="response"]) .cr,
        :host([color="response"]) .cr input,
        :host([color="response"]) .m,
        :host([color="response"]) .m input {
          background: var(---color-absent-light);
        }

        :host([color="response"]) .fa,
        :host([color="response"]) .fa input,
        :host([color="response"]) .h,
        :host([color="response"]) .h input {
          background: var(---color-present-light);
        }

        :host([color="response"]) .hr,
        :host([color="response"]) .hr input,
        :host([color="response"]) .far,
        :host([color="response"]) .far input,
        :host([color="response"]) .acc,
        :host([color="response"]) .acc input {
          background: var(---color-element-background);
        }

        /* No color scheme */
        :host([color="none"]) .cr,
        :host([color="none"]) .cr input,
        :host([color="none"]) .fa,
        :host([color="none"]) .fa input,
        :host([color="none"]) .m,
        :host([color="none"]) .m input,
        :host([color="none"]) .h,
        :host([color="none"]) .h input,
        :host([color="none"]) .hr,
        :host([color="none"]) .hr input,
        :host([color="none"]) .far,
        :host([color="none"]) .far input,
        :host([color="none"]) .ppv,
        :host([color="none"]) .ppv input,
        :host([color="none"]) .fomr,
        :host([color="none"]) .fomr input,
        :host([color="none"]) .acc,
        :host([color="none"]) .acc input {
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
      h = html`<label>
          <span>Hits</span>
          ${this.payoff ? html`<span class="payoff">${payoffFormatter.format(this.hPayoff)}</span>` : html``}
          <input ?disabled=${!this.interactive} type="number" min="0" .value="${this.h}" @input=${this.hInput.bind(this)}>
        </label>`;
      m = html`<label>
          <span>Misses</span>
          ${this.payoff ? html`<span class="payoff">${payoffFormatter.format(this.mPayoff)}</span>` : html``}
          <input ?disabled=${!this.interactive} type="number" min="0" .value="${this.m}" @input=${this.mInput.bind(this)}>
        </label>`;
      fa = html`<label>
          <span>False Alarms</span>
          ${this.payoff ? html`<span class="payoff">${payoffFormatter.format(this.faPayoff)}</span>` : html``}
          <input ?disabled=${!this.interactive} type="number" min="0" .value="${this.fa}" @input=${this.faInput.bind(this)}>
        </label>`;
      cr = html`<label>
          <span>Correct Rejections</span>
          ${this.payoff ? html`<span class="payoff">${payoffFormatter.format(this.crPayoff)}</span>` : html``}
          <input ?disabled=${!this.interactive} type="number" min="0" .value="${this.cr}" @input=${this.crInput.bind(this)}>
        </label>`;
      hr = html`<label>
          <span>Hit Rate</span>
          <input ?disabled=${!this.interactive} type="number" min="0" max="1" step=".001" .value="${+this.hr.toFixed(3)}" @input=${this.hrInput.bind(this)}>
        </label>`;
      far = html`<label>
          <span>False Alarm Rate</span>
          <input ?disabled=${!this.interactive} type="number" min="0" max="1" step=".001" .value="${+this.far.toFixed(3)}" @input=${this.farInput.bind(this)}>
        </label>`;
      acc = html`<label>
          <span>Accuracy</span>
          <input ?disabled=${!this.interactive} type="number" min="0" max="1" step=".001" .value="${+this.acc.toFixed(3)}" @input=${this.accInput.bind(this)}>
        </label>`;
      ppv = html`<label>
          <span>Positive Predictive Value</span>
          <input ?disabled=${!this.interactive} type="number" min="0" max="1" step=".001" .value="${+this.ppv.toFixed(3)}" @input=${this.ppvInput.bind(this)}>
        </label>`;
      fomr = html`<label>
          <span>False Omission Rate</span>
          <input ?disabled=${!this.interactive} type="number" min="0" max="1" step=".001" .value="${+this.fomr.toFixed(3)}" @input=${this.fomrInput.bind(this)}>
        </label>`;
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
              "Present"
            </th>
            <th class="th th-sub" scope="col">
              "Absent"
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

customElements.define('sdt-table', SDTTable);
