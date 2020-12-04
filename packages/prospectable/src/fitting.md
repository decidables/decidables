---
title: "Model Fitting: Fitting Human Performance to Cumulative Prospect Theory"
layout: page
script: index
---

## From human performance to model parameters

This is a test of the decision task.

<cpt-example-human>
  <decision-control trials="10" run pause reset></decision-control>
  <decision-task trials="10"></decision-task>
  <decision-response interactive trial feedback="outcome" payoff="both"></decision-response>
  <cpt-probability interactive line="first" point="none"></cpt-probability>
  <cpt-value interactive line="first" point="none"></cpt-value>
  <decision-space point="rest" alpha="1" lambda="1" gamma="1"></decision-space>
  <cpt-fit></cpt-fit>
<!--
  <cpt-calculation numeric interactive></cpt-calculation>
  <cpt-space></cpt-space>
 -->
</cpt-example-human>
