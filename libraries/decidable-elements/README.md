<!--lint disable first-level-heading -->

# decidable-elements: Basic UI Web Components for Visualizing Decision Making

<!--lint enable first-level-heading -->

## Contents

- `DecidableElement`: Base class for all *decidable* web components


- `DecidableButton`: Button for taking actions
- `DecidableSlider`: Slider w/spinner for selecting a numeric value from a range
- `DecidableSpinner`: Text field w/spinner arrows for selecting a continuous numeric value
- `DecidableSwitch`: Switch for turning an option on or off
- `DecidableToggle`: Toggle for selecting one option from a set
- `DecidableToggleOption`: One option in a toggle set


- `DecidableConverterSet`: Utility for attributes that can take a list of values

---

## Features/Bugs/Notes

- Custom spinner that looks better than User Agent spinners?
- Edge/IE11 - slider shadow is clipped
- Edge/IE11 - no arrows for numeric controls
- Firefox - spinner arrows look ugly and asymmetrical
- IE11 - No CSS variables outside custom elements (and not patched by ShadyCSS!)

---

## Development Tooling

Dependencies updated 4/25/2020.

### Local Scripts

- `yarn lint`
  - Lints scripts in `src/`
- `yarn build`
  - Builds browser-compatible optimized bundle from `src/` to `lib/`

---

## File Organization

- `decidable-elements/`
  - `lib/` (Browser-compatible optimized bundles created from `src/` by `build`)
    **\[autogenerated\]**
  - `src/` (Source files)
  - `gulpfile.js` (Config for *gulp*)
  - `package.json` (Config for *yarn*)
  - `README.md` (This file)