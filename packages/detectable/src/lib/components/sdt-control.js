
import {html, css, unsafeCSS} from 'lit-element';

import SDTElement from '../sdt-element';
import SDTMixinStyleButton from '../mixins/styleButton';
import SDTMixinStyleSlider from '../mixins/styleSlider';
import SDTMixinStyleSpinner from '../mixins/styleSpinner';
import SDTMixinStyleSwitch from '../mixins/styleSwitch';
import SDTMixinStyleToggle from '../mixins/styleToggle';

/*
  SDTControl element
  <sdt-control>

  Attributes:

*/
export default class SDTControl extends SDTMixinStyleButton(SDTMixinStyleSlider(SDTMixinStyleSpinner(SDTMixinStyleSwitch(SDTMixinStyleToggle(SDTElement))))) { // eslint-disable-line max-len
  static get properties() {
    return {
      duration: {
        attribute: 'duration',
        type: Number,
        reflect: true,
      },
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
      color: {
        attribute: 'color',
        type: String,
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

    this.duration = undefined;
    this.trials = undefined;
    this.run = false;
    this.pause = false;
    this.reset = false;
    this.coherence = undefined;
    this.zRoc = undefined;

    this.colors = ['none', 'accuracy', 'stimulus', 'response', 'outcome'];
    this.color = undefined;

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

  setDuration(e) {
    this.duration = e.target.value;
    this.dispatchEvent(new CustomEvent('sdt-control-duration', {
      detail: {
        duration: this.duration,
      },
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

  chooseColor(e) {
    this.color = e.target.value;
    this.dispatchEvent(new CustomEvent('sdt-control-color', {
      detail: {
        color: this.color,
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

        .toggle {
          display: flex;

          flex-direction: column;

          align-items: stretch;
          justify-content: center;
        }

        label {
          margin: 0.25rem 0.25rem 0;
        }

        /* BUTTON */

        /* NUMBER */

        /* RADIO */

        /* RANGE */

        /* SLIDER */

        /* SPINNER */
        input[type=number] {
          width: 3.5rem;
          margin: 0 0.25rem 0.25rem;

          background: var(---color-background);
        }

        /* SWITCH */

        /* TOGGLE */
        fieldset {
          border: 0;
        }

        legend {
          text-align: center;
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
        ${this.duration
          ? html`
            <div class="slider">
              <label for=${`${this.uniqueId}-duration`}>Duration</label>
              <div class="range">
                <input type="range" id=${`${this.uniqueId}-duration`} name="duration" min="10" max="2000" step="10" .value=${this.duration} @input=${this.setDuration.bind(this)} @change=${this.setDuration.bind(this)}>
              </div>
              <input type="number" min="10" max="2000" step="10" .value=${this.duration} @input=${this.setDuration.bind(this)}>
            </div>`
          : html``}
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
        ${this.color !== undefined
          ? html`
            <fieldset class="toggle">
              <legend>Emphasis</legend>
              <input type="radio" id=${`${this.uniqueId}-color-none`} name=${`${this.uniqueId}-color`} value="none" ?checked=${this.color === 'none'} @change=${this.chooseColor.bind(this)}>
              <label for=${`${this.uniqueId}-color-none`}>None</label>
              <input type="radio" id=${`${this.uniqueId}-color-accuracy`} name=${`${this.uniqueId}-color`} value="accuracy" ?checked=${this.color === 'accuracy'} @change=${this.chooseColor.bind(this)}>
              <label for=${`${this.uniqueId}-color-accuracy`}>Accuracy</label>
              <input type="radio" id=${`${this.uniqueId}-color-stimulus`} name=${`${this.uniqueId}-color`} value="stimulus" ?checked=${this.color === 'stimulus'} @change=${this.chooseColor.bind(this)}>
              <label for=${`${this.uniqueId}-color-stimulus`}>Stimulus</label>
              <input type="radio" id=${`${this.uniqueId}-color-response`} name=${`${this.uniqueId}-color`} value="response" ?checked=${this.color === 'response'} @change=${this.chooseColor.bind(this)}>
              <label for=${`${this.uniqueId}-color-response`}>Response</label>
              <input type="radio" id=${`${this.uniqueId}-color-outcome`} name=${`${this.uniqueId}-color`} value="outcome" ?checked=${this.color === 'outcome'} @change=${this.chooseColor.bind(this)}>
              <label for=${`${this.uniqueId}-color-outcome`}>Outcome</label>
            </fieldset>`
          : html``}
        ${this.zRoc !== undefined
          ? html`
            <div class="switch">
              <input type="checkbox" id=${`${this.uniqueId}-z-roc`} name="z-roc" ?checked=${this.zRoc} @change=${this.flipZRoc.bind(this)}>
              <label for=${`${this.uniqueId}-z-roc`}>ROC</label>
              <label for=${`${this.uniqueId}-z-roc`}><span class="math-var">z</span>ROC</label>
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
      </div>`;
  }
}

customElements.define('sdt-control', SDTControl);
