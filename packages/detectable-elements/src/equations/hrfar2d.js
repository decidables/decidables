
import {html} from 'lit';

import SDTMath from '@decidable/detectable-math';

import SDTEquation from './sdt-equation';

/*
  SDTEquationHrFar2D element
  <sdt-equation-hrfar2d>

  Attributes:
  Hit Rate; False Alarm Rate; d';
*/
export default class SDTEquationHrFar2D extends SDTEquation {
  static get properties() {
    return {
      unequal: {
        attribute: 'unequal',
        type: Boolean,
        reflect: true,
      },
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
      s: {
        attribute: 's',
        type: Number,
        reflect: true,
      },

      d: {
        attribute: false,
        type: Number,
        reflect: false,
      },
    };
  }

  constructor() {
    super();
    this.unequal = false;
    this.hr = 0;
    this.far = 0;
    this.s = 1;
    this.alignState();
  }

  alignState() {
    this.d = SDTMath.hrFar2D(this.hr, this.far, this.s);
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('sdt-equation-hrfar2d-change', {
      detail: {
        hr: this.hr,
        far: this.far,
        s: this.s,
        d: this.d,
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

  sInput(event) {
    this.s = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }

  render() {
    this.alignState();
    let hr;
    let far;
    let s;
    let d;
    if (this.numeric) {
      hr = html`
        <decidable-spinner class="hr bottom" ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${this.hr}" @input=${this.hrInput.bind(this)}>
          <var>Hit Rate</var>
        </decidable-spinner>
      `;
      far = html`
        <decidable-spinner class="far bottom" ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${this.far}" @input=${this.farInput.bind(this)}>
          <var>False Alarm Rate</var>
        </decidable-spinner>
      `;
      s = html`
        <decidable-spinner class="s bottom" ?disabled=${!this.interactive} min="0" step=".001" .value="${this.s}" @input=${this.sInput.bind(this)}>
          <var class="math-var">σ</var>
        </decidable-spinner>
      `;
      d = html`
        <decidable-spinner class="d bottom" disabled step=".001" .value="${+this.d.toFixed(3)}">
          <var class="math-var">d′</var>
        </decidable-spinner>
      `;
    } else {
      hr = html`<var class="hr">Hit Rate</var>`;
      far = html`<var class="far">False Alarm Rate</var>`;
      s = html`<var class="math-var s">σ</var>`;
      d = html`<var class="math-var d">d′</var>`;
    }
    let equation;
    if (this.unequal) {
      equation = html`
        <tr>
          <td rowspan="2">
            ${d}<span class="equals">=</span><span class="bracket tight">(</span>
          </td>
          <td class="underline bottom">
            <span>1</span><span class="plus tight">+</span><span>${s}<sup class="exp">2</sup></span>
          </td>
          <td rowspan="2">
            <span class="bracket tight">)<sup class="exp">−½</sup></span><span class="bracket">[</span>${s}<span class="tight"><var class="math-greek phi tight">Φ</var><sup class="exp">−1</sup></span><span class="paren tight">(</span>${hr}<span class="paren tight">)</span><span class="minus">−</span><span class="tight"><var class="math-greek phi tight">Φ</var><sup class="exp">−1</sup></span><span class="paren tight">(</span>${far}<span class="paren tight">)</span><span class="bracket">]</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>2</span>
          </td>
        </tr>`;
    } else {
      equation = html`
        <tr>
          <td>
              ${d}<span class="equals">=</span><span class="tight"><var class="math-greek phi tight">Φ</var><sup class="exp">−1</sup></span><span class="paren tight">(</span>${hr}<span class="paren tight">)</span><span class="minus">−</span><span class="tight"><var class="math-greek phi tight">Φ</var><sup class="exp">−1</sup></span><span class="paren tight">(</span>${far}<span class="paren tight">)</span>
          </td>
        </tr>`;
    }
    return html`
      <div class="holder">
        <table class="equation">
          <tbody>
            ${equation}
          </tbody>
        </table>
      </div>`;
  }
}

customElements.define('sdt-equation-hrfar2d', SDTEquationHrFar2D);
