
import {css} from 'lit';

import {DecidablesMixinEquation} from '@decidables/decidables-elements';

import ProspectableElement from '../prospectable-element';

/*
  CPTEquation Base Class - Not intended for instantiation!
  <cpt-equation>
*/
export default class CPTEquation extends DecidablesMixinEquation(ProspectableElement) {
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

        .x {
          background: var(---color-x-light);
        }

        .a {
          background: var(---color-a-light);
        }

        .l {
          background: var(---color-l-light);
        }

        .v {
          background: var(---color-v-light);
        }

        .p {
          background: var(---color-p-light);
        }

        .g {
          background: var(---color-g-light);
        }

        .w {
          background: var(---color-w-light);
        }

        .u {
          background: var(---color-u-light);
        }
      `,
    ];
  }
}
