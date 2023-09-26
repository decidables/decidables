
// import HTDMath from '@decidables/discountable-math';

import HTDExample from './htd-example';

/*
  HTDExampleHuman element
  <htd-example-human>
*/
export default class HTDExampleHuman extends HTDExample {
  firstUpdated(/* changedProperties */) {
    this.discountableControl = this.querySelector('discountable-control');
    this.itcTask = this.querySelector('itc-task');
    this.discountableResponse = this.querySelector('discountable-response');

    this.htdCurves = this.querySelector('htd-curves');

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
          if (this.itcTask) {
            this.itcTask.running = true;
          }
        });
      }

      if (this.discountableControl.hasAttribute('pause')) {
        this.discountableControl.addEventListener('discountable-control-pause', (/* event */) => {
          if (this.itcTask) {
            this.itcTask.running = false;
          }
        });
      }

      if (this.discountableControl.hasAttribute('reset')) {
        this.discountableControl.addEventListener('discountable-control-reset', (/* event */) => {
          if (this.itcTask) {
            this.itcTask.reset();
          }

          if (this.discountableResponse) {
            this.discountableResponse.reset();
          }

          if (this.htdCurves) {
            this.htdCurves.clear();
          }
        });
      }
    }

    if (this.itcTask) {
      if (this.discountableResponse) {
        this.discountableResponse.trialTotal = this.itcTask.trials;
      }

      this.itcTask.addEventListener('itc-trial-start', (event) => {
        if (this.discountableResponse) {
          this.discountableResponse.start(
            event.detail.a1,
            event.detail.d1,
            event.detail.a2,
            event.detail.d2,
            event.detail.trial,
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

    if (this.discountableResponse) {
      this.discountableResponse.addEventListener('discountable-response', (/* event */) => {
        if (this.htdCurves) {
          // this.htdCurves.set(
          //   event.detail.xw,
          //   event.detail.pw,
          //   event.detail.xs,
          //   event.detail.response,
          //   event.detail.trial.toString(),
          //   event.detail.trial.toString(),
          // );
        }
      });
    }
  }
}

customElements.define('htd-example-human', HTDExampleHuman);
