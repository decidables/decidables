
import {css} from 'lit';

import DecidablesMixinEquation from '@decidables/decidables-elements/mixins/mixin-equation';

import AccumulableElement from '../accumulable-element';

/*
  DDMEquation Base Class - Not intended for instantiation!
*/
export default class DDMEquation extends DecidablesMixinEquation(AccumulableElement) {
  static get styles() {
    return [
      super.styles,
      css`
        /* Color scheme */
        .a {
          background: var(---color-a-light);
        }

        .z {
          background: var(---color-z-light);
        }

        .v {
          background: var(---color-v-light);
        }

        .t0 {
          background: var(---color-t0-light);
        }

        .s {
          background: var(---color-s-light);
        }
      `,
    ];
  }
}
