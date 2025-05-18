
import DDMMath from '@decidables/accumulable-math';

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
      color: {
        attribute: 'color',
        type: String,
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
    this.colors = ['none', 'measure', 'outcome', 'all'];
    this.color = 'outcome';

    this.a = DDMMath.a.DEFAULT;
    this.z = DDMMath.z.DEFAULT;
    this.v = DDMMath.v.DEFAULT;
    this.t0 = DDMMath.t0.DEFAULT;

    this.accumulableControl = null;
    this.accumulableTable = null;
    this.ddmParameters = null;
    this.ddmModel = null;

    this.data = undefined;
    this.model = undefined;
  }

  connectedCallback() {
    super.connectedCallback();

    this.accumulableControl = this.querySelector('accumulable-control');
    this.accumulableTable = this.querySelector('accumulable-table');
    this.ddmParameters = this.querySelector('ddm-parameters');
    this.ddmModel = this.querySelector('ddm-model');

    if (this.accumulableControl) {
      this.accumulableControl.addEventListener('accumulable-control-resample', (/* event */) => {
        this.ddmModel?.resample();
        this.requestUpdate();
      });
      this.accumulableControl.addEventListener('accumulable-control-trials', (event) => {
        this.trials = event.detail.trials;
      });
      this.accumulableControl.addEventListener('accumulable-control-color', (event) => {
        this.color = event.detail.color;
      });
    }

    if (this.ddmParameters) {
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
      this.ddmModel.addEventListener('ddm-model-output', (event) => {
        this.data = event.detail.data;
        this.model = event.detail.model;
        this.requestUpdate();
      });
    }

    this.requestUpdate();
  }

  update(changedProperties) {
    super.update(changedProperties);

    if (this.accumulableControl) {
      this.accumulableControl.trials = (this.accumulableControl.trials != null)
        ? this.trials
        : undefined;
      this.accumulableControl.color = (this.accumulableControl.color != null)
        ? this.color
        : undefined;
    }

    if (this.accumulableTable) {
      this.accumulableTable.color = this.color;
    }

    if (this.accumulableTable && this.data) {
      this.accumulableTable.correctCount = this.data.correctCount;
      this.accumulableTable.errorCount = this.data.errorCount;
      this.accumulableTable.nrCount = this.data.nrCount;
      this.accumulableTable.accuracy = this.data.accuracy;
      this.accumulableTable.correctMeanRT = this.data.correctMeanRT;
      this.accumulableTable.errorMeanRT = this.data.errorMeanRT;
      this.accumulableTable.meanRT = this.data.meanRT;
      this.accumulableTable.correctSDRT = this.data.correctSDRT;
      this.accumulableTable.errorSDRT = this.data.errorSDRT;
      this.accumulableTable.sdRT = this.data.sdRT;
    }

    if (this.ddmParameters) {
      this.ddmParameters.a = (this.ddmParameters.a != null)
        ? this.a
        : undefined;
      this.ddmParameters.z = (this.ddmParameters.z != null)
        ? this.z
        : undefined;
      this.ddmParameters.v = (this.ddmParameters.a != null)
        ? this.v
        : undefined;
      this.ddmParameters.t0 = (this.ddmParameters.t0 != null)
        ? this.t0
        : undefined;
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
