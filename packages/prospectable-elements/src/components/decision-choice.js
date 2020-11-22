
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
      state: {
        attribute: 'state',
        type: String,
        reflect: true,
      },

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
    };
  }

  constructor() {
    super();

    this.states = ['choice', 'fixation', 'blank']; // Possible states
    this.state = 'choice'; // Current state

    this.xl = 0;
    this.xw = 100;
    this.pw = 0.75;
    this.xs = 50;
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

          font-family: var(--font-family-code);
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
        <decision-option ?interactive=${this.interactive} @decision-outcome-change=${this.winChange.bind(this)}>
          ${(this.state === 'choice')
            ? html`
              <decision-outcome probability="${(1 - this.pw)}" value="${this.xl}" name="loss"></decision-outcome>
              <decision-outcome ?interactive=${this.interactive} probability="${this.pw}" value="${this.xw}" name="win"></decision-outcome>`
            : ''}
        </decision-option><span class="query"
         >${(this.state === 'choice') ? '?' : (this.state === 'fixation') ? '+' : html`∙`}</span
        ><decision-option ?interactive=${this.interactive} @decision-outcome-change=${this.sureChange.bind(this)}>
          ${(this.state === 'choice')
            ? html`
              <decision-outcome ?interactive=${this.interactive} probability="1" value="${this.xs}" name="sure"></decision-outcome>`
            : ''}
        </decision-option>
      </div>`;
  }
}

customElements.define('decision-choice', DecisionChoice);
