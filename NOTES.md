## Notes

- Convert all code documentation to JSDoc format
  - Use tool to extract docs from code files and add to README?
- Use MathML with embedded elements for equations?
- Universal bounds and step sizes for each parameter?
- Separate Controls vs Parameters
- Keyboard responses for all tasks
- Rationalize all examples across all decidables
- Larger drag targets for touch in all decidables
- Create "quick take" pages for each model:
  - exploration
  - simulation
  - fitting (enter own data?)
  - Ideas:
    - This would be separate from in-depth explanations
    - Provide "early" access to web components
    - Maybe even a page that demonstrates usage of components
- Move bugs from README into NOTES

## Debugging

To trace deprecations:
  `process.traceDeprecation = true;`

## Waiting to upgrade

- @commitlint/cli 18.6.1  19.7.1
- @commitlint/config-conventional 18.6.3  19.7.1
  Waiting on VSCode plugin: @vivaxy/vscode-conventional-commits
- eslint  8.57.0  9.19.0
  Waiting on airbnb/javascript
- eslint-formatter-pretty 5.0.0 6.0.1
  Waiting on eslint to go ESM
- sass 1.76.0 1.84.0
  Waiting on bootstrap to stop using deprecated sass
- source-serif  4.4.0 4.5.0
  Waiting on font compatibility issues

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
