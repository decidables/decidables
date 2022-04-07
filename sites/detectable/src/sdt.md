---
title: 'Signal Detection Theory: Putting it Together'
layout: page
script: page
---

## Bias (<span class="math-var">c</span>) and sensitivity (<span class="math-var">d'</span>)

We have seen how, depending on whether the signal is :key[present] or :key[absent], a measurement is
made from the corresponding distribution. And we have seen how the value of this measurement
relative to a threshold is used to determine if the model will respond :key['present'] or
:key['absent']. Now we can put the distributions and the threshold together, so we can see how
:key[sensitivity] (:key[<span class="math-var">d′</span>]) and :key[bias] (:key[<span
class="math-var">c</span>]) determine our response:

<sdt-example-model>
  <detectable-control run pause reset trials="10" duration="500"></detectable-control>
  <rdk-task count="100" coherence=".5" trials="10" duration="500" wait="500" iti="500"></rdk-task>
  <sdt-model interactive threshold bias distributions sensitivity histogram
    color="response" d="2.5" c="1"></sdt-model>
  <detectable-response feedback="none"></detectable-response>
</sdt-example-model>

:::ui

You can adjust :key[<span class="math-var">d′</span>] by moving the distributions and :key[<span
class="math-var">c</span>] by moving the threshold. In this example, the distributions are colored
according to the resulting response. If there are evidence measurements for individual trials, they
will change between :key['Present'] and :key['Absent'] responses based on the locations of the
distributions and threshold.

:::

Hopefully, it is clear that the response depends on *both* :key[sensitivity] *and* :key[bias].

## A measurement plus a threshold gives us an outcome!

We are now ready to go one step further, by noting that since we can classify each simulated trial
based on the signal being :key[present] or :key[absent], and then also based on the response being
:key['present'] or :key['absent'], we can therefore determine the *outcome* of each trial as a
:key[hit], :key[miss], :key[correct rejection], or :key[false alarm].

Explore the model and how :key[sensitivity] and :key[bias] determine outcomes:

<sdt-example-model>
  <detectable-control run pause reset trials="40" duration="500"></detectable-control>
  <rdk-task count="100" coherence=".5" trials="40" duration="500" wait="500" iti="500"></rdk-task>
  <sdt-model interactive threshold bias distributions sensitivity histogram
    color="outcome" d="1.5" c="0"></sdt-model>
  <detectable-response trial feedback="outcome"></detectable-response>
  <detectable-table numeric summary="stimulusRates accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0">
    </detectable-table>
  <roc-space hr=".5" far=".5" point="all" iso-d="none" iso-c="none"></roc-space>
</sdt-example-model>

:::ui

In the *live* graph of the model, the box representing the model's measurement for each trial
represents whether the trial outcome will be a :key[Hit], :key[Miss], :key[Correct Rejection], or
:key[False Alarm]. The distributions are also colored accordingly to indicate the outcome that will
result from sampling from each part of each distribution.

The measurements and resulting outcomes for each trial in the histogram will update as you drag the
distributions or the threshold to adjust the parameter values. The table and ROC space will also
update. This will help you to see how the values of :key[<span class="math-var">d′</span>] and
:key[<span class="math-var">c</span>] in the model determine performance in terms of :key[hits],
:key[misses], :key[correct rejections], and :key[false alarms], as well as :key[hit rate],
:key[false alarm rate], and :key[accuracy].

:::

Run a bunch of trials and watch them accumulate in the histogram, the table, and in ROC space.
Adjust the distributions and threshold to get a sense of how the values of the model parameters
:key[<span class="math-var">d′</span>] and :key[<span class="math-var">c</span>] jointly determine
performance. Indeed, any pattern of performance can be accounted for with the model by selecting the
appropriate parameter values!

## Calculating hit and false alarm rates from sensitivity and bias

According to SDT, the measurement of evidence on each trial is stochastically sampled from the
:key[noise distribution] or the :key[signal-plus-noise distribution]. In the examples above, we
simulated a small number of trials by pseudo-random sampling and calculated a :key[hit rate] and
:key[false alarm rate] from the results, just as we did when you were the participant. The results
are fairly unreliable, since we have a small sample. However, since SDT specifies the distributions
and we have specified the model parameters, we can calculate the *exact* rates predicted by the
theory if we were collecting data from an *infinite* number of trials.

As suggested by the way the distributions are color-coded based on outcomes in the graph above, the
:key[hit rate] is the proportion of the :key[signal-plus-noise distribution] above the threshold.
Using the cumulative distribution function of the normal distribution, <span
class="math-greek">Φ</span>, we can calculate it from :key[<span class="math-var">d′</span>] and
:key[<span class="math-var">c</span>]:

<sdt-equation-dc2hr></sdt-equation-dc2hr>

<sdt-equation-dc2hr numeric interactive d="0" c="0"></sdt-equation-dc2hr>

Similarly, the :key[false alarm rate] is the proportion of the :key[noise distribution] above the
threshold. It can also be calculated from :key[<span class="math-var">d′</span>] and :key[<span
class="math-var">c</span>]:

<sdt-equation-dc2far></sdt-equation-dc2far>

<sdt-equation-dc2far numeric interactive d="0" c="0"></sdt-equation-dc2far>

In the following pages we will continue to explore the relationship between the model parameters for
:key[sensitivity] and :key[bias], and the behavioral measures of :key[hit rate] and :key[false alarm
rate].
