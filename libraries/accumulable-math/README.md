<!--lint ignore first-heading-level  maximum-heading-length-->

# **`@decidables/accumulable-math`**<br>Equations for Calculating the Diffusion Decision Model in [<b><i>a</i>ccumulable</b>](https://decidables.github.io/accumulable)

[![npm version](https://img.shields.io/npm/v/@decidables/accumulable-math?logo=npm)](https://www.npmjs.com/package/@decidables/accumulable-math)
[![license](https://img.shields.io/npm/l/@decidables/accumulable-math?color=informational)](https://github.com/decidables/decidables/blob/main/LICENSE.md)

Helper functions for calculations related to the Diffusion Decision Model for
[<b><i>a</i>ccumulable</b>](https://decidables.github.io/accumulable).

## Usage

### Install

```shell
yarn add @decidables/accumulable-math
```

### Use

```javascript
import DDMMath from '@decidables/accumulable-math';
```

A class providing static functions for calculating Diffusion Decision Model equations

## Contents

### `DDMMath`

Single class exposing static values for DDM parameters and static functions for DDM calculations.
Each function takes values for one or more variables and returns the value of another variable. The
functions are named with a list of the input variables followed by a '2' followed by the output
variable, in camelcase. For example, `azvs2pC` takes as input the boundary separation, `a`, the
starting point, `z`, the drift rate, 'v', and the non-decision time, `t0`, and outputs the
probability correct, `pC`.

#### Variable names

- trials = an array of trial-by-trial results
- stats = a data structure with summary statistics:
  - correctCount = number of correct trials
  - errorCount = number of error trials
  - nrCount = number of no response trials
  - accuracy = overall accuracy (proportion correct)
  - correctMeanRT = mean RT on correct trials
  - errorMeanRT = mean RT on error trials
  - meanRT = overall mean RT
  - correctSDRT = standard deviation of RT on correct trials
  - errorSDRT = standard deviation of RT on error trials
  - sdRT = overall standard deviation of RT
- a = boundary separation
- z = starting point
- v = drift rate
- t0 = non-decision time
- s = within-trial variability in drift rate
- pE = proportion errors
- pC = proportion correct
- m = overall mean RT
- sd = overall standard deviation of RT
- mE = mean RT on error trials
- sdE = standard deviation of RT on error trials
- mC = mean RT on correct trials
- sdC = standard deviation of RT on correct trials
- gE = probability density of RT on error trials
- gC = probability density of RT on correct trials
- accuracy = overall accuracy
- meanRT = overall mean reaction time
- sdRT = overall standard deviation of reaction time

#### Parameters

- a = boundary separation [0, Infinity)
- z = starting point as a proportion of a (0, 1)
- v = drift rate (per second) (-Infinity, Infinity)
- t0 = non-decision time (in milliseconds) (0, Infinity)
- s = within-trial variability in drift rate (s^2 = infinitesimal variance) [0, Infinity)

The values offered for parameters are:

- DEFAULT = a recommended default value
- MIN = the minimum value recommended for a UI (not necessarily the lower bound of its interval)
- MAX = the maximum value recommended for a UI (not necessarily the upper bound of its interval)
- STEP = a recommended step size for a UI
- JUMP = a recommended "large" step size for a UI

#### Methods w/sources

- Basic stats
  - `trials2stats(trials)`
- Probability of correct and error responses (Alexandrowicz, 2020)
  - `azv2pE(a, z, v, s = DDMMath.s.DEFAULT)` 
  - `azv2pC(a, z, v, s = DDMMath.s.DEFAULT)`
- Mean of overall, error, and correct RTs (Grasman et al., 2009)
  - `azvt02m(a, z, v, t0, s = DDMMath.s.DEFAULT)`
  - `azvt02mE(a, z, v, t0, s = DDMMath.s.DEFAULT)`
  - `azvt02mC(a, z, v, t0, s = DDMMath.s.DEFAULT)`
- Standard deviation of overall, error, and correct RTs (Grasman et al., 2009)
  - `azv2sd(a, z, v, s = DDMMath.s.DEFAULT)`
  - `azv2sdE(a, z, v, s = DDMMath.s.DEFAULT)`
  - `azv2sdC(a, z, v, s = DDMMath.s.DEFAULT)`
- Density of error and correct RT distributions (Alexandrowicz, 2020)
  - `tazv2gE(t, a, z, v, s = DDMMath.s.DEFAULT)`
  - `tazv2gC(t, a, z, v, s = DDMMath.s.DEFAULT)`
- EZ-diffusion model (Wagenmakers et al., 2007)
  - `data2ez({accuracy, sdRT, meanRT, s = DDMMath.s.DEFAULT})`
  - `data2ez2()` **NOT IMPLEMENTED**

## Development

### Features/Bugs/Notes

### Package Scripts

- `yarn lint`
  - Lints markdown, scripts and styles
- `yarn test`
  - Runs all tests and reports coverage in `test/coverage/`
- `yarn test --watch`
- `yarn test -w`
  - Runs all tests in watch mode and reports coverage in `test/coverage/`
- `yarn test <directory/filename>`
  - Runs tests for a single file and reports coverage in `test/coverage/`
- `yarn test <directory/filename> --watch`
- `yarn test <directory/filename> -w`
  - Runs tests for a single file in watch mode and reports coverage in `test/coverage/`
- `yarn build`
  - Builds bundles from `src/` to `lib/`

### File Organization

- `accumulable-math/`
  - `lib/` (Bundles created from `src/` by `build`) **\[autogenerated\]**
  - `src/` (Source files)
  - `test/` (Testing files)
    - `coverage/` (Code coverage results) **\[autogenerated\]**
  - `CHANGELOG.md` (Based on conventional commits) **\[autogenerated\]**
  - `gulpfile.js` (Tasks for *gulp*)
  - `package.json` (Package config for *yarn* and *npm*)
  - `README.md` (This file)
  - `rollup-stats.html` (Report on js bundle composition and size) **\[autogenerated\]**

## [License](https://github.com/decidables/decidables/blob/main/LICENSE.md)

The content of this project is licensed under [Creative Commons Attribution-ShareAlike 4.0
International License (CC-BY-SA-4.0)](https://creativecommons.org/licenses/by-sa/4.0/) and the
source code of this project is licensed under [GNU General Public License v3.0 or any later version
(GPL-3.0-or-later)](https://www.gnu.org/licenses/gpl-3.0.html).
