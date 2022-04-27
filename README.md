<!--lint ignore first-heading-level-->

# [<b>decidables</b>](https://decidables.github.io)<br>Explorable Explanations of Decision Making

[![deployment](https://img.shields.io/github/workflow/status/decidables/decidables/Deployment?label=deployment&logo=github)](https://github.com/decidables/decidables/actions/workflows/deploy-to-decidables-github-io.yml)
[![license](https://img.shields.io/github/package-json/license/decidables/decidables?color=informational)](https://github.com/decidables/decidables/blob/main/LICENSE.md)

<b>decidables</b> is a collection of websites and supporting libraries for explorable explanations of
quantitative approaches to human decision making.

<b>decidables</b> is implemented as a *git* monorepo on [GitHub](https://www.github.com).

## Sites

The sites are served from *GitHub Pages* at [**decidables.github.io**](https://decidables.github.io).

- [<b>decidables</b>](https://decidables.github.io)
  [(source)](https://github.com/decidables/decidables/tree/main/sites/decidables)<br>
  Explorable Explanations of Decision Making<br>
  The root site with overall info and links to the individual explorables<br>
- *Draft available:*<br>
  [<b><i>d′</i>ete<i>c</i>table</b>](https://decidables.github.io/detectable)
  [(source)](https://github.com/decidables/decidables/tree/main/sites/detectable)<br>
  An Explorable Explanation of Signal Detection Theory<br>
- *In progress...*<br>
  [<b>prospect<i>α</i>b<i>λ</i>e</b>](https://decidables.github.io/prospectable)
  [(source)](https://github.com/decidables/decidables/tree/main/sites/prospectable)<br>
  An Explorable Explanation of Cumulative Prospect Theory<br>
- *Coming soon...*<br>
  <b>dis<i>k</i>ountable</b>
  (source)<br>
  An Explorable Explanation of Hyperbolic Temporal Discounting

## Libraries

The libraries are published to *npm* in the
[**`@decidables`**](https://www.npmjs.com/search?q=%40decidables) scope.

- [**`decidables-elements`**](https://www.npmjs.com/package/@decidables/decidables-elements)
  [(source)](https://github.com/decidables/decidables/tree/main/libraries/decidables-elements)<br>
  Web components for UI elements used across all packages
- [**`detectable-math`**](https://www.npmjs.com/package/@decidables/detectable-math)
  [(source)](https://github.com/decidables/decidables/tree/main/libraries/detectable-math)<br>
  Provides a class with equations for calculating Signal Detection Theory
- [**`detectable-elements`**](https://www.npmjs.com/package/@decidables/detectable-elements)
  [(source)](https://github.com/decidables/decidables/tree/main/libraries/detectable-elements)<br>
  Web components for exploring Signal Detection Theory
- [**`prospectable-math`**](https://www.npmjs.com/package/@decidables/prospectable-math)
  [(source)](https://github.com/decidables/decidables/tree/main/libraries/prospectable-math)<br>
  Provides a class with equations for calculating Cumulative Prospect Theory
- [**`prospectable-elements`**](https://www.npmjs.com/package/@decidables/prospectable-elements)
  [(source)](https://github.com/decidables/decidables/tree/main/libraries/prospectable-elements)<br>
  Web components for exploring Cumulative Prospect Theory
- *Coming soon...*<br>
  **`discountable-math`**
  (source)<br>
  Provides a class with equations for calculating Hyperbolic Temporal Discounting
- *Coming soon...*<br>
  **`discountable-elements`**
  (source)<br>
  Web components for exploring Hyperbolic Temporal Discounting

## Development

Dependencies updated 17/1/2022.

### Features/Bugs/Notes

- Cleanup headers and comments in all *.js files!
- Add targets/links to all headers
  - *rehype-slug* (https://github.com/rehypejs/rehype-slug)
  - *rehype-autolink-headings* (https://github.com/rehypejs/rehype-autolink-headings)
- Format negative numbers with true minus sign character?
- Should decidables-elements have base classes for equations and examples?
- Accessibility testing/auditing
- Can we use *@testing-library/dom* for interface testing?
- Use APA v7 (https://github.com/citation-style-language/styles)
- Use *eslint-plugin-lit*? (https://www.npmjs.com/package/eslint-plugin-lit)
- Use *eslint-plugin-wc*? (https://github.com/43081j/eslint-plugin-wc)
- Reducing bundle sizes
  - Replace *jStat* with *stdlib*?
    - Is *stdlib* here to stay?
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
- Include `preparePlotly` in compile step?
- Get *remark-lint* working in editor
- Linting and transpiling in tagged template literals?
- Clean way for inter-page references?
- Add "question" blocks for thoughts for readers to try - maybe with foldout answers?
  ```markdown
  :::question[Question?]
  Answer
  :::
  ```

### Compatibility Goals

In general, it should work with versions of any browsers using up-to-date WebKit/JavaScriptCore,
Blink/V8, or Gecko/SpiderMonkey on desktop or mobile.

- Desktop (last 2 versions)
  - Chrome
  - Edge
  - Firefox
  - Safari
  - Opera
- Mobile
  - Chrome on Android
  - Safari on iOS

### Style Guide

- Within a page:
  - Headings start at `H2`, only first letter is capitalized
  - *Italics* used for emphasis
  - Using *remark-citeproc*:
    - `:cite[]` citations
    - `::ref` *insert* reference list
  - Using *remark-glossary*:
    - `:term[]` terminology
    - `:entry[]` glossary entry
    - `:::glossary
      :::` glossary
  - Using *remark-div*:
    - `:::ui
      :::` user interface notes
  - Using *remark-span*:
    - `:page[]` link to another page
    - `:key[]` keywords
    - `:tool[]` development tool
    - `:button` UI button
    - `:prompt` UI prompt
    - `:slider` UI slider
    - `:switch` UI switch
    - `:toggle` UI toggle

### Global Tools

**Note:** If not on Windows, replace `choco` with OS package manager of choice 

#### Install

- Manually install *chocolatey* <https://chocolatey.org/install>
- `choco install git`
- `choco install nodejs`
- `corepack enable`
  - This is currently needed to use yarn without a separate installation

#### Update

- `choco upgrade all`

### Package Scripts

#### Install

- `yarn install`
  - Downloads and installs *yarn dependencies* & *devDependencies* to `node_modules/`

#### Lint

- `yarn lint`
  - Lints all libraries for markdown and scripts in `src/`
  - Lints all sites for markdown, scripts, and styles in `src/`, and compiled markup in `local/`
- `yarn workspace @decidables/<library|site> lint`
  - Lints a single library or site
- `yarn workspace @decidables/<library|site> gulp lint<type>`
  - Lints `Scripts` or `Styles` in a single library
  - Lints `Markdown`, `Markup`, `Scripts`, or `Styles` in a single site

#### Test

- `yarn test`
  - Runs all tests for all libraries and reports coverage in `test/coverage/`
- `yarn workspace @decidables/<library> test`
  - Runs all tests for a single library and reports coverage in `test/coverage/`
- `yarn workspace @decidables/<library> test:file <filename>`
  - Runs tests for a single file and reports coverage in `test/coverage/`

#### Compile

- `yarn compile`
  - Compiles all sites to browser-compatible scripts from `src/` to `local/`
- `yarn workspace @decidables/<site> compile`
  - Compiles a single site from `src/` to `local/`
- `yarn workspace @decidables/<site> gulp compile<type>`
  - Compiles `Favicons`, `Fonts`, `Markdown`, `Scripts`, or `Styles` in a single site from `src/` to
    `local/`

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
  - Builds `Favicons`, `Fonts`, `Markup`, `Scripts`, or `Styles` in a single site from `local/` to
    `dist/`

#### Version

- `yarn version`
  - Bumps version numbers of all libraries and sites as needed based on conventional commits
  - Transitive dependencies updated in each `package.json`
  - Git tags added for new versions
  - All of this is committed and pushed

#### Publish

- `yarn publish`
  - **Note:** to be run immediately after `yarn version`
  - Publishes all new versions of *public* libraries to *npm*

#### Deploy

- `yarn deploy`
  - Re-compile and build markdown (to grab new version) then copy files for all sites from `dist/`
    to `decidables.github.io/` for GitHub Pages deployment
- `yarn workspace @decidables/<site> deploy`
  - Re-compile and build markdown (to grab new version) then copy files for a single site from
    `dist/` to `decidables.github.io/` for GitHub Pages deployment

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

### File Organization

- `decidables/`
  - `.git/` (Repository for *git*) **[autogenerated]**
  - `.github/` (Configuration for *GitHub Actions*)
  - `.vscode/` (Editor configuration for *VSCode*)
  - `.yarn/` (Repository for *yarn*)  **[autogenerated]**
  - `decidables.github.io/` (Sites organized for deployment) **[autogenerated]**
  - `libraries/` (All libraries are found here)
  - `node_modules/` (*dependencies* & *devDependencies* installed by `yarn install`)
    **[autogenerated]**
  - `scripts/` (*gulp* support scripts used for tooling)
  - `sites/` (All sites are found here)
  - `.commitlint.json` (Commit linting configuration for *commitlint*)
  - `.eslintrc.json` (Code linting configuration for *eslint*)
  - `.gitattributes` (Version control configuration for *git*)
  - `.gitignore` (Version control configuration for *git*)
  - `.remarkrc.json` (Markdown linting configuration for *remark-lint*)
  - `.stylelintrc.json` (Style linting configuration for *stylelint*)
  - `.webtestrunner.js` (Testing configuration for *web-test-runner*)
  - `.yarnrc.yml` (Package manager configuration for *yarn*)
  - `gulpfile.js` (Tasks for *gulp*)
  - `lerna.json` (Monorepo configuration for *lerna*)
  - `LICENSE.md` (Describes licenses for this project)
  - `package.json` (Overall configuration for monorepo)
  - `README.md` (This file)
  - `yarn.lock` (Proprietary file for tracking package installations by *yarn*) **[autogenerated]**

## [License](https://github.com/decidables/decidables/blob/main/LICENSE.md)

The content of this project is licensed under [Creative Commons Attribution-ShareAlike 4.0
International License (CC-BY-SA-4.0)](https://creativecommons.org/licenses/by-sa/4.0/) and the
source code of this project is licensed under [GNU General Public License v3.0 or any later version
(GPL-3.0-or-later)](https://www.gnu.org/licenses/gpl-3.0.html).
