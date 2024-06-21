import {expect} from '../../../../scripts/test-utility';

import DDMEquation from '../../src/equations/ddm-equation';

describe('ddm-equation', () => {
  it('has property "numeric"', () => {
    expect(DDMEquation.properties).to.have.property('numeric');
  });

  it('has styles', () => {
    expect(DDMEquation.styles).to.have.lengthOf(2);
  });
});
