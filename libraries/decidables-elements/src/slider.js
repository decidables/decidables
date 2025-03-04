
import {ifDefined} from 'lit/directives/if-defined.js'; /* eslint-disable-line import/extensions */
import {html, css, unsafeCSS} from 'lit';

import DecidablesElement from './decidables-element';

export default class DecidablesSlider extends DecidablesElement {
  static get properties() {
    return {
      disabled: {
        attribute: 'disabled',
        type: Boolean,
        reflect: true,
      },

      scale: {
        attribute: 'scale',
        type: Boolean,
        reflect: true,
      },

      max: {
        attribute: 'max',
        type: Number,
        reflect: true,
      },
      min: {
        attribute: 'min',
        type: Number,
        reflect: true,
      },
      step: {
        attribute: 'step',
        type: Number,
        reflect: true,
      },
      value: {
        attribute: 'value',
        type: Number,
        reflect: true,
      },

      nonlinear: {
        attribute: false,
        type: Boolean,
        reflect: false,
      },
    };
  }

  constructor() {
    super();

    // Attributes
    this.disabled = false;

    this.scale = false;

    this.max = undefined;
    this.min = undefined;
    this.step = undefined;
    this.value = undefined;

    this.nonlinear = false;

    // Properties
    this.rangeMax = undefined;
    this.rangeMin = undefined;
    this.rangeStep = undefined;
    this.rangeValue = undefined;

    // Transform
    this.toRange = undefined;
    this.fromRange = undefined;
  }

  nonlinearRange(nonlinear, toRange, fromRange) {
    this.nonlinear = nonlinear;

    this.toRange = nonlinear ? toRange : undefined;
    this.fromRange = nonlinear ? fromRange : undefined;
  }

  rangeChanged(event) {
    this.value = this.nonlinear ? this.fromRange(event.target.value) : event.target.value;
    this.dispatchEvent(new CustomEvent('change', {
      detail: {
        value: this.value,
      },
      bubbles: true,
    }));
  }

  rangeInputted(event) {
    this.value = this.nonlinear ? this.fromRange(event.target.value) : event.target.value;
  }

  spinnerInputted(event) {
    this.value = event.target.value;
  }

  willUpdate() {
    this.rangeMax = (this.max === undefined)
      ? undefined
      : this.nonlinear
        ? this.toRange(this.max)
        : this.max;
    this.rangeMin = (this.min === undefined)
      ? undefined
      : this.nonlinear
        ? this.toRange(this.min)
        : this.min;
    this.rangeStep = (this.step === undefined)
      ? undefined
      : this.nonlinear
        ? 'any'
        : this.step;
    this.rangeValue = (this.value === undefined)
      ? undefined
      : this.nonlinear
        ? this.toRange(this.value)
        : this.value;
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          ---decidables-slider-background-color: var(--decidables-slider-background-color, var(---color-element-disabled));
          ---decidables-slider-color: var(--decidables-slider-color, var(---color-element-enabled));
          ---decidables-spinner-background-color: var(--decidables-slider-background-color, none);

          ---shadow-2-rotate: var(--shadow-2-rotate, ${unsafeCSS(this.cssBoxShadow(2, true, false))});
          ---shadow-4-rotate: var(--shadow-4-rotate, ${unsafeCSS(this.cssBoxShadow(4, true, false))});
          ---shadow-8-rotate: var(--shadow-8-rotate, ${unsafeCSS(this.cssBoxShadow(8, true, false))});

          display: flex;

          flex-direction: column;

          align-items: center;
          justify-content: center;
        }

        label {
          margin: 0.25rem 0.25rem 0;
        }

        .range {
          position: relative;
          display: flex;

          flex-direction: row;

          width: 3.5rem;
          height: 4.75rem;
          margin: 0 0.25rem 0.25rem;
        }

        decidables-spinner {
          --decidables-spinner-input-width: 3.5rem;

          margin: 0 0.25rem 0.25rem;

          background: var(---decidables-spinner-background-color);
        }

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

          background: var(---decidables-slider-background-color);
          border: 0;
          border-radius: 2px;
          box-shadow: none;
        }

        input[type=range]:focus::-webkit-slider-runnable-track {
          background: var(---decidables-slider-background-color);
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]::-moz-range-track {
          width: 100%;
          height: 4px;

          background: var(---decidables-slider-background-color);
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
          /* background: var(---decidables-slider-background-color); */
          border: 0;
          border-radius: 2px;
          box-shadow: none;
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]::-ms-fill-upper {
          background: #cccccc;
          /* background: var(---decidables-slider-background-color); */
          border: 0;
          border-radius: 2px;
          box-shadow: none;
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]:focus::-ms-fill-lower {
          background: var(---decidables-slider-background-color);
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]:focus::-ms-fill-upper {
          background: var(---decidables-slider-background-color);
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
          background: var(---decidables-slider-background-color);
          box-shadow: none;
        }

        input[type=range]:enabled::-webkit-slider-thumb {
          background: var(---decidables-slider-color);
          box-shadow: var(---shadow-2-rotate);
        }

        input[type=range]:enabled:hover::-webkit-slider-thumb {
          box-shadow: var(---shadow-4-rotate);
        }

        input[type=range]:enabled:active::-webkit-slider-thumb {
          box-shadow: var(---shadow-8-rotate);
        }

        :host(.keyboard) input[type=range]:enabled:focus::-webkit-slider-thumb {
          box-shadow: var(---shadow-4-rotate);
        }

        :host(.keyboard) input[type=range]:focus:active::-webkit-slider-thumb {
          box-shadow: var(---shadow-8-rotate);
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
          background: var(---decidables-slider-background-color);
          box-shadow: none;
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]:enabled::-moz-range-thumb {
          background: var(---decidables-slider-color);
          box-shadow: var(---shadow-2-rotate);
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]:enabled:hover::-moz-range-thumb {
          box-shadow: var(---shadow-4-rotate);
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]:enabled:active::-moz-range-thumb {
          box-shadow: var(---shadow-8-rotate);
        }

        :host(.keyboard) input[type=range]:enabled:focus::-moz-range-thumb {
          box-shadow: var(---shadow-4-rotate);
        }

        :host(.keyboard) input[type=range]:enabled:focus:active::-moz-range-thumb {
          box-shadow: var(---shadow-8-rotate);
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
          box-shadow: var(---shadow-2-rotate);
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]:disabled::-ms-thumb {
          background: var(---decidables-slider-background-color);
          box-shadow: none;
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]:enabled::-ms-thumb {
          background: var(---decidables-slider-color);
          box-shadow: var(---shadow-2-rotate);
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]:enabled:hover::-ms-thumb {
          box-shadow: var(---shadow-4-rotate);
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        input[type=range]:enabled:active::-ms-thumb {
          box-shadow: var(---shadow-8-rotate);
        }

        /* stylelint-disable-next-line no-descending-specificity */ /* stylelint ERROR */
        :host(.keyboard) input[type=range]:enabled:focus::-ms-thumb {
          box-shadow: var(---shadow-4-rotate);
        }

        :host(.keyboard) input[type=range]:enabled:focus:active::-ms-thumb {
          box-shadow: var(---shadow-8-rotate);
        }

        datalist {
          position: absolute;
          left: 2rem;
          z-index: -1;
          display: flex;

          flex-direction: column;

          align-items: flex-start;
          justify-content: space-between;

          height: 4.75rem;

          font-size: 0.75rem;
        }

        option {
          padding: 0;

          line-height: 0.8;
          min-block-size: 0;
        }

        option::before {
          content: "– ";
        }
      `,
    ];
  }

  render() {
    return html`
      <label for="slider">
        <slot></slot>
      </label>
      <div class="range">
        <input ?disabled=${this.disabled} type="range" id="slider" min=${ifDefined(this.rangeMin)} max=${ifDefined(this.rangeMax)} step=${ifDefined(this.rangeStep)} .value=${this.rangeValue} @change=${this.rangeChanged.bind(this)} @input=${this.rangeInputted.bind(this)}>
        ${this.scale
          ? html`
            <datalist id="ticks">
              <option value=${ifDefined(this.rangeMax)} label=${ifDefined(this.max)}></option>
              <option value=${ifDefined(this.rangeMin)} label=${ifDefined(this.min)}></option>
            </datalist>
          `
          : html``
        }
      </div>
      <decidables-spinner ?disabled=${this.disabled} min=${ifDefined(this.min)} max=${ifDefined(this.max)} step=${ifDefined(this.step)} .value=${this.value} @input=${this.spinnerInputted.bind(this)}></decidables-spinner>
    `;
  }
}

customElements.define('decidables-slider', DecidablesSlider);
