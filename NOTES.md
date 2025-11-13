## Ideas

- build scripts: add encoding to readFile to go straight to string?
- Sass: use `pkg:` URLs to load from packages
- decidables-site: use exports field!
- fonts: WOFF2 only?
- testing: use waitUntil (as in discountable) instead of aTimeout!
- d'etectable: Incorporate Parameter controls
- discountable: Pausing animations
- dab'le: Flesh out descriptions
- decidables: Include description of dable
- standardize arrows on "colored" lines
- DecidablesElement svgDefs vs svgFilters?
- Elements
  - decidables-slider
    - use `writing-mode` for orientation?
      https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_writing_modes/Vertical_controls
    - remove old `ms` customizations
  - Remove all hard-coded values?
    - define central default, min, max, step, and jump for every variable?
  - Parameters:
  - Tasks:
  - Examples:
    - Should decidables-elements have base class for examples?
  - Interactive diagrams:
    - Colored measurement lines to indicate parameters? (prospectable, discountable)
    - Black plot lines w/colored measurement lines? (detectable)
  - Equations
    - Use MathML with embedded elements for equations?
    - Should decidables-elements have base class for equations?
- Sites
  - Quick Take
    - Separate sub-site with all quick takes! 
    - Create "quick take" pages for each model:
      - exploration
      - simulation
      - fitting (enter own data?)
    - This would be separate from in-depth explanations
    - Provide "early" access to web components
    - Maybe even a page that demonstrates usage of components
  - Search
    - Include a search function?
  - Persistence
    - Use localStorage or sessionStorage for maintaining page state?
    - Should this be done by elements? examples? pages?
  - Pages
    - Format negative numbers with true minus sign character?
    - Clean way for inter-page references?
    - Add "question" blocks for thoughts for readers to try - maybe with foldout answers?
      ```markdown
      :::question[Question?]
      Answer
      :::
      ```
- Development
  - Documentation
    - Cleanup headers and comments in all *.js files!
    - Convert all code documentation to JSDoc format
    - Use tool to extract docs from code files and add to README?
  - Accessibility
    - Run axe DevTools to check for a11y
    - Github links need title/text
    - Accessibility testing/auditing
  - Linting
    - Use prettier?
    - Better CSS linting - more stylistic rules?
    - Use *eslint-plugin-lit*? (https://www.npmjs.com/package/eslint-plugin-lit)
    - Use *eslint-plugin-wc*? (https://github.com/43081j/eslint-plugin-wc)
    - Linting and transpiling in tagged template literals?
  - Testing
    - Can we use *@testing-library/dom* for interface testing?
  - Build
    - Reducing bundle sizes
      - Tighter *D3* imports?
        - Tried this once and the bundle actually grew!
      - Drop *regenerator-runtime* and/or *core-js*?
      - Drop *Babel* entirely?
  - Libraries
    - Revisit proper targets?
    - How to create tree-shakable imports with web components
      - Issue: classes aren't used in JS, but registered components *are* used!
      - Maybe:
        1. No sideEffects false
        1. Always import needed classes
        1. Always import from specific file?
  - Dependencies
    - Replace Plotly with something lighter?
      - branch `echarts`: echarts & echarts-gl?
        issues with interactions inside a web component (shadowRoot)
      - branch `x3dom`:  d3-x3d & x3dom or x_ite?
        issues working at all in a web component (shadowRoot)

## Debugging

To trace deprecations:
  `process.traceDeprecation = true;`

## Waiting to upgrade

- eslint  8.57.0  9.19.0
  Waiting on airbnb/javascript
- eslint-formatter-pretty 5.0.0 6.0.1
  Waiting on eslint to go ESM
- sass 1.76.0 1.84.0
  Waiting on bootstrap to stop using deprecated sass

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
