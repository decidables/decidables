
// import CPTMath from '@decidables/prospectable-math';

import CPTExample from './cpt-example';

/*
  CPTExampleInteractive element
  <cpt-example-interactive>
*/
export default class CPTExampleInteractive extends CPTExample {
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
      xl: {
        attribute: 'loss',
        type: Number,
        reflect: true,
      },

      xw: {
        attribute: 'win',
        type: Number,
        reflect: true,
      },
      pw: {
        attribute: 'probability',
        type: Number,
        reflect: true,
      },
      xs: {
        attribute: 'sure',
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
    this.riskyChoice = null;
    this.decisionSpace = null;
  }

  connectedCallback() {
    super.connectedCallback();

    this.cptCalculation = this.querySelector('cpt-calculation');
    this.cptProbability = this.querySelector('cpt-probability');
    this.cptSpace = this.querySelector('cpt-space');
    this.cptValue = this.querySelector('cpt-value');
    this.riskyChoice = this.querySelector('risky-choice');
    this.decisionSpace = this.querySelector('decision-space');

    if (this.cptCalculation) {
      this.cptCalculation.addEventListener('cpt-calculation-change', (event) => {
        this.a = event.detail.a;
        this.l = event.detail.l;
        this.g = event.detail.g;

        this.xl = event.detail.xl;
        this.xw = event.detail.xw;
        this.pw = event.detail.pw;
        this.xs = event.detail.xs;
      });
    }

    if (this.cptProbability) {
      this.cptProbability.addEventListener('cpt-probability-change', (event) => {
        this.g = event.detail.g;
        this.pw = event.detail.p;
      });

      this.cptProbability.set(this.pw, this.g, 'default', '');
    }

    if (this.cptValue) {
      this.cptValue.addEventListener('cpt-value-change', (event) => {
        this.a = event.detail.a;
        this.l = event.detail.l;
        if (event.detail.name === 'default') {
          this.xs = event.detail.x;
        } else if (event.detail.name === 'gamble') {
          this.xw = event.detail.x;
        }
      });

      this.cptValue.set(this.xs, this.a, this.l, 'default', 's');
      this.cptValue.set(this.xw, this.a, this.l, 'gamble', 'g', 'default');
    }

    if (this.riskyChoice) {
      this.riskyChoice.addEventListener('risky-choice-change', (event) => {
        this.xl = event.detail.xl;
        this.xw = event.detail.xw;
        this.pw = event.detail.pw;
        this.xs = event.detail.xs;
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

      this.cptCalculation.xl = this.xl;
      this.cptCalculation.xw = this.xw;
      this.cptCalculation.pw = this.pw;
      this.cptCalculation.xs = this.xs;
    }

    if (this.cptProbability) {
      this.cptProbability.set(this.pw, this.g, 'default', '');
    }

    if (this.cptSpace) {
      this.cptSpace.a = this.a;
      this.cptSpace.l = this.l;
      this.cptSpace.g = this.g;

      this.cptSpace.xl = this.xl;
      this.cptSpace.xw = this.xw;
      this.cptSpace.pw = this.pw;
      this.cptSpace.xs = this.xs;
    }

    if (this.cptValue) {
      this.cptValue.set(this.xs, this.a, this.l, 'default', 's');
      this.cptValue.set(this.xw, this.a, this.l, 'gamble', 'g', 'default');
    }

    if (this.riskyChoice) {
      this.riskyChoice.xl = this.xl;
      this.riskyChoice.xw = this.xw;
      this.riskyChoice.pw = this.pw;
      this.riskyChoice.xs = this.xs;
    }

    if (this.decisionSpace) {
      this.decisionSpace.a = this.a;
      this.decisionSpace.l = this.l;
      this.decisionSpace.g = this.g;

      this.decisionSpace.xl = this.xl;
      this.decisionSpace.xw = this.xw;
      this.decisionSpace.pw = this.pw;
      this.decisionSpace.xs = this.xs;
    }
  }
}

customElements.define('cpt-example-interactive', CPTExampleInteractive);
