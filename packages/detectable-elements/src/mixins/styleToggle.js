
import {css} from 'lit-element';

const SDTMixinStyleToggle = (superclass) => {
  return class extends superclass {
    static get styles() {
      return [
        super.styles,
        css`
          input[type=radio] {
            /* visuallyhidden: https://github.com/h5bp/html5-boilerplate/blob/master/dist/doc/css.md */
            position: absolute;

            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0 0 0 0);

            white-space: nowrap;

            border: 0;
            clip-path: inset(100%); /* May cause a performance issue: https://github.com/h5bp/html5-boilerplate/issues/2021 */
          }

          input[type=radio] + label {
            padding: 0.375rem 0.75rem;
            margin: 0 0.25rem;

            font-family: var(---font-family-base);
            font-size: 1.125rem;
            line-height: 1.5;
            color: var(---color-text-inverse);
            text-align: center;

            cursor: pointer;

            background-color: var(---color-element-enabled);
            border: 0;
            border-radius: 0;
            outline: none;

            box-shadow: var(---shadow-2);
          }

          input[type=radio] + label:nth-child(2) {
            margin-top: 0.25rem;

            border-top-left-radius: 0.25rem;
            border-top-right-radius: 0.25rem;
          }

          input[type=radio] + label:last-child {
            margin-bottom: 0.25rem;

            border-bottom-right-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
          }

          input[type=radio]:checked + label {
            background-color: var(---color-element-selected);
            outline: none;
            box-shadow: var(---shadow-2);
          }

          input[type=radio] + label:hover {
            z-index: 1;

            outline: none;
            box-shadow: var(---shadow-4);
          }

          input[type=radio] + label:active {
            z-index: 2;

            outline: none;
            box-shadow: var(---shadow-8);
          }

          :host(.keyboard) input[type=radio]:focus + label {
            z-index: 1;

            outline: none;
            box-shadow: var(---shadow-4);
          }

          :host(.keyboard) input[type=radio]:focus:checked + label {
            z-index: 1;

            background-color: var(---color-element-selected);
            outline: none;
            box-shadow: var(---shadow-4);
          }

          :host(.keyboard) input[type=radio]:focus + label:active {
            z-index: 2;

            outline: none;
            box-shadow: var(---shadow-8);
          }
        `,
      ];
    }
  };
};

export {SDTMixinStyleToggle as default};
