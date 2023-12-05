
import SDTMath from '@decidables/detectable-math';

import SDTExample from './sdt-example';

/*
  SDTExample_Human element
  <sdt-example-human>
*/
export default class SDTExampleHuman extends SDTExample {
  connectedCallback() {
    super.connectedCallback();

    this.count = 1;

    this.detectableControl = this.querySelector('detectable-control');
    this.rdkTask = this.querySelector('rdk-task');
    this.detectableResponse = this.querySelector('detectable-response');
    this.detectableTable = this.querySelector('detectable-table');
    this.rocSpace = this.querySelector('roc-space');
    this.sdtModel = this.querySelector('sdt-model');

    if (this.rocSpace) {
      if (this.rocSpace.hasAttribute('history')) {
        this.rocSpace.set(0.5, 0.5, 'default', this.count);
      }
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

    if (this.detectableControl && this.detectableControl.hasAttribute('duration')) {
      this.detectableControl.addEventListener('detectable-control-duration', (event) => {
        if (this.rdkTask) {
          this.rdkTask.duration = event.detail.duration;
          this.rdkTask.wait = event.detail.duration;
          this.rdkTask.iti = event.detail.duration;
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

    if (this.detectableControl && this.detectableControl.hasAttribute('payoff')) {
      this.detectableControl.addEventListener('detectable-control-payoff', (event) => {
        if (this.detectableResponse) {
          this.detectableResponse.hPayoff = event.detail.payoff;
          this.detectableResponse.mPayoff = -event.detail.payoff + 0; // Get rid of -0
          this.detectableResponse.faPayoff = -(100 - event.detail.payoff) + 0; // Get rid of -0
          this.detectableResponse.crPayoff = (100 - event.detail.payoff);
        }
        if (this.detectableTable) {
          this.detectableTable.hPayoff = event.detail.payoff;
          this.detectableTable.mPayoff = -event.detail.payoff + 0; // Get rid of -0
          this.detectableTable.faPayoff = -(100 - event.detail.payoff) + 0; // Get rid of -0
          this.detectableTable.crPayoff = (100 - event.detail.payoff);
        }
      });
    }

    if (this.detectableControl && this.detectableControl.hasAttribute('run')) {
      this.detectableControl.addEventListener('detectable-control-run', (/* event */) => {
        if (this.rdkTask) {
          this.rdkTask.running = true;
        }
      });
    }

    if (this.detectableControl && this.detectableControl.hasAttribute('pause')) {
      this.detectableControl.addEventListener('detectable-control-pause', (/* event */) => {
        if (this.rdkTask) {
          this.rdkTask.running = false;
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

        if (this.detectableTable) {
          this.detectableTable.h = 0;
          this.detectableTable.m = 0;
          this.detectableTable.fa = 0;
          this.detectableTable.cr = 0;
        }

        if (this.rocSpace) {
          if (this.rocSpace.hasAttribute('history')) {
            this.count += 1;
            this.rocSpace.set(0.5, 0.5, `point${this.count}`, this.count);
          } else {
            this.rocSpace.hr = 0.5;
            this.rocSpace.far = 0.5;
          }
        }

        if (this.sdtModel) {
          this.sdtModel.d = 0;
          this.sdtModel.c = 0;
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

    if (this.detectableResponse) {
      this.detectableResponse.addEventListener('detectable-response', (event) => {
        if (this.detectableTable) {
          this.detectableTable.h = event.detail.h;
          this.detectableTable.m = event.detail.m;
          this.detectableTable.fa = event.detail.fa;
          this.detectableTable.cr = event.detail.cr;
        }

        const newhr = SDTMath.hM2Hr((event.detail.h + 1), (event.detail.m + 1));
        const newfar = SDTMath.faCr2Far((event.detail.fa + 1), (event.detail.cr + 1));

        if (this.rocSpace) {
          if (this.rocSpace.hasAttribute('history')) {
            this.rocSpace.set(newhr, newfar, (this.count === 1) ? 'default' : `point${this.count}`, this.count);
          } else {
            this.rocSpace.hr = newhr;
            this.rocSpace.far = newfar;
          }
        }

        if (this.sdtModel) {
          this.sdtModel.d = SDTMath.hrFar2D(newhr, newfar);
          this.sdtModel.c = SDTMath.hrFar2C(newhr, newfar);
        }
      });
    }
  }
}

customElements.define('sdt-example-human', SDTExampleHuman);
