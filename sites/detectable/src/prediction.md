---
title: 'Model Prediction: Predicting Human Performance with Signal Detection Theory'
layout: page
script: page
---

## From model parameters to predicted performance

We have now explored SDT and we have seen how human data can be fit with the model. If we have model
parameters, either from fitting human data, or derived from theoretical considerations, we may want
to simulate task performance in order to generate predictions. In other words, we can have our model
perform the task *as if* it were a participant.

When you run the task on this page, the model will perform the task based on its parameters. You can
adjust those parameters at any time in the model diagram, and performance (both previous and
subsequent) will be updated accordingly. The table of outcomes will maintain a running count of
aggregate performance. ROC space will show an updating view of the relationship between behavior and
theory. By observing and manipulating these relationships, you can gain a deeper appreciation for
how the model parameters predict performance.

<sdt-example-model>
  <detectable-control run pause reset coherence=".5" trials="10" duration="500"></detectable-control>
  <rdk-task count="100" coherence=".5" trials="10" duration="500" wait="500" iti="500"></rdk-task>
  <sdt-model interactive threshold bias distributions sensitivity histogram
    color="outcome" d="1" c=".5"></sdt-model>
  <detectable-response trial feedback="outcome"></detectable-response>
  <detectable-table numeric summary="stimulusRates accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0">
    </detectable-table>
  <roc-space hr=".5" far=".5" point="all" iso-d="all" iso-c="all"></roc-space>
</sdt-example-model>

:::ui

You can select how many :ui[Trials] the model will perform, the :ui[Duration] of the stimulus on
each trial, and the proportion of dots that exhibit :ui[Coherence] when the signal is present. You
can :ui[Run] the task, temporarily :ui[Pause] it, or totally :ui[Reset] it.

Each trial will begin with a fixation, :ui[+], then a stimulus, and finally a question mark, :ui[?].
The model will respond based on it's measurement of evidence, represented by a box moving across the
model diagram. The model diagram shows the selected value for the model's :key[Sensitivity] as the
distance, :key[<span class="math-var">d′</span>], between the distributions. And it shows the
selected value for the model's :key[Bias] as the location, :key[<span class="math-var">c</span>], of
the threshold. The threshold divides the :key[Signal + Noise Distribution] into regions of
:key[Hits] and :key[Misses] and divides the :key[Noise Distribution] into regions of :key[Correct
Rejections] and :key[False Alarms]. 

The model will decide whether the signal is :key[Present] or :key[Absent] based on the accumulation
of evidence, and respond by clicking :ui[Present] to indicate a :key['Present'] response or
:ui[Absent] to indicate an :key['Absent'] response.

Based on the stimulus and the model's response, you will then see feedback indicating whether this
trial resulted in a :key[Hit], :key[Miss], :key[False Alarm], :key[Correct Rejection], or :key[No
Response].

The table of outcomes summarizes the model's :key[Hits], :key[Misses], :key[False Alarms], and
:key[Correct Rejections], along with it's :key[Hit Rate], :key[False Alarm Rate], and overall
:key[Accuracy].

In ROC space, the model's performance is plotted as :key[Hit Rate] versus :key[False Alarm Rate].
All of the points with the same :key[Sensitivity] (:key[<span class="math-var">d′</span>]) are
illustrated with an :key[Iso-Sensitivity Curve]. All of the points with the same :key[Bias]
(:key[<span class="math-var">c</span>]) are illustrated with an :key[Iso-Bias Curve].

In the model diagram, you can move the distributions or the threshold at any time to alter
:key[<span class="math-var">d′</span>] and :key[<span class="math-var">c</span>], and observe the
effect this has on predicted performance in the model diagram, table of outcomes, and ROC space.

:::
