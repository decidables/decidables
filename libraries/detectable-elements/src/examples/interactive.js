
import SDTMath from '@decidable/detectable-math';

import SDTExample from './sdt-example';

/*
  SDTExample_Interactive element
  <sdt-example-interactive>
*/
export default class SDTExampleInteractive extends SDTExample {
  firstUpdated(/* changedProperties */) {
    this.sdtControl = this.querySelector('sdt-control');
    this.sdtTable = this.querySelector('sdt-table');
    this.rocSpace = this.querySelector('roc-space');
    this.sdtModel = this.querySelector('sdt-model');

    this.rocSpaces = this.querySelectorAll('roc-space');

    if (this.sdtControl && this.sdtControl.hasAttribute('color')) {
      this.sdtControl.addEventListener('sdt-control-color', (event) => {
        if (this.sdtModel) {
          this.sdtModel.color = event.detail.color;
        }

        if (this.sdtTable) {
          this.sdtTable.color = event.detail.color;
        }
      });
    }

    if (this.sdtControl) {
      this.sdtControl.addEventListener('sdt-control-z-roc', (event) => {
        if (this.rocSpaces.length > 0) {
          this.rocSpaces.forEach((rocSpace) => {
            rocSpace.zRoc = event.detail.zRoc;
          });
        }
      });
    }

    if (this.sdtTable) {
      if (this.rocSpace) {
        this.rocSpace.hr = SDTMath.hM2Hr(this.sdtTable.h, this.sdtTable.m);
        this.rocSpace.far = SDTMath.faCr2Far(this.sdtTable.fa, this.sdtTable.cr);
      }

      if (this.sdtModel) {
        this.sdtModel.d = SDTMath.hrFar2D(
          SDTMath.hM2Hr(this.sdtTable.h, this.sdtTable.m),
          SDTMath.faCr2Far(this.sdtTable.fa, this.sdtTable.cr),
          this.sdtModel.s,
        );
        this.sdtModel.c = SDTMath.hrFar2C(
          SDTMath.hM2Hr(this.sdtTable.h, this.sdtTable.m),
          SDTMath.faCr2Far(this.sdtTable.fa, this.sdtTable.cr),
          this.sdtModel.s,
        );
      }

      this.sdtTable.addEventListener('sdt-table-change', (event) => {
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
      if (this.sdtModel && !this.sdtTable) {
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

        if (this.sdtTable) {
          const newh = Math.round((this.sdtTable.h + this.sdtTable.m) * event.detail.hr);
          const newm = (this.sdtTable.h + this.sdtTable.m) - newh;
          const newfa = Math.round((this.sdtTable.fa + this.sdtTable.cr) * event.detail.far);
          const newcr = (this.sdtTable.fa + this.sdtTable.cr) - newfa;
          this.sdtTable.h = newh;
          this.sdtTable.m = newm;
          this.sdtTable.fa = newfa;
          this.sdtTable.cr = newcr;
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

        if (this.sdtTable) {
          const newh = Math.round((this.sdtTable.h + this.sdtTable.m) * event.detail.hr);
          const newm = (this.sdtTable.h + this.sdtTable.m) - newh;
          const newfa = Math.round((this.sdtTable.fa + this.sdtTable.cr) * event.detail.far);
          const newcr = (this.sdtTable.fa + this.sdtTable.cr) - newfa;
          this.sdtTable.h = newh;
          this.sdtTable.m = newm;
          this.sdtTable.fa = newfa;
          this.sdtTable.cr = newcr;
        }
      });
    }
  }
}

customElements.define('sdt-example-interactive', SDTExampleInteractive);
