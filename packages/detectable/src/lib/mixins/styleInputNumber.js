import {css} from 'lit-element';

const SDTMixinStyleInputNumber = (superclass) => {
  return class extends superclass {
    static get styles() {
      return [
        super.styles,
        css`
          input[type=number] {
            font-family: var(---font-family-base);
            font-size: 1.125rem;
            color: inherit;
            text-align: right;

            border: 0;
            border-radius: 0;
            outline: none;
            box-shadow: var(---shadow-2);

            -webkit-appearance: none; /* stylelint-disable-line property-no-vendor-prefix */
          }

          input[type=number]:hover {
            box-shadow: var(---shadow-4);
          }

          input[type=number]:focus,
          input[type=number]:active {
            box-shadow: var(---shadow-8);
          }

          input[type=number]:disabled {
            color: var(---color-text);

            border: 0;
            box-shadow: none;

            /* HACK: Use correct text color in Safari */
            -webkit-opacity: 1;
            -webkit-text-fill-color: var(---color-text);
          }
        `,
      ];
    }
  };
};

export {SDTMixinStyleInputNumber as default};
