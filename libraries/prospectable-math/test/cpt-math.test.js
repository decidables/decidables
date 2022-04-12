import {expect} from '../../../scripts/test';

import CPTMath from '../src/cpt-math';

describe('cpt-math', () => {
  it('calculates subjective value from value, alpha, and lambda', () => {
    expect(CPTMath.xal2v(16, 0.5, 2)).to.almost.equal(4);
    expect(CPTMath.xal2v(-16, 0.5, 2)).to.almost.equal(-8);
    expect(CPTMath.xal2v(0, 0.5, 2)).to.almost.equal(0);
  });

  it('calculates alpha from value, lambda, and subjective value', () => {
    expect(CPTMath.xlv2a(16, 2, 4)).to.almost.equal(0.5);
    expect(CPTMath.xlv2a(-16, 2, -8)).to.almost.equal(0.5);
    expect(CPTMath.xlv2a(0, 2, 0)).to.be.NaN; /* eslint-disable-line no-unused-expressions */
  });

  it('calculates lambda from value, alpha, and subjective value', () => {
    expect(CPTMath.xav2l(16, 0.5, 4)).to.be.NaN; /* eslint-disable-line no-unused-expressions */
    expect(CPTMath.xav2l(-16, 0.5, -8)).to.almost.equal(2);
    expect(CPTMath.xav2l(0, 0.5, 0)).to.be.NaN; /* eslint-disable-line no-unused-expressions */
  });

  it('calculates decision weight from probability and gamma', () => {
    expect(CPTMath.pg2w(0.75, 0.5)).to.be.almost(0.46, 0.01);
    expect(CPTMath.pg2w(0.25, 0.5)).to.be.almost(0.27, 0.01);
    expect(CPTMath.pg2w(0.5, 0.5)).to.be.almost(0.35, 0.01);
  });
});
