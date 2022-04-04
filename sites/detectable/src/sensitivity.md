---
title: 'Iso-Sensitivity Curves: Visualizing Detector Performance'
layout: page
script: page
---

## Calculating sensitivity from hit rate and false alarm rate

It is helpful to think further about the relationship between our behavioral measures and our model
parameters. Each point in ROC space describes a particular pattern of performance in terms of
:key[hit rate] and :key[false alarm rate], and that particular pattern of performance can be
accounted for by SDT using a certain combination of :key[sensitivity] and :key[bias]. We've already
seen how to calculate the :key[hit rate] and :key[false alarm rate] from :key[<span
class="math-var">d′</span>] and :key[<span class="math-var">c</span>], but we can go the other
direction as well, calculating the model parameters from the performance measures. Here we will
focus on :key[sensitivity], and then on the next page we will focus on :key[bias].

<sdt-example-interactive order="trm">
  <sdt-model interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
</sdt-example-interactive>

If you experiment with the model above, you will discover that in order for the proportions of
:key[hits] and :key[false alarms] to be equal, the distributions must be in the *same* location. If
you then move the signal distribution to the right and :key[sensitivity] increases, there will be
more :key[hits] and fewer :key[false alarms]. Indeed, using the inverse cumulative distribution
function of the normal distribution, <span class="math-greek">Φ</span><sup class="exp">−1</sup>,
:key[<span class="math-var">d′</span>] can be determined from the difference between :key[hit rate]
and :key[false alarm rate]:

<sdt-equation-hrfar2d></sdt-equation-hrfar2d>

<sdt-equation-hrfar2d numeric interactive hit-rate=".5" false-alarm-rate=".5">
  </sdt-equation-hrfar2d>

## Iso-sensitivity contours

Using the equation above, we can now determine the :key[sensitivity] for each point in ROC space. In
the graph below, intensity of color (saturation) is used to represent :key[<span
class="math-var">d′</span>] along a continuum. In order to help us see the resulting pattern,
iso-sensitivity contours have been added to show sets of points with the same values of :key[<span
class="math-var">d′</span>]:

<sdt-example-interactive>
  <roc-space contour="sensitivity" point="none" iso-d="none" iso-c="none"></roc-space>
</sdt-example-interactive>

What is immediately clear is that :key[sensitivity] has a non-linear relationship with :key[hit
rate] and :key[false alarm rate]. Furthermore, any :key[<span class="math-var">d′</span>] can occur
at any :key[hit rate] and any :key[false alarm rate], and vice versa.

## Visualizing the relationship between <span class="math-var">d′</span>, HR, and FAR

Showing the :key[sensitivity] for every location in ROC space is instructive, but when we are
focused on performance, a more typical approach is to plot a single :term[iso-sensitivity curve]
through our data point. This curve shows all of the combinations of :key[hit rate] and :key[false
alarm rate] that have the same :key[sensitivity] as our actual data.

Try manipulating performance by changing values in the outcome table, adjusting the locations of the
distributions or threshold in the model, or by directly moving the data point in ROC space. All of
the other representations of performance will change simultaneously. Observe how the
:key[iso-sensitivity curve] responds:

<sdt-example-interactive order="trm">
  <detectable-table interactive numeric summary="stimulusRates accuracy" hits="80" misses="20"
    false-alarms="10" correct-rejections="90"></detectable-table>
  <roc-space interactive point="all" iso-d="all" iso-c="none"></roc-space>
  <sdt-model interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
</sdt-example-interactive>

:::ui

The values are linked between the *live* table, ROC space, and model. As the :key[Hit Rate] or
:key[False Alarm Rate] are changed, :key[<span class="math-var">d′</span>] and :key[<span
class="math-var">c</span>] will also change, and thus the :key[Iso-Sensitivity Curve] will adjust as
well.

:::

Note that the :key[iso-sensitivity curve] always spans from the bottom left to the upper right
corner of ROC space. As a result, neither :key[hit rate] alone nor :key[false alarm rate] alone
tells you anything about :key[sensitivity] --- you need both! Furthermore, altering either the
:key[hit rate] or the :key[false alarm rate] necessarily changes the :key[sensitivity].

However, there is one way to manipulate the performance in just such a way that the results change
while keeping :key[sensitivity] constant. This happens when we manipulate :key[bias], which is
independent from :key[sensitivity]. Adjust the value of :key[<span class="math-var">c</span>] by
changing the threshold in our model and observe that our data point shifts smoothly along the
:key[iso-sensitivity curve] in ROC space, but the curve itself remains stationary.
