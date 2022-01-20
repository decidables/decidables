/* eslint no-restricted-globals: ["off", "self"] */

// Needed for d3 in WebWorker!
import 'regenerator-runtime/runtime';

import * as BayesDistributions from 'bayes.js/distributions';
import * as BayesMcmc from 'bayes.js/mcmc';
import * as d3 from 'd3';
import CPTMath from '@decidables/prospectable-math';

self.onmessage = (event) => {
  const params = {
    alpha: {type: 'real', lower: 0, upper: 1},
    lambda: {type: 'real', lower: 0, upper: 10},
    gamma: {type: 'real', lower: 0, upper: 1},
    luce: {type: 'real', lower: 0, upper: 100},
  };

  const logPost = (state, data) => {
    let lp = 0;

    // Priors
    const alphaMean = 0.5;
    const alphaSampleSize = 2.5;
    lp += BayesDistributions.beta(
      state.alpha,
      alphaMean * alphaSampleSize,
      (1 - alphaMean) * alphaSampleSize,
    );
    // lp += BayesDistributions.unif(state.alpha, 0, 1);

    const lambdaMean = 2;
    const lambdaShape = 3;
    lp += BayesDistributions.gamma(
      state.lambda,
      lambdaShape,
      lambdaShape / lambdaMean,
    );
    // lp += BayesDistributions.unif(state.lambda, 0, 10);

    const gammaMean = 0.5;
    const gammaSampleSize = 2.5;
    lp += BayesDistributions.beta(
      state.gamma,
      gammaMean * gammaSampleSize,
      (1 - gammaMean) * gammaSampleSize,
    );
    // lp += BayesDistributions.unif(state.gamma, 0, 1);

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
      const vl = CPTMath.xal2v(choice.xl, state.alpha, state.lambda);
      const vw = CPTMath.xal2v(choice.xw, state.alpha, state.lambda);
      const vs = CPTMath.xal2v(choice.xs, state.alpha, state.lambda);

      // Probabilities
      const ww = CPTMath.pg2w(choice.pw, state.gamma);
      const wl = 1 - ww;

      // Utilities
      const ug = wl * vl + ww * vw;
      const us = vs;

      // Choice of gamble or sure is sampled from a Bernoulli distribution
      // Luce choice rule is used to compute probability of gambling! (0 = sure, 1 = gamble)
      const binval = 1 / (1 + Math.exp(state.luce * (us - ug)));

      // Actual response
      const response = (choice.response === 'sure') ? 0 : 1;

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
    alpha: d3.median(samples.alpha),
    lambda: d3.median(samples.lambda),
    gamma: d3.median(samples.gamma),
    luce: d3.median(samples.luce),
  };

  self.postMessage({results: results, samples: samples});
};
