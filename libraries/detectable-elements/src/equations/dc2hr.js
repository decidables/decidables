
import {html, mathml} from 'lit';

import '@decidables/decidables-elements/components/spinner';
import SDTMath from '@decidables/detectable-math';

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
    this.d = SDTMath.d.DEFAULT;
    this.c = SDTMath.c.DEFAULT;
    this.s = SDTMath.s.DEFAULT;
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

  willUpdate() {
    this.alignState();
  }

  render() {
    let d;
    let c;
    let s;
    let hr;
    if (this.numeric) {
      d = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math d"
            ?disabled=${!this.interactive}
            step=${SDTMath.d.STEP}
            .value=${this.d}
            @input=${this.dInput.bind(this)}
          >
            <var class="math-var">d′</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      c = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math c"
            ?disabled=${!this.interactive}
            step=${SDTMath.c.STEP}
            .value=${this.c}
            @input=${this.cInput.bind(this)}
          >
            <var class="math-var">c</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      s = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math s"
            ?disabled=${!this.interactive}
            min=${SDTMath.s.MIN}
            step=${SDTMath.s.STEP}
            .value=${this.s}
            @input=${this.sInput.bind(this)}
          >
            <var class="math-var">σ</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      hr = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math hr"
            disabled
            min="0"
            max="1"
            step=".001"
            .value=${+this.hr.toFixed(3)}
          >
            <var>Hit Rate</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
    } else {
      d = mathml`<mi mathvariant="normal" class="math-id d">d′</mi>`;
      c = mathml`<mi mathvariant="normal" class="math-id c">c</mi>`;
      s = mathml`<mi mathvariant="normal" class="math-id s">σ</mi>`;
      hr = mathml`<mtext class="math-id hr">Hit Rate</mtext>`;
    }
    return html`<div class="holder">
      <math display="block">
        <semantics>
          <mrow>
            ${hr}
            <mo>=</mo>
            <mi mathvariant="normal" class="math-greek phi">Φ</mi>
            <mrow>
              <mo symmetric="false">(</mo>
              <mrow>
                ${this.unequal
                  ? mathml`
                    <msup>
                      <mrow>
                        <mo symmetric="true">[</mo>
                        <mfrac>
                          <mrow>
                            <mn>1</mn>
                            <mo>+</mo>
                            <msup>
                              <mrow>
                                ${s}
                              </mrow>
                              <mrow>
                                <mn>2</mn>
                              </mrow>
                            </msup>
                          </mrow>
                          <mrow>
                            <mn>2</mn>
                          </mrow>
                        </mfrac>
                        <mo symmetric="true">]</mo>
                      </mrow>
                      <mfrac>
                        <mrow>
                          <mn>1</mn>
                        </mrow>
                        <mrow>
                          <mn>2</mn>
                        </mrow>
                      </mfrac>
                    </msup>
                    <mrow>
                      <mo symmetric="true">[</mo>
                      <mrow>
                        <mfrac>
                          <mrow>
                            ${d}
                          </mrow>
                          <mrow>
                              <mn>1</mn>
                              <mo>+</mo>
                              ${s}
                          </mrow>
                        </mfrac>
                        <mo>−</mo>
                        <mfrac>
                          <mrow>
                            ${c}
                          </mrow>
                          <mrow>
                            ${s}
                          </mrow>
                        </mfrac>
                      </mrow>
                      <mo symmetric="true">]</mo>
                    </mrow>
                  `
                  : mathml`
                    <mfrac>
                      <mrow>
                        ${d}
                      </mrow>
                      <mrow>
                        <mn>2</mn>
                      </mrow>
                    </mfrac>
                    <mo>−</mo>
                    ${c}
                  `
                }
              </mrow>
              <mo symmetric="false">)</mo>
            </mrow>
          </mrow>
          <annotation encoding="application/x-tex">
            ${this.unequal
              ? mathml`\\text{Hit Rate} = \\Phi{\\left({\\left[\\frac{1 + \\sigma^2}{2}\\right]}^{\\frac{1}{2}}
                  {\\left[\\frac{d'}{1 + \\sigma} - \\frac{c}{\\sigma}\\right]}\\right)}`
              : mathml`\\text{Hit Rate} = \\Phi(\\frac{d'}{2} - c)`
            }
          </annotation>
          <annotation encoding="application/x-asciimath">
            ${this.unequal
              ? mathml`"Hit Rate" = Phi([(1 + sigma^2) / 2]^(1/2)[(d') / (1 + sigma) - c / sigma])`
              : mathml`"Hit Rate" = Phi((d') / 2 - c)`
            }
          </annotation>
        </semantics>
      </math>
    </div>`;
  }
}

customElements.define('sdt-equation-dc2hr', SDTEquationDC2Hr);
