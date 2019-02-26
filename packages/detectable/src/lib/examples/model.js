
import SDTExample from './sdt-example';

/*
  SDTExample_Model element
  <sdt-example-model>
*/
export default class SDTExampleModel extends SDTExample {
  firstUpdated(/* changedProperties */) {
    this.count = 1;

    this.sdtControl = this.querySelector('sdt-control');
    this.rdkTask = this.querySelector('rdk-task');
    this.sdtModel = this.querySelector('sdt-model');
    this.sdtResponse = this.querySelector('sdt-response');
    this.sdtTable = this.querySelector('sdt-table');
    this.rocSpace = this.querySelector('roc-space');

    if (this.sdtControl && this.sdtControl.hasAttribute('trials')) {
      this.sdtControl.addEventListener('sdt-control-trials', (event) => {
        if (this.rdkTask) {
          this.rdkTask.trials = event.detail.trials;
        }
      });
    }

    if (this.sdtControl && this.sdtControl.hasAttribute('coherence')) {
      this.sdtControl.addEventListener('sdt-control-coherence', (event) => {
        if (this.rdkTask) {
          this.rdkTask.coherence = event.detail.coherence;
        }
      });
    }

    if (this.sdtControl && this.sdtControl.hasAttribute('run')) {
      this.sdtControl.addEventListener('sdt-control-run', (/* event */) => {
        if (this.rdkTask) {
          this.rdkTask.running = true;
        }
      });
    }

    if (this.sdtControl && this.sdtControl.hasAttribute('pause')) {
      this.sdtControl.addEventListener('sdt-control-pause', (/* event */) => {
        if (this.rdkTask) {
          this.rdkTask.running = false;
        }
      });
    }

    if (this.sdtControl && this.sdtControl.hasAttribute('reset')) {
      this.sdtControl.addEventListener('sdt-control-reset', (/* event */) => {
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
            this.rocSpace.set(0.5, 0.5, `point${this.count}`);
          } else {
            this.rocSpace.hr = 0.5;
            this.rocSpace.far = 0.5;
          }
        }
      });
    }

    if (this.rdkTask) {
      this.rdkTask.addEventListener('rdk-trial-start', (event) => {
        if (this.sdtResponse) {
          this.sdtResponse.start(event.detail.signal);
        }
      });
    }

    if (this.rdkTask) {
      this.rdkTask.addEventListener('rdk-trial-middle', (event) => {
        if (this.sdtModel) {
          this.sdtModel.trial(event.detail.trial, event.detail.signal);
        }
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
      this.sdtModel.addEventListener('sdt-response', (event) => {
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
          this.rocSpace.hr = SDTExample.hm2hr((event.detail.h), (event.detail.m));
          this.rocSpace.far = SDTExample.facr2far((event.detail.fa), (event.detail.cr));
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
          this.rocSpace.hr = SDTExample.hm2hr((event.detail.h), (event.detail.m));
          this.rocSpace.far = SDTExample.facr2far((event.detail.fa), (event.detail.cr));
        }
      });
    }
  }
}

customElements.define('sdt-example-model', SDTExampleModel);
