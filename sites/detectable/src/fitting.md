---
title: 'Model Fitting: Fitting Human Performance to Signal Detection Theory'
layout: page
script: page
---

## From human performance to model parameters

On the exploration page, you were able to explore SDT through the relationship between data and
model, but what if we observe human performance and we want to *fit* the model to this actual human
data? This moves us from model exploration to model fitting, which you can do below.

You can select how many :ui[Trials] to perform, the :ui[Duration] of the stimulus on each trial, and
the percentage of dots that exhibit :ui[Coherence] when the signal is present. When you are ready,
you can :ui[Run] the task. At any time, you can temporarily :ui[Pause], or permanently :ui[Reset]
the task.

Each trial will begin with a fixation, :ui[+], then a stimulus, and finally a question mark, :ui[?].
Decide whether you think this is a :key[Signal Present] or :key[Signal Absent] trial, and during the
stimulus or question mark, respond by clicking :ui[Present] or :ui[Absent].

Based on the stimulus and your response (or lack there of), you will then receive feedback
indicating whether this trial resulted in a :key[Hit], :key[Miss], :key[False Alarm], :key[Correct
Rejection], or :key[No Response].

The table of outcomes summarizes your :key[Hits], :key[Misses], :key[False Alarms], and :key[Correct
Rejections], along with your :key[Hit Rate], :key[False Alarm Rate], and overall :key[Accuracy].

In ROC space, your performance is plotted as :key[Hit Rate] versus :key[False Alarm Rate]. All of
the points with the same :key[Sensitivity] (:key[d′]) are illustrated with an :key[Iso-Sensitivity
Curve]. All of the points with the same :key[Bias] (:key[c]) are illustrated with an :key[Iso-Bias
Curve].

The visual representation of the SDT model shows your calculated :key[Sensitivity] as the distance,
:key[d′], between the noise and signal plus noise distributions. And it shows your calculated
:key[Bias] as the location, :key[c], of the threshold. The threshold divides the signal plus noise
distribution into :key[Hit] and :key[Miss] areas and divides the noise distribution into
:key[Correct Rejection] and :key[False Alarm] areas.

As you perform trials of the task, the table of outcomes, ROC space, and the SDT model will change
to reflect your current aggregate performance up until that point in the task.

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

The table of outcomes summarizes performance. The model diagram illustrates an explanation of that
performance in terms of SDT. And ROC space shows the relationship between behavior and theory. By
observing how these different representations present and interpret your data, you can gain a deeper
appreciation for the relationship between performance, data and theory.
