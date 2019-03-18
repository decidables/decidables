import {css} from 'lit-element';

const SDTMixinStyleSpinner = (superclass) => {
  return class extends superclass {
    static get styles() {
      return [
        super.styles,
        css`
          /* Adapted from http://danielstern.ca/range.css/#/ */
          /* Overall */
          input[type=range] {
            width: 4.75rem;
            height: 3.5rem;
            padding: 0;
            margin: 0;

            background-color: unset;

            transform: rotate(-90deg);
            transform-origin: 2.375rem 2.375rem;

            /* stylelint-disable-next-line property-no-vendor-prefix */
            -webkit-appearance: none;
          }

          input[type=range]:enabled {
            cursor: ns-resize;
          }

          input[type=range]:focus {
            outline: none;
          }

          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
          input[type=range]::-ms-tooltip {
            display: none;
          }

          /* Track */
          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
          input[type=range]::-webkit-slider-runnable-track {
            width: 100%;
            height: 4px;

            background: var(---color-element-disabled);
            border: 0;
            border-radius: 2px;
            box-shadow: none;
          }

          input[type=range]:focus::-webkit-slider-runnable-track {
            background: var(---color-element-disabled);
          }

          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
          input[type=range]::-moz-range-track {
            width: 100%;
            height: 4px;

            background: var(---color-element-disabled);
            border: 0;
            border-radius: 2px;
            box-shadow: none;
          }

          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
          input[type=range]::-ms-track {
            width: 100%;
            height: 4px;

            color: transparent;

            background: transparent;
            border-color: transparent;
          }

          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
          input[type=range]::-ms-fill-lower {
            background: #cccccc;
            /* background: var(---color-element-disabled); */
            border: 0;
            border-radius: 2px;
            box-shadow: none;
          }

          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
          input[type=range]::-ms-fill-upper {
            background: #cccccc;
            /* background: var(---color-element-disabled); */
            border: 0;
            border-radius: 2px;
            box-shadow: none;
          }

          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
          input[type=range]:focus::-ms-fill-lower {
            background: var(---color-element-disabled);
          }

          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
          input[type=range]:focus::-ms-fill-upper {
            background: var(---color-element-disabled);
          }

          /* Thumb */
          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
          input[type=range]::-webkit-slider-thumb {
            width: 10px;
            height: 20px;
            margin-top: -8px;

            border: 0;
            border-radius: 4px;

            /* stylelint-disable-next-line property-no-vendor-prefix */
            -webkit-appearance: none;
          }

          input[type=range]:disabled::-webkit-slider-thumb {
            background: var(---color-element-disabled);
            box-shadow: none;
          }

          input[type=range]:enabled::-webkit-slider-thumb {
            background: var(---color-element-enabled);
            box-shadow: var(---shadow-2-rot90);
          }

          input[type=range]:enabled:hover::-webkit-slider-thumb {
            box-shadow: var(---shadow-4-rot90);
          }

          input[type=range]:enabled:active::-webkit-slider-thumb {
            box-shadow: var(---shadow-8-rot90);
          }

          :host(.keyboard) input[type=range]:enabled:focus::-webkit-slider-thumb {
            box-shadow: var(---shadow-4-rot90);
          }

          :host(.keyboard) input[type=range]:focus:active::-webkit-slider-thumb {
            box-shadow: var(---shadow-8-rot90);
          }

          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
          input[type=range]::-moz-range-thumb {
            width: 10px;
            height: 20px;

            border: 0;
            border-radius: 4px;
          }

          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
          input[type=range]:disabled::-moz-range-thumb {
            background: var(---color-element-disabled);
            box-shadow: none;
          }

          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
          input[type=range]:enabled::-moz-range-thumb {
            background: var(---color-element-enabled);
            box-shadow: var(---shadow-2-rot90);
          }

          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
          input[type=range]:enabled:hover::-moz-range-thumb {
            box-shadow: var(---shadow-4-rot90);
          }

          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
          input[type=range]:enabled:active::-moz-range-thumb {
            box-shadow: var(---shadow-8-rot90);
          }

          :host(.keyboard) input[type=range]:enabled:focus::-moz-range-thumb {
            box-shadow: var(---shadow-4-rot90);
          }

          :host(.keyboard) input[type=range]:enabled:focus:active::-moz-range-thumb {
            box-shadow: var(---shadow-8-rot90);
          }

          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
          input[type=range]::-ms-thumb {
            width: 10px;
            height: 20px;
            margin-top: 0;

            background: #999999;
            /* background: var(---color-element-enabled); */
            border: 0;
            border-radius: 4px;
            box-shadow: var(---shadow-2-rot90);
          }

          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
          input[type=range]:disabled::-ms-thumb {
            background: var(---color-element-disabled);
            box-shadow: none;
          }

          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
          input[type=range]:enabled::-ms-thumb {
            background: var(---color-element-enabled);
            box-shadow: var(---shadow-2-rot90);
          }

          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
          input[type=range]:enabled:hover::-ms-thumb {
            box-shadow: var(---shadow-4-rot90);
          }

          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
          input[type=range]:enabled:active::-ms-thumb {
            box-shadow: var(---shadow-8-rot90);
          }

          /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
          :host(.keyboard) input[type=range]:enabled:focus::-ms-thumb {
            box-shadow: var(---shadow-4-rot90);
          }

          :host(.keyboard) input[type=range]:enabled:focus:active::-ms-thumb {
            box-shadow: var(---shadow-8-rot90);
          }
        `,
      ];
    }
  };
};

export {SDTMixinStyleSpinner as default};
