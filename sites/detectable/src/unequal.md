---
title: 'Unequal Variance: SDT Assumptions Revisited'
layout: page
script: page
---

## Relaxing the equal variance assumption

Back when we first discussed [:page[Measurement &amp; Sensitivity]](measurement.html), we mentioned
that the :key[noise distribution] and the :key[signal-plus-noise distribution] are assumed to have
equal variance. It turns out that this assumption is often violated in real world scenarios where we
would like to apply SDT. For example, studies of recognition memory consistently find evidence of
unequal variance :cite[@ratcliff_testing_1992; @glanzer_slope_1999]. This is a problem for equal
variance SDT because it can't account for these observed patterns of performance.

Fortunately, SDT can be generalized to account for distributions with unequal variance. First, we
will quantify the relative :term[variance] for the :key[signal-plus-noise distribution] as compared
to the :key[noise distribution] as :term[<span class="math-var">σ</span>]. When the :key[variance],
:key[<span class="math-var">σ</span>], is equal to one then the distributions have equal variance.
When it is smaller than one, the :key[signal-plus-noise distribution] has a smaller variance, and
when it is larger than one, the :key[signal-plus-noise distribution] has a larger variance.

You can explore this here:

<sdt-example-interactive>
  <detectable-control z-roc></detectable-control>
  <detectable-table numeric interactive summary="stimulusRates accuracy"
    hits="80" misses="20" false-alarms="10" correct-rejections="90"></detectable-table>
  <roc-space z-roc interactive point="all" iso-d="all" iso-c="all"></roc-space>
  <sdt-model interactive unequal threshold distributions bias sensitivity variance color="outcome"></sdt-model>
</sdt-example-interactive>

:::ui

Our new parameter :key[Variance], :key[<span class="math-var">σ</span>], has been added to the model
diagram to indicate it's relationship to the width of the :key[Signal-plus-Noise Distribution]. You
can now drag that distribution up and down to adjust the :key[Variance]. Note that when you pull it
*up*, this makes the distribution taller but *thinner* and thus :key[<span
class="math-var">σ</span>] is *smaller*, and when you drag it *down*, this makes the distribution
shorter but *wider* and thus :key[<span class="math-var">σ</span>] is *larger*.

As in previous model explorations, the table of outcomes, ROC space, and the model diagram are
linked so they all update simultaneously.

:::

You will notice that this example was set up to show <span class="math-var">z</span>ROC space by
default. Observe what happens to the :key[iso-sensitivity curve] as you adjust the variance... It
changes slope! Granted, you can still see that it changes, somehow, in non-transformed ROC space,
but <span class="math-var">z</span>ROC space turns that complex shape-shift into a simple change in
slope. Indeed, in the literature, unequal variance is usually determined by testing if the slope of
an empirically derived <span class="math-var">z</span>ROC curve is not equal to one
:cite[@ratcliff_testing_1992; @glanzer_slope_1999].

## Calculating unequal variance <span class="math-var">d′</span> and <span class="math-var">c</span>

As suggested by the diagram of the SDT model, we still have a formal mathematical relationship
between performance and model parameters, it's just a bit more complicated now, since it has to
account for the inequality of variance.

Here is the equation for :key[sensitivity], taking :key[variance] into account:

<sdt-equation-hrfar2d unequal></sdt-equation-hrfar2d>

<sdt-equation-hrfar2d unequal numeric interactive hit-rate=".5" false-alarm-rate=".5" s="2">
  </sdt-equation-hrfar2d>

And here is the equation for :key[bias], taking :key[variance] into account:

<sdt-equation-hrfar2c unequal></sdt-equation-hrfar2c>

<sdt-equation-hrfar2c unequal numeric interactive hit-rate=".5" false-alarm-rate=".5">
  </sdt-equation-hrfar2c>

## Iso-contours with unequal variance

You can also get a sense of the effects of unequal variance on the relationship of :key[sensitivity]
and :key[bias] to :key[hit rate] and :key[false alarm rate] by looking at how the iso-sensitivity
and iso-bias contours change as the :key[variance] is manipulated:

<sdt-example-interactive>
  <detectable-control z-roc></detectable-control>
  <sdt-model unequal threshold distributions variance color="outcome"></sdt-model>
  <roc-space z-roc contour="sensitivity" point="none" iso-d="none" iso-c="none"></roc-space>
  <roc-space z-roc contour="bias" point="none" iso-d="none" iso-c="none"></roc-space>
</sdt-example-interactive>

:::ui

In this example, you can only change the :key[Variance] in the SDT model, to make it easier to focus
on its effects on the iso-contours.

:::

## Calculating hit rate and false alarm rate with unequal variance

To make model predictions with unequal variance SDT, we will need to calculate :key[hit rate],
taking :key[variance] into account:

<sdt-equation-dc2hr unequal></sdt-equation-dc2hr>

<sdt-equation-dc2hr unequal numeric interactive d="1" c="1"></sdt-equation-dc2hr>

And we will need to calculate :key[false alarm rate], taking :key[variance] into account:

<sdt-equation-dc2far unequal></sdt-equation-dc2far>

<sdt-equation-dc2far unequal numeric interactive d="1" c="1"></sdt-equation-dc2far>

## Spurious correlation when unequal variance data analyzed with equal variance model

As a final note, let's observe what can happen if our data is produced by a mechanism that follows
unequal variance SDT, but we erroneously analyze it using the equal variance model.

Imagine we have a number of conditions and for each condition we calculate :key[sensitivity] and
:key[bias] using equal variance SDT. According to our calculations, :key[<span
class="math-var">d′</span>] and :key[<span class="math-var">c</span>] are both different for each
condition, and curiously, as shown in the example below, they are correlated with each other. We
might be tempted to consider what additional process may be acting in our participants to cause this
linkage of :key[sensitivity] and :key[bias]. But, in fact, this seeming relationship is spurious.
When unequal variance is taken into account, all of the conditions have the same :key[sensitivity]
and only the :key[bias] is varying between conditions.

<sdt-example-unequal>
  <detectable-control z-roc></detectable-control>
  <sdt-model interactive unequal distributions sensitivity variance color="stimulus" s="1.5"></sdt-model>
  <roc-space z-roc contour="sensitivity" point="rest" iso-d="rest" iso-c="rest"></roc-space>
</sdt-example-unequal>

:::ui

In ROC space, the single shared :key[iso-sensitivity curve] and each individual :key[iso-bias curve]
show the "true" values based on the unequal variance model shown in the SDT model diagram. On the
other hand, the *iso-sensitivity contours* are from the equal variance model. The spurious values
for sensitivity from the equal variance model are different for each point, whereas the correct
values all fall on the same curve.

:::

If nothing else, this last example demonstrates the importance of understanding and being aware of
the assumptions of a model, so that you can keep your eye out for characteristic patterns suggestive
of failures of those assumptions.
