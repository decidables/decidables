
import {html} from 'lit-element';

import CPTMath from '@decidable/prospectable-math';

import CPTEquation from './cpt-equation';

/*
  CPTEquationXAL2V element
  <sdt-equation-xal2v>

  Attributes:
  Subjective Value, Objective Value, alpha, lambda;
*/
export default class CPTEquationXAL2V extends CPTEquation {
  static get properties() {
    return {
      x: {
        attribute: 'value',
        type: Number,
        reflect: true,
      },
      a: {
        attribute: 'alpha',
        type: Number,
        reflect: true,
      },
      l: {
        attribute: 'lambda',
        type: Number,
        reflect: true,
      },

      v: {
        attribute: false,
        type: Number,
        reflect: false,
      },
    };
  }

  constructor() {
    super();
    this.x = 10;
    this.a = 0.5;
    this.l = 2;
    this.alignState();
  }

  alignState() {
    this.v = CPTMath.xal2v(this.x, this.a, this.l);
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('cpt-equation-xal2v-change', {
      detail: {
        x: this.x,
        a: this.a,
        l: this.l,
        v: this.v,
      },
      bubbles: true,
    }));
  }

  xInput(event) {
    this.x = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }

  aInput(event) {
    this.a = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }

  lInput(event) {
    this.l = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }

  render() {
    this.alignState();
    let x;
    let a;
    let l;
    let v;
    if (this.numeric) {
      x = html`
        <decidable-spinner class="x bottom" ?disabled=${!this.interactive} step="1" .value="${this.x}" @input=${this.xInput.bind(this)}>
          <var class="math-var">x</var>
        </decidable-spinner>
      `;
      a = html`
        <decidable-spinner class="a bottom" ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${this.a}" @input=${this.aInput.bind(this)}>
          <var class="math-var">α</var>
        </decidable-spinner>
      `;
      l = html`
        <decidable-spinner class="l bottom" ?disabled=${!this.interactive} min="0" step=".001" .value="${this.l}" @input=${this.lInput.bind(this)}>
          <var class="math-var">λ</var>
        </decidable-spinner>
      `;
      v = html`
        <decidable-spinner class="v bottom" disabled step=".001" .value="${+this.v.toFixed(3)}">
          <var class="math-var">v</var>
        </decidable-spinner>
      `;
    } else {
      x = html`<var class="math-var x">x</var>`;
      a = html`<var class="math-var a">α</var>`;
      l = html`<var class="math-var l">λ</var>`;
      v = html`<var class="math-var v">v</var>`;
    }
    const equation = html`
      <tr>
        <td rowspan="2">
          ${v}<span class="equals">=</span><span class="brace tight">{</span>
        </td>
        <td class="left">
          ${x}<sup class="exp">${a}</sup>,&emsp;if ${x}<span class="equals">&ge;</span>0
        </td>
      </tr>
      <tr>
        <td class="left">
          <span class="minus tight">−</span>${l}<span class="paren tight">(</span><span class="minus tight">−</span>${x}<span class="paren tight">)</span><sup class="exp">${a}</sup>,&emsp;if ${x}<span class="equals">&lt;</span>0
        </td>
      </tr>`;
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

customElements.define('cpt-equation-xal2v', CPTEquationXAL2V);
