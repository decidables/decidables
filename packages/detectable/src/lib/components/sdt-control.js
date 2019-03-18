
import {html, css} from 'lit-element';

import SDTElement from '../sdt-element';
import SDTMixinStyleSpinner from '../mixins/styleSpinner';
import SDTMixinStyleButton from '../mixins/styleButton';

/*
  SDTControl element
  <sdt-control>

  Attributes:

*/
export default class SDTControl extends SDTMixinStyleButton(SDTMixinStyleSpinner(SDTElement)) {
  static get properties() {
    return {
      trials: {
        attribute: 'trials',
        type: Number,
        reflect: true,
      },
      run: {
        attribute: 'run',
        type: Boolean,
        reflect: true,
      },
      pause: {
        attribute: 'pause',
        type: Boolean,
        reflect: true,
      },
      reset: {
        attribute: 'reset',
        type: Boolean,
        reflect: true,
      },
      coherence: {
        attribute: 'coherence',
        type: Number,
        reflect: true,
      },
      zRoc: {
        attribute: 'z-roc',
        type: Boolean,
        reflect: true,
      },

      state: {
        atribute: false,
        type: String,
        reflect: false,
      },
    };
  }

  constructor() {
    super();

    this.trials = undefined;
    this.run = false;
    this.pause = false;
    this.reset = false;
    this.coherence = undefined;
    this.zRoc = undefined;

    this.states = ['resetted', 'running', 'paused', 'ended'];
    this.state = 'resetted';
  }

  doRun() {
    this.state = 'running';
    this.dispatchEvent(new CustomEvent('sdt-control-run', {
      detail: {},
      bubbles: true,
    }));
  }

  doPause() {
    this.state = 'paused';
    this.dispatchEvent(new CustomEvent('sdt-control-pause', {
      detail: {},
      bubbles: true,
    }));
  }

  doReset() {
    this.state = 'resetted';
    this.dispatchEvent(new CustomEvent('sdt-control-reset', {
      detail: {},
      bubbles: true,
    }));
  }

  setTrials(e) {
    this.trials = e.target.value;
    this.dispatchEvent(new CustomEvent('sdt-control-trials', {
      detail: {
        trials: this.trials,
      },
      bubbles: true,
    }));
  }

  setCoherence(e) {
    this.coherence = e.target.value;
    this.dispatchEvent(new CustomEvent('sdt-control-coherence', {
      detail: {
        coherence: this.coherence,
      },
      bubbles: true,
    }));
  }

  flipZRoc(e) {
    this.zRoc = e.target.checked;
    this.dispatchEvent(new CustomEvent('sdt-control-z-roc', {
      detail: {
        zRoc: this.zRoc,
      },
      bubbles: true,
    }));
  }

  complete() {
    this.state = 'ended';
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          ---shadow-2-rot90: -3px 1.5px 1px -2px rgba(0, 0, 0, 0.4), -2px 1px 2px 0 rgba(0, 0, 0, 0.34), -1px 0.5px 5px 0 rgba(0, 0, 0, 0.32);
          ---shadow-4-rot90: -2px 1px 4px -1px rgba(0, 0, 0, 0.4), -4px 2px 5px 0 rgba(0, 0, 0, 0.34), -1px 0.5px 10px 0 rgba(0, 0, 0, 0.32);
          ---shadow-8-rot90: -5px 2.5px 5px -3px rgba(0, 0, 0, 0.4), -8px 4px 10px 1px rgba(0, 0, 0, 0.34), -3px 1.5px 14px 2px rgba(0, 0, 0, 0.32);

          display: inline-block;
        }

        .holder {
          display: flex;

          flex-direction: row;

          align-items: stretch;
          justify-content: center;
        }

        .buttons {
          display: flex;

          flex-direction: column;

          align-items: stretch;
          justify-content: center;
        }

        .slider {
          display: flex;

          flex-direction: column;

          align-items: center;
          justify-content: center;
        }

        .range {
          display: inline-block;

          width: 3.5rem;
          height: 4.75rem;
          margin: 0 0.25rem 0.25rem;
        }

        label {
          margin: 0.25rem 0.25rem 0;
        }

        /* SLIDER */
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

        /* NUMERIC */
        input[type=number] {
          width: 3.5rem;
          margin: 0 0.25rem 0.25rem;

          background: var(---color-background);
        }

        /* BUTTON */

        /* SWITCH */
        .switch {
          display: flex;

          flex-direction: column;

          align-items: center;
          justify-content: center;
        }

        /* Adapted from https://codepen.io/guuslieben/pen/YyPRVP */
        input[type=checkbox] {
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
          clip-path: inset(100%);
        }

        input[type=checkbox] + label {
          order: 1;

          margin: 0 0.25rem 0.25rem;

          font-weight: 400;
        }

        input[type=checkbox] + label + label {
          position: relative;

          min-width: 24px;
          padding: 0 0 36px;
          margin: 0.25rem 0.25rem 0;

          font-weight: 400;

          outline: none;
        }

        input[type=checkbox] + label + label::before,
        input[type=checkbox] + label + label::after {
          position: absolute;

          left: 50%;

          margin: 0;

          content: "";

          outline: 0;

          transition: all 0.3s ease;
          transform: translate(-50%, 0);
        }

        input[type=checkbox] + label + label::before {
          bottom: 1px;

          width: 8px;
          height: 34px;

          background-color: var(---color-element-disabled);
          border-radius: 4px;
        }

        input[type=checkbox] + label + label::after {
          bottom: 0;

          width: 18px;
          height: 18px;

          background-color: var(---color-element-enabled);
          border-radius: 50%;
          box-shadow: var(---shadow-2);
        }

        input[type=checkbox]:checked + label + label::after {
          transform: translate(-50%, -100%);
        }

        input[type=checkbox]:disabled + label + label::after {
          background-color: var(---color-element-disabled);
          box-shadow: none;
        }

        input[type=checkbox]:enabled + label,
        input[type=checkbox]:enabled + label + label {
          cursor: pointer;
        }

        input[type=checkbox]:enabled + label:hover + label::after,
        input[type=checkbox]:enabled + label + label:hover::after {
          box-shadow: var(---shadow-4);
        }

        input[type=checkbox]:enabled + label:active + label::after,
        input[type=checkbox]:enabled + label + label:active::after {
          box-shadow: var(---shadow-8);
        }

        /* stylelint-disable-next-line selector-max-compound-selectors */
        :host(.keyboard) input[type=checkbox]:enabled:focus + label + label::after {
          box-shadow: var(---shadow-4);
        }

        /* stylelint-disable-next-line selector-max-compound-selectors */
        :host(.keyboard) input[type=checkbox]:enabled:focus + label + label:active::after,
        :host(.keyboard) input[type=checkbox]:enabled:focus:active + label + label::after {
          box-shadow: var(---shadow-8);
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="holder">
        ${this.trials
          ? html`
            <div class="slider">
              <label for=${`${this.uniqueId}-trials`}>Trials</label>
              <div class="range">
                <input type="range" id=${`${this.uniqueId}-trials`} name="trials" min="1" max="100" step="1" .value=${this.trials} @input=${this.setTrials.bind(this)} @change=${this.setTrials.bind(this)}>
              </div>
              <input type="number" min="1" max="100" step="1" .value=${this.trials} @input=${this.setTrials.bind(this)}>
            </div>`
          : html``}
        <div class="buttons">
          ${this.run
            ? html`<button name="run" ?disabled=${this.state === 'running' || this.state === 'ended'} @click=${this.doRun.bind(this)}>Run</button>`
            : html``}
          ${this.pause
            ? html`<button name="pause" ?disabled=${this.state !== 'running'} @click=${this.doPause.bind(this)}>Pause</button>`
            : html``}
          ${this.reset
            ? html`<button name="reset" ?disabled=${this.state === 'resetted'} @click=${this.doReset.bind(this)}>Reset</button>`
            : html``}
        </div>
        ${this.coherence
          ? html`
            <div class="slider">
              <label for=${`${this.uniqueId}-coherence`}>Coherence</label>
              <div class="range">
                <input type="range" id=${`${this.uniqueId}-coherence`} name="coherence" min="0" max="1" step=".01" .value=${this.coherence} @input=${this.setCoherence.bind(this)} @change=${this.setCoherence.bind(this)}>
              </div>
              <input type="number" min="0" max="1" step=".01" .value="${this.coherence}" @input=${this.setCoherence.bind(this)}>
            </div>`
          : html``}
        ${this.zRoc !== undefined
          ? html`
            <div class="switch">
              <input type="checkbox" id=${`${this.uniqueId}-z-roc`} name="z-roc" ?checked=${this.zRoc} @change=${this.flipZRoc.bind(this)}>
              <label for=${`${this.uniqueId}-z-roc`}>ROC</label>
              <label for=${`${this.uniqueId}-z-roc`}><span class="math-var">z</span>ROC</label>
            </div>`
          : html``}
      </div>`;
  }
}

customElements.define('sdt-control', SDTControl);
