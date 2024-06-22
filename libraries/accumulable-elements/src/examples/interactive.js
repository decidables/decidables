
import DDMExample from './ddm-example';

/*
  DDMExampleInteractive element
  <ddm-example-interactive>
*/
export default class DDMExampleInteractive extends DDMExample {
  static get properties() {
    return {
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

    this.trials = 10;
    this.a = 1.2;
    this.z = 0.35;
    this.v = 1.5;
    this.t0 = 150;

    this.accumulableParameters = null;
    this.ddmSamplePaths = null;
  }

  connectedCallback() {
    super.connectedCallback();

    this.accumulableParameters = this.querySelector('accumulable-parameters');
    this.ddmSamplePaths = this.querySelector('ddm-sample-paths');

    if (this.accumulableParameters) {
      this.accumulableParameters.addEventListener('accumulable-parameters-trials', (event) => {
        this.trials = event.detail.trials;
      });
      this.accumulableParameters.addEventListener('accumulable-parameters-a', (event) => {
        this.a = event.detail.a;
      });
      this.accumulableParameters.addEventListener('accumulable-parameters-z', (event) => {
        this.z = event.detail.z;
      });
      this.accumulableParameters.addEventListener('accumulable-parameters-v', (event) => {
        this.v = event.detail.v;
      });
      this.accumulableParameters.addEventListener('accumulable-parameters-t0', (event) => {
        this.t0 = event.detail.t0;
      });
    }

    if (this.ddmSamplePaths) {
      this.ddmSamplePaths.addEventListener('ddm-sample-paths-a', (event) => {
        this.a = event.detail.a;
      });
      this.ddmSamplePaths.addEventListener('ddm-sample-paths-z', (event) => {
        this.z = event.detail.z;
      });
      this.ddmSamplePaths.addEventListener('ddm-sample-paths-v', (event) => {
        this.v = event.detail.v;
      });
      this.ddmSamplePaths.addEventListener('ddm-sample-paths-t0', (event) => {
        this.t0 = event.detail.t0;
      });
    }

    this.requestUpdate();
  }

  update(changedProperties) {
    super.update(changedProperties);

    if (this.accumulableParameters) {
      this.accumulableParameters.trials = this.trials;
      this.accumulableParameters.a = this.a;
      this.accumulableParameters.z = this.z;
      this.accumulableParameters.v = this.v;
      this.accumulableParameters.t0 = this.t0;
    }

    if (this.ddmSamplePaths) {
      this.ddmSamplePaths.trials = this.trials;
      this.ddmSamplePaths.a = +this.a;
      this.ddmSamplePaths.z = +this.z;
      this.ddmSamplePaths.v = +this.v;
      this.ddmSamplePaths.t0 = +this.t0;
    }
  }
}

customElements.define('ddm-example-interactive', DDMExampleInteractive);
