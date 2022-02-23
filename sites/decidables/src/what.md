---
title: 'What is <span class="decidables">decidables</span>?'
layout: page
script: index
---

The [<span class="decidables">decidables</span>](./) project is a collection of explorable
explanations of decision making. The focus is on quantitative theories from the field of cognitive
psychology:
- [**<span class="detectable"><span class="math-var d">d′</span>ete<span class="math-var
  c">c</span>table</span>**](detectable/): Signal detection theory
- [**<span class="prospectable">prospect<span class="math-var">α</span>b<span
class="math-var">λ</span>e</span>**](prospectable/): Cumulative prospect theory
- [**<span class="discountable">dis<span class="math-var">k</span>ountable</span>**](discountable/): Hyperbolic temporal discounting

## Explorable explanations

Explorable explanations combine interactive elements with supporting text. The goal is to help the
learner understand a concept through an active process of engagement. Victor
:cite[-@victor_explorable_2011] explains this as "environment to think in" instead of just
"information to be consumed".

The term "explorable explanation" was first used in a related context by Brusilovsky
:cite[-@brusilovsky_explanatory_1994], but was popularized by Victor
:cite[-@victor_explorable_2011], and has been championed by Case :cite[-@case_explorable_2022] with
the wonderful [:tool[Explorable Explanations (https://explorabl.es/)]](https://explorabl.es/)
website, which has links to examples, readings, tutorials, and tools :cite[@noauthor_explorable_2021].

## Cognitive psychology

As a central human activity, decision making can be studied from many different perspectives, which
provide diverse and complementary insights. Here we concentrate on quantitative models from
cognitive psychology, which attempts to understand the relationship between thoughts and behavior
using an information processing approach. We can think about the environment presenting a situation
that potentially invites a decision. Information about that situation acts as input to an
individual's mind. This information is integrated with ongoing processes and representations in the
mind, potentially leading to a response as output. A quantitative theory of decision making
describes the relationship between input and output in terms of the intervening processes and
representations.

## Quantitative modeling

Each of the explorables in this project starts with a decision-making task which the learner can
partake in. This provides empirical input and output. The explorable then explains how the theory
attempts to account for the relationship between input and output through a quantitative model of
cognition.

Central to each of these explorables are interactive simulations for model *exploration* :cite[i.e.
"exploring the hypothesis space" or "proof of sufficiency", @Mcclelland2009; @stafford_what_2009;
@zuidema_five_2020], *fitting* :cite[i.e. "parameter estimation", @Lewandowsky2010c; @wilson_ten_2019],
and *prediction* :cite[i.e. "simulation", @stafford_what_2009; @wilson_ten_2019]:

- Model *exploration* allows the learner to investigate the space of possible outcomes that a model
  can account for. Which patterns of behavior can or cannot be explained by the model?
- Model *fitting* takes the learner's task performance and finds the parameter values for the model
  that best account for that pattern of behavior. How does the model simulate the learner's
  behavior?
- Model *prediction* let's the learner specify a set of model parameters, and then observe the model
  performing the task with those values. What is the model's performance with a given specification?

## Sites

### **<span class="detectable"><span class="math-var d">d′</span>ete<span class="math-var c">c</span>table</span>**

[**<span class="detectable"><span class="math-var d">d′</span>ete<span class="math-var
c">c</span>table</span>**](detectable/) explores signal detection theory (SDT). The task is to
detect coherent motion in a random dot kinematogram. Is the motion stimulus present or absent?
Building on early work studying radar operators, SDT mathematically models our choices in terms of
our detection *sensitivity* and response *bias* :cite[@Peterson1954; @Tanner1954].

### **<span class="prospectable">prospect<span class="math-var">α</span>b<span class="math-var">λ</span>e</span>**

[**<span class="prospectable">prospect<span class="math-var">α</span>b<span
class="math-var">λ</span>e</span>**](prospectable/) explores cumulative prospect theory (CPT). The
task is to choose between a sure option of intermediate value and a gamble with a larger and a
smaller option. Do you prefer the sure thing, or the chance to win more? CPT describes mathematical
transformations of objective probabilities and values into <em>decision weights</em> and
<em>subjective values</em> which we combine on a relative scale :cite[@Kahneman1979; @Tversky1992].

### **<span class="discountable">dis<span class="math-var">k</span>ountable</span>**

[**<span class="discountable">dis<span class="math-var">k</span>ountable</span>**](discountable/)
explores hyperbolic temporal discounting. The task is to choose between a smaller immediate value
and a larger value in the future. Would you rather have less now or more later? <em>Hyperbolic
discounting</em> describes how our subjective perception of value changes with time
:cite[@ainslie_derivation_1991; @berns_intertemporal_2007].
