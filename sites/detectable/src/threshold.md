---
title: 'Threshold &amp; Bias: Drawing a Line in the Sand'
layout: page
script: index
---

## Making a decision

On the previous page, we explored the first step in signal detection according to SDT: taking a
measurement. Now it is time to consider the second step: making a :term[decision]. Our model will
take the :key[Evidence] and use it to decide whether it is going to respond :key[Present] or
:key[Absent].

According to SDT, a :term[threshold] is set, such that on each trial, the :key[Evidence] is either
greater than or less than that threshold:

<sdt-example-model>
  <sdt-control run pause reset trials="10" duration="500"></sdt-control>
  <rdk-task count="100" coherence=".5" trials="10" duration="500" wait="500" iti="500"></rdk-task>
  <sdt-model histogram threshold color="none" d="2.5" c="0"></sdt-model>
</sdt-example-model>

## Responding present or absent

A simple rule is then used to decide on a response: If the evidence is below the threshold, then
this is a :key[Respond Absent] trial, and if the evidence is above the threshold, then this is a
:key[Respond Present] trial:

<sdt-example-model>
  <sdt-control run pause reset trials="10" duration="500"></sdt-control>
  <rdk-task count="100" coherence=".5" trials="10" duration="500" wait="500" iti="500"></rdk-task>
  <sdt-model histogram threshold color="response" d="2.5" c="0"></sdt-model>
  <sdt-response feedback="none"></sdt-response>
</sdt-example-model>

Here, it is the *model* that is responding to the stimulus on each trial, based on whether the
:key[Evidence] is above or below the threshold, instead of you our intrepid participant.

## A higher or lower threshold

In the examples above, the threshold was set at the neutral point, where the evidence is equally
suggestive of signal and noise. But SDT doesn't require this.

The threshold can be set higher, so that stronger evidence must be measured for the model to
:key[Respond Present] (and thus :key[Respond Absent] for a wider range of values). In this case, we
say that the model is biased towards responding :key[Absent]:

<sdt-example-model>
  <sdt-control run pause reset trials="10" duration="500"></sdt-control>
  <rdk-task count="100" coherence=".5" trials="10" duration="500" wait="500" iti="500"></rdk-task>
  <sdt-model histogram threshold color="response" d="2.5" c="2"></sdt-model>
  <sdt-response feedback="none"></sdt-response>
</sdt-example-model>

Or the threshold can be set lower, so that even with weak evidence, the model will :key[Respond
Present] (and thus the evidence must be lower to :key[Respond Absent]). In this case, we say that
the model is biased towards responding :key[Present]:

<sdt-example-model>
  <sdt-control run pause reset trials="10" duration="500"></sdt-control>
  <rdk-task count="100" coherence=".5" trials="10" duration="500" wait="500" iti="500"></rdk-task>
  <sdt-model histogram threshold color="response" d="2.5" c="-2"></sdt-model>
  <sdt-response feedback="none"></sdt-response>
</sdt-example-model>

## Parameterizing our threshold with bias, <span class="math-var">c</span>

The location of our threshold determines the :key[Bias] (sometimes called the :term[response bias])
of our model, which we will parameterize with :key[c]. It lies along a continuum from negative
infinity to infinity. Zero indicates a neutral bias. Positive numbers indicate a :term[conservative
bias]. The larger the positive bias, the more evidence necessary before a :key[Present] response is
given. Negative numbers indicate a :term[liberal bias]. The larger the negative bias, the less
evidence necessary to respond :key[Present].

In this example, the distance from the origin, or *neutral point*, to the threshold is explicitly
labeled with :key[c]. You can drag the threshold line or its handle to adjust its position. If there
are evidence measurements for individual trials, they will change between :key[Respond Present] and
:key[Respond Absent] trials based on the location of the threshold, allowing you to see how the
:key[Bias] determines the tendency to make more :key[Present] or :key[Absent] responses:

<sdt-example-model>
  <sdt-control run pause reset trials="10" duration="500"></sdt-control>
  <rdk-task count="100" coherence=".5" trials="10" duration="500" wait="500" iti="500"></rdk-task>
  <sdt-model interactive threshold bias histogram color="response" d="2.5" c="1"></sdt-model>
  <sdt-response feedback="none"></sdt-response>
</sdt-example-model>

If you are wondering why :key[Bias] is represented with the symbol :key[c], perhaps it is because
the threshold is often referred to as a <span class="math-var">c</span>riterion in the work on SDT.
However, this reason was not explicitly stated in the original paper introducing :key[c]
:cite[@Ingham1970].

Note that when :key[c] is zero, the threshold is precisely where the :key[Noise Distribution] and
the :key[Signal + Noise Distribution] intersect. In other words, the model will respond
:key[Present] whenever it is more likely that this is a :key[Signal Present] trial, and it will
respond :key[Absent] whenever it is more likely that this is a :key[Signal Absent] trial. This is
not coincidental, and hints at the strong link between SDT and decision making based on maximum
likelihood and the likelihood ratio :cite[@Creelman2015; @Peterson1954]. In fact, the early work on
SDT usually expressed the bias, as <span class="math-var">β</span>, in terms of the likelihood ratio
of signal and noise :cite[@Peterson1954; @Tanner1954]. It was only later that :key[c] was introduced
and suggested as a better measure of response bias for most purposes :cite[@Ingham1970;
@Macmillan1990; @Stanislaw1999].

<!--

## Perspectives on the relationship between model and performance

<sdt-example-interactive>
  <sdt-control color="outcome"></sdt-control>
  <sdt-table numeric interactive summary="stimulusRates responseRates accuracy"
    hits="80" misses="20" false-alarms="10" correct-rejections="90"></sdt-table>
  <sdt-model interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
</sdt-example-interactive>

## New syntax for bracketed spans and fenced divs

:::{.outer}
This is a [test]{}.
This is a [real test]{.test}!

  :::{.inner2}
  This is a [bad test] {you know?}

  Let's get [real]{b .potato .banana #ice-cream stuff=good llama=moo}.
  :::

:::

-->
