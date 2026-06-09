import {css} from 'lit';

import DecidablesMixinExample from '@decidables/decidables-elements/mixins/mixin-example';

import DetectableElement from '../detectable-element';

/*
  SDTExample Base Class - Not intended for instantiation!
  <sdt-example>
*/
export default class SDTExample extends DecidablesMixinExample(DetectableElement) {
  static get styles() {
    return [
      super.styles,
      css`
        /* HACK: Sibling selectors not working with ::slotted */
        /* .body ::slotted(detectable-control) + ::slotted(rdk-task),
           .body ::slotted(rdk-task) + ::slotted(detectable-response) { */
        .body ::slotted(rdk-task),
        .body ::slotted(detectable-response) {
          margin-left: 0;
        }
      `,
    ];
  }
}

customElements.define('sdt-example', SDTExample);
