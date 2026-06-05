
import {html, mathml} from 'lit';
import {animate, flyLeft} from '@lit-labs/motion';

import '@decidables/decidables-elements/components/spinner';
import DecidablesConverterArray from '@decidables/decidables-elements/utilities/converter-array';

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
        converter: DecidablesConverterArray,
        reflect: true,
      },
      w: {
        attribute: 'weight',
        converter: DecidablesConverterArray,
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

  vTemplate(subscript = '', symbolic = true, numeric = false) {
    let v;
    if (numeric) {
      const index = Number.parseInt(subscript, 10) - 1;
      v = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math v"
            ?disabled=${!this.interactive}
            .value=${this.v[index]}
            @input=${this.vInput.bind(this, index)}
          >
            <var class="math-var">v<sub class="${symbolic ? 'math-var' : 'math-num'}">${subscript}</sub></var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
    } else {
      v = mathml`<msub class="math-id v">
          <mi mathvariant="normal">v</mi>
          <mrow>
            ${symbolic
              ? mathml`<mi mathvariant="normal">${subscript}</mi>`
              : mathml`<mn>${subscript}</mn>`}
          </mrow>
        </msub>`;
    }
    return v;
  }

  wTemplate(subscript = '', symbolic = true, numeric = false) {
    let w;
    if (numeric) {
      const index = Number.parseInt(subscript, 10) - 1;
      w = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math w"
            ?disabled=${!this.interactive}
            min="0"
            max="1"
            step=".001"
            .value=${this.w[index]}
            @input=${this.wInput.bind(this, index)}
          >
            <var class="math-var">w<sub class="${symbolic ? 'math-var' : 'math-num'}">${subscript}</sub></var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
    } else {
      w = mathml`<msub class="math-id w">
          <mi mathvariant="normal">w</mi>
          <mrow>
            ${symbolic
              ? mathml`<mi mathvariant="normal">${subscript}</mi>`
              : mathml`<mn>${subscript}</mn>`}
          </mrow>
        </msub>`;
    }
    return w;
  }

  willUpdate() {
    this.alignState();
  }

  render() {
    let u;
    let n;
    if (this.numeric) {
      u = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math u"
            disabled
            .value=${+this.u.toFixed(3)}
          >
            <var class="math-var">U</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      n = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math n sum-over"
            ?disabled=${!this.interactive}
            min="1"
            max="4"
            step="1"
            .value=${this.n}
            @input=${this.nInput.bind(this)}
          >
            <var class="math-var">n</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
    } else {
      u = mathml`<mi mathvariant="normal" class="math-id u">U</mi>`;
      n = mathml`<mi mathvariant="normal" class="math-id n">n</mi>`;
    }
    return html`<div class="holder">
      <math display="block">
        <semantics>
          <mrow>
            ${u}
            <mo>=</mo>
            <munderover>
              <mo>∑</mo>
              <mrow>
                <mi mathvariant="normal">i</mi>
                <mo>=</mo>
                <mn>1</mn>
              </mrow>
              <mrow>
                ${n}
              </mrow>
            </munderover>
            ${this.vTemplate('i', true, false)}
            ${this.wTemplate('i', true, false)}
            <mo>=</mo>
            ${this.numeric
              ? Array(this.nMax).fill().map((_, index) => {
                return (index < this.n)
                  ? mathml`
                    <mrow ${animate({in: flyLeft, out: flyLeft})}>
                    ${(index !== 0)
                      ? mathml`<mo>+</mo>`
                      : mathml``
                    }
                    ${this.vTemplate(index + 1, false, true)}
                    ${this.wTemplate(index + 1, false, true)}
                  </mrow>`
                  : null;
              })
              : mathml`
                ${this.vTemplate('1', false, false)}
                ${this.wTemplate('1', false, false)}
                <mo>+</mo>
                <mo>⋯</mo>
                <mo>+</mo>
                ${this.vTemplate('n', true, false)}
                ${this.wTemplate('n', true, false)}
              `
            }
          </mrow>
          <annotation encoding="application/x-tex">
            U = \\sum_{i=1}^{n} {v_i w_i} = v_1 w_1 + \\cdots + v_n w_n
          </annotation>
          <annotation encoding="application/x-asciimath">
            U = sum_(i=1)^n v_i w_i = v_1 w_1 + cdots + v_n w_n
          </annotation>
        </semantics>
      </math>
    </div>`;
  }
}

customElements.define('cpt-equation-vw2u', CPTEquationVW2U);
