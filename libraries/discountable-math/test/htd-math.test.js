import {expect} from '../../../scripts/test';

import HTDMath from '../src/htd-math';

describe('htd-math', () => {
  it('calculates value from amount, delay, and discounting factor', () => {
    expect(HTDMath.adk2v(100, 19, 1)).to.equal(5);
    expect(HTDMath.adk2v(50, 0, 0.5)).to.equal(50);
    expect(HTDMath.adk2v(0, 40, 0.25)).to.equal(0);
    expect(HTDMath.adk2v(20, 10, 0)).to.equal(20);
  });

  it('calculates discounting factor from amount, delay, and value', () => {
    expect(HTDMath.adv2k(100, 19, 5)).to.equal(1);
    expect(HTDMath.adv2k(50, 40, 50)).to.equal(0);
    expect(HTDMath.adv2k(20, 5, 10)).to.equal(0.2);
  });
});
