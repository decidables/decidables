<!--lint disable first-level-heading -->
# detectable-elements
<!--lint enable first-level-heading -->

## Features/Bugs

- Switch from uglify to terser!
- Technical
  - Clean way for inter-page references?
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
    - With auto linking of subsections?
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

Dependencies update 2/24/2020.

### Global

- Manually install *git*
- Manually install *node*
- Manually install *yarn*

### Local

- `yarn install`
  - Downloads and installs *yarn dependencies* & *devDependencies* to `node_modules/`
- `yarn compile`
  - Compiles/preprocesses files from `src/` to `local/` while pulling in dependencies
- `yarn watch`
  - Executes `compile` on file changes in `src/`
- `yarn lint`
  - Lints markdown, scripts, and styles in `src/`
- `yarn build`
  - Builds optimized project from `local/` to `dist/`

### Utilities

- `yarn outdated`
  - Check for outdated dependencies
- `yarn upgrade --latest`
  - Upgrade to latest dependencies, ignoring semver!
- `yarn upgrade-interactive --latest`
  - Manual upgrade to latest dependencies, ignoring semver!

---

## Project File Organization

- `detectable-elements/`
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