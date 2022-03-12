
import SDTMath from '@decidables/detectable-math';

import SDTExample from './sdt-example';

/*
  SDTExample_Model element
  <sdt-example-model>
*/
export default class SDTExampleModel extends SDTExample {
  firstUpdated(/* changedProperties */) {
    this.count = 1;

    this.sdtControl = this.querySelector('detectable-control');
    this.rdkTask = this.querySelector('rdk-task');
    this.sdtModel = this.querySelector('sdt-model');
    this.sdtResponse = this.querySelector('detectable-response');
    this.sdtTable = this.querySelector('detectable-table');
    this.rocSpace = this.querySelector('roc-space');

    if (this.sdtControl && this.sdtControl.hasAttribute('color')) {
      this.sdtControl.addEventListener('detectable-control-color', (event) => {
        if (this.sdtModel) {
          this.sdtModel.color = event.detail.color;
        }

        if (this.sdtTable) {
          this.sdtTable.color = event.detail.color;
        }
      });
    }

    if (this.sdtControl && this.sdtControl.hasAttribute('duration')) {
      this.sdtControl.addEventListener('detectable-control-duration', (event) => {
        if (this.rdkTask) {
          this.rdkTask.duration = event.detail.duration;
          this.rdkTask.wait = event.detail.duration;
          this.rdkTask.iti = event.detail.duration;
        }
      });
    }

    if (this.sdtControl && this.sdtControl.hasAttribute('trials')) {
      this.sdtControl.addEventListener('detectable-control-trials', (event) => {
        if (this.rdkTask) {
          this.rdkTask.trials = event.detail.trials;
        }

        if (this.sdtResponse) {
          this.sdtResponse.trialTotal = event.detail.trials;
        }
      });
    }

    if (this.sdtControl && this.sdtControl.hasAttribute('coherence')) {
      this.sdtControl.addEventListener('detectable-control-coherence', (event) => {
        if (this.rdkTask) {
          this.rdkTask.coherence = event.detail.coherence;
        }
      });
    }

    if (this.sdtControl && this.sdtControl.hasAttribute('run')) {
      this.sdtControl.addEventListener('detectable-control-run', (/* event */) => {
        if (this.rdkTask) {
          this.rdkTask.running = true;
        }
        if (this.sdtModel) {
          this.sdtModel.resumeTrial();
        }
      });
    }

    if (this.sdtControl && this.sdtControl.hasAttribute('pause')) {
      this.sdtControl.addEventListener('detectable-control-pause', (/* event */) => {
        if (this.rdkTask) {
          this.rdkTask.running = false;
        }
        if (this.sdtModel) {
          this.sdtModel.pauseTrial();
        }
      });
    }

    if (this.sdtControl && this.sdtControl.hasAttribute('reset')) {
      this.sdtControl.addEventListener('detectable-control-reset', (/* event */) => {
        if (this.rdkTask) {
          this.rdkTask.reset();
        }

        if (this.sdtResponse) {
          this.sdtResponse.reset();
        }

        if (this.sdtModel) {
          this.sdtModel.reset();
        }

        if (this.sdtTable) {
          this.sdtTable.h = 0;
          this.sdtTable.m = 0;
          this.sdtTable.fa = 0;
          this.sdtTable.cr = 0;
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
      if (this.sdtResponse) {
        this.sdtResponse.trialTotal = this.rdkTask.trials;
      }
    }

    if (this.rdkTask) {
      this.rdkTask.addEventListener('rdk-trial-start', (event) => {
        if (this.sdtResponse) {
          this.sdtResponse.start(event.detail.signal, event.detail.trial);
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
        if (this.sdtResponse) {
          this.sdtResponse.stop();
        }
      });
    }

    if (this.rdkTask) {
      this.rdkTask.addEventListener('rdk-block-end', (/* event */) => {
        if (this.sdtControl) {
          this.sdtControl.complete();
        }
      });
    }

    if (this.sdtModel) {
      this.sdtModel.addEventListener('detectable-response', (event) => {
        if (this.sdtResponse) {
          this.sdtResponse.responded(event.detail.response);
        }

        if (this.sdtTable) {
          this.sdtTable.h = event.detail.h;
          this.sdtTable.m = event.detail.m;
          this.sdtTable.fa = event.detail.fa;
          this.sdtTable.cr = event.detail.cr;
        }

        if (this.rocSpace) {
          this.rocSpace.hr = SDTMath.hM2Hr((event.detail.h), (event.detail.m));
          this.rocSpace.far = SDTMath.faCr2Far((event.detail.fa), (event.detail.cr));
        }
      });
    }

    if (this.sdtModel) {
      this.sdtModel.addEventListener('sdt-model-change', (event) => {
        if (this.sdtTable) {
          this.sdtTable.h = event.detail.h;
          this.sdtTable.m = event.detail.m;
          this.sdtTable.fa = event.detail.fa;
          this.sdtTable.cr = event.detail.cr;
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
