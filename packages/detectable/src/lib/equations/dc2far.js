
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

      far: {
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
    this.far = SDTEquation.dc2far(this.d, this.c, this.s);
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('sdt-equation-dc2far-change', {
      detail: {
        d: this.d,
        c: this.c,
        s: this.s,
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
      s = html`<label class="s bottom">
          <var class="math-var">σ</var>
          <input ?disabled=${!this.interactive} type="number" min="0" step=".001" .value="${this.s}" @input=${this.sInput.bind(this)}>
        </label>`;
      far = html`<label class="far bottom">
          <var>False Alarm Rate</var>
          <input disabled type="number" min="0" max="1" step=".001" .value="${+this.far.toFixed(3)}">
        </label>`;
    } else {
      d = html`<var class="math-var d">d&prime;</var>`;
      c = html`<var class="math-var c">c</var>`;
      s = html`<var class="math-var s">σ</var>`;
      far = html`<var class="far">False Alarm Rate</var>`;
    }
    let equation;
    if (this.unequal) {
      equation = html`
        <tr>
          <td rowspan="2">
            ${far}<span class="equals">=</span><var class="math-greek phi tight">&Phi;</var><span class="paren tight">(</span><span class="bracket tight">[</span>
          </td>
          <td class="underline bottom">
            <span>1</span><span class="plus tight">&plus;</span><span>${s}<sup class="exp">2</sup></span>
          </td>
          <td rowspan="2">
            <span class="bracket tight">]<sup class="exp">½</sup></span><span class="bracket tight">[</span>
          </td>
          <td class="underline">
            <span class="minus tight">&minus;</span>${d}
          </td>
          <td rowspan="2">
            <span class="minus">&minus;</span>${c}<span class="bracket tight">]</span><span class="paren tight">)</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>2</span>
          </td>
          <td>
            <span><span>1</span><span class="plus">&plus;</span>${s}</span>
          </td>
        </tr>`;
    } else {
      equation = html`
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

customElements.define('sdt-equation-dc2far', SDTEquationDC2Far);
