
import {html} from 'lit';

import '@decidables/decidables-elements/spinner';
import SDTMath from '@decidables/detectable-math';

import SDTEquation from './sdt-equation';

/*
  SDTEquationHFa2Ppv element
  <sdt-equation-hm2hr>

  Attributes:
  Hits; Misses; Hit Rate;
*/
export default class SDTEquationHFa2Ppv extends SDTEquation {
  static get properties() {
    return {
      h: {
        attribute: 'hits',
        type: Number,
        reflect: true,
      },
      fa: {
        attribute: 'false-alarms',
        type: Number,
        reflect: true,
      },
      ppv: {
        attribute: false,
        type: Number,
        reflect: false,
      },
    };
  }

  constructor() {
    super();
    this.h = 0;
    this.fa = 0;
    this.alignState();
  }

  alignState() {
    this.ppv = SDTMath.hFa2Ppv(this.h, this.fa);
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('sdt-equation-hfa2ppv-change', {
      detail: {
        h: this.h,
        fa: this.fa,
        ppv: this.ppv,
      },
      bubbles: true,
    }));
  }

  hInput(event) {
    this.h = parseInt(event.target.value, 10);
    this.alignState();
    this.sendEvent();
  }

  faInput(event) {
    this.fa = parseInt(event.target.value, 10);
    this.alignState();
    this.sendEvent();
  }

  render() {
    this.alignState();
    let h;
    let fa;
    let ppv;
    if (this.numeric) {
      h = html`
        <decidables-spinner class="h" ?disabled=${!this.interactive} min="0" .value="${this.h}" @input=${this.hInput.bind(this)}>
          <var>Hits</var>
        </decidables-spinner>
      `;
      fa = html`
        <decidables-spinner class="fa" ?disabled=${!this.interactive} min="0" .value="${this.fa}" @input=${this.faInput.bind(this)}>
          <var>False Alarms</var>
        </decidables-spinner>
      `;
      ppv = html`
        <decidables-spinner class="ppv" disabled min="0" max="1" step=".001" .value="${+this.ppv.toFixed(3)}">
          <var>Positive Predictive Value</var>
        </decidables-spinner>
      `;
    } else {
      h = html`<var class="h">Hits</var>`;
      fa = html`<var class="fa">False Alarms</var>`;
      ppv = html`<var class="ppv">Positive Predictive Value</var>`;
    }
    return html`
      <div class="holder">
        <table class="equation">
          <tbody>
            <tr>
              <td rowspan="2">
                ${ppv}<span class="equals">=</span>
              </td>
              <td class="underline">
                ${h}
              </td>
            </tr>
            <tr>
              <td>
                ${h}<span class="plus">+</span>${fa}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }
}

customElements.define('sdt-equation-hfa2ppv', SDTEquationHFa2Ppv);
