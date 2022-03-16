---
title: 'Why create <span class="decidables">decidables</span>?'
layout: page
script: page
---

The [<span class="decidables">decidables</span>](./) project is a collection of explorable
explanations of decision making. It is focused on quantitative theories from the field of cognitive
psychology. This project exists to help learners understand these theories and the science behind
them.

These theories illustrate fundamental principles of cognition, but they can be a challenge for
learners due to their mathematical foundations. In the past, a common pedagogical approach has been
to explain the theories conceptually, but gloss over or avoid the math. In this project we take a
different approach, by using engagement, feedback, and interactivity to present the theories in
depth and in a way that allows learners to build visual and embodied intuitions for their
quantitative formulations.

Beyond the specifics of decision making, these explorables accentuate the relationship between
behavioral experiments and quantitative models. They demonstrate the mutually reinforcing
interaction between empirical data and simulation. We can *fit* a model to data, we can *predict*
data from a model, or we can *explore* the possible data sets from a model. By reinforcing these
approaches, we hope to instill in learners the benefits of quantitative approaches to better
thinking and explanation in scientific psychology :cite[@farrell_computational_2010;
@guest_how_2021; @Mcclelland2009].

## Why these theories?

The project is currently focused on signal detection theory, cumulative prospect theory, and
hyperbolic temporal discounting. Each of these theories provides a quantitative account for a core
aspect of decision making. Psychological theories can take many different forms, and vary greatly in
complexity. But each of the theories presented here can be expressed in terms of a small number of
parameterized equations. They maximize explanatory power, while emphasizing simplicity and
parsimony.

### Signal detection theory

Signal detection theory (SDT) addresses how we decide whether a stimulus is present or not
:cite[@Peterson1954]. While initially applied to the perceptual domain, it has since found relevance
as far afield as the study of memory, medical diagnosis, and emotional experience :cite[@Tanner1954;
@karmon-presser_how_2018; @Banks1970; @Lusted1971]. It lends itself to visual representation in
terms of ROC space and evidence distributions with a threshold :cite[@Tanner1954]. We explore SDT in
[**<span class="detectable"><span class="math-var d">d′</span>ete<span class="math-var
c">c</span>table</span>**](detectable/).

### Cumulative prospect theory

Cumulative prospect theory (CPT) addresses how we represent and integrate probability and value
during decision making under conditions of risk :cite[@Tversky1992]. It is also foundational to
behavioral economics (earning Daniel Kahneman the [2002 Nobel Prize in
Economics](https://www.nobelprize.org/prizes/economic-sciences/2002/summary/)) and has been used to
understand behaviors from insurance purchasing to gambling :cite[@Tversky1992]. It lends itself to
visual representation in terms of subjective value and probability functions. We explore CPT in
[**<span class="prospectable">prospect<span class="math-var">α</span>b<span
class="math-var">λ</span>e</span>**](prospectable/).

### Hyperbolic temporal discounting

Hyperbolic temporal discounting addresses the impact of time on our perception of value
:cite[@ainslie_derivation_1991]. Together with CPT, it provides the foundation for behavioral
economics, and has been used to understand behaviors including procrastination and impulsiveness
:cite[@ainslie_cardinal_2016; @moreira_delay_2019; @steel_nature_2007]. It lends itself to visual
representation in terms of discounting curves. We explore hyperbolic temporal discounting in
[**<span class="discountable">dis<span class="math-var">k</span>ountable</span>**](discountable/).

## Why explorable explanations?

Explorable explanations seek to provide an "environment to think in" instead of just "information to
be consumed" :cite[@victor_explorable_2011]. The goal is to support the learner through an active
process of engagement.

This approach builds on the *constructionist* ideas that learning is best facilitated by an
environment that supports open-ended exploration and that this approach can be a strong antidote to
"mathphobia" :cite[@papert_mindstorms_1993; @papert_situating_1991]. This approach is succinctly
synthesized in [Papert's Eight Big Ideas](http://stager.org/articles/8bigideas.pdf)
:cite[@papert_eight_1999].

This project is also strongly influenced by the idea that we learn best when we engage our
perception-action loops at multiple levels of abstraction :cite[@little_learning_2013;
@hayes_grounded_2017]. We complement the reading of explanatory text and the viewing of accompanying
figures, by encouraging the learner to participate directly in experimental tasks and directly
manipulate live simulations. This *grounded* or, perhaps, *embodied* approach to learning
acknowledges that the understanding of even the most abstract of concepts has a foundation in lived
experience :cite[@tran_support_2017; @hayes_grounded_2017; @barsalou_grounded_2008]. We start each
explorable with a concrete participatory task, and build to the abstract theoretical constructs
from there :cite[@fyfe_concreteness_2014].

## Why web pages and web components?

This project is implemented as a set of statically-served websites and supporting libraries of [web
components](https://developer.mozilla.org/en-US/docs/Web/Web_Components). All of the resources are
hosted on the server and provided directly to the learner. This approach was taken for a number of
reasons:

### Tracking and reliability

All resources are provided directly from the website
([decidables.github.io](https://decidables.github.io/)) in order to avoid content delivery networks
(CDNs) and other third-party servers. This allows a learner to use the project without the potential
of being tracked by other servers and insures that access cannot be impaired by other servers going
down.

### Responsivity and privacy

Since all interactions take place in the browser, and all calculations are done on the client side,
the pages can respond quickly without waiting for a network roundtrip. And the server has no state
about the learner beyond the initial request for the resources.

### Transparency and simplicity

As a set of standards-compliant HTML pages, a learner can see how each page is constructed, easily
navigate between pages, and bookmark any desired page. Unlike single-page applications (SPAs), this
"traditional" approach makes full use of the learner's web browser without the need for elaborate
mechanisms to re-implement basic features like browser history.

### Flexibility and composability

By authoring the interactive elements as standalone web components, they can be used on any webpage
by simply including the relevant script and using the custom HTML tag. Thus these elements can be
used by others without requiring a commitment to a particular framework, such as React.

### Standards and openness

Our creations contribute to a community of practice. By serving HTML files for content, with CSS
files for styling and Javascript files for interaction, we support an open, standards-based web. The
trend towards serving entire sites as single-page apps from javascript bundles obfuscates and silos
the web, instead of bringing us together.
