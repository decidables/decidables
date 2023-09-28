
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

      as: {
        attribute: 'amount-ss',
        type: Number,
        reflect: true,
      },
      ds: {
        attribute: 'delay-ss',
        type: Number,
        reflect: true,
      },
      al: {
        attribute: 'amount-ll',
        type: Number,
        reflect: true,
      },
      dl: {
        attribute: 'delay-ll',
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

    this.as = 20;
    this.ds = 5;
    this.al = 50;
    this.dl = 40;

    this.k = 0.1;

    this.alignState();
  }

  alignState() {
    // Calculate value
    this.vs = HTDMath.adk2v(this.as, this.ds, this.k);
    this.vl = HTDMath.adk2v(this.al, this.dl, this.k);
    // Calculate difference
    this.vDiff = this.vs - this.vl;
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('htd-calculation-change', {
      detail: {
        as: this.as,
        ds: this.ds,
        al: this.al,
        dl: this.dl,

        k: this.k,
      },
      bubbles: true,
    }));
  }

  asInput(e) {
    this.as = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }

  dsInput(e) {
    this.ds = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }

  alInput(e) {
    this.al = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }

  dlInput(e) {
    this.dl = parseFloat(e.target.value);
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
    let as;
    let ds;
    let al;
    let dl;
    let k;
    let vs;
    let vl;
    let vDiff;
    if (this.numeric) {
      as = html`<decidables-spinner class="a as" ?disabled=${!this.interactive} step="1" .value="${this.as}" @input=${this.asInput.bind(this)}>
          <var class="math-var">A<sub class="subscript">ss</sub></var>
        </decidables-spinner>`;
      ds = html`<decidables-spinner class="d ds" ?disabled=${!this.interactive} min="0" step="1" .value="${this.ds}" @input=${this.dsInput.bind(this)}>
          <var class="math-var">D<sub class="subscript">ss</sub></var>
        </decidables-spinner>`;
      al = html`<decidables-spinner class="a al" ?disabled=${!this.interactive} step="1" .value="${this.al}" @input=${this.alInput.bind(this)}>
          <var class="math-var">A<sub class="subscript">ll</sub></var>
        </decidables-spinner>`;
      dl = html`<decidables-spinner class="d dl" ?disabled=${!this.interactive} min="0" step="1" .value="${this.dl}" @input=${this.dlInput.bind(this)}>
          <var class="math-var">D<sub class="subscript">ll</sub></var>
        </decidables-spinner>`;
      k = html`<decidables-spinner class="k" ?disabled=${!this.interactive} min="0" max="100" step=".001" .value="${this.k}" @input=${this.kInput.bind(this)}>
          <var class="math-var">k</var>
        </decidables-spinner>`;

      vs = html`<decidables-spinner class="v vs" disabled .value="${+this.vs.toFixed(2)}">
          <var class="math-var">V<sub class="subscript">ss</sub></var>
        </decidables-spinner>`;
      vl = html`<decidables-spinner class="v vl" disabled .value="${+this.vl.toFixed(2)}">
          <var class="math-var">V<sub class="subscript">ll</sub></var>
        </decidables-spinner>`;
      vDiff = html`${(this.vDiff > 0)
        ? html`<span class="comparison" ${animate({in: fadeIn})}>&gt;</span>`
        : (this.vDiff < 0)
          ? html`<span class="comparison" ${animate({in: fadeIn})}>&lt;</span>`
          : html`<span class="comparison" ${animate({in: fadeIn})}>=</span>`}`;
    } else {
      as = html`<var class="math-var a as">A<sub class="subscript">ss</sub></var>`;
      ds = html`<var class="math-var d ds">D<sub class="subscript">ss</sub></var>`;
      al = html`<var class="math-var a al">A<sub class="subscript">ll</sub></var>`;
      dl = html`<var class="math-var d dl">D<sub class="subscript">ll</sub></var>`;

      k = html`<var class="math-var k">k</var>`;

      vs = html`<var class="math-var v vs">V<sub class="subscript">ss</sub></var>`;
      vl = html`<var class="math-var v vl">V<sub class="subscript">ll</sub></var>`;
      vDiff = html`<span class="comparison">≟</span>`;
    }
    const equation = html`
      <tr>
        <td class="underline">
          ${as}
        </td>
        <td rowspan="2">
          ${vDiff}
        </td>
        <td class="underline">
          ${al}
        </td>
      </tr>
      <tr>
        <td class="">
          <span class="paren tight">(</span>1<span class="plus">+</span>${k}${ds}<span class="paren tight">)</span>
        </td>
        <td class="">
          <span class="paren tight">(</span>1<span class="plus">+</span>${k}${dl}<span class="paren tight">)</span>
        </td>
      </tr>
      <tr>
        <td class="right">
          ${vs}
        </td>
        <td>
          ${vDiff}
        </td>
        <td class="left">
          ${vl}
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
