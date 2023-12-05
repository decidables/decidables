
import {html} from 'lit';

import '@decidables/decidables-elements/spinner';
import HTDMath from '@decidables/discountable-math';

import HTDEquation from './htd-equation';

/*
  HTDEquationADK2V element
  <htd-equation-adk2v>

  Attributes:
  amount, delay, k, value;
*/
export default class HTDEquationADK2V extends HTDEquation {
  static get properties() {
    return {
      a: {
        attribute: 'amount',
        type: Number,
        reflect: true,
      },
      d: {
        attribute: 'delay',
        type: Number,
        reflect: true,
      },
      k: {
        attribute: 'k',
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
    this.a = 100;
    this.d = 30;
    this.k = 0.05;
    this.alignState();
  }

  alignState() {
    this.v = HTDMath.adk2v(this.a, this.d, this.k);
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('htd-equation-adk2v-change', {
      detail: {
        a: this.a,
        d: this.d,
        k: this.k,
        v: this.v,
      },
      bubbles: true,
    }));
  }

  aInput(event) {
    this.a = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }

  dInput(event) {
    this.d = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }

  kInput(event) {
    this.k = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }

  willUpdate() {
    this.alignState();
  }

  render() {
    let a;
    let d;
    let k;
    let v;
    if (this.numeric) {
      a = html`<decidables-spinner class="a bottom" ?disabled=${!this.interactive} step="1" .value="${this.a}" @input=${this.aInput.bind(this)}>
          <var class="math-var">A</var>
        </decidables-spinner>`;
      d = html`<decidables-spinner class="d bottom" ?disabled=${!this.interactive} min="0" step="1" .value="${this.d}" @input=${this.dInput.bind(this)}>
          <var class="math-var">D</var>
        </decidables-spinner>`;
      k = html`<decidables-spinner class="k bottom" ?disabled=${!this.interactive} min="0" max="100" step=".001" .value="${this.k}" @input=${this.kInput.bind(this)}>
          <var class="math-var">k</var>
        </decidables-spinner>`;
      v = html`<decidables-spinner class="v bottom" disabled step=".001" .value="${+this.v.toFixed(3)}">
          <var class="math-var">V</var>
        </decidables-spinner>`;
    } else {
      a = html`<var class="math-var a">A</var>`;
      d = html`<var class="math-var d">D</var>`;
      k = html`<var class="math-var k">k</var>`;
      v = html`<var class="math-var v">V</var>`;
    }
    const equation = html`
      <tr>
        <td rowspan="2">
          ${v}<span class="equals">=</span>
        </td>
        <td class="underline">
          ${a}
        </td>
      </tr>
      <tr>
        <td class="">
          <span class="paren tight">(</span>1<span class="plus">+</span>${k}${d}<span class="paren tight">)</span>
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

customElements.define('htd-equation-adk2v', HTDEquationADK2V);
