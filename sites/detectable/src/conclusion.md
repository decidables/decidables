---
title: 'Conclusion'
layout: page
script: page
---

## Wrapping up

You've reached the conclusion of <span class="detectable"><span class="math-var">d′</span>ete<span
class="math-var">c</span>table</span>, an explorable explanation of signal detection theory. In the
bigger picture, SDT is a very simple model of how people make decisions. This is both a strength and
a weakness. It's a strength, because it makes the theory understandable, usable, and general. It's a
weakness, because it glosses over subtlety and nuance, leads to less accurate predictions, and
limits the extent to which the theory can be mapped to underlying brain mechanisms.

## Further topics in signal detection

Where to from here? There are many pathways forward at the intersection of signal detection and
decision making.

### Other measures

On the page about [:page[Unequal Variance]](unequal.html), we saw one way SDT can be modified, but
there are others. For example, alternative measures of :key[sensitivity] and :key[bias] can be used.
For sensitivity, alternatives to :key[<span class="math-var">d′</span>] include <span
class="math-var">A′</span>, <span class="math-var">A<sub>z</sub></span>, and <span
class="math-var">S′</span> :cite[@Stanislaw1999; @balakrishnan_more_1998; @verde_measures_2006]. For
bias, alternatives to :key[<span class="math-var">c</span>] include <span class="math-var">β</span>,
<span class="math-var">B′′</span>, and <span class="math-var">Ω</span> :cite[@Stanislaw1999;
@balakrishnan_more_1998]. Various arguments can be made for each of these measures on theoretical,
statistical, or practical grounds. The use of :key[<span class="math-var">d′</span>] and :key[<span
class="math-var">c</span>] here was driven in no small part by their clear mapping onto the geometry
of the SDT model diagram.

### Alternative distributions

Even with the unequal variance model, we still assumed that the distributions were *normal*, but
this too can be relaxed. We might use an alternative distribution such as the *logistic*, use a
combination of distributions as in finite mixture models, or turn to non-parametric approaches that
avoid committing to a particular distribution :cite[@Macmillan1990; @decarlo_signal_2002]. Pastore
and colleagues :cite[-@pastore_nonparametric_2003] have argued that the normality assumption for SDT
is a lot like that made for many standard tests in inferential statistics, in that it often holds
well enough to be useful.

### Threshold theories

We can go even further afield by considering other theories of signal detection. For example, there
is a whole class of "threshold" theories, including low threshold theory, high threshold theory,
double-high threshold theory, low-high threshold theory, and others :cite[@Macmillan1990;
@Green1966; @krantz_threshold_1969]. A common way to adjudicate between these theories is to look at
the shape of the iso-bias and iso-sensitivity contours they predict in ROC space :cite[e.g.
@Macmillan1990]. In many domains, SDT has been shown to outperform these other models, but that
isn't necessarily always the case, and it is always helpful to have an appreciation for other
possibilities [@krantz_threshold_1969].

### Empirical approaches

Or, we can step away from theories, and focus on analyzing empirical data in ROC space. If we have a
number of experimental conditions where we have held sensitivity constant and varied response bias,
we end up with a collection of points in ROC space that are said to define an ROC curve.
Alternatively, we can use confidence ratings or reaction times to "simulate" multiple thresholds
:cite[@weidemann_assessing_2016]. Either way, we can then calculate the (approximate) area under the
curve (AUC) :cite[@wixted_roc_2017; @wixted_evaluating_2015], and use that as a measure of
sensitivity. 

### The role of value

Another way forward is to consider aspects of the decision process that SDT doesn't fully account
for. One example of this is the role of value and utility. We touched on this on the page about
[:page[Bias & Incentive]](incentive.html), but we only dealt with it qualitatively. Incentive was
presented as a factor that could cause a change in response bias, due to the relative values of
:key[misses] versus :key[false alarms]. This approach can be taken further, by formally modelling
the threshold required to maximize value or utility for a given set of incentives and base rates
:cite[@lynn_utilizing_2014].

### Evidence accumulation

We can expand our view further by noting that SDT treats the measurement of evidence as a single
event, but that in fact, evidence is accumulated over time. This observation brings us to an
entirely new class of models and theories --- the sequential sampling models --- that center on
evidence accumulation processes that unfold over time, including both diffusion/random walk models
and accumulator/race models :cite[@ratcliff_diffusion_2016]. Since these models incorporate time,
they can be used to explore, fit, and predict reaction times as well as responses. Examples of these
approaches include the diffusion decision model and the EZ-diffusion model :cite[@Ratcliff2008; @wagenmakers_ez-diffusion_2007].

### Neural basis

A particularly exciting path forward is to apply the concepts of SDT to understanding the neural
basis of signal detection and decision making. This work brings together SDT along with many of the
ideas discussed above, including the role of value and the process of evidence accumulation, to aid
in the understanding of how individual neurons implement perceptual decision making :cite[@Gold2007;
@zhang_dynamics_1997].

## Onward

If you've enjoyed <span class="detectable"><span class="math-var">d′</span>ete<span
class="math-var">c</span>table</span>, you may be interested in explorable explanations of other
topics in decision making. Check out the homepage for the whole collection at [<span
class="decidables">decidables</span>](../).

Alternatively, if you find yourself liking explorable explanations in general, then I strongly
suggest you check out the center of the explorables universe, presented by Nicky Case, at
[explorabl.es](https://explorabl.es/).
