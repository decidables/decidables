import {expect} from '../../../scripts/test-utility';

import DecidablesConvertArray from '../src/converter-array';

describe('decidables-converter-array', () => {
  it('converts from attribute to property', () => {
    expect(DecidablesConvertArray.fromAttribute('1 2 3 4 5')).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it('converts from property to attribute', () => {
    expect(DecidablesConvertArray.toAttribute([1, 2, 3, 4, 5]))
      .to.equal('1.000 2.000 3.000 4.000 5.000');
  });
});
