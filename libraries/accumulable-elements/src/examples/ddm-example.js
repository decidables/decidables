import {css} from 'lit';

import DecidablesMixinExample from '@decidables/decidables-elements/mixins/mixin-example';

import AccumulableElement from '../accumulable-element';

/*
  DDMExample Base Class - Not intended for instantiation!
  <ddm-example>
*/
export default class DDMExample extends DecidablesMixinExample(AccumulableElement) {
  static get styles() {
    return [
      super.styles,
      css`
        /* HACK: Sibling selectors not working with ::slotted */
        /* .body ::slotted(accumulable-control) + ::slotted(rdk-2afc-task),
           .body ::slotted(rdk-2afc-task) + ::slotted(accumulable-response) { */
        .body ::slotted(rdk-2afc-task),
        .body ::slotted(accumulable-response) {
          margin-left: 0;
        }
      `,
    ];
  }
}

customElements.define('ddm-example', DDMExample);
