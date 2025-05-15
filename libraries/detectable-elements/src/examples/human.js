
import SDTMath from '@decidables/detectable-math';

import SDTExample from './sdt-example';

/*
  SDTExampleHuman element
  <sdt-example-human>
*/
export default class SDTExampleHuman extends SDTExample {
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
      payoff: {
        attribute: 'payoff',
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

      d: {
        attribute: false,
        type: Number,
        reflect: false,
      },
      c: {
        attribute: false,
        type: Number,
        reflect: false,
      },
      s: {
        attribute: false,
        type: Number,
        reflect: false,
      },
    };
  }

  constructor() {
    super();

    this.trials = undefined;
    this.duration = undefined;
    this.coherence = undefined;
    this.payoff = undefined;

    this.h = 0;
    this.m = 0;
    this.fa = 0;
    this.cr = 0;

    this.hr = 0.5;
    this.far = 0.5;

    this.d = 0;
    this.c = 0;
    this.s = SDTMath.s.DEFAULT;

    this.count = 0;

    this.detectableControl = null;
    this.detectableResponse = null;
    this.detectableTable = null;
    this.rdkTask = null;
    this.rocSpace = null;
    this.sdtModel = null;
  }

  connectedCallback() {
    super.connectedCallback();

    this.count = 1;

    this.detectableControl = this.querySelector('detectable-control');
    this.detectableResponse = this.querySelector('detectable-response');
    this.detectableTable = this.querySelector('detectable-table');
    this.rdkTask = this.querySelector('rdk-task');
    this.rocSpace = this.querySelector('roc-space');
    this.sdtModel = this.querySelector('sdt-model');

    if (this.rocSpace) {
      if (this.rocSpace.hasAttribute('history')) {
        this.rocSpace.set(0.5, 0.5, 'default', this.count);
      }
    }

    if (this.detectableControl) {
      this.detectableControl.addEventListener('detectable-control-trials', (event) => {
        this.trials = event.detail.trials;
      });

      this.detectableControl.addEventListener('detectable-control-duration', (event) => {
        this.duration = event.detail.duration;
      });

      this.detectableControl.addEventListener('detectable-control-coherence', (event) => {
        this.coherence = event.detail.coherence;
      });

      this.detectableControl.addEventListener('detectable-control-payoff', (event) => {
        this.payoff = event.detail.payoff;
      });

      this.detectableControl.addEventListener('detectable-control-run', (/* event */) => {
        if (this.rdkTask) {
          this.rdkTask.running = true;
        }
      });

      this.detectableControl.addEventListener('detectable-control-pause', (/* event */) => {
        if (this.rdkTask) {
          this.rdkTask.running = false;
        }
      });

      this.detectableControl.addEventListener('detectable-control-reset', (/* event */) => {
        if (this.rdkTask) {
          this.rdkTask.reset();
        }

        if (this.detectableResponse) {
          this.detectableResponse.reset();
        }

        this.h = 0;
        this.m = 0;
        this.fa = 0;
        this.cr = 0;

        this.hr = 0.5;
        this.far = 0.5;

        this.d = 0;
        this.c = 0;

        if (this.rocSpace && this.rocSpace.hasAttribute('history')) {
          this.count += 1;
          this.rocSpace.set(0.5, 0.5, `point${this.count}`, this.count);
        }
      });
    }

    if (this.rdkTask) {
      this.rdkTask.addEventListener('rdk-trial-start', (event) => {
        if (this.detectableResponse) {
          this.detectableResponse.start(event.detail.signal, event.detail.trial);
        }
      });

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

    if (this.detectableResponse) {
      this.detectableResponse.addEventListener('detectable-response', (event) => {
        this.h = event.detail.h;
        this.m = event.detail.m;
        this.fa = event.detail.fa;
        this.cr = event.detail.cr;

        this.hr = SDTMath.hM2Hr((this.h + 1), (this.m + 1));
        this.far = SDTMath.faCr2Far((this.fa + 1), (this.cr + 1));

        this.d = SDTMath.hrFar2D(this.hr, this.far);
        this.c = SDTMath.hrFar2C(this.hr, this.far);

        if (this.rocSpace && this.rocSpace.hasAttribute('history')) {
          this.rocSpace.set(this.hr, this.far, (this.count === 1) ? 'default' : `point${this.count}`, this.count);
        }
      });
    }
  }

  update(changedProperties) {
    super.update(changedProperties);

    if (this.detectableControl) {
      this.detectableControl.trials = (this.detectableControl.trials != null)
        ? this.trials
        : undefined;
      this.detectableControl.duration = (this.detectableControl.duration != null)
        ? this.duration
        : undefined;
      this.detectableControl.coherence = (this.detectableControl.coherence != null)
        ? this.coherence
        : undefined;
      this.detectableControl.payoff = (this.detectableControl.payoff != null)
        ? this.payoff
        : undefined;
    }

    if (this.detectableResponse) {
      this.detectableResponse.trialTotal = this.trials;

      this.detectableResponse.hPayoff = this.payoff;
      this.detectableResponse.mPayoff = -this.payoff + 0; // Get rid of -0
      this.detectableResponse.faPayoff = -(100 - this.payoff) + 0; // Get rid of -0
      this.detectableResponse.crPayoff = (100 - this.payoff);
    }

    if (this.detectableTable) {
      this.detectableTable.h = this.h;
      this.detectableTable.m = this.m;
      this.detectableTable.cr = this.cr;
      this.detectableTable.fa = this.fa;

      this.detectableTable.hPayoff = this.payoff;
      this.detectableTable.mPayoff = -this.payoff + 0; // Get rid of -0
      this.detectableTable.faPayoff = -(100 - this.payoff) + 0; // Get rid of -0
      this.detectableTable.crPayoff = (100 - this.payoff);
    }

    if (this.rdkTask) {
      this.rdkTask.trials = this.trials;

      this.rdkTask.duration = this.duration;
      this.rdkTask.wait = (this.duration === Infinity) ? 0 : this.duration;
      this.rdkTask.iti = (this.duration === Infinity) ? 0 : this.duration;

      this.rdkTask.coherence = this.coherence;
    }

    if (this.rocSpace && !this.rocSpace.hasAttribute('history')) {
      this.rocSpace.hr = this.hr;
      this.rocSpace.far = this.far;
    }

    if (this.sdtModel) {
      this.sdtModel.d = this.d;
      this.sdtModel.c = this.c;
      this.sdtModel.s = this.s;
    }
  }
}

customElements.define('sdt-example-human', SDTExampleHuman);
