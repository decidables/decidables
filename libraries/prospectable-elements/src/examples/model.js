
import CPTMath from '@decidables/prospectable-math';

import CPTExample from './cpt-example';

/*
  CPTExampleModel element
  <cpt-example-model>
*/
export default class CPTExampleModel extends CPTExample {
  static get properties() {
    return {
      a: {
        attribute: 'alpha',
        type: Number,
        reflect: true,
      },
      l: {
        attribute: 'lambda',
        type: Number,
        reflect: true,
      },
      g: {
        attribute: 'gamma',
        type: Number,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    this.a = 0.8;
    this.l = 1.2;
    this.g = 0.8;
    this.xl = 0;
    this.xw = 20;
    this.pw = 0.5;
    this.xs = 10;

    this.cptCalculation = null;
    this.cptProbability = null;
    this.cptSpace = null;
    this.cptValue = null;
    this.decisionControl = null;
    this.decisionResponse = null;
    this.decisionSpace = null;
    this.decisionTask = null;
  }

  firstUpdated(/* changedProperties */) {
    this.cptCalculation = this.querySelector('cpt-calculation');
    this.cptProbability = this.querySelector('cpt-probability');
    this.cptSpace = this.querySelector('cpt-space');
    this.cptValue = this.querySelector('cpt-value');
    this.decisionControl = this.querySelector('decision-control');
    this.decisionResponse = this.querySelector('decision-response');
    this.decisionSpace = this.querySelector('decision-space');
    this.decisionTask = this.querySelector('decision-task');

    if (this.cptProbability) {
      this.cptProbability.addEventListener('cpt-probability-change', (event) => {
        this.g = event.detail.g;
      });

      this.cptProbability.addEventListener('decision-response', (event) => {
        if (this.decisionResponse) {
          this.decisionResponse.responded(event.detail.response);
        }

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
      });
    }

    if (this.cptValue) {
      this.cptValue.addEventListener('cpt-value-change', (event) => {
        this.a = event.detail.a;
        this.l = event.detail.l;
      });

      if (!this.cptProbability) {
        this.cptValue.addEventListener('decision-response', (event) => {
          if (this.decisionResponse) {
            this.decisionResponse.responded(event.detail.response);
          }

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
        });
      }
    }

    if (this.decisionControl) {
      if (this.decisionControl.hasAttribute('trials')) {
        this.decisionControl.addEventListener('decision-control-trials', (event) => {
          if (this.decisionTask) {
            this.decisionTask.trials = event.detail.trials;
          }

          if (this.decisionResponse) {
            this.decisionResponse.trialTotal = event.detail.trials;
          }
        });
      }

      if (this.decisionControl.hasAttribute('duration')) {
        this.decisionControl.addEventListener('decision-control-duration', (event) => {
          if (this.decisionTask) {
            this.decisionTask.duration = event.detail.duration;
            this.decisionTask.iti = event.detail.duration;
          }
        });
      }

      if (this.decisionControl.hasAttribute('run')) {
        this.decisionControl.addEventListener('decision-control-run', (/* event */) => {
          if (this.cptProbability) {
            this.cptProbability.resumeTrial();
          }

          if (this.cptValue) {
            this.cptValue.resumeTrial();
          }

          if (this.decisionTask) {
            this.decisionTask.running = true;
          }
        });
      }

      if (this.decisionControl.hasAttribute('pause')) {
        this.decisionControl.addEventListener('decision-control-pause', (/* event */) => {
          if (this.cptProbability) {
            this.cptProbability.pauseTrial();
          }

          if (this.cptValue) {
            this.cptValue.pauseTrial();
          }

          if (this.decisionTask) {
            this.decisionTask.running = false;
          }
        });
      }

      if (this.decisionControl.hasAttribute('reset')) {
        this.decisionControl.addEventListener('decision-control-reset', (/* event */) => {
          if (this.cptProbability) {
            this.cptProbability.clear();
          }

          if (this.cptValue) {
            this.cptValue.clear();
          }

          if (this.decisionTask) {
            this.decisionTask.reset();
          }

          if (this.decisionResponse) {
            this.decisionResponse.reset();
          }

          if (this.decisionSpace) {
            this.decisionSpace.clear();
          }
        });
      }
    }

    if (this.decisionTask) {
      if (this.decisionResponse) {
        this.decisionResponse.trialTotal = this.decisionTask.trials;
      }

      this.decisionTask.addEventListener('decision-trial-start', (event) => {
        if (this.decisionResponse) {
          this.decisionResponse.start(
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

        this.vw = CPTMath.xal2v(this.xw, this.a, this.l);
        this.vl = CPTMath.xal2v(this.xl, this.a, this.l);
        this.ww = CPTMath.pg2w(this.pw, this.g);
        this.wl = 1 - this.ww;
        this.vs = CPTMath.xal2v(this.xs, this.a, this.l);
        // Calculate subjective utility
        this.ug = (this.vw * this.ww) + (this.vl * this.wl);
        this.us = this.vs;

        const response = (
          (
            CPTMath.xal2v(event.detail.xw, this.a, this.l)
            * CPTMath.pg2w(event.detail.pw, this.g)
          ) + (
            CPTMath.xal2v(event.detail.xl, this.a, this.l)
            * (1 - CPTMath.pg2w(event.detail.pw, this.g))
          )
        ) > CPTMath.xal2v(event.detail.xs, this.a, this.l)
          ? 'gamble'
          : 'sure';

        if (this.cptProbability) {
          this.cptProbability.trial(
            event.detail.xl,
            event.detail.xw,
            event.detail.pw,
            event.detail.xs,
            event.detail.trial,
            response,
          );
        }

        if (this.cptValue) {
          this.cptValue.trial(
            event.detail.xl,
            event.detail.xw,
            event.detail.pw,
            event.detail.xs,
            event.detail.trial,
            response,
          );
        }
      });

      this.decisionTask.addEventListener('decision-trial-end', (/* event */) => {
        if (this.decisionResponse) {
          this.decisionResponse.stop();
        }
      });

      this.decisionTask.addEventListener('decision-block-end', (/* event */) => {
        if (this.decisionControl) {
          this.decisionControl.complete();
        }
      });
    }

    this.requestUpdate();
  }

  update(changedProperties) {
    super.update(changedProperties);

    if (this.cptCalculation) {
      this.cptCalculation.a = this.a;
      this.cptCalculation.l = this.l;
      this.cptCalculation.g = this.g;
    }

    if (this.cptProbability) {
      this.cptProbability.g = this.g;
    }

    if (this.cptSpace) {
      this.cptSpace.a = this.a;
      this.cptSpace.l = this.l;
      this.cptSpace.g = this.g;
    }

    if (this.cptValue) {
      this.cptValue.a = this.a;
      this.cptValue.l = this.l;
    }

    if (this.decisionSpace) {
      this.decisionSpace.a = this.a;
      this.decisionSpace.l = this.l;
      this.decisionSpace.g = this.g;
    }
  }
}

customElements.define('cpt-example-model', CPTExampleModel);
