
import SDTMath from '@decidables/detectable-math';

import SDTExample from './sdt-example';

/*
  SDTExample_Interactive element
  <sdt-example-interactive>
*/
export default class SDTExampleInteractive extends SDTExample {
  firstUpdated(/* changedProperties */) {
    this.detectableControl = this.querySelector('detectable-control');
    this.detectableTable = this.querySelector('detectable-table');
    this.rocSpace = this.querySelector('roc-space');
    this.sdtModel = this.querySelector('sdt-model');

    this.rocSpaces = this.querySelectorAll('roc-space');

    if (this.detectableControl && this.detectableControl.hasAttribute('color')) {
      this.detectableControl.addEventListener('detectable-control-color', (event) => {
        if (this.sdtModel) {
          this.sdtModel.color = event.detail.color;
        }

        if (this.detectableTable) {
          this.detectableTable.color = event.detail.color;
        }
      });
    }

    if (this.detectableControl) {
      this.detectableControl.addEventListener('detectable-control-z-roc', (event) => {
        if (this.rocSpaces.length > 0) {
          this.rocSpaces.forEach((rocSpace) => {
            rocSpace.zRoc = event.detail.zRoc;
          });
        }
      });
    }

    if (this.detectableTable) {
      if (this.rocSpace) {
        this.rocSpace.hr = SDTMath.hM2Hr(this.detectableTable.h, this.detectableTable.m);
        this.rocSpace.far = SDTMath.faCr2Far(this.detectableTable.fa, this.detectableTable.cr);
      }

      if (this.sdtModel) {
        this.sdtModel.d = SDTMath.hrFar2D(
          SDTMath.hM2Hr(this.detectableTable.h, this.detectableTable.m),
          SDTMath.faCr2Far(this.detectableTable.fa, this.detectableTable.cr),
          this.sdtModel.s,
        );
        this.sdtModel.c = SDTMath.hrFar2C(
          SDTMath.hM2Hr(this.detectableTable.h, this.detectableTable.m),
          SDTMath.faCr2Far(this.detectableTable.fa, this.detectableTable.cr),
          this.sdtModel.s,
        );
      }

      this.detectableTable.addEventListener('detectable-table-change', (event) => {
        if (this.rocSpace) {
          this.rocSpace.far = event.detail.far;
          this.rocSpace.hr = event.detail.hr;
        }

        if (this.sdtModel) {
          this.sdtModel.d = SDTMath.hrFar2D(event.detail.hr, event.detail.far, this.sdtModel.s);
          this.sdtModel.c = SDTMath.hrFar2C(event.detail.hr, event.detail.far, this.sdtModel.s);
        }
      });
    }

    if (this.rocSpace) {
      if (this.sdtModel && !this.detectableTable) {
        this.sdtModel.d = SDTMath.hrFar2D(this.rocSpace.hr, this.rocSpace.far, this.rocSpace.s);
        this.sdtModel.c = SDTMath.hrFar2C(this.rocSpace.hr, this.rocSpace.far, this.rocSpace.s);
        this.sdtModel.s = this.rocSpace.s;
      }

      this.rocSpace.addEventListener('roc-point-change', (event) => {
        if (this.sdtModel) {
          this.sdtModel.d = event.detail.d;
          this.sdtModel.c = event.detail.c;
          this.sdtModel.s = event.detail.s;
        }

        if (this.detectableTable) {
          const newh = Math.round(
            (this.detectableTable.h + this.detectableTable.m) * event.detail.hr,
          );
          const newm = (this.detectableTable.h + this.detectableTable.m) - newh;
          const newfa = Math.round(
            (this.detectableTable.fa + this.detectableTable.cr) * event.detail.far,
          );
          const newcr = (this.detectableTable.fa + this.detectableTable.cr) - newfa;
          this.detectableTable.h = newh;
          this.detectableTable.m = newm;
          this.detectableTable.fa = newfa;
          this.detectableTable.cr = newcr;
        }
      });
    }

    if (this.sdtModel) {
      this.sdtModel.addEventListener('sdt-model-change', (event) => {
        if (this.rocSpaces.length > 0) {
          this.rocSpaces.forEach((rocSpace) => {
            rocSpace.setWithSDT(event.detail.d, event.detail.c, 'default', '', event.detail.s);
          });
        }

        if (this.detectableTable) {
          const newh = Math.round(
            (this.detectableTable.h + this.detectableTable.m) * event.detail.hr,
          );
          const newm = (this.detectableTable.h + this.detectableTable.m) - newh;
          const newfa = Math.round(
            (this.detectableTable.fa + this.detectableTable.cr) * event.detail.far,
          );
          const newcr = (this.detectableTable.fa + this.detectableTable.cr) - newfa;
          this.detectableTable.h = newh;
          this.detectableTable.m = newm;
          this.detectableTable.fa = newfa;
          this.detectableTable.cr = newcr;
        }
      });
    }
  }
}

customElements.define('sdt-example-interactive', SDTExampleInteractive);
