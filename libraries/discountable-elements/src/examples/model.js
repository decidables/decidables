
import HTDMath from '@decidables/discountable-math';

import HTDExample from './htd-example';

/*
  HTDExampleModel element
  <htd-example-model>
*/
export default class HTDExampleModel extends HTDExample {
  static get properties() {
    return {
      k: {
        attribute: 'k',
        type: Number,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    this.k = 0.2;

    this.discountableControl = null;
    this.discountableResponse = null;
    this.htdCalculation = null;
    this.htdCurves = null;
    this.itcTask = null;
  }

  connectedCallback() {
    super.connectedCallback();

    this.discountableControl = this.querySelector('discountable-control');
    this.discountableResponse = this.querySelector('discountable-response');
    this.htdCalculation = this.querySelector('htd-calculation');
    this.htdCurves = this.querySelector('htd-curves');
    this.itcTask = this.querySelector('itc-task');

    if (this.discountableControl) {
      if (this.discountableControl.hasAttribute('trials')) {
        this.discountableControl.addEventListener('discountable-control-trials', (event) => {
          if (this.itcTask) {
            this.itcTask.trials = event.detail.trials;
          }

          if (this.discountableResponse) {
            this.discountableResponse.trialTotal = event.detail.trials;
          }
        });
      }

      if (this.discountableControl.hasAttribute('duration')) {
        this.discountableControl.addEventListener('discountable-control-duration', (event) => {
          if (this.itcTask) {
            this.itcTask.duration = event.detail.duration;
            this.itcTask.iti = event.detail.duration;
          }
        });
      }

      if (this.discountableControl.hasAttribute('run')) {
        this.discountableControl.addEventListener('discountable-control-run', (/* event */) => {
          if (this.htdCurves) {
            this.htdCurves.resumeTrial();
          }

          if (this.itcTask) {
            this.itcTask.running = true;
          }
        });
      }

      if (this.discountableControl.hasAttribute('pause')) {
        this.discountableControl.addEventListener('discountable-control-pause', (/* event */) => {
          if (this.htdCurves) {
            this.htdCurves.pauseTrial();
          }

          if (this.itcTask) {
            this.itcTask.running = false;
          }
        });
      }

      if (this.discountableControl.hasAttribute('reset')) {
        this.discountableControl.addEventListener('discountable-control-reset', (/* event */) => {
          if (this.discountableResponse) {
            this.discountableResponse.reset();
          }

          if (this.htdCurves) {
            this.htdCurves.clearOptions();
          }

          if (this.itcTask) {
            this.itcTask.reset();
          }
        });
      }
    }

    if (this.htdCurves) {
      this.htdCurves.addEventListener('htd-curves-change', (event) => {
        this.k = event.detail.k;
      });

      this.htdCurves.addEventListener('discountable-response', (event) => {
        if (this.discountableResponse) {
          this.discountableResponse.responded(event.detail.response);
        }
      });
    }

    if (this.itcTask) {
      if (this.discountableResponse) {
        this.discountableResponse.trialTotal = this.itcTask.trials;
      }

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

        const vs = HTDMath.adk2v(event.detail.as, event.detail.ds, this.k);
        const vl = HTDMath.adk2v(event.detail.al, event.detail.dl, this.k);

        const response = (vs > vl)
          ? 'first'
          : 'second';

        if (this.htdCurves) {
          this.htdCurves.trial(
            event.detail.as,
            event.detail.ds,
            event.detail.al,
            event.detail.dl,
            event.detail.trial,
            response,
          );
        }
      });

      this.itcTask.addEventListener('itc-trial-end', (/* event */) => {
        if (this.discountableResponse) {
          this.discountableResponse.stop();
        }
      });

      this.itcTask.addEventListener('itc-block-end', (/* event */) => {
        if (this.discountableControl) {
          this.discountableControl.complete();
        }
      });
    }

    this.requestUpdate();
  }

  update(changedProperties) {
    super.update(changedProperties);

    if (this.htdCalculation) {
      this.htdCalculation.k = this.k;
    }

    if (this.htdCurves) {
      this.htdCurves.k = this.k;
    }
  }
}

customElements.define('htd-example-model', HTDExampleModel);
