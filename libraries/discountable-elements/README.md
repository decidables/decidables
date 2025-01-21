<!--lint ignore first-heading-level  maximum-heading-length-->

# **`@decidables/discountable-elements`**<br>Web Components for Visualizing Hyperbolic Temporal Discounting in [<b>dis<i>k</i>ountable</b>](https://decidables.github.io/discountable)

[![npm version](https://img.shields.io/npm/v/@decidables/discountable-elements?logo=npm)](https://www.npmjs.com/package/@decidables/discountable-elements)
[![license](https://img.shields.io/npm/l/@decidables/discountable-elements?color=informational)](https://github.com/decidables/decidables/blob/main/LICENSE.md)

The web components used to visualize Hyperbolic Temporal Discounting in
[<b>dis<i>k</i>ountable</b>](https://decidables.github.io/discountable). There is an emphasis
on direct manipulation and consistent use of color. SVG is used extensively to provide clean
scalable diagrams.

## Usage

### Install

```shell
yarn add @decidables/discountable-elements
```

### Use

```javascript
import '@decidables/discountable-elements';
```

A bare import is used to register the elements in the custom registry, so they are then available
for use in HTML.

## Contents

### Components

Building blocks for interactive visualizations of HTD

#### `DiscountableControl` / `<discountable-control>`

Control panel for HTD demos

A configurable set of controls for user manipulation of examples of hyperbolic temporal discounting.
Controls can be provided for the number of trials, the timing of trials, and for running, pausing,
or resetting a block of trials.

##### Attributes

- `trials: number = undefined`
  - Show a slider for setting the number of trials, initialized to the value provided
  - Options
    - `1` to `100` in steps of `1`
- `duration: number = undefined`
  - Show a slider for setting the duration of the stimulus, wait, and inter-trial interval on each
    trial, initialized to the value provided in milliseconds
  - Options
    - `10` to `4000` in steps of `10`
- `run: boolean = false`
  - Show a button to run the task
- `pause: boolean = false`
  - Show a button to pause the task
- `reset: boolean = false`
  - Show a button to reset the task

##### Methods

- `complete()`
  - Indicates that a trial block is done, so it can no longer be paused

##### Custom Events

- `discountable-control-trials`
  - Indicates the number of trials slider has been adjusted
  - `detail`
    - `trials: number`
      - The new number of trials
- `discountable-control-duration`
  - Indicates the duration of trials slider has been adjusted
  - `detail`
    - `duration: number`
      - The new duration
- `discountable-control-run`
  - Indicates the run button has been pushed
- `discountable-control-pause`
  - Indicates the pause button has been pushed
- `discountable-control-reset`
  - Indicates the reset button has been pushed

##### Example

```html
<discountable-control trials="15" duration="1500" run pause reset></discountable-control>
```

#### `DiscountableResponse` / `<discountable-response>`

Response buttons and feedback for inter-temporal choice tasks

This element provides 'first' and 'second' response buttons. It can also display a running count
of the trials and display response feedback.

##### Attributes

- `interactive: boolean = false`
  - Allow user to respond, instead of just displaying simulated model responses
- `feedback: boolean = false`
  - Display response feedback, i.e. 'First'
- `trial: boolean = false`
  - Display the running count of trials, i.e. 'Trial: 2 of 10'

##### Methods

- `start(as, ds, al, dl, trial)`
  - Indicates that a trial has started, and its time to wait for a response
  - Parameters
    - `as: number`
      - Amount of smaller sooner option 
    - `ds: number`
      - Delay of smaller sooner option
    - `al: number`
      - Amount of larger later option 
    - `dl: number`
      - Delay of larger later option
    - `trial: number`
      - The count of the trial within the block
- `stop()`
  - Indicates that the trial is over and it is time to display any requested feedback
  - **Note:** If no response has been made yet, the trial is recorded as having no response
- `first()`
  - Emulate a 'first' response  
- `second()`
  - Emulate an 'second' response  
- `responded(response)`
  - Emulate a response
  - Parameters
    - `response: string`
      - Whether to emulate a `'first'` or `'second'` response
- `reset()`
  - Reset to the state at the start of a block of trials

##### Custom Events

- `discountable-response`
  - Indicates that a response has been made on this trial 
  - `detail`
    - `trial: number`
      - The count of this trial in the block
    - `as: number`
      - Amount of smaller sooner option 
    - `ds: number`
      - Delay of smaller sooner option
    - `al: number`
      - Amount of larger later option 
    - `dl: number`
      - Delay of larger later option
    - `response: string`
      - Whether the response was `'first'` or `'second'`

##### Example

```html
<discountable-response interactive feedback trial></discountable-response>
```

#### `HTDCalculation` / `<htd-calculation>`

Calculation and comparison of subjective value for smaller sooner and larger later options

Displays a live comparison of the subjective values for smaller sooner and larger later options,
indicating which one is better, or if they are equal. Breaks the calculation down into multiple
steps. Leverages the concepts from live equations to explicitly link objective amount and delay to
subjective value.

##### Attributes

- `numeric: boolean = false`
  - Show values instead of just the names of variables
- `interactive: boolean = false`
  - Allow editing of numeric values
- `amount-ss: number = 20`
  - Amount of smaller sooner option 
- `delay-ss: number = 5`
  - Delay of smaller sooner option
- `amount-ll: number = 50`
  - Amount of larger later option 
- `delay-ll: number = 40`
  - Delay of larger later option
- `k: number = 0.1`
  - Parameter k (discounting factor)

##### Custom Events

- `htd-calculation-change`
  - Indicates that the values in the calculation have changed
  - `detail`
    - `as: number`
      - Amount of smaller sooner option 
    - `ds: number`
      - Delay of smaller sooner option
    - `al: number`
      - Amount of larger later option 
    - `dl: number`
      - Delay of larger later option
    - `k: number`
      - Parameter k (discounting factor)

##### Example

```html
<htd-calculation numeric interactive amount-ss="20" delay-ss="10" amount-ll="80" delay-ll="50" k="0.05"></htd-calculation>
```

#### `HTDFit` / `<htd-fit>`

Fits HTD parameters to empirical data using a Bayesian model running in a WebWorker

The component displays trace plots of the sampling and histograms of the posterior distributions for
the k and luce parameters. The model consists of the following:

- Parameters
  - **k**: gamma prior with mean of 2 and shape of 3
  - **luce**: gamma prior with mean of 2 and shape of 3
- Data (for *i*th trial)
  - **as_i**: smaller sooner amount
  - **ds_i**: smaller sooner delay
  - **al_i**: larger later amount
  - **dl_i**: larger later delay
  - **response_i**: 'first' (smaller sooner) or 'second' (larger later)
- Functions
  - **v()**: subjective value
    - v = a / (1 + k * d)
  - **choice()**: Luce choice probability
    - cg = 1 / (1 + e^(luce * (vs - vl)))
- Model
  - **vs_i**: subjective value of the *i*th smaller sooner option
    - vs_i = v(as_i, ds_i, k)
  - **vl_i**: subjective value of the *i*th larger later option
    - vl_i = v(al_i, dl_i, k)
  - **cg_i**: probability of choosing the *i*th smaller sooner option
    - cg_i = choice(vs_i, vl_i, luce)
  - **choice_i**: Bernoulli distribution given **response_i** and **cg_i**

##### Methods

- `fit()`
  - Initiates a new fit, or queues one if the model is already fitting
- `clear()`
  - Removes all choice data, and initiates a data-free initial fit
- `get(name = 'default')`
  - Gets the specified choice data
  - Parameters
    - `name: string = 'default'`
      - Identifier for the choice data
  - Return value
    - `choice: object` or `null`
      - `as: number`
        - Amount of smaller sooner option 
      - `ds: number`
        - Delay of smaller sooner option
      - `al: number`
        - Amount of larger later option 
      - `dl: number`
        - Delay of larger later option
      - `response: string`
        - Chosen option, either `'first'` or `'second'`
      - `name: string`
        - Identifier for choice
      - `label: string`
        - Label for choice
- `set(as, ds, al, dl, response, name = '', label = '')`
  - Creates or changes the specified choice data
  - Parameters
    - `as: number`
      - Amount of smaller sooner option 
    - `ds: number`
      - Delay of smaller sooner option
    - `al: number`
      - Amount of larger later option 
    - `dl: number`
      - Delay of larger later option
    - `response: string`
      - Chosen option, either `'first'` or `'second'`
    - `name: string`
      - Identifier for choice
    - `label: string`
      - Label for choice

##### Custom Events

- `htd-fit-update`
  - Indicates that the fit has completed
  - `detail`
    - `k: number`
      - New value for parameter k (discounting factor)

##### Example

```html
<htd-fit></htd-fit>
```

#### `HTDCurves` / `<htd-curves>`

Temporal discounting curves for HTD

Displays options as an amount to be received at a certain delay, with a discounting curve
illustrating the present value of that option. The amount, the delay, and the discounting curve can
be directly manipulated.

##### Attributes

- `interactive: boolean = false`
  - Allow direct manipulation of functions or data points
- `amount: number = null`
  - Amount
- `delay: number = null`
  - Delay
- `k: number = 0.1`
  - Parameter k (discounting factor) 
- `label: string = ''`
  - Label for data point

##### Methods

- `trial(as, ds, al, dl, trial, response)`
  - Creates or changes the specified trial data
  - Parameters
    - `as: number`
      - Amount of smaller sooner option 
    - `ds: number`
      - Delay of smaller sooner option
    - `al: number`
      - Amount of larger later option 
    - `dl: number`
      - Delay of larger later option
    - `trial: number`
      - Trial count
    - `response: string`
      - Chosen option, either `'first'` or `'second'`
- `pauseTrial()`
  - Pause trial animations
- `resumeTrial()`
  - Resume trial animations
- `clearOptions()`
  - Remove all options except the default
- `removeOption(name)`
  - Remove the identified option
  - Parameters
    - `name: string`
      - Identifier for option
- `getOption(name = 'default')`
  - Retrieve the identified option
  - Parameters
    - `name: string = 'default'`
      - Identifier for option
  - Return value
    - `option: object`
      - `name: string`
        - Identifier for option
      - `a: number`
        - Amount of option 
      - `d: number`
        - Delay of option
      - `label: string`
        - Label for option
- `setOption(a, d, name = 'default', label = '', trial = false)`
  - Create or change the identified option
  - Parameters
    - `a: number`
      - Amount of option
    - `d: number`
      - Delay of option
    - `name: string = 'default'`
      - Identifier for option
    - `label: string = ''`
      - Label for option
    - `trial: boolean = false`
      - Is this for an animated trial?

##### Custom Events

- `htd-curves-change`
  - Indicates that an option has changed
  - `detail`
    - `name: string`
      - Identifier for option
    - `a: number`
      - Amount
    - `d: number`
      - Delay
    - `k: number`
      - Parameter k (discounting factor)
    - `label: string`
      - Label for option

##### Example

```html
<htd-curves interactive amount="60" delay="30" k="0.05" label="1"></htd-curves>
```

#### `ITCChoice` / `<itc-choice>`

A choice between two options at different times

Presents a choice between two options, one smaller sooner and one larger later. The display can
either show the choice, a fixation, or a blank display. It is optionally interactive, in which case
the amounts and the delays can be edited.

##### Attributes

- `interactive: boolean = false`
  - Allow direct manipulation of probabilities and values
- `amount-ss: number = 20`
  - Amount of smaller sooner option 
- `delay-ss: number = 5`
  - Delay of smaller sooner option
- `amount-ll: number = 50`
  - Amount of larger later option 
- `delay-ll: number = 40`
  - Delay of larger later option
- `state: string = 'choice'`
  - Current state of the display
  - Options
    - `'choice'`
      - Show the options with a question mark in between
    - `'fixation'`
      - Show blank pies with a fixation in between
    - `'blank'`
      - Show blank pies with a dot in between

##### Custom Events

- `itc-choice-change`
  - Indicates that one or more numbers in the choice have been changed
  - `detail`
    - `as: number`
      - Amount of smaller sooner option 
    - `ds: number`
      - Delay of smaller sooner option
    - `al: number`
      - Amount of larger later option 
    - `dl: number`
      - Delay of larger later option

##### Example

```html
<itc-choice interactive amount-ss="20" delay-ss="10" amount-ll="80" delay-ll="50" state="choice"></itc-choice>
```

#### `ITCOption` / `<itc-option>`

A single decision option consisting of an amount and a delay

Displays its amount and delay numerically.
Optionally, the amount and the delay can be edited.

##### Attributes

- `interactive: boolean = false`
  - Allow direct manipulation of probabilities and values
- `amount: number = 20`
  - Amount of option 
- `delay: number = 5`
  - Delay of option
- `state: string = 'choice'`
  - Current state of the display
  - Options
    - `'choice'`
      - Show the option quantities
    - `'fixation'`
      - Show blank option
    - `'blank'`
      - Show blank option

##### Custom Events

- `itc-option-change`
  - Indicates that the option has been changed
  - `detail`
    - `a: number`
      - Amount
    - `d: number`
      - delay

##### Example

```html
<itc-option interactive amount="75" delay="25" state="choice"></itc-option>
```

#### `ITCTask` / `<itc-task>`

Displays stimuli for inter-temporal choice task

When run, a block of trials is presented. Before each trial is an inter-trial interval (ITI). Each
trial then consists of a stimulus during which a participant can respond. The stimulus consists of
two options, each of which is represented as an amount at a delay.The choice is generally between a
smaller sooner option and a larger later option. The task can be paused and then resumed, and it can
also be reset and run again. 

##### Attributes

- `duration: number = 2000`
  - Duration of stimulus in milliseconds
- `iti: number = 2000`
  - Duration of inter-trial interval in milliseconds
- `trials: number = 5`
  - Number of trials per block
- `running: boolean = false`
  - Currently executing block of trials

##### Methods

- `reset()`
  - Stops a currently running or ended block of trials and resets everything to be ready to run
    again

##### Custom Events

- `itc-block-start`
  - Indicates the beginning of a block of trials
- `itc-block-end`
  - Indicates the completion of a block of trials
  - `detail` for `itc-block-start` and `itc-block-end`
    - `trials: number`
      - Number of trials in the block
- `itc-trial-start`
  - Indicates the beginning of a trial (iti is over and stimulus is about to start)
- `itc-trial-end`
  - Indicates the end of a trial (stimulus is over and iti is about to start)
  - `detail` for `itc-trial-start` and `itc-trial-end`
    - `trials: number` 
      - Number of trials in the block
    - `duration: number`
      - Duration of stimulus in milliseconds
    - `iti: number`
      - Duration of inter-trial interval in milliseconds
    - `trial: number`
      - Count of trial in block (one-based)
    - `as: number`
      - Amount of smaller sooner option 
    - `ds: number`
      - Delay of smaller sooner option
    - `al: number`
      - Amount of larger later option 
    - `dl: number`
      - Delay of larger later option

##### Example

```html
<itc-task duration="3000" iti="500" trials="10" running></itc-task>
```

### Equations

Interactive equations for HTD

The equations can either be static and display the variable names, be static and display names and
values or be interactive with names and editable values, in which case only the values on the right
side of the equals sign are editable.

**Note:** The layout for these equations leaves something to be desired, especially on smaller
screens. Ideally a proper math renderer would be used, but I haven't found one that takes kindly to
insertion of the custom elements needed for live editing.

#### `HTDEquationADK2V` / `<htd-equation-adk2v>`

Subjective value from objective amount and delay, and a discounting factor

##### Attributes

- `numeric: boolean = false`
  - Show values instead of just the names of variables
- `interactive: boolean = false`
  - Allow editing of numeric values in the equation
- `amount: number = 100`
  - Amount
- `delay: number = 30`
  - Delay
- `k: number = 0.05`
  - Parameter k (discounting factor)

##### Properties

- `v: number`
  - Value

##### Custom Events

- `htd-equation-adk2v-change`
  - Indicates that the values in the equation have changed
  - `detail`
    - `a: number`
      - New value of amount
    - `d: number`
      - New value of delay
    - `k: number`
      - New value of parameter k (discounting factor)
    - `v: number`
      - New subjective value

##### Example

```html
<htd-equation-adk2v numeric interactive amount="20" delay="10" k="0.2"></htd-equation-adk2v>
```

#### `HTDEquation`

Base class for all interactive HTD equations

To define a new equation:

```javascript
export default class HTDEquationSomething extends HTDEquation {
  ...
}
```

`HTDEquation` extends `DiscountableElement` extends `DecidablesElement` extends `LitElement`

### Examples

Full examples built from multiple components

#### `HTDExampleHuman` / `<htd-example-human>`

User runs task, and results are fit and displayed in real-time using HTD

Used to build examples where the user is performing the inter-temporal choice task. Can include
controls, the task itself, response buttons with feedback, HTD curves, and trace plots and
histograms for the parameters in the model fit. The HTD curves should not be interactive, because
their rendering is determined by the user's task performance.

##### Slots

- *unnamed*
  - Place relevant `discountable-elements` components here
  - Wired elements
    - `<discountable-control>`
      - Allows user to adjust parameters and control the task
    - `<discountable-response>`
      - Allows user to make responses and see feedback
    - `<htd-fit>`
      - Fits the user's responses to HTD using a Bayesian model running in a Web Worker
    - `<htd-curves>`
      - Displays the options as amounts with delays with discounting curves based on the current
        model parameters
    - `<itc-task>`
      - Displays the task

##### Example

```html
<htd-example-human>
  <discountable-control trials="10" run pause reset></discountable-control>
  <itc-task trials="10"></itc-task>
  <discountable-response interactive trial feedback></discountable-response>
  <htd-curves></htd-curves>
  <htd-fit></htd-fit>
</htd-example-human>
```

#### `HTDExampleInteractive` / `<htd-example-interactive>`

Explore how decision and HTD model parameters relate

Used to build examples where the user can explore the relationship between a choice and model
parameters. Can include the choice, a visual rendering of the comparative value calculation, and the
HTD curves with the current options. All components can be interactive.

##### Attributes

**Note:** Since many attributes are set on the example, they don't need to be set on the individual
components, as they will be propagated and kept in sync.

- `amount-ss: number = 10`
  - Smaller sooner amount
- `delay-ss: number = 1`
  - Smaller sooner delay
- `amount-ll: number = 50`
  - Larger later amount
- `delay-ll: number = 40`
  - Larger later delay
- `k: number = 0.05`
  - Parameter k (discounting factor)

##### Slots

- *unnamed*
  - Place relevant `discountable-elements` components here
  - Wired elements
    - `<htd-calculation>`
      - Display and change the value calculations
    - `<htd-curves>`
      - Displays the options as amounts with delays with discounting curves based on the current
        model parameters
    - `<itc-choice>`
      - Display and change the choice between smaller sooner and larger later options

##### Example

```html
<htd-example-interactive a1="5" d1="20" a2="30" d2="350" k="0.01">
  <itc-choice interactive></itc-choice>
  <htd-curves interactive></htd-curves>
  <htd-calculation numeric interactive></htd-calculation>
</htd-example-interactive>
```

#### `HTDExampleModel` / `<htd-example-model>`

Model simulates task based on HTD parameter values

Used to build examples where the model is simulated to perform the inter-temporal choice task. Can
include controls, the task itself, response buttons with feedback, and a visual rendering of the HTD
curves. The HTD curves should be interactive, so the user can modify the model. The responses should
not be interactive, because their values are received from the model's task performance.

##### Attributes

**Note:** Since model parameter attributes are set on the example, they don't need to be set on the
individual components, as they will be propagated and kept in sync.

- `k: number = 0.2`
  - Parameter k (discounting factor)

##### Slots

- *unnamed*
  - Place relevant `discountable-elements` components here
  - Wired elements
    - `<discountable-control>`
      - Allows user to adjust parameters and control the task
    - `<discountable-response>`
      - Allows user to view model responses and feedback
    - `<htd-calculation>`
      - Display the value calculations
    - `<htd-curves>`
      - Displays the options as amounts with delays with discounting curves based on the current
        model parameter, which can be changed
    - `<itc-task>`
      - Displays the task

##### Example

```html
<htd-example-model k="0.2" >
  <discountable-control trials="10" run pause reset></discountable-control>
  <itc-task trials="10"></itc-task>
  <htd-curves interactive></htd-curves>
  <discountable-response trial feedback></discountable-response>
</htd-example-model>
```

#### `HTDExample`

Base class for all HTD examples

To define a new example:

```javascript
export default class HTDExampleSomething extends HTDExample {
  ...
}
```

`HTDExample` extends `DiscountableElement` extends `DecidablesElement` extends `LitElement`

### Base class

#### `DiscountableElement`

Base class for all *discountable* web components

To define a new element:

```javascript
export default class DiscountableElementSomething extends DiscountableElement {
  ...
}
```

`DiscountableElement` extends `DecidablesElement` extends `LitElement`

## Development

### Features/Bugs/Notes

- Add to HTDMath
  - Luce choice rule

### Package Scripts

- `yarn lint`
  - Lints scripts in `src/`
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
  - Builds browser-compatible optimized bundle from `src/` to `lib/`

### File Organization

- `discountable-elements/`
  - `lib/` (Bundles created from `src/` by `build`)
    **\[autogenerated\]**
  - `src/` (Source files)
    - `components/` (Source for visualizations)
    - `equations/` (Source for equations)
    - `examples/` (Source for examples combining visualizations)
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
