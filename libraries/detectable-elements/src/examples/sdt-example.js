
import {html, css} from 'lit';

import DetectableElement from '../detectable-element';

/*
  SDTExample Base Class - Not intended for instantiation!
  <sdt-example>
*/
export default class SDTExample extends DetectableElement {
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: inline-block;

          margin-bottom: 1rem;
        }

        .holder {
          display: flex;
        }

        .body {
          display: flex;

          flex-wrap: wrap;

          align-items: center;
          justify-content: left;

          padding: 0.625rem;

          border: var(---border);
          border-radius: var(---border-radius);
        }

        .body ::slotted(*) {
          margin: 0.625rem;
        }

        /* HACK: Sibling selectors not working with ::slotted */
        /* .body > rdk-task + detectable-response,
        ::slotted(rdk-task) + ::slotted(detectable-response) { */
        .body ::slotted(detectable-response) {
          margin-left: 0;
        }

        /* HACK: Sibling selectors not working with ::slotted */
        /* .body > detectable-control + rdk-task,
        ::slotted(detectable-control) + ::slotted(rdk-task) {
          margin-left: 0;
        } */
        .body ::slotted(rdk-task) {
          margin-left: 0;
        }
      `,
    ];
  }

  render() { /* eslint-disable-line class-methods-use-this */
    return html`
      <div class="holder">
        <div class="body">
          <slot>Empty!</slot>
        </div>
      </div>`;
  }
}

customElements.define('sdt-example', SDTExample);
