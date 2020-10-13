
// import CPTMath from '@decidable/prospectable-math';

import CPTExample from './cpt-example';

/*
  CPTExampleInteractive element
  <cpt-example-interactive>
*/
export default class CPTExampleInteractive extends CPTExample {
  firstUpdated(/* changedProperties */) {
    this.cptValue = this.querySelector('cpt-value');
    this.cptProbability = this.querySelector('cpt-probability');
    this.decisionChoice = this.querySelector('decision-choice');
    this.decisionSpace = this.querySelector('decision-space');

    // Use decisionChoice as source

    if (this.cptValue) {
      this.cptValue.addEventListener('cpt-value-change', (event) => {
        if (event.detail.name === 'default') {
          const gamble = this.cptValue.get('gamble');
          this.cptValue.set(gamble.x, event.detail.a, event.detail.l, 'gamble', 'g');
        }
      });

      if (this.decisionChoice) {
        this.cptValue.set(this.decisionChoice.xs, this.decisionChoice.a, this.decisionChoice.l, 'default', 's');
        this.cptValue.set(this.decisionChoice.xw, this.decisionChoice.a, this.decisionChoice.l, 'gamble', 'g');
      }
    }

    if (this.cptProbability) {
      if (this.decisionChoice) {
        this.cptProbability.set(this.decisionChoice.pw, this.decisionChoice.g, 'default', '');
      }
    }

    if (this.decisionChoice) {
      if (this.cptValue) {
        this.cptValue.addEventListener('cpt-value-change', (event) => {
          this.decisionChoice.a = event.detail.a;
          this.decisionChoice.l = event.detail.l;
          if (event.detail.name === 'default') {
            this.decisionChoice.xs = event.detail.x;
          } else if (event.detail.name === 'gamble') {
            this.decisionChoice.xw = event.detail.x;
          }
        });
      }

      if (this.cptProbability) {
        this.cptProbability.addEventListener('cpt-probability-change', (event) => {
          this.decisionChoice.g = event.detail.g;
          this.decisionChoice.pw = event.detail.p;
        });
      }
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

      if (this.cptValue) {
        this.cptValue.addEventListener('cpt-value-change', (event) => {
          this.decisionSpace.a = event.detail.a;
          this.decisionSpace.l = event.detail.l;
          if (event.detail.name === 'default') {
            this.decisionSpace.xs = event.detail.x;
          } else if (event.detail.name === 'gamble') {
            this.decisionSpace.xw = event.detail.x;
          }
        });
      }

      if (this.cptProbability) {
        this.cptProbability.addEventListener('cpt-probability-change', (event) => {
          this.decisionSpace.g = event.detail.g;
          this.decisionSpace.pw = event.detail.p;
        });
      }
    }
  }
}

customElements.define('cpt-example-interactive', CPTExampleInteractive);
