import {css, html} from 'lit';

export default function DecidablesMixinExample(superClass) {
  return class extends superClass {
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
  };
}
