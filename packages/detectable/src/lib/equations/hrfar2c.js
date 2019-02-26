
import {html} from 'lit-element';

import SDTEquation from './sdt-equation';

/*
  SDTEquation_HrFar2C element
  <sdt-equation-hrfar2c>

  Attributes:
  Hit Rate; False Alarm Rate; d';
*/
export default class SDTEquationHrFar2C extends SDTEquation {
  static get properties() {
    return {
      hr: {
        attribute: 'hit-rate',
        type: Number,
        reflect: true,
      },
      far: {
        attribute: 'false-alarm-rate',
        type: Number,
        reflect: true,
      },
      c: {
        attribute: false,
        type: Number,
        reflect: false,
      },
    };
  }

  constructor() {
    super();
    this.hr = 0;
    this.far = 0;
    this.alignState();
  }

  alignState() {
    this.c = SDTEquation.hrfar2c(this.hr, this.far);
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('sdt-equation-hrfar2c-change', {
      detail: {
        hr: this.hr,
        far: this.far,
        c: this.c,
      },
      bubbles: true,
    }));
  }

  hrInput(event) {
    this.hr = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }

  farInput(event) {
    this.far = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }

  render() {
    this.alignState();
    let hr;
    let far;
    let c;
    if (this.numeric) {
      hr = html`<label class="hr bottom">
          <var>Hit Rate</var>
          <input ?disabled=${!this.interactive} type="number" min="0" max="1" step=".001" .value="${this.hr}" @input=${this.hrInput.bind(this)} >
        </label>`;
      far = html`<label class="far bottom">
          <var>False Alarm Rate</var>
          <input ?disabled=${!this.interactive} type="number" min="0" max="1" step=".001" .value="${this.far}" @input=${this.farInput.bind(this)}>
        </label>`;
      c = html`<label class="c">
          <var class="math-var">c</var>
          <input disabled type="number" step=".001" .value="${+this.c.toFixed(3)}">
        </label>`;
    } else {
      hr = html`<var class="hr">Hit Rate</var>`;
      far = html`<var class="far">False Alarm Rate</var>`;
      c = html`<var class="math-var c">c</var>`;
    }
    return html`
      <div class="holder">
        <table class="equation">
          <tbody>
            <tr>
              <td rowspan="2">
                ${c}<span class="equals">=</span>
              </td>
              <td class="underline">
                <span class="minus tight">&minus;</span><span class="tight"><var class="math-greek phi tight">&Phi;</var><sup class="exp">&minus;1</sup></span><span class="paren tight">(</span>${hr}<span class="paren tight">)</span><span class="minus">&minus;</span><span class="tight"><var class="math-greek phi tight">&Phi;</var><sup class="exp">&minus;1</sup></span><span class="paren tight">(</span>${far}<span class="paren tight">)</span>
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

customElements.define('sdt-equation-hrfar2c', SDTEquationHrFar2C);
