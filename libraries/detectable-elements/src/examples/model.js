
import SDTMath from '@decidables/detectable-math';

import SDTExample from './sdt-example';

/*
  SDTExample_Model element
  <sdt-example-model>
*/
export default class SDTExampleModel extends SDTExample {
  firstUpdated(/* changedProperties */) {
    this.count = 1;

    this.detectableControl = this.querySelector('detectable-control');
    this.rdkTask = this.querySelector('rdk-task');
    this.sdtModel = this.querySelector('sdt-model');
    this.detectableResponse = this.querySelector('detectable-response');
    this.detectableTable = this.querySelector('detectable-table');
    this.rocSpace = this.querySelector('roc-space');

    if (this.detectableControl && this.detectableControl.hasAttribute('color')) {
      this.detectableControl.addEventListener('detectable-control-color', (event) => {
        if (this.sdtModel) {
          this.sdtModel.color = event.detail.color;
        }

        if (this.detectableTable) {
          this.detectableTable.color = event.detail.color;
        }
      });
    }

    if (this.detectableControl && this.detectableControl.hasAttribute('duration')) {
      this.detectableControl.addEventListener('detectable-control-duration', (event) => {
        if (this.rdkTask) {
          this.rdkTask.duration = event.detail.duration;
          this.rdkTask.wait = event.detail.duration;
          this.rdkTask.iti = event.detail.duration;
        }
      });
    }

    if (this.detectableControl && this.detectableControl.hasAttribute('trials')) {
      this.detectableControl.addEventListener('detectable-control-trials', (event) => {
        if (this.rdkTask) {
          this.rdkTask.trials = event.detail.trials;
        }

        if (this.detectableResponse) {
          this.detectableResponse.trialTotal = event.detail.trials;
        }
      });
    }

    if (this.detectableControl && this.detectableControl.hasAttribute('coherence')) {
      this.detectableControl.addEventListener('detectable-control-coherence', (event) => {
        if (this.rdkTask) {
          this.rdkTask.coherence = event.detail.coherence;
        }
      });
    }

    if (this.detectableControl && this.detectableControl.hasAttribute('run')) {
      this.detectableControl.addEventListener('detectable-control-run', (/* event */) => {
        if (this.rdkTask) {
          this.rdkTask.running = true;
        }
        if (this.sdtModel) {
          this.sdtModel.resumeTrial();
        }
      });
    }

    if (this.detectableControl && this.detectableControl.hasAttribute('pause')) {
      this.detectableControl.addEventListener('detectable-control-pause', (/* event */) => {
        if (this.rdkTask) {
          this.rdkTask.running = false;
        }
        if (this.sdtModel) {
          this.sdtModel.pauseTrial();
        }
      });
    }

    if (this.detectableControl && this.detectableControl.hasAttribute('reset')) {
      this.detectableControl.addEventListener('detectable-control-reset', (/* event */) => {
        if (this.rdkTask) {
          this.rdkTask.reset();
        }

        if (this.detectableResponse) {
          this.detectableResponse.reset();
        }

        if (this.sdtModel) {
          this.sdtModel.reset();
        }

        if (this.detectableTable) {
          this.detectableTable.h = 0;
          this.detectableTable.m = 0;
          this.detectableTable.fa = 0;
          this.detectableTable.cr = 0;
        }

        if (this.rocSpace) {
          if (this.rocSpace.hasAttribute('history')) {
            this.count += 1;
            this.rocSpace.set(0.5, 0.5, `point${this.count}`, '', 1);
          } else {
            this.rocSpace.hr = 0.5;
            this.rocSpace.far = 0.5;
          }
        }
      });
    }

    if (this.rdkTask) {
      if (this.detectableResponse) {
        this.detectableResponse.trialTotal = this.rdkTask.trials;
      }
    }

    if (this.rdkTask) {
      this.rdkTask.addEventListener('rdk-trial-start', (event) => {
        if (this.detectableResponse) {
          this.detectableResponse.start(event.detail.signal, event.detail.trial);
        }
        if (this.sdtModel) {
          this.sdtModel.trial(
            event.detail.trial,
            event.detail.signal,
            event.detail.duration,
            event.detail.wait,
            event.detail.iti,
          );
        }
      });
    }

    if (this.rdkTask) {
      this.rdkTask.addEventListener('rdk-trial-middle', (/* event */) => {
        // if (this.sdtModel) {
        //   this.sdtModel.trial(event.detail.trial, event.detail.signal);
        // }
      });
    }

    if (this.rdkTask) {
      this.rdkTask.addEventListener('rdk-trial-end', (/* event */) => {
        if (this.detectableResponse) {
          this.detectableResponse.stop();
        }
      });
    }

    if (this.rdkTask) {
      this.rdkTask.addEventListener('rdk-block-end', (/* event */) => {
        if (this.detectableControl) {
          this.detectableControl.complete();
        }
      });
    }

    if (this.sdtModel) {
      this.sdtModel.addEventListener('detectable-response', (event) => {
        if (this.detectableResponse) {
          this.detectableResponse.responded(event.detail.response);
        }

        if (this.detectableTable) {
          this.detectableTable.h = event.detail.h;
          this.detectableTable.m = event.detail.m;
          this.detectableTable.fa = event.detail.fa;
          this.detectableTable.cr = event.detail.cr;
        }

        if (this.rocSpace) {
          this.rocSpace.hr = SDTMath.hM2Hr((event.detail.h), (event.detail.m));
          this.rocSpace.far = SDTMath.faCr2Far((event.detail.fa), (event.detail.cr));
        }
      });
    }

    if (this.sdtModel) {
      this.sdtModel.addEventListener('sdt-model-change', (event) => {
        if (this.detectableTable) {
          this.detectableTable.h = event.detail.h;
          this.detectableTable.m = event.detail.m;
          this.detectableTable.fa = event.detail.fa;
          this.detectableTable.cr = event.detail.cr;
        }

        if (this.rocSpace) {
          this.rocSpace.hr = SDTMath.hM2Hr((event.detail.h), (event.detail.m));
          this.rocSpace.far = SDTMath.faCr2Far((event.detail.fa), (event.detail.cr));
        }
      });
    }
  }
}

customElements.define('sdt-example-model', SDTExampleModel);
