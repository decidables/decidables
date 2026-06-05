
import {css} from 'lit';

import DecidablesMixinEquation from '@decidables/decidables-elements/mixins/mixin-equation';

import DiscountableElement from '../discountable-element';

/*
  HTDEquation Base Class - Not intended for instantiation!
  <cpt-equation>
*/
export default class HTDEquation extends DecidablesMixinEquation(DiscountableElement) {
  static get styles() {
    return [
      super.styles,
      css`
        /* Color scheme */
        /* .win {
          background: var(---color-better);
        }

        .loss {
          background: var(---color-worse);
        }

        .sure {
          background: var(---color-even);
        } */

        .a {
          background: var(---color-a-light);
        }

        .d {
          background: var(---color-d-light);
        }

        .k {
          background: var(---color-k-light);
        }

        .v {
          background: var(---color-v-light);
        }
      `,
    ];
  }
}
