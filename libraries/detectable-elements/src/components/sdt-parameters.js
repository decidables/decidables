
import {css, html} from 'lit';

import '@decidables/decidables-elements/slider';
import SDTMath from '@decidables/detectable-math';

import DetectableElement from '../detectable-element';

/*
  SDTParameters element
  <sdt-parameters>

  Attributes:

*/
export default class SDTParameters extends DetectableElement {
  static get properties() {
    return {
      d: {
        attribute: 'd',
        type: Number,
        reflect: true,
      },
      c: {
        attribute: 'c',
        type: Number,
        reflect: true,
      },
      s: {
        attribute: 's',
        type: Number,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    // Attributes
    this.d = undefined;
    this.c = undefined;
    this.s = undefined;
  }

  setSensitivity(e) {
    this.d = +e.target.value;
    this.dispatchEvent(new CustomEvent('sdt-parameters-d', {
      detail: {
        d: this.d,
      },
      bubbles: true,
    }));
  }

  setBias(e) {
    this.c = +e.target.value;
    this.dispatchEvent(new CustomEvent('sdt-parameters-c', {
      detail: {
        c: this.c,
      },
      bubbles: true,
    }));
  }

  setVariance(e) {
    this.s = +e.target.value;
    this.dispatchEvent(new CustomEvent('sdt-parameters-s', {
      detail: {
        s: this.s,
      },
      bubbles: true,
    }));
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: inline-block;
        }

        .holder {
          display: flex;

          flex-direction: row;

          align-items: stretch;
          justify-content: center;
        }

        decidables-slider {
          line-height: 1;

          text-align: center;
        }

        decidables-slider  div {
          margin-bottom: 0.25rem;
        }

        .d {
          --decidables-slider-background-color: var(---color-d-light);
          --decidables-slider-color: var(---color-d);
        }

        .c {
          --decidables-slider-background-color: var(---color-c-light);
          --decidables-slider-color: var(---color-c);
        }

        .s {
          --decidables-slider-background-color: var(---color-s-light);
          --decidables-slider-color: var(---color-s);
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="holder">
        ${this.d != null
          ? html`<decidables-slider class="d"
            ?disabled=${!this.interactive}
            scale
            min=${SDTMath.d.MIN}
            max=${SDTMath.d.MAX}
            step=${SDTMath.d.STEP}
            .value=${+this.d.toFixed(2)}
            @change=${this.setSensitivity.bind(this)}
            @input=${this.setSensitivity.bind(this)}
          ><div>Sensitivity<br><span class="math-var">d′</span></div></decidables-slider>`
          : html``}
        ${this.c != null
          ? html`<decidables-slider class="c"
            ?disabled=${!this.interactive}
            scale
            min=${SDTMath.c.MIN}
            max=${SDTMath.c.MAX}
            step=${SDTMath.c.STEP}
            .value=${+this.c.toFixed(2)}
            @change=${this.setBias.bind(this)}
            @input=${this.setBias.bind(this)}
          ><div>Bias<br><span class="math-var">c</span></div></decidables-slider>`
          : html``}
        ${this.s != null
          ? html`<decidables-slider class="s"
            ?disabled=${!this.interactive}
            scale
            min=${SDTMath.s.MIN}
            max=${SDTMath.s.MAX}
            step=${SDTMath.s.STEP}
            .value=${+this.s.toFixed(2)}
            @change=${this.setVariance.bind(this)}
            @input=${this.setVariance.bind(this)}
          ><div>Variance<br><span class="math-var">σ</span></div></decidables-slider>`
          : html``}
      </div>`;
  }
}

customElements.define('sdt-parameters', SDTParameters);
