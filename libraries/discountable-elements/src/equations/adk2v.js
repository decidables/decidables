
import {html, mathml} from 'lit';

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

    this.k = HTDMath.k.DEFAULT;

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
      a = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math a"
            ?disabled=${!this.interactive}
            step="1"
            .value=${this.a}
            @input=${this.aInput.bind(this)}
          >
            <var class="math-var">A</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      d = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math d"
            ?disabled=${!this.interactive}
            min="0"
            step="1"
            .value=${this.d}
            @input=${this.dInput.bind(this)}
          >
            <var class="math-var">D</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      k = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math k"
            ?disabled=${!this.interactive}
            min=${HTDMath.k.MIN}
            max=${HTDMath.k.MAX}
            step=${HTDMath.k.STEP}
            .value=${this.k}
            @input=${this.kInput.bind(this)}
          >
            <var class="math-var">k</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      v = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math v"
            disabled
            step=".001"
            .value=${+this.v.toFixed(3)}
          >
            <var class="math-var">V</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
    } else {
      a = mathml`<mi mathvariant="normal" class="math-id a">A</mi>`;
      d = mathml`<mi mathvariant="normal" class="math-id d">D</mi>`;
      k = mathml`<mi mathvariant="normal" class="math-id k">k</mi>`;
      v = mathml`<mi mathvariant="normal" class="math-id v">V</mi>`;
    }
    return html`<div class="holder">
      <math display="block">
        <semantics>
          <mrow>
            ${v}
            <mo>=</mo>
            <mfrac>
              <mrow>
                ${a}
              </mrow>
              <mrow>
                <mn>1</mn>
                <mo>+</mo>
                ${k}
                ${d}
              </mrow>
            </mfrac>
          </mrow>
          <annotation encoding="application/x-tex">
            V = \\frac{A}{1 + kD}
          </annotation>
          <annotation encoding="application/x-asciimath">
            V = A / (1 + kD)
          </annotation>
        </semantics>
      </math>
    </div>`;
  }
}

customElements.define('htd-equation-adk2v', HTDEquationADK2V);
