<!--lint ignore first-heading-level-->

# decidables-elements: Basic UI Web Components for [**decidables**](https://github.com/decidables/decidables)

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

- Slot: *unnamed*
  - Inline content as label
- Attribute: `disabled`
  - Boolean (default: `false`)
  - In disabled state user can't interact
- Example: 
  ```html
  <decidables-button disabled>
    Click me
  </decidables-button>
  ```

#### `DecidablesSlider` / `<decidables-slider>`

Slider w/spinner for selecting a numeric value from a range

- Slot: *unnamed*
  - Inline content as label
- Attribute: `disabled`
  - Boolean (default: `false`)
  - In disabled state user can't interact
- Attribute: `max`
  - Number (default: `undefined`)
  - Maximum value the slider can take
- Attribute: `min`
  - Number (default: `undefined`)
  - Minimum value the slider can take
- Attribute: `step`
  - Number (default: `undefined`)
  - Amount that value increments with smallest movement of the slider
- Attribute: `value`
  - Number (default: `undefined`)
  - Initial value of the slider
- Example:
  ```html
  <decidables-slider disabled max="0" min="100" step="2" value="50">
    Move me
  </decidables-slider>
  ```

#### `DecidablesSpinner` / `<decidables-spinner>`

Text field w/spinner arrows for selecting a continuous numeric value

- Slot: *unnamed*
  - Inline content as label
- Attribute: `disabled`
  - Boolean (default: `false`)
  - In disabled state user can't interact
- Attribute: `max`
  - Number (default: `undefined`)
  - Maximum value the slider can take
- Attribute: `min`
  - Number (default: `undefined`)
  - Minimum value the slider can take
- Attribute: `step`
  - Number (default: `undefined`)
  - Amount that value increments with smallest movement of the slider
- Attribute: `value`
  - Number (default: `undefined`)
  - Initial value of the slider
- Example:
  ```html
  <decidables-spinner disabled max="0" min="100" step="2" value="50">
    Change me
  </decidables-spinner>
  ```

#### `DecidablesSwitch` / `<decidables-switch>`

Switch for turning an option on or off

- Slot: *unnamed*
  - Inline content as label for **on** state
- Slot: `off-label`
  - Inline content as label for **off** state
- Attribute: `disabled`
  - Boolean (default: `false`)
  - In disabled state user can't interact
- Attribute: `checked`
  - Number (default: `false`)
  - Whether the switch is **on** (`true`) or **off** ('false`)
- Example:
  ```html
  <decidables-switch disabled checked>
    <span>On</span>
    <span slot="off-label">Off</span>
  </decidables-switch>
  ```

#### `DecidablesToggleOption` / `<decidables-toggle-option>`

One option in a toggle set

- Slot: *unnamed*
  - Inline content as label for option
- Attribute: `disabled`
  - Boolean (default: `false`)
  - In disabled state user can't interact
- Attribute: `checked`
  - Number (default: `false`)
  - Whether the option is selected (`true`) or not ('false`)
- Attribute: `name`
  - String (default: `undefined`)
  - An identifier to be shared by all options in a mutually exclusive group
- Attribute: `value`
  - String (default: `undefined`)
  - An identifier specific to this option to uniquely identify it in the group
- Example:
  ```html
  <decidables-toggle-option disabled name="flavors" value="chocolate" checked>
    Chocolate
  </decidables-toggle-option>
  ```

#### `DecidablesToggle` / `<decidables-toggle>`

Toggle for selecting one option from a set

- Slot: *unnamed*
  - Inline content as label for set
- Slot: `label`
  - Inline content as legend for options
- Attribute: `disabled`
  - Boolean (default: `false`)
  - In disabled state user can't interact
- Example:
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

- To define a new element:
  ```javascript
  export default class DecidablesSomething extends DecidablesElement {
    ...
  }
  ```
- This library is built on `Lit`, so the resulting `DecidableElement` is also a `LitElement` 

### Utilities

#### `DecidablesConverterArray`

Utility for attributes that can take an array of values

- If you are defining a `DecidablesElement` with an attribute that can take an array of numbers,
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

- If you are defining a `DecidablesElement` with an attribute that can take a set of string
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

---

## Features/Bugs/Notes

- Custom spinner that looks better than User Agent spinners?
- Edge/IE11 - slider shadow is clipped
- Edge/IE11 - no arrows for numeric controls
- Firefox - spinner arrows look ugly and asymmetrical
- IE11 - No CSS variables outside custom elements (and not patched by ShadyCSS!)

---

## Development Tooling

### Local Scripts

- `yarn lint`
  - Lints markdown, scripts and styles
- `yarn test`
  - Runs all tests and reports coverage in `test/coverage/`
- `yarn test:watch`
  - Runs all tests in watch mode and reports coverage in `test/coverage/`
- `yarn test:file <filename>`
  - Runs tests for a single file and reports coverage in `test/coverage/`
- `yarn build`
  - Builds bundles from `src/` to `lib/`

---

## File Organization

- `decidables-elements/`
  - `lib/` (Bundles created from `src/` by `build`) **\[autogenerated\]**
  - `src/` (Source files)
  - `test/` (Testing files)
    - `coverage/` (Code coverage results) **\[autogenerated\]**
  - `CHANGELOG.md` (Based on conventional commits) **\[autogenerated\]**
  - `gulpfile.js` (Config for *gulp*)
  - `package.json` (Config for *yarn* and *npm*)
  - `README.md` (This file)
