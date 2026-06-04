
import {html, mathml} from 'lit';
import {animate, fadeIn} from '@lit-labs/motion';

import '@decidables/decidables-elements/components/spinner';
import CPTMath from '@decidables/prospectable-math';

import CPTEquation from '../equations/cpt-equation';

/*
  CPTCalculation element
  <cpt-calculation>
*/
export default class CPTCalculation extends CPTEquation {
  static get properties() {
    return {
      numeric: {
        attribute: 'numeric',
        type: Boolean,
        reflect: true,
      },

      xw: {
        attribute: 'win',
        type: Number,
        reflect: true,
      },
      xl: {
        attribute: 'loss',
        type: Number,
        reflect: true,
      },
      pw: {
        attribute: 'probability',
        type: Number,
        reflect: true,
      },
      xs: {
        attribute: 'sure',
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
      g: {
        attribute: 'gamma',
        type: Number,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    this.numeric = false;

    this.xl = 0;
    this.xw = 100;
    this.pw = 0.75;
    this.xs = 50;

    this.a = CPTMath.a.DEFAULT;
    this.l = CPTMath.l.DEFAULT;
    this.g = CPTMath.g.DEFAULT;

    this.alignState();
  }

  alignState() {
    // Calculate subjective value and probability
    this.vw = CPTMath.xal2v(this.xw, this.a, this.l);
    this.vl = CPTMath.xal2v(this.xl, this.a, this.l);
    this.ww = CPTMath.pg2w(this.pw, this.g);
    this.wl = 1 - this.ww;
    this.vs = CPTMath.xal2v(this.xs, this.a, this.l);
    // Calculate subjective utility
    this.ug = CPTMath.vw2u([this.vw, this.vl], [this.ww, this.wl]);
    this.us = this.vs;
    // Calculate difference
    this.uDiff = this.ug - this.us;
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('cpt-calculation-change', {
      detail: {
        xl: this.xl,
        xw: this.xw,
        pw: this.pw,
        xs: this.xs,

        a: this.a,
        l: this.l,
        g: this.g,
      },
      bubbles: true,
    }));
  }

  xwInput(e) {
    this.xw = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }

  pwInput(e) {
    this.pw = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }

  xsInput(e) {
    this.xs = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }

  willUpdate() {
    this.alignState();
  }

  render() {
    let xw;
    let xl;
    let pw;
    let xs;

    let vw;
    let vl;
    let ww;
    let wl;
    let vs;

    let ug;
    let us;
    let uDiff;

    if (this.numeric) {
      xw = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math x xw"
            ?disabled=${!this.interactive}
            .value=${this.xw}
            @input=${this.xwInput.bind(this)}
          >
            <var class="math-var">x<sub class="math-text">win</sub></var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      xl = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math x xl"
            disabled
            .value=${this.xl}
          >
            <var class="math-var">x<sub class="math-text">loss</sub></var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      pw = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math p pw"
            ?disabled=${!this.interactive}
            min="0"
            max="1"
            step=".01"
            .value=${+this.pw.toFixed(2)}
            @input=${this.pwInput.bind(this)}
          >
            <var class="math-var">p<sub class="math-text">win</sub></var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      xs = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math x xs"
            ?disabled=${!this.interactive}
            .value=${this.xs}
            @input=${this.xsInput.bind(this)}
          >
            <var class="math-var">x<sub class="math-text">sure</sub></var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;

      vw = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math v vw"
            disabled
            .value=${+this.vw.toFixed(1)}
          >
            <var class="math-var">v<sub class="math-text">win</sub></var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      vl = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math v vl"
            disabled
            .value=${+this.vl.toFixed(1)}
          >
            <var class="math-var">v<sub class="math-text">loss</sub></var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      ww = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math w ww"
            disabled
            .value=${+this.ww.toFixed(2)}
          >
            <var class="math-var">w<sub class="math-text">win</sub></var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      wl = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math w wl"
            disabled
            .value=${+this.wl.toFixed(2)}
          >
            <var class="math-var">w<sub class="math-text">loss</sub></var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      vs = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math v vs"
            disabled
            .value=${+this.vs.toFixed(1)}
          >
            <var class="math-var">v<sub class="math-text">sure</sub></var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;

      ug = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math u ug"
            disabled
            .value=${+this.ug.toFixed(1)}
          >
            <var class="math-var">U<sub class="math-text">gamble</sub></var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      us = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math u us"
            disabled
            .value=${+this.us.toFixed(1)}
          >
            <var class="math-var">U<sub class="math-text">sure</sub></var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      uDiff = (this.uDiff > 0)
        ? mathml`<mo ${animate({in: fadeIn})}>&gt;</mo>`
        : (this.uDiff < 0)
          ? mathml`<mo ${animate({in: fadeIn})}>&lt;</mo>`
          : mathml`<mo ${animate({in: fadeIn})}>=</mo>`;
    } else {
      xw = mathml`<msub class="math-id x xw"><mi mathvariant="normal">x</mi><mrow><mtext>win</mtext></mrow></msub>`;
      xl = mathml`<msub class="math-id x xl"><mi mathvariant="normal">x</mi><mrow><mtext>loss</mtext></mrow></msub>`;
      pw = mathml`<msub class="math-id p pw"><mi mathvariant="normal">p</mi><mrow><mtext>win</mtext></mrow></msub>`;
      xs = mathml`<msub class="math-id x xs"><mi mathvariant="normal">x</mi><mrow><mtext>sure</mtext></mrow></msub>`;

      vw = mathml`<msub class="math-id v vw"><mi mathvariant="normal">v</mi><mrow><mtext>win</mtext></mrow></msub>`;
      vl = mathml`<msub class="math-id v vl"><mi mathvariant="normal">v</mi><mrow><mtext>loss</mtext></mrow></msub>`;
      ww = mathml`<msub class="math-id w ww"><mi mathvariant="normal">w</mi><mrow><mtext>win</mtext></mrow></msub>`;
      wl = mathml`<msub class="math-id w wl"><mi mathvariant="normal">w</mi><mrow><mtext>loss</mtext></mrow></msub>`;
      vs = mathml`<msub class="math-id v vs"><mi mathvariant="normal">v</mi><mrow><mtext>sure</mtext></mrow></msub>`;

      ug = mathml`<msub class="math-id u ug"><mi mathvariant="normal">u</mi><mrow><mtext>gamble</mtext></mrow></msub>`;
      us = mathml`<msub class="math-id u us"><mi mathvariant="normal">u</mi><mrow><mtext>sure</mtext></mrow></msub>`;
      uDiff = mathml`<mo>≟</mo>`;
    }
    return html`<div class="holder">
      <math display="block">
        <semantics>
          <mtable class="layout">
            <mtr>
              <mtd class="leftside">
                <mrow>
                  <mrow class="math-id v">
                    <mi mathvariant="normal">v</mi>
                    <mo>(</mo>
                    ${xw}
                    <mo>)</mo>
                  </mrow>
                  <mrow class="math-id w">
                    <mi mathvariant="normal">w</mi>
                    <mo>(</mo>
                    ${pw}
                    <mo>)</mo>
                  </mrow>
                  <mo>+</mo>
                  <mrow class="math-id v">
                    <mi mathvariant="normal">v</mi>
                    <mo>(</mo>
                    ${xl}
                    <mo>)</mo>
                  </mrow>
                  <mrow>
                    <mo>[</mo>
                    <mrow>
                      <mn>1</mn>
                      <mo>−</mo>
                      <mrow class="math-id w">
                        <mi mathvariant="normal">w</mi>
                        <mo>(</mo>
                        ${pw}
                        <mo>)</mo>
                      </mrow>
                    </mrow>
                    <mo>]</mo>
                  </mrow>
                </mrow>
              </mtd>
              <mtd>
                ${uDiff}
              </mtd>
              <mtd class="rightside">
                <mrow class="math-id v">
                  <mi mathvariant="normal">v</mi>
                  <mo>(</mo>
                  ${xs}
                  <mo>)</mo>
                </mrow>
              </mtd>
            </mtr>
            <mtr>
              <mtd class="leftside">
                <mrow>
                  ${vw}
                  ${ww}
                  <mo>+</mo>
                  ${vl}
                  ${wl}
                </mrow>
              </mtd>
              <mtd>
                ${uDiff}
              </mtd>
              <mtd class="rightside">
                ${vs}
              </mtd>
            </mtr>
            <mtr>
              <mtd class="leftside">
                ${ug}
              </mtd>
              <mtd>
                ${uDiff}
              </mtd>
              <mtd class="rightside">
                ${us}
              </mtd>
            </mtr>
          </mtable>
          <annotation encoding="application/x-tex">
            \\begin{array}{rcl}
            v(x_{\\text{win}})w(p_{\\text{win}}) + v(x_{\\text{loss}})[1 - w(p_{\\text{loss}})] & ≟ & v(x_{\\text{sure}}) \\\\
            v_{\\text{win}}w_{\\text{win}} + v_{\\text{loss}}w_{\\text{loss}} & ≟ & v_{\\text{sure}} \\\\
            U_{\\text{gamble}} & ≟ & U_{\\text{sure}}
            \\end{array}
          </annotation>
          <annotation encoding="application/x-asciimath">
            {:
            [v(x_("win"))w(p_("win")) + v(x_("loss"))w(p_("loss")), ≟, v(x_("sure"))],
            [v_("win")w_("win") + v_("loss")w_("loss"), ≟, v_("sure")],
            [U_("gamble"), ≟, U_("sure")]
            :}
          </annotation>
        </semantics>
      </math>
    </div>`;
  }
}

customElements.define('cpt-calculation', CPTCalculation);
