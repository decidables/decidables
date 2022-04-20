
// import CPTMath from '@decidables/prospectable-math';

import CPTExample from './cpt-example';

/*
  CPTExampleInteractive element
  <cpt-example-interactive>
*/
export default class CPTExampleHuman extends CPTExample {
  firstUpdated(/* changedProperties */) {
    this.cptFit = this.querySelector('cpt-fit');
    this.prospectableControl = this.querySelector('prospectable-control');
    this.riskyTask = this.querySelector('risky-task');
    this.prospectableResponse = this.querySelector('prospectable-response');
    this.decisionSpace = this.querySelector('decision-space');

    // this.cptCalculation = this.querySelector('cpt-calculation');
    this.cptProbability = this.querySelector('cpt-probability');
    // this.cptSpace = this.querySelector('cpt-space');
    this.cptValue = this.querySelector('cpt-value');

    if (this.cptFit) {
      this.cptFit.addEventListener('cpt-fit-update', (event) => {
        if (this.cptProbability) {
          this.cptProbability.g = event.detail.g;
        }

        if (this.cptValue) {
          this.cptValue.a = event.detail.a;
          this.cptValue.l = event.detail.l;
        }

        if (this.decisionSpace) {
          this.decisionSpace.a = event.detail.a;
          this.decisionSpace.l = event.detail.l;
          this.decisionSpace.g = event.detail.g;
        }
      });
    }

    if (this.prospectableControl) {
      if (this.prospectableControl.hasAttribute('trials')) {
        this.prospectableControl.addEventListener('prospectable-control-trials', (event) => {
          if (this.riskyTask) {
            this.riskyTask.trials = event.detail.trials;
          }

          if (this.prospectableResponse) {
            this.prospectableResponse.trialTotal = event.detail.trials;
          }
        });
      }

      if (this.prospectableControl.hasAttribute('duration')) {
        this.prospectableControl.addEventListener('prospectable-control-duration', (event) => {
          if (this.riskyTask) {
            this.riskyTask.duration = event.detail.duration;
            this.riskyTask.iti = event.detail.duration;
          }
        });
      }

      if (this.prospectableControl.hasAttribute('run')) {
        this.prospectableControl.addEventListener('prospectable-control-run', (/* event */) => {
          if (this.riskyTask) {
            this.riskyTask.running = true;
          }
        });
      }

      if (this.prospectableControl.hasAttribute('pause')) {
        this.prospectableControl.addEventListener('prospectable-control-pause', (/* event */) => {
          if (this.riskyTask) {
            this.riskyTask.running = false;
          }
        });
      }

      if (this.prospectableControl.hasAttribute('reset')) {
        this.prospectableControl.addEventListener('prospectable-control-reset', (/* event */) => {
          if (this.riskyTask) {
            this.riskyTask.reset();
          }

          if (this.prospectableResponse) {
            this.prospectableResponse.reset();
          }

          if (this.decisionSpace) {
            this.decisionSpace.clear();
          }

          if (this.cptFit) {
            this.cptFit.clear();
          }
        });
      }
    }

    if (this.riskyTask) {
      if (this.prospectableResponse) {
        this.prospectableResponse.trialTotal = this.riskyTask.trials;
      }

      this.riskyTask.addEventListener('decision-trial-start', (event) => {
        if (this.prospectableResponse) {
          this.prospectableResponse.start(
            event.detail.xl,
            event.detail.xw,
            event.detail.pw,
            event.detail.xs,
            event.detail.gamblePayoff,
            event.detail.surePayoff,
            event.detail.better,
            event.detail.trial,
          );
        }
      });

      this.riskyTask.addEventListener('decision-trial-end', (/* event */) => {
        if (this.prospectableResponse) {
          this.prospectableResponse.stop();
        }
      });

      this.riskyTask.addEventListener('decision-block-end', (/* event */) => {
        if (this.prospectableControl) {
          this.prospectableControl.complete();
        }
      });
    }

    if (this.prospectableResponse) {
      this.prospectableResponse.addEventListener('prospectable-response', (event) => {
        if (this.decisionSpace) {
          this.decisionSpace.set(
            event.detail.xw,
            event.detail.pw,
            event.detail.xs,
            event.detail.response,
            event.detail.trial.toString(),
            event.detail.trial.toString(),
          );
        }

        if (this.cptFit) {
          this.cptFit.set(
            event.detail.xl,
            event.detail.xw,
            event.detail.pw,
            event.detail.xs,
            event.detail.response,
            event.detail.trial.toString(),
            event.detail.trial.toString(),
          );
        }
      });
    }
  }
}

customElements.define('cpt-example-human', CPTExampleHuman);
