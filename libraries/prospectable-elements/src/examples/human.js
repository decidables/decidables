
import CPTMath from '@decidables/prospectable-math';

import CPTExample from './cpt-example';

/*
  CPTExampleInteractive element
  <cpt-example-interactive>
*/
export default class CPTExampleHuman extends CPTExample {
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
        attribute: false,
        type: Number,
        reflect: false,
      },
      l: {
        attribute: false,
        type: Number,
        reflect: false,
      },
      g: {
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

    this.a = CPTMath.a.DEFAULT;
    this.l = CPTMath.l.DEFAULT;
    this.g = CPTMath.g.DEFAULT;

    // this.cptCalculation = null;
    this.cptFit = null;
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
    this.cptFit = this.querySelector('cpt-fit');
    this.cptParameters = this.querySelector('cpt-parameters');
    this.cptProbability = this.querySelector('cpt-probability');
    // this.cptSpace = this.querySelector('cpt-space');
    this.cptValue = this.querySelector('cpt-value');
    this.decisionSpace = this.querySelector('decision-space');
    this.prospectableControl = this.querySelector('prospectable-control');
    this.prospectableResponse = this.querySelector('prospectable-response');
    this.riskyTask = this.querySelector('risky-task');

    if (this.cptFit) {
      this.cptFit.addEventListener('cpt-fit-update', (event) => {
        this.a = event.detail.a;
        this.l = event.detail.l;
        this.g = event.detail.g;
      });
    }

    if (this.prospectableControl) {
      this.prospectableControl.addEventListener('prospectable-control-trials', (event) => {
        this.trials = event.detail.trials;
      });

      this.prospectableControl.addEventListener('prospectable-control-duration', (event) => {
        this.duration = event.detail.duration;
      });

      this.prospectableControl.addEventListener('prospectable-control-run', (/* event */) => {
        if (this.riskyTask) {
          this.riskyTask.running = true;
        }
      });

      this.prospectableControl.addEventListener('prospectable-control-pause', (/* event */) => {
        if (this.riskyTask) {
          this.riskyTask.running = false;
        }
      });

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
  }

  update(changedProperties) {
    super.update(changedProperties);

    if (this.cptParameters) {
      this.cptParameters.a = (this.cptParameters.a != null)
        ? this.a
        : undefined;
      this.cptParameters.l = (this.cptParameters.l != null)
        ? this.l
        : undefined;
      this.cptParameters.g = (this.cptParameters.g != null)
        ? this.g
        : undefined;
    }

    if (this.cptProbability) {
      this.cptProbability.g = this.g;
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

    if (this.prospectableControl) {
      this.prospectableControl.trials = (this.prospectableControl.trials != null)
        ? this.trials
        : undefined;
      this.prospectableControl.duration = (this.prospectableControl.trials != null)
        ? this.duration
        : undefined;
    }

    if (this.prospectableResponse) {
      this.prospectableResponse.trialTotal = this.trials;
    }

    if (this.riskyTask) {
      this.riskyTask.trials = this.trials;
      this.riskyTask.duration = this.duration;
      this.riskyTask.iti = this.duration;
    }
  }
}

customElements.define('cpt-example-human', CPTExampleHuman);
