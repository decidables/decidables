import {expect} from '../../../../scripts/test';

import SDTEquation from '../../src/equations/sdt-equation';

describe('sdt-equation', () => {
  it('has property "numeric"', () => {
    const properties = SDTEquation.properties; // eslint-disable-line prefer-destructuring
    expect(properties).to.have.property('numeric');
  });

  it('has styles', () => {
    const styles = SDTEquation.styles; // eslint-disable-line prefer-destructuring
    expect(styles).to.have.lengthOf(2);
  });
});
