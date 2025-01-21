<!--lint ignore first-heading-level-->

# **`@decidables/decidables-elements`**<br>Web Components for Basic UI in [**decidables**](https://decidables.github.io)

[![npm version](https://img.shields.io/npm/v/@decidables/decidables-elements?logo=npm)](https://www.npmjs.com/package/@decidables/decidables-elements)
[![license](https://img.shields.io/npm/l/@decidables/decidables-elements?color=informational)](https://github.com/decidables/decidables/blob/main/LICENSE.md)

This package provides basic user interface web components for use in all of the explorables. This
facilitates a consistent look and feel. They try to use the native inputs when possible, but build
on them for new elements like a switch, and composite elements like a slider with a linked spinner.

## Usage

### Install

```shell
yarn add @decidables/decidables-elements
```

### Use

```javascript
import '@decidables/decidables-elements';
```

A bare import is used to register the elements in the custom registry, so they are then available
for use in HTML.

## Contents

### Components

#### `DecidablesButton` / `<decidables-button>`

Button for taking actions

##### Slots

- *unnamed*
  - Inline content as label

##### Attributes

- `disabled: boolean = false`
  - In disabled state user can't interact

##### Example

```html
<decidables-button disabled>
  Click me
</decidables-button>
```

#### `DecidablesSlider` / `<decidables-slider>`

Slider w/spinner for selecting a numeric value from a range

##### Slots

- *unnamed*
  - Inline content as label

##### Attributes

- `disabled: boolean = false`
  - In disabled state user can't interact
- `max: number = undefined`
  - Maximum value the slider can take
- `min: number = undefined`
  - Minimum value the slider can take
- `step: number = undefined`
  - Amount that value increments with smallest movement of the slider
- `value: number = undefined`
  - Initial value of the slider

##### Example

```html
<decidables-slider disabled max="0" min="100" step="2" value="50">
  Move me
</decidables-slider>
```

#### `DecidablesSpinner` / `<decidables-spinner>`

Text field w/spinner arrows for selecting a continuous numeric value

##### Slots

- *unnamed*
  - Inline content as label

##### Attributes

- `disabled: boolean = false`
  - In disabled state user can't interact
- `max: number = undefined`
  - Maximum value the slider can take
- `min: number = undefined`
  - Minimum value the slider can take
- `step: number = undefined`
  - Amount that value increments with smallest movement of the slider
- `value: number = undefined`
  - Initial value of the slider

##### Example

```html
<decidables-spinner disabled max="0" min="100" step="2" value="50">
  Change me
</decidables-spinner>
```

#### `DecidablesSwitch` / `<decidables-switch>`

Switch for turning an option on or off

##### Slots

- *unnamed*
  - Inline content as label for **on** state
- `off-label`
  - Inline content as label for **off** state

##### Attributes

- `disabled: boolean = false`
  - In disabled state user can't interact
- `checked: number = false`
  - Whether the switch is **on** (`true`) or **off** (`false`)

##### Example

```html
<decidables-switch disabled checked>
  <span>On</span>
  <span slot="off-label">Off</span>
</decidables-switch>
```

#### `DecidablesToggleOption` / `<decidables-toggle-option>`

One option in a toggle set

##### Slots

- *unnamed*
  - Inline content as label for option

##### Attributes

- `disabled: boolean = false`
  - In disabled state user can't interact
- `checked: number = false`
  - Whether the option is selected (`true`) or not ('false`)
- `name: string = undefined`
  - An identifier to be shared by all options in a mutually exclusive group
- `value: string = undefined`
  - An identifier specific to this option to uniquely identify it in the group

##### Example

```html
<decidables-toggle-option disabled name="flavors" value="chocolate" checked>
  Chocolate
</decidables-toggle-option>
```

#### `DecidablesToggle` / `<decidables-toggle>`

Toggle for selecting one option from a set

##### Slots

- *unnamed*
  - Inline content as label for set
- `label`
  - Inline content as legend for options

##### Attributes

- `disabled: boolean = false`
  - In disabled state user can't interact

##### Example

```html
<decidables-toggle disabled>
  <span>Pick one</span>
  <span slot="label">Flavors</span>
  <decidables-toggle-option disabled name="flavors" value="chocolate">
    Chocolate
  </decidables-toggle-option>
  <decidables-toggle-option disabled name="flavors" value="strawberry">
    Strawberry
  </decidables-toggle-option>
  <decidables-toggle-option disabled name="flavors" value="vanilla" checked>
    Vanilla
  </decidables-toggle-option>
</decidables-toggle>
```

### Base class

#### `DecidablesElement`

Base class for all *decidables* web components

To define a new element:

```javascript
export default class DecidablesSomething extends DecidablesElement {
  ...
}
```

This library is built on `Lit`, so the resulting `DecidableElement` is also a `LitElement` 

### Utilities

#### `DecidablesConverterArray`

Utility for attributes that can take an array of values

If you are defining a `DecidablesElement` with an attribute that can take an array of numbers,
then you can use this to automatically convert between a space-separated list as the attribute
and an `Array` of numbers as the property:

```javascript
static get properties() {
  return {
    stuff: {
      attribute: 'values',
      converter: DecidablesConverterArray,
      reflect: true,
    },
  };
};
```

```html
<decidables-something values="1.23 3.56 -2.97"></decidables-something>
```

And `this.values` will be the `Array`: `[1.23 3.56 -2.97]`

#### `DecidablesConverterSet`

Utility for attributes that can take a set of values

If you are defining a `DecidablesElement` with an attribute that can take a set of string
values, then you can use this to automatically convert between a space-separated list as the
attribute and a `Set` of strings as the property:

```javascript
static get properties() {
  return {
    stuff: {
      attribute: 'stuff',
      converter: DecidablesConverterSet,
      reflect: true,
    },
  };
};
```

```html
<decidables-something stuff="this that other"></decidables-something>
```

And `this.stuff` will be a `Set` with members: `'this'`, `'that'`, and `'other'`

## Development

### Features/Bugs/Notes

- Custom spinner that looks better than User Agent spinners?
- Edge/IE11 - slider shadow is clipped
- Edge/IE11 - no arrows for numeric controls
- Firefox - spinner arrows look ugly and asymmetrical
- IE11 - No CSS variables outside custom elements (and not patched by ShadyCSS!)

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
