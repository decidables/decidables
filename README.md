<!--lint disable first-level-heading -->

# decidable: Explorable Explanations of Decision Making

*decidable* is a collection of libraries and websites for explorable explanations of quantitative
approaches to human decision making.

*decidable* is implemented as a *git* monorepo on [GitHub](https://www.github.com). The packages are published to *npm* in the
`@decidable` scope.

<!--lint enable first-level-heading -->

## Overview

- *decidable*: Explorable Explanations of Decision Making
  - *detectable*: An Explorable Explanation of Signal Detection Theory
  - *prospectable*: An Explorable Explanation of Cumulative Prospect Theory **[proposed]**
  - *discountable*: An Explorable Explanation of Temporal Discounting **[proposed]**
  - *accumulable*: An Explorable Explanation of Diffusion and Accumulation Models **[proposed]**
  - ???

## Outline

- *decidable*
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

## Packages

- `@decidable`
  - `decidable-elements`: Web components for UI elements used across all packages
  - `detectable-math`: Provides a class with equations for calculating Signal Detection Theory
  - `detectable-elements`: Web components for exploring Signal Detection Theory
  - `detectable`: An Explorable Explanation of Signal Detection Theory

---

## Style Guide

- Within a page:
  - Headings start at H2, only first letter is capitalized
  - *Italics* used for emphasis
  - :key[] keyword
  - :ui[] user interface component
  - :term[] terminology

## Features/Bugs/Notes

- Switch from uglify to terser!
- Linting and transpiling in tagged template literals?
- Change 'browserslist' to `last 1 version, not dead, > 0.2%`?
- Clean way for inter-page references?
- Use something else instead of inline code for terms
  - New remark-span! [content]{attributes}
- More generally, use a different method to mark "UI elements", "keywords", "math", etc...
  - Use remark-span for all of these: [UI element]{.ui} [keyword]{.key} [math]{.math} etc...
- Add "ui" blocks for explaining UI stuff that isn't "real" content
  - :::{.ui} :::
- Add "question" blocks for thoughts for readers to try - maybe with foldout answers?
  - :::{.question} :::

## Compatibility

- Desktop (Current & Current-1)
  - Chrome
  - Edge
  - Firefox
  - Safari
  - IE11
  - Opera
- Mobile
  - Chrome on Android
  - Safari on iOS
  - Other browser and/or other mobile OS?

---

## Development Tooling

Dependencies updated 8/12/2020.

### Global Tools

#### Install

- Manually install *chocolatey* <https://chocolatey.org/install>
- `choco install git`
- `choco install nodejs`
- `choco install yarn`

#### Update

- `choco upgrade all`

### Local Commands

- `yarn install`
  - Downloads and installs *yarn dependencies* & *devDependencies* to `node_modules/`
- `yarn lerna run lint --stream`
  - Lints all libraries for scripts in `src/`
  - Lints all sites for markdown, scripts, and styles in `src/`
- `yarn lerna run compile --stream`
  - Compiles all sites to browser-compatible scripts from `src/` to `local/`
- `yarn workspace @decidable/<site> watch`
  - Executes `compile` on file changes in `src/` or local package dependencies `../<library>/src/`
- `yarn lerna run build --stream`
  - Builds all libraries to browser-compatible optimized bundles from `src/` to `lib/`
  - Builds all sites to browser-compatible optimized scripts from `local/` to `dist/`
- `yarn workspace @decidable/<site> deploy`
  - Copy files from `dist/` to the remote server (requires login)

### Local Utilities

- `yarn workspace @decidable/<site> serve`
  - Runs a basic http server, to serve `<site>/` (e.g. <http://localhost:8000/local/> or <http://localhost:8000/dist/>)
- `yarn outdated`
  - Check for outdated dependencies
- `yarn upgrade --latest`
  - Upgrade to latest dependencies, ignoring semver!
- `yarn upgrade-interactive --latest`
  - Manual upgrade to latest dependencies, ignoring semver!

---

## File Organization

- `decidable/`
  - `.git/` (Repository for *git*)
  - `node_modules/` (*dependencies* & *devDependencies* installed by `yarn install`)
    **\[autogenerated\]**
  - `packages/` (All packages, both libraries and sites are found here)
  - `scripts/` (*gulp* scripts used to build all packages)
  - `.eslintrc.json` (Configuration for *eslint*)
  - `.gitattributes` (Configuration for *git*)
  - `.gitignore` (Configuration for *git*)
  - `.remarkrc` (Configuration for *remark-lint*)
  - `.stylelintrc.json` (Configuration for *stylelint*)
  - `lerna.json` (Monorepo configuration for *lerna*)
  - `package.json` (Overall configuration for monorepo)
  - `README.md` (This file)
  - `yarn.lock` (Proprietary file for tracking package installations by *yarn*)
    **[autogenerated]**
