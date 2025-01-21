<!--lint ignore first-heading-level  maximum-heading-length-->

# **`@decidables/accumulable-elements`**<br>Web Components for Visualizing the Diffusion Decision Model in [<b><i>a</i>ccumulable</b>](https://decidables.github.io/accumulable)

[![npm version](https://img.shields.io/npm/v/@decidables/accumulable-elements?logo=npm)](https://www.npmjs.com/package/@decidables/accumulable-elements)
[![license](https://img.shields.io/npm/l/@decidables/accumulable-elements?color=informational)](https://github.com/decidables/decidables/blob/main/LICENSE.md)

The web components used to visualize the Diffusion Decision Model in
[<b><i>a</i>ccumulable</b>](https://decidables.github.io/accumulable). There is an emphasis
on direct manipulation and consistent use of color. SVG is used extensively to provide clean
scalable diagrams.

## Usage

### Install

```shell
yarn add @decidables/accumulable-elements
```

### Use

```javascript
import '@decidables/accumulable-elements';
```

A bare import is used to register the elements in the custom registry, so they are then available
for use in HTML.

## Contents

### Components

Building blocks for interactive visualizations of DDM

#### `AccumulableControl` / `<accumulable-control>`

Control panel for running demos

A configurable set of controls for user manipulation of examples of the diffusion decision model.
Controls can be provided for the number of trials, resampling trials, the duration of trials, the
coherence of the dots moving together in the stimulus, the coloring used in the results table, and
for running, pausing, or resetting a block of trials.

##### Attributes

- `trials: number = undefined`
  - Show a slider for setting the number of trials, initialized to the value provided
  - Options
    - `1` to `100` in steps of `1`
- `resample: boolean = false`
  - Show a button to resample the model
- `duration: number = undefined`
  - Show a slider for setting the duration of the stimulus, wait, and inter-trial interval on each
    trial, initialized to the value provided in milliseconds
  - Options
    - `10` to `2000` in steps of `10`
- `coherence: number = undefined`
  - Show a slider for setting the proportion of coherent dots in the visual stimulus
  - Options
    - `0` to `1` in steps of `0.01`
- `color: string = undefined`
  - Show a set of options to select how to color the cells in the results table
  - Options
    - `'none'`
      - No use of color
    - `'measure'`
      - Color based on measure (*count/accuracy*, *mean RT*, *standard deviation RT*)
    - `'outcome'`
      - Color based on outcome (*correct*, *error*, *overall*)
    - `'all'`
      - Color based on measure and outcome
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

- `accumulable-control-trials`
  - Indicates the number of trials slider has been adjusted
  - `detail`
    - `trials: number`
      - The new number of trials
- `accumulable-control-resample`
  - Indicates the resample button has been pushed
- `accumulable-control-duration`
  - Indicates the duration of trials slider has been adjusted
  - `detail`
    - `duration: number`
      - The new duration
- `accumulable-control-coherence`
  - Indicates the coherence of stimulus dots slider has been adjusted
  - `detail`
    - `coherence: number`
      - The new coherence
- `accumulable-control-color`
  - Indicates the color selection for the results table has been toggled
  - `detail`
    - `color: string`
      - The new color scheme
- `accumulable-control-run`
  - Indicates the run button has been pushed
- `accumulable-control-pause`
  - Indicates the pause button has been pushed
- `accumulable-control-reset`
  - Indicates the reset button has been pushed

##### Example

```html
<accumulable-control trials="15" resample duration="1500" coherence="0.2" color="outcome" run pause reset></accumulable-control>
```

#### `AccumulableResponse` / `<accumulable-response>`

Response buttons, feedback, and payoffs for two-alternative forced choice tasks

This element provides 'left' and 'right' response buttons. It can also display a running count of
the trials, display feedback on accuracy, and display the current trial and total payoff.

##### Attributes

- `interactive: boolean = false`
  - Allow user to respond, instead of just displaying simulated model responses
- `feedback: boolean = false`
  - Whether to display feedback
- `trial: boolean = false`
  - Display the running count of trials, i.e. 'Trial: 2 of 10'
- `payoff: string = 'none'`
  - What payoff information to display
  - Options
    - `'none'`
      - No payoff information displayed
    - `'trial'`
      - Only display payoff for the current trial
    - `'total'`
      - Display payoff for the current trial and display the total payoff for the block
- `correct-payoff: number = 0`
  - Value of payoff for a correct response
- `error-payoff: number = 0`
  - Value of payoff for an error response
- `no-response-payoff: number = 0`
  - Value of payoff for no response

##### Methods

- `start(signal, trial)`
  - Indicates that a trial has started, and its time to wait for a response
  - Parameters
    - `signal: string`
      - Whether this is a movement `'left'` or `'right'` trial
    - `trial: number`
      - The count of the trial within the block
- `stop()`
  - Indicates that the trial is over and it is time to display any requested feedback
  - **Note:** If no response has been made yet, the trial is recorded as having no response
- `left()`
  - Emulate a 'left' response  
- `right()`
  - Emulate an 'right' response  
- `responded(response)`
  - Emulate a response
  - Parameters
    - `response: string`
      - Whether to emulate a `'left'` or `'right'` response
- `reset()`
  - Reset to the state at the start of a block of trials

##### Custom Events

- `accumulable-response`
  - Indicates that a response has been made on this trial 
  - `detail`
    - `trial: number`
      - The count of this trial in the block
    - `rt: number`
      - The reaction time in milliseconds
    - `signal: string`
      - Whether the signal was actually `'left'` or `'right'`
    - `response: string`
      - Whether the response was `'left'` or `'right'`
    - `outcome: string`
      - The outcome of the trial as an `'error'` or `'correct'`
    - `payoff: number`
      - The payoff for this trial
    - `correctCount: number`
      - Number of correct trials
    - `errorCount: number`
      - Number of error trials
    - `nrCount: number`
      - Number of no-response trials
    - `accuracy: number`
      - Proportion of correct trials
    - `meanRT: number`
      - Overall mean reaction time
    - `correctMeanRT: number`
      - Mean reaction time on correct trials
    - `errorMeanRT: number`
      - Mean reaction time on error trials
    - `sdRT: number`
      - Overall standard deviation of reaction time
    - `correctSDRT: number`
      - Standard deviation of reaction time on correct trials
    - `errorSDRT: number`
      - Standard deviation of reaction time on error trials
    - `totalPayoff: number`
      - Total payoff for the block

##### Example

```html
<accumulable-response interactive feedback trial payoff="total" correct-payoff="100" error-payoff="-100" no-response-payoff="0"></accumulable-response>
```

#### `AccumulableTable` / `<accumulable-table>`

Table of accuracy and response time outcomes

A results table for diffusion decision model tasks. The results are presented in a three by three
table organized by measure (count/accuracy, mean RT, and SD RT) and outcome ('correct', 'error', and
overall).

##### Attributes

- `interactive: boolean = false`
  - **NOT IMPLEMENTED** Allow user to change values in the table
- `numeric: boolean = false`
  - Show numeric values instead of just labelling the cells
- `summary: boolean = false`
  - Should the overall statistics be shown
- `color: string = 'outcome'`
  - How to color the cells
  - Options
    - `'none'`
      - No use of color
    - `'measure'`
      - Color based on measure (*count/accuracy*, *mean RT*, *standard deviation RT*)
    - `'outcome'`
      - **NOT IMPLEMENTED** Color based on outcome (*correct*, *error*, *overall*)
    - `'all'`
      - **NOT IMPLEMENTED** Color based on measure and outcome
- `correctCount: number = undefined`
  - Number of correct trials
- `errorCount: number = undefined`
  - Number of error trials
- `nrCount: number = undefined`
  - Number of no-response trials
- `accuracy: number = undefined`
  - Proportion of correct trials
- `correctMeanRT: number = undefined`
  - Mean reaction time on correct trials
- `errorMeanRT: number = undefined`
  - Mean reaction time on error trials
- `meanRT: number = undefined`
  - Overall mean reaction time
- `correctSDRT: number = undefined`
  - Standard deviation of reaction time on correct trials
- `errorSDRT: number = undefined`
  - Standard deviation of reaction time on error trials
- `sdRT: number = undefined`
  - Overall standard deviation of reaction time
- `payoff: boolean = false`
  - Whether to display payoffs
- `correct-payoff: number = undefined`
  - Payoff for correct trials
- `error-payoff: number = undefined`
  - Payoff for error trials
- `no-response-payoff: number = undefined`
  - Payoff for no-response trials

##### Custom Events

- `accumulable-table-change`
  - One or more values in the table have changed
  - `detail`
    - `correctCount: number`
      - Number of correct trials
    - `errorCount: number`
      - Number of error trials
    - `nrCount: number`
      - Number of no-response trials
    - `accuracy: number`
      - Proportion of correct trials
    - `meanRT: number`
      - Overall mean reaction time
    - `correctMeanRT: number`
      - Mean reaction time on correct trials
    - `errorMeanRT: number`
      - Mean reaction time on error trials
    - `sdRT: number`
      - Overall standard deviation of reaction time
    - `correctSDRT: number`
      - Standard deviation of reaction time on correct trials
    - `errorSDRT: number`
      - Standard deviation of reaction time on error trials

##### Example

```html
<accumulable-table numeric summary color="outcome" correct-count="7" error-count="3" nr-count="0" accuracy="0.7" correct-mean-rt="600" error-mean-rt="300" mean-rt="510" correct-sd-rt="200" error-sd-rt="100" sd-rt="200"></accumulable-table>
```

#### `DDMFit` / `<ddm-fit>`

Fits DDM parameters to empirical data using a model running in a WebWorker

The component displays the observed data, the fit parameters, and predicted data from those
parameters. Currently, the data is fit with the EZ-diffusion model (Wagenmakers et al., 2007). The
plan is to eventually fit using the EZ2 model (Grasman et al., 2009), but this is currently **NOT
IMPLEMENTED**.

**Note:** The current EZ fit procedure assumes *z* = 0.5

- Data
  - **accuracy**: proportion of trials with correct responses
  - **sdRT**: overall standard deviation of the reaction time (in milliseconds)
  - **mRT**: overall mean reaction time (in milliseconds)
  - **s**: diffusion standard deviation (typically set to the default value of `DDMMath.s`)
- Parameters
  - **a**: boundary separation (distance, from 0 to infinity)
  - **z**: starting point (proportion, from 0 to 1)
  - **v**: drift rate (distance per second, from 0 to infinity)
  - **t0**: non-decision time (milliseconds, from 0 to infinity)

##### Methods

- `fit()`
  - Initiates a new fit, or queues one if the model is already fitting
- `clear()`
  - Removes all observed data, and initiates a data-free initial fit
- `set(data)`
  - Sets the current observed data
  - Parameters
    - `a: number`
      - Boundary separation
    - `z: number`
      - Starting point
    - `v: number`
      - Drift rate
    - `t0: number`
      - Non-decision time

##### Custom Events

- `ddm-fit-update`
  - Indicates that the fit has completed
  - `detail`
    - `a: number`
      - New value for boundary separation
    - `z: number`
      - New value for starting point
    - `v: number`
      - New value for drift rate
    - `t0: number`
      - New value for non-decision time

##### Example

```html
<ddm-fit></ddm-fit>
```

#### `DDMModel` / `<ddm-model>`

Interactive visualization of DDM in terms of a drift-diffusion process

Displays a drift diffusion process with boundaries, a potentially biased starting point,
non-decision time, and a drift rate - all of which can be directly manipulated. Shows the RT
distributions for correct and error trials and the proportion of correct trials. Can also show
simulated individual paths, along with their resulting RTs, and the resulting sampled accuracy. Note
that simulated paths will update as the parameters are manipulated. Can also show the mean and SD
for each distribution and for the sampled trials.

The paths can be animated when added individually to the visualization.

##### Attributes

- `interactive: boolean = false`
  - Allow direct manipulation of boundaries, starting point, non-decision time, and drift rate
- `measures: boolean = false`
  - Whether to display line and text annotations for each parameter
- `means: boolean = false`
  - Whether to display means for theoretical distributions and samples
- `sds: boolean = false`
  - Whether to display standard deviations for theoretical distributions and samples
- `human: boolean = false`
  - Whether results are passed in from human performance, or need to be generated from the model
    parameters
- `trials: number = 10`
  - The number of sampled trials to display
- `seed: number = <random sample from uniform distribution from 0 to 1>`
  - The seed for random number generation, to ensure stable samples when changing parameters
- `a: number = 1.2`
  - Boundary separation parameter
- `z: number = 0.35`
  - Starting point parameter
- `v: number = 1.5`
  - Drift rate parameter
- `t0: number = 150`
  - Non-decision time parameter

##### Methods

- `clear()`
  - Remove all trial-by-trial data
- `trial(trial)`
  - Add a trial to the sample
  - Parameters
    - `index: number`
      - Numerical count of the trial in the block
    - `seed: string`
      - The random seed used to generate the path for this trial
    - `path: array of {t: number, e: number}`
      - The sampled path as an array of time & evidence pairs
    - `rt: number`
      - The reaction time in milliseconds
    - `outcome: string`
      - The outcome of the trial, either 'correct', 'error', or 'nr' for no response
    - `animate: boolean`
      - Whether or not this trial should be animated
- `pauseTrial()`
  - Pause the animation of trials
- `resumeTrial()`
  - Resume the animation of trials
- `resample()`
  - Generate a new base seed for all samples

##### Custom Events

- `ddm-model-output`
  - Indicates that the model and/or sampled data have changed
  - `detail`
    - `data: object`
      - `trials: array of trial objects`
        - `index: number`
          - Numerical count of the trial in the block
        - `seed: string`
          - The random seed used to generate the path for this trial
        - `path: array of {t: number, e: number}`
          - The sampled path as an array of time & evidence pairs
        - `rt: number`
          - The reaction time in milliseconds
        - `outcome: string`
          - The outcome of the trial, either 'correct', 'error', or 'nr' for no response
        - `animate: boolean`
          - Whether or not this trial should be animated
      - `correctCount: number`
        - Number of correct trials
      - `errorCount: number`
        - Number of error trials
      - `nrCount: number`
        - Number of no-response trials
      - `accuracy: number`
        - Proportion of correct trials
      - `meanRT: number`
        - Overall mean reaction time
      - `correctMeanRT: number`
        - Mean reaction time on correct trials
      - `errorMeanRT: number`
        - Mean reaction time on error trials
      - `sdRT: number`
        - Overall standard deviation of reaction time
      - `correctSDRT: number`
        - Standard deviation of reaction time on correct trials
      - `errorSDRT: number`
        - Standard deviation of reaction time on error trials
    - `model: object`
      - `accuracy: number`
        - Proportion of correct trials
      - `correctMeanRT: number`
        - Mean reaction time on correct trials
      - `errorMeanRT: number`
        - Mean reaction time on error trials
      - `correctSDRT: number`
        - Standard deviation of reaction time on correct trials
      - `errorSDRT: number`
        - Standard deviation of reaction time on error trials
- `ddm-model-a`
  - Indicates an update to boundary separation
  - `detail`
    - `a: number`
      - New value for boundary separation
- `ddm-model-z`
  - Indicates an update to starting point
  - `detail`
    - `z: number`
      - New value for starting point
- `ddm-model-v`
  - Indicates an update to drift rate
  - `detail`
    - `v: number`
      - New value for drift rate
- `ddm-model-t0`
  - Indicates an update to non-decision time
  - `detail`
    - `t0: number`
      - New value for non-decision time
- `accumulable-response`
  - Indicates that the model has generated a response 
  - `detail`
    - `outcome: string`
      - The outcome of the trial as `'correct'`, `'error'`, or `'nr'` for no response
    - `data: object`
      - `trials: array of trial objects`
        - `index: number`
          - Numerical count of the trial in the block
        - `seed: string`
          - The random seed used to generate the path for this trial
        - `path: array of {t: number, e: number}`
          - The sampled path as an array of time & evidence pairs
        - `rt: number`
          - The reaction time in milliseconds
        - `outcome: string`
          - The outcome of the trial, either 'correct', 'error', or 'nr' for no response
        - `animate: boolean`
          - Whether or not this trial should be animated
      - `correctCount: number`
        - Number of correct trials
      - `errorCount: number`
        - Number of error trials
      - `nrCount: number`
        - Number of no-response trials
      - `accuracy: number`
        - Proportion of correct trials
      - `meanRT: number`
        - Overall mean reaction time
      - `correctMeanRT: number`
        - Mean reaction time on correct trials
      - `errorMeanRT: number`
        - Mean reaction time on error trials
      - `sdRT: number`
        - Overall standard deviation of reaction time
      - `correctSDRT: number`
        - Standard deviation of reaction time on correct trials
      - `errorSDRT: number`
        - Standard deviation of reaction time on error trials
    - `model: object`
      - `accuracy: number`
        - Proportion of correct trials
      - `correctMeanRT: number`
        - Mean reaction time on correct trials
      - `errorMeanRT: number`
        - Mean reaction time on error trials
      - `correctSDRT: number`
        - Standard deviation of reaction time on correct trials
      - `errorSDRT: number`
        - Standard deviation of reaction time on error trials

##### Example

```html
<ddm-model interactive measures means sds seed="0.123456789" trials="10" boundary-separation="1.2" starting-point="0.35" drift-rate="1.5" nondecision-time="150"></ddm-model>
```

#### `DDMParameters` / `<ddm-parameters>`

Control panel for DDM model parameters

A configurable set of controls for user manipulation of DDM model parameters. Controls can be
provided for the boundary separation, starting pointm, drift rate, and non-decision time.

##### Attributes

- `a: number = undefined`
  - Show a slider for setting the boundary separation, initialized to the value provided
  - Options
    - `0.01` to `2` in steps of `0.01`
- `z: number = undefined`
  - Show a slider for setting the starting point, initialized to the value provided
  - Options
    - `0.01` to `0.99` in steps of `0.01`
- `z: number = undefined`
  - Show a slider for setting the drift rate, initialized to the value provided
  - Options
    - `0.01` to `5` in steps of `0.01`
- `t0: number = undefined`
  - Show a slider for setting the non-decision time, initialized to the value provided
  - Options
    - `0` to `500` in steps of `1`

##### Methods

##### Custom Events

- `ddm-parameters-a`
  - Indicates an update to boundary separation
  - `detail`
    - `a: number`
      - New value for boundary separation
- `ddm-parameters-z`
  - Indicates an update to starting point
  - `detail`
    - `z: number`
      - New value for starting point
- `ddm-parameters-v`
  - Indicates an update to drift rate
  - `detail`
    - `v: number`
      - New value for drift rate
- `ddm-parameters-t0`
  - Indicates an update to non-decision time
  - `detail`
    - `t0: number`
      - New value for non-decision time

##### Example

```html
<ddm-parameters interactive boundary-separation="1.6" starting-point="0.75" drift-rate="1.25" nondecision-time="300"></ddm-parameters>
```

#### `RDK2AFCTask` / `<rdt-2afc-task>`

Displays stimuli for random dot kinematogram two-alternative forced choice task

When run, a block of trials is presented. Before each trial is an inter-trial interval (ITI). Each
trial then consists of a stimulus followed by a period of waiting for a response. The stimulus
consists of a circle with a collection of small dots moving about. A subset of the dots move
coherently in the same direction, either to the *left* or the *right*. The task can be paused and
then resumed, and it can also be reset and run again. 

##### Attributes

- `coherence: number = 0.5`
  - Proportion of dots moving coherently
- `count: number = 100`
  - Number of dots
- `probability: number = 0.5`
  - Probability of leftward (as opposed to rightward) movement
- `duration: number = 2000`
  - Duration of stimulus in milliseconds
- `wait: number = 2000`
  - Duration of wait period for response in milliseconds
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

- `rdk-block-start`
  - Indicates the beginning of a block of trials
- `rdk-block-end`
  - Indicates the completion of a block of trials
  - `detail` for `rdk-block-start` and `rdk-block-end`
    - `trials: number`
      - Number of trials in the block
- `rdk-trial-start`
  - Indicates the beginning of a trial (iti is over and stimulus is about to start)
- `rdk-trial-middle`
  - Indicates the middle of a trial (stimulus is over and the wait is about to start)
- `rdk-trial-end`
  - Indicates the end of a trial (wait is over and iti is about to start)
  - `detail` for `rdk-trial-start`, `rdk-trial-middle`, and `rdk-trial-end`
    - `trials: number` 
      - Number of trials in the block
    - `duration: number`
      - Duration of stimulus in milliseconds
    - `wait: number`
      - Duration of wait period in milliseconds
    - `iti: number`
      - Duration of inter-trial interval in milliseconds
    - `trial: number`
      - Count of trial in block (one-based)
    - `signal: string`
      - Whether the signal is `present` or `absent` in this trial

##### Example

```html
<rdk-2afc-task trials="10" coherence="0.5" count="100" probability="0.5" duration="2000" wait="2000" iti="2000" running></rdk-2afc-task>
```

### Equations

Interactive equations for DDM

The equations can either be static and display the variable names, be static and display names and
values or be interactive with names and editable values, in which case only the values on the right
side of the equals sign are editable.

**Note:** The layout for these equations leaves something to be desired, especially on smaller
screens. Ideally a proper math renderer would be used, but I'm still working on how to use MathML in
conjunction with the custom elements needed for live editing.

#### DDMEquationAZV2PC / 'ddm-equation-azv2pc>`

Probability correct (accuracy) from boundary separation, starting point, and drift rate

##### Attributes

- `numeric: boolean = false`
  - Show values instead of just the names of variables
- `interactive: boolean = false`
  - Allow editing of numeric values in the equation
- `boundary-separation: number = 1.5`
  - Boundary separation, in units of evidence, *a*
- `starting-point: number = 0.5`
  - Starting point, as a proportion of boundary separation, *z*
- `drift-rate: number = 0.1`
  - Drift rate, in units of evidence per second, *v*

##### Properties

- `accuracy: number`
  - Proportion correct trials

##### Custom Events

- `sdt-equation-azv2pc-change`
  - Indicates that the values in the equation have changed
  - `detail`
    - `a: number`
      - New value of boundary separation
    - `z: number`
      - New value of staring point
    - `v: number`
      - New value of drift rate
    - `accuracy: number`
      - New value of proportion correct

##### Example

```html
<ddm-equation-azv2pc numeric interactive boundary-separation="1.3" starting-point="0.5" drift-rate="1.2"></ddm-equation-azv2pc>
```

#### DDMEquationAZVT02M / 'ddm-equation-azvt02m>`

Overall mean reaction time from boundary separation, starting point, drift rate, and non-decision
time

##### Attributes

- `numeric: boolean = false`
  - Show values instead of just the names of variables
- `interactive: boolean = false`
  - Allow editing of numeric values in the equation
- `boundary-separation: number = 1.5`
  - Boundary separation, in units of evidence, *a*
- `starting-point: number = 0.5`
  - Starting point, as a proportion of boundary separation, *z*
- `drift-rate: number = 0.1`
  - Drift rate, in units of evidence per second, *v*
- `non-decision-time: number = 200`
  - Non-decision time, in milliseconds, *t0*

##### Properties

- `meanRT: number`
  - Overall mean reaction time in milliseconds

##### Custom Events

- `sdt-equation-azvt02m-change`
  - Indicates that the values in the equation have changed
  - `detail`
    - `a: number`
      - New value of boundary separation
    - `z: number`
      - New value of staring point
    - `v: number`
      - New value of drift rate
    - `t0: number`
      - New value of non-decision time
    - `meanRT: number`
      - New value of overall mean reaction time

##### Example

```html
<ddm-equation-azvt02m numeric interactive boundary-separation="1.3" starting-point="0.5" drift-rate="1.2" nondecision-time="200" class=""></ddm-equation-azvt02m>
```

#### `DDMEquation`

Base class for all interactive DDM equations

To define a new equation:

```javascript
export default class DDMEquationSomething extends DDMEquation {
  ...
}
```

`DDMEquation` extends `AccumulableElement` extends `DecidablesElement` extends `LitElement`

### Examples

Full examples built from multiple components

#### `DDMExampleHuman` / `<ddm-example-human>`

User runs two-alternative forced choice task and results are fit and displayed in real-time using
DDM

Used to build examples where the user is performing the random-dot kinematogram task. Can include
controls, the task itself, response buttons with feedback and payoffs, a table of results, ROC
space, and a visual rendering of signal detection theory. The table of results, ROC space, and the
SDT model should not be interactive, because their values are received from the user's task
performance.

##### Slots

- *unnamed*
  - Place relevant `accumulable-elements` components here
  - Wired elements
    - `<accumulable-control>`
      - Allows user to adjust parameters and control the task
    - `<rdk-2afc-task>`
      - Displays the task
    - `<accumulable-response>`
      - Allows user to make responses and see feedback and payoffs
    - `<accumulable-table>`
      - Displays numerical results for the current block of trials
    - `<ddm-parameters>`
      - Displays the model parameters for current fit
    - `<ddm-model>`
      - Displays a visual rendering of model parameters, data, and model predictions 
    - `<ddm-fit>`
      - Fits the user's responses to DDM using the EZ model in a Web Worker

##### Example

```html
<ddm-example-human>
  <accumulable-control trials="10" duration="1000" coherence="0.4" color="outcome" run pause reset></accumulable-control>
  <rdk-2afc-task trials="10"></rdk-2afc-task>
  <accumulable-response interactive trial feedback></accumulable-response>
  <accumulable-table numeric summary color="outcome"></accumulable-table>
  <ddm-parameters></ddm-parameters>
  <ddm-model human measures means sds></ddm-model>
  <ddm-fit></ddm-fit>
</ddm-example-human>
```

#### `DDMExampleInteractive` / `<ddm-example-interactive>`

Explore how RT mean, RT standard deviation, and accuracy relate to DDM model parameters

Used to build examples where the user can explore the relationship between RT and accuracy and model
parameters. All components can be interactive.

##### Attributes

**Note:** Since many attributes are set on the example, they don't need to be set on the individual
components, as they will be propagated and kept in sync.

- `trials: number = 10`
  - Number of sampled trials to display
- `boundary-separation: number = 1.5`
  - Boundary separation, in units of evidence, *a*
- `starting-point: number = 0.5`
  - Starting point, as a proportion of boundary separation, *z*
- `drift-rate: number = 0.1`
  - Drift rate, in units of evidence per second, *v*
- `non-decision-time: number = 200`
  - Non-decision time, in milliseconds, *t0*

##### Slots

- *unnamed*
  - Place relevant `accumulable-elements` components here
  - Wired elements
    - `<accumulable-control>`
      - Allows user to adjust number of trials and resample paths
    - `<accumulable-table>`
      - Displays numerical results for the current block of trials
    - `<ddm-parameters>`
      - Allows user to adjust model parameters with sliders
    - `<ddm-model>`
      - Allows user to manipulate parameters in a visual rendering of model parameters, data, and
        model predictions 

##### Example

```html
<ddm-example-interactive trials="10" boundary-separation="1.2" starting-point="0.35" drift-rate="1.5" nondecision-time="150">
  <accumulable-control trials="10" resample></accumulable-control>
  <ddm-parameters interactive></ddm-parameters>
  <ddm-model interactive measures means sds></ddm-model>
  <accumulable-table numeric summary color="outcome"></accumulable-table>
</ddm-example-interactive>
```

#### `DDMExampleModel` / `<ddm-example-model>`

Model simulates task performance based on DDM parameter values

Used to build examples where the model is simulated to perform the two-alternative forced choice
random-dot kinematogram task. Can include controls, the task itself, adjustable parameters, an
interactive visual rendering of the model, response buttons with feedback and payoffs, and a table
of results.

##### Attributes

**Note:** Since model parameter attributes are set on the example, they don't need to be set on the
individual components, as they will be propagated and kept in sync.

- `trials: number = 10`
  - Number of sampled trials to display
- `duration: number = 2000`
  - The duration of the stimulus, wait, and inter-trial interval on each trial, initialized to the
    value provided in milliseconds
- `coherence: number = 0.5`
  - The proportion of coherent dots in the visual stimulus
- `color: string = outcome`
  - How to color the cells in the results table
  - Options
    - `'none'`
      - No use of color
    - `'measure'`
      - Color based on measure (*count/accuracy*, *mean RT*, *standard deviation RT*)
    - `'outcome'`
      - Color based on outcome (*correct*, *error*, *overall*)
    - `'all'`
      - Color based on measure and outcome
- `boundary-separation: number = 1.5`
  - Model parameter: boundary separation, in units of evidence, *a*
- `starting-point: number = 0.5`
  - Model parameter: starting point, as a proportion of boundary separation, *z*
- `drift-rate: number = 0.1`
  - Model parameter: drift rate, in units of evidence per second, *v*
- `non-decision-time: number = 200`
  - Model parameter: non-decision time, in milliseconds, *t0*

##### Slots

- *unnamed*
  - Place relevant `accumulable-elements` components here
  - Wired elements
    - `<accumulable-control>`
      - Allows user to adjust parameters and control the task
    - `<rdk-2afc-task>`
      - Displays the task
    - `<ddm-parameters>`
      - Allows the user to adjust the model parameters for current fit
    - `<ddm-model>`
      - Interactive visual rendering of model parameters, data, and model predictions 
    - `<accumulable-response>`
      - Allows user to view model responses and see feedback and payoffs
    - `<accumulable-table>`
      - Displays numerical results for the current block of trials

##### Example

```html
<ddm-example-model trials="10" duration="2000" coherence="0.5" color="outcome" boundary-separation="1.2" starting-point="0.35" drift-rate="1.5" nondecision-time="150">
  <accumulable-control trials color run pause reset></accumulable-control>
  <rdk-2afc-task></rdk-2afc-task>
  <ddm-parameters interactive></ddm-parameters>
  <ddm-model interactive measures means sds></ddm-model>
  <accumulable-response trial feedback></accumulable-response>
  <accumulable-table numeric summary></accumulable-table>
</ddm-example-model>
```

#### `DDMExample`

Base class for all DDM examples

To define a new example:

```javascript
export default class DDMExampleSomething extends DDMExample {
  ...
}
```

`DDMExample` extends `AccumulableElement` extends `DecidablesElement` extends `LitElement`

### Base class

#### `AccumulableElement`

Base class for all *accumulable* web components

To define a new element:

```javascript
export default class AccumulableElementSomething extends AccumulableElement {
  ...
}
```

`AccumulableElement` extends `DecidablesElement` extends `LitElement`

## Development

### Features/Bugs/Notes

- Very early stages!

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

- `accumulable-elements/`
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
