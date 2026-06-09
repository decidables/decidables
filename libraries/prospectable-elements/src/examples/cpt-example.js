import {css} from 'lit';

import DecidablesMixinExample from '@decidables/decidables-elements/mixins/mixin-example';

import ProspectableElement from '../prospectable-element';

/*
  CPTExample Base Class - Not intended for instantiation!
  <cpt-example>
*/
export default class CPTExample extends DecidablesMixinExample(ProspectableElement) {
  static get styles() {
    return [
      super.styles,
      css`
        /* HACK: Sibling selectors not working with ::slotted */
        /* .body ::slotted(prospectable-control) + ::slotted(risky-task),
           .body ::slotted(risky-task) + ::slotted(prospectable-response) { */
        .body ::slotted(risky-task),
        .body ::slotted(prospectable-response) {
          margin-left: 0;
        }
      `,
    ];
  }
}

customElements.define('cpt-example', CPTExample);
