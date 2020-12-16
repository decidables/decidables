---
title: "Measurement & Sensitivity: Towards a Theory of Performance"
layout: page
script: index
---

## Measuring stimuli

So far, we have focused on observing and summarizing human performance on a signal detection task.
We are now going to shift our focus to understanding a :term[theory] of how people perform signal
detection tasks. As we go, we will develop a :term[model] that applies this theory to our particular
random dot kinematogram task. (Much more could be said about the distinction, or lack thereof,
between models and theories, but we will leave that for another day, or maybe another explorable
explanation?).

According to SDT, the first step that must be performed in signal detection is to take a
:term[measurement]. To continue our earlier examples, this might be a measurement of how much what
we hear sounds like our friend's voice, or how much what we see looks like a distant boat on the
sea, or how much what we smell has the aroma of a truffle. In human signal detection, this
measurement is being carried out by the sensory and perceptual mechanisms of the participant's mind
and brain. The result of this measurement is the :term[evidence] that a signal is present,
represented as a single scalar value between negative infinity and infinity, with the :term[neutral
point], where the evidence is equally suggestive of signal and noise, at the origin.

To help us visualize this measurement process, we can run trials of our RDK experiment, and instead
of having you, dear reader, perform the measurement, we can construct a model that will simulate the
measurement instead. When you :ui[Run] the task below, on each trial, our model will take a
measurement of the stimulus, and this will arrive on the graph as a box representing the
:key[Evidence]. The strength of the evidence is plotted along the horizontal x-axis. If another
measurement is taken for which the evidence falls into the same *bin*, then that box will stack up
on top of the one or ones already there. As a result, we end up with a histogram of the evidence
values, with the count of occurrences on the vertical y-axis.

<sdt-example-model>
  <sdt-control run pause reset trials="10" duration="1000"></sdt-control>
  <rdk-task count="100" coherence=".5" trials="10" duration="1000" wait="1000" iti="1000"></rdk-task>
  <sdt-model histogram color="none" d="0" c="0"></sdt-model>
</sdt-example-model>

## Presence or absence of signal

In the example above, the evidence looks the same on every trial, except for its value. This
emphasizes the fact that our model does not know whether each trial is a signal trial or a noise
trial, or indeed anything else other than the value of the :key[Evidence]!

However, we, as the experimenters, are privy to more information. We know whether each trial was a
signal or noise trial. So we can color the measurement from each trial based on whether it was a
:key[Signal Present] or :key[Signal Absent] trial.

<sdt-example-model>
  <sdt-control run pause reset trials="20" duration="750"></sdt-control>
  <rdk-task count="100" coherence=".5" trials="20" duration="750" wait="750" iti="750"></rdk-task>
  <sdt-model histogram color="stimulus" d="2" c="0"></sdt-model>
</sdt-example-model>

After we run the model for 20 trials, we can observe where the :key[Signal Present] or :key[Signal
Absent] measurements are falling on our evidence scale. Unless you were particularly unlucky, you
can probably see that the signal trials are clustering on the upper end of the scale, while the
noise trials are clustering toward the lower end of the scale...

## Distributions!

This leads us to a key fact about the measurements our model is making. In SDT, the evidence on
noise trials is drawn from one :term[distribution], the :key[Noise Distribution], while on signal
trials the evidence is drawn from a second distribution, the :key[Signal + Noise Distribution]. The
two distributions are both normal (Gaussian) with equal variance and with equal and opposite means
around the neutral point. (We reconsider the equal variance assumption later on once we have worked
through equal variance SDT).

Try running the example below. The evidence measured on each trial will appear on the graph, with
the underlying distributions also shown. If we ran the simulation for enough trials, the histogram
formed by the trial-by-trial data would match the underlying probability distributions. (Note that
the y-axis scale for the probability distributions is on the left side of the graph, while the
y-axis scale for the histogram is on the right.)

<sdt-example-model>
  <sdt-control run pause reset trials="20" duration="500"></sdt-control>
  <rdk-task count="100" coherence=".5" trials="20" duration="500" wait="500" iti="500"></rdk-task>
  <sdt-model distributions histogram color="stimulus" d="2" c="0"></sdt-model>
</sdt-example-model>

## Distributions near or far

We can now get a sense of how the proximity of the two distributions determines how similar the
observations on signal and noise trials are to each other. When the :key[Noise Distribution] and the
:key[Signal + Noise Distribution] have similar means, we tend to make similar measurements of
evidence on :key[Signal Absent] and :key[Signal Present] trials:

<sdt-example-model>
  <sdt-control run pause reset trials="20" duration="500"></sdt-control>
  <rdk-task count="100" coherence=".5" trials="20" duration="500" wait="500" iti="500"></rdk-task>
  <sdt-model distributions histogram color="stimulus" d=".5" c="0"></sdt-model>
</sdt-example-model>

In other words, we are relatively insensitive to the differences between trial types. On the other
hand, when the :key[Noise Distribution] and the :key[Signal + Noise Distribution] have very
different means, we tend to make distinct measurements of evidence on :key[Signal Absent] and
:key[Signal Present] trials:

<sdt-example-model>
  <sdt-control run pause reset trials="20" duration="500"></sdt-control>
  <rdk-task count="100" coherence=".5" trials="20" duration="500" wait="500" iti="500"></rdk-task>
  <sdt-model distributions histogram color="stimulus" d="5" c="0"></sdt-model>
</sdt-example-model>

On these trials, we are much more sensitive to the different between signal and noise. (Note that
evidence measurements that would be off the horizontal scale of the graph are stacked in the bin at
the corresponding end of the scale.)

## Parameterizing distributions with sensitivity, <span class="math-var">d'</span>

The distance between the :key[Noise Distribution] and the :key[Signal + Noise Distribution] is the
:key[Sensitivity] or :key[d′]. It lies along a continuum, from negative infinity to infinity. Zero
indicates identical means, and no sensitivity. Positive numbers indicate stronger evidence
measurements for signal trials than for noise trials. The larger the positive number, the more
sensitive we are to the difference between signal and noise. On the other hand, negative numbers
would indicate stronger evidence for noise trials than signal trials. Since we are talking about
evidence of a *signal*, it would be unusual to have a measurement device that returns more evidence
on noise trials than signal trials, but the theory allows for this possibility. Examples of
situations where this could occur would be if the participant is confused about the task (i.e. they
have signal and noise mixed up), or if the participant is actively responding incorrectly (i.e. they
are intentionally misinterpreting evidence of a signal as evidence of noise).

In this example, the distance between the signal and noise distributions is explicitly labelled with
:key[d′]. You can drag either distribution left or right to change the distance between them. If
there are evidence measurements for individual trials, they will move along with the distributions
they were drawn from, allowing you to see how the :key[Sensitivity] determines the degree of overlap
between the :key[Noise Distribution] and the :key[Signal + Noise Distribution]:

<sdt-example-model>
  <sdt-control run pause reset trials="20" duration="500"></sdt-control>
  <rdk-task count="100" coherence=".5" trials="20" duration="500" wait="500" iti="500"></rdk-task>
  <sdt-model interactive distributions sensitivity histogram color="stimulus" d="1.5" c="0"></sdt-model>
</sdt-example-model>

Perhaps you are wondering why :key[Sensitivity] is represented with the symbol :key[d′]. In the
early work leading to SDT, for mathematical convenience, a parameter <span class="math-var">d</span>
was used that was equal to the square of the difference between the means of the distributions
:cite[@Peterson1954]. This parameter was most likely named <span class="math-var">d</span> because
it represented <span class="math-var">d</span>etectability. As SDT was developed, it became clear
that the square root of <span class="math-var">d</span> was a more useful form, since it expressed
<span class="math-var">d</span>etectability directly in the units of the probability distributions
for signal and noise. Since "square root of <span class="math-var">d</span>" was a mouthful, it was
replaced with the symbol :key[d′], pronounced 'dee-prime' :cite[@Tanner1954; @Creelman2015].
