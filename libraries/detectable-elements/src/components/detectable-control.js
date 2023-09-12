
import {html, css} from 'lit';

import '@decidables/decidables-elements/button';
import '@decidables/decidables-elements/slider';
import '@decidables/decidables-elements/switch';
import '@decidables/decidables-elements/toggle';
import '@decidables/decidables-elements/toggle-option';

import DetectableElement from '../detectable-element';

/*
  DetectableControl element
  <detectable-control>

  Attributes:

*/
export default class DetectableControl extends DetectableElement {
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
        attribute: false,
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
    this.colors = ['none', 'accuracy', 'stimulus', 'response', 'outcome', 'all'];
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
    this.dispatchEvent(new CustomEvent('detectable-control-trials', {
      detail: {
        trials: this.trials,
      },
      bubbles: true,
    }));
  }

  setDuration(e) {
    this.duration = e.target.value;
    this.dispatchEvent(new CustomEvent('detectable-control-duration', {
      detail: {
        duration: this.duration,
      },
      bubbles: true,
    }));
  }

  setCoherence(e) {
    this.coherence = e.target.value;
    this.dispatchEvent(new CustomEvent('detectable-control-coherence', {
      detail: {
        coherence: this.coherence,
      },
      bubbles: true,
    }));
  }

  setPayoff(e) {
    this.payoff = e.target.value;
    this.dispatchEvent(new CustomEvent('detectable-control-payoff', {
      detail: {
        payoff: this.payoff,
      },
      bubbles: true,
    }));
  }

  chooseColor(e) {
    this.color = e.target.value;
    this.dispatchEvent(new CustomEvent('detectable-control-color', {
      detail: {
        color: this.color,
      },
      bubbles: true,
    }));
  }

  flipZRoc(e) {
    this.zRoc = e.target.checked;
    this.dispatchEvent(new CustomEvent('detectable-control-z-roc', {
      detail: {
        zRoc: this.zRoc,
      },
      bubbles: true,
    }));
  }

  doRun() {
    this.state = 'running';
    this.dispatchEvent(new CustomEvent('detectable-control-run', {
      detail: {},
      bubbles: true,
    }));
  }

  doPause() {
    this.state = 'paused';
    this.dispatchEvent(new CustomEvent('detectable-control-pause', {
      detail: {},
      bubbles: true,
    }));
  }

  doReset() {
    this.state = 'resetted';
    this.dispatchEvent(new CustomEvent('detectable-control-reset', {
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
          --decidables-spinner-prefix: "$";
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="holder">
        ${this.trials
          ? html`<decidables-slider min="1" max="100" step="1" .value=${this.trials} @change=${this.setTrials.bind(this)} @input=${this.setTrials.bind(this)}>Trials</decidables-slider>`
          : html``}
        ${this.duration
          ? html`<decidables-slider min="10" max="2000" step="10" .value=${this.duration} @change=${this.setDuration.bind(this)} @input=${this.setDuration.bind(this)}>Duration</decidables-slider>`
          : html``}
        ${this.coherence
          ? html`<decidables-slider min="0" max="1" step=".01" .value=${this.coherence} @change=${this.setCoherence.bind(this)} @input=${this.setCoherence.bind(this)}>Coherence</decidables-slider>`
          : html``}
        ${this.payoff
          ? html`<decidables-slider class="payoff" min="0" max="100" step="1" .value=${this.payoff} @change=${this.setPayoff.bind(this)} @input=${this.setPayoff.bind(this)}>Payoff</decidables-slider>`
          : html``}
        ${this.color !== undefined
          ? html`
            <decidables-toggle @change=${this.chooseColor.bind(this)}>
              <span slot="label">Emphasis</span>
              <decidables-toggle-option name="toggle" value="none" ?checked=${this.color === 'none'}>None</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="accuracy" ?checked=${this.color === 'accuracy'}>Accuracy</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="stimulus" ?checked=${this.color === 'stimulus'}>Stimulus</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="response" ?checked=${this.color === 'response'}>Response</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="outcome" ?checked=${this.color === 'outcome'}>Outcome</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="all" ?checked=${this.color === 'all'}>All</decidables-toggle-option>
            </decidables-toggle>
          `
          : html``}
        ${this.zRoc !== undefined
          ? html`
            <decidables-switch ?checked=${this.zRoc} @change=${this.flipZRoc.bind(this)}>
              <span class="math-var">z</span>ROC
              <span slot="off-label">ROC</span>
            </decidables-switch>
          `
          : html``}
        ${this.run || this.pause || this.reset
          ? html`
            <div class="buttons">
              ${this.run
                ? html`<decidables-button name="run" ?disabled=${this.state === 'running' || this.state === 'ended'} @click=${this.doRun.bind(this)}>Run</decidables-button>`
                : html``}
              ${this.pause
                ? html`<decidables-button name="pause" ?disabled=${this.state !== 'running'} @click=${this.doPause.bind(this)}>Pause</decidables-button>`
                : html``}
              ${this.reset
                ? html`<decidables-button name="reset" ?disabled=${this.state === 'resetted'} @click=${this.doReset.bind(this)}>Reset</decidables-button>`
                : html``}
            </div>
          `
          : html``}
      </div>`;
  }
}

customElements.define('detectable-control', DetectableControl);
