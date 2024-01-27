import {expect} from '../../../../scripts/test-utility';

import CPTEquation from '../../src/equations/cpt-equation';

describe('sdt-equation', () => {
  it('has property "numeric"', () => {
    expect(CPTEquation.properties).to.have.property('numeric');
  });

  it('has styles', () => {
    expect(CPTEquation.styles).to.have.lengthOf(2);
  });
});
