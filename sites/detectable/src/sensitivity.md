---
title: 'Iso-Sensitivity Curves: Visualizing Detector Performance'
layout: page
script: page
---

## Calculating sensitivity from hit rate and false alarm rate

It is helpful to think further about the relationship between our behavioral measures and our model
parameters. Each point in ROC space describes a particular pattern of performance in terms of
:key[Hit Rate] and :key[False Alarm Rate], and that particular pattern of performance can be
accounted for by SDT using a certain combination of :key[d′] and :key[c]. We've already seen how to
calculate the :key[Hit Rate] and :key[False Alarm Rate] from :key[d′] and :key[c], but we can go the
other direction as well, calculating the model parameters from the performance measures. Here we
will focus on sensitivity, and then on the next page we will focus on bias.

<sdt-example-interactive order="trm">
  <sdt-model interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
</sdt-example-interactive>

When we experiment with the model, we discover that in order for the proportions of :key[Hits] and
:key[False Alarms] to be equal, the distributions must be in the same location. As the signal
distribution moves to the right and :key[Sensitivity] increases, there will tend to be more
:key[Hits] and fewer :key[False Alarms]. Indeed, using the inverse cumulative distribution function
of the normal distribution, <span class="math-greek">Φ</span><sup class="exp">−1</sup>, :key[d′] can
be determined from the difference in :key[Hit Rate] and :key[False Alarm Rate]:

<sdt-equation-hrfar2d></sdt-equation-hrfar2d>

<sdt-equation-hrfar2d numeric interactive hit-rate=".5" false-alarm-rate=".5">
  </sdt-equation-hrfar2d>

## Iso-sensitivity curves

Using the equation above, we can now determine the :key[Sensitivity] for each point in ROC space. In
the ROC space below, intensity of color (saturation) is used to represent :key[d′] along a
continuum. In order to help us see the resulting pattern, contour lines have been added to show sets
of points with the same values of :key[d′]. These are called :term[iso-sensitivity curves]:

<sdt-example-interactive>
  <roc-space contour="sensitivity" point="none" iso-d="none" iso-c="none"></roc-space>
</sdt-example-interactive>

What is immediately clear is that :key[Sensitivity] has a non-linear relationship with :key[Hit
Rate] and :key[False Alarm Rate]. Furthermore, any :key[d′] can occur at any :key[Hit Rate], and
vice versa. And the same for :key[False Alarm Rate].

## Visualizing the relationship between <span class="math-var">d′</span>, HR, and FAR

Showing the :key[Sensitivity] for every location in ROC space is instructive, but when we are
focused on performance, a more typical approach is to plot a single :key[Iso-Sensitivity Curve]
through our data point. This :key[Iso-Sensitivity Curve] shows all of the combinations of :key[Hit
Rate] and :key[False Alarm Rate] that have the same :key[Sensitivity] as our actual data.

Try manipulating performance by changing values in the outcome table, adjusting the locations of the
distributions or threshold in the model, or by directly moving the data point in ROC space. All of
the other representations of performance change simultaneously:

<sdt-example-interactive order="trm">
  <detectable-table interactive numeric summary="stimulusRates accuracy" hits="80" misses="20"
    false-alarms="10" correct-rejections="90"></detectable-table>
  <roc-space interactive point="all" iso-d="all" iso-c="none"></roc-space>
  <sdt-model interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
</sdt-example-interactive>

Note that the :key[Iso-Sensitivity Curve] always spans from the bottom left to the upper right
corner of ROC space. As a result, :key[Hit Rate] alone or :key[False Alarm Rate] alone does not tell
you anything about :key[Sensitivity] - you need both! Likewise, altering only the :key[Hit Rate] or
only the :key[False Alarm Rate] necessarily changes the :key[Sensitivity]. However, there is one way
to manipulate the performance in just such a way that the results change while keeping
:key[Sensitivity] constant. This happens when we manipulate :key[Bias], which, by definition, is
independent from :key[Sensitivity]. Adjusting the value of :key[c] by moving the threshold in our
model causes our data point to shift smoothly along the :key[Iso-Sensitivity Curve] in ROC space.
