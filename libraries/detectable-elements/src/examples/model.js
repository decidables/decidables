
import SDTMath from '@decidables/detectable-math';

import SDTExample from './sdt-example';

/*
  SDTExample_Model element
  <sdt-example-model>
*/
export default class SDTExampleModel extends SDTExample {
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

      d: {
        attribute: 'd',
        type: Number,
        reflect: true,
      },
      c: {
        attribute: 'c',
        type: Number,
        reflect: true,
      },
      s: {
        attribute: 's',
        type: Number,
        reflect: true,
      },

      h: {
        attribute: false,
        type: Number,
        reflect: false,
      },
      m: {
        attribute: false,
        type: Number,
        reflect: false,
      },
      fa: {
        attribute: false,
        type: Number,
        reflect: false,
      },
      cr: {
        attribute: false,
        type: Number,
        reflect: false,
      },

      hr: {
        attribute: false,
        type: Number,
        reflect: false,
      },
      far: {
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
    this.color = 'all';

    this.d = SDTMath.s.DEFAULT;
    this.c = SDTMath.s.DEFAULT;
    this.s = SDTMath.s.DEFAULT;

    this.h = 0;
    this.m = 0;
    this.fa = 0;
    this.cr = 0;

    this.hr = 0.5;
    this.far = 0.5;

    this.detectableControl = null;
    this.detectableResponse = null;
    this.detectableTable = null;
    this.rdkTask = null;
    this.rocSpace = null;
    this.sdtModel = null;
    this.sdtParameters = null;
  }

  connectedCallback() {
    super.connectedCallback();

    this.detectableControl = this.querySelector('detectable-control');
    this.detectableResponse = this.querySelector('detectable-response');
    this.detectableTable = this.querySelector('detectable-table');
    this.rdkTask = this.querySelector('rdk-task');
    this.rocSpace = this.querySelector('roc-space');
    this.sdtModel = this.querySelector('sdt-model');
    this.sdtParameters = this.querySelector('sdt-parameters');

    if (this.detectableControl) {
      this.detectableControl.addEventListener('detectable-control-trials', (event) => {
        this.trials = event.detail.trials;
      });

      this.detectableControl.addEventListener('detectable-control-coherence', (event) => {
        this.coherence = event.detail.coherence;
      });

      this.detectableControl.addEventListener('detectable-control-duration', (event) => {
        this.duration = event.detail.duration;
      });

      this.detectableControl.addEventListener('detectable-control-color', (event) => {
        this.color = event.detail.color;
      });

      this.detectableControl.addEventListener('detectable-control-run', (/* event */) => {
        if (this.rdkTask) {
          this.rdkTask.running = true;
        }
        if (this.sdtModel) {
          this.sdtModel.resumeTrial();
        }
      });

      this.detectableControl.addEventListener('detectable-control-pause', (/* event */) => {
        if (this.rdkTask) {
          this.rdkTask.running = false;
        }
        if (this.sdtModel) {
          this.sdtModel.pauseTrial();
        }
      });

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

        this.h = 0;
        this.m = 0;
        this.fa = 0;
        this.cr = 0;

        this.hr = 0.5;
        this.far = 0.5;
      });
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

      // this.rdkTask.addEventListener('rdk-trial-middle', (/* event */) => {
      //   if (this.sdtModel) {
      //     this.sdtModel.trial(event.detail.trial, event.detail.signal);
      //   }
      // });

      this.rdkTask.addEventListener('rdk-trial-end', (/* event */) => {
        if (this.detectableResponse) {
          this.detectableResponse.stop();
        }
      });

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

        this.h = event.detail.h;
        this.m = event.detail.m;
        this.fa = event.detail.fa;
        this.cr = event.detail.cr;

        this.hr = SDTMath.hM2Hr(this.h, this.m);
        this.far = SDTMath.faCr2Far(this.fa, this.cr);
      });

      this.sdtModel.addEventListener('sdt-model-change', (event) => {
        this.d = event.detail.d;
        this.c = event.detail.c;
        this.s = event.detail.s;

        this.h = event.detail.h;
        this.m = event.detail.m;
        this.fa = event.detail.fa;
        this.cr = event.detail.cr;

        this.hr = SDTMath.hM2Hr(this.h, this.m);
        this.far = SDTMath.faCr2Far(this.fa, this.cr);
      });
    }

    if (this.sdtParameters) {
      this.sdtParameters.addEventListener('sdt-parameters-d', (event) => {
        this.d = event.detail.d;
      });

      this.sdtParameters.addEventListener('sdt-parameters-c', (event) => {
        this.c = event.detail.c;
      });

      this.sdtParameters.addEventListener('sdt-parameters-s', (event) => {
        this.s = event.detail.s;
      });
    }
  }

  update(changedProperties) {
    super.update(changedProperties);

    if (this.detectableControl) {
      this.detectableControl.trials = (this.detectableControl.trials !== undefined)
        ? this.trials
        : undefined;
      this.detectableControl.coherence = (this.detectableControl.coherence !== undefined)
        ? this.coherence
        : undefined;
      this.detectableControl.duration = (this.detectableControl.duration !== undefined)
        ? this.duration
        : undefined;
      this.detectableControl.color = (this.detectableControl.color !== undefined)
        ? this.color
        : undefined;
    }

    if (this.detectableResponse) {
      this.detectableResponse.trialTotal = this.trials;
    }

    if (this.detectableTable) {
      this.detectableTable.color = this.color;

      this.detectableTable.h = this.h;
      this.detectableTable.m = this.m;
      this.detectableTable.cr = this.cr;
      this.detectableTable.fa = this.fa;
    }

    if (this.rdkTask) {
      this.rdkTask.trials = this.trials;

      this.rdkTask.duration = this.duration;
      this.rdkTask.wait = this.duration;
      this.rdkTask.iti = this.duration;

      this.rdkTask.coherence = this.coherence;
    }

    if (this.rocSpace) {
      this.rocSpace.hr = this.hr;
      this.rocSpace.far = this.far;
    }

    if (this.sdtModel) {
      this.sdtModel.color = this.color;

      this.sdtModel.d = this.d;
      this.sdtModel.c = this.c;
      this.sdtModel.s = this.s;
    }

    if (this.sdtParameters) {
      this.sdtParameters.d = (this.sdtParameters.d != null)
        ? this.d
        : undefined;
      this.sdtParameters.c = (this.sdtParameters.c != null)
        ? this.c
        : undefined;
      this.sdtParameters.s = (this.sdtParameters.s != null)
        ? this.s
        : undefined;
    }
  }
}

customElements.define('sdt-example-model', SDTExampleModel);
