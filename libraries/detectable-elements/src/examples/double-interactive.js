
import SDTMath from '@decidables/detectable-math';

import SDTExample from './sdt-example';

/*
  SDTExample_DoubleInteractive element
  <sdt-example-interactive>
*/
export default class SDTExampleDoubleInteractive extends SDTExample {
  firstUpdated(/* changedProperties */) {
    this.one = {};
    this.one.h = 95;
    this.one.m = 5;
    this.one.fa = 35;
    this.one.cr = 65;
    this.one.hr = SDTMath.hM2Hr(this.one.h, this.one.m);
    this.one.far = SDTMath.faCr2Far(this.one.fa, this.one.cr);
    this.one.d = SDTMath.hrFar2D(this.one.hr, this.one.far);
    this.one.c = SDTMath.hrFar2C(this.one.hr, this.one.far);

    this.two = {};
    this.two.h = 40;
    this.two.m = 60;
    this.two.fa = 20;
    this.two.cr = 80;
    this.two.hr = SDTMath.hM2Hr(this.two.h, this.two.m);
    this.two.far = SDTMath.faCr2Far(this.two.fa, this.two.cr);
    this.two.d = SDTMath.hrFar2D(this.two.hr, this.two.far);
    this.two.c = SDTMath.hrFar2C(this.two.hr, this.two.far);

    this.detectableTableOne = this.querySelector('detectable-table:nth-of-type(1)');
    this.detectableTableTwo = this.querySelector('detectable-table:nth-of-type(2)');
    this.rocSpace = this.querySelector('roc-space');
    this.sdtModelOne = this.querySelector('sdt-model:nth-of-type(1)');
    this.sdtModelTwo = this.querySelector('sdt-model:nth-of-type(2)');

    if (this.detectableTableOne) {
      this.detectableTableOne.h = this.one.h;
      this.detectableTableOne.m = this.one.m;
      this.detectableTableOne.fa = this.one.fa;
      this.detectableTableOne.cr = this.one.cr;

      this.detectableTableOne.addEventListener('detectable-table-change', (event) => {
        if (this.rocSpace) {
          this.rocSpace.set(event.detail.hr, event.detail.far, 'default', '↑');
        }

        if (this.sdtModelOne) {
          this.sdtModelOne.d = SDTMath.hrFar2D(event.detail.hr, event.detail.far);
          this.sdtModelOne.c = SDTMath.hrFar2C(event.detail.hr, event.detail.far);
        }
      });
    }

    if (this.detectableTableTwo) {
      this.detectableTableTwo.h = this.two.h;
      this.detectableTableTwo.m = this.two.m;
      this.detectableTableTwo.fa = this.two.fa;
      this.detectableTableTwo.cr = this.two.cr;

      this.detectableTableTwo.addEventListener('detectable-table-change', (event) => {
        if (this.rocSpace) {
          this.rocSpace.set(event.detail.hr, event.detail.far, 'two', '↓');
        }

        if (this.sdtModelTwo) {
          this.sdtModelTwo.d = SDTMath.hrFar2D(event.detail.hr, event.detail.far);
          this.sdtModelTwo.c = SDTMath.hrFar2C(event.detail.hr, event.detail.far);
        }
      });
    }

    if (this.rocSpace) {
      this.rocSpace.set(this.one.hr, this.one.far, 'default', '↑');
      this.rocSpace.set(this.two.hr, this.two.far, 'two', '↓');

      this.rocSpace.addEventListener('roc-point-change', (event) => {
        if (event.detail.name === 'default' && this.sdtModelOne) {
          this.sdtModelOne.d = event.detail.d;
          this.sdtModelOne.c = event.detail.c;
        } else if (event.detail.name === 'two' && this.sdtModelTwo) {
          this.sdtModelTwo.d = event.detail.d;
          this.sdtModelTwo.c = event.detail.c;
        }

        if (event.detail.name === 'default' && this.detectableTableOne) {
          const newh = Math.round(
            (this.detectableTableOne.h + this.detectableTableOne.m) * event.detail.hr,
          );
          const newm = (this.detectableTableOne.h + this.detectableTableOne.m) - newh;
          const newfa = Math.round(
            (this.detectableTableOne.fa + this.detectableTableOne.cr) * event.detail.far,
          );
          const newcr = (this.detectableTableOne.fa + this.detectableTableOne.cr) - newfa;
          this.detectableTableOne.h = newh;
          this.detectableTableOne.m = newm;
          this.detectableTableOne.fa = newfa;
          this.detectableTableOne.cr = newcr;
        } else if (event.detail.name === 'two' && this.detectableTableTwo) {
          const newh = Math.round(
            (this.detectableTableTwo.h + this.detectableTableTwo.m) * event.detail.hr,
          );
          const newm = (this.detectableTableTwo.h + this.detectableTableTwo.m) - newh;
          const newfa = Math.round(
            (this.detectableTableTwo.fa + this.detectableTableTwo.cr) * event.detail.far,
          );
          const newcr = (this.detectableTableTwo.fa + this.detectableTableTwo.cr) - newfa;
          this.detectableTableTwo.h = newh;
          this.detectableTableTwo.m = newm;
          this.detectableTableTwo.fa = newfa;
          this.detectableTableTwo.cr = newcr;
        }
      });
    }

    if (this.sdtModelOne) {
      this.sdtModelOne.d = this.one.d;
      this.sdtModelOne.c = this.one.c;

      this.sdtModelOne.addEventListener('sdt-model-change', (event) => {
        if (this.rocSpace) {
          this.rocSpace.setWithSDT(event.detail.d, event.detail.c, 'default', '↑');
        }

        if (this.detectableTableOne) {
          const newh = Math.round(
            (this.detectableTableOne.h + this.detectableTableOne.m) * event.detail.hr,
          );
          const newm = (this.detectableTableOne.h + this.detectableTableOne.m) - newh;
          const newfa = Math.round(
            (this.detectableTableOne.fa + this.detectableTableOne.cr) * event.detail.far,
          );
          const newcr = (this.detectableTableOne.fa + this.detectableTableOne.cr) - newfa;
          this.detectableTableOne.h = newh;
          this.detectableTableOne.m = newm;
          this.detectableTableOne.fa = newfa;
          this.detectableTableOne.cr = newcr;
        }
      });
    }

    if (this.sdtModelTwo) {
      this.sdtModelTwo.d = this.two.d;
      this.sdtModelTwo.c = this.two.c;

      this.sdtModelTwo.addEventListener('sdt-model-change', (event) => {
        if (this.rocSpace) {
          this.rocSpace.setWithSDT(event.detail.d, event.detail.c, 'two', '↓');
        }

        if (this.detectableTableTwo) {
          const newh = Math.round(
            (this.detectableTableTwo.h + this.detectableTableTwo.m) * event.detail.hr,
          );
          const newm = (this.detectableTableTwo.h + this.detectableTableTwo.m) - newh;
          const newfa = Math.round(
            (this.detectableTableTwo.fa + this.detectableTableTwo.cr) * event.detail.far,
          );
          const newcr = (this.detectableTableTwo.fa + this.detectableTableTwo.cr) - newfa;
          this.detectableTableTwo.h = newh;
          this.detectableTableTwo.m = newm;
          this.detectableTableTwo.fa = newfa;
          this.detectableTableTwo.cr = newcr;
        }
      });
    }
  }
}

customElements.define('sdt-example-double-interactive', SDTExampleDoubleInteractive);
