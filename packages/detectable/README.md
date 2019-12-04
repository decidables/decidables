<!--lint disable first-level-heading -->
# d'etectable
<!--lint enable first-level-heading -->

## Introduction

- [x] SDT as an example of applied cognitive science
  - [x] History of SDT and radar
  - [x] Other applications: memory, medicine, etc...
- [x] SDT as an example of the decomposition of cognition
  - [ ] Processes of perception, decision making, etc...
- [x] SDT as an example of how we use formal models
  - [x] Existence proofs of what is possible for a given conceptual framework/theory
  - [x] A way to fit human data and test how well a theory can account for that data
  - [x] A way to make quantitative predictions from theory for comparison to human data
- [x] SDT as an example of the links between mind & brain & behavior
  - [x] SDT as entry point into computational cognitive neuroscience
  - [x] Evidence accumulation and the neural basis of perceptual decision making

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

## Overall Project

- Decidable
  - Detectable: Signal Detection Theory
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
  - Accumulable: Drift-diffusion/race/LBA model of RT
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
  - Prospectable: Cumulative Prospect Theory (versus Expected Value & Expected Utility)
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
  - Discountable: Temporal discounting
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
- Possible?
  - Ambiguity?
    - Sure vs risky vs ambiguous options
    - Models of ambiguity?
  - Learning?
    - IGT & BART
  - Volatility?
  - Bayesian inference?

---

## Style Guide

- Within a page:
  - Headings start at H2, only first letter is capitalized
  - `Code` used for UI elements
  - **Bold** used for keywords
  - *Italics* used for emphasis

## Features/Bugs

- Technical
  - Label values IN iso-plots? or allow hover or click querying of iso-plots?
    - Hover/click could be extended ROC generally and to Model plot as well?
  - Resolve ambiguity between different uses of same color
    - For example, "Respond Present" as a trial type versus "Present" as a response versus
      "?Present?" as part of a distribution
  - Use something else instead of inline code for terms
    - New remark-span! [content]{attributes}
  - More generally, use a different method to mark "UI elements", "keywords", "math", etc...
    - Use remark-span for all of these: [UI element]{ui} [keyword]{key} [math]{math} etc...
  - Add "note" blocks for explaining UI stuff that isn't "real" content
  - Add "question" blocks for thoughts for readers to try - maybe with foldout answers?
    - New remark-divs
- Content
  - Switch to subsections for better overall organization/structure?
  - Add snazzy cover page?
  - Add TOC page w/descriptions?
  - Add page before SDT, connecting sensitivity and bias, and showing different views of model
    - Or build threshold on top of distributions, so they are naturally combined!
  - Split Tables & Rates to discuss Accuracy & base rate
    - Change "Accuracy" in "outcomes.html"
    - Move "Tabulating outcomes" from "rates.html" to "outcomes.html"
    - Move "Accuracy" to top of "rates.html"
    - Add "PPV" and "FOMR" to rates.html"
    - Add page on "counter-intuitive" measures: accuracy & P(S|R) vs P(R|S)
  - Asking lots of open-ended questions vs. questions with later answers vs. explanation...
  - Unequal variance
    - d' vs d_a, and c vs c_a
    - muN != muS != d'
    - lambda != c
    - distinction between parameter s and sigma

### High Importance

### Medium Importance

### Low Importance

- Use localStorage to maintain state?
- Optimize update() based on changedProperties?
- Linting and transpiling in tagged template literals?
- Change 'browserslist' to `last 1 version, not dead, > 0.2%`?
- Custom spinner that looks better than User Agent spinners?


- Edge/IE11 - slider shadow is clipped
- Edge/IE11 - minor edge defects between SVG element and shadow
- Edge/IE11 - no arrows for numeric controls
- Firefox - spinner arrows look ugly and asymmetrical

---

## Browser Notes/Quirks/Bugs

### Desktop (Current & Current-1 as of ???)

#### Chrome ???

#### Edge ???

#### Firefox ???

- No CSS SVG Geometry Properties

#### Safari ???

#### IE11 ???

- No CSS variables outside custom elements (and not patched by ShadyCSS!)

#### Opera ???

### Mobile

#### Chrome on Android ???

#### Safari on iOS ???

#### Other?

---

## Development Tooling

Dependencies update 11/19/2019.

### Global

- Manually install *git*
- Manually install *node*
- Manually install *yarn*

### Local

- `yarn setup`
  - Downloads and installs *yarn dependencies* & *devDependencies* to `node_modules/`
- `yarn compile`
  - Compiles/preprocesses files from `src/` to `local/` while pulling in dependencies
- `yarn watch`
  - Executes `compile` on file changes in `src/`
- `yarn lint`
  - Lints markdown, scripts, and styles in `src/`
- `yarn build`
  - Builds optimized project from `local/` to `dist/`
- `yarn deploy`
  - Copies files from `dist/` to server

### Utilities

- `yarn serve`
  - Runs a basic http server, to serve `SDT/` (e.g. <http://localhost:8000/src/> or <http://localhost:8000/dist/>)
- `yarn outdated`
  - Check for outdated dependencies
- `yarn upgrade --latest`
  - Upgrade to latest dependencies, ignoring semver!
- `yarn upgrade-interactive --latest`
  - Manual upgrade to latest dependencies, ignoring semver!

---

## Project File Organization

- `SDT/`
  - `.gitattributes` (Config for *git*)
  - `.gitignore` (Config for *git*)
  - `.eslintrc.json` (Config for *eslint*)
  - `.remarkrc` (Config for *remark-lint*)
  - `.stylelintrc.json` (Config for *stylelint*)
  - `package.json` (Config for *yarn*)
  - `gulpfile.js` (Config for *gulp*)
  - `README.md` (This file)
  - `node_modules/` (*yarn dependencies* & *devDependencies* installed by `setup`)
    **\[autogenerated\]**
  - `src/` (Source files)
  - `local/` (Compiled project for local testing, created from `src` by `compile`)
    **\[autogenerated\]**
  - `dist/` (Optimized files for distribution, created from `local` by `build`)
    **\[autogenerated\]**
