---
title: 'Model Exploration: Sensitivity, Bias, Outcomes, and Rates'
layout: page
script: page
---

## Visualizing the relationship between performance and model

We are now ready to put everything we have learned about Signal Detection Theory together into an
integrated and explorable view of performance and theory.

The table of outcomes lists the count of each trial outcome: :key[Hits], :key[Misses], :key[False
Alarms], and :key[Correct Rejections]. These counts are further summarized with :key[Hit Rate],
:key[False Alarm Rate], and overall :key[Accuracy]. You can modify any value, and any dependent
values will update to maintain consistency.

In ROC space, performance is plotted as :key[Hit Rate] versus :key[False Alarm Rate]. All of the
points with the same :key[Sensitivity] (:key[d′]) are illustrated with an :key[Iso-Sensitivity
Curve]. All of the points with the same :key[Bias] (:key[c]) are illustrated with an :key[Iso-Bias
Curve]. Moving the data point will cause the isocontours to update as well.

The visual representation of the SDT model shows :key[Sensitivity] as the distance, :key[d′],
between the noise and signal plus noise distributions. And it shows :key[Bias] as the location,
:key[c], of the threshold. The threshold divides the signal plus noise distribution into :key[Hit]
and :key[Miss] areas and divides the noise distribution into :key[Correct Rejection] and :key[False
Alarm] areas. Moving the distributions or the threshold adjusts :key[d′] or :key[c], respectively.

Across all three figures, the table of outcomes, ROC space, and the SDT model, adjustments to the
performance or the model will be reflected immediately in the other figures as well.

<sdt-example-interactive>
  <detectable-table numeric interactive summary="stimulusRates accuracy"
    hits="80" misses="20" false-alarms="10" correct-rejections="90"></detectable-table>
  <roc-space interactive point="all" iso-d="all" iso-c="all"></roc-space>
  <sdt-model interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
</sdt-example-interactive>

The table of outcomes summarizes performance. The model diagram illustrates an explanation of that
performance in terms of SDT. And ROC space shows the relationship between behavior and theory. Note
that every possible pattern of performance can be represented in ROC space in terms of the
behavioral measures, :key[Hit Rate] and :key[False Alarm Rate], and can also be explained by a
unique combination of model parameters, :key[Sensitivity] and :key[Bias]. However the relationship
between the behavioral measures and the model parameters is non-linear and surprisingly unintuitive,
as illustrated by the :key[Iso-Sensitivity Curve] and the :key[Iso-Bias Curve]. Hopefully exploring
their relationship through direct manipulation will help you gain a deeper understanding!
