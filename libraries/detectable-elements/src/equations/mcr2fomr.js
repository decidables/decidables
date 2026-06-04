
import {html, mathml} from 'lit';

import '@decidables/decidables-elements/components/spinner';
import SDTMath from '@decidables/detectable-math';

import SDTEquation from './sdt-equation';

/*
  SDTEquationMCr2Fomr element
  <sdt-equation-mcr2fomr>

  Attributes:
  Hits; Misses; Hit Rate;
*/
export default class SDTEquationMCr2Fomr extends SDTEquation {
  static get properties() {
    return {
      m: {
        attribute: 'misses',
        type: Number,
        reflect: true,
      },
      cr: {
        attribute: 'correct-rejections',
        type: Number,
        reflect: true,
      },
      fomr: {
        attribute: false,
        type: Number,
        reflect: false,
      },
    };
  }

  constructor() {
    super();
    this.m = 0;
    this.cr = 0;
    this.alignState();
  }

  alignState() {
    this.fomr = SDTMath.mCr2Fomr(this.m, this.cr);
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('sdt-equation-mcr2fomr-change', {
      detail: {
        m: this.m,
        cr: this.cr,
        fomr: this.fomr,
      },
      bubbles: true,
    }));
  }

  mInput(event) {
    this.m = parseInt(event.target.value, 10);
    this.alignState();
    this.sendEvent();
  }

  crInput(event) {
    this.cr = parseInt(event.target.value, 10);
    this.alignState();
    this.sendEvent();
  }

  willUpdate() {
    this.alignState();
  }

  render() {
    let m;
    let cr;
    let fomr;
    if (this.numeric) {
      m = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math m"
            ?disabled=${!this.interactive}
            min="0"
            .value=${this.m}
            @input=${this.mInput.bind(this)}
          >
            <var>Misses</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      cr = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math cr"
            ?disabled=${!this.interactive}
            min="0"
            .value=${this.cr}
            @input=${this.crInput.bind(this)}
          >
            <var>Correct Rejections</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      fomr = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math fomr"
            disabled
            min="0"
            max="1"
            step=".001"
            .value=${+this.fomr.toFixed(3)}
          >
            <var>False Omission Rate</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
    } else {
      m = mathml`<mtext class="math-id m">Misses</mtext>`;
      cr = mathml`<mtext class="math-id cr">Correct Rejections</mtext>`;
      fomr = mathml`<mtext class="math-id fomr">False Omission Rate</mtext>`;
    }
    return html`<div class="holder">
      <math display="block">
        <semantics>
          <mrow>
            ${fomr}
            <mo>=</mo>
            <mfrac>
              <mrow>
                ${m}
              </mrow>
              <mrow>
                ${m}
                <mo>+</mo>
                ${cr}
              </mrow>
            </mfrac>
          </mrow>
          <annotation encoding="application/x-tex">
            \\text{False Omission Rate} = \\frac{\\text{Misses}}
              {\\text{Misses} + \\text{Correct Rejections}}
          </annotation>
          <annotation encoding="application/x-asciimath">
            "False Omission Rate" = "Misses" / ("Misses" + "Correct Rejections")
          </annotation>
        </semantics>
      </math>
    </div>`;
  }
}

customElements.define('sdt-equation-mcr2fomr', SDTEquationMCr2Fomr);
