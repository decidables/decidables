
import SDTMath from '@decidable/detectable-math';

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

    this.sdtTableOne = this.querySelector('sdt-table:nth-of-type(1)');
    this.sdtTableTwo = this.querySelector('sdt-table:nth-of-type(2)');
    this.rocSpace = this.querySelector('roc-space');
    this.sdtModelOne = this.querySelector('sdt-model:nth-of-type(1)');
    this.sdtModelTwo = this.querySelector('sdt-model:nth-of-type(2)');

    if (this.sdtTableOne) {
      this.sdtTableOne.h = this.one.h;
      this.sdtTableOne.m = this.one.m;
      this.sdtTableOne.fa = this.one.fa;
      this.sdtTableOne.cr = this.one.cr;

      this.sdtTableOne.addEventListener('sdt-table-change', (event) => {
        if (this.rocSpace) {
          this.rocSpace.set(event.detail.hr, event.detail.far, 'default', '↑');
        }

        if (this.sdtModelOne) {
          this.sdtModelOne.d = SDTMath.hrFar2D(event.detail.hr, event.detail.far);
          this.sdtModelOne.c = SDTMath.hrFar2C(event.detail.hr, event.detail.far);
        }
      });
    }

    if (this.sdtTableTwo) {
      this.sdtTableTwo.h = this.two.h;
      this.sdtTableTwo.m = this.two.m;
      this.sdtTableTwo.fa = this.two.fa;
      this.sdtTableTwo.cr = this.two.cr;

      this.sdtTableTwo.addEventListener('sdt-table-change', (event) => {
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

        if (event.detail.name === 'default' && this.sdtTableOne) {
          const newh = Math.round((this.sdtTableOne.h + this.sdtTableOne.m) * event.detail.hr);
          const newm = (this.sdtTableOne.h + this.sdtTableOne.m) - newh;
          const newfa = Math.round((this.sdtTableOne.fa + this.sdtTableOne.cr) * event.detail.far);
          const newcr = (this.sdtTableOne.fa + this.sdtTableOne.cr) - newfa;
          this.sdtTableOne.h = newh;
          this.sdtTableOne.m = newm;
          this.sdtTableOne.fa = newfa;
          this.sdtTableOne.cr = newcr;
        } else if (event.detail.name === 'two' && this.sdtTableTwo) {
          const newh = Math.round((this.sdtTableTwo.h + this.sdtTableTwo.m) * event.detail.hr);
          const newm = (this.sdtTableTwo.h + this.sdtTableTwo.m) - newh;
          const newfa = Math.round((this.sdtTableTwo.fa + this.sdtTableTwo.cr) * event.detail.far);
          const newcr = (this.sdtTableTwo.fa + this.sdtTableTwo.cr) - newfa;
          this.sdtTableTwo.h = newh;
          this.sdtTableTwo.m = newm;
          this.sdtTableTwo.fa = newfa;
          this.sdtTableTwo.cr = newcr;
        }
      });
    }

    if (this.sdtModelOne) {
      this.sdtModelOne.h = this.one.d;
      this.sdtModelOne.m = this.one.c;

      this.sdtModelOne.addEventListener('sdt-model-change', (event) => {
        if (this.rocSpace) {
          this.rocSpace.setWithSDT(event.detail.d, event.detail.c, 'default', '↑');
        }

        if (this.sdtTableOne) {
          const newh = Math.round((this.sdtTableOne.h + this.sdtTableOne.m) * event.detail.hr);
          const newm = (this.sdtTableOne.h + this.sdtTableOne.m) - newh;
          const newfa = Math.round((this.sdtTableOne.fa + this.sdtTableOne.cr) * event.detail.far);
          const newcr = (this.sdtTableOne.fa + this.sdtTableOne.cr) - newfa;
          this.sdtTableOne.h = newh;
          this.sdtTableOne.m = newm;
          this.sdtTableOne.fa = newfa;
          this.sdtTableOne.cr = newcr;
        }
      });
    }

    if (this.sdtModelTwo) {
      this.sdtModelTwo.h = this.two.d;
      this.sdtModelTwo.m = this.two.c;

      this.sdtModelTwo.addEventListener('sdt-model-change', (event) => {
        if (this.rocSpace) {
          this.rocSpace.setWithSDT(event.detail.d, event.detail.c, 'two', '↓');
        }

        if (this.sdtTableTwo) {
          const newh = Math.round((this.sdtTableTwo.h + this.sdtTableTwo.m) * event.detail.hr);
          const newm = (this.sdtTableTwo.h + this.sdtTableTwo.m) - newh;
          const newfa = Math.round((this.sdtTableTwo.fa + this.sdtTableTwo.cr) * event.detail.far);
          const newcr = (this.sdtTableTwo.fa + this.sdtTableTwo.cr) - newfa;
          this.sdtTableTwo.h = newh;
          this.sdtTableTwo.m = newm;
          this.sdtTableTwo.fa = newfa;
          this.sdtTableTwo.cr = newcr;
        }
      });
    }
  }
}

customElements.define('sdt-example-double-interactive', SDTExampleDoubleInteractive);
