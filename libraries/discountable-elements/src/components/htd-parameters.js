
import {html, css} from 'lit';

import '@decidables/decidables-elements/slider';
import HTDMath from '@decidables/discountable-math';

import DiscountableElement from '../discountable-element';

/*
  HTDParameters element
  <htd-paramters>

  Attributes:

*/
export default class HTDParameters extends DiscountableElement {
  static get properties() {
    return {
      k: {
        attribute: 'k',
        type: Number,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    // Attributes
    this.k = undefined;
  }

  setK(e) {
    this.k = +e.target.value;
    this.dispatchEvent(new CustomEvent('htd-parameters-k', {
      detail: {
        k: this.k,
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
      `,
    ];
  }

  render() {
    return html`
      <div class="holder">
        ${this.k != null
          ? html`<decidables-slider class="k"
            ?disabled=${!this.interactive}
            min=${HTDMath.k.MIN}
            max=${HTDMath.k.MAX}
            step=${HTDMath.k.STEP}
            .value=${+this.k.toFixed(3)}
            @change=${this.setK.bind(this)}
            @input=${this.setK.bind(this)}
          ><div>Discounting Factor<br><span class="math-var">k</span></div></decidables-slider>`
          : html``}
      </div>`;
  }
}

customElements.define('htd-parameters', HTDParameters);
