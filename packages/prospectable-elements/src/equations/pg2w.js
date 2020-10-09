
import {html} from 'lit-element';

import CPTMath from '@decidable/prospectable-math';

import CPTEquation from './cpt-equation';

/*
  CPTEquationPG2W element
  <sdt-equation-pg2w>

  Attributes:
  Decision Weight, Probability, gamma;
*/
export default class CPTEquationPG2W extends CPTEquation {
  static get properties() {
    return {
      p: {
        attribute: 'probability',
        type: Number,
        reflect: true,
      },
      g: {
        attribute: 'gamma',
        type: Number,
        reflect: true,
      },

      w: {
        attribute: false,
        type: Number,
        reflect: false,
      },
    };
  }

  constructor() {
    super();
    this.p = 0.75;
    this.g = 0.5;
    this.alignState();
  }

  alignState() {
    this.w = CPTMath.pg2w(this.p, this.g);
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('cpt-equation-pg2w-change', {
      detail: {
        p: this.p,
        g: this.g,
        w: this.w,
      },
      bubbles: true,
    }));
  }

  pInput(event) {
    this.p = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }

  gInput(event) {
    this.g = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }

  render() {
    this.alignState();
    let p;
    let g;
    let w;
    if (this.numeric) {
      p = html`
        <decidable-spinner class="p bottom" ?disabled=${!this.interactive} min="0" max="1" step="0.01" .value="${this.p}" @input=${this.pInput.bind(this)}>
          <var class="math-var">p</var>
        </decidable-spinner>
      `;
      g = html`
        <decidable-spinner class="g bottom" ?disabled=${!this.interactive} min="0" max="1" step="0.01" .value="${this.g}" @input=${this.gInput.bind(this)}>
          <var class="math-var">γ</var>
        </decidable-spinner>
      `;
      w = html`
        <decidable-spinner class="w bottom" disabled min="0" max="1" step=".01" .value="${+this.w.toFixed(2)}">
          <var class="math-var">w</var>
        </decidable-spinner>
      `;
    } else {
      p = html`<var class="math-var p">p</var>`;
      g = html`<var class="math-var g">γ</var>`;
      w = html`<var class="math-var w">w</var>`;
    }
    const equation = html`
      <tr>
        <td rowspan="2">
          ${w}<span class="equals">=</span>
        </td>
        <td class="underline">
          ${p}<sup class="exp">${g}</sup>
        </td>
      </tr>
      <tr>
        <td>
          <span class="bracket tight">[</span>${p}<sup class="exp">${g}</sup><span class="plus">+</span><span class="bracket tight">(</span>1<span class="minus">−</span>${p}<span class="bracket tight">)</span><sup class="exp">${g}</sup><span class="bracket tight">]</span><sup class="exp">1/${g}</sup>
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

customElements.define('cpt-equation-pg2w', CPTEquationPG2W);
