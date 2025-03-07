
import CPTMath from '@decidables/prospectable-math';

import CPTExample from './cpt-example';

/*
  CPTExampleModel element
  <cpt-example-model>
*/
export default class CPTExampleModel extends CPTExample {
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

    this.trials = 10;
    this.duration = 2000;

    this.a = CPTMath.a.DEFAULT;
    this.l = CPTMath.l.DEFAULT;
    this.g = CPTMath.g.DEFAULT;

    this.xl = 0;
    this.xw = 20;
    this.pw = 0.5;
    this.xs = 10;

    // this.cptCalculation = null;
    this.cptParameters = null;
    this.cptProbability = null;
    // this.cptSpace = null;
    this.cptValue = null;
    this.decisionSpace = null;
    this.prospectableControl = null;
    this.prospectableResponse = null;
    this.riskyTask = null;
  }

  connectedCallback() {
    super.connectedCallback();

    // this.cptCalculation = this.querySelector('cpt-calculation');
    this.cptParameters = this.querySelector('cpt-parameters');
    this.cptProbability = this.querySelector('cpt-probability');
    // this.cptSpace = this.querySelector('cpt-space');
    this.cptValue = this.querySelector('cpt-value');
    this.decisionSpace = this.querySelector('decision-space');
    this.prospectableControl = this.querySelector('prospectable-control');
    this.prospectableResponse = this.querySelector('prospectable-response');
    this.riskyTask = this.querySelector('risky-task');

    if (this.cptParameters) {
      this.cptParameters.addEventListener('cpt-parameters-a', (event) => {
        this.a = event.detail.a;
      });

      this.cptParameters.addEventListener('cpt-parameters-l', (event) => {
        this.l = event.detail.l;
      });

      this.cptParameters.addEventListener('cpt-parameters-g', (event) => {
        this.g = event.detail.g;
      });
    }

    if (this.cptProbability) {
      this.cptProbability.addEventListener('cpt-probability-change', (event) => {
        this.g = event.detail.g;
      });

      this.cptProbability.addEventListener('prospectable-response', (event) => {
        if (this.prospectableResponse) {
          this.prospectableResponse.responded(event.detail.response);
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
        this.cptValue.addEventListener('prospectable-response', (event) => {
          if (this.prospectableResponse) {
            this.prospectableResponse.responded(event.detail.response);
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

    if (this.prospectableControl) {
      this.prospectableControl.addEventListener('prospectable-control-trials', (event) => {
        this.trials = event.detail.trials;
      });

      this.prospectableControl.addEventListener('prospectable-control-duration', (event) => {
        this.duration = event.detail.duration;
      });

      this.prospectableControl.addEventListener('prospectable-control-run', (/* event */) => {
        if (this.cptProbability) {
          this.cptProbability.resumeTrial();
        }

        if (this.cptValue) {
          this.cptValue.resumeTrial();
        }

        if (this.riskyTask) {
          this.riskyTask.running = true;
        }
      });

      this.prospectableControl.addEventListener('prospectable-control-pause', (/* event */) => {
        if (this.cptProbability) {
          this.cptProbability.pauseTrial();
        }

        if (this.cptValue) {
          this.cptValue.pauseTrial();
        }

        if (this.riskyTask) {
          this.riskyTask.running = false;
        }
      });

      this.prospectableControl.addEventListener('prospectable-control-reset', (/* event */) => {
        if (this.cptProbability) {
          this.cptProbability.clear();
        }

        if (this.cptValue) {
          this.cptValue.clear();
        }

        if (this.riskyTask) {
          this.riskyTask.reset();
        }

        if (this.prospectableResponse) {
          this.prospectableResponse.reset();
        }

        if (this.decisionSpace) {
          this.decisionSpace.clear();
        }
      });
    }

    if (this.riskyTask) {
      this.riskyTask.addEventListener('risky-trial-start', (event) => {
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

      this.riskyTask.addEventListener('risky-trial-end', (/* event */) => {
        if (this.prospectableResponse) {
          this.prospectableResponse.stop();
        }
      });

      this.riskyTask.addEventListener('risky-block-end', (/* event */) => {
        if (this.prospectableControl) {
          this.prospectableControl.complete();
        }
      });
    }

    this.requestUpdate();
  }

  update(changedProperties) {
    super.update(changedProperties);

    // if (this.cptCalculation) {
    //   this.cptCalculation.a = this.a;
    //   this.cptCalculation.l = this.l;
    //   this.cptCalculation.g = this.g;
    // }

    if (this.cptParameters) {
      this.cptParameters.a = this.a;
      this.cptParameters.l = this.l;
      this.cptParameters.g = this.g;
    }

    if (this.cptProbability) {
      this.cptProbability.g = this.g;
    }

    // if (this.cptSpace) {
    //   this.cptSpace.a = this.a;
    //   this.cptSpace.l = this.l;
    //   this.cptSpace.g = this.g;
    // }

    if (this.cptValue) {
      this.cptValue.a = this.a;
      this.cptValue.l = this.l;
    }

    if (this.decisionSpace) {
      this.decisionSpace.a = this.a;
      this.decisionSpace.l = this.l;
      this.decisionSpace.g = this.g;
    }

    if (this.prospectableControl) {
      this.prospectableControl.trials = this.trials;
      this.prospectableControl.duration = this.duration;
    }

    if (this.riskyTask) {
      this.riskyTask.trials = this.trials;
      this.riskyTask.duration = this.duration;
      this.riskyTask.iti = this.duration;
    }
  }
}

customElements.define('cpt-example-model', CPTExampleModel);
