
// import DDMMath from '@decidables/accumulable-math';

import DDMExample from './ddm-example';

/*
  DDMExampleModel element
  <ddm-example-model>
*/
export default class DDMExampleModel extends DDMExample {
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
    this.duration = 2000;
    this.coherence = 0.5;
    this.colors = ['none', 'measure', 'outcome', 'all'];
    this.color = 'outcome';

    this.a = 1.2;
    this.z = 0.35;
    this.v = 1.5;
    this.t0 = 150;

    this.accumulableControl = null;
    this.rdkTask = null;
    this.ddmParameters = null;
    this.ddmModel = null;
    this.accumulableResponse = null;
    this.accumulableTable = null;

    this.trialCount = 0;
    this.signals = ['left', 'right']; // Possible values of 'signal'
    this.signal = undefined; // Signal for current trial
    this.data = undefined;
    this.model = undefined;
  }

  connectedCallback() {
    super.connectedCallback();

    this.accumulableControl = this.querySelector('accumulable-control');
    this.rdkTask = this.querySelector('rdk-2afc-task');
    this.ddmParameters = this.querySelector('ddm-parameters');
    this.ddmModel = this.querySelector('ddm-model');
    this.accumulableResponse = this.querySelector('accumulable-response');
    this.accumulableTable = this.querySelector('accumulable-table');

    if (this.accumulableControl) {
      if (this.accumulableControl.hasAttribute('trials')) {
        this.accumulableControl.addEventListener('accumulable-control-trials', (event) => {
          this.trials = event.detail.trials;
        });
      }

      if (this.accumulableControl.hasAttribute('duration')) {
        this.accumulableControl.addEventListener('accumulable-control-duration', (event) => {
          this.duration = event.detail.duration;
        });
      }

      if (this.accumulableControl.hasAttribute('color')) {
        this.accumulableControl.addEventListener('accumulable-control-color', (event) => {
          this.color = event.detail.color;
        });
      }

      if (this.accumulableControl.hasAttribute('run')) {
        this.accumulableControl.addEventListener('accumulable-control-run', (/* event */) => {
          if (this.rdkTask) {
            this.rdkTask.running = true;
          }

          if (this.ddmModel) {
            this.ddmModel.resumeTrial();
          }
        });
      }

      if (this.accumulableControl.hasAttribute('pause')) {
        this.accumulableControl.addEventListener('accumulable-control-pause', (/* event */) => {
          if (this.rdkTask) {
            this.rdkTask.running = false;
          }

          if (this.ddmModel) {
            this.ddmModel.pauseTrial();
          }
        });
      }

      if (this.accumulableControl.hasAttribute('reset')) {
        this.accumulableControl.addEventListener('accumulable-control-reset', (/* event */) => {
          this.trialCount = 0;
          this.signal = undefined;

          if (this.rdkTask) {
            this.rdkTask.reset();
          }

          if (this.ddmModel) {
            this.ddmModel.trials = this.trialCount;
          }

          if (this.accumulableResponse) {
            this.accumulableResponse.reset();
          }

          if (this.accumulableTable) {
            // this.accumulableTable.clear();
          }
        });
      }
    }

    if (this.rdkTask) {
      this.rdkTask.addEventListener('rdk-trial-start', (event) => {
        this.signal = event.detail.signal;

        if (this.accumulableResponse) {
          this.accumulableResponse.start(
            event.detail.signal,
            event.detail.trial,
          );
        }

        if (this.ddmModel) {
          this.trialCount += 1;
          this.ddmModel.trial();
        }
      });

      this.rdkTask.addEventListener('rdk-trial-end', (/* event */) => {
        this.signal = undefined;

        if (this.accumulableResponse) {
          this.accumulableResponse.stop();
        }
      });

      this.rdkTask.addEventListener('rdk-block-end', (/* event */) => {
        if (this.accumulableControl) {
          this.accumulableControl.complete();
        }
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

      if (this.ddmModel) {
        this.ddmModel.addEventListener('accumulable-response', (event) => {
          if (this.accumulableResponse) {
            const response = (event.detail.outcome === 'correct')
              ? this.signal
              : (this.signal === 'left')
                ? 'right'
                : 'left';
            this.accumulableResponse.responded(response);
          }

          this.data = event.detail.data;
          this.model = event.detail.model;
          this.requestUpdate();
        });
      }
    }

    this.requestUpdate();
  }

  update(changedProperties) {
    super.update(changedProperties);

    if (this.trialCount > this.trials) {
      this.trialCount = this.trials;
    }

    if (this.accumulableControl) {
      this.accumulableControl.trials = this.trials;
      this.accumulableControl.duration = this.duration;
      this.accumulableControl.coherence = this.coherence;
      this.accumulableControl.color = this.color;
    }

    if (this.rdkTask) {
      this.rdkTask.trials = this.trials;
      this.rdkTask.duration = this.duration;
      this.rdkTask.coherence = this.coherence;
    }

    if (this.ddmParameters) {
      this.ddmParameters.a = this.a;
      this.ddmParameters.z = this.z;
      this.ddmParameters.v = this.v;
      this.ddmParameters.t0 = this.t0;
    }

    if (this.ddmModel) {
      this.ddmModel.trials = this.trialCount;
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

customElements.define('ddm-example-model', DDMExampleModel);
