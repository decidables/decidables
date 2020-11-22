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
  <cpt-probability interactive line="first" point="first"></cpt-probability>
  <cpt-value interactive line="first" point="all"></cpt-value>
<!--
  <cpt-calculation numeric interactive></cpt-calculation>
  <cpt-space></cpt-space>
  <decision-space></decision-space>
 -->
</cpt-example-human>
