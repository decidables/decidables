
import {html, mathml} from 'lit';

import '@decidables/decidables-elements/spinner';
import SDTMath from '@decidables/detectable-math';

import SDTEquation from './sdt-equation';

/*
  SDTEquationFaCr2Far element
  <sdt-equation-facr2far>

  Attributes:
  False Alarms; Correct Rejections; False Alarm Rate;
*/
export default class SDTEquationFaCr2Far extends SDTEquation {
  static get properties() {
    return {
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
      far: {
        attribute: false,
        type: Number,
        reflect: false,
      },
    };
  }

  constructor() {
    super();
    this.fa = 0;
    this.cr = 0;
    this.alignState();
  }

  alignState() {
    this.far = SDTMath.faCr2Far(this.fa, this.cr);
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('sdt-equation-facr2far-change', {
      detail: {
        fa: this.fa,
        cr: this.cr,
        far: this.far,
      },
      bubbles: true,
    }));
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
    let fa;
    let cr;
    let far;
    if (this.numeric) {
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
      far = mathml`<mtable><mtr><mtd><mtext>
          <decidables-spinner class="math far"
            disabled
            min="0"
            max="1"
            step=".001"
            .value=${+this.far.toFixed(3)}
          >
            <var>False Alarm Rate</var>
          </decidables-spinner>
        </mtext></mtd></mtr></mtable>`;
    } else {
      fa = mathml`<mtext class="math-id fa">False Alarms</mtext>`;
      cr = mathml`<mtext class="math-id cr">Correct Rejections</mtext>`;
      far = mathml`<mtext class="math-id far">False Alarm Rate</mtext>`;
    }
    return html`<div class="holder">
      <math display="block">
        <semantics>
          <mrow>
            ${far}
            <mo>=</mo>
            <mfrac>
              <mrow>
                ${fa}
              </mrow>
              <mrow>
                ${fa}
                <mo>+</mo>
                ${cr}
              </mrow>
            </mfrac>
          </mrow>
          <annotation encoding="application/x-tex">
            \\text{False Alarm Rate} = \\frac{\\text{False Alarms}}
              {\\text{False Alarms} + \\text{Correct Rejections}}
          </annotation>
          <annotation encoding="application/x-asciimath">
            "False Alarm Rate" = "False Alarms" / ("False Alarms" + "Correct Rejections")
          </annotation>
        </semantics>
      </math>
    </div>`;
  }
}

customElements.define('sdt-equation-facr2far', SDTEquationFaCr2Far);
