---
title: '<span class="dec-name"><span class="math-var">d′</span>ete<span class="math-var">c</span>table</span>: Fitting'
layout: page
script: page
style: detectable-page
---

<sdt-example-human trials="10" duration="1000" coherence=".5">
  <detectable-control trials duration coherence run pause reset></detectable-control>
  <rdk-task></rdk-task>
  <detectable-response interactive trial feedback="outcome"></detectable-response>
  <detectable-table numeric summary="stimulusRates accuracy"></detectable-table>
  <roc-space point="all" iso-d="all" iso-c="all"></roc-space>
  <sdt-model threshold bias distributions sensitivity histogram color="outcome"></sdt-model>
</sdt-example-human>

:::ui

You can select how many :slider[Trials] to perform, the :slider[Duration] of the stimulus on each
trial, and the proportion of dots that exhibit :slider[Coherence] when the signal is present. When
you are ready, you can :button[Run] the task. At any time, you can temporarily :button[Pause], or
permanently :button[Reset] the task.

Each trial will begin with a fixation, :prompt[+], then a stimulus, and finally a question mark,
:prompt[?]. Decide whether you think the signal is :key[Present] or :key[Absent], and during the
stimulus or question mark, respond by clicking :button[Present] to indicate a :key['Present']
response or :button[Absent] to indicate an :key['Absent'] response.

Based on the stimulus and your response (or lack there of), you will then receive feedback
indicating whether this trial resulted in a :key[Hit], :key[Miss], :key[False Alarm], :key[Correct
Rejection], or :key[No Response].

The table of outcomes summarizes your :key[Hits], :key[Misses], :key[False Alarms], and :key[Correct
Rejections], along with your :key[Hit Rate], :key[False Alarm Rate], and overall :key[Accuracy].

In ROC space, your performance is plotted as :key[Hit Rate] versus :key[False Alarm Rate]. All of
the points with the same :key[Sensitivity] (:key[<span class="math-var">d′</span>]) are illustrated
with an :key[Iso-Sensitivity Curve]. All of the points with the same :key[Bias] (:key[<span
class="math-var">c</span>]) are illustrated with an :key[Iso-Bias Curve].

The visual representation of the SDT model shows your calculated :key[Sensitivity] as the distance,
:key[<span class="math-var">d′</span>], between the distributions. And it shows your calculated
:key[Bias] as the location, :key[<span class="math-var">c</span>], of the threshold. The threshold
divides the :key[Signal + Noise Distribution] into regions of :key[Hits] and :key[Misses] and
divides the :key[Noise Distribution] into regions of :key[Correct Rejections] and :key[False
Alarms].

:::
