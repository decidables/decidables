
import {html} from 'lit-element';

import SDTMath from '@decidable/detectable-math';

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
      unequal: {
        attribute: 'unequal',
        type: Boolean,
        reflect: true,
      },
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
      s: {
        attribute: 's',
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
    this.unequal = false;
    this.d = 0;
    this.c = 0;
    this.s = 1;
    this.alignState();
  }

  alignState() {
    this.hr = SDTMath.dC2Hr(this.d, this.c, this.s);
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('sdt-equation-dc2hr-change', {
      detail: {
        d: this.d,
        c: this.c,
        s: this.s,
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

  sInput(event) {
    this.s = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }

  render() {
    this.alignState();
    let d;
    let c;
    let s;
    let hr;
    if (this.numeric) {
      d = html`
        <decidable-spinner class="d bottom" ?disabled=${!this.interactive} step=".001" .value="${this.d}" @input=${this.dInput.bind(this)}>
          <var class="math-var">d′</var>
        </decidable-spinner>
      `;
      c = html`
        <decidable-spinner class="c bottom" ?disabled=${!this.interactive} step=".001" .value="${this.c}" @input=${this.cInput.bind(this)}>
          <var class="math-var">c</var>
        </decidable-spinner>
      `;
      s = html`
        <decidable-spinner class="s bottom" ?disabled=${!this.interactive} min="0" step=".001" .value="${this.s}" @input=${this.sInput.bind(this)}>
          <var class="math-var">σ</var>
        </decidable-spinner>
      `;
      hr = html`
        <decidable-spinner class="hr bottom" disabled min="0" max="1" step=".001" .value="${+this.hr.toFixed(3)}">
          <var>Hit Rate</var>
        </decidable-spinner>
      `;
    } else {
      d = html`<var class="math-var d">d′</var>`;
      c = html`<var class="math-var c">c</var>`;
      s = html`<var class="math-var s">σ</var>`;
      hr = html`<var class="hr">Hit Rate</var>`;
    }
    let equation;
    if (this.unequal) {
      equation = html`
        <tr>
          <td rowspan="2">
            ${hr}<span class="equals">=</span><var class="math-greek phi tight">Φ</var><span class="paren tight">(</span><span class="bracket tight">[</span>
          </td>
          <td class="underline bottom">
            <span>1</span><span class="plus tight">+</span><span>${s}<sup class="exp">2</sup></span>
          </td>
          <td rowspan="2">
            <span class="bracket tight">]<sup class="exp">½</sup></span><span class="bracket tight">[</span>
          </td>
          <td class="underline">
            ${d}
          </td>
          <td rowspan="2">
            <span class="minus">−</span>
          </td>
          <td class="underline">
            ${c}
          </td>
          <td rowspan="2">
            <span class="bracket tight">]</span><span class="paren tight">)</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>2</span>
          </td>
          <td>
            <span><span>1</span><span class="plus">+</span>${s}</span>
          </td>
          <td>
            ${s}
          </td>
        </tr>`;
    } else {
      equation = html`
        <tr>
          <td rowspan="2">
            ${hr}<span class="equals">=</span><var class="math-greek phi tight">Φ</var><span class="paren tight">(</span>
          </td>
          <td class="underline">
            ${d}
          </td>
          <td rowspan="2">
            <span class="minus">−</span>${c}<span class="paren tight">)</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>2</span>
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

customElements.define('sdt-equation-dc2hr', SDTEquationDC2Hr);
