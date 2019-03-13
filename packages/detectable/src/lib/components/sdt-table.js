
import {html, css} from 'lit-element';

import SDTElement from '../sdt-element';

/*
  SDTTable element
  <sdt-table>

  Attributes:
  Hit; Miss; FalseAlarm; CorrectRejection;
*/
export default class SDTTable extends SDTElement {
  static get properties() {
    return {
      display: {
        attribute: 'display',
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
    };
  }

  constructor() {
    super();

    this.displays = ['outcomes', 'rates', 'accuracy'];
    this.display = 'accuracy';

    this.h = 40;
    this.m = 60;
    this.fa = 75;
    this.cr = 25;
    this.alignState();
  }

  alignState() {
    this.hr = SDTElement.hm2hr(this.h, this.m);
    this.far = SDTElement.facr2far(this.fa, this.cr);
    this.acc = SDTElement.hmfacr2acc(this.h, this.m, this.fa, this.cr);
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
        .th1 {
          font-weight: bold;
        }

        .th2 {
          padding: 0 0.25rem;

          font-weight: 600;
        }

        /* Cells */
        .td {
          width: 7rem;

          padding: 0.25rem 0.25rem 0.375rem;
        }

        /* Labels */
        label {
          margin: 0;
        }

        label span {
          display: block;

          font-size: 0.75rem;
        }

        /* User interaction <input> */
        input {
          font-family: var(---font-family-base);
          font-size: 1.125rem;
          color: inherit;
          text-align: right;

          background: none;
          border: 0;
          border-radius: 0;
          outline: none;
          box-shadow: var(---shadow-2);

          -webkit-appearance: none; /* stylelint-disable-line property-no-vendor-prefix */
        }

        input:hover {
          box-shadow: var(---shadow-4);
        }

        input:focus,
        input:active {
          box-shadow: var(---shadow-8);
        }

        input:disabled {
          border: 0;
          box-shadow: none;

          /* HACK: Use correct text color in Safari */
          -webkit-opacity: 1;
          -webkit-text-fill-color: var(---color-text);
        }

        .td1 input {
          width: 3.5rem;
        }

        .td2 input,
        .td3 input {
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

        /* Color scheme */
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

        /* HACK: Hide spinners in disabled input for Firefox and Safari */
        input[type=number]:disabled {
          -moz-appearance: textfield; /* stylelint-disable-line property-no-vendor-prefix */
        }

        input[type=number]:disabled::-webkit-outer-spin-button,
        input[type=number]:disabled::-webkit-inner-spin-button {
          margin: 0;
          -webkit-appearance: none; /* stylelint-disable-line property-no-vendor-prefix */
        }
      `,
    ];
  }

  render() {
    this.alignState();
    return html`
      <table>
        <thead>
          <tr>
            <th colspan="2" rowspan="2"></th>
            <th class="th th1" colspan="2" scope="col">
              Response
            </th>
            <th colspan="2" rowspan="2"></th>
          </tr>
          <tr>
            <th class="th th2" scope="col">
              "Present"
            </th>
            <th class="th th2" scope="col">
              "Absent"
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="th th1" rowspan="2" scope="row">
              Signal
            </th>
            <th class="th th2" scope="row">
              Present
            </th>
            <td class="td td1 h">
              <label>
                <span>Hits</span>
                <input ?disabled=${!this.interactive} type="number" min="0" .value="${this.h}" @input=${this.hInput.bind(this)}>
              </label>
            </td>
            <td class="td td1 m">
              <label>
                <span>Misses</span>
                <input ?disabled=${!this.interactive} type="number" min="0" .value="${this.m}" @input=${this.mInput.bind(this)}></label>
            </td>
            ${(this.display === 'rates' || this.display === 'accuracy')
              ? html`
                <td class="td td2 hr">
                  <label>
                    <span>Hit Rate</span>
                    <input ?disabled=${!this.interactive} type="number" min="0" max="1" step="${1 / (this.h + this.m)}" .value="${this.hr}" @input=${this.hrInput.bind(this)}></label>
                </td>`
              : html``}
            ${(this.display === 'accuracy')
              ? html`
                <td class="td td3 acc" rowspan="2">
                  <label>
                    <span>Accuracy</span>
                    <input ?disabled=${!this.interactive} type="number" min="0" max="1" step="${2 / (this.h + this.m + this.fa + this.cr)}" .value="${this.acc}" @input=${this.accInput.bind(this)}></label>
                </td>`
              : html``}
          </tr>
          <tr>
            <th class="th th2" scope="row">
              Absent
            </th>
            <td class="td td1 fa">
              <label>
                <span>False Alarms</span>
                <input ?disabled=${!this.interactive} type="number" min="0" .value="${this.fa}" @input=${this.faInput.bind(this)}></label>
            </td>
            <td class="td td1 cr">
              <label>
                <span>Correct Rejections</span>
                <input ?disabled=${!this.interactive} type="number" min="0" .value="${this.cr}" @input=${this.crInput.bind(this)}></label>
            </td>
            ${(this.display === 'rates' || this.display === 'accuracy')
              ? html`
                <td class="td td2 far">
                  <label>
                    <span>False Alarm Rate</span>
                    <input ?disabled=${!this.interactive} type="number" min="0" max="1" step="${1 / (this.fa + this.cr)}" .value="${this.far}" @input=${this.farInput.bind(this)}></label>
                </td>`
              : html``}
          </tr>
        </tbody>
      </table>`;
  }
}

customElements.define('sdt-table', SDTTable);
