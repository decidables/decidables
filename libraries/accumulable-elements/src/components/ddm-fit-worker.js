/* eslint no-restricted-globals: ["off", "self"] */

import DDMMath from '@decidables/accumulable-math';

self.onmessage = (event) => {
  const params = DDMMath.data2ez({...event.data, s: DDMMath.s});

  // ##### Arbitrary default values!!!
  const a = !isNaN(params.a) ? params.a : 1.5;
  const z = !isNaN(params.z) ? params.z : 0.5;
  const v = !isNaN(params.v) ? params.v : 0.1;
  const t0 = !isNaN(params.t0) ? params.t0 : 100;
  const s = !isNaN(params.s) ? params.s : DDMMath.s;

  const predicted = {
    accuracy: DDMMath.azv2pC(a, z, v),
    correctMeanRT: DDMMath.azvt02mC(a, z, v, t0),
    errorMeanRT: DDMMath.azvt02mE(a, z, v, t0),
    meanRT: DDMMath.azvt02m(a, z, v, t0),
    correctSDRT: DDMMath.azv2sdC(a, z, v),
    errorSDRT: DDMMath.azv2sdE(a, z, v),
    sdRT: DDMMath.azv2sd(a, z, v),
  };

  self.postMessage({
    params: {
      a, z, v, t0, s,
    },
    predicted,
  });
};
