
import {html, css} from 'lit';

import '@decidables/decidables-elements/button';
import '@decidables/decidables-elements/slider';
import '@decidables/decidables-elements/switch';
import '@decidables/decidables-elements/toggle';
import '@decidables/decidables-elements/toggle-option';

import AccumulableElement from '../accumulable-element';

/*
  AccumulableControl element
  <accumulable-control>

  Attributes:

*/
export default class AccumulableControl extends AccumulableElement {
  static get properties() {
    return {
      trials: {
        attribute: 'trials',
        type: Number,
        reflect: true,
      },
      resample: {
        attribute: 'resample',
        type: Boolean,
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
      color: {
        attribute: 'color',
        type: String,
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
    this.resample = false;

    this.duration = undefined;
    this.coherence = undefined;
    this.colors = ['none', 'measure', 'outcome', 'all'];
    this.color = undefined;

    this.run = false;
    this.pause = false;
    this.reset = false;

    // Properties
    this.states = ['resetted', 'running', 'paused', 'ended'];
    this.state = 'resetted';
  }

  setTrials(e) {
    this.trials = e.target.value;
    this.dispatchEvent(new CustomEvent('accumulable-control-trials', {
      detail: {
        trials: this.trials,
      },
      bubbles: true,
    }));
  }

  doResample() {
    this.dispatchEvent(new CustomEvent('accumulable-control-resample', {
      detail: {},
      bubbles: true,
    }));
  }

  setDuration(e) {
    this.duration = e.target.value;
    this.dispatchEvent(new CustomEvent('accumulable-control-duration', {
      detail: {
        duration: this.duration,
      },
      bubbles: true,
    }));
  }

  setCoherence(e) {
    this.coherence = e.target.value;
    this.dispatchEvent(new CustomEvent('accumulable-control-coherence', {
      detail: {
        coherence: this.coherence,
      },
      bubbles: true,
    }));
  }

  chooseColor(e) {
    this.color = e.target.value;
    this.dispatchEvent(new CustomEvent('accumulable-control-color', {
      detail: {
        color: this.color,
      },
      bubbles: true,
    }));
  }

  doRun() {
    this.state = 'running';
    this.dispatchEvent(new CustomEvent('accumulable-control-run', {
      detail: {},
      bubbles: true,
    }));
  }

  doPause() {
    this.state = 'paused';
    this.dispatchEvent(new CustomEvent('accumulable-control-pause', {
      detail: {},
      bubbles: true,
    }));
  }

  doReset() {
    this.state = 'resetted';
    this.dispatchEvent(new CustomEvent('accumulable-control-reset', {
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
      `,
    ];
  }

  render() {
    return html`
      <div class="holder">
        ${this.trials
          ? html`<decidables-slider min="1" max="100" step="1" .value=${this.trials} @change=${this.setTrials.bind(this)} @input=${this.setTrials.bind(this)}>Trials</decidables-slider>`
          : html``}
        ${this.resample
          ? html`
            <div class="buttons">
              ${this.resample
                ? html`<decidables-button name="resample" @click=${this.doResample.bind(this)}>Resample</decidables-button>`
                : html``}
            </div>
          `
          : html``}
        ${this.duration
          ? html`<decidables-slider min="10" max="2000" step="10" .value=${this.duration} @change=${this.setDuration.bind(this)} @input=${this.setDuration.bind(this)}>Duration</decidables-slider>`
          : html``}
        ${this.coherence
          ? html`<decidables-slider min="0" max="1" step=".01" .value=${this.coherence} @change=${this.setCoherence.bind(this)} @input=${this.setCoherence.bind(this)}>Coherence</decidables-slider>`
          : html``}
        ${this.color !== undefined
          ? html`
            <decidables-toggle @change=${this.chooseColor.bind(this)}>
              <span slot="label">Emphasis</span>
              <decidables-toggle-option name="toggle" value="none" ?checked=${this.color === 'none'}>None</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="measure" ?checked=${this.color === 'measure'}>Measure</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="outcome" ?checked=${this.color === 'outcome'}>Outcome</decidables-toggle-option>
              <decidables-toggle-option name="toggle" value="all" ?checked=${this.color === 'all'}>All</decidables-toggle-option>
            </decidables-toggle>
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

customElements.define('accumulable-control', AccumulableControl);
