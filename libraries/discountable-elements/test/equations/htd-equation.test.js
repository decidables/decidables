import {expect} from '../../../../scripts/test';

import HTDEquation from '../../src/equations/htd-equation';

describe('htd-equation', () => {
  it('has property "numeric"', () => {
    expect(HTDEquation.properties).to.have.property('numeric');
  });

  it('has styles', () => {
    expect(HTDEquation.styles).to.have.lengthOf(2);
  });
});
