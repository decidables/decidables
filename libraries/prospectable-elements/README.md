<!--lint ignore first-heading-level  maximum-heading-length-->

# **`@decidables\prospectable-elements`**<br>Web Components for Visualizing Cumulative Prospect Theory in [<b>prospect<i>α</i>b<i>λ</i>e</b>](https://decidables.github.io/prospectable)

[![npm version](https://img.shields.io/npm/v/@decidables/prospectable-elements?logo=npm)](https://www.npmjs.com/package/@decidables/prospectable-elements)
[![license](https://img.shields.io/npm/l/@decidables/prospectable-elements?color=informational)](https://github.com/decidables/decidables/blob/main/LICENSE.md)

The web components used to visualize Cumulative Prospect Theory in
[<b>prospect<i>α</i>b<i>λ</i>e</b>](https://decidables.github.io/prospectable). There is an emphasis
on direct manipulation and consistent use of color. SVG is used extensively to provide clean
scalable diagrams.

## Usage

### Install

```shell
yarn add @decidables/prospectable-elements
```

### Use

```javascript
import '@decidables/prospectable-elements';
```

A bare import is used to register the elements in the custom registry, so they are then available
for use in HTML.

## Contents

### Components

Building blocks for interactive visualizations of CPT

#### `CPTCalculation` / `<cpt-calculation>`

Calculation and comparison of subjective utility for gamble and sure options

Displays a live comparison of the subjective utilities for gamble and sure options, indicating which
one is better, or if they are equal. Breaks the calculation down into multiple steps. Leverages the
concepts from live equations to explicitly link objective value/probability to subjective
value/decision weight to subjective utility.

##### Attributes

- `numeric: boolean = false`
  - Show values instead of just the names of variables
- `interactive: boolean = false`
  - Allow editing of numeric values
- `win: number = 100`
  - Winning value in gamble 
- `loss: number = 0`
  - Losing value in gamble 
- `probability: number = 0.75`
  - Probability of *winning* 
- `sure: number = 50`
  - Sure value
- `alpha: number = 0.8`
  - Parameter α (diminishing marginal utility)
- `lambda: number = 1.2`
  - Parameter λ (loss aversion)
- `gamma: number = 0.8`
  - Parameter γ (probability distortion)

##### Custom Events

- `cpt-calculation-change`
  - Indicates that the values in the calculation have changed
  - `detail`
    - `xl: number` 
      - New losing value for gamble
    - `xw: number`
      - New winning value for gamble
    - `pw: number`
      - New probability of winning gamble
    - `xs: number`
      - New sure value
    - `a: number`
      - New value for parameter α (diminishing marginal utility)
    - `l: number`
      - New value for parameter λ (loss aversion)
    - `g: number`
      - New value for parameter γ (probability distortion)

##### Example

```html
<cpt-calculation numeric interactive win="100" loss="0" probability="0.75" sure="50" alpha="0.8" lambda="1.2" gamma="0.8"></cpt-calculation>
```

#### `CPTFit` / `<cpt-fit>`

Fits CPT parameters to empirical data using a Bayesian model running in a WebWorker

The component displays trace plots of the sampling and histograms of the posterior distributions for
the alpha, lambda, gamma, and luce parameters. The model consists of the following:

- Parameters
  - **alpha**: beta prior with mean of 0.5 and sample size of 2.5
  - **lambda**: gamma prior with mean of 2.0 and shape of 3.0
  - **gamma**: beta prior with mean of 0.5 and sample size of 2.5
  - **luce**: gamma prior with mean of 2 and shape of 3
- Data (for *i*th trial)
  - **xw_i**: gamble winning value
  - **xl_i**: gamble losing value
  - **pw_i**: gamble winning probability
  - **xs_i**: sure value
  - **response_i**: 'gamble' or 'sure'
- Functions
  - Subjective value
    - v = if (x >= 0) x^a; if (x < 0) -l * (-x)^a
  - Decision weight
    - w = p^g / (p^g + (1 - p)^g)^(1 / g)
  - Utility
    - u = Sum_n(v_n * w_n)
  - Luce choice probability
    - cg = 1 / (1 + e^(luce * (us - ug)))
- Model
  - **ug_i**: subjective utility of the *i*th gamble
    - ug_i = u([v(xw_i, alpha, lambda), v(xl_i, alpha, lambda)], [w(pw_i, gamma), 1 - w(pw_i, gamma)])
  - **us_i**: subjective utility of the *i*th sure thing
    - us_i = v(xs_i, alpha, lambda)
  - **cg_i**: probability of choosing the *i*th gamble
    - cg_i = choice(us_i, ug_i, luce)
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
      - `xl: number`
        - Gamble losing value
      - `xw: number`
        - Gamble winning value
      - `pw: number`
        - Gamble winning probability
      - `xs: number`
        - Sure value
      - `response: string`
        - Chosen option, either `'gamble'` or `'sure'`
      - `name: string`
        - Identifier for choice
      - `label: string`
        - Label for choice
- `set(xl, xw, pw, xs, response, name = '', label = '')`
  - Creates or changes the specified choice data
  - Parameters
    - `xl: number`
      - Gamble losing value
    - `xw: number`
      - Gamble winning value
    - `pw: number`
      - Gamble winning probability
    - `xs: number`
      - Sure value
    - `response: string`
      - Chosen option, either `'gamble'` or `'sure'`
    - `name: string`
      - Identifier for choice
    - `label: string`
      - Label for choice

##### Custom Events

- `cpt-fit-update`
  - Indicates that the fit has completed
  - `detail`
    - `a: number`
      - New value for parameter α (diminishing marginal utility)
    - `l: number`
      - New value for parameter λ (loss aversion)
    - `g: number`
      - New value for parameter γ (probability distortion)

##### Example

```html
<cpt-fit></cpt-fit>
```

#### `CPTProbability` / `<cpt-probability>`

Decision weight function for CPT

Maps from objective probability to subjective decision weight. Functions themselves and data points
on the functions can be directly manipulated.

##### Attributes

- `interactive: boolean = false`
  - Allow direct manipulation of functions or data points
- `probability: number = null`
  - Probability
- `gamma: number = 0.5`
  - Parameter γ (probability distortion) 
- `label: string = ''`
  - Label for data point

##### Methods

- `trial(xl, xw, pw, xs, trial, response)`
  - Creates or changes the specified trial data
  - Parameters
    - `xl: number`
      - Gamble losing value
    - `xw: number`
      - Gamble winning value
    - `pw: number`
      - Gamble winning probability
    - `xs: number`
      - Sure value
    - `trial: number`
      - Trial count
    - `response: string`
      - Chosen option, either `'gamble'` or `'sure'`
- `pauseTrial()`
  - Pause trial animations
- `resumeTrial()`
  - Resume trial animations
- `clearFunctions()`
  - Remove all functions except the default
- `clearProbabilities()`
  - Remove all probabilities except the default
- `clear()`
  - Remove all functions and probabilities except the defaults
- `removeFunction(name)`
  - Remove the identified function
  - Parameters
    - `name: string`
      - Identifier for function
- `removeProbability(name)`
  - Remove the identified probability
  - Parameters
    - `name: string`
      - Identifier for probability
- `getFunction(name = 'default')`
  - Retrieve the identified function
  - Parameters
    - `name: string = 'default'`
      - Identifier for function
  - Return value
    - `function: object`
      - `name: string`
        - Identifier for function
      - `g: number`
        - Parameter γ (probability distortion)
- `getProbability(name = 'default')`
  - Retrieve the identified probability
  - Parameters
    - `name: string = 'default'`
      - Identifier for probability
  - Return value
    - `probability: object`
      - `name: string`
        - Identifier for probability
      - `p: number`
        - Probability
      - `w: number`
        - Decision weight
      - `label: string`
        - Label
      - `function: string`
        - Name of function
- `get(name = 'default')`
  - Retrieve the identified probability and function
  - Parameters
    - `name: string = 'default'`
      - Identifier for probability and function
  - Return value
    - `probability & function: object`
      - `name: string`
        - Identifier for probability and function
      - `p: number`
        - Probability
      - `g: number`
        - Parameter γ (probability distortion)
      - `w: number`
        - Decision weight
      - `label: string`
        - Label
      - `function: string`
        - Name of function
- `setFunction(g, name = 'default')`
  - Create or change the identified function
  - Parameters
    - `g: number`
      - Parameter γ (probability distortion)
    - `name: string = 'default'`
      - Identifier for function
- `setProbability(p, name = 'default', label = '', func = name, trial = false)`
  - Create or change the identified probability
  - Parameters
    - `p: number`
      - Probability
    - `name: string = 'default'`
      - Identifier for probability
    - `label: string = ''`
      - Label
    - `func: string = name`
      - Name of function
    - `trial: boolean = false`
      - Is this for an animated trial?
- `set(p, g, name = 'default', label = '', func = name)`
  - Create or change the identified probability and function
  - Parameters
    - `p: number`
      - Probability
    - `g: number`
      - Parameter γ (probability distortion)
    - `name: string = 'default'`
      - Identifier for probability
    - `label: string = ''`
      - Label
    - `func: string = name`
      - Name of function

##### Custom Events

- `cpt-probability-change`
  - Indicates that a function and/or probability has changed
  - `detail`
    - `name: string`
      - Identifier for probability
    - `p: number`
      - Probability
    - `g: number`
      - Parameter γ (probability distortion)
    - `w: number`
      - Decision weight
    - `label: string`
      - Label
    - `function: string`
      - Name of function

##### Example

```html
<cpt-probability interactive probability="0.75" gamma="0.8"></cpt-probability>
```

#### `CPTSpace` / `<cpt-space>`

3D representation of CPT parameter space for a given decision

A 3D plot, with alpha, lambda, and gamma as the three dimensions. The current model parameters can
be represented as a point in the space. A surface can be displayed representing the border between
combinations of parameter values that will lead to a 'gamble' choice versus a 'sure' choice for the
current decision.

Note: This component relies on Plotly's 3d Isosurface and Scatter Plots, which seem to require a few
megabytes of code, and are laggy to update, though direct interaction with the plot is snappy.

##### Attributes

- `surface: boolean = true`
  - Should the surface separating 'gamble' choices versus 'sure' choices be displayed
- `point: boolean = true`
  - Should the point representing the current parameter values be displayed
- `updateable: boolean = false`
  - Can the color-coded response for the decision change based on current values
- `alpha: number = 0.8`
  - Parameter α (diminishing marginal utility)
- `lambda: number = 1.2`
  - Parameter λ (loss aversion)
- `gamma: number = 0.8`
  - Parameter γ (probability distortion)
- `win: number = 20`
  - Winning value in gamble 
- `loss: number = 0`
  - Losing value in gamble 
- `probability: number = 0.5`
  - Probability of *winning* 
- `sure: number = 10`
  - Sure value

##### Example

```html
<cpt-space updateable surface="true" point="true" alpha="0.75" lambda="1.2" gamma="0.8" win="20" loss="0" probability="0.5" sure="10"></cpt-space>
```

#### `CPTValue` / `<cpt-value>`

Value function for CPT

Maps from objective value to subjective value.  Functions themselves and data points on the
functions can be directly manipulated.

##### Attributes

- `interactive: boolean = false`
  - Allow direct manipulation of functions or data points
- `value: number = null`
  - Objective value
- `alpha: number = 0.5`
  - Parameter α (diminishing marginal utility)
- `lambda: number = 2`
  - Parameter λ (loss aversion)
- `label: string = ''`
  - Label for data point

##### Methods

- `trial(xl, xw, pw, xs, trial, response)`
  - Creates or changes the specified trial data
  - Parameters
    - `xl: number`
      - Gamble losing value
    - `xw: number`
      - Gamble winning value
    - `pw: number`
      - Gamble winning probability
    - `xs: number`
      - Sure value
    - `trial: number`
      - Trial count
    - `response: string`
      - Chosen option, either `'gamble'` or `'sure'`
- `pauseTrial()`
  - Pause trial animations
- `resumeTrial()`
  - Resume trial animations
- `clearFunctions()`
  - Remove all functions except the default
- `clearValues()`
  - Remove all values except the default
- `clear()`
  - Remove all functions and values except the defaults
- `removeFunction(name)`
  - Remove the identified function
  - Parameters
    - `name: string`
      - Identifier for function
- `removeValue(name)`
  - Remove the identified value
  - Parameters
    - `name: string`
      - Identifier for value
- `getFunction(name = 'default')`
  - Retrieve the identified function
  - Parameters
    - `name: string = 'default'`
      - Identifier for function
  - Return value
    - `function: object`
      - `name: string`
        - Identifier for function
      - `a: number`
        - Parameter α (diminishing marginal utility)
      - `l: number`
        - Parameter λ (loss aversion)
- `getValue(name = 'default')`
  - Retrieve the identified value
  - Parameters
    - `name: string = 'default'`
      - Identifier for value
  - Return value
    - `value: object`
      - `name: string`
        - Identifier for value
      - `x: number`
        - Objective value
      - `v: number`
        - Subjective value
      - `label: string`
        - Label
      - `function: string`
        - Name of function
- `get(name = 'default')`
  - Retrieve the identified value and function
  - Parameters
    - `name: string = 'default'`
      - Identifier for value and function
  - Return value
    - `value & function: object`
      - `name: string`
        - Identifier for value and function
      - `x: number`
        - Objective value
      - `a: number`
        - Parameter α (diminishing marginal utility)
      - `l: number`
        - Parameter λ (loss aversion)
      - `v: number`
        - Subjective value
      - `label: string`
        - Label
      - `function: string`
        - Name of function
- `setFunction(a, l, name = 'default')`
  - Create or change the identified function
  - Parameters
    - `a: number`
      - Parameter α (diminishing marginal utility)
    - `l: number`
      - Parameter λ (loss aversion)
    - `name: string = 'default'`
      - Identifier for function
- `setValue(x, name = 'default', label = '', func = name, trial = false)`
  - Create or change the identified probability
  - Parameters
    - `x: number`
      - Objective value
    - `name: string = 'default'`
      - Identifier for value
    - `label: string = ''`
      - Label
    - `func: string = name`
      - Name of function
    - `trial: boolean = false`
      - Is this for an animated trial?
- `set(x, a, l, name = 'default', label = '', func = name)`
  - Create or change the identified value and function
  - Parameters
    - `x: number`
      - Objective value
    - `a: number`
      - Parameter α (diminishing marginal utility)
    - `l: number`
      - Parameter λ (loss aversion)
    - `name: string = 'default'`
      - Identifier for value
    - `label: string = ''`
      - Label
    - `func: string = name`
      - Name of function

##### Custom Events

- `cpt-value-change`
  - Indicates that a function and/or value has changed
  - `detail`
    - `name: string`
      - Identifier for value
    - `x: number`
      - Objective value
    - `a: number`
      - Parameter α (diminishing marginal utility)
    - `l: number`
      - Parameter λ (loss aversion)
    - `v: number`
      - Subjective value
    - `label: string`
      - Label
    - `function: string`
      - Name of function

##### Example

```html
<cpt-value interactive value="20" alpha="0.8" lambda="1.2"></cpt-value>
```

#### `DecisionChoice` / `<decision-choice>`

A choice between two options, one a gamble, and one a sure thing

Presents a choice between two options, a gamble and a sure thing. The display can either show the
choice, a fixation, or a blank display. It is optionally interactive, in which case the values of
the gamble win and the sure thing and the probability of the gamble win can be edited.

##### Attributes

- `interactive: boolean = false`
  - Allow direct manipulation of probabilities and values
- `win: number = 20`
  - Winning value in gamble 
- `loss: number = 0`
  - Losing value in gamble 
- `probability: number = 0.5`
  - Probability of *winning* 
- `sure: number = 10`
  - Sure value
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

- `decision-choice-change`
  - Indicates that one or more numbers in the choice have been changed
  - `detail`
    - `xl: number`
      - Objective value of gamble loss
    - `xw: number`
      - Objective value of gamble win
    - `pw: number`
      - Probability of gamble win
    - `xs: number`
      - Objective value of sure thing

##### Example

```html
<decision-choice interactive probability="0.75" win="20" loss="0" sure="10" state="choice"></decision-choice>
```

#### `ProspectableControl` / `<prospectable-control>`

Control panel for CPT demos

A configurable set of controls for user manipulation of examples of cumulative prospect theory.
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

- `prospectable-control-trials`
  - Indicates the number of trials slider has been adjusted
  - `detail`
    - `trials: number`
      - The new number of trials
- `prospectable-control-duration`
  - Indicates the duration of trials slider has been adjusted
  - `detail`
    - `duration: number`
      - The new duration
- `prospectable-control-run`
  - Indicates the run button has been pushed
- `prospectable-control-pause`
  - Indicates the pause button has been pushed
- `prospectable-control-reset`
  - Indicates the reset button has been pushed

##### Example

```html
<prospectable-control trials="15" duration="1500" run pause reset></prospectable-control>
```

#### `DecisionOption` / `<decision-option>`

A single decision option consisting of one or more decision outcomes

Displays its possible outcomes as a pie chart, with the size representing the probability.
Optionally, the size of the pie pieces can be directly manipulated and the values associated with
them can be edited.

##### Attributes

- `interactive: boolean = false`
  - Allow direct manipulation of probabilities and values

##### Slots

- *unnamed*
  - Place the constituent decision outcomes here
  - `<decision-outcome>`
    - This is the only meaningful tag for this slot - the total probabilities should sum to 1

##### Custom Events

- `decision-outcome-change`
  - Indicates that an outcome has been changed
  - `detail`
    - `x: number`
      - Objective value
    - `p: number`
      - Probability
    - `name: string`
      - Name of outcome

##### Example

```html
<decision-option interactive>
  <decision-outcome interactive probability="0.25" value="0" name="loss"></decision-outcome>
  <decision-outcome interactive probability="0.75" value="20" name="win"></decision-outcome>`
</decision-option>
```

#### `DecisionOutcome` / `<decision-outcome>`

A single outcome for a decision option (no display on its own)

A place-holder to specify an outcome with a particular value and probability. Only useable inside of
a `<decision-option>`.

##### Attributes

- `interactive: boolean = false`
  - Allow direct manipulation of probabilities and values
- `value: number = 0`
  - Objective value
- `probability: number = 0`
  - Probability
- `name: string = ''`
  - Name for this outcome

##### Example

```html
<decision-outcome interactive value="20" probability="0.8" name="win"></decision-outcome>
```

#### `DecisionResponse` / `<decision-response>`

Response buttons, feedback, and payoffs for gambling decision tasks

This element provides 'gamble' and 'sure' response buttons. It can also display a running count
of the trials, display feedback in comparative terms, and payoff outcome.

##### Attributes

- `interactive: boolean = false`
  - Allow user to respond, instead of just displaying simulated model responses
- `feedback: string = 'outcome'`
  - What type of feedback to display
  - Options
    - `'none'`
      - No feedback
    - `'outcome'`
      - Feedback in terms of comparative selection, i.e. 'better', 'worse', 'even', or 'no response'
- `trial: boolean = false`
  - Display the running count of trials, i.e. 'Trial: 2 of 10'
- `payoff: string = 'none'`
  - What payoff information to display
  - Options
    - `'none'`
      - No payoff information displayed
    - `'selection'`
      - Only display payoff for the selected option
    - `'both'`
      - Display payoffs for both options

##### Methods

- `start(xl, xw, pw, xs, gamblePayoff, surePayoff, better, trial)`
  - Indicates that a trial has started, and its time to wait for a response
  - Parameters
    - `xl: number`
      - Objective value of gamble loss
    - `xw: number`
      - Objective value of gamble win
    - `pw: number`
      - Probability of gamble win
    - `xs: number`
      - Objective value of sure thing
    - `gamblePayoff: number`
      - Actual outcome if gamble is selected
    - `surePayoff: number`
      - Actual outcome if sure thing is selected
    - `better: string`
      - Which option is better, either `'gamble'`, `'sure'`, or `'equal'`
    - `trial: number`
      - The count of the trial within the block
- `stop()`
  - Indicates that the trial is over and it is time to display any requested feedback
  - **Note:** If no response has been made yet, the trial is recorded as having no response
- `gamble()`
  - Emulate a 'gamble' response  
- `sure()`
  - Emulate an 'sure' response  
- `responded(response)`
  - Emulate a response
  - Parameters
    - `response: string`
      - Whether to emulate a `'gamble'` or `'sure'` response
- `reset()`
  - Reset to the state at the start of a block of trials

##### Custom Events

- `decision-response`
  - Indicates that a response has been made on this trial 
  - `detail`
    - `trial: number`
      - The count of this trial in the block
    - `better: string`
      - Which option is better, either `'gamble'`, `'sure'`, or `'equal'`
    - `gamblePayoff: number`
      - Actual outcome if gamble was selected
    - `surePayoff: number`
      - Actual outcome if sure thing was selected
    - `xl: number`
      - Objective value of gamble loss
    - `xw: number`
      - Objective value of gamble win
    - `pw: number`
      - Probability of gamble win
    - `xs: number`
      - Objective value of sure thing
    - `response: string`
      - Whether the response was `'gamble'` or `'sure'`
    - `outcome: string`
      - The outcome of the trial as `'better'`, `'worse'` or `'even'`
    - `payoff: number`
      - The payoff for this trial

##### Example

```html
<decision-response interactive feedback="outcome" trial payoff="selection"></decision-response>
```

#### `DecisionSpace` / `<decision-space>`

3D representation of decision space for given parameter values

A 3D plot, with gamble win value, gamble win probability, and sure value as the three dimensions.
The decisions are between a gamble with a win value with a win probability and a lose value of zero,
and a sure thing with a sure value. Decisions can be represented as points in the space. A surface
can be displayed representing the border between combinations of values and probabilities that will
lead to a 'gamble' choice versus a 'sure' choice.

Note: This component relies on Plotly's 3d Isosurface and Scatter Plots, which seem to require a few
megabytes of code, and are laggy to update, though direct interaction with the plot is snappy.

##### Attributes

- `surface: boolean = true`
  - Should the surface separating 'gamble' choices versus 'sure' choices be displayed
- `point: string = 'first'`
  - Should the points representing choices be displayed
  - Options
    - `'all'`
      - Show all choices as points
    - `'first'`
      - Only show the first choice as a point
    - `'rest'`
      - Show all but the first choice as points
    - `'none'`
      - Don't show any choices as points
- `updateable: boolean = false`
  - Can the color-coded responses for decisions change based on current parameters
- `alpha: number = 0.8`
  - Parameter α (diminishing marginal utility)
- `lambda: number = 1.2`
  - Parameter λ (loss aversion)
- `gamma: number = 0.8`
  - Parameter γ (probability distortion)
- `win: number = 20`
  - Winning value in gamble
- `loss: number = 0`
  - Losing value in gamble
- `probability: number = 0.5`
  - Probability of *winning*
- `sure: number = 10`
  - Sure value

##### Methods

- `get(name = 'default')`
  - Retrieve the identified choice
  - Parameters
    - `name: string = 'default'`
      - Identifier for choice
  - Return value
    - `choice: object` or `null`
      - `name: string`
        - Identifier for choice
      - `xw: number`
        - Value of gamble win
      - `pw: number`
        - Probability of gamble win
      - `xs: number`
        - Value of sure thing
      - `response: string`
        - Chosen response
        - Options
          - 'gamble'
          - 'sure'
      - `label: string`
        - Label
- `set(xw, pw, xs, response, name = 'default', label = '')`
  - Create or change the value of the identified choice
  - Parameters
    - `xw: number`
      - Value of gamble win
    - `pw: number`
      - Probability of gamble win
    - `xs: number`
      - Value of sure thing
    - `response: string`
      - Chosen response
      - Options
        - 'gamble'
        - 'sure'
    - `name: string = 'default'`
      - Identifier for choice
    - `label: string = ''`
      - Label for choice

##### Example

```html
<decision-space updateable surface="true" point="all" alpha="0.75" lambda="1.2" gamma="0.8" win="20" loss="0" probability="0.5" sure="10"></cpt-space>
```

#### `DecisionTask` / `<decision-task>`

Displays stimuli for gambling decision task

When run, a block of trials is presented. Before each trial is an inter-trial interval (ITI). Each
trial then consists of a stimulus during which a participant can respond. The stimulus consists of
two options, each of which is represented as a pie chart. The proportion of the pie represents the
probability, and a number in the pie piece represents the value. The choice is always between a
gamble with a winning value and a losing value, and a sure thing. The task can be paused and then
resumed, and it can also be reset and run again. 

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

- `decision-block-start`
  - Indicates the beginning of a block of trials
- `decision-block-end`
  - Indicates the completion of a block of trials
  - `detail` for `decision-block-start` and `decision-block-end`
    - `trials: number`
      - Number of trials in the block
- `decision-trial-start`
  - Indicates the beginning of a trial (iti is over and stimulus is about to start)
- `decision-trial-end`
  - Indicates the end of a trial (stimulus is over and iti is about to start)
  - `detail` for `decision-trial-start` and `decision-trial-end`
    - `trials: number` 
      - Number of trials in the block
    - `duration: number`
      - Duration of stimulus in milliseconds
    - `iti: number`
      - Duration of inter-trial interval in milliseconds
    - `trial: number`
      - Count of trial in block (one-based)
    - `xl: number`
      - Losing value in gamble
    - `xw: number`
      - Winning value in gamble
    - `pw: number`
      - Probability of winning gamble
    - `xs: number`
      - Value of sure thing
    - `better: string`
      - Which option is better according to expected value
      - Options
        - `'gamble'`
        - `'sure'`
        - `'equal'`
    - `gamblePayoff: number`
      - Payoff for choosing the gamble (based on random outcome)
    - `surePayoff: number`
      - Payoff for choosing the sure thing

##### Example

```html
<decision-task duration="3000" iti="500" trials="10" running></decision-task>
```

### Equations

Interactive equations for CPT

The equations can either be static and display the variable names, be static and display names and
values or be interactive with names and editable values, in which case only the values on the right
side of the equals sign are editable.

**Note:** The layout for these equations leaves something to be desired, especially on smaller
screens. Ideally a proper math renderer would be used, but I haven't found one that takes kindly to
insertion of the custom elements needed for live editing.

#### `CPTEquationPG2W` / `<cpt-equation-pg2w>`

Subjective decision weight from objective probability and sensitivity

##### Attributes

- `numeric: boolean = false`
  - Show values instead of just the names of variables
- `interactive: boolean = false`
  - Allow editing of numeric values in the equation
- `p: number = 0.75`
  - Probability
- `g: number = 0.5`
  - Parameter γ (probability distortion)

##### Properties

- `w: number`
  - Decision weight

##### Custom Events

- `cpt-equation-pg2w-change`
  - Indicates that the values in the equation have changed
  - `detail`
    - `p: number`
      - New value of probability
    - `g: number`
      - New value of parameter γ (probability distortion)
    - `w: number`
      - New value of decision weight

##### Example

```html
<cpt-equation-pg2w numeric interactive p="0.75" g="0.8"></cpt-equation-pg2w>
```

#### `CPTEquationXAL2V` / `<cpt-equation-xal2v>`

Subjective value from objective value, marginal utility, and loss aversion

##### Attributes

- `numeric: boolean = false`
  - Show values instead of just the names of variables
- `interactive: boolean = false`
  - Allow editing of numeric values in the equation
- `x: number = 10`
  - Objective value
- `a: number = 0.5`
  - Parameter α (diminishing marginal utility)
- `l: number = 2`
  - Parameter λ (loss aversion)

##### Properties

- `v: number`
  - Subjective value

##### Custom Events

- `cpt-equation-xal2v-change`
  - Indicates that the values in the equation have changed
  - `detail`
    - `x: number`
      - New value of objective value
    - `a: number`
      - New value of parameter α (diminishing marginal utility)
    - `l: number`
      - New value of parameter λ (loss aversion)
    - `v: number`
      - New value of subjective value

##### Example

```html
<cpt-equation-xal2v numeric interactive x="20" a="0.75" l="2.5"></cpt-equation-xal2v>
```

#### `CPTEquationVW2U` / `<cpt-equation-vw2u>`

Subjective utility from subjective value and subjective decision weight

##### Attributes

- `numeric: boolean = false`
  - Show values instead of just the names of variables
- `interactive: boolean = false`
  - Allow editing of numeric values in the equation
- `v: Array = [10, 0]`
  - Subjective values
  - Expressed in HTML as a space-separated list
- `w: Array = [0.75, 0.25]`
  - Decision weights
  - Expressed in HTML as a space-separated list
- `n: number = 2`
  - Number of subjective value/decision weight pairs

##### Properties

- `u: number`
  - Subjective utility

##### Custom Events

- `cpt-equation-vw2u-change`
  - Indicates that the values in the equation have changed
  - `detail`
    - `v: Array`
      - New values of subjective values
    - `w: Array`
      - New values of decision weights
    - `n: number`
      - Number of subjective value/decision weight pairs
    - `u: number`
      - New value of subjective utility

##### Example

```html
<cpt-equation-vw2u numeric interactive v="20 0" w="0.25 0.75" n="2"></cpt-equation-vw2u>
```

#### `CPTEquation`

Base class for all interactive CPT equations

To define a new equation:

```javascript
export default class CPTEquationSomething extends CPTEquation {
  ...
}
```

`CPTEquation` extends `ProspectableElement` extends `DecidablesElement` extends `LitElement`

### Examples

Full examples built from multiple components

#### `CPTExampleHuman` / `<prospectable-example-human>`

User runs task, and results are fit and displayed in real-time using CPT

Used to build examples where the user is performing the gambling decision task. Can include
controls, the task itself, response buttons with feedback and payoffs, the value function, the
probability function, a 3D visualization of the decisions in the block with the decision surface,
and trace plots and histograms for the parameters in the model fit. The value function and
probability function should not be interactive, because their rendering is determined by the user's
task performance.

##### Slots

- *unnamed*
  - Place relevant `prospectable-elements` components here
  - Wired elements
    - `<cpt-fit>`
      - Fits the user's responses to CPT using a Bayesian model running in a Web Worker
    - `<cpt-probability>`
      - Displays the probability function based on the current model parameters
    - `<cpt-value>`
      - Displays the value function based on the current model parameters
    - `<prospectable-control>`
      - Allows user to adjust parameters and control the task
    - `<decision-response>`
      - Allows user to make responses and see feedback and payoffs
    - `<decision-space>`
      - Displays all completed trials in block in decision space with the model's decision surface
    - `<decision-task>`
      - Displays the task

##### Example

```html
<cpt-example-human>
  <cpt-fit></cpt-fit>
  <cpt-probability></cpt-probability>
  <cpt-value></cpt-value>
  <prospectable-control trials="10" run pause reset></prospectable-control>
  <decision-response interactive trial feedback="outcome" payoff="both"></decision-response>
  <decision-space point="rest" alpha="1" lambda="1" gamma="1"></decision-space>
  <decision-task trials="10"></decision-task>
</cpt-example-human>
```

#### `CPTExampleInteractive`

Explore how decision and CPT model parameters relate

Used to build examples where the user can explore the relationship between a choice and model
parameters. Can include the choice, a visual rendering of the comparative utility calculation, the
value function with the current choice, the probability function with the current choice, a 3D
visualization of the choice in decision space with the decision surface, and a 3D visualization of
the choice in CPT model space with the decision surface. All components can be interactive (except
the 3D visualizations which don't support it).

##### Attributes

**Note:** Since many attributes are set on the example, they don't need to be set on the individual
components, as they will be propagated and kept in sync.

- `alpha: number = 0.8`
  - Parameter α (diminishing marginal utility)
- `lambda: number = 1.2`
  - Parameter λ (loss aversion)
- `gamma: number = 0.8`
  - Parameter γ (probability distortion)
- `loss: number = 0`
  - Losing value in gamble 
- `win: number = 20`
  - Winning value in gamble 
- `probability: number = 0.5`
  - Probability of *winning* 
- `sure: number = 10`
  - Sure value

##### Slots

- *unnamed*
  - Place relevant `prospectable-elements` components here
  - Wired elements
    - `<cpt-calculation>`
      - Display and change the utility calculations
    - `<cpt-probability>`
      - Display and change the probability function and gamble decision weight
    - `<cpt-space>`
      - Display the space of possible parameter values with the current values and decision surface
        current decision
    - `<cpt-value>`
      - Display and change the value function and subjective values of gamble win and sure thing
    - `<decision-choice>`
      - Display and change the choice between a gamble and a sure thing
    - `<decision-space>`
      - Display the space of possible decisions with the current decision and the decision surface

##### Example

```html
<cpt-example-interactive probability="0.75" win="20" loss="0" sure="10" alpha="0.9" lambda="2" gamma="0.75">
  <decision-choice interactive></decision-choice>
  <cpt-probability interactive></cpt-probability>
  <cpt-value interactive></cpt-value>
  <cpt-calculation numeric interactive></cpt-calculation>
  <cpt-space updateable></cpt-space>
  <decision-space updateable></decision-space>
</cpt-example-interactive>
```

#### `CPTExampleModel` / `<cpt-example-model>`

Model simulates task based on CPT parameter values

Used to build examples where the model is simulated to perform the gambling decision task. Can
include controls, the task itself, response buttons with feedback and payoffs, a visual rendering of
the comparative utility calculation, the value function with the current choice, the probability
function with the current choice, and a 3D visualization of the decisions in the block with the
decision surface. The value and probability functions should be interactive, so the user can modify
the model. The responses and the 3D visualization should not be interactive, because their values
are received from the model's task performance.

##### Attributes

**Note:** Since model parameter attributes are set on the example, they don't need to be set on the
individual components, as they will be propagated and kept in sync.

- `alpha: number = 0.8`
  - Parameter α (diminishing marginal utility)
- `lambda: number = 1.2`
  - Parameter λ (loss aversion)
- `gamma: number = 0.8`
  - Parameter γ (probability distortion)

##### Slots

- *unnamed*
  - Place relevant `prospectable-elements` components here
  - Wired elements
    - `<cpt-calculation>`
      - Display the utility calculations
    - `<cpt-probability>`
      - Display and change the probability function
    - `<cpt-value>`
      - Display and change the value function
    - `<prospectable-control>`
      - Allows user to adjust parameters and control the task
    - `<decision-response>`
      - Allows user to view model responses, feedback, and payoffs
    - `<decision-space>`
      - Displays all completed trials in block in decision space with the model's decision surface
    - `<decision-task>`
      - Displays the task

##### Example

```html
<cpt-example-model alpha="0.9" lambda="2" gamma="0.75">
  <prospectable-control trials="10" run pause reset></prospectable-control>
  <decision-task trials="10"></decision-task>
  <cpt-probability interactive></cpt-probability>
  <cpt-value interactive></cpt-value>
  <decision-response trial feedback="outcome" payoff="both"></decision-response>
  <decision-space updateable point="rest" alpha="1" lambda="1" gamma="1"></decision-space>
</cpt-example-model>
```

#### `CPTExample`

Base class for all CPT examples

To define a new example:

```javascript
export default class CPTExampleSomething extends CPTExample {
  ...
}
```

`CPTExample` extends `CPTElement` extends `DecidablesElement` extends `LitElement`

### Base class

#### `CPTElement`

Base class for all *prospectable* web components

To define a new element:

```javascript
export default class CPTElementSomething extends CPTElement {
  ...
}
```

`CPTElement` extends `DecidablesElement` extends `LitElement`

## Development

### Features/Bugs/Notes

- Add to CPTMath
  - Luce choice rule
  - utility from x, p, and parameters
- Make sure to use corrected formula!
  v(xw) * w(xp) + v(xl) * w(1 - xp) ?><? v(xs)
  (Nilsson, Rieskamp, & Wagenmakers, 2011)
  VERSUS
  v(xw) * w(xp) + v(xl) * 1 - w(xp) ?><? v(xs)
  (Nilsson, Rieskamp, & Wagenmakers, 2020)
  This follows (Tversky & Kahneman, 1992)!

### Package Scripts

- `yarn gulp preparePlotly`
  - Injects Plotly styles into `src/components/plotly-style.auto.js` for inclusion in components
- `yarn lint`
  - Lints scripts in `src/`
- `yarn test`
  - Runs all tests and reports coverage in `test/coverage/`
- `yarn test:watch`
  - Runs all tests in watch mode and reports coverage in `test/coverage/`
- `yarn test:file <filename>`
  - Runs tests for a single file and reports coverage in `test/coverage/`
- `yarn build`
  - Builds browser-compatible optimized bundle from `src/` to `lib/`

### File Organization

- `prospectable-elements/`
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

## [License](https://github.com/decidables/decidables/blob/main/LICENSE.md)

The content of this project is licensed under [Creative Commons Attribution-ShareAlike 4.0
International License (CC-BY-SA-4.0)](https://creativecommons.org/licenses/by-sa/4.0/) and the
source code of this project is licensed under [GNU General Public License v3.0 or any later version
(GPL-3.0-or-later)](https://www.gnu.org/licenses/gpl-3.0.html).
