---
title: "Signal Detection Theory (SDT): Putting it Together"
layout: page
script: index
---

## Bias, <span class="math-var">c</span>, and sensitivity, <span class="math-var">d'</span>, together

We have now seen how, depending on whether this is a noise or signal trial, a measurement of
`Evidence` is made from the `Noise Distribution` or the `Signal + Noise Distribution`. And we have
seen how the value of this measurement relative to a threshold is used to determine if this will be
a `Respond Present` or `Respond Absent` trial. Now we put the distributions and the
threshold together, so we can see how `Sensitivity` (`d′`) and `Bias` (`c`) collectively determine
our response:

<sdt-example-model>
  <sdt-control run pause reset trials="10" duration="500"></sdt-control>
  <rdk-task count="100" coherence=".5" trials="10" duration="500" wait="500" iti="500"></rdk-task>
  <sdt-model interactive threshold bias distributions sensitivity histogram
    color="response" d="2.5" c="1"></sdt-model>
  <sdt-response feedback="none"></sdt-response>
</sdt-example-model>

As you change `d′` by adjusting the distance between the distributions, and `c` by moving the
location of the threshold, note that these two parameters operate independently to collectively
determine which signal and noise trials that will evoke `Present` versus `Absent` responses.

## A measurement plus a threshold gives us an outcome!

We are now ready to go one step further, by noting that since we can classify each simulated
trial as a `Signal Present` or `Signal Absent` trial, and also as a `Respond Present` or
`Respond Absent` trial, we can therefore determine the outcome of each trial as a `Hit`, `Miss`,
`Correct Rejection`, or `False Alarm`.

In this example, the model's measurement for each trial is color-coded based on the trial outcome:
`Hit`, `Miss`, `Correct Rejection`, or `False Alarm`. The distributions are also colored accordingly
to indicate the outcome that will result from sampling from each part of each distribution. The
model's response and the resulting outcome and feedback will depend on the current values of `d′`
and `c`. The measurements and resulting outcomes for each trial in the histogram will update as you
drag the distributions or the threshold to adjust the parameter values.

<sdt-example-model>
  <sdt-control run pause reset trials="10" duration="500"></sdt-control>
  <rdk-task count="100" coherence=".5" trials="10" duration="500" wait="500" iti="500"></rdk-task>
  <sdt-model interactive threshold bias distributions sensitivity histogram
    color="outcome" d="1.5" c="0"></sdt-model>
  <sdt-response trial feedback="outcome"></sdt-response>
</sdt-example-model>

Run a bunch of trials and watch them accumulate in the histogram. Drag the distributions closer
together or farther apart to adjust `Sensitivity`. Drag the criterion higher or lower to adjust
`Bias`. You start to get a sense of how the values of the model parameters `d′` and `c` jointly
determine performance.

## Outcomes summarized in an SDT table and ROC space

To get a clearer and more explicit sense of how the model parameters `d′` and `c` jointly determine
performance, we can summarize the performance of our model using an outcome table and ROC space,
just as we did for human performance previously:

<sdt-example-model>
  <sdt-control run pause reset trials="40" duration="500"></sdt-control>
  <rdk-task count="100" trials="40" duration="500" wait="500" iti="500"></rdk-task>
  <sdt-model interactive threshold bias distributions sensitivity histogram
    color="outcome" d="1.5" c="0"></sdt-model>
  <sdt-response trial feedback="outcome"></sdt-response>
  <sdt-table numeric summary="stimulusRates accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0">
    </sdt-table>
  <roc-space hr=".5" far=".5" point="all" iso-d="none" iso-c="none"></roc-space>
</sdt-example-model>

Now we can see how the parameters `d′` and `c` jointly determine the model's performance in terms of
`Hit Rate` and `False Alarm Rate`. Indeed, any pattern of performance can be accounted for with the
model by selecting the appropriate parameter values!

## Calculating hit and false alarm rates from sensitivity and bias

According to SDT, the measurement of evidence on each trial is stochastically sampled from the
`Noise Distribution` or the `Signal + Noise Distribution`. In the examples above, we simulated a
small number of trials by pseudo-random sampling. The resulting simulated `Hit Rate` and
`False Alarm Rate` are fairly noisy, since we have a fairly small sample. But since SDT specifies
the distributions and we have specified the model parameters, we can calculate the exact
`Hit Rate` and `False Alarm Rate` predicted by the theory if we were collecting data from an
*infinite* number of trials.

The `Hit Rate` is the proportion of the signal distribution above the threshold. Using the
cumulative distribution function of the normal distribution, <span class="math-greek">Φ</span>, it
can be determined from `d′` and `c`:

<sdt-equation-dc2hr></sdt-equation-dc2hr>

<sdt-equation-dc2hr numeric interactive d="0" c="0"></sdt-equation-dc2hr>

The `False Alarm Rate` is the proportion of the noise distribution above the threshold. It can also
be determined from `d′` and `c`:

<sdt-equation-dc2far></sdt-equation-dc2far>

<sdt-equation-dc2far numeric interactive d="0" c="0"></sdt-equation-dc2far>

In the following pages we will continue to explore the relationship between the model parameters
for `Sensitivity` and `Bias`, and the behavioral measures of `Hit Rate` and `False Alarm Rate`.
