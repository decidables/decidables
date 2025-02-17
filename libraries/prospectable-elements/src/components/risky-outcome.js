
import {html, css} from 'lit';

import ProspectableElement from '../prospectable-element';

/*
  RiskyOutcome element
  <risky-outcome>

  Attributes:
  value, probability, name
*/
export default class RiskyOutcome extends ProspectableElement {
  static get properties() {
    return {
      x: {
        attribute: 'value',
        type: Number,
        reflect: true,
      },
      p: {
        attribute: 'probability',
        type: Number,
        reflect: true,
      },
      name: {
        attribute: 'name',
        type: String,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    // Attributes
    this.x = 0; // Value
    this.p = 0; // Probability
    this.name = '';
  }

  static get styles() {
    return [
      css`
        :host {
          display: none;
        }
      `,
    ];
  }

  render() { /* eslint-disable-line class-methods-use-this */
    return html``;
  }
}

customElements.define('risky-outcome', RiskyOutcome);
