
import {html} from 'lit';

import SDTMath from '@decidable/detectable-math';

import SDTEquation from './sdt-equation';

/*
  SDTEquationHM2Hr element
  <sdt-equation-hm2hr>

  Attributes:
  Hits; Misses; Hit Rate;
*/
export default class SDTEquationHM2Hr extends SDTEquation {
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
      hr: {
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
    this.alignState();
  }

  alignState() {
    this.hr = SDTMath.hM2Hr(this.h, this.m);
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('sdt-equation-hm2hr-change', {
      detail: {
        h: this.h,
        m: this.m,
        hr: this.hr,
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

  render() {
    this.alignState();
    let h;
    let m;
    let hr;
    if (this.numeric) {
      h = html`
        <decidable-spinner class="h" ?disabled=${!this.interactive} min="0" .value="${this.h}" @input=${this.hInput.bind(this)}>
          <var>Hits</var>
        </decidable-spinner>
      `;
      m = html`
        <decidable-spinner class="m" ?disabled=${!this.interactive} min="0" .value="${this.m}" @input=${this.mInput.bind(this)}>
          <var>Misses</var>
        </decidable-spinner>
      `;
      hr = html`
        <decidable-spinner class="hr" disabled min="0" max="1" step=".001" .value="${+this.hr.toFixed(3)}">
          <var>Hit Rate</var>
        </decidable-spinner>
      `;
    } else {
      h = html`<var class="h">Hits</var>`;
      m = html`<var class="m">Misses</var>`;
      hr = html`<var class="hr">Hit Rate</var>`;
    }
    return html`
      <div class="holder">
        <table class="equation">
          <tbody>
            <tr>
              <td rowspan="2">
                ${hr}<span class="equals">=</span>
              </td>
              <td class="underline">
                ${h}
              </td>
            </tr>
            <tr>
              <td>
                ${h}<span class="plus">+</span>${m}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }
}

customElements.define('sdt-equation-hm2hr', SDTEquationHM2Hr);
