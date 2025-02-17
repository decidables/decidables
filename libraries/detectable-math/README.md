<!--lint ignore first-heading-level maximum-heading-length-->

# **`@decidables/detectable-math`**<br>Equations for Calculating Signal Detection Theory in [<b><i>d′</i>ete<i>c</i>table</b>](https://decidables.github.io/detectable)

[![npm version](https://img.shields.io/npm/v/@decidables/detectable-math?logo=npm)](https://www.npmjs.com/package/@decidables/detectable-math)
[![license](https://img.shields.io/npm/l/@decidables/detectable-math?color=informational)](https://github.com/decidables/decidables/blob/main/LICENSE.md)

Helper functions for calculations related to Signal Detection Theory for
[<b><i>d′</i>ete<i>c</i>table</b>](https://decidables.github.io/detectable).

## Usage

### Install

```shell
yarn add @decidables/detectable-math
```

### Use

```javascript
import SDTMath from '@decidables/detectable-math';
```

A class providing static functions for calculating Signal Detection Theory equations

## Contents

### `SDTMath`

Single class exposing static functions for SDT calculations. Each function takes values for one or
more variables and returns the value of another variable. The functions are named with a list of the
input variables followed by a '2' followed by the output variable, in camelcase. For example,
`hM2Hr` takes as input the number of hits, `H`, and the number of misses, `M`, and outputs the hit
rate, `HR`

#### Variable names

- H = hits
- M = misses
- FA = false alarms
- CR = correct rejections
- HR = hit rate
- zHR = Z-transformed hit rate
- FAR = false alarm rate
- zFAR = Z-transformed false alarm rate
- ACC = accuracy
- PPV = positive predictive value
- FOMR = false omission rate (used FOMR to avoid keyword FOR!)
- d' = sensitivity (d' for equal variance, d_a for unequal variance)
- c = response bias (c for equal variance, c_a for unequal variance)
- s = standard deviation of signal distribution,
  with standard deviation of noise distribution = 1
- muN = mean of noise distribution
- muS = mean of signal distribution
- l = lambda, threshold location, with l = 0 indicating no response bias
- h = height of signal distribution

#### Function names

- Z = z-score
- Z^-1 = inverse z-score

#### Methods w/implemented equations

Many methods take an optional `s` for unequal variance. A different equation, marked with a * is
used in these cases.

- `hM2Hr(h, m)`
  - HR = H / (H + M)
- `faCr2Far(fa, cr)`
  - FAR = FA / (FA + CR)
- `hMFaCr2Acc(h, m, fa, cr)`
  - ACC = (H + CR) / (H + M + FA + CR)
- `hrFar2Acc(hr, far)`
  - ACC = (HR + (1 - FAR)) / 2
- `hFa2Ppv(h, fa)`
  - PPV = H / (H + FA)
- `mCr2Fomr(m, cr)`
  - FOMR = M / (M + CR)
- `hrFar2D(hr, far, s = 1)`
  - d' = Z^-1(HR) - Z^-1(FAR)
  - \* d' = (2 / (s^2 + 1))^(1/2) * (s * Z^-1(HR) - Z^-1(FAR))
- `hrFar2C(hr, far, s = 1)`
  - c = -(Z^-1(HR) + Z^-1(FAR))/2
  - \* c = (2 / (s^2 + 1))^(1/2) * (s / s + 1) * -(Z^-1(HR) + Z^-1(FAR))
- `dC2Hr(d, c, s = 1)`
  - HR = Z(d'/2 - c)
  - \* HR = Z(((s^2 + 1) / 2)^(1/2) * (d' / (s + 1) - c / s))
- `dC2Far(d, c, s = 1)`
  - FAR = Z(-d'/2 - c)
  - \* FAR = Z(((s^2 + 1) / 2)^(1/2) * -(d' / (s + 1) + c))
- `dFar2Hr(d, far, s = 1)`
  - HR = Z(d' + Z^-1(FAR))
  - \* HR = Z(((s^2 + 1) / 2)^(1/2) * d' + Z^-1(FAR) / s)
- `cFar2Hr(c, far, s = 1)`
  - HR = Z(-2c - Z^-1(FAR))
  - \* HR = Z(-((s^2 + 1) / 2)^(1/2) * ((s + 1) / s) * c - Z^-1(FAR))
- `d2MuN(d, s = 1)`
  - muN = -d'/2
  - \* muN = -((s^2 + 1) / 2)^(1/2) * (1 / (s + 1)) * d'
- `muN2D(muN, s = 1)`
  - d' = -2 * muN
  - \* d' = -(2 / (s^2 + 1))^(1/2) * (s + 1) * muN
- `d2MuS(d, s = 1)`
  - muS = d'/2
  - \* muS = ((s^2 + 1) / 2)^(1/2) * (s / (s + 1)) * d'
- `muS2D(muS, s = 1)`
  - d' = 2 * muS
  - \* d' = (2 / (s^2 + 1))^(1/2) * ((s + 1) / s) * muS
- `c2L(c, s = 1)`
  - l = c
  - \* l = ((s^2 + 1) / 2)^(1/2) * c
- `l2C(l, s = 1)`
  - c = l
  - \* c = (2 / (s^2 + 1))^(1/2) * l
- `s2H(s = 1)`
  - h = 1 / (s * (2 * pi)^(1/2))
- `h2S(h)`
  - s = 1 / (h * (2 * pi)^(1/2))
- `hr2Zhr(hr)`
  - zHR = Z(HR)
- `far2Zfar(far)`
  - zFAR = Z(FAR)
- `zhr2Hr(zhr)`
  - HR = Z^-1(zHR)
- `zfar2Far(zfar)`
  - FAR = Z^-1(zFAR)

## Development

### Features/Bugs/Notes

- Unequal variance
  - Ambiguity about with what to hold constant when varying other parameters in the
    context of unequal variance
  - d' vs d_a, and c vs c_a
  - muN != muS != d'
  - lambda != c
  - distinction between parameter s and sigma

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

- `decidables-elements/`
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
