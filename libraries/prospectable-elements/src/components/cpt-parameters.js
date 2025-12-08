
import {css, html} from 'lit';

import '@decidables/decidables-elements/slider';
import CPTMath from '@decidables/prospectable-math';

import ProspectableElement from '../prospectable-element';

/*
  DDMParameters element
  <ddm-paramters>

  Attributes:

*/
export default class CPTParameters extends ProspectableElement {
  static get properties() {
    return {
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

    // Attributes
    this.a = undefined;
    this.l = undefined;
    this.g = undefined;
  }

  setAlpha(e) {
    this.a = +e.target.value;
    this.dispatchEvent(new CustomEvent('cpt-parameters-a', {
      detail: {
        a: this.a,
      },
      bubbles: true,
    }));
  }

  setLambda(e) {
    this.l = +e.target.value;
    this.dispatchEvent(new CustomEvent('cpt-parameters-l', {
      detail: {
        l: this.l,
      },
      bubbles: true,
    }));
  }

  setGamma(e) {
    this.g = +e.target.value;
    this.dispatchEvent(new CustomEvent('cpt-parameters-g', {
      detail: {
        g: this.g,
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

        .a {
          --decidables-slider-background-color: var(---color-a-light);
          --decidables-slider-color: var(---color-a);
        }

        .l {
          --decidables-slider-background-color: var(---color-l-light);
          --decidables-slider-color: var(---color-l);
        }

        .g {
          --decidables-slider-background-color: var(---color-g-light);
          --decidables-slider-color: var(---color-g);
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="holder">
        ${this.a != null
          ? html`<decidables-slider class="a"
            ?disabled=${!this.interactive}
            scale
            min=${CPTMath.a.MIN}
            max=${CPTMath.a.MAX}
            step=${CPTMath.a.STEP}
            .value=${+this.a.toFixed(2)}
            @change=${this.setAlpha.bind(this)}
            @input=${this.setAlpha.bind(this)}
          ><div>Alpha<br><span class="math-var">α</span></div></decidables-slider>`
          : html``}
        ${this.l != null
          ? html`<decidables-slider class="l"
            ?disabled=${!this.interactive}
            scale
            min=${CPTMath.l.MIN}
            max=${CPTMath.l.MAX}
            step=${CPTMath.l.STEP}
            .value=${+this.l.toFixed(2)}
            @change=${this.setLambda.bind(this)}
            @input=${this.setLambda.bind(this)}
          ><div>Lambda<br><span class="math-var">λ</span></div></decidables-slider>`
          : html``}
        ${this.g != null
          ? html`<decidables-slider class="g"
            ?disabled=${!this.interactive}
            scale
            min=${CPTMath.g.MIN}
            max=${CPTMath.g.MAX}
            step=${CPTMath.g.STEP}
            .value=${+this.g.toFixed(2)}
            @change=${this.setGamma.bind(this)}
            @input=${this.setGamma.bind(this)}
          ><div>Gamma<br><span class="math-var">γ</span></div></decidables-slider>`
          : html``}
      </div>`;
  }
}

customElements.define('cpt-parameters', CPTParameters);
