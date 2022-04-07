---
title: 'Model Fitting: Fitting Human Performance to Signal Detection Theory'
layout: page
script: page
---

## From human performance to model parameters

On the previous page, you were able to explore SDT through the relationship between data and
model, but what if we observe human performance and we want to fit the model to this actual human
data? This moves us from model *exploration* to model *fitting*, which you can do below.

The table of outcomes summarizes performance. ROC space shows the relationship between behavior and
theory. And the model diagram illustrates an explanation of that performance in terms of SDT. As you
perform trials of the task, the table of outcomes, ROC space, and the SDT model will change to
reflect your current aggregate performance up until that point in the task. By observing how these
different representations present and interpret your data, you can gain a deeper appreciation for
the relationship between performance, data and theory.

<sdt-example-human>
  <detectable-control coherence=".5" trials="10" duration="1000" run pause reset></detectable-control>
  <rdk-task coherence=".5" trials="10" duration="1000" wait="1000" iti="1000"></rdk-task>
  <detectable-response interactive trial feedback="outcome"></detectable-response>
  <detectable-table numeric summary="stimulusRates accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0">
    </detectable-table>
  <roc-space point="all" iso-d="all" iso-c="all" far=".5" hr=".5"></roc-space>
  <sdt-model threshold bias distributions sensitivity histogram color="outcome" d="0" c="0">
    </sdt-model>
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
