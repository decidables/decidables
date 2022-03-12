<!--lint ignore first-heading-level-->

# detectable-elements: Web Components for Visualizing Signal Detection Theory

## Usage

### Install

```shell
yarn add @decidables/detectable-elements
```

### Use

```javascript
import '@decidables/detectable-elements';
```

A bare import is used to register the elements in the custom registry, so they are then available
for use in HTML.

## Contents

### Components

Building blocks for interactive visualizations of SDT

#### `RDKTask` / `<rdt-task>`

Displays stimuli for random dot kinematogram signal detection task

When run, a block of trials is presented. Before each trial is an inter-trial interval (ITI). Each
trial then consists of a stimulus followed by a period of waiting for a response. The stimulus
consists of a circle with a collection of small dots moving about. Some trials are *signal* trials
and others are *noise* trials. On *noise* trials, the directions of the dots is independent and
random. On *signal* trials, a subset of the dots move coherently in the same direction. The task can
be paused and then resumed, and it can also be reset and run again. 

##### Attributes

- `coherence: number = 0.5`
  - Proportion of dots moving coherently
- `count: number = 100`
  - Number of dots
- `probability: number = 0.5`
  - Probability of signal (as opposed to noise)
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
<rdt-task coherence="0.1" count="50" probability="0.5" duration="1000" wait="1000" iti="500" trials="10" running></rdt-task>
```

#### `ROCSpace` / `<roc-space>`

Interactive receiver operating characteristic (ROC) plot

An ROC plot that can show one or more locations in ROC space or zROC space. Each location can be
shown with a point, and/or with intersecting iso-sensitivity and iso-bias curves. In interactive
mode, the points can be moved via direct manipulation with the mouse, touch, or keyboard arrows. The
plot can also display the topography of the space with contour lines indicating iso-sensitivity,
iso-bias, or iso-accuracy.

##### Attributes

- `interactive: boolean = false`
  - Allow direct manipulation of points in the plot
- `contour: string = undefined`
  - Show contour lines on plot
  - Options
    - `undefined`
      - Show no contours
    - `'sensitivity'`
      - Show iso-sensitivity contours
    - `'bias'`
      - Show iso-bias contours
    - `'accuracy'`
      - Show iso-accuracy contours
- `point: string = 'all'`
  - Show a point on the plot for each *location*
  - Options:
    - `'all'`
      - Show points for all *locations*
    - `'first'`
      - Only show a point for the first (`'default'`) *location*
    - `'rest'`
      - Show points for all except the first (`'default'`) *location*
    - `'none'`
      - Show no points
- `iso-d: string = 'first'`
  - Show an iso-sensitivity line for each *location*
  - Options:
    - `'all'`
      - Show contours for all *locations*
    - `'first'`
      - Only show a contour for the first (`'default'`) *location*
    - `'rest'`
      - Show contours for all except the first (`'default'`) *location*
    - `'none'`
      - Show no contours
- `iso-c: string = 'first'`
  - Show an iso-bias line for each *location*
  - Options:
    - `'all'`
      - Show contours for all *locations*
    - `'first'`
      - Only show a contour for the first (`'default'`) *location*
    - `'rest'`
      - Show contours for all except the first (`'default'`) *location*
    - `'none'`
      - Show no contours
- `z-roc: boolean = false`
  - Plot in zROC space instead of ROC space
- `far: number = 0.25`
  - False alarm rate for the first (`'default'`) *location*
- `hr: number = 0.75`
  - Hit rate for the first (`'default'`) *location*

##### Methods

- `set(hr, far, name = 'default', label = '', s = 1)`
  - Create or update the *location* identified by `name`
  - The `name` `'default'` is reserved for the first location
  - Parameters
    - `hr: number`
      - Hit rate
    - `far: number`
      - False alarm rate
    - `name: string = 'default'`
      - A unique name to identify the *location* being set
    - `label: string = ''`
      - A visual label to use in the plot for this location
    - `s: number = 1`
      - Unequal variance parameter (default of `1` is equal variance)
- `setWidthSDT(d, c, name = 'default', label = '', s = 1)`
  - Create or update the *location* identified by `name`
  - The `name` `'default'` is reserved for the first location
  - Parameters
    - `d: number`
      - Sensitivity
    - `c: number`
      - Bias
    - `name: string = 'default'`
      - A unique name to identify the *location* being set
    - `label: string = ''`
      - A visual label to use in the plot for this location
    - `s: number = 1`
      - Unequal variance parameter (default of `1` is equal variance)

##### Custom Events

- `roc-point-change`
  - Indicates a location on the plot has been moved
  - `detail`
    - `name: string`
      - A unique name to identify the *location*
    - `far: number`
      - False alarm rate
    - `hr: number`
      - Hit rate
    - `d: number`
      - Sensitivity
    - `c: number`
      - Bias
    - `s: number`
      - Variance
    - `label: string`
      - Display label

##### Example

```html
<roc-space interactive contour="bias" point="all" isoD="first" isoC="first" z-roc far="0.2" hr="0.9"></roc-space>
```

#### `SDTControl` / `<sdt-control>`

Control panel for SDT demos

A configurable set of controls for user manipulation of examples of signal detection theory.
Controls can be provided for the number of trials, the timing of trials, the coherence of the dots
on *signal* trials, the balance of payoff on incentivized trials, the coloring used in the results
table, the use of ROC or zROC coordinates in ROC space, and for running, pausing, or resetting a
block of trials.

##### Attributes

- `trials: number = undefined`
  - Show a slider for setting the number of trials, initialized to the value provided
  - Options
    - `1` to `100` in steps of `1`
- `duration: number = undefined`
  - Show a slider for setting the duration of the stimulus, wait, and inter-trial interval on each
    trial, initialized to the value provided in milliseconds
  - Options
    - `10` to `2000` in steps of `10`
- `coherence: number = undefined`
  - Show a slider for setting the proportion of coherent dots on *signal* trials
  - Options
    - `0` to `1` in steps of `0.01`
- `payoff: number = undefined`
  - Show a slider for setting the relative dollar payoff for hits and misses compared to false
    alarms and correct rejections
  - Options
    - `0` to `100` in steps of `1`
- `color: string = undefined`
  - Show a set of options to select how to color the cells in the results table
  - Options
    - `'none'`
      - No use of color
    - `'accuracy'`
      - Color based on accuracy of responses
    - `'stimulus'`
      - Color based on *signal* or *noise* stimulus
    - `'response'`
      - Color based on *'signal'* or *'noise'* response
    - `'outcome'`
      - Color based on outcome of hit, miss, false alarm or correct rejection 
- `zRoc: boolean = undefined`
  - Show a switch to set whether to use z-transformed ROC coordinates (`true`) or ROC coordinates
    (`false`)
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

- `sdt-control-trials`
  - Indicates the number of trials slider has been adjusted
  - `detail`
    - `trials: number`
      - The new number of trials
- `sdt-control-duration`
  - Indicates the duration of trials slider has been adjusted
  - `detail`
    - `duration: number`
      - The new duration
- `sdt-control-coherence`
  - Indicates the coherence of stimulus dots slider has been adjusted
  - `detail`
    - `coherence: number`
      - The new coherence
- `sdt-control-payoff`
  - Indicates the payoff slider has been adjusted
  - `detail`
    - `payoff: number`
      - The new payoff
- `sdt-control-color`
  - Indicates the color selection for the results table has been toggled
  - `detail`
    - `color: string`
      - The new color scheme
- `sdt-control-z-roc`
  - Indicates the plot coordinates switch have been changed
  - `detail`
    - `zRoc: boolean`
      - Whether or not to use z-transformed coordinates now
- `sdt-control-run`
  - Indicates the run button has been pushed
- `sdt-control-pause`
  - Indicates the pause button has been pushed
- `sdt-control-reset`
  - Indicates the reset button has been pushed

##### Example

```html
<sdt-control trials="15" duration="1500" coherence="0.2" payoff="75" color="outcome" z-roc run pause reset></sdt-control>
```

#### `SDTModel` / `<sdt-model>`

Interactive visualization of SDT in terms of signal and noise distributions

This widget provides a visualization of signal detection theory. It can show *signal* and *noise*
distributions and a threshold. The distributions can have unequal variance. The sensitivity, bias,
and *signal* variance can be set and optionally displayed. In interactive mode, the bias can be
adjusted by directly moving the threshold horizontally with mouse, touch, or keyboard, the
sensitivity can be adjusted by directly moving a distribution horizontally with mouse, touch, or
keyboard, and the variance can be adjusted by directly moving the *signal* distribution vertically
with mouse, touch, or keyboard.

In addition, the observation of stimuli can be visualized as blocks arriving at particular evidence
levels, and stacking with previous stimuli to form a histogram. In interactive mode, when the model
is adjusted, the blocks in the histogram will rearrange accordingly.

The thresholded distributions and the histogram blocks can be colored based on the stimuli, the
responses, or the outcomes.

##### Attributes

- `interactive: boolean = false`
  - Allow direct manipulation of threshold and distributions
- `color: string = 'outcome'`
  - Set how to color distributions and trials
  - Options
    - `'outcome'`
      - Color based on outcome of the hit, miss, false alarm, or correct rejection
    - `'response'`
      - Color based on the `'present'` or `'absent'` response provided
    - `'stimulus'`
      - Color based on the `present` or `absent` stimulus displayed
    - `'none'`
      - No coloring
- `distributions: boolean = false`
  - Show distributions
- `threshold: boolean = false`
  - Show threshold
- `unequal: boolean = false`
  - Allow unequal variance
- `sensitivity: boolean = false`
  - Show the sensitivity as *d'* with a measurement bar
- `bias: boolean = false`
  - Show the bias as *c* with a measurement bar
- `variance: boolean = false`
  - Show the variance as *s* with a measurement bar
- `histogram: boolean = false`
  - Show a histogram with a block for each trial/stimulus
- `d: number = 1`
  - Set the sensitivity, *d`*
- `c: number = 0`
  - Set the bias, *c*
- `s: number = 1`
  - Set the variance of the *signal* distribution, *s*

##### Methods

- `reset()`
  - Reset the histogram to have no trials
- `trial(trialNumber, signal, duration, wait, iti)`
  - Add a trial to the histogram
  - Parameters
    - `trialNumber: number`
      - Numerical count of the trial in the block
    - `signal: string`
      - Whether this is a signal `'present'` or `'absent'` trial 
    - `duration: number`
      - The stimulus duration on this trial in milliseconds
    - `wait: number`
      - The wait duration on this trial in milliseconds
    - `iti: number`
      - The inter-trial interval duration after this trial in milliseconds
- `pauseTrial()`
  - Pause the animation of trials in the histogram
- `resumeTrial()`
  - Resume the animation of trials in the histogram

##### Custom Events

- `sdt-model-change`
  - Indicates that one or more model parameters have been changed
  - `detail`
    - `d: number`
      - Sensitivity
    - `c: number`
      - Bias
    - `s: number`
      - Variance
    - `far: number`
      - False alarm rate
    - `hr: number`
      - Hit rate
    - `h: number`
      - Hits
    - `m: number`
      - Misses
    - `fa: number`
      - False alarms
    - `cr: number`
      - Correct rejections
- `sdt-response`
  - Indicates that an animated histogram trial has generated a response 
  - `detail`
    - `stimulus: string`
      - Whether the signal was actually `'present'` or `'absent'`
    - `response: string`
      - Whether the response was `'present'` or `'absent'`
    - `outcome: string`
      - The outcome of the trial as a hit (`'h'`), miss (`'m'`), correct rejection (`'cr'`), or
        false alarm (`'fa'`)
    - `h: number`
      - Total hits in this block
    - `m: number`
      - Total misses in this block
    - `fa: number`
      - Total false alarms in this block
    - `cr: number`
      - Total correct rejections in this block
    - `nr: number`
      - Total no responses in this block

##### Example

```html
<sdt-model interactive color="outcome" distributions threshold unequal sensitivity bias variance histogram d="2" c="1" s="1.5"></sdt-model>
```

#### `SDTResponse` / `<sdt-response>`

Response buttons, feedback, and payoffs for signal detection tasks

This element provides 'present' and 'absent' response buttons. It can also display a running count
of the trials, display feedback in terms of accuracy or SDT outcome, and display the current trial
and total payoff.

##### Attributes

- `interactive: boolean = false`
  - Allow user to respond, instead of just displaying simulated model responses
- `feedback: string = 'outcome'`
  - What type of feedback to display
  - Options
    - `'none'`
      - No feedback
    - `'accuracy'`
      - Feedback in terms of accuracy, i.e. 'correct' or 'error'
    - `'outcome'`
      - Feedback in terms of outcome, i.e. 'hit, 'miss', 'false alarm', or 'correct rejection'
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
- `hit-payoff: number = 0`
  - Value of payoff for a hit
- `miss-payoff: number = 0`
  - Value of payoff for a miss
- `correct-rejection-payoff: number = 0`
  - Value of payoff for a correct rejection
- `false-alarm-payoff: number = 0`
  - Value of payoff for a false alarm
- `no-response-payoff: number = 0`
  - Value of payoff for no response

##### Methods

- `start(signal, trial)`
  - Indicates that a trial has started, and its time to wait for a response
  - Parameters
    - `signal: string`
      - Whether this is a signal `'present'` or `'absent'` trial
    - `trial: number`
      - The count of the trial within the block
- `stop()`
  - Indicates that the trial is over and it is time to display any requested feedback
  - **Note:** If no response has been made yet, the trial is recorded as having no response
- `present()`
  - Emulate a 'present' response  
- `absent()`
  - Emulate an 'absent' response  
- `responded(response)`
  - Emulate a response
  - Parameters
    - `response: string`
      - Whether to emulate a `'present'` or `'absent'` response
- `reset()`
  - Reset to the state at the start of a block of trials

##### Custom Events

- `sdt-response`
  - Indicates that a response has been made on this trial 
  - `detail`
    - `trial: number`
      - The count of this trial in the block
    - `signal: string`
      - Whether the signal was actually `'present'` or `'absent'`
    - `response: string`
      - Whether the response was `'present'` or `'absent'`
    - `outcome: string`
      - The outcome of the trial as a hit (`'h'`), miss (`'m'`), correct rejection (`'cr'`), or
        false alarm (`'fa'`)
    - `payoff: number`
      - The payoff for this trial
    - `h: number`
      - Total hits in this block
    - `m: number`
      - Total misses in this block
    - `fa: number`
      - Total false alarms in this block
    - `cr: number`
      - Total correct rejections in this block
    - `nr: number`
      - Total no responses in this block
    - `totalPayoff: number`
      - Total payoff for the block

##### Example

```html
<sdt-response interactive feedback="outcome" trial payoff="total" hit-payoff="60" miss-payoff="-60" false-alarm-payoff="-40" correct-rejection-payoff="40" no-response-payoff="-100"></sdt-response>
```

#### `SDTTable` / `<sdt-table>`

Interactive table of SDT outcomes

A results table for signal detection tasks. The results are presented in a two by two table
organized by stimuli (signal present or absent) and responses ('present' or 'absent') leading to
four possible outcomes: hits, misses, false alarms, and correct rejections. Results on signal
present trials are optionally marginalized with the hit rate and those on signal absent trials with
the false alarm rate. Results on response 'present' trials are optionally marginalized with the
positive predictive value and those on response 'absent' trials with the false omission rate. And
overall results are optionally marginalized with accuracy.

##### Attributes

- `interactive: boolean = false`
  - Allow user to change values in the table
- `numeric: boolean = false`
  - Show numeric values instead of just labelling the cells
- `summary: Set = <empty>`
  - Which marginals to display
  - Expressed in HTML as a space-separated list
  - Options
    - `'stimulusRates'`
      - Display hit rate and false alarm rate
    - `'responseRates'`
      - Display positive predictive value and false omission rate
    - `'accuracy'`
      - Display overall accuracy
- `color: string = 'outcome'`
  - How to color the cells
  - Options
    - `'none'`
      - No colors
    - `'accuracy'`
      - Color based on accuracy, i.e. correct or error
    - `'stimulus'`
      - Color based on stimulus present or absent
    - `'response'`
      - Color based on response 'present' or 'absent'
    - `'outcome'`
      - Full coloration based on hits, misses, false alarms and correct rejections
- `hits: number = 40`
  - Number of hits
- `misses: number = 60`
  - Number of misses
- `false-alarms: number = 75`
  - Number of false alarms
- `correct-rejections: number = 25`
  - Number of correct rejections
- `payoff: boolean = false`
  - Whether to display payoffs
- `hit-payoff: number = undefined`
  - Payoff for hits
- `miss-payoff: number = undefined`
  - Payoff for misses
- `correct-rejection-payoff: number = undefined`
  - Payoff for correct rejections
- `false-alarm-payoff: number = undefined`
  - Payoff for false alarms

##### Custom Events

- `sdt-table-change`
  - One or more values in the table have changed
  - `detail`
    - `h: number`
      - Hits
    - `m: number`
      - Misses
    - `fa: number`
      - False alarms
    - `cr: number`
      - Correct rejections
    - `hr: number`
      - Hit rate
    - `far: number`
      - False alarm rate
    - `ppv: number`
      - Positive predictive value
    - `fomr: number`
      - False omission rate
    - `acc: number`
      - Accuracy

##### Example

```html
<sdt-table interactive numeric summary="stimulusRates responseRates accuracy" = color="outcome" hits="80" misses="20" false-alarms="35" correct-rejections="65" payoff hit-payoff="60" miss-payoff="-60" false-alarm-payoff="-40" correct-rejection-payoff="40"></sdt-table>
```

### Equations

Interactive equations for SDT

The equations can either be static and display the variable names, be static and display names and
values or be interactive with names and editable values, in which case only the values on the right
side of the equals sign are editable.

**Note:** The layout for these equations leaves something to be desired, especially on smaller
screens. Ideally a proper math renderer would be used, but I haven't found one that takes kindly to
insertion of the custom elements needed for live editing.

#### `SDTEquationDC2Far` / `<sdt-equation-dc2far>`

False alarm rate from sensitivity and bias

##### Attributes

- `numeric: boolean = false`
  - Show values instead of just the names of variables
- `interactive: boolean = false`
  - Allow editing of numeric values in the equation
- `unequal: boolean = false`
  - Show the unequal variance version of the equation, including a variance parameter
- `d: number = 0`
  - Sensitivity, *d`*
- `c: number = 0`
  - Bias, *c*
- `s: number = 1`
  - Variance, *s*

##### Properties

- `far: number`
  - False alarm rate

##### Custom Events

- `sdt-equation-dc2far-change`
  - Indicates that the values in the equation have changed
  - `detail`
    - `d: number`
      - New value of sensitivity
    - `c: number`
      - New value of bias
    - `s: number`
      - New value of variance
    - `far: number`
      - New value of false alarm rate

##### Example

```html
<sdt-equation-dc2far numeric interactive unequal d="2" c="-1" s="1.5"></sdt-equation-dc2far>
```

#### `SDTEquationDC2Hr` / `<sdt-equation-dc2hr>`

Hit rate from sensitivity and bias

##### Attributes

- `numeric: boolean = false`
  - Show values instead of just the names of variables
- `interactive: boolean = false`
  - Allow editing of numeric values in the equation
- `unequal: boolean = false`
  - Show the unequal variance version of the equation, including a variance parameter
- `d: number = 0`
  - Sensitivity, *d`*
- `c: number = 0`
  - Bias, *c*
- `s: number = 1`
  - Variance, *s*

##### Properties

- `hr: number`
  - Hit rate

##### Custom Events

- `sdt-equation-dc2hr-change`
  - Indicates that the values in the equation have changed
  - `detail`
    - `d: number`
      - New value of sensitivity
    - `c: number`
      - New value of bias
    - `s: number`
      - New value of variance
    - `hr: number`
      - New value of hit rate

##### Example

```html
<sdt-equation-dc2hr numeric interactive unequal d="2" c="-1" s="1.5"></sdt-equation-dc2hr>
```

#### `SDTEquationFaCr2Far` / `<sdt-equation-facr2far>'

False alarm rate from false alarms and correct rejections

##### Attributes

- `numeric: boolean = false`
  - Show values instead of just the names of variables
- `interactive: boolean = false`
  - Allow editing of numeric values in the equation
- `false-alarms: number = 0`
  - False alarms
- `correct-rejections: number = 0`
  - Correct rejections

##### Properties

- `far: number`
  - False alarm rate

##### Custom Events

- `sdt-equation-facr2far-change`
  - Indicates that the values in the equation have changed
  - `detail`
    - `fa: number`
      - New value of false alarms
    - `cr: number`
      - New value of correct rejections
    - `far: number`
      - New value of false alarm rate

##### Example

```html
<sdt-equation-facr2far numeric interactive false-alarms="25" correct-rejections="75"></sdt-equation-facr2far>
```

#### `SDTEquationHM2Hr` / `<sdt-equation-hm2hr>`

Hit rate from hits and misses

##### Attributes

- `numeric: boolean = false`
  - Show values instead of just the names of variables
- `interactive: boolean = false`
  - Allow editing of numeric values in the equation
- `hits: number = 0`
  - Hits
- `misses: number = 0`
  - Misses

##### Properties

- `far: number`
  - Hit rate

##### Custom Events

- `sdt-equation-hm2hr-change`
  - Indicates that the values in the equation have changed
  - `detail`
    - `h: number`
      - New value of hits
    - `m: number`
      - New value of misses
    - `hr: number`
      - New value of hit rate

##### Example

```html
<sdt-equation-hm2hr numeric interactive hits="75" misses="25"></sdt-equation-hm2hr>
```

#### `SDTEquationHMFaCr2Acc` / `<sdt-equation-hmfacr2c>`

Accuracy from hits, misses, false alarms, and correct rejections

##### Attributes

- `numeric: boolean = false`
  - Show values instead of just the names of variables
- `interactive: boolean = false`
  - Allow editing of numeric values in the equation
- `hits: number = 0`
  - Hits
- `misses: number = 0`
  - Misses
- `false-alarms: number = 0`
  - False alarms
- `correct-rejections: number = 0`
  - Correct rejections

##### Properties

- `acc: number`
  - Accuracy

##### Custom Events

- `sdt-equation-hmfacr2c-change`
  - Indicates that the values in the equation have changed
  - `detail`
    - `h: number`
      - New value of hits
    - `m: number`
      - New value of misses
    - `fa: number`
      - New value of false alarms
    - `cr: number`
      - New value of correct rejections
    - `acc: number`
      - New value of accuracy

##### Example

```html
<sdt-equation-hmfacr2c numeric interactive hits="75" misses="25" false-alarms="25" correct-rejections="75"></sdt-equation-hmfacr2c>
```

#### `SDTEquationHrFar2C` / `<sdt-equation-hrfar2c>`

Bias from hit rate and false alarm rate

##### Attributes

- `numeric: boolean = false`
  - Show values instead of just the names of variables
- `interactive: boolean = false`
  - Allow editing of numeric values in the equation
- `hit-rate: number = 0`
  - Hits
- `false-alarm-rate: number = 0`
  - Misses
- `s: number = 1`
  - Variance, *s*

##### Properties

- `c: number`
  - Bias, *c*

##### Custom Events

- `sdt-equation-hrfar2c-change`
  - Indicates that the values in the equation have changed
  - `detail`
    - `hr: number`
      - New value of hits
    - `far: number`
      - New value of misses
    - `s: number`
      - New value of variance
    - `c: number`
      - New value of bias

##### Example

```html
<sdt-equation-hrfar2c numeric interactive unequal hit-rate="0.75" false-alarm-rate="0.25" s="1.5"></sdt-equation-hrfar2c>
```

#### `SDTEquationHrFar2D` / `<sdt-equation-hrfar2d>`

Sensitivity from hit rate and false alarm rate

##### Attributes

- `numeric: boolean = false`
  - Show values instead of just the names of variables
- `interactive: boolean = false`
  - Allow editing of numeric values in the equation
- `hit-rate: number = 0`
  - Hits
- `false-alarm-rate: number = 0`
  - Misses
- `s: number = 1`
  - Variance, *s*

##### Properties

- `d: number`
  - Sensitivity, *d`*

##### Custom Events

- `sdt-equation-hrfar2c-change`
  - Indicates that the values in the equation have changed
  - `detail`
    - `hr: number`
      - New value of hits
    - `far: number`
      - New value of misses
    - `s: number`
      - New value of variance
    - `d: number`
      - New value of sensitivity

##### Example

```html
<sdt-equation-hrfar2d numeric interactive unequal hit-rate="0.75" false-alarm-rate="0.25" s="1.5"></sdt-equation-hrfar2d>
```

#### `SDTEquation`

Base class for all interactive SDT equations

To define a new equation:

```javascript
export default class SDTEquationSomething extends SDTEquation {
  ...
}
```

`SDTEquation` extends `SDTElement` extends `DecidableElement` extends `LitElement`

### Examples

Full examples built from multiple components

#### `SDTExampleHuman` / `<sdt-example-human>`

User runs task, and results are fit and displayed in real-time using SDT

Used to build examples where the user is performing the random-dot kinematogram task. Can include
controls, the task itself, response buttons with feedback and payoffs, a table of results, ROC
space, and a visual rendering of signal detection theory. The table of results, ROC space, and the
SDT model should not be interactive, because their values are received from the user's task
performance.

##### Slots

- *unnamed*
  - Place relevant `detectable-elements` components here
  - Wired elements
    - `<sdt-control>`
      - Allows user to adjust parameters and control the task
    - `<rdk-task>`
      - Displays the task
    - `<sdt-response>`
      - Allows user to make responses and see feedback and payoffs
    - `<sdt-table>`
      - Displays numerical results for the current block of trials
    - `<roc-space>`
      - Displays the hit rate and false alarm rate in ROC space based on current results
    - `<sdt-model>`
      - Displays a visual rendering of sensitivity and bias based on current results

##### Example

```html
<sdt-example-human>
  <sdt-control coherence=".5" trials="10" duration="1000" run pause reset></sdt-control>
  <rdk-task coherence=".5" trials="10" duration="1000" wait="1000" iti="1000"></rdk-task>
  <sdt-response interactive trial feedback="outcome"></sdt-response>
  <sdt-table numeric summary="stimulusRates accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0"></sdt-table>
  <roc-space point="all" iso-d="all" iso-c="all" far=".5" hr=".5"></roc-space>
  <sdt-model threshold bias distributions sensitivity histogram color="outcome" d="0" c="0"></sdt-model>
</sdt-example-human>
```

#### `SDTExampleInteractive` / `<sdt-example-interactive>`

Exploration of relationship between SDT visualizations

Used to build examples where the user can explore the relationship between results and
model parameters. Can include controls, a table of results, ROC space, and a visual rendering of
signal detection theory. The table of results, ROC space, and the SDT model should be interactive,
to allow the user to modify values and see the implications for the other components.

##### Slots

- *unnamed*
  - Place relevant `detectable-elements` components here
  - Wired elements
    - `<sdt-control>`
      - Allows user to adjust parameters
    - `<sdt-table>`
      - Display and change numerical results
    - `<roc-space>`
      - Display and change the hit rate and false alarm rate in ROC space
    - `<sdt-model>`
      - Display and change sensitivity and bias in a visualization

##### Example

```html
<sdt-example-interactive>
  <sdt-table numeric interactive summary="stimulusRates accuracy" hits="80" misses="20" false-alarms="10" correct-rejections="90"></sdt-table>
  <roc-space interactive point="all" iso-d="all" iso-c="all"></roc-space>
  <sdt-model interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
</sdt-example-interactive>
```

#### `SDTExampleDoubleInteractive` / `<sdt-example-double-interactive>`

Compare two sets of results using signal detection theory

Used to build examples where the user can explore the relationship between two sets of results and
model parameters. Can include two tables of results, a single ROC space, and two visual renderings
of signal detection theory. The tables of results, ROC space, and models can all be interactive, to
allow the user to modify values and see the implications for the other components.

##### Slots

- *unnamed*
  - Place relevant `detectable-elements` components here
  - Wired elements
    - **2×** `<sdt-table>`
      - Display and change values for two sets of results
    - `<roc-space>`
      - Display and change the hit rate and false alarm rate in ROC space for each of two results
    - **2×** `<sdt-model>`
      - Display and change sensitivity and bias in a visualization for two sets of results

##### Example

```html
<sdt-example-double-interactive>
  <sdt-table numeric interactive summary="stimulusRates accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0"></sdt-table>
  <roc-space interactive contour="accuracy" point="all" iso-d="none" iso-c="none"></roc-space>
  <sdt-table numeric interactive summary="stimulusRates accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0"></sdt-table>
</sdt-example-double-interactive>
```

#### `SDTExampleModel` / `<sdt-example-model>`

Model simulates task based on SDT parameter values

Used to build examples where the model is simulated to perform the random-dot kinematogram task. Can
include controls, the task itself, response buttons with feedback and payoffs, a table of results,
ROC space, and a visual rendering of signal detection theory. The SDT model should be interactive,
so the user can modify the model. The table of results and ROC space should not be interactive,
because their values are received from the model's task performance.

##### Slots

- *unnamed*
  - Place relevant `detectable-elements` components here
  - Wired elements
    - `<sdt-control>`
      - Allows user to adjust parameters and control the task
    - `<rdk-task>`
      - Displays the task
    - `<sdt-model>`
      - Display and change a visual rendering of the sensitivity and bias of the model
    - `<sdt-response>`
      - Displays model's responses and the resulting feedback and payoffs
    - `<sdt-table>`
      - Displays model's numerical results for the current block of trials
    - `<roc-space>`
      - Displays the model's hit rate and false alarm rate in ROC space based on current results

##### Example

```html
<sdt-example-model>
  <sdt-control run pause reset coherence=".5" trials="10" duration="500"></sdt-control>
  <rdk-task count="100" coherence=".5" trials="10" duration="500" wait="500" iti="500"></rdk-task>
  <sdt-model interactive threshold bias distributions sensitivity histogram color="outcome" d="1" c=".5"></sdt-model>
  <sdt-response trial feedback="outcome"></sdt-response>
  <sdt-table numeric summary="stimulusRates accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0"></sdt-table>
  <roc-space hr=".5" far=".5" point="all" iso-d="all" iso-c="all"></roc-space>
</sdt-example-model>
```

#### `SDTExampleUnequal` / `<sdt-example-unequal>`

Unequal variance example

Used to build specialized examples illustrating the implications of unequal variance. Can
include controls, ROC space, and a visual rendering of signal detection theory. The SDT model and
ROC space can be interactive.

**Note:** Unequal variance can be included in other examples, such as `<sdt-example-interactive>` as
well. This example is for a particular bespoke illustration, and illustrates the highly specialized
demonstrations that are possible by composing the various elements.

##### Slots

- *unnamed*
  - Place relevant `detectable-elements` components here
  - Wired elements
    - `<sdt-control>`
      - Allows user to adjust parameters
    - `<sdt-model>`
      - Display and change a visual rendering of sensitivity and bias
    - `<roc-space>`
      - Displays the hit rate and false alarm rate in ROC space

##### Example

```html
<sdt-example-unequal>
  <sdt-control z-roc></sdt-control>
  <sdt-model interactive unequal distributions sensitivity variance color="stimulus"></sdt-model>
  <roc-space z-roc contour="sensitivity" point="rest" iso-d="rest" iso-c="rest"></roc-space>
</sdt-example-unequal>
```

#### `SDTExample`

Base class for all SDT examples

To define a new example:

```javascript
export default class SDTExampleSomething extends SDTExample {
  ...
}
```

`SDTExample` extends `SDTElement` extends `DecidableElement` extends `LitElement`

### Base class

#### `SDTElement`

Base class for all *detectable* web components

To define a new element:

```javascript
export default class SDTElementSomething extends SDTElement {
  ...
}
```

`SDTElement` extends `DecidableElement` extends `LitElement`

---

## Features/Bugs/Notes

- Remove extraneous spaces from equation tagged template literals!
- Label values IN iso-plots? or allow hover or click querying of iso-plots?
  - Hover/click could be extended ROC generally and to Model plot as well?
- Use localStorage to maintain state?
- Optimize update() based on changedProperties?
- Edge/IE11 - minor edge defects between SVG element and shadow
- Firefox - No CSS SVG Geometry Properties

---

## Development Tooling

### Local Scripts

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

---

## File Organization

- `detectable-elements/`
  - `lib/` (Bundles created from `src/` by `build`) **\[autogenerated\]**
  - `src/` (Source files)
    - `components/` (Source for visualizations)
    - `equations/` (Source for equations)
    - `examples/` (Source for examples combining visualizations)
  - `test/` (Testing files)
    - `coverage/` (Code coverage results) **\[autogenerated\]**
  - `CHANGELOG.md` (Based on conventional commits) **\[autogenerated\]**
  - `gulpfile.js` (Config for *gulp*)
  - `package.json` (Config for *yarn* and *npm*)
  - `README.md` (This file)
