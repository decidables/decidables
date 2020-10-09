
// import CPTMath from '@decidable/prospectable-math';

import CPTExample from './cpt-example';

/*
  CPTExampleModel element
  <sdt-example-model>
*/
export default class CPTExampleModel extends CPTExample {
  firstUpdated(/* changedProperties */) {
    this.cptControl = this.querySelector('cpt-control');
    this.cptValue = this.querySelector('cpt-value');
    this.cptProbability = this.querySelector('cpt-probability');
  }
}

customElements.define('cpt-example-model', CPTExampleModel);
