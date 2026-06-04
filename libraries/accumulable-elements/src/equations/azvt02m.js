
import {html, mathml} from 'lit';

import '@decidables/decidables-elements/components/spinner';
import DDMMath from '@decidables/accumulable-math';

import DDMEquation from './ddm-equation';

/*
  DDMEquationAZVT02M element
  <ddm-equation-azvt02m>

  Attributes:
*/
export default class DDMEquationAZVT02M extends DDMEquation {
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
      t0: {
        attribute: 'nondecision-time',
        type: Number,
        reflect: true,
      },

      meanRT: {
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
    this.t0 = DDMMath.t0.DEFAULT;
    this.alignState();
  }

  alignState() {
    this.meanRT = DDMMath.azvt02m(this.a, this.z, this.v, this.t0);
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('ddm-equation-azvt02m-change', {
      detail: {
        a: this.a,
        z: this.z,
        v: this.v,
        t0: this.t0,
        meanRT: this.meanRT,
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

  t0Input(event) {
    this.t0 = parseFloat(event.target.value);
    this.alignState();
    this.sendEvent();
  }

  willUpdate() {
    this.alignState();
  }

  render() {
    let a;
    let z;
    let v;
    let t0;
    let s;
    let meanRT;
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
      t0 = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math t0"
            ?disabled=${!this.interactive}
            min=${DDMMath.t0.MIN}
            max=${DDMMath.t0.MAX}
            step=${DDMMath.t0.STEP}
            .value=${this.t0}
            @input=${this.t0Input.bind(this)}
          >
            <var class="math-var">t<sub class="math-num">0</sub></var>
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
      meanRT = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math mean-rt"
            disabled
            .value=${+this.meanRT.toFixed(0)}
          >
            <var>Mean RT</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
    } else {
      a = mathml`<mi mathvariant="normal" class="math-id a">a</mi>`;
      z = mathml`<mi mathvariant="normal" class="math-id z">z</mi>`;
      v = mathml`<mi mathvariant="normal" class="math-id v">v</mi>`;
      t0 = mathml`<msub class="math-id t0">
          <mi mathvariant="normal">t</mi>
          <mrow><mn>0</mn></mrow>
        </msub>`;
      s = mathml`<mi mathvariant="normal" class="math-id s">s</mi>`;
      meanRT = mathml`<mtext class="mean-rt">Mean RT</mtext>`;
    }
    return html`<div class="holder">
      <math display="block">
        <semantics>
          <mrow>
            ${meanRT}
            <mo>=</mo>
            ${t0}
            <mo>−</mo>
            <mfrac>
              <mrow>
                ${z}
              </mrow>
              <mrow>
                ${v}
              </mrow>
            </mfrac>
            <mo>+</mo>
            <mfrac>
              <mrow>
                ${a}
              </mrow>
              <mrow>
                ${v}
              </mrow>
            </mfrac>
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
                <mo>−</mo>
                <mn>1</mn>
              </mrow>
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
                <mn>1</mn>
              </mrow>
            </mfrac>
          </mrow>
          <annotation encoding="application/x-tex">
            \\text{Mean RT} = t_0 - \\frac{z}{v} + \\frac{a}{v} \\frac{e^{-(2vz / s^2)} - 1} {e^{-(2va / s^2)} - 1}
          </annotation>
          <annotation encoding="application/x-asciimath">
            "Mean RT" = t_0 - z / v + a / v (e^-(2vz // s^2) - 1) / (e^-(2va // s^2) - 1)
          </annotation>
        </semantics>
      </math>
    </div>`;
  }
}

customElements.define('ddm-equation-azvt02m', DDMEquationAZVT02M);
