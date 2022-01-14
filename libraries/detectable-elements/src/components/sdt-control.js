
import {html, css} from 'lit';

import '@decidable/decidable-elements';

import SDTElement from '../sdt-element';

/*
  SDTControl element
  <sdt-control>

  Attributes:

*/
export default class SDTControl extends SDTElement {
  static get properties() {
    return {
      trials: {
        attribute: 'trials',
        type: Number,
        reflect: true,
      },
      duration: {
        attribute: 'duration',
        type: Number,
        reflect: true,
      },
      coherence: {
        attribute: 'coherence',
        type: Number,
        reflect: true,
      },
      payoff: {
        attribute: 'payoff',
        type: Number,
        reflect: true,
      },
      color: {
        attribute: 'color',
        type: String,
        reflect: true,
      },
      zRoc: {
        attribute: 'z-roc',
        type: Boolean,
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

      state: {
        atribute: false,
        type: String,
        reflect: false,
      },
    };
  }

  constructor() {
    super();

    // Attributes
    this.trials = undefined;
    this.duration = undefined;
    this.coherence = undefined;
    this.payoff = undefined;
    this.colors = ['none', 'accuracy', 'stimulus', 'response', 'outcome'];
    this.color = undefined;
    this.zRoc = undefined;
    this.run = false;
    this.pause = false;
    this.reset = false;

    // Properties
    this.states = ['resetted', 'running', 'paused', 'ended'];
    this.state = 'resetted';
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

  setDuration(e) {
    this.duration = e.target.value;
    this.dispatchEvent(new CustomEvent('sdt-control-duration', {
      detail: {
        duration: this.duration,
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

  setPayoff(e) {
    this.payoff = e.target.value;
    this.dispatchEvent(new CustomEvent('sdt-control-payoff', {
      detail: {
        payoff: this.payoff,
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

  complete() {
    this.state = 'ended';
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
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

        /* Payoff  Slider */
        .payoff {
          --decidable-spinner-prefix: "$";
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="holder">
        ${this.trials
          ? html`<decidable-slider min="1" max="100" step="1" .value=${this.trials} @change=${this.setTrials.bind(this)} @input=${this.setTrials.bind(this)}>Trials</decidable-slider>`
          : html``}
        ${this.duration
          ? html`<decidable-slider min="10" max="2000" step="10" .value=${this.duration} @change=${this.setDuration.bind(this)} @input=${this.setDuration.bind(this)}>Duration</decidable-slider>`
          : html``}
        ${this.coherence
          ? html`<decidable-slider min="0" max="1" step=".01" .value=${this.coherence} @change=${this.setCoherence.bind(this)} @input=${this.setCoherence.bind(this)}>Coherence</decidable-slider>`
          : html``}
        ${this.payoff
          ? html`<decidable-slider class="payoff" min="0" max="100" step="1" .value=${this.payoff} @change=${this.setPayoff.bind(this)} @input=${this.setPayoff.bind(this)}>Payoff</decidable-slider>`
          : html``}
        ${this.color !== undefined
          ? html`
            <decidable-toggle @change=${this.chooseColor.bind(this)}>
              <span slot="label">Emphasis</span>
              <decidable-toggle-option name=${`${this.uniqueId}-color`} value="none" ?checked=${this.color === 'none'}>None</decidable-toggle-option>
              <decidable-toggle-option name=${`${this.uniqueId}-color`} value="accuracy" ?checked=${this.color === 'accuracy'}>Accuracy</decidable-toggle-option>
              <decidable-toggle-option name=${`${this.uniqueId}-color`} value="stimulus" ?checked=${this.color === 'stimulus'}>Stimulus</decidable-toggle-option>
              <decidable-toggle-option name=${`${this.uniqueId}-color`} value="response" ?checked=${this.color === 'response'}>Response</decidable-toggle-option>
              <decidable-toggle-option name=${`${this.uniqueId}-color`} value="outcome" ?checked=${this.color === 'outcome'}>Outcome</decidable-toggle-option>
            </decidable-toggle>
          `
          : html``}
        ${this.zRoc !== undefined
          ? html`
            <decidable-switch ?checked=${this.zRoc} @change=${this.flipZRoc.bind(this)}>
              <span class="math-var">z</span>ROC
              <span slot="off-label">ROC</span>
            </decidable-switch>
          `
          : html``}
        <div class="buttons">
          ${this.run
            ? html`<decidable-button name="run" ?disabled=${this.state === 'running' || this.state === 'ended'} @click=${this.doRun.bind(this)}>Run</decidable-button>`
            : html``}
          ${this.pause
            ? html`<decidable-button name="pause" ?disabled=${this.state !== 'running'} @click=${this.doPause.bind(this)}>Pause</decidable-button>`
            : html``}
          ${this.reset
            ? html`<decidable-button name="reset" ?disabled=${this.state === 'resetted'} @click=${this.doReset.bind(this)}>Reset</decidable-button>`
            : html``}
        </div>
      </div>`;
  }
}

customElements.define('sdt-control', SDTControl);
