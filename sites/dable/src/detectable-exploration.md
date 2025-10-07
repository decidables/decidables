---
title: '<span class="dec-name"><span class="math-var">d′</span>ete<span class="math-var">c</span>table</span>: Exploration'
layout: page
script: page
style: detectable-page
---

<sdt-example-interactive hits="80" misses="20" false-alarms="10" correct-rejections="90">
  <detectable-table numeric interactive summary="stimulusRates accuracy"></detectable-table>
  <roc-space interactive point="all" iso-d="all" iso-c="all"></roc-space>
  <sdt-model interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
</sdt-example-interactive>

:::ui

The table of outcomes lists the count of each trial outcome: :key[Hits], :key[Misses], :key[False
Alarms], and :key[Correct Rejections]. These counts are further summarized with :key[Hit Rate],
:key[False Alarm rate], and overall :key[Accuracy]. You can modify any value, and any dependent
values will update too.

In ROC space, performance is plotted as :key[Hit Rate] versus :key[False Alarm Rate]. All of the
points with the same :key[Sensitivity] (:key[<span class="math-var">d′</span>]) are illustrated with
an :key[Iso-Sensitivity Curve]. All of the points with the same :key[Bias] (:key[<span
class="math-var">c</span>]) are illustrated with an :key[Iso-Bias Curve]. Moving the data point will
cause the iso-curves to update as well.

The visual representation of the SDT model shows :key[Sensitivity] as the distance, :key[<span
class="math-var">d′</span>], between the distributions. And it shows :key[Bias] as the location,
:key[<span class="math-var">c</span>], of the threshold. The threshold divides the :key[Signal +
Noise Distribution] into :key[Hit] and :key[Miss] areas and divides the :key[Noise Distribution]
into :key[Correct Rejection] and :key[False Alarm] areas. Moving the distributions or the threshold
adjusts :key[<span class="math-var">d′</span>] or :key[<span class="math-var">c</span>],
respectively.

Across all three figures, the table of outcomes, ROC space, and the SDT model, adjustments to the
performance or the model will be reflected immediately in the other figures as well.

:::
