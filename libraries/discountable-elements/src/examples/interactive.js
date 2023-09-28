
import HTDExample from './htd-example';

/*
  HTDExampleInteractive element
  <htd-example-interactive>
*/
export default class HTDExampleInteractive extends HTDExample {
  static get properties() {
    return {
      as: {
        attribute: 'amount-ss',
        type: Number,
        reflect: true,
      },
      ds: {
        attribute: 'delay-ss',
        type: Number,
        reflect: true,
      },
      al: {
        attribute: 'amount-ll',
        type: Number,
        reflect: true,
      },
      dl: {
        attribute: 'delay-ll',
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

    this.as = 10;
    this.ds = 1;
    this.al = 50;
    this.dl = 40;
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
        this.as = event.detail.as;
        this.ds = event.detail.ds;
        this.al = event.detail.al;
        this.dl = event.detail.dl;

        this.k = event.detail.k;
      });
    }

    if (this.htdCurves) {
      this.htdCurves.addEventListener('htd-curves-change', (event) => {
        this.k = event.detail.k;
        if (event.detail.name === 'default') {
          this.as = event.detail.a;
          this.ds = event.detail.d;
        } else if (event.detail.name === 'larger-later') {
          this.al = event.detail.a;
          this.dl = event.detail.d;
        }
      });
    }

    if (this.itcChoice) {
      this.itcChoice.addEventListener('itc-choice-change', (event) => {
        this.as = event.detail.as;
        this.ds = event.detail.ds;
        this.al = event.detail.al;
        this.dl = event.detail.dl;
      });
    }

    this.requestUpdate();
  }

  update(changedProperties) {
    super.update(changedProperties);

    if (this.htdCalculation) {
      this.htdCalculation.as = this.as;
      this.htdCalculation.ds = this.ds;
      this.htdCalculation.al = this.al;
      this.htdCalculation.dl = this.dl;

      this.htdCalculation.k = this.k;
    }

    if (this.htdCurves) {
      this.htdCurves.setOption(this.as, this.ds, 'default', 's');
      this.htdCurves.setOption(this.al, this.dl, 'larger-later', 'l');

      this.htdCurves.k = this.k;
    }

    if (this.itcChoice) {
      this.itcChoice.as = this.as;
      this.itcChoice.ds = this.ds;
      this.itcChoice.al = this.al;
      this.itcChoice.dl = this.dl;
    }
  }
}

customElements.define('htd-example-interactive', HTDExampleInteractive);
