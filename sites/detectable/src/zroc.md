---
title: '<span class="math-var">z</span>ROC Space: Transforming ROC space'
layout: page
script: page
---

## A <span class="math-var">z</span>-transformed ROC space

In each of our graphs of ROC space up till now, :key[hit rate] and :key[false alarm rate] lie on a
nice, evenly spaced grid, while our :key[iso-sensitivity curve] and :key[iso-bias curve] have been,
well, beautifully curvaceous. This is great for working with the rates, but it makes things messy
and non-linear when working with the curves. What if there was a simple way to reverse this
situation?

Well, it turns out there is! The key is to work in the native units of :key[<span
class="math-var">d′</span>] and :key[<span class="math-var">c</span>], instead of in units of
:key[hit rate] and :key[false alarm rate]. And the key to *that* is revealed by a quick look at our
SDT model to remind ourselves that the proportions of outcomes are determined by the areas under the
distributions defined by the model parameters. Which brings us to the :term[<span
class="math-var">z</span>-transformation] (i.e. the inverse cumulative distribution function of the
normal distribution, <span class="math-greek">Φ</span><sup class="exp">−1</sup>).

Another path to the same conclusion is to note that while :key[<span class="math-var">d′</span>] and
:key[<span class="math-var">c</span>] have a complex non-linear relationship with :key[hit rate] and
:key[false alarm rate], they have simple additive relationships with their <span
class="math-var">z</span>-transformations:

<sdt-equation-hrfar2d></sdt-equation-hrfar2d>

<sdt-equation-hrfar2c></sdt-equation-hrfar2c>

As a result, if we use <span class="math-var">z</span>-transformed :key[hit rate] and :key[false
alarm rate], our :key[iso-sensitivity curve] and :key[iso-bias curve] are straight lines in what is
called :term[<span class="math-var">z</span>ROC space]:

<sdt-example-interactive>
  <detectable-control z-roc></detectable-control>
  <roc-space interactive z-roc point="all" iso-d="all" iso-c="all"></roc-space>
  <detectable-table numeric interactive summary="stimulusRates accuracy" hits="80" misses="20"
    false-alarms="10" correct-rejections="90"></detectable-table>
  <sdt-model interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
</sdt-example-interactive>

:::ui

This example is set up for model exploration. You can flip back and forth between ROC space and
<span class="math-var">z</span>ROC space with the :switch[<span class="math-var">z</span>ROC-ROC]
switch.

:::

Play with it for a little while and see that changing the values of :key[<span
class="math-var">d′</span>] and :key[<span class="math-var">c</span>] move the :key[iso-sensitivity
curve] and :key[iso-bias curve] around (i.e. their <span class="math-var">y</span>-intercept
changes), but their slope remains the same (at one and negative one respectively).

## Iso-contours in <span class="math-var">z</span>ROC space

Another way to visualize the effect of the transformation is to look at the iso-bias,
iso-sensitivity, and iso-accuracy contours in <span class="math-var">z</span>ROC space as compared
to ROC space:

<sdt-example-interactive>
  <detectable-control z-roc></detectable-control>
  <roc-space z-roc contour="sensitivity" point="none" iso-d="none" iso-c="none"></roc-space>
  <roc-space z-roc contour="bias" point="none" iso-d="none" iso-c="none"></roc-space>
  <roc-space z-roc contour="accuracy" point="none" iso-d="none" iso-c="none"></roc-space>
</sdt-example-interactive>

The utility of <span class="math-var">z</span>ROC space will be become clearer on the next page when
we discuss distributions with unequal variance. So let us proceed.
