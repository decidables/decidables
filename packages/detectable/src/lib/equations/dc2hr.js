
import {html} from 'lit-element';

import SDTEquation from './sdt-equation';

/*
  SDTEquationDC2Hr element
  <sdt-equation-dc2hr>

  Attributes:
  d'; c; Hit Rate;
*/
export default class SDTEquationDC2Hr extends SDTEquation {
  static get properties() {
    return {
      d: {
        attribute: 'd',
        type: Number,
        reflect: true,
      },
      c: {
        attribute: 'c',
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
    this.d = 0;
    this.c = 0;
    this.alignState();
  }

  alignState() {
    this.hr = SDTEquation.dc2hr(this.d, this.c);
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('sdt-equation-dc2hr-change', {
      detail: {
        d: this.d,
        c: this.c,
        hr: this.hr,
      },
      bubbles: true,
    }));
  }

  dInput(event) {
    this.d = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }

  cInput(event) {
    this.c = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }

  render() {
    this.alignState();
    let d;
    let c;
    let hr;
    if (this.numeric) {
      d = html`<label class="d bottom">
          <var class="math-var">d&prime;</var>
          <input ?disabled=${!this.interactive} type="number" step=".001" .value="${this.d}" @input=${this.dInput.bind(this)} >
        </label>`;
      c = html`<label class="c bottom">
          <var class="math-var">c</var>
          <input ?disabled=${!this.interactive} type="number" step=".001" .value="${this.c}" @input=${this.cInput.bind(this)}>
        </label>`;
      hr = html`<label class="hr bottom">
          <var>Hit Rate</var>
          <input disabled type="number" min="0" max="1" step=".001" .value="${+this.hr.toFixed(3)}">
        </label>`;
    } else {
      d = html`<var class="math-var d">d&prime;</var>`;
      c = html`<var class="math-var c">c</var>`;
      hr = html`<var class="hr">Hit Rate</var>`;
    }
    return html`
      <div class="holder">
        <table class="equation">
          <tbody>
            <tr>
              <td rowspan="2">
                ${hr}<span class="equals">=</span><var class="math-greek phi tight">&Phi;</var><span class="paren tight">(</span>
              </td>
              <td class="underline">
                ${d}
              </td>
              <td rowspan="2">
                <span class="minus">&minus;</span>${c}<span class="paren tight">)</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>2</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>`;
  }
}

customElements.define('sdt-equation-dc2hr', SDTEquationDC2Hr);
