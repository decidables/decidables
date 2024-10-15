
// import DDMMath from '@decidables/accumulable-math';

import DDMExample from './ddm-example';

/*
  DDMExampleHuman element
  <ddm-example-human>
*/
export default class DDMExampleHuman extends DDMExample {
  connectedCallback() {
    super.connectedCallback();

    this.count = 1;

    this.accumulableControl = this.querySelector('accumulable-control');
    this.rdkTask = this.querySelector('rdk-2afc-task');
    this.accumulableResponse = this.querySelector('accumulable-response');
    this.accumulableTable = this.querySelector('accumulable-table');
    this.ddmModel = this.querySelector('ddm-model');

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
          this.accumulableTable.accuracy = NaN;
          this.accumulableTable.correctMeanRT = NaN;
          this.accumulableTable.errorMeanRT = NaN;
          this.accumulableTable.meanRT = NaN;
          this.accumulableTable.correctSDRT = NaN;
          this.accumulableTable.errorSDRT = NaN;
          this.accumulableTable.sdRT = NaN;
        }

        if (this.ddmModel) {
          // this.sdtModel.d = 0;
          // this.sdtModel.c = 0;
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
          this.accumulableTable.correctCount = event.detail.correct;
          this.accumulableTable.errorCount = event.detail.error;
          this.accumulableTable.accuracy = event.detail.correct
            / (event.detail.correct + event.detail.error + event.detail.nr);
          this.accumulableTable.correctMeanRT = event.detail.meanCorrectRT;
          this.accumulableTable.errorMeanRT = event.detail.meanErrorRT;
          this.accumulableTable.meanRT = event.detail.meanRT;
          this.accumulableTable.correctSDRT = event.detail.sdCorrectRT;
          this.accumulableTable.errorSDRT = event.detail.sdErrorRT;
          this.accumulableTable.sdRT = event.detail.sdRT;
        }

        // const newhr = SDTMath.hM2Hr((event.detail.h + 1), (event.detail.m + 1));
        // const newfar = SDTMath.faCr2Far((event.detail.fa + 1), (event.detail.cr + 1));

        if (this.ddmModel) {
          // this.sdtModel.d = SDTMath.hrFar2D(newhr, newfar);
          // this.sdtModel.c = SDTMath.hrFar2C(newhr, newfar);
        }
      });
    }
  }
}

customElements.define('ddm-example-human', DDMExampleHuman);
