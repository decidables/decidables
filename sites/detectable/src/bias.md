---
title: 'Iso-Bias Curves: Visualizing Decision Criteria'
layout: page
script: page
---

## Calculating bias from hit rate and false alarm rate

On the previous page, we explored how :key[sensitivity] (:key[d′]) can be determined from :key[hit
rate] and :key[false alarm rate]. Now we will consider how to do the same for :key[Bias] (:key[c]).

<sdt-example-interactive order="trm">
  <sdt-model interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
</sdt-example-interactive>

Try moving the threshold around, and observe what effect this has on the proportion of :key[hits]
for the signal-plus-noise distribution and the proportion of :key[false alarms] for the
noise distribution. In general, as the threshold moves to the left, and a more liberal bias,
we increase the :key[hits] and :key[false alarms]. As the threshold moves to the right, and a more
conservative bias, we decrease both :key[hits] and :key[false alarms]. This helps develop our
intuition that :key[c] is related to the sum of the :key[hit rate] and the :key[false alarm rate],
using the inverse cumulative distribution function of the normal distribution, <span
class="math-greek">Φ</span><sup class="exp">−1</sup>:

<sdt-equation-hrfar2c></sdt-equation-hrfar2c>

<sdt-equation-hrfar2c numeric interactive hit-rate=".5" false-alarm-rate=".5">
  </sdt-equation-hrfar2c>

## Iso-bias curves

As we did for :key[sensitivity], using the equation above we can now determine the :key[bias] for
each point in ROC space. In the graph below, intensity of color (saturation) is used to represent
:key[c] along a continuum. In order to help us see the resulting pattern, iso-bias contours have
been added to show sets of points with the same values of :key[c]:

<sdt-example-interactive>
  <roc-space contour="bias" point="none" iso-d="none" iso-c="none"></roc-space>
</sdt-example-interactive>

As with :key[sensitivity], :key[bias] has a non-linear relationship with :key[hit rate] and
:key[false alarm rate]. Furthermore, any :key[c] can occur at any :key[hit rate] and any :key[false
alarm rate], and vice versa.

## Visualizing the relationship between <span class="math-var">c</span>, HR, and FAR

Similar to what we did :key[sensitivity], we can plot a single :term[iso-bias curve] through our data
point. This curve shows all of the combinations of :key[hit rate] and :key[false alarm rate] that
have the same :key[bias] as our actual data.

You can change the performance data by altering values in the outcome table, adjusting the locations
of the distributions or threshold in the model, or by directly moving the data point in ROC space.
All of the other representations of performance change simultaneously:

<sdt-example-interactive>
  <detectable-table interactive numeric summary="stimulusRates accuracy"
    hits="80" misses="20" false-alarms="10" correct-rejections="90"></detectable-table>
  <roc-space interactive point="all" iso-d="none" iso-c="all"></roc-space>
  <sdt-model interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
</sdt-example-interactive>

:::ui

The values are linked between the *live* table, ROC space, and model. As the :key[Hit Rate] or
:key[False Alarm Rate] are changed, :key[d′] and :key[c] will also change, and thus the
:ui[Iso-Bias Curve] will adjust as well.

:::

The resulting similarities and differences with :key[sensitivity] are instructive. The iso-bias
curve always spans from the top left to the bottom right corner of ROC space. As a result, neither
:key[hit rate] alone nor :key[false alarm rate] alone tells you anything about :key[bias] --- you
need both! Furthermore, altering either the :key[hit rate] or the :key[false alarm rate] necessarily
changes the :key[bias].

However, there is one way to manipulate the performance in just such a way that the results change
while keeping :key[bias] constant. This happens when we manipulate :key[sensitivity], which is
independent from :key[bias]. Adjust the value of :key[d′] by moving the distributions in our
model and observe that our data point shifts smoothly along the iso-bias curve in ROC space, but the
curve itself remains stationary.
