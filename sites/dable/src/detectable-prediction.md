---
title: '<span class="dec-name"><span class="math-var">d′</span>ete<span class="math-var">c</span>table</span>: Prediction'
layout: page
script: page
style: detectable-page
---

<sdt-example-model trials="10" duration="500" coherence=".5" color="all" d="1" c=".5">
  <detectable-control trials duration coherence run pause reset></detectable-control>
  <rdk-task></rdk-task>
  <sdt-model interactive threshold bias distributions sensitivity histogram></sdt-model>
  <detectable-response trial feedback="outcome"></detectable-response>
  <detectable-table numeric summary="stimulusRates accuracy"></detectable-table>
  <roc-space point="all" iso-d="all" iso-c="all"></roc-space>
</sdt-example-model>

:::ui

You can select how many :slider[Trials] the model will perform, the :slider[Duration] of the
stimulus on each trial, and the proportion of dots that exhibit :slider[Coherence] when the signal
is present. You can :button[Run] the task, temporarily :button[Pause] it, or totally :button[Reset]
it.

Each trial will begin with a fixation, :prompt[+], then a stimulus, and finally a question mark,
:prompt[?]. The model will respond based on it's measurement of evidence, represented by a box
moving across the model diagram. The model diagram shows the selected value for the model's
:key[Sensitivity] as the distance, :key[<span class="math-var">d′</span>], between the
distributions. And it shows the selected value for the model's :key[Bias] as the location,
:key[<span class="math-var">c</span>], of the threshold. The threshold divides the :key[Signal +
Noise Distribution] into regions of :key[Hits] and :key[Misses] and divides the :key[Noise
Distribution] into regions of :key[Correct Rejections] and :key[False Alarms]. 

The model will decide whether the signal is :key[Present] or :key[Absent] based on the accumulation
of evidence, and respond by clicking :button[Present] to indicate a :key['Present'] response or
:button[Absent] to indicate an :key['Absent'] response.

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
