---
title: "Iso-Bias Curves: Visualizing Decision Criteria"
layout: page
script: index
---

## Calculating bias from hit rate and false alarm rate

On the previous page, we explored how `Sensitivity` (`d′`) can be determined from `Hit Rate` and
`False Alarm Rate`. Now we will consider how to do the same for `Bias` (`c`).

<sdt-example-interactive order="trm">
  <sdt-model interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
</sdt-example-interactive>

Try dragging the threshold around, and observe what effect this has on the proportion of `Hits` for
the `Signal + Noise Distribution` and the proportion of `False Alarms` for the `Noise Distribution`. In general, as the threshold moves to the left, and a more liberal bias, we increase the `Hits` and `False Alarms`. As the threshold moves to the right, and a more conservative bias, we decrease both `Hits` and `False Alarms`. This helps develop our intuition that `c` is related to the sum of the `Hit Rate` and the `False Alarm Rate`, using the inverse cumulative distribution function of the normal distribution, <span class="math-greek">Φ</span><sup class="exp">−1</sup>:

<sdt-equation-hrfar2c></sdt-equation-hrfar2c>

<sdt-equation-hrfar2c numeric interactive hit-rate=".5" false-alarm-rate=".5">
  </sdt-equation-hrfar2c>

## Iso-bias curves

As we did for `Sensitivity`, using the equation above we can now determine the `Bias` for each point
in ROC space. In the ROC space below, intensity of color (saturation) is used to represent `c` along
a continuum. In order to help us see the resulting pattern, contour lines have been added to show
sets of points with the same values of `c`. These are called **iso-bias curves**:

<sdt-example-interactive>
  <roc-space contour="bias" point="none" iso-d="none" iso-c="none"></roc-space>
</sdt-example-interactive>

As with `Sensitivity`, `Bias` has a non-linear relationship with `Hit Rate` and `False Alarm Rate`.
Furthermore, any `c` can occur at any `Hit Rate`, and vice versa. And the same for
`False Alarm Rate`.

## Visualizing the relationship between <span class="math-var">c</span>, HR, and FAR

Similar to what we did `Sensitivity`, we can plot a single `Iso-Bias Curve` through our data
point. This `Iso-Bias Curve` shows all of the combinations of `Hit Rate` and
`False Alarm Rate` that have the same `Bias` as our actual data.

You can change the performance data by altering values in the outcome table, adjusting the locations
of the distributions or threshold in the model, or by directly moving the data point in ROC space.
All of the other representations of performance change simultaneously:

<sdt-example-interactive>
  <sdt-table interactive numeric display="accuracy"
    hits="80" misses="20" false-alarms="10" correct-rejections="90"></sdt-table>
  <roc-space interactive point="all" iso-d="none" iso-c="all"></roc-space>
  <sdt-model interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
</sdt-example-interactive>

The resulting similarities and differences with `Sensitivity` are instructive. The `Iso-Bias Curve`
always spans from the top left to the bottom right corner of ROC space. As a result, `Hit Rate`
alone or `False Alarm Rate` alone does not tell you anything about `Bias` - you need both! Likewise,
altering only the `Hit Rate` or only the `False Alarm Rate` necessarily changes the `Bias`. However,
there is one way to manipulate the performance in just such a way that the results change while
keeping `Bias` constant. This happens when we manipulate `Sensitivity`, which, by definition, is
independent from `Bias`. Adjusting the value of `d′` by moving the distributions in our model causes
our data point to shift smoothly along the `Iso-Bias Curve` in ROC space.
