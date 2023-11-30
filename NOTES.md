## Notes

Getting the following warning from `node`:
  (node:12224) [DEP0040] DeprecationWarning: The `punycode` module is deprecated.
  Please use a userland alternative instead.
This is due to the following chain of transitive dependencies:
  @citation-js/core latest (0.7.1)
  fetch-ponyfill latest (7.1.0)
  node-fetch ~2.6.1 (used in 2.6.3 through 2.7.0)
  whatwg-url ^5.0.0
  punycode
The issue is that the latest `fetch-ponyfill` relies on an old version of `node-fetch`.
If `fetch-ponyfill` bumped to the latest (^3) `node-fetch` this would go away

## Write-up

- Learning through interaction
  - Understanding relationships through perception-action loops
    - <https://arxiv.org/pdf/1112.1125.pdf>
    - <https://blog.mindresearch.org/blog/perception-action-cycle>
    - <https://doi.org/10.1186/s41235-017-0053-8>
  - Learning & constructionism (Papert)
    - <https://en.wikipedia.org/wiki/Constructionist_learning>
- Content for learning cognitive psychology/neuroscience
  - Example task
  - Empirical data collection
  - Live computational model
  - Fit data to model
  - Generate data from model
- Technology for explorable explanations
  - Build: git + node + yarn + gulp + plugins
  - Text: markdown (remark) + citeproc
  - Formatting: bootstrap + scss + ejs
  - Interactive content: d3 + web components + lit-element

## Outline

- *decidables*
  - *detectable*: Signal Detection Theory
    - Introduction
    - Behavior: Yes/No RDK task
      - Stimulus: signal & noise
      - Response: present or absent
      - Outcome: correct/error, hit/miss/FA/CR
      - Tables & rates
      - ROC space
    - Model: SDT
      - Measurement & sensitivity
      - Threshold & bias
      - SDT
      - Iso-sensitivity curves
      - Iso-bias curves
      - Model exploration
      - Model fitting
      - Model predictions
    - Advanced
      - Sensitivity & difficulty
      - Bias & incentive
      - zROC space
      - Unequal variance
    - Applications
      - Memory?
      - Medical diagnostics?
    - Conclusion
  - *prospectable*: Cumulative Prospect Theory (versus Expected Value & Expected Utility)
    - [Visualizations]
      - Pie chart options? gamble vs sure
      - Value function
      - Probability function
      - Marschak-Machina triangle?
    - Introduction
    - Risky decision making
      - Choosing between sure outcomes and gambles
    - Value
      - Prescriptive: EV (& EU)
      - Empirical: violations - marginal utility
      - Empirical: violations - loss aversion
      - Descriptive: subjective utility function
    - Probability
      - Prescriptive: EV (& EU)
      - Empirical: violations - overweighting small probabilities
      - Empirical: violations - underweighting large probabilities
      - Descriptive: decision weight function
    - Reference point
      - Prescriptive: absolute
      - Empirical: violations - framing
      - Descriptive: relative
    - CPT
      - Decision space visualization?
      - Model exploration
      - Model fitting
      - Model prediction
    - Advanced
      - Separate decision weights for gains and losses
      - Discrete performance from continuous parameters?
      - Individual differences?
    - Applications
      - Health message framing?
    - Conclusion
  - *discountable*: Temporal discounting
    - Introduction
    - Behavior
      - Task: intertemporal choice task
      - Method: stairstep procedure
      - Analysis: area under the curve (AUC)
    - Model (hyperbolic discounting)
      - Prescriptive: exponential
      - Empirical: violations - preference reversals
      - Descriptive: hyperbolic
      - Model comparison: none, linear, exponential, hyperbolic
      - Model exploration
      - Model fitting
      - Model prediction
    - Advanced
      - Interaction of temporal discounting and PT value function?
    - Applications
      - Drug addiction?
    - Conclusion
  - Possibilities...
    - Ambiguity?
      - Sure vs risky vs ambiguous options
      - Models of ambiguity?
    - Learning?
      - IGT & BART
    - Volatility?
    - Bayesian inference?
  - *accumulable*: Drift-diffusion/race/LBA model of RT
    - Introduction
    - Behavior: 2AFC RDK task
      - Stimulus: motion left or right?
      - Response: left or right
      - Outcome: correct or error
      - RT mean and SD
      - RT histograms
      - RT quantiles?
    - Model: DDM/LBA/?
      - Evidence accumulation
      - Starting point
      - Drift rate
      - Boundary
      - RT distributions
      - Model exploration
      - Model fitting
      - Model prediction
    - Advanced
      - Race vs. diffusion <https://doi.org/10.1016/j.tics.2016.01.007>
      - Variability (e.g. within vs between trials)
      - Time limits & collapsing boundaries
    - Applications
      - ?Neural modeling?
    - Conclusion
