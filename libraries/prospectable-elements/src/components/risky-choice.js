
import {html, css} from 'lit';

import ProspectableElement from '../prospectable-element';
import './risky-option';
import './risky-outcome';

/*
  RiskyChoice element
  <risky-choice>

  Attributes:
*/
export default class RiskyChoice extends ProspectableElement {
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

        risky-option {
          width: 10rem;
          height: 10rem;
        }
      `,
    ];
  }

  sendEvent() {
    this.dispatchEvent(new CustomEvent('risky-choice-change', {
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
        <risky-option ?interactive=${this.interactive} @risky-outcome-change=${this.winChange.bind(this)}>
          ${(this.state === 'choice')
            ? html`
              <risky-outcome probability="${(1 - this.pw)}" value="${this.xl}" name="loss"></risky-outcome>
              <risky-outcome ?interactive=${this.interactive} probability="${this.pw}" value="${this.xw}" name="win"></risky-outcome>`
            : ''}
        </risky-option><span class="query"
         >${(this.state === 'choice') ? '?' : (this.state === 'fixation') ? '+' : html`∙`}</span
        ><risky-option ?interactive=${this.interactive} @risky-outcome-change=${this.sureChange.bind(this)}>
          ${(this.state === 'choice')
            ? html`
              <risky-outcome ?interactive=${this.interactive} probability="1" value="${this.xs}" name="sure"></risky-outcome>`
            : ''}
        </risky-option>
      </div>`;
  }
}

customElements.define('risky-choice', RiskyChoice);
