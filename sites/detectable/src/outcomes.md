---
title: 'Outcomes: Comparing Stimulus and Response'
layout: page
script: page
---

## Was I right or wrong?

On each trial, when we make a response, we might wonder about the relationship between our response
and the actual state of affairs --- in other words, we are interested in the :term[outcome]. If the
stimulus and response match, we are :term[correct]. If the stimulus and response don't match, we are
in :term[error]. And sometimes that may be all that really matters - was my answer :key[correct] or
was it an :key[error]?

Try a few trials of the task:

<sdt-example-human>
  <detectable-control trials="5" run pause reset duration="1000" coherence=".5"></detectable-control>
  <rdk-task count="100" coherence=".5" trials="5" probability=".5"
    duration="1000" wait="1000" iti="1000"></rdk-task>
  <detectable-response interactive trial feedback="accuracy"></detectable-response>
</sdt-example-human>

As you have no doubt noticed, if you have given it a try, you receive feedback. 

:::ui

The feedback is presented to the right of the response buttons. At the top, you are shown the
current trial and the total trials. Below that, for the moment, the feedback is either
:key[Correct], :key[Error], or if you don't respond in time, :key[No Response].

:::

## How was I right or wrong?

If we think about it a bit more, we realize that there are actually two ways we can be correct, and
two ways we can be in error, leading to four possible outcomes: :term[hit], :term[miss],
:term[correct rejection], or :term[false alarm].

- A :key[hit], also called a :term[true positive], is when the signal is actually present, and we
  *correctly* respond 'present'
- A :key[miss], also called a :term[false negative] or :term[type II error], is when the signal is
  actually present, and we *erroneously* respond 'absent'
- A :key[false alarm], also called a :term[false positive] or :term[type I error], is when the
  signal is actually absent, and we *erroneously* respond 'present'
- A :key[correct rejection], also called a :term[true negative], is when the signal is actually
  absent, and we *correctly* respond 'absent'

We have two possible states of the world (signal :key[present] or :key[absent]) and two possible
responses (:key['present'] or :key['absent']), leading to a nice two by two table of possible
outcomes:

<sdt-example-interactive>
  <detectable-table></detectable-table>
</sdt-example-interactive>

Try a few more trials of the task, and this time the feedback will inform you of which of the four
possible outcomes occurred:

<sdt-example-human>
  <detectable-control trials="5" run pause reset duration="1000" coherence=".5"></detectable-control>
  <rdk-task count="100" coherence=".5" trials="5" probability=".5"
    duration="1000" wait="1000" iti="1000"></rdk-task>
  <detectable-response interactive trial feedback="outcome"></detectable-response>
</sdt-example-human>

:::ui

Now our feedback is :key[Hit], :key[Miss], :key[False Alarm], :key[Correct Rejection] or if you
don't respond in time, :key[No Response].

:::

Now that we know how to classify the outcome of individual trials, we might wonder how we can
aggregate and summarize these results...
