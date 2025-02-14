
import {html} from 'lit';

import '@decidables/decidables-elements/spinner';
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
    let a;
    let z;
    let v;
    let s;
    let accuracy;
    if (this.numeric) {
      a = html`<decidables-spinner class="a bottom"
          ?disabled=${!this.interactive}
          min=${DDMMath.a.MIN}
          max=${DDMMath.a.MAX}
          step=${DDMMath.a.STEP}
          .value=${this.a}
          @input=${this.aInput.bind(this)}
        >
          <var class="math-var">a</var>
        </decidables-spinner>`;
      z = html`<decidables-spinner class="z bottom"
          ?disabled=${!this.interactive}
          min=${DDMMath.z.MIN}
          max=${DDMMath.z.MAX}
          step=${DDMMath.z.STEP}
          .value=${this.z}
          @input=${this.zInput.bind(this)}
        >
          <var class="math-var">z</var>
        </decidables-spinner>`;
      v = html`<decidables-spinner class="v bottom"
          ?disabled=${!this.interactive}
          min=${DDMMath.v.MIN}
          max=${DDMMath.v.MAX}
          step=${DDMMath.v.STEP}
          .value=${this.v}
          @input=${this.vInput.bind(this)}
        >
          <var class="math-var">v</var>
        </decidables-spinner>`;
      s = html`<decidables-spinner class="s bottom"
          disabled
          .value=${DDMMath.s.DEFAULT}
        >
          <var class="math-var">s</var>
        </decidables-spinner>`;
      accuracy = html`<decidables-spinner class="accuracy bottom"
          disabled
          .value=${+this.accuracy.toFixed(2)}
        >
          <var>Accuracy</var>
        </decidables-spinner>`;
    } else {
      a = html`<var class="math-var a">a</var>`;
      z = html`<var class="math-var z">z</var>`;
      v = html`<var class="math-var v">v</var>`;
      s = html`<var class="math-var s">s</var>`;
      accuracy = html`<var class="accuracy">Accuracy</var>`;
    }
    const equation = html`
      <tr>
        <td rowspan="2">
          ${accuracy}<span class="equals">=</span>
        </td>
        <td class="underline">
          <var class="math-greek e tight">e</var><sup class="exp"><span class="minus tight">−</span><span class="paren tight">(</span>2${v}${a} / ${s}<sup class="exp">2</sup><span class="paren tight">)</span></sup>
          <span class="minus">−</span>
          <var class="math-greek e tight">e</var><sup class="exp"><span class="minus tight">−</span><span class="paren tight">(</span>2${v}${z} / ${s}<sup class="exp">2</sup><span class="paren tight">)</span></sup>
        </td>
      </tr>
      <tr>
        <td>
          <var class="math-greek e tight">e</var><sup class="exp"><span class="minus tight">−</span><span class="paren tight">(</span>2${v}${a} / ${s}<sup class="exp">2</sup><span class="paren tight">)</span></sup>
            <span class="minus">−</span>
          1
        </td>
      </tr>`;
    return html`
      <div class="holder">
        <table class="equation">
          <tbody>
            ${equation}
          </tbody>
        </table>
      </div>`;
  }
}

customElements.define('ddm-equation-azv2pc', DDMEquationAZV2PC);
