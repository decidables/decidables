import {expect} from '../../../scripts/test-utility';

import DDMMath from '../src/ddm-math';

describe('ddm-math', () => {
  it('calculates stats from trials', () => {
    expect(DDMMath.trials2stats([
      {outcome: 'correct', rt: 400},
      {outcome: 'correct', rt: 600},
    ])).to.deep.equal({
      accuracy: 1,
      correctCount: 2,
      errorCount: 0,
      nrCount: 0,
      meanRT: 500,
      correctMeanRT: 500,
      errorMeanRT: NaN,
      sdRT: 141.4213562373095,
      correctSDRT: 141.4213562373095,
      errorSDRT: NaN,
    });
    expect(DDMMath.trials2stats([
      {outcome: 'error', rt: 300},
      {outcome: 'nr'},
      {outcome: 'error', rt: 500},
    ])).to.deep.equal({
      accuracy: 0,
      correctCount: 0,
      errorCount: 2,
      nrCount: 1,
      meanRT: 400,
      correctMeanRT: NaN,
      errorMeanRT: 400,
      sdRT: 141.4213562373095,
      correctSDRT: NaN,
      errorSDRT: 141.4213562373095,
    });
  });

  it('calculates error probability from boundary separation, starting point, and drift rate', () => {
    expect(DDMMath.azv2pE(1, 0.5, 1)).to.be.almost(0.269, 0.001);
  });

  it('calculates correct probability from boundary separation, starting point, and drift rate', () => {
    expect(DDMMath.azv2pC(1.8, 0.3, 3)).to.be.almost(0.961, 0.001);
  });

  it('calculates mean RT from boundary separation, starting point, drift rate, and non-decision time', () => {
    expect(DDMMath.azvt02m(1.4, 0.7, 2, 200)).to.be.almost(398.7, 0.1);
  });

  it('calculates error mean RT from boundary separation, starting point, drift rate, and non-decision time', () => {
    expect(DDMMath.azvt02mE(1.7, 0.6, 2.5, 150)).to.be.almost(539.5, 0.1);
  });

  it('calculates correct mean RT from boundary separation, starting point, drift rate, and non-decision time', () => {
    expect(DDMMath.azvt02mC(1.2, 0.4, 1.5, 300)).to.be.almost(626.2, 0.1);
  });

  it('calculates SD RT from boundary separation, starting point, and drift rate', () => {
    expect(DDMMath.azv2sd(1.1, 0.1, 1)).to.be.almost(201.2, 0.1);
  });

  it('calculates error SD RT from boundary separation, starting point, and drift rate', () => {
    expect(DDMMath.azv2sdE(1.9, 0.8, 0.5)).to.be.almost(700.5, 0.1);
  });

  it('calculates correct SD RT from boundary separation, starting point, and drift rate', () => {
    expect(DDMMath.azv2sdC(1.3, 0.9, 4.0)).to.be.almost(44.9, 0.1);
  });

  it('calculates error RT density from time, boundary separation, starting point, and drift rate', () => {
    expect(DDMMath.tazv2gE(0.7, 2, 0.55, 2.25)).to.be.almost(0.004, 0.001);
  });

  it('calculates correct RT density from time boundary separation, starting point, and drift rate', () => {
    expect(DDMMath.tazv2gC(0.45, 1.75, 0.45, 3.25)).to.be.almost(0.958, 0.001);
  });
});
