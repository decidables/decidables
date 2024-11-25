
// import DDMMath from '@decidables/accumulable-math';

import DDMExample from './ddm-example';

/*
  DDMExampleHuman element
  <ddm-example-human>
*/
export default class DDMExampleHuman extends DDMExample {
  constructor() {
    super();

    this.trialCount = 0;
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

    if (this.accumulableControl && this.accumulableControl.hasAttribute('trials')) {
      this.accumulableControl.addEventListener('accumulable-control-trials', (event) => {
        if (this.rdkTask) {
          this.rdkTask.trials = event.detail.trials;
        }

        if (this.accumulableResponse) {
          this.accumulableResponse.trialTotal = event.detail.trials;
        }
      });
    }

    if (this.accumulableControl && this.accumulableControl.hasAttribute('duration')) {
      this.accumulableControl.addEventListener('accumulable-control-duration', (event) => {
        if (this.rdkTask) {
          this.rdkTask.duration = event.detail.duration;
          this.rdkTask.wait = event.detail.duration;
          this.rdkTask.iti = event.detail.duration;
        }
      });
    }

    if (this.accumulableControl && this.accumulableControl.hasAttribute('coherence')) {
      this.accumulableControl.addEventListener('accumulable-control-coherence', (event) => {
        if (this.rdkTask) {
          this.rdkTask.coherence = event.detail.coherence;
        }
      });
    }

    if (this.accumulableControl && this.accumulableControl.hasAttribute('color')) {
      this.accumulableControl.addEventListener('accumulable-control-color', (event) => {
        if (this.accumulableTable) {
          this.accumulableTable.color = event.detail.color;
        }
      });
    }

    if (this.accumulableControl && this.accumulableControl.hasAttribute('run')) {
      this.accumulableControl.addEventListener('accumulable-control-run', (/* event */) => {
        if (this.rdkTask) {
          this.rdkTask.running = true;
        }
      });
    }

    if (this.accumulableControl && this.accumulableControl.hasAttribute('pause')) {
      this.accumulableControl.addEventListener('accumulable-control-pause', (/* event */) => {
        if (this.rdkTask) {
          this.rdkTask.running = false;
        }
      });
    }

    if (this.accumulableControl && this.accumulableControl.hasAttribute('reset')) {
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
      if (this.accumulableResponse) {
        this.accumulableResponse.trialTotal = this.rdkTask.trials;
      }
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
        if (this.accumulableTable) {
          this.accumulableTable.correctCount = event.detail.correctCount;
          this.accumulableTable.errorCount = event.detail.errorCount;
          this.accumulableTable.nrCount = event.detail.nrCount;
          this.accumulableTable.correctMeanRT = event.detail.correctMeanRT;
          this.accumulableTable.errorMeanRT = event.detail.errorMeanRT;
          this.accumulableTable.meanRT = event.detail.meanRT;
          this.accumulableTable.correctSDRT = event.detail.correctSDRT;
          this.accumulableTable.errorSDRT = event.detail.errorSDRT;
          this.accumulableTable.sdRT = event.detail.sdRT;
        }

        if (this.ddmModel) {
          this.ddmModel.trial({
            index: event.detail.trial,
            rt: event.detail.rt,
            outcome: event.detail.outcome,
          });
        }

        if (this.ddmFit) {
          this.ddmFit.set({
            meanRT: event.detail.meanRT,
            sdRT: event.detail.sdRT,
            accuracy: event.detail.correctCount
              / (event.detail.correctCount + event.detail.errorCount + event.detail.nrCount),
          });
        }
      });
    }

    if (this.ddmFit) {
      this.ddmFit.addEventListener('ddm-fit-update', (event) => {
        if (this.ddmParameters) {
          this.ddmParameters.a = event.detail.a;
          this.ddmParameters.z = 0.5; // event.detail.z;
          this.ddmParameters.v = event.detail.v;
          this.ddmParameters.t0 = event.detail.t0;
        }

        if (this.ddmModel) {
          this.ddmModel.a = event.detail.a;
          this.ddmModel.z = 0.5; // event.detail.z;
          this.ddmModel.v = event.detail.v;
          this.ddmModel.t0 = event.detail.t0;
        }
      });
    }
  }
}

customElements.define('ddm-example-human', DDMExampleHuman);
