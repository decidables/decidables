
import {html, css} from 'lit-element';

import CPTElement from '../cpt-element';

/*
  DecisionChoice element
  <decision-choice>

  Attributes:
*/
export default class DecisionChoice extends CPTElement {
  static get properties() {
    return {
      xl: {
        attribute: 'loss',
        type: Number,
        reflect: true,
      },
      xw: {
        attribute: 'win',
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

    this.xl = 0;
    this.xw = 100;
    this.pw = 0.75;
    this.xs = 50;

    this.a = 1;
    this.l = 1;
    this.g = 1;
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: inline-block;
        }

        .holder > * {
          vertical-align: middle;
        }

        .query {
          margin: 0 0.5rem;

          font-size: 1.75rem;
        }

        decision-option {
          width: 10rem;
          height: 10rem;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="holder">
        <decision-option alpha="${this.a}" lambda="${this.l}" gamma="${this.g}">
          <decision-outcome probability="${this.pw}" value="${this.xw}" name="win"></decision-outcome>
          <decision-outcome probability="${(1 - this.pw)}" value="${this.xl}" name="loss"></decision-outcome>
        </decision-option>
        <span class="query">?</span>
        <decision-option alpha="${this.a}" lambda="${this.l}" gamma="${this.g}">
          <decision-outcome probability="1" value="${this.xs}" name="sure"></decision-outcome>
        </decision-option>
      </div>`;
  }
}

customElements.define('decision-choice', DecisionChoice);