
import {html} from 'lit';
import {animate, flyLeft} from '@lit-labs/motion';

import '@decidables/decidable-elements/spinner';
import DecidableConverterArray from '@decidables/decidable-elements/converter-array';

import CPTEquation from './cpt-equation';

/*
  CPTEquationVW2U element
  <sdt-equation-vw2u>

  Attributes:
  Subjective Utility, Subjective Value, Subjective Decision Weight;
*/
export default class CPTEquationVW2U extends CPTEquation {
  static get properties() {
    return {
      v: {
        attribute: 'value',
        converter: DecidableConverterArray,
        reflect: true,
      },
      w: {
        attribute: 'weight',
        converter: DecidableConverterArray,
        reflect: true,
      },
      n: {
        attribute: 'outcomes',
        type: Number,
        reflect: true,
      },

      u: {
        attribute: false,
        type: Number,
        reflect: false,
      },
    };
  }

  constructor() {
    super();
    this.v = [10, 0];
    this.w = [0.75, 0.25];
    this.n = 2;

    this.nMax = 4;
    this.vMax = new Array(this.nMax).fill(0);
    this.wMax = new Array(this.nMax).fill(0);

    this.alignState();
  }

  alignState() {
    // Clean up v and w
    this.v = (this.v.length < this.n)
      ? this.v.concat(this.vMax.slice(this.v.length, this.n))
      : (this.v.length > this.n)
        ? this.v.slice(0, this.n)
        : this.v;
    this.w = (this.w.length < this.n)
      ? this.w.concat(this.wMax.slice(this.w.length, this.n))
      : (this.w.length > this.n)
        ? this.w.slice(0, this.n)
        : this.w;
    // Update vMax and wMax to reflect current v and w
    this.v.forEach((item, index) => {
      this.vMax[index] = item;
    });
    this.w.forEach((item, index) => {
      this.wMax[index] = item;
    });
    // Calculate u
    this.u = this.v.reduce((sum, value, index) => { return sum + value * this.w[index]; }, 0);
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('cpt-equation-vw2u-change', {
      detail: {
        v: this.v,
        w: this.w,
        n: this.n,
        u: this.u,
      },
      bubbles: true,
    }));
  }

  vInput(index, event) {
    this.v[index] = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }

  wInput(index, event) {
    this.w[index] = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }

  nInput(event) {
    this.n = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }

  vTemplate(subscript = '', className = '', numeric = false) {
    let v;
    if (numeric) {
      const index = Number.parseInt(subscript, 10) - 1;
      v = html`<decidable-spinner class="v" ?disabled=${!this.interactive} .value="${this.v[index]}" @input=${this.vInput.bind(this, index)}>
          <var class="math-var">v<sub class="subscript ${className}">${subscript}</sub></var>
        </decidable-spinner>`;
    } else {
      v = html`<var class="math-var v">v<sub class="subscript ${className}">${subscript}</sub></var>`;
    }
    return v;
  }

  wTemplate(subscript = '', className = '', numeric = false) {
    let w;
    if (numeric) {
      const index = Number.parseInt(subscript, 10) - 1;
      w = html`<decidable-spinner class="w" ?disabled=${!this.interactive} min="0" max="1" step=".001" .value="${this.w[index]}" @input=${this.wInput.bind(this, index)}>
          <var class="math-var">w<sub class="subscript ${className}">${subscript}</sub></var>
        </decidable-spinner>`;
    } else {
      w = html`<var class="math-var w">w<sub class="subscript ${className}">${subscript}</sub></var>`;
    }
    return w;
  }

  render() {
    this.alignState();
    let u;
    let n;
    if (this.numeric) {
      u = html`<decidable-spinner class="u" disabled .value="${+this.u.toFixed(3)}">
          <var class="math-var">U</var>
        </decidable-spinner>`;
      n = html`<decidable-spinner class="n" ?disabled=${!this.interactive} min="1" max="4" step="1" .value="${this.n}" @input=${this.nInput.bind(this)}>
          <var class="math-var">n</var>
        </decidable-spinner>`;
    } else {
      u = html`<var class="math-var u">U</var>`;
      n = html`<var class="math-var subscript">n</var>`;
    }
    const equation = html`
      <tr>
        <td>
          ${u}<span class="equals">=</span>
        </td>
        <td>
          <div class="summation">
            <span class="tight">${n}</span>
            <span class="tight"><var class="math-greek sigma">Σ</var></span>
            <span class="tight"><var class="math-var subscript tight">i</var><span class="equals subscript">=</span><span class="subscript tight">1</span></span>
          </div>
        </td>
        <td>
          ${
            this.vTemplate('i', 'math-var', false)
          }&nbsp;${
            this.wTemplate('i', 'math-var', false)
          }<span class="equals">=</span>
        </td>
        <td>
          ${this.numeric
            ? Array(this.nMax).fill().map((_, index) => {
              return (index < this.n)
                ? html`<span class="addend tight" ${animate({in: flyLeft, out: flyLeft})}>${
                  (index !== 0)
                    ? html`<span class="plus">+</span>`
                    : html``
                  }${
                    this.vTemplate(index + 1, 'math-num', true)
                  }&nbsp;${
                    this.wTemplate(index + 1, 'math-num', true)
                  }</span>`
                : null;
            })
            : html`${
              this.vTemplate('1', 'math-num', false)
            }&nbsp;${
              this.wTemplate('1', 'math-num', false)
            }<span class="plus">+</span><span class="ellipsis">…</span><span class="plus">+</span>${
              this.vTemplate('n', 'math-var', false)
            }&nbsp;${
              this.wTemplate('n', 'math-var', false)
            }`
          }
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

customElements.define('cpt-equation-vw2u', CPTEquationVW2U);
