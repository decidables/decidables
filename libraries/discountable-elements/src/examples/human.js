
import HTDMath from '@decidables/discountable-math';

import HTDExample from './htd-example';

/*
  HTDExampleHuman element
  <htd-example-human>
*/
export default class HTDExampleHuman extends HTDExample {
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

      k: {
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

    this.k = HTDMath.k.DEFAULT;

    this.discountableControl = null;
    this.itcTask = null;
    this.discountableResponse = null;
    this.htdFit = null;
    this.htdParameters = null;
    this.htdCurves = null;
  }

  connectedCallback() {
    super.connectedCallback();

    this.discountableControl = this.querySelector('discountable-control');
    this.itcTask = this.querySelector('itc-task');
    this.discountableResponse = this.querySelector('discountable-response');

    this.htdFit = this.querySelector('htd-fit');
    this.htdParameters = this.querySelector('htd-parameters');
    this.htdCurves = this.querySelector('htd-curves');

    if (this.discountableControl) {
      this.discountableControl.addEventListener('discountable-control-trials', (event) => {
        this.trials = event.detail.trials;
      });

      this.discountableControl.addEventListener('discountable-control-duration', (event) => {
        this.duration = event.detail.duration;
      });

      this.discountableControl.addEventListener('discountable-control-run', (/* event */) => {
        if (this.itcTask) {
          this.itcTask.running = true;
        }
      });

      this.discountableControl.addEventListener('discountable-control-pause', (/* event */) => {
        if (this.itcTask) {
          this.itcTask.running = false;
        }
      });

      this.discountableControl.addEventListener('discountable-control-reset', (/* event */) => {
        if (this.itcTask) {
          this.itcTask.reset();
        }

        if (this.discountableResponse) {
          this.discountableResponse.reset();
        }

        if (this.htdFit) {
          this.htdFit.clear();
        }

        if (this.htdCurves) {
          this.htdCurves.clearOptions();
        }
      });
    }

    if (this.itcTask) {
      this.itcTask.addEventListener('itc-trial-start', (event) => {
        if (this.discountableResponse) {
          this.discountableResponse.start(
            event.detail.as,
            event.detail.ds,
            event.detail.al,
            event.detail.dl,
            event.detail.trial,
          );
        }

        if (this.htdCurves) {
          this.htdCurves.setOption(
            event.detail.as,
            event.detail.ds,
            'smaller-sooner',
            's',
          );
          this.htdCurves.setOption(
            event.detail.al,
            event.detail.dl,
            'larger-later',
            'l',
          );
        }
      });

      this.itcTask.addEventListener('itc-trial-end', (/* event */) => {
        if (this.discountableResponse) {
          this.discountableResponse.stop();
        }

        if (this.htdCurves) {
          this.htdCurves.removeOption('smaller-sooner');
          this.htdCurves.removeOption('larger-later');
        }
      });

      this.itcTask.addEventListener('itc-block-end', (/* event */) => {
        if (this.discountableControl) {
          this.discountableControl.complete();
        }
      });
    }

    if (this.discountableResponse) {
      this.discountableResponse.addEventListener('discountable-response', (event) => {
        if (this.htdFit) {
          this.htdFit.set(
            event.detail.as,
            event.detail.ds,
            event.detail.al,
            event.detail.dl,
            event.detail.response,
            event.detail.trial.toString(),
            event.detail.trial.toString(),
          );
        }
      });
    }

    if (this.htdFit) {
      this.htdFit.addEventListener('htd-fit-update', (event) => {
        this.k = event.detail.k;
      });
    }
  }

  update(changedProperties) {
    super.update(changedProperties);

    if (this.discountableControl) {
      this.discountableControl.trials = (this.discountableControl.trials != null)
        ? this.trials
        : undefined;
      this.discountableControl.duration = (this.discountableControl.duration != null)
        ? this.duration
        : undefined;
    }

    if (this.discountableResponse) {
      this.discountableResponse.trialTotal = this.trials;
    }

    if (this.itcTask) {
      this.itcTask.duration = this.duration;
      this.itcTask.iti = this.duration;
      this.itcTask.trials = this.trials;
    }

    if (this.htdCurves) {
      this.htdCurves.k = this.k;
    }

    if (this.htdParameters) {
      this.htdParameters.k = (this.htdParameters.k != null)
        ? this.k
        : undefined;
    }
  }
}

customElements.define('htd-example-human', HTDExampleHuman);
