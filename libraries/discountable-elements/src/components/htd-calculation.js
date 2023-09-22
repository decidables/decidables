
import {html, css} from 'lit';
import {animate, fadeIn} from '@lit-labs/motion';

import '@decidables/decidables-elements/spinner';
import HTDMath from '@decidables/discountable-math';

import HTDEquation from '../equations/htd-equation';

/*
  HTDCalculation element
  <htd-calculation>
*/
export default class HTDCalculation extends HTDEquation {
  static get properties() {
    return {
      numeric: {
        attribute: 'numeric',
        type: Boolean,
        reflect: true,
      },

      a1: {
        attribute: 'amount1',
        type: Number,
        reflect: true,
      },
      d1: {
        attribute: 'delay1',
        type: Number,
        reflect: true,
      },
      a2: {
        attribute: 'amount2',
        type: Number,
        reflect: true,
      },
      d2: {
        attribute: 'delay2',
        type: Number,
        reflect: true,
      },

      k: {
        attribute: 'k',
        type: Number,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    this.numeric = false;

    this.a1 = 20;
    this.d1 = 5;
    this.a2 = 50;
    this.d2 = 40;

    this.k = 0.1;

    this.alignState();
  }

  alignState() {
    // Calculate value
    this.v1 = HTDMath.adk2v(this.a1, this.d1, this.k);
    this.v2 = HTDMath.adk2v(this.a2, this.d2, this.k);
    // Calculate difference
    this.vDiff = this.v1 - this.v2;
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('htd-calculation-change', {
      detail: {
        a1: this.a1,
        d1: this.d1,
        a2: this.a2,
        d2: this.d2,

        k: this.k,
      },
      bubbles: true,
    }));
  }

  a1Input(e) {
    this.a1 = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }

  d1Input(e) {
    this.d1 = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }

  a2Input(e) {
    this.a2 = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }

  d2Input(e) {
    this.d2 = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }

  kInput(e) {
    this.k = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }

  static get styles() {
    return [
      super.styles,
      css`
        /* :host {
          display: inline-block;
        } */

        var {
          border-radius: var(---border-radius);
        }

        decidables-spinner {
          border-radius: var(---border-radius);
        }
      `,
    ];
  }

  render() {
    this.alignState();
    let a1;
    let d1;
    let a2;
    let d2;
    let k;
    let v1;
    let v2;
    let vDiff;
    if (this.numeric) {
      a1 = html`<decidables-spinner class="a a1" ?disabled=${!this.interactive} step="1" .value="${this.a1}" @input=${this.a1Input.bind(this)}>
          <var class="math-var">A<sub class="subscript">1</sub></var>
        </decidables-spinner>`;
      d1 = html`<decidables-spinner class="d d1" ?disabled=${!this.interactive} min="0" step="1" .value="${this.d1}" @input=${this.a1Input.bind(this)}>
          <var class="math-var">D<sub class="subscript">1</sub></var>
        </decidables-spinner>`;
      a2 = html`<decidables-spinner class="a a2" ?disabled=${!this.interactive} step="1" .value="${this.a2}" @input=${this.a2Input.bind(this)}>
          <var class="math-var">A<sub class="subscript">2</sub></var>
        </decidables-spinner>`;
      d2 = html`<decidables-spinner class="d d2" ?disabled=${!this.interactive} min="0" step="1" .value="${this.d2}" @input=${this.d2Input.bind(this)}>
          <var class="math-var">D<sub class="subscript">2</sub></var>
        </decidables-spinner>`;
      k = html`<decidables-spinner class="k" ?disabled=${!this.interactive} min="0" max="100" step=".001" .value="${this.k}" @input=${this.kInput.bind(this)}>
          <var class="math-var">k</var>
        </decidables-spinner>`;

      v1 = html`<decidables-spinner class="v v1" disabled .value="${+this.v1.toFixed(2)}">
          <var class="math-var">V<sub class="subscript">1</sub></var>
        </decidables-spinner>`;
      v2 = html`<decidables-spinner class="v v2" disabled .value="${+this.v2.toFixed(2)}">
          <var class="math-var">V<sub class="subscript">2</sub></var>
        </decidables-spinner>`;
      vDiff = html`${(this.vDiff > 0)
        ? html`<span class="comparison" ${animate({in: fadeIn})}>&gt;</span>`
        : (this.vDiff < 0)
          ? html`<span class="comparison" ${animate({in: fadeIn})}>&lt;</span>`
          : html`<span class="comparison" ${animate({in: fadeIn})}>=</span>`}`;
    } else {
      a1 = html`<var class="math-var a a1">A<sub class="subscript">1</sub></var>`;
      d1 = html`<var class="math-var d d1">D<sub class="subscript">1</sub></var>`;
      a2 = html`<var class="math-var a a2">A<sub class="subscript">2</sub></var>`;
      d2 = html`<var class="math-var d d2">D<sub class="subscript">2</sub></var>`;

      k = html`<var class="math-var k">k</var>`;

      v1 = html`<var class="math-var v v1">V<sub class="subscript">1</sub></var>`;
      v2 = html`<var class="math-var v v2">V<sub class="subscript">2</sub></var>`;
      vDiff = html`<span class="comparison">≟</span>`;
    }
    const equation = html`
      <tr>
        <td class="underline">
          ${a1}
        </td>
        <td rowspan="2">
          ${vDiff}
        </td>
        <td class="underline">
          ${a2}
        </td>
      </tr>
      <tr>
        <td class="">
          <span class="paren tight">(</span>1<span class="plus">+</span>${k}${d1}<span class="paren tight">)</span>
        </td>
        <td class="">
          <span class="paren tight">(</span>1<span class="plus">+</span>${k}${d2}<span class="paren tight">)</span>
        </td>
      </tr>
      <tr>
        <td class="right">
          ${v1}
        </td>
        <td>
          ${vDiff}
        </td>
        <td class="left">
          ${v2}
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

customElements.define('htd-calculation', HTDCalculation);
