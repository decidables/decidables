import {css} from 'lit';

import DecidablesMixinExample from '@decidables/decidables-elements/mixins/mixin-example';

import DiscountableElement from '../discountable-element';

/*
  CPTExample Base Class - Not intended for instantiation!
  <htd-example>
*/
export default class HTDExample extends DecidablesMixinExample(DiscountableElement) {
  static get styles() {
    return [
      super.styles,
      css`
        /* HACK: Sibling selectors not working with ::slotted */
        /* .body ::slotted(discountable-control) + ::slotted(itc-task),
           .body ::slotted(itc-task) + ::slotted(discountable-response) { */
        .body ::slotted(itc-task),
        .body ::slotted(discountable-response) {
          margin-left: 0;
        }
      `,
    ];
  }
}

customElements.define('htd-example', HTDExample);
