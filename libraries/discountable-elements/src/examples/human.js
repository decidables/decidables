
// import HTDMath from '@decidables/discountable-math';

import HTDExample from './htd-example';

/*
  HTDExampleHuman element
  <htd-example-human>
*/
export default class HTDExampleHuman extends HTDExample {
  connectedCallback() {
    super.connectedCallback();

    this.discountableControl = this.querySelector('discountable-control');
    this.itcTask = this.querySelector('itc-task');
    this.discountableResponse = this.querySelector('discountable-response');

    this.htdFit = this.querySelector('htd-fit');
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

          if (this.htdFit) {
            this.htdFit.clear();
          }

          if (this.htdCurves) {
            this.htdCurves.clearOptions();
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
        if (this.htdCurves) {
          this.htdCurves.k = event.detail.k;
        }
      });
    }
  }
}

customElements.define('htd-example-human', HTDExampleHuman);
