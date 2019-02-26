
import {html} from 'lit-element';

import SDTEquation from './sdt-equation';

/*
  SDTEquation_DC2Far element
  <sdt-equation-dc2far>

  Attributes:
  d'; c; False Alarm Rate;
*/
export default class SDTEquationDC2Far extends SDTEquation {
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
      far: {
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
    this.far = SDTEquation.dc2far(this.d, this.c);
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('sdt-equation-dc2far-change', {
      detail: {
        d: this.d,
        c: this.c,
        far: this.far,
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
    let far;
    if (this.numeric) {
      d = html`<label class="d bottom">
          <var class="math-var">d&prime;</var>
          <input ?disabled=${!this.interactive} type="number" step=".001" .value="${this.d}" @input=${this.dInput.bind(this)} >
        </label>`;
      c = html`<label class="c bottom">
          <var class="math-var">c</var>
          <input ?disabled=${!this.interactive} type="number" step=".001" .value="${this.c}" @input=${this.cInput.bind(this)}>
        </label>`;
      far = html`<label class="far bottom">
          <var>False Alarm Rate</var>
          <input disabled type="number" min="0" max="1" step=".001" .value="${+this.far.toFixed(3)}">
        </label>`;
    } else {
      d = html`<var class="math-var d">d&prime;</var>`;
      c = html`<var class="math-var c">c</var>`;
      far = html`<var class="far">False Alarm Rate</var>`;
    }
    return html`
      <div class="holder">
        <table class="equation">
          <tbody>
            <tr>
              <td rowspan="2">
                ${far}<span class="equals">=</span><var class="math-greek phi tight">&Phi;</var><span class="paren tight">(</span><span class="minus tight">&minus;</span>
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

customElements.define('sdt-equation-dc2far', SDTEquationDC2Far);
