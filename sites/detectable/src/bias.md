---
title: "Iso-Bias Curves: Visualizing Decision Criteria"
layout: page
script: index
---

## Calculating bias from hit rate and false alarm rate

On the previous page, we explored how :key[Sensitivity] (:key[d′]) can be determined from :key[Hit
Rate] and :key[False Alarm Rate]. Now we will consider how to do the same for :key[Bias] (:key[c]).

<sdt-example-interactive order="trm">
  <sdt-model interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
</sdt-example-interactive>

Try dragging the threshold around, and observe what effect this has on the proportion of :key[Hits]
for the :key[Signal + Noise Distribution] and the proportion of :key[False Alarms] for the
:key[Noise Distribution]. In general, as the threshold moves to the left, and a more liberal bias,
we increase the :key[Hits] and :key[False Alarms]. As the threshold moves to the right, and a more
conservative bias, we decrease both :key[Hits] and :key[False Alarms]. This helps develop our
intuition that :key[c] is related to the sum of the :key[Hit Rate] and the :key[False Alarm Rate],
using the inverse cumulative distribution function of the normal distribution, <span
class="math-greek">Φ</span><sup class="exp">−1</sup>:

<sdt-equation-hrfar2c></sdt-equation-hrfar2c>

<sdt-equation-hrfar2c numeric interactive hit-rate=".5" false-alarm-rate=".5">
  </sdt-equation-hrfar2c>

## Iso-bias curves

As we did for :key[Sensitivity], using the equation above we can now determine the :key[Bias] for
each point in ROC space. In the ROC space below, intensity of color (saturation) is used to
represent :key[c] along a continuum. In order to help us see the resulting pattern, contour lines
have been added to show sets of points with the same values of :key[c]. These are called
:term[iso-bias curves]:

<sdt-example-interactive>
  <roc-space contour="bias" point="none" iso-d="none" iso-c="none"></roc-space>
</sdt-example-interactive>

As with :key[Sensitivity], :key[Bias] has a non-linear relationship with :key[Hit Rate] and
:key[False Alarm Rate]. Furthermore, any :key[c] can occur at any :key[Hit Rate], and vice versa.
And the same for :key[False Alarm Rate].

## Visualizing the relationship between <span class="math-var">c</span>, HR, and FAR

Similar to what we did :key[Sensitivity], we can plot a single :key[Iso-Bias Curve] through our data
point. This :key[Iso-Bias Curve] shows all of the combinations of :key[Hit Rate] and
:key[False Alarm Rate] that have the same :key[Bias] as our actual data.

You can change the performance data by altering values in the outcome table, adjusting the locations
of the distributions or threshold in the model, or by directly moving the data point in ROC space.
All of the other representations of performance change simultaneously:

<sdt-example-interactive>
  <sdt-table interactive numeric summary="stimulusRates accuracy"
    hits="80" misses="20" false-alarms="10" correct-rejections="90"></sdt-table>
  <roc-space interactive point="all" iso-d="none" iso-c="all"></roc-space>
  <sdt-model interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
</sdt-example-interactive>

The resulting similarities and differences with :key[Sensitivity] are instructive. The :key[Iso-Bias
Curve] always spans from the top left to the bottom right corner of ROC space. As a result, :key[Hit
Rate] alone or :key[False Alarm Rate] alone does not tell you anything about :key[Bias] - you need
both! Likewise, altering only the :key[Hit Rate] or only the :key[False Alarm Rate] necessarily
changes the :key[Bias]. However, there is one way to manipulate the performance in just such a way
that the results change while keeping :key[Bias] constant. This happens when we manipulate
:key[Sensitivity], which, by definition, is independent from :key[Bias]. Adjusting the value of
:key[d′] by moving the distributions in our model causes our data point to shift smoothly along the
:key[Iso-Bias Curve] in ROC space.
