
import {html, css} from 'lit';

import '@decidables/decidables-elements/button';
import '@decidables/decidables-elements/slider';
import '@decidables/decidables-elements/switch';
import '@decidables/decidables-elements/toggle';
import '@decidables/decidables-elements/toggle-option';

import AccumulableElement from '../accumulable-element';

/*
  DDMParameters element
  <ddm-paramters>

  Attributes:

*/
export default class DDMParameters extends AccumulableElement {
  static get properties() {
    return {
      resample: {
        attribute: 'resample',
        type: Boolean,
        reflect: true,
      },
      trials: {
        attribute: 'trials',
        type: Number,
        reflect: true,
      },

      a: {
        attribute: 'boundary-separation',
        type: Number,
        reflect: true,
      },
      z: {
        attribute: 'starting-point',
        type: Number,
        reflect: true,
      },
      v: {
        attribute: 'drift-rate',
        type: Number,
        reflect: true,
      },
      t0: {
        attribute: 'nondecision-time',
        type: Number,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    // Attributes
    this.resample = false;
    this.trials = undefined;

    this.a = undefined;
    this.z = undefined;
    this.v = undefined;
    this.t0 = undefined;
  }

  doResample() {
    this.dispatchEvent(new CustomEvent('ddm-parameters-resample', {
      detail: {},
      bubbles: true,
    }));
  }

  setTrials(e) {
    this.trials = e.target.value;
    this.dispatchEvent(new CustomEvent('ddm-parameters-trials', {
      detail: {
        trials: this.trials,
      },
      bubbles: true,
    }));
  }

  setBoundarySeparation(e) {
    this.a = e.target.value;
    this.dispatchEvent(new CustomEvent('ddm-parameters-a', {
      detail: {
        a: this.a,
      },
      bubbles: true,
    }));
  }

  setStartingPoint(e) {
    this.z = e.target.value;
    this.dispatchEvent(new CustomEvent('ddm-parameters-z', {
      detail: {
        z: this.z,
      },
      bubbles: true,
    }));
  }

  setDriftRate(e) {
    this.v = e.target.value;
    this.dispatchEvent(new CustomEvent('ddm-parameters-v', {
      detail: {
        v: this.v,
      },
      bubbles: true,
    }));
  }

  setNondecisionTime(e) {
    this.t0 = e.target.value;
    this.dispatchEvent(new CustomEvent('ddm-parameters-t0', {
      detail: {
        t0: this.t0,
      },
      bubbles: true,
    }));
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
        ${this.resample
          ? html`
            <div class="buttons">
              ${this.resample
                ? html`<decidables-button name="resample" @click=${this.doResample.bind(this)}>Resample</decidables-button>`
                : html``}
            </div>
          `
          : html``}
        ${this.trials != null
          ? html`<decidables-slider min="0" max="100" step="1" .value=${this.trials} @change=${this.setTrials.bind(this)} @input=${this.setTrials.bind(this)}>Trials</decidables-slider>`
          : html``}
        ${this.a != null
          ? html`<decidables-slider min="0.01" max="2" step=".01" .value=${this.a} @change=${this.setBoundarySeparation.bind(this)} @input=${this.setBoundarySeparation.bind(this)}>Boundary Separation</decidables-slider>`
          : html``}
        ${this.z != null
          ? html`<decidables-slider min="0.01" max="0.99" step=".01" .value=${this.z} @change=${this.setStartingPoint.bind(this)} @input=${this.setStartingPoint.bind(this)}>Starting Point</decidables-slider>`
          : html``}
        ${this.v != null
          ? html`<decidables-slider min="0.01" max="5" step=".01" .value=${this.v} @change=${this.setDriftRate.bind(this)} @input=${this.setDriftRate.bind(this)}>Drift Rate</decidables-slider>`
          : html``}
        ${this.t0 != null
          ? html`<decidables-slider min="0" max="500" step="1" .value=${this.t0} @change=${this.setNondecisionTime.bind(this)} @input=${this.setNondecisionTime.bind(this)}>Nondecision Time</decidables-slider>`
          : html``}
      </div>`;
  }
}

customElements.define('ddm-parameters', DDMParameters);
