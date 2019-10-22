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

## Style Guide

- Within a page:
  - Headings start at H2, only first letter is capitalized
  - `Code` used for UI elements
  - **Bold** used for keywords
  - *Italics* used for emphasis

## Features/Bugs

- Need to add a control for payoff matrix!
- Add a "speed" control for overall trial timing?
  - Set duration, wait, and ITI to a set ratio, and then scale all together?
  - duration="1000" wait="500" iti="500" (2000, 1000, 1000) (500, 250, 250)
- Cleanup color usage
  - Use the inverse text color property!
  - Define No Response variable?
- Standard easing time? (CSS & D3)
- Add page before SDT, connecting sensitivity and bias, and showing different views of model
- Split Tables & Rates to discuss Accuracy & base rate
  - Change "Accuracy" in "outcomes.html"
  - Move "Tabulating outcomes" from "rates.html" to "outcomes.html"
  - Move "Accuracy" to top of "rates.html"
  - Add "PPV" and "FOMR" to rates.html"
  - Add page on "counter-intuitive" measures: accuracy & P(S|R) vs P(R|S)
- Label values IN iso-plots?
- Resolve ambiguity between different uses of same color
  - For example, "Respond Present" as a trial type versus "Present" as a response versus "?Present?"
    as part of a distribution
- Model simulations not firing response events consistently!
  - Transition time for model "measurement" must be less than "wait" duration!
- Use something else instead of inline code for terms?
  - Maybe remark-terms?
- More generally, use a different method to mark "UI elements", "keywords", "math", etc...
  - Maybe use remark-terms for all of these?
- Be consistent about how to insert special symbols (e.g. Greek letters and prime)
  - Maybe use UTF8 for all?
- Asking lots of open-ended questions vs. questions with later answers vs. explanation...
- Add "note" blocks for explaining UI stuff that isn't "real" content
  - need a clean approach in markdown
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

#### Opera ???

### Mobile

#### Chrome on Android ???

#### Safari on iOS ???

#### Other?

---

## Future Feature Ideas

### Overall

---

## Development Tooling

Dependencies update 1/29/2019.

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
