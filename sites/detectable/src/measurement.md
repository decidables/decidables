---
title: 'Measurement &amp; Sensitivity: Towards a Theory of Performance'
layout: page
script: page
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
and brain. The result of this measurement is the :term[evidence] that a signal is :key[present],
represented as a single scalar value between negative infinity and infinity, with the :term[neutral
point], where the evidence is equally suggestive of signal :key[present] and :key[absent], at the
origin.

To help us visualize this measurement process, we can run trials of our RDK experiment, and instead
of having you, dear reader, perform the measurement, we can construct a model that will simulate the
measurement instead. Each trial will be displayed on the graph below, with the strength of evidence
plotted in *bins* along the horizontal x-axis and the count of trials stacked on the vertical
y-axis, resulting in a :term[histogram] of evidence across trials.

<sdt-example-model>
  <detectable-control run pause reset trials="10" duration="1000"></detectable-control>
  <rdk-task count="100" coherence=".5" trials="10" duration="1000" wait="1000" iti="1000"></rdk-task>
  <sdt-model histogram color="none" d="0" c="0"></sdt-model>
</sdt-example-model>

:::ui

When you :ui[Run] the task, on each trial, our model will take a measurement of the stimulus, and
this will arrive on the graph as a box representing the evidence on that trial.

Note that shortening the :ui[Duration] will speed up the simulation, but won't otherwise alter the
results.

:::

## Presence or absence of signal

In the example above, the evidence is visually represented in the same neutral gray on every trial.
This emphasizes the fact that our model does not know anything about the trial other than the value
it has measured for the evidence!

However, we, as the experimenters, are privy to more information. We know whether each trial was
*actually* a :key[signal] or :key[noise] trial. So we can color each trial accordingly.

<sdt-example-model>
  <detectable-control run pause reset trials="20" duration="750"></detectable-control>
  <rdk-task count="100" coherence=".5" trials="20" duration="750" wait="750" iti="750"></rdk-task>
  <sdt-model histogram color="stimulus" d="2" c="0"></sdt-model>
</sdt-example-model>

:::ui

The color of the box representing the measurement for each trial now indicates whether it was a
signal :key[Present] or :key[Absent] trial.

:::

Run the model for 20 or more trials and observe where the measurements are falling on our evidence
scale. Unless you are particularly unlucky, you will probably notice a difference between
:key[signal] and :key[noise] trials.

## Distributions!

This leads us to a key fact about the measurements our model is making. In SDT, the evidence on each
trial is drawn from a :term[distribution]. On :key[noise] trials it is drawn from a :key[noise
distribution], and on :key[signal] trials it is drawn from a :key[signal-plus-noise distribution].
The two distributions are both :term[normal] (:term[Gaussian]) with equal variance and with equal
and opposite means around the neutral point. (We reconsider the equal variance assumption later in
the advanced topics page on [:page[Unequal Variance]](unequal.html).)

Why is it signal *plus noise* and not just *signal*? Because, there is always noise mixed in with
the signal, whether explicitly, as in our stimuli when coherence is less than one, or implicitly due
to background noise, noisy neurons, etc...

Try running the example below. The evidence measured on each trial will appear on the graph, with
the underlying distributions also shown. If we ran the simulation for enough trials, the histogram
formed by the trial-by-trial data would match the underlying probability distributions. 

<sdt-example-model>
  <detectable-control run pause reset trials="20" duration="500"></detectable-control>
  <rdk-task count="100" coherence=".5" trials="20" duration="500" wait="500" iti="500"></rdk-task>
  <sdt-model distributions histogram color="stimulus" d="2" c="0"></sdt-model>
</sdt-example-model>

:::ui

The box representing the measurement for each trial indicates whether the signal is :key[Present]
or :key[Absent]. The curves represent the :key[Signal + Noise Distribution] and the
:key[Noise Distribution].

Note that the y-axis scale for the probability distributions is on the left side of the graph, while
the y-axis scale for the histogram is on the right.

:::

## Distributions near or far

We can now get a sense of how the proximity of the two distributions determines how similar or
different the observations on :key[signal] and :key[noise] trials are. When the distributions have
similar means, we tend to make similar measurements of evidence whether the signal is :key[absent]
or :key[present]:

<sdt-example-model>
  <detectable-control run pause reset trials="20" duration="500"></detectable-control>
  <rdk-task count="100" coherence=".5" trials="20" duration="500" wait="500" iti="500"></rdk-task>
  <sdt-model distributions histogram color="stimulus" d=".5" c="0"></sdt-model>
</sdt-example-model>

In other words, when the distributions are highly overlapping, we have low :term[sensitivity] to
the differences between trial types.

On the other hand, when the distributions have very different means, we tend to make distinct
measurements of evidence on :key[absent] and :key[present] trials:

<sdt-example-model>
  <detectable-control run pause reset trials="20" duration="500"></detectable-control>
  <rdk-task count="100" coherence=".5" trials="20" duration="500" wait="500" iti="500"></rdk-task>
  <sdt-model distributions histogram color="stimulus" d="5" c="0"></sdt-model>
</sdt-example-model>

:::ui

Note that evidence measurements that would be off the horizontal scale of the graph are stacked in
the bin at the corresponding end of the scale.

:::

On these trials, we are much more sensitive to the difference between :key[signal] and :key[noise].

## Parameterizing distributions with sensitivity, <span class="math-var">d′</span>

The distance between the :key[noise distribution] and the :key[signal-plus-noise distribution] is
the :key[sensitivity], :key[d′]. It lies along a continuum, from negative infinity to infinity. Zero
indicates identical means and no sensitivity. Positive numbers indicate stronger evidence
measurements for :key[signal] trials than for :key[noise] trials. The larger the positive number,
the more sensitive we are to the difference.

On the other hand, negative numbers would indicate stronger evidence for :key[noise] trials than
:key[signal] trials. Since we are talking about evidence in favor of a :key[signal], it would be
unusual to have a measurement device that returns more evidence when the signal is :key[absent], but
the theory allows for this possibility. Examples of situations where this could occur would be if
the participant is confused about the task or if they are intentionally responding incorrectly.

Explore how the :key[sensitivity] relates to the relative evidence on :key[signal] versus
:key[noise] trials and the distance between the distributions:

<sdt-example-model>
  <detectable-control run pause reset trials="20" duration="500"></detectable-control>
  <rdk-task count="100" coherence=".5" trials="20" duration="500" wait="500" iti="500"></rdk-task>
  <sdt-model interactive distributions sensitivity histogram color="stimulus" d="1.5" c="0"></sdt-model>
</sdt-example-model>

:::ui

The distance between the :key[Signal+Noise Distribution] and the :key[Noise Distribution] is
explicitly labelled with :key[d′]. This is a *live* graph, so you can drag either distribution left
or right to change the distance between them. If there are evidence measurements for individual
trials, they will move along with the distributions they were drawn from, allowing you to see how
the :key[Sensitivity] determines the degree of overlap between the distributions. (If you've never
seen a dancing histogram before, you are in for a treat!)

:::

Perhaps you are wondering why :key[sensitivity] is represented with the symbol :key[d′]. In the
early work leading to SDT, for mathematical convenience, a parameter <span class="math-var">d</span>
was used that was equal to the square of the difference between the means of the distributions
:cite[@Peterson1954]. This parameter was most likely named <span class="math-var">d</span> because
it represented <span class="math-var">d</span>etectability. As SDT was developed, it became clear
that the square root of <span class="math-var">d</span> was a more useful form, since it expressed
<span class="math-var">d</span>etectability directly in the units of the probability distributions.
Since "square root of <span class="math-var">d</span>" was a mouthful, it was replaced with the
symbol :key[d′], pronounced 'dee-prime' :cite[@Tanner1954; @Creelman2015].
