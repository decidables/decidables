---
title: 'Model Fitting: Fitting Human Performance to Cumulative Prospect Theory'
layout: page
script: page
---

## From human performance to model parameters

Fitting the model to your performance.

<cpt-example-human>
  <prospectable-control run pause reset></prospectable-control>
  <risky-task></risky-task>
  <prospectable-response interactive trial feedback="outcome" payoff="both"></prospectable-response>
  <cpt-parameters></cpt-parameters>
  <cpt-value></cpt-value>
  <cpt-probability></cpt-probability>
  <decision-space point="rest" alpha="1" lambda="1" gamma="1"></decision-space>
  <cpt-fit></cpt-fit>
<!--
  <cpt-calculation numeric interactive></cpt-calculation>
  <cpt-space></cpt-space>
 -->
</cpt-example-human>
