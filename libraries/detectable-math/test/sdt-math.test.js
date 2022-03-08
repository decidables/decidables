import {expect} from '../../../scripts/test';

import SDTMath from '../src/sdt-math';

describe('sdt-math', () => {
  it('calculates hit rate from hits and misses', () => {
    expect(SDTMath.hM2Hr(0, 0)).to.almost.equal(0);
    expect(SDTMath.hM2Hr(0, 10)).to.almost.equal(0);
    expect(SDTMath.hM2Hr(10, 0)).to.almost.equal(1);
    expect(SDTMath.hM2Hr(20, 20)).to.almost.equal(0.5);
    expect(SDTMath.hM2Hr(100, 300)).to.almost.equal(0.25);
    expect(SDTMath.hM2Hr(95, 5)).to.almost.equal(0.95);
  });

  it('calculates false alarm rate from false alarms and correct rejections', () => {
    expect(SDTMath.faCr2Far(0, 0)).to.almost.equal(0);
    expect(SDTMath.faCr2Far(0, 10)).to.almost.equal(0);
    expect(SDTMath.faCr2Far(10, 0)).to.almost.equal(1);
    expect(SDTMath.faCr2Far(20, 20)).to.almost.equal(0.5);
    expect(SDTMath.faCr2Far(100, 300)).to.almost.equal(0.25);
    expect(SDTMath.faCr2Far(95, 5)).to.almost.equal(0.95);
  });

  it('calculates accuracy from hits, misses, false alarms, and correct rejections', () => {
    expect(SDTMath.hMFaCr2Acc(0, 0, 0, 0)).to.almost.equal(0);
    expect(SDTMath.hMFaCr2Acc(0, 0, 0, 10)).to.almost.equal(1);
    expect(SDTMath.hMFaCr2Acc(0, 0, 10, 0)).to.almost.equal(0);
    expect(SDTMath.hMFaCr2Acc(0, 10, 0, 0)).to.almost.equal(0);
    expect(SDTMath.hMFaCr2Acc(10, 0, 0, 0)).to.almost.equal(1);
    expect(SDTMath.hMFaCr2Acc(5, 95, 0, 0)).to.almost.equal(0.05);
    expect(SDTMath.hMFaCr2Acc(0, 0, 5, 95)).to.almost.equal(0.95);
    expect(SDTMath.hMFaCr2Acc(25, 75, 25, 75)).to.almost.equal(0.5);
  });

  it('calculates accuracy from hit rate and false alarm rate', () => {
    expect(SDTMath.hrFar2Acc(0, 0)).to.almost.equal(0.5);
    expect(SDTMath.hrFar2Acc(0, 0.8)).to.almost.equal(0.1);
    expect(SDTMath.hrFar2Acc(0.4, 0)).to.almost.equal(0.7);
    expect(SDTMath.hrFar2Acc(1, 1)).to.almost.equal(0.5);
    expect(SDTMath.hrFar2Acc(0.75, 0.75)).to.almost.equal(0.5);
    expect(SDTMath.hrFar2Acc(0.6, 0.4)).to.almost.equal(0.6);
    expect(SDTMath.hrFar2Acc(0.3, 0.7)).to.almost.equal(0.3);
  });

  it('calculates positive predictive value from hits and false alarms', () => {
    expect(SDTMath.hFa2Ppv(0, 0)).to.almost.equal(0);
    expect(SDTMath.hFa2Ppv(0, 10)).to.almost.equal(0);
    expect(SDTMath.hFa2Ppv(10, 0)).to.almost.equal(1);
    expect(SDTMath.hFa2Ppv(20, 20)).to.almost.equal(0.5);
    expect(SDTMath.hFa2Ppv(100, 300)).to.almost.equal(0.25);
    expect(SDTMath.hFa2Ppv(95, 5)).to.almost.equal(0.95);
  });

  it('calculates false omission rate from misses and correct rejections', () => {
    expect(SDTMath.mCr2Fomr(0, 0)).to.almost.equal(0);
    expect(SDTMath.mCr2Fomr(0, 10)).to.almost.equal(0);
    expect(SDTMath.mCr2Fomr(10, 0)).to.almost.equal(1);
    expect(SDTMath.mCr2Fomr(20, 20)).to.almost.equal(0.5);
    expect(SDTMath.mCr2Fomr(100, 300)).to.almost.equal(0.25);
    expect(SDTMath.mCr2Fomr(95, 5)).to.almost.equal(0.95);
  });

  it('calculates sensitivity from hit rate and false alarm rate', () => {
    expect(SDTMath.hrFar2D(0, 0)).to.almost.equal(0);
    expect(SDTMath.hrFar2D(0.5, 0.5)).to.almost.equal(0);
    expect(SDTMath.hrFar2D(0.3, 0.7)).to.be.almost(-1.049, 0.001);
    expect(SDTMath.hrFar2D(0.8, 0.2)).to.be.almost(1.683, 0.001);
  });

  it('calculates sensitivity from hit rate and false alarm rate with unequal variance');

  it('calculates bias from hit rate and false alarm rate', () => {
    expect(SDTMath.hrFar2C(0.5, 0.5)).to.almost.equal(0);
    expect(SDTMath.hrFar2C(0.3, 0.7)).to.almost.equal(0);
    expect(SDTMath.hrFar2C(0.8, 0.2)).to.almost.equal(0);
    expect(SDTMath.hrFar2C(0.7, 0.8)).to.be.almost(-0.683, 0.001);
    expect(SDTMath.hrFar2C(0.8, 0.7)).to.be.almost(-0.683, 0.001);
    expect(SDTMath.hrFar2C(0.1, 0.2)).to.be.almost(1.062, 0.001);
    expect(SDTMath.hrFar2C(0.2, 0.1)).to.be.almost(1.062, 0.001);
  });

  it('calculates bias from hit rate and false alarm rate with unequal variance');

  it('calculates hit rate from sensitivity and bias', () => {
    expect(SDTMath.dC2Hr(0, 0)).to.almost.equal(0.5);
    expect(SDTMath.dC2Hr(-0.5, 0)).to.be.almost(0.40, 0.01);
    expect(SDTMath.dC2Hr(0.5, 0)).to.be.almost(0.60, 0.01);
    expect(SDTMath.dC2Hr(0, -0.5)).to.be.almost(0.69, 0.01);
    expect(SDTMath.dC2Hr(0, 0.5)).to.be.almost(0.31, 0.01);
    expect(SDTMath.dC2Hr(-1, -0.3)).to.be.almost(0.42, 0.01);
    expect(SDTMath.dC2Hr(0.8, 0.2)).to.be.almost(0.58, 0.01);
    expect(SDTMath.dC2Hr(-2, 0.5)).to.be.almost(0.07, 0.01);
  });

  it('calculates hit rate from sensitivity and bias with unequal variance');

  it('calculates false alarm rate from sensitivity and bias', () => {
    expect(SDTMath.dC2Far(0, 0)).to.almost.equal(0.5);
    expect(SDTMath.dC2Far(-0.5, 0)).to.be.almost(0.60, 0.01);
    expect(SDTMath.dC2Far(0.5, 0)).to.be.almost(0.40, 0.01);
    expect(SDTMath.dC2Far(0, -0.5)).to.be.almost(0.69, 0.01);
    expect(SDTMath.dC2Far(0, 0.5)).to.be.almost(0.31, 0.01);
    expect(SDTMath.dC2Far(-1, -0.3)).to.be.almost(0.79, 0.01);
    expect(SDTMath.dC2Far(0.8, 0.2)).to.be.almost(0.27, 0.01);
    expect(SDTMath.dC2Far(-2, 0.5)).to.be.almost(0.69, 0.01);
  });

  it('calculates false alarm rate from sensitivity and bias with unequal variance');

  it('calculates hit rate from sensitivity and false alarm rate', () => {
    expect(SDTMath.dFar2Hr(0, 0.5)).to.almost.equal(0.5);
    expect(SDTMath.dFar2Hr(-0.5, 0.6)).to.be.almost(0.40, 0.01);
    expect(SDTMath.dFar2Hr(0.5, 0.4)).to.be.almost(0.60, 0.01);
    expect(SDTMath.dFar2Hr(0, 0.69)).to.be.almost(0.69, 0.01);
    expect(SDTMath.dFar2Hr(0, 0.31)).to.be.almost(0.31, 0.01);
    expect(SDTMath.dFar2Hr(-1, 0.79)).to.be.almost(0.42, 0.01);
    expect(SDTMath.dFar2Hr(0.8, 0.27)).to.be.almost(0.58, 0.01);
    expect(SDTMath.dFar2Hr(-2, 0.69)).to.be.almost(0.07, 0.01);
  });

  it('calculates hit rate from sensitivity and false alarm rate with unequal variance');

  it('calculates hit rate from bias and false alarm rate', () => {
    expect(SDTMath.cFar2Hr(0, 0.5)).to.almost.equal(0.5);
    expect(SDTMath.cFar2Hr(0, 0.6)).to.be.almost(0.40, 0.01);
    expect(SDTMath.cFar2Hr(0, 0.4)).to.be.almost(0.60, 0.01);
    expect(SDTMath.cFar2Hr(-0.5, 0.69)).to.be.almost(0.69, 0.01);
    expect(SDTMath.cFar2Hr(0.5, 0.31)).to.be.almost(0.31, 0.01);
    expect(SDTMath.cFar2Hr(-0.3, 0.79)).to.be.almost(0.42, 0.01);
    expect(SDTMath.cFar2Hr(0.2, 0.27)).to.be.almost(0.58, 0.01);
    expect(SDTMath.cFar2Hr(0.5, 0.69)).to.be.almost(0.07, 0.01);
  });

  it('calculates hit rate from bias and false alarm rate with unequal variance');

  it('calculates mean of noise distribution from sensitivity', () => {
    expect(SDTMath.d2MuN(0)).to.equal(0);
    expect(SDTMath.d2MuN(4)).to.almost.equal(-2);
    expect(SDTMath.d2MuN(-1)).to.almost.equal(0.5);
  });

  it('calculates mean of noise distribution from sensitivity with unequal variance');

  it('calculates sensitivity from mean of noise distribution', () => {
    expect(SDTMath.muN2D(0)).to.equal(0);
    expect(SDTMath.muN2D(-2)).to.almost.equal(4);
    expect(SDTMath.muN2D(0.5)).to.almost.equal(-1);
  });

  it('calculates sensitivity from mean of noise distribution with unequal variance');

  it('calculates mean of signal distribution from sensitivity', () => {
    expect(SDTMath.d2MuS(0)).to.equal(0);
    expect(SDTMath.d2MuS(4)).to.almost.equal(2);
    expect(SDTMath.d2MuS(-1)).to.almost.equal(-0.5);
  });

  it('calculates mean of signal distribution from sensitivity with unequal variance');

  it('calculates sensitivity from mean of signal distribution', () => {
    expect(SDTMath.muS2D(0)).to.equal(0);
    expect(SDTMath.muS2D(-2)).to.almost.equal(-4);
    expect(SDTMath.muS2D(0.5)).to.almost.equal(1);
  });

  it('calculates sensitivity from mean of signal distribution with unequal variance');

  it('calculates threshold location from bias', () => {
    expect(SDTMath.c2L(0)).to.equal(0);
    expect(SDTMath.c2L(4)).to.almost.equal(4);
    expect(SDTMath.c2L(-1)).to.almost.equal(-1);
  });

  it('calculates threshold location from bias with unequal variance');

  it('calculates bias from threshold location', () => {
    expect(SDTMath.l2C(0)).to.equal(0);
    expect(SDTMath.l2C(4)).to.almost.equal(4);
    expect(SDTMath.l2C(-1)).to.almost.equal(-1);
  });

  it('calculates bias from threshold location with unequal variance');

  it('calculates height of signal distribution from standard deviation of signal distribution');

  it('calculates standard deviation of signal distribution from height of signal distribution');

  it('calculates Z-transformed hit rate from hit rate', () => {
    expect(SDTMath.hr2Zhr(0.1)).to.be.almost(-1.28, 0.01);
    expect(SDTMath.hr2Zhr(0.5)).to.be.almost(0, 0.01);
    expect(SDTMath.hr2Zhr(0.9)).to.be.almost(1.28, 0.01);
  });

  it('calculates Z-transformed false alarm rate from false-alarm rate', () => {
    expect(SDTMath.far2Zfar(0.1)).to.be.almost(-1.28, 0.01);
    expect(SDTMath.far2Zfar(0.5)).to.be.almost(0, 0.01);
    expect(SDTMath.far2Zfar(0.9)).to.be.almost(1.28, 0.01);
  });

  it('calculates hit rate from Z-transformed hit rate', () => {
    expect(SDTMath.zhr2Hr(-1.28)).to.be.almost(0.1, 0.01);
    expect(SDTMath.zhr2Hr(0)).to.be.almost(0.5, 0.01);
    expect(SDTMath.zhr2Hr(1.28)).to.be.almost(0.9, 0.01);
  });

  it('calculates false alarm rate from Z-transformed false alarm rate', () => {
    expect(SDTMath.zfar2Far(-1.28)).to.be.almost(0.1, 0.01);
    expect(SDTMath.zfar2Far(0)).to.be.almost(0.5, 0.01);
    expect(SDTMath.zfar2Far(1.28)).to.be.almost(0.9, 0.01);
  });
});
