
import {html} from 'lit-element';

import SDTMath from '@decidable/detectable-math';

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

  render() {
    this.alignState();
    let fa;
    let cr;
    let far;
    if (this.numeric) {
      fa = html`<label class="fa">
          <var>False Alarms</var>
          <input ?disabled=${!this.interactive} type="number" min="0" .value="${this.fa}" @input=${this.faInput.bind(this)}>
        </label>`;
      cr = html`<label class="cr">
          <var>Correct Rejections</var>
          <input ?disabled=${!this.interactive} type="number" min="0" .value="${this.cr}" @input=${this.crInput.bind(this)}>
        </label>`;
      far = html`<label class="far">
          <var>False Alarm Rate</var>
          <input disabled type="number" min="0" max="1" step=".001" .value="${+this.far.toFixed(3)}">
        </label>`;
    } else {
      fa = html`<var class="fa">False Alarms</var>`;
      cr = html`<var class="cr">Correct Rejections</var>`;
      far = html`<var class="far">False Alarm Rate</var>`;
    }
    return html`
      <div class="holder">
        <table class="equation">
          <tbody>
            <tr>
              <td rowspan="2">
                ${far}<span class="equals">=</span>
              </td>
              <td class="underline">
                ${fa}
              </td>
            </tr>
            <tr>
              <td>
                ${fa}<span class="plus">+</span>${cr}
              </td>
            </tr>
          </tbody>
        </table>
      </div>`;
  }
}

customElements.define('sdt-equation-facr2far', SDTEquationFaCr2Far);
