
import {html, css} from 'lit';
// import {transition, mark, fade} from 'lit-transition';

import CPTMath from '@decidable/prospectable-math';

import CPTEquation from '../equations/cpt-equation';

/*
  SDTTable element
  <sdt-table>

  Attributes:
  Hit; Miss; FalseAlarm; CorrectRejection;
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

    this.a = 0.8;
    this.l = 1.2;
    this.g = 0.8;

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
    this.ug = (this.vw * this.ww) + (this.vl * this.wl);
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

  aInput(e) {
    this.a = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }

  lInput(e) {
    this.l = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }

  gInput(e) {
    this.g = parseFloat(e.target.value);
    this.alignState();
    this.sendEvent();
  }

  static get styles() {
    return [
      super.styles,
      css`
        /* :host {
          display: inline-block;
        } */
      `,
    ];
  }

  render() {
    this.alignState();
    let xw;
    let xl;
    let pw;
    let xs;
    // let a;
    // let l;
    // let g;
    let vw;
    let vl;
    let ww;
    let wl;
    let vs;
    let ug;
    let us;
    let uDiff;
    if (this.numeric) {
      xw = html`<decidable-spinner class="x" ?disabled=${!this.interactive} .value="${this.xw}" @input=${this.xwInput.bind(this)}>
          <var class="math-var">x<sub class="subscript win">win</sub></var>
        </decidable-spinner>`;
      xl = html`<decidable-spinner class="x" disabled .value="${this.xl}">
          <var class="math-var">x<sub class="subscript loss">loss</sub></var>
        </decidable-spinner>`;
      pw = html`<decidable-spinner class="p" ?disabled=${!this.interactive} min="0" max="1" step=".01" .value="${+this.pw.toFixed(2)}" @input=${this.pwInput.bind(this)}>
          <var class="math-var">p<sub class="subscript win">win</sub></var>
        </decidable-spinner>`;
      xs = html`<decidable-spinner class="x" ?disabled=${!this.interactive} .value="${this.xs}" @input=${this.xsInput.bind(this)}>
          <var class="math-var">x<sub class="subscript sure">sure</sub></var>
        </decidable-spinner>`;
      // a = html`<decidable-spinner class="a" ?disabled=${!this.interactive} min="0" max="1"
      //            step=".001" .value="${+this.a.toFixed(3)}" @input=${this.aInput.bind(this)}>
      //     <var class="math-var">α</var>
      //   </decidable-spinner>`;
      // l = html`<decidable-spinner class="l" ?disabled=${!this.interactive} min="0" max="10"
      //            step=".001" .value="${+this.l.toFixed(3)}" @input=${this.lInput.bind(this)}>
      //     <var class="math-var">λ</var>
      //   </decidable-spinner>`;
      // g = html`<decidable-spinner class="g" ?disabled=${!this.interactive} min="0" max="1"
      //            step=".001" .value="${+this.g.toFixed(3)}" @input=${this.gInput.bind(this)}>
      //     <var class="math-var">γ</var>
      //   </decidable-spinner>`;
      vw = html`<decidable-spinner class="v" disabled .value="${+this.vw.toFixed(1)}">
          <var class="math-var">v<sub class="subscript win">win</sub></var>
        </decidable-spinner>`;
      vl = html`<decidable-spinner class="v" disabled .value="${+this.vl.toFixed(1)}">
          <var class="math-var">v<sub class="subscript loss">loss</sub></var>
        </decidable-spinner>`;
      ww = html`<decidable-spinner class="w" disabled .value="${+this.ww.toFixed(2)}">
          <var class="math-var">w<sub class="subscript win">win</sub></var>
        </decidable-spinner>`;
      wl = html`<decidable-spinner class="w" disabled .value="${+this.wl.toFixed(2)}">
          <var class="math-var">w<sub class="subscript loss">loss</sub></var>
        </decidable-spinner>`;
      vs = html`<decidable-spinner class="v" disabled .value="${+this.vs.toFixed(1)}">
          <var class="math-var">v<sub class="subscript sure">sure</sub></var>
        </decidable-spinner>`;
      ug = html`<decidable-spinner class="u" disabled .value="${+this.ug.toFixed(1)}">
          <var class="math-var">U<sub class="subscript gamble">gamble</sub></var>
        </decidable-spinner>`;
      us = html`<decidable-spinner class="u" disabled .value="${+this.us.toFixed(1)}">
          <var class="math-var">U<sub class="subscript sure">sure</sub></var>
        </decidable-spinner>`;
      // uDiff = html`${transition((this.uDiff > 0)
      //   ? mark(html`<span class="comparison">&gt;</span>`, 'gt')
      //   : (this.uDiff < 0)
      //     ? mark(html`<span class="comparison">&lt;</span>`, 'lt')
      //     : mark(html`<span class="comparison">=</span>`, 'eq'),
      //   fade({mode: 'out-in', duration: 200}))}`;
      uDiff = html`${(this.uDiff > 0)
        ? html`<span class="comparison">&gt;</span>`
        : (this.uDiff < 0)
          ? html`<span class="comparison">&lt;</span>`
          : html`<span class="comparison">=</span>`}`;
    } else {
      xw = html`<var class="math-var x">x<sub class="subscript win">win</sub></var>`;
      xl = html`<var class="math-var x">x<sub class="subscript loss">loss</sub></var>`;
      pw = html`<var class="math-var p">p<sub class="subscript win">win</sub></var>`;
      xs = html`<var class="math-var x">x<sub class="subscript sure">sure</sub></var>`;
      // a = html`<var class="math-var a">α</var>`;
      // l = html`<var class="math-var l">λ</var>`;
      // g = html`<var class="math-var g">γ</var>`;
      vw = html`<var class="math-var v">v<sub class="subscript win">win</sub></var>`;
      vl = html`<var class="math-var v">v<sub class="subscript loss">loss</sub></var>`;
      ww = html`<var class="math-var w">w<sub class="subscript win">win</sub></var>`;
      wl = html`<var class="math-var w">w<sub class="subscript loss">loss</sub></var>`;
      vs = html`<var class="math-var v">v<sub class="subscript sure">sure</sub></var>`;
      ug = html`<var class="math-var u">U<sub class="subscript gamble">gamble</sub></var>`;
      us = html`<var class="math-var u">U<sub class="subscript sure">sure</sub></var>`;
      uDiff = html`<span class="comparison">≟</span>`;
    }
    const equation = html`
      <tr>
        <td class="right">
          <span class="function v"><var class="math-var v tight">v</var><span class="paren tight">(</span>${xw}<span class="paren tight">)</span></span>&nbsp;<span class="function w"><var class="math-var w tight">w</var><span class="paren tight">(</span>${pw}<span class="paren tight">)</span></span><span class="plus">+</span><span class="function v"><var class="math-var v tight">v</var><span class="paren tight">(</span>${xl}<span class="paren tight">)</span></span>&nbsp;<span class="bracket tight">[</span><span class="tight">1</span><span class="minus">−</span><span class="function w"><var class="math-var w">w</var><span class="paren tight">(</span>${pw}<span class="paren tight">)</span></span><span class="bracket tight">]</span>
        </td>
        <td>
          ${uDiff}
        </td>
        <td class="left">
          <span class="function v"><var class="math-var v tight">v</var><span class="paren tight">(</span>${xs}<span class="paren tight">)</span></span>
        </td>
      </tr>
      <tr>
        <td class="right">
          ${vw}&nbsp;${ww}<span class="plus">+</span>${vl}&nbsp;${wl}
        </td>
        <td>
          ${uDiff}
        </td>
        <td class="left">
          ${vs}
        </td>
      </tr>
      <tr>
        <td class="right">
          ${ug}
        </td>
        <td>
          ${uDiff}
        </td>
        <td class="left">
          ${us}
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

customElements.define('cpt-calculation', CPTCalculation);
