
import {html, mathml} from 'lit';

import '@decidables/decidables-elements/components/spinner';
import DDMMath from '@decidables/accumulable-math';

import DDMEquation from './ddm-equation';

/*
  DDMEquationAZV2PC element
  <ddm-equation-azv2pc>

  Attributes:
*/
export default class DDMEquationAZV2PC extends DDMEquation {
  static get properties() {
    return {
      a: {
        attribute: 'boundary-separation',
        type: Number,
        reflect: true,
      },
      z: {
        attribute: 'starting-point',
        type: Number,
        reflect: true,
      },
      v: {
        attribute: 'drift-rate',
        type: Number,
        reflect: true,
      },

      accuracy: {
        attribute: false,
        type: Number,
        reflect: false,
      },
    };
  }

  constructor() {
    super();
    this.a = DDMMath.a.DEFAULT;
    this.z = DDMMath.z.DEFAULT;
    this.v = DDMMath.v.DEFAULT;
    this.alignState();
  }

  alignState() {
    this.accuracy = DDMMath.azv2pC(this.a, this.z, this.v);
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('ddm-equation-azv2pc-change', {
      detail: {
        a: this.a,
        z: this.z,
        v: this.v,
        accuracy: this.accuracy,
      },
      bubbles: true,
    }));
  }

  aInput(event) {
    this.a = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }

  zInput(event) {
    this.z = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }

  vInput(event) {
    this.v = parseFloat(event.target.value);
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
    let a;
    let z;
    let v;
    let s;
    let accuracy;
    if (this.numeric) {
      a = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math a"
            ?disabled=${!this.interactive}
            min=${DDMMath.a.MIN}
            max=${DDMMath.a.MAX}
            step=${DDMMath.a.STEP}
            .value=${this.a}
            @input=${this.aInput.bind(this)}
          >
            <var class="math-var">a</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      z = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math z"
            ?disabled=${!this.interactive}
            min=${DDMMath.z.MIN}
            max=${DDMMath.z.MAX}
            step=${DDMMath.z.STEP}
            .value=${this.z}
            @input=${this.zInput.bind(this)}
          >
            <var class="math-var">z</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      v = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math v"
            ?disabled=${!this.interactive}
            min=${DDMMath.v.MIN}
            max=${DDMMath.v.MAX}
            step=${DDMMath.v.STEP}
            .value=${this.v}
            @input=${this.vInput.bind(this)}
          >
            <var class="math-var">v</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      s = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math s"
            disabled
            .value=${DDMMath.s.DEFAULT}
          >
            <var class="math-var">s</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      accuracy = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math accuracy"
            disabled
            .value=${+this.accuracy.toFixed(2)}
          >
            <var>Accuracy</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
    } else {
      a = mathml`<mi mathvariant="normal" class="math-id a">a</mi>`;
      z = mathml`<mi mathvariant="normal" class="math-id z">z</mi>`;
      v = mathml`<mi mathvariant="normal" class="math-id v">v</mi>`;
      s = mathml`<mi mathvariant="normal" class="math-id s">s</mi>`;
      accuracy = mathml`<mtext class="accuracy">Accuracy</mtext>`;
    }
    return html`<div class="holder">
      <math display="block">
        <semantics>
          <mrow>
            ${accuracy}
            <mo>=</mo>
            <mfrac>
              <mrow>
                <msup>
                  <mrow>
                    <mi mathvariant="normal">e</mi>
                  </mrow>
                  <mrow>
                    <mo form="prefix">−</mo>
                    <mrow>
                      <mo symmetric="false">(</mo>
                      <mrow>
                        <mn>2</mn>
                        ${v}
                        ${a}
                        <mo stretchy="true">⁄</mo>
                        <msup>
                          <mrow>
                            ${s}
                          </mrow>
                          <mrow>
                            <mn>2</mn>
                          </mrow>
                        </msup>
                      </mrow>
                      <mo symmetric="false">)</mo>
                    </mrow>
                  </mrow>
                </msup>
                <mo>−</mo>
                <msup>
                  <mrow>
                    <mi mathvariant="normal">e</mi>
                  </mrow>
                  <mrow>
                    <mo form="prefix">−</mo>
                    <mrow>
                      <mo symmetric="false">(</mo>
                      <mrow>
                        <mn>2</mn>
                          ${v}
                          ${z}
                        <mo stretchy="true">⁄</mo>
                        <msup>
                          <mrow>
                            ${s}
                          </mrow>
                          <mrow>
                            <mn>2</mn>
                          </mrow>
                        </msup>
                      </mrow>
                      <mo symmetric="false">)</mo>
                    </mrow>
                  </mrow>
                </msup>
              </mrow>
              <mrow>
                <msup>
                  <mi mathvariant="normal">e</mi>
                  <mrow>
                    <mo form="prefix">−</mo>
                    <mrow>
                      <mo symmetric="false">(</mo>
                      <mrow>
                        <mn>2</mn>
                        ${v}
                        ${a}
                        <mo stretchy="true">⁄</mo>
                        <msup>
                          <mrow>
                            ${s}
                          </mrow>
                          <mrow>
                            <mn>2</mn>
                          </mrow>
                        </msup>
                      </mrow>
                      <mo symmetric="false">)</mo>
                    </mrow>
                  </mrow>
                </msup>
                <mo>−</mo>
                <mn>1</mn>
              </mrow>
            </mfrac>
          </mrow>
          <annotation encoding="application/x-tex">
            \\text{Accuracy} = \\frac{e^{-(2va / s^2)} - e^{-(2vz / s^2)}}{e^{-(2va / s^2)} - 1}
          </annotation>
          <annotation encoding="application/x-asciimath">
            "Accuracy" = (e^-(2va // s^2) - e^-(2vz // s^2)) / (e^-(2va // s^2) - 1)
          </annotation>
        </semantics>
      </math>
    </div>`;
  }
}

customElements.define('ddm-equation-azv2pc', DDMEquationAZV2PC);
