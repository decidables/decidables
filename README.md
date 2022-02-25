<!--lint ignore first-heading-level-->

# decidables: Explorable Explanations of Decision Making

*decidables* is a collection of libraries and websites for explorable explanations of quantitative
approaches to human decision making.

*decidables* is implemented as a *git* monorepo on [GitHub](https://www.github.com). The packages
are published to *npm* in the `@decidables` scope.

## Overview

- *decidables*: Explorable Explanations of Decision Making
  - *detectable*: An Explorable Explanation of Signal Detection Theory
  - *prospectable*: An Explorable Explanation of Cumulative Prospect Theory **[proposed]**
  - *discountable*: An Explorable Explanation of Temporal Discounting **[proposed]**
  - *accumulable*: An Explorable Explanation of Diffusion and Accumulation Models **[proposed]**
  - ???

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

- `@decidables`
  - *Libraries*
    - `decidable-elements`: Web components for UI elements used across all packages
    - `detectable-math`: Provides a class with equations for calculating Signal Detection Theory
    - `detectable-elements`: Web components for exploring Signal Detection Theory
    - `prospectable-math`: Provides a class with equations for calculating Cumulative Prospect
      Theory
    - `prospectable-elements`: Web components for exploring Cumulative Prospect Theory
  - *Sites*
    - `decidables`: Explorable Explanations of Decision Making
      - This is the root site with overall info and links to the indiividual explorables
    - `detectable`: An Explorable Explanation of Signal Detection Theory
    - `prospectable`: An Explorable Explanation of Cumulative Prospect Theory

---

## Style Guide

- Within a page:
  - Headings start at H2, only first letter is capitalized
  - *Italics* used for emphasis
  - :key[] keyword
  - :ui[] user interface component
  - :term[] terminology

## Features/Bugs/Notes

- testing!
  - Jest? Web Test Runner? Testing Library?
- versioning & publishing
  - yarn? lerna?
  - conventional commits?
- use APA v7 (https://github.com/citation-style-language/styles)
- use eslint-plugin-lit? (https://www.npmjs.com/package/eslint-plugin-lit)
- use eslint-plugin-wc? (https://github.com/43081j/eslint-plugin-wc)
- Add top-level decidable website
- use focused imports to better support tree shaking?
- Libraries:
  - Proper outputs?
    - UMD bundle in ES5
    - ES bundle in ES6
    - ES unbundled in ES6+
  - How to create tree-shakable imports with web components
    - Issue: classes aren't used in JS, but registered components *are* used!
    - Maybe: (1) No sideEffects false, (2) Always import needed classes, (3) Always import from
      specific file?
  - licenses!
  - npm versioning & publishing
- Update About pages!
- include preparePlotly in compile step?
- get eslint, remark-lint, and stylelint working in editor
  - need eslint overrides for dev scripts versus browser scripts
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

Dependencies updated 17/1/2022.

### Global Tools

#### Install

- Manually install *chocolatey* <https://chocolatey.org/install>
- `choco install git`
- `choco install nodejs`
- `corepack enable`
  - This is currently needed to use yarn without a separate installation

#### Update

- `choco upgrade all`

### Local Commands

#### Install

- `yarn install`
  - Downloads and installs *yarn dependencies* & *devDependencies* to `node_modules/`

#### Lint

- `yarn lint`
  - Lints all libraries for scripts in `src/`
  - Lints all sites for markdown, scripts, and styles in `src/`, and compiled markup in `local/`
- `yarn workspace @decidables/<library|site> lint`
  - Lints a single library or site
- `yarn workspace @decidables/<library|site> gulp lint<type>`
  - Lints `Scripts` or `Styles` in a single library
  - Lints `Markdown`, `Markup`, `Scripts`, or `Styles` in a single site

#### Compile

- `yarn compile`
  - Compiles all sites to browser-compatible scripts from `src/` to `local/`
- `yarn workspace @decidables/<site> compile`
  - Compiles a single site from `src/` to `local/`
- `yarn workspace @decidables/<site> gulp compile<type>`
  - Compiles `Fonts`, `Markdown`, `Scripts`, or `Styles` in a single site from `src/` to `local/`

#### Watch

- `yarn watch`
  - Re-`compile` all sites on file changes in `src/` or local library dependencies
- `yarn workspace @decidables/<site> watch`
  - Re-`compile` site on file changes in `src/` or local library dependencies
- `yarn workspace @decidables/<site> gulp watch<type>`
  - Re-`compile` site on `Markdown`, `Scripts`, or `Styles` changes in `src/` or local library
    dependencies

#### Build

- `yarn build`
  - Builds all libraries to browser-compatible optimized bundles from `src/` to `lib/`
  - Builds all sites to browser-compatible optimized scripts from `local/` to `dist/`
- `yarn workspace @decidables/<library|site> build`
  - Builds a single library to browser-compatible optimized bundles from `src/` to `lib/`
  - Builds a single site to browser-compatible optimized scripts from `local/` to `dist/`
- `yarn workspace @decidables/<library|site> gulp build<type>`
  - Builds `Scripts` in a single library from `src/` to `lib/`
  - Builds `Fonts`, `Markup`, `Scripts`, or `Styles` in a single site from `local/` to `dist/`

#### Deploy

- `yarn deploy`
  - Copy files for all sites from `dist/` to `decidables.github.io/` for GitHub Pages deployment
- `yarn workspace @decidables/<site> deploy`
  - Copy files for a single site from `dist/` to `decidables.github.io/` for GitHub Pages deployment

#### Serve

- `yarn serve`
  - Serves each site mounted on `local/` and `dist/`, and all sites integrated on `deploy/` (e.g.
    <http://localhost:8000/local/detectable>, <http://localhost:8000/dist/detectable>, and
    <http://localhost:8000/deploy/detectable>)
- `yarn workspace @decidables/<site> serve`
  - Serves `<site>/` (e.g. <http://localhost:8000/local/> or <http://localhost:8000/dist/>)

#### Update

- `yarn outdated -a`
  - Check for outdated dependencies
- `yarn up`
  - Upgrade to latest dependencies, ignoring semver!
- `yarn upgrade-interactive`
  - Manual upgrade to newer dependencies, with option to ignore semver

---

## File Organization

- `decidables/`
  - `.git/` (Repository for *git*) **[autogenerated]**
  - `.github/` (Configuration for GitHub Actions)
  - `.yarn/` (Repository for *git*)  **[autogenerated]**
  - `decidables.github.io/` (Sites organized for deployment) **[autogenerated]**
  - `libraries/` (All libraries are found here)
  - `node_modules/` (*dependencies* & *devDependencies* installed by `yarn install`)
    **[autogenerated]**
  - `packages/` (All packages, both libraries and sites are found here)
  - `scripts/` (*gulp* scripts used to build all packages)
  - `sites/` (All sites are found here)
  - `.eslintrc.json` (Configuration for *eslint*)
  - `.gitattributes` (Configuration for *git*)
  - `.gitignore` (Configuration for *git*)
  - `.remarkrc.json` (Configuration for *remark-lint*)
  - `.stylelintrc.json` (Configuration for *stylelint*)
  - `.yarnrc.yml` (Configuration for *yarn*)
  - `gulpfile.js` (Config for *gulp*)
  - `package.json` (Overall configuration for monorepo)
  - `README.md` (This file)
  - `yarn.lock` (Proprietary file for tracking package installations by *yarn*) **[autogenerated]**
