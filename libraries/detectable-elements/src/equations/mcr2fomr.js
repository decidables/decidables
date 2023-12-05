
import {html} from 'lit';

import '@decidables/decidables-elements/spinner';
import SDTMath from '@decidables/detectable-math';

import SDTEquation from './sdt-equation';

/*
  SDTEquationMCr2Fomr element
  <sdt-equation-mcr2fomr>

  Attributes:
  Hits; Misses; Hit Rate;
*/
export default class SDTEquationMCr2Fomr extends SDTEquation {
  static get properties() {
    return {
      m: {
        attribute: 'misses',
        type: Number,
        reflect: true,
      },
      cr: {
        attribute: 'correct-rejections',
        type: Number,
        reflect: true,
      },
      fomr: {
        attribute: false,
        type: Number,
        reflect: false,
      },
    };
  }

  constructor() {
    super();
    this.m = 0;
    this.cr = 0;
    this.alignState();
  }

  alignState() {
    this.fomr = SDTMath.mCr2Fomr(this.m, this.cr);
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('sdt-equation-mcr2fomr-change', {
      detail: {
        m: this.m,
        cr: this.cr,
        fomr: this.fomr,
      },
      bubbles: true,
    }));
  }

  mInput(event) {
    this.m = parseInt(event.target.value, 10);
    this.alignState();
    this.sendEvent();
  }

  crInput(event) {
    this.cr = parseInt(event.target.value, 10);
    this.alignState();
    this.sendEvent();
  }

  willUpdate() {
    this.alignState();
  }

  render() {
    let m;
    let cr;
    let fomr;
    if (this.numeric) {
      m = html`
        <decidables-spinner class="m" ?disabled=${!this.interactive} min="0" .value="${this.m}" @input=${this.mInput.bind(this)}>
          <var>Misses</var>
        </decidables-spinner>
      `;
      cr = html`
        <decidables-spinner class="cr" ?disabled=${!this.interactive} min="0" .value="${this.cr}" @input=${this.crInput.bind(this)}>
          <var>Correct Rejections</var>
        </decidables-spinner>
      `;
      fomr = html`
        <decidables-spinner class="fomr" disabled min="0" max="1" step=".001" .value="${+this.fomr.toFixed(3)}">
          <var>False Omission Rate</var>
        </decidables-spinner>
      `;
    } else {
      m = html`<var class="m">Misses</var>`;
      cr = html`<var class="cr">Correct Rejections</var>`;
      fomr = html`<var class="fomr">False Omission Rate</var>`;
    }
    return html`
      <div class="holder">
        <table class="equation">
          <tbody>
            <tr>
              <td rowspan="2">
                ${fomr}<span class="equals">=</span>
              </td>
              <td class="underline">
                ${m}
              </td>
            </tr>
            <tr>
              <td>
                ${m}<span class="plus">+</span>${cr}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }
}

customElements.define('sdt-equation-mcr2fomr', SDTEquationMCr2Fomr);
