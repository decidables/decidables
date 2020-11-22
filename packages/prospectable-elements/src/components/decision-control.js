
import {html, css} from 'lit-element';

import '@decidable/decidable-elements';

import CPTElement from '../cpt-element';

/*
  DecisionControl element
  <decision-control>

  Attributes:

*/
export default class DecisionControl extends CPTElement {
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
    this.dispatchEvent(new CustomEvent('decision-control-trials', {
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

  doRun() {
    this.state = 'running';
    this.dispatchEvent(new CustomEvent('decision-control-run', {
      detail: {},
      bubbles: true,
    }));
  }

  doPause() {
    this.state = 'paused';
    this.dispatchEvent(new CustomEvent('decision-control-pause', {
      detail: {},
      bubbles: true,
    }));
  }

  doReset() {
    this.state = 'resetted';
    this.dispatchEvent(new CustomEvent('decision-control-reset', {
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
          ? html`<decidable-slider min="1" max="100" step="1" .value=${this.trials} @change=${this.setTrials.bind(this)} @input=${this.setTrials.bind(this)}>Trials</decidable-slider>`
          : html``}
        ${this.duration
          ? html`<decidable-slider min="10" max="4000" step="10" .value=${this.duration} @change=${this.setDuration.bind(this)} @input=${this.setDuration.bind(this)}>Duration</decidable-slider>`
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

customElements.define('decision-control', DecisionControl);
