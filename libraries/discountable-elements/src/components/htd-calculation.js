
import {html, mathml} from 'lit';
import {animate, fadeIn} from '@lit-labs/motion';

import '@decidables/decidables-elements/components/spinner';
import HTDMath from '@decidables/discountable-math';

import HTDEquation from '../equations/htd-equation';

/*
  HTDCalculation element
  <htd-calculation>
*/
export default class HTDCalculation extends HTDEquation {
  static get properties() {
    return {
      numeric: {
        attribute: 'numeric',
        type: Boolean,
        reflect: true,
      },

      as: {
        attribute: 'amount-ss',
        type: Number,
        reflect: true,
      },
      ds: {
        attribute: 'delay-ss',
        type: Number,
        reflect: true,
      },
      al: {
        attribute: 'amount-ll',
        type: Number,
        reflect: true,
      },
      dl: {
        attribute: 'delay-ll',
        type: Number,
        reflect: true,
      },

      k: {
        attribute: 'k',
        type: Number,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    this.numeric = false;

    this.as = 20;
    this.ds = 5;
    this.al = 50;
    this.dl = 40;

    this.k = HTDMath.k.DEFAULT;

    this.alignState();
  }

  alignState() {
    // Calculate value
    this.vs = HTDMath.adk2v(this.as, this.ds, this.k);
    this.vl = HTDMath.adk2v(this.al, this.dl, this.k);
    // Calculate difference
    this.vDiff = this.vs - this.vl;
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('htd-calculation-change', {
      detail: {
        as: this.as,
        ds: this.ds,
        al: this.al,
        dl: this.dl,

        k: this.k,
      },
      bubbles: true,
    }));
  }

  asInput(e) {
    this.as = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }

  dsInput(e) {
    this.ds = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }

  alInput(e) {
    this.al = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }

  dlInput(e) {
    this.dl = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }

  kInput(e) {
    this.k = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }

  willUpdate() {
    this.alignState();
  }

  render() {
    let as;
    let ds;
    let al;
    let dl;
    let k;
    let vs;
    let vl;
    let vDiff;
    if (this.numeric) {
      as = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math a as"
            ?disabled=${!this.interactive}
            step="1"
            .value=${this.as}
            @input=${this.asInput.bind(this)}
          >
            <var class="math-var">A<sub class="math-text">ss</sub></var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      ds = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math d ds"
            ?disabled=${!this.interactive}
            min="0"
            step="1"
            .value=${this.ds}
            @input=${this.dsInput.bind(this)}
          >
            <var class="math-var">D<sub class="math-text">ss</sub></var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      al = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math a al"
            ?disabled=${!this.interactive}
            step="1"
            .value=${this.al}
            @input=${this.alInput.bind(this)}
          >
            <var class="math-var">A<sub class="math-text">ll</sub></var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      dl = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math d dl"
            ?disabled=${!this.interactive}
            min="0"
            step="1"
            .value=${this.dl}
            @input=${this.dlInput.bind(this)}
          >
            <var class="math-var">D<sub class="math-text">ll</sub></var>
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

      vs = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math v vs"
            disabled
            .value=${+this.vs.toFixed(3)}
          >
            <var class="math-var">V<sub class="math-text">ss</sub></var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      vl = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math v vl"
            disabled
            .value=${+this.vl.toFixed(3)}
          >
            <var class="math-var">V<sub class="math-text">ll</sub></var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      vDiff = (this.vDiff > 0)
        ? mathml`<mo ${animate({in: fadeIn})}>&gt;</mo>`
        : (this.vDiff < 0)
          ? mathml`<mo ${animate({in: fadeIn})}>&lt;</mo>`
          : mathml`<mo ${animate({in: fadeIn})}>=</mo>`;
    } else {
      as = mathml`<msub class="math-id a as"><mi mathvariant="normal">A</mi><mrow><mtext>ss</mtext></mrow></msub>`;
      ds = mathml`<msub class="math-id d ds"><mi mathvariant="normal">D</mi><mrow><mtext>ss</mtext></mrow></msub>`;
      al = mathml`<msub class="math-id a al"><mi mathvariant="normal">A</mi><mrow><mtext>ll</mtext></mrow></msub>`;
      dl = mathml`<msub class="math-id d dl"><mi mathvariant="normal">D</mi><mrow><mtext>ll</mtext></mrow></msub>`;

      k = mathml`<mi mathvariant="normal" class="math-id k">k</mi>`;

      vs = mathml`<msub class="math-id v vs"><mi mathvariant="normal">V</mi><mrow><mtext>ss</mtext></mrow></msub>`;
      vl = mathml`<msub class="math-id v vl"><mi mathvariant="normal">V</mi><mrow><mtext>ll</mtext></mrow></msub>`;
      vDiff = mathml`<mo>≟</mo>`;
    }
    return html`<div class="holder">
      <math display="block">
        <semantics>
          <mtable class="layout">
            <mtr>
              <mtd class="leftside">
                <mfrac>
                  <mrow>
                    ${as}
                  </mrow>
                  <mrow>
                    <mn>1</mn>
                    <mo>+</mo>
                    ${k}
                    ${ds}
                  </mrow>
                </mfrac>
              </mtd>
              <mtd>
                ${vDiff}
              </mtd>
              <mtd class="rightside">
                <mfrac>
                  <mrow>
                    ${al}
                  </mrow>
                  <mrow>
                    <mn>1</mn>
                    <mo>+</mo>
                    ${k}
                    ${dl}
                  </mrow>
                </mfrac>
              </mtd>
            </mtr>
            <mtr>
              <mtd class="leftside">
                ${vs}
              </mtd>
              <mtd>
                ${vDiff}
              </mtd>
              <mtd class="rightside">
                ${vl}
              </mtd>
            </mtr>
          </mtable>
          <annotation encoding="application/x-tex">
            \\begin{array}{rcl}
            \\frac{A_{ss}}{1 + kD_{ss}} & ≟ & \\frac{A_{ll}}{1 + kD_{ll}} \\\\
            V_{ss} & ≟ & V_{ll}
            \\end{array}
          </annotation>
          <annotation encoding="application/x-asciimath">
            {: [A_(ss)/(1 + kD_(ss)), ≟, A_(ll)/(1 + kD_(ll))], [V_(ss), ≟, V_(ll)] :}
          </annotation>
        </semantics>
      </math>
    </div>`;
  }
}

customElements.define('htd-calculation', HTDCalculation);
