
// import CPTMath from '@decidable/prospectable-math';

import CPTExample from './cpt-example';

/*
  CPTExampleInteractive element
  <cpt-example-interactive>
*/
export default class CPTExampleInteractive extends CPTExample {
  firstUpdated(/* changedProperties */) {
    this.cptCalculation = this.querySelector('cpt-calculation');
    this.cptProbability = this.querySelector('cpt-probability');
    this.cptSpace = this.querySelector('cpt-space');
    this.cptValue = this.querySelector('cpt-value');
    this.decisionChoice = this.querySelector('decision-choice');
    this.decisionSpace = this.querySelector('decision-space');

    // Use decisionChoice as source

    if (this.cptCalculation) {
      if (this.decisionChoice) {
        this.cptCalculation.a = this.decisionChoice.a;
        this.cptCalculation.l = this.decisionChoice.l;
        this.cptCalculation.g = this.decisionChoice.g;

        this.cptCalculation.xl = this.decisionChoice.xl;
        this.cptCalculation.xw = this.decisionChoice.xw;
        this.cptCalculation.pw = this.decisionChoice.pw;
        this.cptCalculation.xs = this.decisionChoice.xs;
      }

      this.cptCalculation.addEventListener('cpt-calculation-change', (event) => {
        if (this.cptProbability) {
          this.cptProbability.set(this.cptCalculation.pw, this.cptCalculation.g, 'default', '');
        }

        if (this.cptSpace) {
          this.cptSpace.a = event.detail.a;
          this.cptSpace.l = event.detail.l;
          this.cptSpace.g = event.detail.g;

          this.cptSpace.xl = event.detail.xl;
          this.cptSpace.xw = event.detail.xw;
          this.cptSpace.pw = event.detail.pw;
          this.cptSpace.xs = event.detail.xs;
        }

        if (this.cptValue) {
          this.cptValue.set(event.detail.xs, event.detail.a, event.detail.l, 'default', 's');
          this.cptValue.set(event.detail.xw, event.detail.a, event.detail.l, 'gamble', 'g');
        }

        if (this.decisionChoice) {
          this.cptSpace.a = event.detail.a;
          this.cptSpace.l = event.detail.l;
          this.cptSpace.g = event.detail.g;

          this.cptSpace.xl = event.detail.xl;
          this.cptSpace.xw = event.detail.xw;
          this.cptSpace.pw = event.detail.pw;
          this.cptSpace.xs = event.detail.xs;
        }

        if (this.decisionSpace) {
          this.decisionSpace.a = event.detail.a;
          this.decisionSpace.l = event.detail.l;
          this.decisionSpace.g = event.detail.g;

          this.decisionSpace.xl = event.detail.xl;
          this.decisionSpace.xw = event.detail.xw;
          this.decisionSpace.pw = event.detail.pw;
          this.decisionSpace.xs = event.detail.xs;
        }
      });
    }

    if (this.cptProbability) {
      if (this.decisionChoice) {
        this.cptProbability.set(this.decisionChoice.pw, this.decisionChoice.g, 'default', '');
      }

      this.cptProbability.addEventListener('cpt-probability-change', (event) => {
        if (this.cptCalculation) {
          this.cptCalculation.g = event.detail.g;
          this.cptCalculation.pw = event.detail.p;
        }

        if (this.cptSpace) {
          this.cptSpace.g = event.detail.g;
          this.cptSpace.pw = event.detail.p;
        }

        if (this.decisionChoice) {
          this.decisionChoice.g = event.detail.g;
          this.decisionChoice.pw = event.detail.p;
        }

        if (this.decisionSpace) {
          this.decisionSpace.g = event.detail.g;
          this.decisionSpace.pw = event.detail.p;
        }
      });
    }

    if (this.cptSpace) {
      if (this.decisionChoice) {
        this.cptSpace.a = this.decisionChoice.a;
        this.cptSpace.l = this.decisionChoice.l;
        this.cptSpace.g = this.decisionChoice.g;

        this.cptSpace.xl = this.decisionChoice.xl;
        this.cptSpace.xw = this.decisionChoice.xw;
        this.cptSpace.pw = this.decisionChoice.pw;
        this.cptSpace.xs = this.decisionChoice.xs;
      }
    }

    if (this.cptValue) {
      if (this.decisionChoice) {
        this.cptValue.set(this.decisionChoice.xs, this.decisionChoice.a, this.decisionChoice.l, 'default', 's');
        this.cptValue.set(this.decisionChoice.xw, this.decisionChoice.a, this.decisionChoice.l, 'gamble', 'g');
      }

      this.cptValue.addEventListener('cpt-value-change', (event) => {
        if (event.detail.name === 'default') {
          const gamble = this.cptValue.get('gamble');
          this.cptValue.set(gamble.x, event.detail.a, event.detail.l, 'gamble', 'g');
        }

        if (this.cptCalculation) {
          this.cptCalculation.a = event.detail.a;
          this.cptCalculation.l = event.detail.l;
          if (event.detail.name === 'default') {
            this.cptCalculation.xs = event.detail.x;
          } else if (event.detail.name === 'gamble') {
            this.cptCalculation.xw = event.detail.x;
          }
        }

        if (this.cptSpace) {
          this.cptSpace.a = event.detail.a;
          this.cptSpace.l = event.detail.l;
          if (event.detail.name === 'default') {
            this.cptSpace.xs = event.detail.x;
          } else if (event.detail.name === 'gamble') {
            this.cptSpace.xw = event.detail.x;
          }
        }

        if (this.decisionChoice) {
          this.decisionChoice.a = event.detail.a;
          this.decisionChoice.l = event.detail.l;
          if (event.detail.name === 'default') {
            this.decisionChoice.xs = event.detail.x;
          } else if (event.detail.name === 'gamble') {
            this.decisionChoice.xw = event.detail.x;
          }
        }

        if (this.decisionSpace) {
          this.decisionSpace.a = event.detail.a;
          this.decisionSpace.l = event.detail.l;
          if (event.detail.name === 'default') {
            this.decisionSpace.xs = event.detail.x;
          } else if (event.detail.name === 'gamble') {
            this.decisionSpace.xw = event.detail.x;
          }
        }
      });
    }

    if (this.decisionChoice) {
      this.decisionChoice.addEventListener('decision-choice-change', (event) => {
        if (this.cptCalculation) {
          this.cptCalculation.a = event.detail.a;
          this.cptCalculation.l = event.detail.l;
          this.cptCalculation.g = event.detail.g;

          this.cptCalculation.xl = event.detail.xl;
          this.cptCalculation.xw = event.detail.xw;
          this.cptCalculation.pw = event.detail.pw;
          this.cptCalculation.xs = event.detail.xs;
        }

        if (this.cptProbability) {
          this.cptProbability.set(event.detail.pw, event.detail.g, 'default', '');
        }

        if (this.cptSpace) {
          this.cptSpace.a = event.detail.a;
          this.cptSpace.l = event.detail.l;
          this.cptSpace.g = event.detail.g;

          this.cptSpace.xl = event.detail.xl;
          this.cptSpace.xw = event.detail.xw;
          this.cptSpace.pw = event.detail.pw;
          this.cptSpace.xs = event.detail.xs;
        }

        if (this.cptValue) {
          this.cptValue.set(event.detail.xs, event.detail.a, event.detail.l, 'default', 's');
          this.cptValue.set(event.detail.xw, event.detail.a, event.detail.l, 'gamble', 'g');
        }

        if (this.decisionSpace) {
          this.decisionSpace.a = event.detail.a;
          this.decisionSpace.l = event.detail.l;
          this.decisionSpace.g = event.detail.g;

          this.decisionSpace.xl = event.detail.xl;
          this.decisionSpace.xw = event.detail.xw;
          this.decisionSpace.pw = event.detail.pw;
          this.decisionSpace.xs = event.detail.xs;
        }
      });
    }

    if (this.decisionSpace) {
      if (this.decisionChoice) {
        this.decisionSpace.a = this.decisionChoice.a;
        this.decisionSpace.l = this.decisionChoice.l;
        this.decisionSpace.g = this.decisionChoice.g;

        this.decisionSpace.xl = this.decisionChoice.xl;
        this.decisionSpace.xw = this.decisionChoice.xw;
        this.decisionSpace.pw = this.decisionChoice.pw;
        this.decisionSpace.xs = this.decisionChoice.xs;
      }
    }
  }
}

customElements.define('cpt-example-interactive', CPTExampleInteractive);
