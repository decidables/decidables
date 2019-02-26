
import {html} from 'lit-element';

import SDTEquation from './sdt-equation';

/*
  SDTEquation_HMFaCr2Acc element
  <sdt-equation-hmfacr2acc>

  Attributes:
  Hits; Misses; False Alarms; Correct Rejections; Accuracy;
*/
export default class SDTEquationHMFaCr2Acc extends SDTEquation {
  static get properties() {
    return {
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
      acc: {
        attribute: false,
        type: Number,
        reflect: false,
      },
    };
  }

  constructor() {
    super();
    this.h = 0;
    this.m = 0;
    this.fa = 0;
    this.cr = 0;
    this.alignState();
  }

  alignState() {
    this.acc = SDTEquation.hmfacr2acc(this.h, this.m, this.fa, this.cr);
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('sdt-equation-hmfacr2acc-change', {
      detail: {
        h: this.h,
        m: this.m,
        fa: this.fa,
        cr: this.cr,
        acc: this.acc,
      },
      bubbles: true,
    }));
  }

  hInput(event) {
    this.h = parseInt(event.target.value, 10);
    this.alignState();
    this.sendEvent();
  }

  mInput(event) {
    this.m = parseInt(event.target.value, 10);
    this.alignState();
    this.sendEvent();
  }

  faInput(event) {
    this.fa = parseInt(event.target.value, 10);
    this.alignState();
    this.sendEvent();
  }

  crInput(event) {
    this.cr = parseInt(event.target.value, 10);
    this.alignState();
    this.sendEvent();
  }

  render() {
    this.alignState();
    let h;
    let m;
    let fa;
    let cr;
    let acc;

    if (this.numeric) {
      h = html`<label class="h">
          <var>Hits</var>
          <input ?disabled=${!this.interactive} type="number" min="0" .value="${this.h}" @input=${this.hInput.bind(this)}>
        </label>`;
      m = html`<label class="m">
          <var>Misses</var>
          <input ?disabled=${!this.interactive} type="number" min="0" .value="${this.m}" @input=${this.mInput.bind(this)}>
        </label>`;
      fa = html`<label class="fa">
          <var>False Alarms</var>
          <input ?disabled=${!this.interactive} type="number" min="0" .value="${this.fa}" @input=${this.faInput.bind(this)}>
        </label>`;
      cr = html`<label class="cr">
          <var>Correct Rejections</var>
          <input ?disabled=${!this.interactive} type="number" min="0" .value="${this.cr}" @input=${this.crInput.bind(this)}>
        </label>`;
      acc = html`<label class="acc">
          <var>Accuracy</var>
          <input disabled type="number" min="0" max="1" step=".001" .value="${+this.acc.toFixed(3)}">
        </label>`;
    } else {
      h = html`<var class="h">Hits</var>`;
      m = html`<var class="m">Misses</var>`;
      fa = html`<var class="fa">False Alarms</var>`;
      cr = html`<var class="cr">Correct Rejections</var>`;
      acc = html`<var class="acc">Accuracy</var>`;
    }
    return html`
      <div class="holder">
        <table class="equation">
          <tbody>
            <tr>
              <td rowspan="2">
                ${acc}<span class="equals">=</span>
              </td>
              <td class="underline">
                ${h}<span class="plus">+</span>${cr}
              </td>
            </tr>
            <tr>
              <td>
                ${h}<span class="plus">+</span>${m}<span class="plus">+</span>${fa}<span class="plus">+</span>${cr}
              </td>
            </tr>
          </tbody>
        </table>
      </div>`;
  }
}

customElements.define('sdt-equation-hmfacr2acc', SDTEquationHMFaCr2Acc);
