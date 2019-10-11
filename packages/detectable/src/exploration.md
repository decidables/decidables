---
title: "Model Exploration: Sensitivity, Bias, Outcomes, and Rates"
layout: page
script: index
---

## Visualizing the relationship between performance and model

We are now ready to put everything we have learned about Signal Detection Theory together into an
integrated and explorable view of performance and theory.

The table of outcomes lists the count of each trial outcome: `Hits`, `Misses`, `False Alarms`, and
`Correct Rejections`. These counts are further summarized with `Hit Rate`, `False Alarm Rate`, and
overall `Accuracy`. You can modify any value, and any dependent values will update to maintain
consistency.

In ROC space, performance is plotted as `Hit Rate` versus `False Alarm Rate`. All of the points with
the same `Sensitivity` (`d′`) are illustrated with an `Iso-Sensitivity Curve`. All of the points
with the same `Bias` (`c`) are illustrated with an `Iso-Bias Curve`. Moving the data point will
cause the isocontours to update as well.

The visual representation of the SDT model shows `Sensitivity` as the distance, `d′`, between the
noise and signal plus noise distributions. And it shows `Bias` as the location, `c`, of the
threshold. The threshold divides the signal plus noise distribution into `Hit` and `Miss` areas and
divides the noise distribution into `Correct Rejection` and `False Alarm` areas. Moving the
distributions or the threshold adjusts `d′` or `c`, respectively.

Across all three figures, the table of outcomes, ROC space, and the SDT model, adjustments to the
performance or the model will be reflected immediately in the other figures as well.

<sdt-example-interactive>
  <sdt-table numeric interactive display="accuracy"
    hits="80" misses="20" false-alarms="10" correct-rejections="90"></sdt-table>
  <roc-space interactive point="all" iso-d="all" iso-c="all"></roc-space>
  <sdt-model interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
</sdt-example-interactive>
