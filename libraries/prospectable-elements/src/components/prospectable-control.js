
import {html, css} from 'lit';

import '@decidables/decidables-elements/button';
import '@decidables/decidables-elements/slider';

import ProspectableElement from '../prospectable-element';

/*
  ProspectableControl element
  <prospectable-control>

  Attributes:

*/
export default class ProspectableControl extends ProspectableElement {
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
    this.run = false;
    this.pause = false;
    this.reset = false;

    // Properties
    this.states = ['resetted', 'running', 'paused', 'ended'];
    this.state = 'resetted';
  }

  setTrials(e) {
    this.trials = e.target.value;
    this.dispatchEvent(new CustomEvent('prospectable-control-trials', {
      detail: {
        trials: this.trials,
      },
      bubbles: true,
    }));
  }

  setDuration(e) {
    this.duration = e.target.value;
    this.dispatchEvent(new CustomEvent('prospectable-control-duration', {
      detail: {
        duration: this.duration,
      },
      bubbles: true,
    }));
  }

  doRun() {
    this.state = 'running';
    this.dispatchEvent(new CustomEvent('prospectable-control-run', {
      detail: {},
      bubbles: true,
    }));
  }

  doPause() {
    this.state = 'paused';
    this.dispatchEvent(new CustomEvent('prospectable-control-pause', {
      detail: {},
      bubbles: true,
    }));
  }

  doReset() {
    this.state = 'resetted';
    this.dispatchEvent(new CustomEvent('prospectable-control-reset', {
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
        ${this.duration
          ? html`<decidables-slider min="10" max="4000" step="10" .value=${this.duration} @change=${this.setDuration.bind(this)} @input=${this.setDuration.bind(this)}>Duration</decidables-slider>`
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

customElements.define('prospectable-control', ProspectableControl);
