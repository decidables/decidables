
import {html, mathml} from 'lit';

import '@decidables/decidables-elements/components/spinner';
import CPTMath from '@decidables/prospectable-math';

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
    this.g = CPTMath.g.DEFAULT;
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

  willUpdate() {
    this.alignState();
  }

  render() {
    // Hacks for Firefox:
    // * Wrap <mtext> with HTML in an <mtable><mtr><mtd> to get vertical alignment correct
    // * <mi> requires `mathvariant="normal"` in addition to `text-transform: none;` in CSS
    // * Wrap <mn> in <mrow> within <msub> and <msup> to get font-size correct with `font-family`
    let p;
    let g;
    let w;
    if (this.numeric) {
      p = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math p"
            ?disabled=${!this.interactive}
            min="0"
            max="1"
            step="0.01"
            .value=${this.p}
            @input=${this.pInput.bind(this)}
          >
            <var class="math-var">p</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      g = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math g"
            ?disabled=${!this.interactive}
            min=${CPTMath.g.MIN}
            max=${CPTMath.g.MAX}
            step=${CPTMath.g.STEP}
            .value=${this.g}
            @input=${this.gInput.bind(this)}
          >
            <var class="math-var">γ</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      w = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math w"
            disabled
            min="0"
            max="1"
            step=".01"
            .value=${+this.w.toFixed(2)}
          >
            <var class="math-var">w</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
    } else {
      p = mathml`<mi mathvariant="normal" class="math-id p">p</mi>`;
      g = mathml`<mi mathvariant="normal" class="math-id g">γ</mi>`;
      w = mathml`<mi mathvariant="normal" class="math-id w">w</mi>`;
    }
    return html`<div class="holder">
      <math display="block">
        <semantics>
          <mrow>
            ${w}
            <mo>=</mo>
            <mfrac>
              <mrow>
                <msup>
                  <mrow>
                    ${p}
                  </mrow>
                  <mrow>
                    ${g}
                  </mrow>
                </msup>
              </mrow>
              <mrow>
                <msup>
                  <mrow>
                    <mo symmetric="false">[</mo>
                    <mrow>
                      <msup>
                        <mrow>
                          ${p}
                        </mrow>
                        <mrow>
                          ${g}
                        </mrow>
                      </msup>
                      <mo>+</mo>
                      <msup>
                        <mrow>
                          <mo symmetric="false">(</mo>
                          <mrow>
                            <mn>1</mn>
                            <mo>−</mo>
                            ${p}
                          </mrow>
                          <mo symmetric="false">)</mo>
                        </mrow>
                        <mrow>
                          ${g}
                        </mrow>
                      </msup>
                    </mrow>
                    <mo symmetric="false">]</mo>
                  </mrow>
                  <mrow>
                    <mfrac>
                      <mrow>
                        <mn>1</mn>
                      </mrow>
                      <mrow>
                        ${g}
                      </mrow>
                    </mfrac>
                    <!-- <mn>1</mn>
                    <mo stretchy="true">⁄</mo>
                    ${g} -->
                  </mrow>
                </msup>
              </mrow>
            </mfrac>
          </mrow>
          <annotation encoding="application/x-tex">
            w = \\frac{p^\\gamma}{[p^\\gamma + (1 - p)^\\gamma]^{1 / \\gamma}}
          </annotation>
          <annotation encoding="application/x-asciimath">
            w = p^gamma / [p^gamma + (1 - p)^gamma] ^ (1 // gamma)
          </annotation>
        </semantics>
      </math>
    </div>`;
  }
}

customElements.define('cpt-equation-pg2w', CPTEquationPG2W);
