
import DecidablesConverterArray from '@decidables/decidables-elements/converter-array';

import SDTExample from './sdt-example';

/*
  SDTExampleMulti element
  <sdt-example-multi>
*/
export default class SDTExampleMultiple extends SDTExample {
  static get properties() {
    return {
      variable: {
        attribute: 'variable',
        type: String,
        reflect: true,
      },
      values: {
        attribute: 'values',
        converter: DecidablesConverterArray,
        reflect: true,
      },
    };
  }

  constructor() {
    super();
    this.variables = ['d', 'c'];
    this.variable = 'd';
    this.values = [0, 1];
  }

  firstUpdated(/* changedProperties */) {
    this.detectableControl = this.querySelector('detectable-control');
    this.rocSpace = this.querySelector('roc-space');
    this.sdtModel = this.querySelector('sdt-model');

    if (this.detectableControl) {
      this.detectableControl.addEventListener('detectable-control-z-roc', (event) => {
        this.rocSpace.zRoc = event.detail.zRoc;
      });
    }

    if (this.rocSpace) {
      this.rocSpace.setWithSDT(1, 0, 'default', '', 1);
      if (this.variable === 'd') {
        this.values.forEach((d, index) => {
          this.rocSpace.setWithSDT(d, this.sdtModel.c, `point${index}`, index + 1, this.sdtModel.s);
        });
      } else if (this.variable === 'c') {
        this.values.forEach((c, index) => {
          this.rocSpace.setWithSDT(this.sdtModel.d, c, `point${index}`, index + 1, this.sdtModel.s);
        });
      }
    }

    if (this.sdtModel) {
      this.sdtModel.addEventListener('sdt-model-change', (event) => {
        if (this.rocSpace) {
          this.rocSpace.setWithSDT(event.detail.d, event.detail.c, 'default', '', event.detail.s);
          if (this.variable === 'd') {
            this.values.forEach((d, index) => {
              this.rocSpace.setWithSDT(d, event.detail.c, `point${index}`, index + 1, event.detail.s);
            });
          } else if (this.variable === 'c') {
            this.values.forEach((c, index) => {
              this.rocSpace.setWithSDT(event.detail.d, c, `point${index}`, index + 1, event.detail.s);
            });
          }
        }
      });
    }
  }
}

customElements.define('sdt-example-multiple', SDTExampleMultiple);
