---
title: "Threshold & Bias: Drawing a Line in the Sand"
layout: page
script: index
---

## Making a decision

On the previous page, we explored the first step in signal detection according to SDT: taking a
measurement. Now it is time to consider the second step: making a **decision**. Our model will take
the `Evidence` and use it to decide whether it is going to respond `Present`
or `Absent`.

According to SDT, a **threshold** is set, such that on each trial, the `Evidence` is either greater
than or less than that threshold:

<sdt-example-model>
  <sdt-control run pause reset trials="10"></sdt-control>
  <rdk-task count="100" coherence=".5" trials="10" duration="500" wait="250" iti="250"></rdk-task>
  <sdt-model histogram threshold color="none" d="2.5" c="0"></sdt-model>
</sdt-example-model>

## Responding present or absent

A simple rule is then used to decide on a response: If the evidence is below the threshold, then
this is a `Respond Absent` trial, and if the evidence is above the threshold, then this is a
`Respond Present` trial:

<sdt-example-model>
  <sdt-control run pause reset trials="10"></sdt-control>
  <rdk-task count="100" coherence=".5" trials="10" duration="500" wait="550" iti="250"></rdk-task>
  <sdt-model histogram threshold color="response" d="2.5" c="0"></sdt-model>
  <sdt-response feedback="none"></sdt-response>
</sdt-example-model>

Here, it is the *model* that is responding to the stimulus on each trial, based on whether the
`Evidence` is above or below the threshold, instead of you our intrepid participant.

## A higher or lower threshold

In the examples above, the threshold was set at the neutral point, where the evidence is equally
suggestive of signal and noise. But SDT doesn't require this.

The threshold can be set higher, so that stronger evidence must be measured for the model to
`Respond Present` (and thus `Respond Absent` for a wider range of values). In this case, we say that
the model is biased towards responding `Absent`:

<sdt-example-model>
  <sdt-control run pause reset trials="10"></sdt-control>
  <rdk-task count="100" coherence=".5" trials="10" duration="500" wait="550" iti="250"></rdk-task>
  <sdt-model histogram threshold color="response" d="2.5" c="2"></sdt-model>
  <sdt-response feedback="none"></sdt-response>
</sdt-example-model>

Or the threshold can be set lower, so that even with weak evidence, the model will `Respond Present`
(and thus the evidence must be lower to `Respond Absent`). In this case, we say that the model is
biased towards responding `Present`:

<sdt-example-model>
  <sdt-control run pause reset trials="10"></sdt-control>
  <rdk-task count="100" coherence=".5" trials="10" duration="500" wait="550" iti="250"></rdk-task>
  <sdt-model histogram threshold color="response" d="2.5" c="-2"></sdt-model>
  <sdt-response feedback="none"></sdt-response>
</sdt-example-model>

## Parameterizing our threshold with bias, <span class="math-var">c</span>

The location of our threshold determines the `Bias` (sometimes called the **response bias**) of our
model, which we will parameterize with `c`. It lies along a continuum from negative infinity to
infinity. Zero indicates a neutral bias. Positive numbers indicate a **conservative bias**. The
larger the positive bias, the more evidence necessary before a `Present` response is given. Negative
numbers indicate a **liberal bias**. The larger the negative bias, the less evidence necessary to
respond `Present`.

In this example, the distance from the origin, or *neutral point*, to the threshold is explicitly
labeled with `c`. You can drag the threshold line or its handle to adjust its position. If there are
evidence measurements for individual trials, they will change between `Respond Present` and
`Respond Absent` trials based on the location of the threshold, allowing you to see how the `Bias`
determines the tendency to make more `Present` or `Absent` responses:

<sdt-example-model>
  <sdt-control run pause reset trials="10"></sdt-control>
  <rdk-task count="100" coherence=".5" trials="10" duration="500" wait="550" iti="250"></rdk-task>
  <sdt-model interactive threshold bias histogram color="response" d="2.5" c="1"></sdt-model>
  <sdt-response feedback="none"></sdt-response>
</sdt-example-model>

If you are wondering why `Bias` is represented with the symbol `c`, perhaps it is because the
threshold is often referred to as a <span class="math-var">c</span>riterion in the work on SDT.
However, this reason was not explicitly stated in the original paper introducing `c` [@Ingham1970].

Note that when `c` is zero, the threshold is precisely where the `Noise Distribution` and the
`Signal + Noise Distribution` intersect. In other words, the model will respond `Present` whenever
it is more likely that this is a `Signal Present` trial, and it will respond `Absent` whenever it is
more likely that this is a `Signal Absent` trial. This is not coincidental, and hints at the strong
link between SDT and decision making based on maximum likelihood and the likelihood ratio
[@Creelman2015; @Peterson1954]. In fact, the early work on SDT usually expressed the bias, as <span
class="math-var">β</span>, in terms of the likelihood ratio of signal and noise [@Peterson1954;
@Tanner1954]. It was only later that `c` was introduced and suggested as a better measure of
response bias for most purposes [@Ingham1970; @Macmillan1990; @Stanislaw1999].
