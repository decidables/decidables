/* eslint no-restricted-globals: ["off", "self"] */

import DDMMath from '@decidables/accumulable-math';

import * as EZ from './ez2';

self.onmessage = (event) => {
  const params = EZ.data2ez({...event.data, s: DDMMath.s});

  // ##### Arbitrary default values!!!
  const a = !isNaN(params.a) ? params.a : 1.5;
  const z = !isNaN(params.z) ? params.z : 0.5;
  const v = !isNaN(params.v) ? params.v : 0.1;
  const t0 = !isNaN(params.t0) ? params.t0 : 100;
  const s = !isNaN(params.s) ? params.s : DDMMath.s;

  const predicted = {
    accuracy: DDMMath.azvs2pC(a, z, v),
    correctMeanRT: DDMMath.azvt0s2mC(a, z, v, t0),
    errorMeanRT: DDMMath.azvt0s2mE(a, z, v, t0),
    meanRT: DDMMath.azvt0s2m(a, z, v, t0),
    correctSDRT: DDMMath.azvs2sdC(a, z, v),
    errorSDRT: DDMMath.azvs2sdE(a, z, v),
    sdRT: DDMMath.azvs2sd(a, z, v),
  };

  self.postMessage({
    params: {
      a, z, v, t0, s,
    },
    predicted,
  });
};
