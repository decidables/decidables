---
title: 'Sensitivity and Difficulty: Influences on <span class="math-var">d′</span>'
layout: page
script: page
---

## Influencing sensitivity

We have discussed how SDT defines :key[sensitivity] as the distance between the :key[noise
distribution] and the :key[signal-plus-noise distribution]. But what determines that distance for a
given participant in a given block of trials? One determining factor is the participant. For
example, a participant with poorer eyesight may be less sensitive than one with excellent eyesight.
And equipment like the monitor will matter as well. It will be harder to see stimuli on a small, dim
monitor than on a large, bright one. And then there is the environment around the participant.
Consider a quiet evenly lit room versus a loud room full of flashing lights and distractions. But if
we hold all of that constant, so we consider the same participant with the same equipment in the
same context, can we still manipulate :key[sensitivity]?

## A harder task

The key is to return to what the two distributions represent --- evidence measured on trials with
the signal :key[present] or :key[absent]. If we make the signal :key[present] trials *more* like the
signal :key[absent] trials, then it will be *harder* to tell them apart.

Give this example a try:

<sdt-example-human>
  <detectable-control run pause reset></detectable-control>
  <rdk-task coherence=".1" trials="10" duration="1000" wait="1000" iti="1000"></rdk-task>
  <detectable-response interactive trial feedback="outcome"></detectable-response>
  <detectable-table numeric summary="stimulusRates accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0">
    </detectable-table>
  <roc-space point="all" iso-d="all" iso-c="all" far=".5" hr=".5"></roc-space>
  <sdt-model threshold bias distributions sensitivity color="outcome" d="0" c="0"></sdt-model>
</sdt-example-human>

How did you do? If you're like me, you didn't do so well. We've increased the :term[difficulty].
Indeed, the coherence for this example is set at 0.10, so only a tenth of the dots were moving
together on the signal :key[present] trials -- in other words, ninety percent of the dots were
moving randomly, just as on the signal :key[absent] trials.

## An easier task

Let's try making the signal :key[present] trials *less* like the signal :key[absent] trials, so they
are *easier* to tell apart.

Try this:

<sdt-example-human>
  <detectable-control run pause reset></detectable-control>
  <rdk-task coherence=".9" trials="10" duration="1000" wait="1000" iti="1000"></rdk-task>
  <detectable-response interactive trial feedback="outcome"></detectable-response>
  <detectable-table numeric summary="stimulusRates accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0">
    </detectable-table>
  <roc-space point="all" iso-d="all" iso-c="all" far=".5" hr=".5"></roc-space>
  <sdt-model threshold bias distributions sensitivity color="outcome" d="0" c="0"></sdt-model>
</sdt-example-human>

How did you do this time? I know I did a lot better! We've decreased the difficulty. This time, the
coherence was set to 0.90, so nine tenths of the dots were moving together on the signal
:key[present] trials -- in other words, only ten percent of the dots were moving randomly.

Take a look at the model fits for the hard block and the easy block. Are the distributions
overlapping more for the hard block?

## Exploring difficulty

While we can compare the results from hard and easy blocks by scrolling back and forth above, a more
typical approach in SDT analysis is to run multiple blocks of trials and plot the results of each
block as a new point in ROC space. Then we can compare multiple performances in a single graph.

Try this out below. If you have the time, increase the trials on each block to get a more reliable
measure. Try a few different levels of coherence, from very low to very high:

<sdt-example-human>
  <detectable-control run pause reset coherence=".5" trials="10" duration="1000"></detectable-control>
  <rdk-task coherence=".5" trials="10" duration="1000" wait="1000" iti="1000"></rdk-task>
  <detectable-response interactive trial feedback="outcome"></detectable-response>
  <detectable-table numeric summary="stimulusRates accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0">
    </detectable-table>
  <roc-space point="all" iso-d="all" iso-c="all" history far=".5" hr=".5"></roc-space>
  <sdt-model threshold bias distributions sensitivity color="outcome" d="0" c="0"></sdt-model>
</sdt-example-human>

Your particular results may vary due to a wide variety of factors, but, in general, we find that as
we vary difficulty from harder to easier, the resulting points in ROC space shift from being nearer
to the diagonal to being nearer to the upper-left corner.

Indeed, as we already observed way back on the page about [:page[Iso-Bias Curves]](bias.html), SDT
predicts that if our manipulation of difficulty truly impacts :key[sensitivity] and not :key[bias],
then the points should all fall on the same :key[iso-bias curve], and would ideally look like this:

<sdt-example-multiple variable="d" values="0 1 2 3 4">
  <sdt-model interactive threshold bias></sdt-model>
  <roc-space point="rest" iso-d="rest" iso-c="first"></roc-space>
</sdt-example-multiple>

:::ui

Choose the :key[Bias] by moving the threshold in the model diagram. A range of values for
the :key[Sensitivity] have been selected to illustrate how manipulating it looks in ROC space.

:::

While the exact position of the points depends on the :key[bias], in general, the pattern of points
shifting toward the top left corner of ROC space holds. And even if :key[bias] varies a bit from
condition to condition, that pattern will remain.

We've pushed around :key[sensitivity] by manipulating the coherence of the dots, but the same
pattern should hold for other manipulations of difficulty. For example, you could leave the
coherence constant and adjust the duration of the stimulus instead. Feel free to give it a try
above!
