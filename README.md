<!--lint ignore first-heading-level-->

# [<b>decidables</b>](https://decidables.github.io)<br>Explorable Explanations of Decision Making

[![deployment](https://img.shields.io/github/actions/workflow/status/decidables/decidables/deploy-to-decidables-github-io.yml?branch=main&label=deployment&logo=github)](https://github.com/decidables/decidables/actions/workflows/deploy-to-decidables-github-io.yml)
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
- *In progress...*<br>
  [<b>dis<i>k</i>ountable</b>](https://decidables.github.io/discountable)
  [(source)](https://github.com/decidables/decidables/tree/main/sites/discountable)<br>
  An Explorable Explanation of Hyperbolic Temporal Discounting
- *In progress...*<br>
  [<b><i>a</i>ccumulable</b>](https://decidables.github.io/accumulable)
  [(source)](https://github.com/decidables/decidables/tree/main/sites/accumulable)<br>
  An Explorable Explanation of the Diffusion Decision Model

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
- [**`discountable-math`**](https://www.npmjs.com/package/@decidables/discountable-math)
  [(source)](https://github.com/decidables/decidables/tree/main/libraries/discountable-math)<br>
  Provides a class with equations for calculating Hyperbolic Temporal Discounting
- [**`discountable-elements`**](https://www.npmjs.com/package/@decidables/discountable-elements)
  [(source)](https://github.com/decidables/decidables/tree/main/libraries/discountable-elements)<br>
  Web components for exploring Hyperbolic Temporal Discounting
- [**`accumulable-math`**](https://www.npmjs.com/package/@decidables/accumulable-math)
  [(source)](https://github.com/decidables/decidables/tree/main/libraries/accumulable-math)<br>
  Provides a class with equations for calculating the Diffusion Decision Model
- [**`accumulable-elements`**](https://www.npmjs.com/package/@decidables/accumulable-elements)
  [(source)](https://github.com/decidables/decidables/tree/main/libraries/accumulable-elements)<br>
  Web components for exploring the Diffusion Decision Model

## Development

Dependencies updated February 6, 2025.

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

- Use *winget* or manually install *chocolatey* <https://chocolatey.org/install> (on Windows) 
  or *HomeBrew* <https://brew.sh/> (on MacOS)
- `winget install EclipseAdoptium.Temurin.25.JDK`, `choco install temurin25`, or `brew install --cask temurin`
- `winget install Git.Git`, `choco install git`, or `brew install git`
  - `git config --global user.name "Name"`
  - `git config --global user.email "email@example.org"`
- `winget install OpenJS.NodeJS`, `choco install nodejs`,
  or `brew install node` then `brew install corepack`
- `corepack enable`
  - This is currently needed to use yarn without a separate installation
  - If `corepack` is not found, then run `npm install -g corepack` first

#### Upgrade

- `winget upgrade`, `choco outdated`, or `brew outdated`
- `winget upgrade --all`, `choco upgrade all`, or `brew update` then `brew upgrade`
- `yarn set version latest`

### Package Scripts

#### Install

- `yarn install`
  - Downloads and installs *yarn dependencies* & *devDependencies* to `node_modules/`

#### Clean

- `yarn clean`
  - Cleans all libraries by deleting `lib/`
  - Cleans all sites by deleting `local/`, `dist/`, and associated directory in
    `decidables.github.io`
- `yarn workspace @decidables/<library|site> clean`
  - Cleans a single library or site
- `yarn workspace @decidables/<library|site> gulp clean<type>`
  - Cleans `Library` for a single library
  - Cleans `Develop` (i.e. `local/`), `Build` (i.e. `dist/`), or `Deploy` (i.e. the associated
    directory in `decidables.github.io`) for a single site

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
- `yarn workspace @decidables/<library> test --watch`
- `yarn workspace @decidables/<library> test -w`
  - Runs all tests for a single library in watch mode and reports coverage in `test/coverage/`
- `yarn workspace @decidables/<library> test <directory/filename>`
  - Runs tests for a single library for a single file and reports coverage in `test/coverage/`
- `yarn workspace @decidables/<library> test <directory/filename> --watch`
- `yarn workspace @decidables/<library> test <directory/filename> -w`
  - Runs tests for a single library for a single file in watch mode and reports coverage in `test/coverage/`

#### Develop

- `yarn develop`
  - Makes all sites into browser-compatible scripts from `src/` to `local/`
- `yarn workspace @decidables/<site> develop`
  - Makes a single site from `src/` to `local/`
- `yarn workspace @decidables/<site> gulp develop<type>`
  - Makes `Favicons`, `Fonts`, `Markdown`, `Scripts`, or `Styles` for a single site from `src/` to
    `local/`

#### Watch

- `yarn watch`
  - Re-`develop` all sites on file changes in `src/` or local library dependencies
- `yarn workspace @decidables/<site> watch`
  - Re-`develop` site on file changes in `src/` or local library dependencies
- `yarn workspace @decidables/<site> gulp watch<type>`
  - Re-`develop` site on `Markdown`, `Scripts`, or `Styles` changes in `src/` or local library
    dependencies

#### Build

- `yarn build`
  - Makes all libraries into browser-compatible optimized bundles from `src/` to `lib/`
  - Makes all sites into browser-compatible optimized scripts from `src/` to `dist/`
- `yarn workspace @decidables/<library|site> build`
  - Makes a single library into browser-compatible optimized bundles from `src/` to `lib/`
  - Makes a single site into browser-compatible optimized scripts from `src/` to `dist/`
- `yarn workspace @decidables/<library|site> gulp build<type>`
  - Makes `Scripts` for a single library from `src/` to `lib/`
  - Makes `Favicons`, `Fonts`, `Markup`, `Scripts`, or `Styles` for a single site from `src/` to
    `dist/`

#### Version

- `yarn changed`
  - Lists which libraries and sites will receive version bumps when `yarn versions` is run
- `yarn versions`
  - **Note:** requires a valid GitHub personal access token be set to GH_TOKEN environment variable
  - Bumps version numbers of all libraries and sites as needed based on conventional commits
  - Transitive dependencies updated in each `package.json`
  - Git tags added for new versions
  - All of this is committed and pushed

#### Publish

- `yarn publish`
  - **Note:** to be run immediately after `yarn versions`
  - **Note:** you must be logged in to NPM with appropriate scope:
    `npm adduser <username> --scope=@decidables`
  - **Note:** requires a valid NPM granular access token be set to NPM_TOKEN environment variable
    with read and write access to @decidables scope 
  - Publishes all new versions of *public* libraries to *npm*

#### Deploy

- `yarn deploy`
  - **Note:** requires a valid GitHub personal access token be set to the repository secret
    API_TOKEN_GITHUB on @decidables/decidables
  - Re-build markdown (to grab new version) then copy files for all sites from `dist/`
    to `decidables.github.io/` for GitHub Pages deployment
- `yarn workspace @decidables/<site> deploy`
  - Re-build markdown (to grab new version) then copy files for a single site from
    `dist/` to `decidables.github.io/` for GitHub Pages deployment

#### Serve

- `yarn serve`
  - Serves each site mounted on `local/` and `dist/`, and all sites integrated on `deploy/` (e.g.
    <http://localhost:8000/local/detectable>, <http://localhost:8000/dist/detectable>, and
    <http://localhost:8000/deploy/detectable>)
- `yarn workspace @decidables/<site> serve`
  - Serves `<site>/` (e.g. <http://localhost:8000/local/> or <http://localhost:8000/dist/>)

#### Upgrade

- `yarn outdated`
  - Check for outdated dependencies
- `yarn up`
  - Upgrade to latest dependencies, ignoring semver!
- `yarn upgrade-interactive`
  - Manual upgrade to newer dependencies, with option to ignore semver
- `yarn dlx update-browserslist-db@latest`
  - Update `caniuse-lite` so the browser data is up-to-date

#### Utilities

- `yarn all run <package-script>`
- `yarn all exec <shell-script>`
  - Run a package.json script or execute a shell script for each library and site
- `yarn libraries run <package-script>`
- `yarn libraries exec <shell-script>`
  - Run a package.json script or execute a shell script for each library
- `yarn sites run <package-script>`
- `yarn sites exec <shell-script>`
  - Run a package.json script or execute a shell script for each site

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
  - `.commitlintrc.json` (Commit linting configuration for *commitlint*)
  - `.eslintrc.json` (Code linting configuration for *eslint*)
  - `.gitattributes` (Version control configuration for *git*)
  - `.gitignore` (Version control configuration for *git*)
  - `.npmrc` (Package publishing configuration for *npm* )
  - `.remarkrc.js` (Markdown linting configuration for *remark-lint*)
  - `.yarnrc.yml` (Package manager configuration for *yarn*)
  - `gulpfile.js` (Tasks for *gulp*)
  - `lerna.json` (Monorepo configuration for *lerna*)
  - `LICENSE.md` (Describes licenses for this project)
  - `NOTES.md` (Notes about the overall project)
  - `package.json` (Overall configuration for monorepo)
  - `README.md` (This file)
  - `stylelint.config.js` (Style linting configuration for *stylelint*)
  - `web-test-runner.config.js` (Testing configuration for *web-test-runner*)
  - `yarn.lock` (Proprietary file for tracking package installations by *yarn*) **[autogenerated]**

## [License](https://github.com/decidables/decidables/blob/main/LICENSE.md)

The content of this project is licensed under [Creative Commons Attribution-ShareAlike 4.0
International License (CC-BY-SA-4.0)](https://creativecommons.org/licenses/by-sa/4.0/) and the
source code of this project is licensed under [GNU General Public License v3.0 or any later version
(GPL-3.0-or-later)](https://www.gnu.org/licenses/gpl-3.0.html).
