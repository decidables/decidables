
// import CPTMath from '@decidables/prospectable-math';

import HTDExample from './htd-example';

/*
  HTDExampleInteractive element
  <htd-example-interactive>
*/
export default class HTDExampleInteractive extends HTDExample {
  static get properties() {
    return {
      a1: {
        attribute: 'amount1',
        type: Number,
        reflect: true,
      },
      d1: {
        attribute: 'delay1',
        type: Number,
        reflect: true,
      },
      a2: {
        attribute: 'amount2',
        type: Number,
        reflect: true,
      },
      d2: {
        attribute: 'delay2',
        type: Number,
        reflect: true,
      },

      k: {
        attribute: 'k',
        type: Number,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    this.a1 = 10;
    this.d1 = 1;
    this.a2 = 50;
    this.d2 = 40;
    this.k = 0.05;

    this.htdCalculation = null;
    this.htdCurves = null;
    this.itcChoice = null;
  }

  firstUpdated(/* changedProperties */) {
    this.htdCalculation = this.querySelector('htd-calculation');
    this.htdCurves = this.querySelector('htd-curves');
    this.itcChoice = this.querySelector('itc-choice');

    if (this.htdCalculation) {
      this.htdCalculation.addEventListener('htd-calculation-change', (event) => {
        this.a1 = event.detail.a1;
        this.d1 = event.detail.d1;
        this.a2 = event.detail.a2;
        this.d2 = event.detail.d2;

        this.k = event.detail.k;
      });
    }

    if (this.htdCurves) {
      this.htdCurves.addEventListener('htd-curves-change', (event) => {
        this.k = event.detail.k;
        if (event.detail.name === 'default1') {
          this.a1 = event.detail.a;
          this.d1 = event.detail.d;
        } else if (event.detail.name === 'default2') {
          this.a2 = event.detail.a;
          this.d2 = event.detail.d;
        }
      });

      // this.cptValue.set(this.xs, this.a, this.l, 'default', 's');
      // this.cptValue.set(this.xw, this.a, this.l, 'gamble', 'g', 'default');
    }

    if (this.itcChoice) {
      this.itcChoice.addEventListener('itc-choice-change', (event) => {
        this.a1 = event.detail.a1;
        this.d1 = event.detail.d1;
        this.a2 = event.detail.a2;
        this.d2 = event.detail.d2;
      });
    }

    this.requestUpdate();
  }

  update(changedProperties) {
    super.update(changedProperties);

    if (this.htdCalculation) {
      this.htdCalculation.a1 = this.a1;
      this.htdCalculation.d1 = this.d1;
      this.htdCalculation.a2 = this.a2;
      this.htdCalculation.d2 = this.d2;

      this.htdCalculation.k = this.k;
    }

    if (this.htdCurves) {
      this.htdCurves.setOption(this.a1, this.d1, 'default1', '1');
      this.htdCurves.setOption(this.a2, this.d2, 'default2', '2');

      this.htdCurves.k = this.k;
    }

    if (this.itcChoice) {
      this.itcChoice.a1 = this.a1;
      this.itcChoice.d1 = this.d1;
      this.itcChoice.a2 = this.a2;
      this.itcChoice.d2 = this.d2;
    }
  }
}

customElements.define('htd-example-interactive', HTDExampleInteractive);
