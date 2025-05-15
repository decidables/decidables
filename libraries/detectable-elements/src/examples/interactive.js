
import SDTMath from '@decidables/detectable-math';

import SDTExample from './sdt-example';

/*
  SDTExampleInteractive element
  <sdt-example-interactive>
*/
export default class SDTExampleInteractive extends SDTExample {
  static get properties() {
    return {
      color: {
        attribute: 'color',
        type: String,
        reflect: true,
      },
      zRoc: {
        attribute: 'z-roc',
        type: Boolean,
        reflect: true,
      },

      h: {
        attribute: 'hits',
        type: Number,
        reflect: true,
      },
      m: {
        attribute: 'misses',
        type: Number,
        reflect: true,
      },
      fa: {
        attribute: 'false-alarms',
        type: Number,
        reflect: true,
      },
      cr: {
        attribute: 'correct-rejections',
        type: Number,
        reflect: true,
      },

      hr: {
        attribute: 'hr',
        type: Number,
        reflect: true,
      },
      far: {
        attribute: 'far',
        type: Number,
        reflect: true,
      },

      d: {
        attribute: 'd',
        type: Number,
        reflect: true,
      },
      c: {
        attribute: 'c',
        type: Number,
        reflect: true,
      },
      s: {
        attribute: 's',
        type: Number,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    this.color = 'all';
    this.zRoc = false;

    this.h = undefined;
    this.m = undefined;
    this.fa = undefined;
    this.cr = undefined;

    this.hr = undefined;
    this.far = undefined;

    this.d = SDTMath.d.DEFAULT;
    this.c = SDTMath.c.DEFAULT;
    this.s = SDTMath.s.DEFAULT;

    this.detectableControl = null;
    this.detectableTable = null;
    this.rocSpace = null;
    this.sdtModel = null;

    this.rocSpaces = [];
  }

  connectedCallback() {
    super.connectedCallback();

    this.detectableControl = this.querySelector('detectable-control');
    this.detectableTable = this.querySelector('detectable-table');
    this.rocSpace = this.querySelector('roc-space');
    this.sdtModel = this.querySelector('sdt-model');

    this.rocSpaces = this.querySelectorAll('roc-space');

    if (
      this.h !== undefined
      && this.m !== undefined
      && this.fa !== undefined
      && this.cr !== undefined
    ) {
      this.hr = SDTMath.hM2Hr(this.h, this.m);
      this.far = SDTMath.faCr2Far(this.fa, this.cr);

      this.d = SDTMath.hrFar2D(this.hr, this.far, this.s);
      this.c = SDTMath.hrFar2C(this.hr, this.far, this.s);
    } else if (this.hr !== undefined && this.far !== undefined) {
      this.d = SDTMath.hrFar2D(this.hr, this.far, this.s);
      this.c = SDTMath.hrFar2C(this.hr, this.far, this.s);
    } else if (this.d !== undefined && this.c !== undefined) {
      this.hr = SDTMath.dC2Hr(this.d, this.c, this.s);
      this.far = SDTMath.dC2Far(this.d, this.c, this.s);

      const total = 100;
      this.h = Math.round(total * this.hr);
      this.m = total - this.h;
      this.fa = Math.round(total * this.far);
      this.cr = total - this.fa;
    }

    if (this.detectableControl) {
      this.detectableControl.addEventListener('detectable-control-color', (event) => {
        this.color = event.detail.color;
      });

      this.detectableControl.addEventListener('detectable-control-z-roc', (event) => {
        this.zRoc = event.detail.zRoc;
      });
    }

    if (this.detectableTable) {
      this.detectableTable.addEventListener('detectable-table-change', (event) => {
        this.h = event.detail.h;
        this.m = event.detail.m;
        this.fa = event.detail.fa;
        this.cr = event.detail.cr;

        this.far = event.detail.far;
        this.hr = event.detail.hr;

        this.d = SDTMath.hrFar2D(this.hr, this.far, this.s);
        this.c = SDTMath.hrFar2C(this.hr, this.far, this.s);
      });
    }

    if (this.rocSpace) {
      this.rocSpace.addEventListener('roc-point-change', (event) => {
        this.d = event.detail.d;
        this.c = event.detail.c;
        this.s = event.detail.s;

        this.hr = event.detail.hr;
        this.far = event.detail.far;

        const newh = Math.round((this.h + this.m) * this.hr);
        const newm = (this.h + this.m) - newh;
        const newfa = Math.round((this.fa + this.cr) * this.far);
        const newcr = (this.fa + this.cr) - newfa;
        this.h = newh;
        this.m = newm;
        this.fa = newfa;
        this.cr = newcr;
      });
    }

    if (this.sdtModel) {
      this.sdtModel.addEventListener('sdt-model-change', (event) => {
        this.d = event.detail.d;
        this.c = event.detail.c;
        this.s = event.detail.s;

        this.hr = event.detail.hr;
        this.far = event.detail.far;

        const newh = Math.round((this.h + this.m) * this.hr);
        const newm = (this.h + this.m) - newh;
        const newfa = Math.round((this.fa + this.cr) * this.far);
        const newcr = (this.fa + this.cr) - newfa;
        this.h = newh;
        this.m = newm;
        this.fa = newfa;
        this.cr = newcr;
      });
    }
  }

  update(changedProperties) {
    super.update(changedProperties);

    if (this.detectableControl) {
      this.detectableControl.color = (this.detectableControl.color != null)
        ? this.color
        : undefined;
      this.detectableControl.zRoc = (this.detectableControl.zRoc != null)
        ? this.zRoc
        : undefined;
    }

    if (this.detectableTable) {
      this.detectableTable.color = this.color;
      this.detectableTable.h = this.h;
      this.detectableTable.m = this.m;
      this.detectableTable.cr = this.cr;
      this.detectableTable.fa = this.fa;
    }

    if (this.rocSpace) {
      this.rocSpace.hr = this.hr;
      this.rocSpace.far = this.far;
    }

    if (this.sdtModel) {
      this.sdtModel.color = this.color;

      this.sdtModel.d = this.d;
      this.sdtModel.c = this.c;
      this.sdtModel.s = this.s;
    }

    if (this.rocSpaces.length > 0) {
      this.rocSpaces.forEach((rocSpace) => {
        rocSpace.zRoc = this.zRoc;
        rocSpace.setWithSDT(this.d, this.c, 'default', '', this.s);
      });
    }
  }
}

customElements.define('sdt-example-interactive', SDTExampleInteractive);
