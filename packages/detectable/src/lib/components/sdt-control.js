
import {html, css} from 'lit-element';

import SDTElement from '../sdt-element';
import SDTMixinStyleButton from '../mixins/styleButton';
import SDTMixinStyleSlider from '../mixins/styleSlider';
import SDTMixinStyleSpinner from '../mixins/styleSpinner';
import SDTMixinStyleSwitch from '../mixins/styleSwitch';

/*
  SDTControl element
  <sdt-control>

  Attributes:

*/
export default class SDTControl extends SDTMixinStyleButton(SDTMixinStyleSlider(SDTMixinStyleSpinner(SDTMixinStyleSwitch(SDTElement)))) { // eslint-disable-line max-len
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
          ---shadow-2-rotate: ${unsafeCSS(this.cssBoxShadow(2, true, false))};
          ---shadow-4-rotate: ${unsafeCSS(this.cssBoxShadow(4, true, false))};
          ---shadow-8-rotate: ${unsafeCSS(this.cssBoxShadow(8, true, false))};

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

        .range {
          display: inline-block;

          width: 3.5rem;
          height: 4.75rem;
          margin: 0 0.25rem 0.25rem;
        }

        .slider {
          display: flex;

          flex-direction: column;

          align-items: center;
          justify-content: center;
        }

        .switch {
          display: flex;

          flex-direction: column;

          align-items: center;
          justify-content: center;
        }

        label {
          margin: 0.25rem 0.25rem 0;
        }

        /* BUTTON */

        /* SLIDER */

        /* SPINNER */
        input[type=number] {
          width: 3.5rem;
          margin: 0 0.25rem 0.25rem;

          background: var(---color-background);
        }

        /* SWITCH */
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
