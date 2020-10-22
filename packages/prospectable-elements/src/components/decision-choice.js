
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

        .holder {
          user-select: none;
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

  sendEvent() {
    this.dispatchEvent(new CustomEvent('decision-choice-change', {
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

  winChange(event) {
    this.xw = parseFloat(event.detail.x);
    this.pw = parseFloat(event.detail.p);
    this.sendEvent();
  }

  sureChange(event) {
    this.xs = parseFloat(event.detail.x);
    this.sendEvent();
  }

  render() {
    return html`
      <div class="holder">
        <decision-option ?interactive=${this.interactive} alpha="${this.a}" lambda="${this.l}" gamma="${this.g}" @decision-outcome-change=${this.winChange.bind(this)}>
          <decision-outcome probability="${(1 - this.pw)}" value="${this.xl}" name="loss"></decision-outcome>
          <decision-outcome ?interactive=${this.interactive} probability="${this.pw}" value="${this.xw}" name="win"></decision-outcome>
        </decision-option>
        <span class="query">?</span>
        <decision-option ?interactive=${this.interactive} alpha="${this.a}" lambda="${this.l}" gamma="${this.g}" @decision-outcome-change=${this.sureChange.bind(this)}>
          <decision-outcome ?interactive=${this.interactive} probability="1" value="${this.xs}" name="sure"></decision-outcome>
        </decision-option>
      </div>`;
  }
}

customElements.define('decision-choice', DecisionChoice);
