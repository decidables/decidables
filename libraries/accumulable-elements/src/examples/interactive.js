
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

    this.accumulableTable = null;
    this.ddmParameters = null;
    this.ddmModel = null;
  }

  connectedCallback() {
    super.connectedCallback();

    this.accumulableTable = this.querySelector('accumulable-table');
    this.ddmParameters = this.querySelector('ddm-parameters');
    this.ddmModel = this.querySelector('ddm-model');

    if (this.accumulableTable) {
      this.accumulableTable.addEventListener('accumulable-table-change', (event) => {
        // Do something smart?
      });
    }

    if (this.ddmParameters) {
      this.ddmParameters.addEventListener('ddm-parameters-resample', (event) => {
        this.ddmModel?.resample();
      });
      this.ddmParameters.addEventListener('ddm-parameters-trials', (event) => {
        this.trials = event.detail.trials;
      });
      this.ddmParameters.addEventListener('ddm-parameters-a', (event) => {
        this.a = event.detail.a;
      });
      this.ddmParameters.addEventListener('ddm-parameters-z', (event) => {
        this.z = event.detail.z;
      });
      this.ddmParameters.addEventListener('ddm-parameters-v', (event) => {
        this.v = event.detail.v;
      });
      this.ddmParameters.addEventListener('ddm-parameters-t0', (event) => {
        this.t0 = event.detail.t0;
      });
    }

    if (this.ddmModel) {
      this.ddmModel.addEventListener('ddm-model-a', (event) => {
        this.a = event.detail.a;
      });
      this.ddmModel.addEventListener('ddm-model-z', (event) => {
        this.z = event.detail.z;
      });
      this.ddmModel.addEventListener('ddm-model-v', (event) => {
        this.v = event.detail.v;
      });
      this.ddmModel.addEventListener('ddm-model-t0', (event) => {
        this.t0 = event.detail.t0;
      });
    }

    this.requestUpdate();
  }

  update(changedProperties) {
    super.update(changedProperties);

    if (this.accumulableTable && this.ddmModel) {
      this.accumulableTable.correctCount = this.ddmModel.sample.count.correct;
      this.accumulableTable.errorCount = this.ddmModel.sample.count.error;
      this.accumulableTable.accuracy = this.ddmModel.sample.accuracy.correct;
      this.accumulableTable.correctMeanRT = this.ddmModel.sample.meanRT.correct;
      this.accumulableTable.errorMeanRT = this.ddmModel.sample.meanRT.error;
      this.accumulableTable.meanRT = this.ddmModel.sample.meanRT.overall;
      this.accumulableTable.correctSDRT = this.ddmModel.sample.sdRT.correct;
      this.accumulableTable.errorSDRT = this.ddmModel.sample.sdRT.error;
      this.accumulableTable.sdRT = this.ddmModel.sample.sdRT.overall;
    }

    if (this.ddmParameters) {
      this.ddmParameters.trials = this.trials;
      this.ddmParameters.a = this.a;
      this.ddmParameters.z = this.z;
      this.ddmParameters.v = this.v;
      this.ddmParameters.t0 = this.t0;
    }

    if (this.ddmModel) {
      this.ddmModel.trials = this.trials;
      this.ddmModel.a = +this.a;
      this.ddmModel.z = +this.z;
      this.ddmModel.v = +this.v;
      this.ddmModel.t0 = +this.t0;
    }
  }
}

customElements.define('ddm-example-interactive', DDMExampleInteractive);
