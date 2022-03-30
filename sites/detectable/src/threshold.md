---
title: 'Threshold &amp; Bias: Drawing a Line in the Sand'
layout: page
script: page
---

## Making a decision

On the previous page, we explored the first step in signal detection according to SDT: taking a
measurement. Now it is time to consider the second step: making a :term[decision]. Our model will
use the evidence to decide whether it is going to respond :key['present'] or :key['absent'].

According to SDT, a :term[threshold] is set, such that on each trial, the evidence is either greater
than or less than that threshold. A simple rule is then used to decide on a response: if the
evidence is below the threshold respond :key['absent'], and if the evidence is
above the threshold respond :key['present'].

Here, it is the *model* that is responding to the stimulus on each trial based on the evidence and
the threshold, instead of you, our intrepid participant.

<sdt-example-model>
  <detectable-control run pause reset trials="10" duration="500"></detectable-control>
  <rdk-task count="100" coherence=".5" trials="10" duration="500" wait="500" iti="500"></rdk-task>
  <sdt-model histogram threshold color="response" d="2.5" c="0"></sdt-model>
  <detectable-response feedback="none"></detectable-response>
</sdt-example-model>

:::ui

The box representing the measurement for each trial indicates whether it was a :ui['Present' Response]
or :ui['Absent' Response] trial. The vertical bar represents the threshold.

:::

## A higher or lower threshold

In the example above, the threshold was set at the neutral point, where the evidence is equally
suggestive of :key[signal] and :key[noise]. But SDT doesn't require this.

The threshold can be set *higher*, so that stronger evidence must be measured for the model to
respond :key['present']. In this case, the model will respond :key['absent'] for a wider range of
values, and we say that the model is biased towards responding :key['absent']:

<sdt-example-model>
  <detectable-control run pause reset trials="10" duration="500"></detectable-control>
  <rdk-task count="100" coherence=".5" trials="10" duration="500" wait="500" iti="500"></rdk-task>
  <sdt-model histogram threshold color="response" d="2.5" c="2"></sdt-model>
  <detectable-response feedback="none"></detectable-response>
</sdt-example-model>

Or the threshold can be set *lower*, so that even with weak evidence the model will respond
:key['present']. In this case, the model will respond :key['absent'] for a narrower range of values,
and we say that the model is biased towards responding :key['present']:

<sdt-example-model>
  <detectable-control run pause reset trials="10" duration="500"></detectable-control>
  <rdk-task count="100" coherence=".5" trials="10" duration="500" wait="500" iti="500"></rdk-task>
  <sdt-model histogram threshold color="response" d="2.5" c="-2"></sdt-model>
  <detectable-response feedback="none"></detectable-response>
</sdt-example-model>

## Parameterizing our threshold with bias, <span class="math-var">c</span>

The location of our threshold determines the :key[bias], :key[c], also called the :term[response
bias], of our model. It lies along a continuum from negative infinity to infinity. Zero indicates a
neutral bias. Positive numbers indicate a :term[conservative bias]. The larger the positive bias,
the *more* evidence necessary before a :key['present'] response is given. Negative numbers indicate a
:term[liberal bias]. The larger the negative bias, the *less* evidence necessary to respond
:key['present'].

Explore how the :key[bias] determines how little or how much evidence is necessary to respond
:key['present'] versus :key['absent']:

<sdt-example-model>
  <detectable-control run pause reset trials="10" duration="500"></detectable-control>
  <rdk-task count="100" coherence=".5" trials="10" duration="500" wait="500" iti="500"></rdk-task>
  <sdt-model interactive threshold bias histogram color="response" d="2.5" c="1"></sdt-model>
  <detectable-response feedback="none"></detectable-response>
</sdt-example-model>

:::ui

The distance from the origin, or neutral point, to the threshold is explicitly labeled with :key[c].
This is a *live* graph, so you can drag the threshold line or its handle to adjust its position. If
there are evidence measurements for individual trials, they will change between :ui['Present'
Response] and :ui['Absent' Response] trials based on the location of the threshold, allowing you to
see how the :key[Bias] determines the tendency to make more :key['present'] or :key['absent']
responses.

:::

If you are wondering why :key[bias] is represented with the symbol :key[c], perhaps it is because
the threshold is often referred to as a <span class="math-var">c</span>riterion in the work on SDT.
However, this reason was not explicitly stated in the original paper introducing :key[c]
:cite[@Ingham1970].

Note that when :key[c] is zero, the threshold is precisely where the two distributions intersect. In
other words, the model will respond :key['present'] whenever it is more likely that the signal is
indeed :key[present], and it will respond :key['absent'] whenever it is more likely that the signal
is indeed :key['absent']. This is not coincidental, and hints at the strong link between SDT and
decision making based on maximum likelihood and the likelihood ratio :cite[@Creelman2015;
@Peterson1954]. In fact, the early work on SDT usually expressed the bias as <span
class="math-var">β</span>, in terms of the likelihood ratio of signal and noise :cite[@Peterson1954;
@Tanner1954]. It was only later that :key[c] was introduced and suggested as a better measure of
response bias for most purposes :cite[@Ingham1970; @Macmillan1990; @Stanislaw1999].
