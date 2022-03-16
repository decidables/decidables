---
title: 'Signal Detection Theory (SDT): Putting it Together'
layout: page
script: page
---

## Bias, <span class="math-var">c</span>, and sensitivity, <span class="math-var">d'</span>, together

We have now seen how, depending on whether this is a noise or signal trial, a measurement of
:key[Evidence] is made from the :key[Noise Distribution] or the :key[Signal + Noise Distribution].
And we have seen how the value of this measurement relative to a threshold is used to determine if
this will be a :key[Respond Present] or :key[Respond Absent] trial. Now we put the distributions and
the threshold together, so we can see how :key[Sensitivity] (:key[d′]) and :key[Bias] (:key[c])
collectively determine our response:

<sdt-example-model>
  <detectable-control run pause reset trials="10" duration="500"></detectable-control>
  <rdk-task count="100" coherence=".5" trials="10" duration="500" wait="500" iti="500"></rdk-task>
  <sdt-model interactive threshold bias distributions sensitivity histogram
    color="response" d="2.5" c="1"></sdt-model>
  <detectable-response feedback="none"></detectable-response>
</sdt-example-model>

As you change :key[d′] by adjusting the distance between the distributions, and :key[c] by moving
the location of the threshold, note that these two parameters operate independently to collectively
determine which signal and noise trials that will evoke :key[Present] versus :key[Absent] responses.

## A measurement plus a threshold gives us an outcome!

We are now ready to go one step further, by noting that since we can classify each simulated trial
as a :key[Signal Present] or :key[Signal Absent] trial, and also as a :key[Respond Present] or
:key[Respond Absent] trial, we can therefore determine the outcome of each trial as a :key[Hit],
:key[Miss], :key[Correct Rejection], or :key[False Alarm].

In this example, the model's measurement for each trial is color-coded based on the trial outcome:
:key[Hit], :key[Miss], :key[Correct Rejection], or :key[False Alarm]. The distributions are also
colored accordingly to indicate the outcome that will result from sampling from each part of each
distribution. The model's response and the resulting outcome and feedback will depend on the current
values of :key[d′] and :key[c]. The measurements and resulting outcomes for each trial in the
histogram will update as you drag the distributions or the threshold to adjust the parameter values.

<sdt-example-model>
  <detectable-control run pause reset trials="10" duration="500"></detectable-control>
  <rdk-task count="100" coherence=".5" trials="10" duration="500" wait="500" iti="500"></rdk-task>
  <sdt-model interactive threshold bias distributions sensitivity histogram
    color="outcome" d="1.5" c="0"></sdt-model>
  <detectable-response trial feedback="outcome"></detectable-response>
</sdt-example-model>

Run a bunch of trials and watch them accumulate in the histogram. Drag the distributions closer
together or farther apart to adjust :key[Sensitivity]. Drag the criterion higher or lower to adjust
:key[Bias]. You start to get a sense of how the values of the model parameters :key[d′] and :key[c]
jointly determine performance.

## Outcomes summarized in an SDT table and ROC space

To get a clearer and more explicit sense of how the model parameters :key[d′] and :key[c] jointly
determine performance, we can summarize the performance of our model using an outcome table and ROC
space, just as we did for human performance previously:

<sdt-example-model>
  <detectable-control run pause reset trials="40" duration="500"></detectable-control>
  <rdk-task count="100" trials="40" duration="500" wait="500" iti="500"></rdk-task>
  <sdt-model interactive threshold bias distributions sensitivity histogram
    color="outcome" d="1.5" c="0"></sdt-model>
  <detectable-response trial feedback="outcome"></detectable-response>
  <detectable-table numeric summary="stimulusRates accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0">
    </detectable-table>
  <roc-space hr=".5" far=".5" point="all" iso-d="none" iso-c="none"></roc-space>
</sdt-example-model>

Now we can see how the parameters :key[d′] and :key[c] jointly determine the model's performance in
terms of :key[Hit Rate] and :key[False Alarm Rate]. Indeed, any pattern of performance can be
accounted for with the model by selecting the appropriate parameter values!

## Calculating hit and false alarm rates from sensitivity and bias

According to SDT, the measurement of evidence on each trial is stochastically sampled from the
:key[Noise Distribution] or the :key[Signal + Noise Distribution]. In the examples above, we
simulated a small number of trials by pseudo-random sampling. The resulting simulated :key[Hit Rate]
and :key[False Alarm Rate] are fairly noisy, since we have a fairly small sample. But since SDT
specifies the distributions and we have specified the model parameters, we can calculate the exact
:key[Hit Rate] and :key[False Alarm Rate] predicted by the theory if we were collecting data from an
*infinite* number of trials.

The :key[Hit Rate] is the proportion of the signal distribution above the threshold. Using the
cumulative distribution function of the normal distribution, <span class="math-greek">Φ</span>, it
can be determined from :key[d′] and :key[c]:

<sdt-equation-dc2hr></sdt-equation-dc2hr>

<sdt-equation-dc2hr numeric interactive d="0" c="0"></sdt-equation-dc2hr>

The :key[False Alarm Rate] is the proportion of the noise distribution above the threshold. It can
also be determined from :key[d′] and :key[c]:

<sdt-equation-dc2far></sdt-equation-dc2far>

<sdt-equation-dc2far numeric interactive d="0" c="0"></sdt-equation-dc2far>

In the following pages we will continue to explore the relationship between the model parameters for
:key[Sensitivity] and :key[Bias], and the behavioral measures of :key[Hit Rate] and :key[False Alarm
Rate].
