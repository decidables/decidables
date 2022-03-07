import {expect} from '../../../scripts/test';

import DecidablesConvertSet from '../src/converter-set';

describe('decidables-converter-set', () => {
  it('converts from attribute to property', () => {
    expect(DecidablesConvertSet.fromAttribute('alpha beta gamma'))
      .to.deep.equal(new Set(['alpha', 'beta', 'gamma']));
  });

  it('converts from property to attribute', () => {
    expect(DecidablesConvertSet.toAttribute(new Set(['alpha', 'beta', 'gamma'])))
      .to.equal('alpha beta gamma');
  });
});
