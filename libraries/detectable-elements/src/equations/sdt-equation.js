
import {css} from 'lit';

import {DecidablesMixinEquation} from '@decidables/decidables-elements';

import DetectableElement from '../detectable-element';

/*
  SDTEquation Base Class - Not intended for instantiation!
  <sdt-equation>
*/
export default class SDTEquation extends DecidablesMixinEquation(DetectableElement) {
  static get styles() {
    return [
      super.styles,
      css`
        /* Color scheme */
        .h {
          background: var(---color-h-light);
        }

        .m {
          background: var(---color-m-light);
        }

        .hr {
          background: var(---color-hr-light);
        }

        .fa {
          background: var(---color-fa-light);
        }

        .ppv {
          background: var(---color-present-light);
        }

        .fomr {
          background: var(---color-absent-light);
        }

        .acc {
          background: var(---color-acc-light);
        }

        .cr {
          background: var(---color-cr-light);
        }

        .far {
          background: var(---color-far-light);
        }

        .d {
          background: var(---color-d-light);
        }

        .c {
          background: var(---color-c-light);
        }

        .s {
          background: var(---color-s-light);
        }
      `,
    ];
  }
}
