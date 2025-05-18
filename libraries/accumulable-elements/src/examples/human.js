
import DDMMath from '@decidables/accumulable-math';

import DDMExample from './ddm-example';

/*
  DDMExampleHuman element
  <ddm-example-human>
*/
export default class DDMExampleHuman extends DDMExample {
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
      color: {
        attribute: 'color',
        type: String,
        reflect: true,
      },

      a: {
        attribute: false,
        type: Number,
        reflect: false,
      },
      z: {
        attribute: false,
        type: Number,
        reflect: false,
      },
      v: {
        attribute: false,
        type: Number,
        reflect: false,
      },
      t0: {
        attribute: false,
        type: Number,
        reflect: false,
      },
    };
  }

  constructor() {
    super();

    this.trials = 10;
    this.duration = 2000;
    this.coherence = 0.5;
    this.colors = ['none', 'measure', 'outcome', 'all'];
    this.color = 'outcome';

    this.a = DDMMath.a.DEFAULT;
    this.z = DDMMath.z.DEFAULT;
    this.v = DDMMath.v.DEFAULT;
    this.t0 = DDMMath.t0.DEFAULT;

    this.accumulableControl = null;
    this.rdkTask = null;
    this.accumulableResponse = null;
    this.accumulableTable = null;
    this.ddmParameters = null;
    this.ddmModel = null;
    this.ddmFit = null;

    this.data = undefined;
  }

  connectedCallback() {
    super.connectedCallback();

    this.accumulableControl = this.querySelector('accumulable-control');
    this.rdkTask = this.querySelector('rdk-2afc-task');
    this.accumulableResponse = this.querySelector('accumulable-response');
    this.accumulableTable = this.querySelector('accumulable-table');
    this.ddmParameters = this.querySelector('ddm-parameters');
    this.ddmModel = this.querySelector('ddm-model');
    this.ddmFit = this.querySelector('ddm-fit');

    // Initialize
    this.ddmModel.clear();

    if (this.accumulableControl) {
      this.accumulableControl.addEventListener('accumulable-control-trials', (event) => {
        this.trials = event.detail.trials;
      });

      this.accumulableControl.addEventListener('accumulable-control-duration', (event) => {
        this.duration = event.detail.duration;
      });

      this.accumulableControl.addEventListener('accumulable-control-coherence', (event) => {
        this.coherence = event.detail.coherence;
      });

      this.accumulableControl.addEventListener('accumulable-control-color', (event) => {
        this.color = event.detail.color;
      });

      this.accumulableControl.addEventListener('accumulable-control-run', (/* event */) => {
        if (this.rdkTask) {
          this.rdkTask.running = true;
        }
      });

      this.accumulableControl.addEventListener('accumulable-control-pause', (/* event */) => {
        if (this.rdkTask) {
          this.rdkTask.running = false;
        }
      });

      this.accumulableControl.addEventListener('accumulable-control-reset', (/* event */) => {
        if (this.rdkTask) {
          this.rdkTask.reset();
        }

        if (this.accumulableResponse) {
          this.accumulableResponse.reset();
        }

        if (this.accumulableTable) {
          this.accumulableTable.correctCount = NaN;
          this.accumulableTable.errorCount = NaN;
          this.accumulableTable.nrCount = NaN;
          this.accumulableTable.accuracy = NaN;
          this.accumulableTable.correctMeanRT = NaN;
          this.accumulableTable.errorMeanRT = NaN;
          this.accumulableTable.meanRT = NaN;
          this.accumulableTable.correctSDRT = NaN;
          this.accumulableTable.errorSDRT = NaN;
          this.accumulableTable.sdRT = NaN;
        }

        // if (this.ddmParameters) {
        // }

        if (this.ddmModel) {
          this.ddmModel.clear();
        }

        if (this.ddmFit) {
          this.ddmFit.clear();
        }
      });
    }

    if (this.rdkTask) {
      this.rdkTask.addEventListener('rdk-trial-start', (event) => {
        if (this.accumulableResponse) {
          this.accumulableResponse.start(event.detail.signal, event.detail.trial);
        }
      });
    }

    if (this.rdkTask) {
      this.rdkTask.addEventListener('rdk-trial-end', (/* event */) => {
        if (this.accumulableResponse) {
          this.accumulableResponse.stop();
        }
      });
    }

    if (this.rdkTask) {
      this.rdkTask.addEventListener('rdk-block-end', (/* event */) => {
        if (this.accumulableControl) {
          this.accumulableControl.complete();
        }
      });
    }

    if (this.accumulableResponse) {
      this.accumulableResponse.addEventListener('accumulable-response', (event) => {
        this.data = event.detail.data;

        if (this.ddmModel) {
          this.ddmModel.trial({
            index: event.detail.trial,
            rt: event.detail.rt,
            outcome: event.detail.outcome,
          });
        }

        if (this.ddmFit) {
          this.ddmFit.set({
            accuracy: event.detail.data.accuracy,
            correctMeanRT: event.detail.data.correctMeanRT,
            errorMeanRT: event.detail.data.errorMeanRT,
            meanRT: event.detail.data.meanRT,
            correctSDRT: event.detail.data.correctSDRT,
            errorSDRT: event.detail.data.errorSDRT,
            sdRT: event.detail.data.sdRT,
          });
        }

        this.requestUpdate();
      });
    }

    if (this.ddmFit) {
      this.ddmFit.addEventListener('ddm-fit-update', (event) => {
        this.a = event.detail.a;
        this.z = 0.5; // event.detail.z;
        this.v = event.detail.v;
        this.t0 = event.detail.t0;
      });
    }
  }

  update(changedProperties) {
    super.update(changedProperties);

    if (this.accumulableControl) {
      this.accumulableControl.trials = (this.accumulableControl.trials != null)
        ? this.trials
        : undefined;
      this.accumulableControl.duration = (this.accumulableControl.duration != null)
        ? this.duration
        : undefined;
      this.accumulableControl.coherence = (this.accumulableControl.coherence != null)
        ? this.coherence
        : undefined;
      this.accumulableControl.color = (this.accumulableControl.color != null)
        ? this.color
        : undefined;
    }

    if (this.rdkTask) {
      this.rdkTask.trials = this.trials;
      this.rdkTask.duration = this.duration;
      this.rdkTask.wait = this.duration;
      this.rdkTask.iti = this.duration;
      this.rdkTask.coherence = this.coherence;
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
      this.ddmModel.a = +this.a;
      this.ddmModel.z = +this.z;
      this.ddmModel.v = +this.v;
      this.ddmModel.t0 = +this.t0;
    }

    if (this.accumulableResponse) {
      this.accumulableResponse.trialTotal = this.trials;
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
  }
}

customElements.define('ddm-example-human', DDMExampleHuman);
