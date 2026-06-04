
import {html, mathml} from 'lit';

import '@decidables/decidables-elements/components/spinner';
import SDTMath from '@decidables/detectable-math';

import SDTEquation from './sdt-equation';

/*
  SDTEquationHM2Hr element
  <sdt-equation-hm2hr>

  Attributes:
  Hits; Misses; Hit Rate;
*/
export default class SDTEquationHM2Hr extends SDTEquation {
  static get properties() {
    return {
      h: {
        attribute: 'hits',
        type: Number,
        reflect: true,
      },
      m: {
        attribute: 'misses',
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
    this.h = 0;
    this.m = 0;
    this.alignState();
  }

  alignState() {
    this.hr = SDTMath.hM2Hr(this.h, this.m);
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('sdt-equation-hm2hr-change', {
      detail: {
        h: this.h,
        m: this.m,
        hr: this.hr,
      },
      bubbles: true,
    }));
  }

  hInput(event) {
    this.h = parseInt(event.target.value, 10);
    this.alignState();
    this.sendEvent();
  }

  mInput(event) {
    this.m = parseInt(event.target.value, 10);
    this.alignState();
    this.sendEvent();
  }

  willUpdate() {
    this.alignState();
  }

  render() {
    let h;
    let m;
    let hr;
    if (this.numeric) {
      h = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math h"
            ?disabled=${!this.interactive}
            min="0"
            .value=${this.h}
            @input=${this.hInput.bind(this)}
          >
            <var>Hits</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
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
      h = mathml`<mtext class="math-id h">Hits</mtext>`;
      m = mathml`<mtext class="math-id m">Misses</mtext>`;
      hr = mathml`<mtext class="math-id hr">Hit Rate</mtext>`;
    }
    return html`<div class="holder">
      <math display="block">
        <semantics>
          <mrow>
            ${hr}
            <mo>=</mo>
            <mfrac>
              <mrow>
                ${h}
              </mrow>
              <mrow>
                ${h}
                <mo>+</mo>
                ${m}
              </mrow>
            </mfrac>
          </mrow>
          <annotation encoding="application/x-tex">
            \\text{Hit Rate} = \\frac{\\text{Hits}}{\\text{Hits} + \\text{Misses}}
          </annotation>
          <annotation encoding="application/x-asciimath">
            "Hit Rate" = "Hits" / ("Hits" + "Misses")
          </annotation>
        </semantics>
      </math>
    </div>`;
  }
}

customElements.define('sdt-equation-hm2hr', SDTEquationHM2Hr);
