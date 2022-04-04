---
title: 'Model Exploration: Sensitivity, Bias, Outcomes, and Rates'
layout: page
script: page
---

## Exploring, fitting, & predicting

We are now ready to put together everything we have learned about Signal Detection Theory into
integrated views of theory and performance.

On this page, we will *explore* the relationship between model parameters and performance
measures. On the next page, we will *fit* your performance to the model. And then, on the following
page, we will *predict* performance from model parameters.

## Visualizing the relationship between model and performance

This exploration incorporates three key visualizations. The table of outcomes summarizes
performance. ROC space shows the relationship between behavior and theory. And the model diagram
illustrates an explanation of that performance in terms of SDT. Note that every possible pattern of
performance can be represented in ROC space in terms of the behavioral measures of :key[hit rate]
and :key[false alarm rate], and can also be explained by a unique combination of the model
parameters :key[sensitivity] and :key[bias]. However the relationship between the behavioral
measures and the model parameters is non-linear and surprisingly unintuitive, as illustrated by the
:key[iso-sensitivity curve] and the :key[iso-bias curve]. Hopefully exploring their relationship
through direct manipulation will help you gain a deeper understanding!

<sdt-example-interactive>
  <detectable-table numeric interactive summary="stimulusRates accuracy"
    hits="80" misses="20" false-alarms="10" correct-rejections="90"></detectable-table>
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
