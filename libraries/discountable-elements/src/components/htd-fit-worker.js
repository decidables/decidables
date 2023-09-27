/* eslint no-restricted-globals: ["off", "self"] */

// Needed for d3 in WebWorker!
import 'regenerator-runtime/runtime';

import * as BayesDistributions from 'bayes.js/distributions';
import * as BayesMcmc from 'bayes.js/mcmc';
import * as d3 from 'd3';
import HTDMath from '@decidables/discountable-math';

self.onmessage = (event) => {
  const params = {
    k: {type: 'real', lower: 0, upper: 100},
    luce: {type: 'real', lower: 0, upper: 100},
  };

  const logPost = (state, data) => {
    let lp = 0;

    // Priors
    const kMean = 2;
    const kShape = 3;
    lp += BayesDistributions.gamma(
      state.k,
      kShape,
      kShape / kMean,
    );
    // lp += BayesDistributions.unif(state.k, 0, 100);

    const luceMean = 2;
    const luceShape = 3;
    lp += BayesDistributions.gamma(
      state.luce,
      luceShape,
      luceShape / luceMean,
    );
    // lp += BayesDistributions.unif(state.luce, 0, 100);

    // Likelihood
    data.forEach((choice) => {
      // Values
      const v1 = HTDMath.adk2v(choice.a1, choice.d1, state.k);
      const v2 = HTDMath.adk2v(choice.a2, choice.d2, state.k);

      // Choice of sooner or later is sampled from a Bernoulli distribution
      // Luce choice rule is used to compute probability of waiting! (0 = sooner, 1 = later)
      const binval = 1 / (1 + Math.exp(state.luce * (v1 - v2)));

      // Actual response
      const response = (choice.response === 'first') ? 0 : 1;

      lp += BayesDistributions.bern(response, binval);
    });

    return lp;
  };

  // Initializing the sampler
  const sampler = new BayesMcmc.AmwgSampler(params, logPost, event.data);
  // Burning some samples to the MCMC gods and sampling 5000 draws
  sampler.burn(1000);
  const samples = sampler.sample(5000);

  // Extract summary stats
  const results = {
    k: d3.median(samples.k),
    luce: d3.median(samples.luce),
  };

  self.postMessage({results: results, samples: samples});
};
