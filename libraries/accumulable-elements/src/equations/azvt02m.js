
import {html} from 'lit';

import '@decidables/decidables-elements/spinner';
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
      t0 = html`<decidables-spinner class="t0 bottom"
          ?disabled=${!this.interactive}
          min=${DDMMath.t0.MIN}
          max=${DDMMath.t0.MAX}
          step=${DDMMath.t0.STEP}
          .value=${this.t0}
          @input=${this.t0Input.bind(this)}
        >
          <var class="math-var">t<sub>0</sub></var>
        </decidables-spinner>`;
      s = html`<decidables-spinner class="s bottom"
          disabled
          .value=${DDMMath.s.DEFAULT}
        >
          <var class="math-var">s</var>
        </decidables-spinner>`;
      meanRT = html`<decidables-spinner class="mean-rt bottom"
          disabled
          .value=${+this.meanRT.toFixed(0)}
        >
          <var>Mean RT</var>
        </decidables-spinner>`;
    } else {
      a = html`<var class="math-var a">a</var>`;
      z = html`<var class="math-var z">z</var>`;
      v = html`<var class="math-var v">v</var>`;
      t0 = html`<var class="math-var t0">t<sub>0</sub></var>`;
      s = html`<var class="math-var s">s</var>`;
      meanRT = html`<var class="mean-rt">Mean RT</var>`;
    }
    const equation = html`
      <tr>
        <td rowspan="2">
          ${meanRT}<span class="equals">=</span>
          ${t0}
          <span class="minus">−</span>
        </td>
        <td class="underline">
          ${z}
        </td>
        <td rowspan="2">
          <span class="plus">+</span>
        </td>
        <td class="underline">
          ${a}
        </td>
        <td rowspan="2">&nbsp;</td>
        <td class="underline">
          <var class="math-greek e tight">e</var><sup class="exp"><span class="minus tight">−</span><span class="paren tight">(</span>2${v}${z} / ${s}<sup class="exp">2</sup><span class="paren tight">)</span></sup>
          <span class="minus">−</span>
          1
        </td>
      </tr>
      <tr>
        <td>
          ${v}
        </td>
        <td>
          ${v}
        </td>
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

customElements.define('ddm-equation-azvt02m', DDMEquationAZVT02M);
