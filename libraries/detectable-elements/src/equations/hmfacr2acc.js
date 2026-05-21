
import {html, mathml} from 'lit';

import '@decidables/decidables-elements/spinner';
import SDTMath from '@decidables/detectable-math';

import SDTEquation from './sdt-equation';

/*
  SDTEquationHMFaCr2Acc element
  <sdt-equation-hmfacr2acc>

  Attributes:
  Hits; Misses; False Alarms; Correct Rejections; Accuracy;
*/
export default class SDTEquationHMFaCr2Acc extends SDTEquation {
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
      fa: {
        attribute: 'false-alarms',
        type: Number,
        reflect: true,
      },
      cr: {
        attribute: 'correct-rejections',
        type: Number,
        reflect: true,
      },
      acc: {
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
    this.fa = 0;
    this.cr = 0;
    this.alignState();
  }

  alignState() {
    this.acc = SDTMath.hMFaCr2Acc(this.h, this.m, this.fa, this.cr);
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('sdt-equation-hmfacr2acc-change', {
      detail: {
        h: this.h,
        m: this.m,
        fa: this.fa,
        cr: this.cr,
        acc: this.acc,
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

  faInput(event) {
    this.fa = parseInt(event.target.value, 10);
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
    let h;
    let m;
    let fa;
    let cr;
    let acc;

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
      acc = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math acc"
            disabled
            min="0"
            max="1"
            step=".001"
            .value=${+this.acc.toFixed(3)}
          >
            <var>Accuracy</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
    } else {
      h = mathml`<mtext class="math-id h">Hits</mtext>`;
      m = mathml`<mtext class="math-id m">Misses</mtext>`;
      fa = mathml`<mtext class="math-id fa">False Alarms</mtext>`;
      cr = mathml`<mtext class="math-id cr">Correct Rejections</mtext>`;
      acc = mathml`<mtext class="math-id acc">Accuracy</mtext>`;
    }
    return html`<div class="holder">
      <math display="block">
        <semantics>
          <mrow>
            ${acc}
            <mo>=</mo>
            <mfrac>
              <mrow>
                ${h}
                <mo>+</mo>
                ${cr}
              </mrow>
              <mrow>
                ${h}
                <mo>+</mo>
                ${cr}
                <mo>+</mo>
                ${m}
                <mo>+</mo>
                ${fa}
              </mrow>
            </mfrac>
          </mrow>
          <annotation encoding="application/x-tex">
            \\text{Accuracy} = \\frac{\\text{Hits} + \\text{Correct Rejections}}
              {\\text{Hits} + \\text{Correct Rejections} + \\text{Misses} + \\text{False Alarms}}
          </annotation>
          <annotation encoding="application/x-asciimath">
            "Accuracy" = ("Hits" + "Correct Rejections") / 
              ("Hits" + "Correct Rejections" + "Misses" + "False Alarms")
          </annotation>
        </semantics>
      </math>
    </div>`;
  }
}

customElements.define('sdt-equation-hmfacr2acc', SDTEquationHMFaCr2Acc);
