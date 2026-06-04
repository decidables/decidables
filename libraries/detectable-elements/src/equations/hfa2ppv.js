
import {html, mathml} from 'lit';

import '@decidables/decidables-elements/components/spinner';
import SDTMath from '@decidables/detectable-math';

import SDTEquation from './sdt-equation';

/*
  SDTEquationHFa2Ppv element
  <sdt-equation-hm2hr>

  Attributes:
  Hits; Misses; Hit Rate;
*/
export default class SDTEquationHFa2Ppv extends SDTEquation {
  static get properties() {
    return {
      h: {
        attribute: 'hits',
        type: Number,
        reflect: true,
      },
      fa: {
        attribute: 'false-alarms',
        type: Number,
        reflect: true,
      },
      ppv: {
        attribute: false,
        type: Number,
        reflect: false,
      },
    };
  }

  constructor() {
    super();
    this.h = 0;
    this.fa = 0;
    this.alignState();
  }

  alignState() {
    this.ppv = SDTMath.hFa2Ppv(this.h, this.fa);
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('sdt-equation-hfa2ppv-change', {
      detail: {
        h: this.h,
        fa: this.fa,
        ppv: this.ppv,
      },
      bubbles: true,
    }));
  }

  hInput(event) {
    this.h = parseInt(event.target.value, 10);
    this.alignState();
    this.sendEvent();
  }

  faInput(event) {
    this.fa = parseInt(event.target.value, 10);
    this.alignState();
    this.sendEvent();
  }

  willUpdate() {
    this.alignState();
  }

  render() {
    let h;
    let fa;
    let ppv;
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
      fa = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math fa"
            ?disabled=${!this.interactive}
            min="0"
            .value=${this.fa}
            @input=${this.faInput.bind(this)}
          >
            <var>False Alarms</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
      ppv = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math ppv"
            disabled
            min="0"
            max="1"
            step=".001"
            .value=${+this.ppv.toFixed(3)}
          >
            <var>Positive Predictive Value</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
    } else {
      h = mathml`<mtext class="math-id h">Hits</mtext>`;
      fa = mathml`<mtext class="math-id fa">False Alarms</mtext>`;
      ppv = mathml`<mtext class="math-id ppv">Positive Predictive Value</mtext>`;
    }
    return html`<div class="holder">
      <math display="block">
        <semantics>
          <mrow>
            ${ppv}
            <mo>=</mo>
            <mfrac>
              <mrow>
                ${h}
              </mrow>
              <mrow>
                ${h}
                <mo>+</mo>
                ${fa}
              </mrow>
            </mfrac>
          </mrow>
          <annotation encoding="application/x-tex">
            \\text{Positive Predictive Value} = \\frac{\\text{Hits}}
              {\\text{Hits} + \\text{False Alarms}}
          </annotation>
          <annotation encoding="application/x-asciimath">
            "Positive Predictive Value" = "Hits" / ("Hits" + "False Alarms")
          </annotation>
        </semantics>
      </math>
    </div>`;
  }
}

customElements.define('sdt-equation-hfa2ppv', SDTEquationHFa2Ppv);
