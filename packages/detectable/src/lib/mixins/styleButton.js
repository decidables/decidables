import {css} from 'lit-element';

const SDTMixinStyleButton = (superclass) => {
  return class extends superclass {
    static get styles() {
      return [
        super.styles,
        css`
          button {
            padding: 0.375rem 0.75rem;
            margin: 0.25rem;

            font-family: var(---font-family-base);
            font-size: 1.125rem;
            line-height: 1.5;
            color: var(---color-background);

            border: 0;
            border-radius: 0.25rem;
            outline: none;
          }

          button:disabled {
            background-color: var(---color-element-disabled);
            outline: none;
            box-shadow: none;
          }

          button:enabled {
            cursor: pointer;

            background-color: var(---color-element-enabled);
            outline: none;
            box-shadow: var(---shadow-2);
          }

          button:enabled:hover {
            outline: none;
            box-shadow: var(---shadow-4);
          }

          button:enabled:active {
            outline: none;
            box-shadow: var(---shadow-8);
          }

          :host(.keyboard) button:enabled:focus {
            outline: none;
            box-shadow: var(---shadow-4);
          }

          :host(.keyboard) button:enabled:focus:active {
            outline: none;
            box-shadow: var(---shadow-8);
          }
        `,
      ];
    }
  };
};

export {SDTMixinStyleButton as default};
