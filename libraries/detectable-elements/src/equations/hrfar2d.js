
import {html, mathml} from 'lit';

import '@decidables/decidables-elements/components/spinner';
import SDTMath from '@decidables/detectable-math';

import SDTEquation from './sdt-equation';

/*
  SDTEquationHrFar2D element
  <sdt-equation-hrfar2d>

  Attributes:
  Hit Rate; False Alarm Rate; d';
*/
export default class SDTEquationHrFar2D extends SDTEquation {
  static get properties() {
    return {
      unequal: {
        attribute: 'unequal',
        type: Boolean,
        reflect: true,
      },
      hr: {
        attribute: 'hit-rate',
        type: Number,
        reflect: true,
      },
      far: {
        attribute: 'false-alarm-rate',
        type: Number,
        reflect: true,
      },
      s: {
        attribute: 's',
        type: Number,
        reflect: true,
      },

      d: {
        attribute: false,
        type: Number,
        reflect: false,
      },
    };
  }

  constructor() {
    super();
    this.unequal = false;
    this.hr = 0;
    this.far = 0;
    this.s = SDTMath.s.DEFAULT;
    this.alignState();
  }

  alignState() {
    this.d = SDTMath.hrFar2D(this.hr, this.far, this.s);
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('sdt-equation-hrfar2d-change', {
      detail: {
        hr: this.hr,
        far: this.far,
        s: this.s,
        d: this.d,
      },
      bubbles: true,
    }));
  }

  hrInput(event) {
    this.hr = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }

  farInput(event) {
    this.far = parseFloat(event.target.value);
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
    let hr;
    let far;
    let s;
    let d;
    if (this.numeric) {
      hr = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math hr"
            ?disabled=${!this.interactive}
            min="0"
            max="1"
            step=".001"
            .value=${this.hr}
            @input=${this.hrInput.bind(this)}
          >
            <var>Hit Rate</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      far = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math far"
            ?disabled=${!this.interactive}
            min="0"
            max="1"
            step=".001"
            .value=${this.far}
            @input=${this.farInput.bind(this)}
          >
            <var>False Alarm Rate</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      s = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math s"
            ?disabled=${!this.interactive}
            min="0"
            step=".001"
            .value=${this.s}
            @input=${this.sInput.bind(this)}
          >
            <var class="math-var">σ</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      d = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math d"
            disabled
            step=${SDTMath.d.STEP}
            .value=${+this.d.toFixed(3)}
          >
            <var class="math-var">d′</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
    } else {
      hr = mathml`<mtext class="math-id hr">Hit Rate</mtext>`;
      far = mathml`<mtext class="math-id far">False Alarm Rate</mtext>`;
      s = mathml`<mi mathvariant="normal" class="math-id s">σ</mi>`;
      d = mathml`<mi mathvariant="normal" class="math-id d">d′</mi>`;
    }
    return html`<div class="holder">
      <math display="block">
        <semantics>
          <mrow>
            ${d}
            <mo>=</mo>
            ${this.unequal
              ? mathml`
                <msup>
                  <mrow>
                    <mo symmetric="false">(</mo>
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
                    <mo symmetric="false">)</mo>
                  </mrow>
                  <mrow>
                    <mo form="prefix">−</mo>
                    <mfrac>
                      <mrow>
                        <mn>1</mn>
                      </mrow>
                      <mrow>
                        <mn>2</mn>
                      </mrow>
                    </mfrac>
                  </mrow>
                </msup>
                <mrow>
                  <mo>[</mo>
                  <mrow>
                    ${s}
                    <msup>
                      <mrow>
                        <mi mathvariant="normal" class="math-greek phi">Φ</mi>
                      </mrow>
                      <mrow>
                        <mn>−1</mn>
                      </mrow>
                    </msup>
                    <mrow>
                      <mo>(</mo>
                      ${hr}
                      <mo>)</mo>
                    </mrow>
                    <mo>−</mo>
                    <msup>
                      <mrow>
                        <mi mathvariant="normal" class="math-greek phi">Φ</mi>
                      </mrow>
                      <mrow>
                        <mn>−1</mn>
                      </mrow>
                    </msup>
                    <mrow>
                      <mo>(</mo>
                      <mrow>
                        ${far}
                      </mrow>
                      <mo>)</mo>
                    </mrow>
                  </mrow>
                  <mo>]</mo>
                </mrow>
              `
              : mathml`
                <msup>
                  <mrow>
                    <mi mathvariant="normal" class="math-greek phi">Φ</mi>
                  </mrow>
                  <mrow>
                    <mn>−1</mn>
                  </mrow>
                </msup>
                <mrow>
                  <mo>(</mo>
                  ${hr}
                  <mo>)</mo>
                </mrow>
                <mo>−</mo>
                <msup>
                  <mrow>
                    <mi mathvariant="normal" class="math-greek phi">Φ</mi>
                  </mrow>
                  <mrow>
                    <mn>−1</mn>
                  </mrow>
                </msup>
                <mrow>
                  <mo>(</mo>
                  <mrow>
                    ${far}
                  </mrow>
                  <mo>)</mo>
                </mrow>
              `
            }
          </mrow>
          <annotation encoding="application/x-tex">
            ${this.unequal
              ? mathml`d' = \\left(\\frac{1 + \\sigma^2}{2}\\right)^{-\\frac{1}{2}}
                \\left[\\sigma \\Phi^{-1}(\\text{Hit Rate}) - \\Phi^{-1}(\\text{False Alarm Rate}) \\right]`
              : mathml`d' = \\Phi^{-1}(\\text{Hit Rate}) - \\Phi^{-1}(\\text{False Alarm Rate})`
            }
          </annotation>
          <annotation encoding="application/x-asciimath">
            ${this.unequal
              ? mathml`d' = ((1 + sigma^2) / 2)^(-1/2)
                [sigma Phi^(-1)("Hit Rate") - Phi^(-1)("False Alarm Rate")]`
              : mathml`d' = Phi^-1("Hit Rate") - Phi^-1("False Alarm Rate")`
            }
          </annotation>
        </semantics>
      </math>
    </div>`;
  }
}

customElements.define('sdt-equation-hrfar2d', SDTEquationHrFar2D);
