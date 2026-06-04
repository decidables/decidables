
import {html, mathml} from 'lit';

import '@decidables/decidables-elements/components/spinner';
import CPTMath from '@decidables/prospectable-math';

import CPTEquation from './cpt-equation';

/*
  CPTEquationXAL2V element
  <sdt-equation-xal2v>

  Attributes:
  Subjective Value, Objective Value, alpha, lambda;
*/
export default class CPTEquationXAL2V extends CPTEquation {
  static get properties() {
    return {
      x: {
        attribute: 'value',
        type: Number,
        reflect: true,
      },
      a: {
        attribute: 'alpha',
        type: Number,
        reflect: true,
      },
      l: {
        attribute: 'lambda',
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
    this.x = 10;
    this.a = CPTMath.a.DEFAULT;
    this.l = CPTMath.l.DEFAULT;
    this.alignState();
  }

  alignState() {
    this.v = CPTMath.xal2v(this.x, this.a, this.l);
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('cpt-equation-xal2v-change', {
      detail: {
        x: this.x,
        a: this.a,
        l: this.l,
        v: this.v,
      },
      bubbles: true,
    }));
  }

  xInput(event) {
    this.x = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }

  aInput(event) {
    this.a = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }

  lInput(event) {
    this.l = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }

  willUpdate() {
    this.alignState();
  }

  render() {
    let x;
    let a;
    let l;
    let v;
    if (this.numeric) {
      x = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math x"
            ?disabled=${!this.interactive}
            step="1"
            .value=${this.x}
            @input=${this.xInput.bind(this)}
          >
            <var class="math-var">x</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      a = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math a"
            ?disabled=${!this.interactive}
            min=${CPTMath.a.MIN}
            max=${CPTMath.a.MAX}
            step=${CPTMath.a.STEP}
            .value=${this.a}
            @input=${this.aInput.bind(this)}
          >
            <var class="math-var">α</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      l = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math l"
            ?disabled=${!this.interactive}
            min=${CPTMath.l.MIN}
            step=${CPTMath.l.STEP}
            .value=${this.l}
            @input=${this.lInput.bind(this)}
          >
            <var class="math-var">λ</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      v = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math v"
            disabled
            step=".001"
            .value=${+this.v.toFixed(3)}
          >
            <var class="math-var">v</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
    } else {
      x = mathml`<mi mathvariant="normal" class="math-id x">x</mi>`;
      a = mathml`<mi mathvariant="normal" class="math-id a">α</mi>`;
      l = mathml`<mi mathvariant="normal" class="math-id l">λ</mi>`;
      v = mathml`<mi mathvariant="normal" class="math-id v">v</mi>`;
    }
    return html`<div class="holder">
      <math display="block">
        <semantics>
          <mrow>
            ${v}
            <mo>=</mo>
            <mrow>
              <mo symmetric="false">{</mo>
              <mtable>
                <mtr>
                  <mtd style="text-align: left;">
                    <mrow>
                      <msup>
                        <mrow>
                          ${x}
                        </mrow>
                        <mrow>
                          ${a}
                        </mrow>
                      </msup>
                      <mtext>,</mtext>
                    </mrow>
                  </mtd>
                  <mtd style="text-align: left;">
                    <mrow>
                      <mtext>&emsp;if&nbsp;</mtext>
                      ${x}
                      <mo>&ge;</mo>
                      <mn>0</mn>
                    </mrow>
                  </mtd>
                </mtr>
                <mtr>
                  <mtd style="text-align: left;">
                    <mrow>
                      <mo form="prefix">−</mo>
                      ${l}
                      <msup>
                        <mrow>
                          <mo symmetric="false">(</mo>
                            <mrow>
                              <mo form="prefix">−</mo>
                              ${x}
                            </mrow>
                          <mo symmetric="false">)</mo>
                        </mrow>
                        <mrow>
                          ${a}
                        </mrow>
                      </msup>
                      <mtext>,</mtext>
                    </mrow>
                  </mtd>
                  <mtd style="text-align: left;">
                    <mrow>
                      <mtext>&emsp;if&nbsp;</mtext>
                      ${x}
                      <mo>&lt;</mo>
                      <mn>0</mn>
                    </mrow>
                  </mtd>
                </mtr>
              </mtable>
            </mrow>
          </mrow>
          <annotation encoding="application/x-tex">
            v = \\begin{cases}
                x^\\lpha, & \\text{if } x \\ge 0 \\
                -\\lambda (-x)^\\alpha, & \\text{if } x < 0
            \\end{cases}
          </annotation>
          <annotation encoding="application/x-asciimath">
            v = {(x^alpha text(,), if x >= 0),(-lambda(-x)^alpha text(,), if x < 0):}
          </annotation>
        </semantics>
      </math>
    </div>`;
  }
}

customElements.define('cpt-equation-xal2v', CPTEquationXAL2V);
