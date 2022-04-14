---
title: 'Model Prediction: Predicting Performance with Cumulative Prospect Theory'
layout: page
script: page
---

## From model parameters to predicted performance

If we have model parameters, either from fitting human data, or derived from theoretical
considerations, we may want to simulate task performance in order to generate predictions.
In other words, we can have our model perform the task *as if* it were a participant.

<cpt-example-model alpha="0.9" lambda="2" gamma="0.75">
  <prospectable-control trials="10" run pause reset></prospectable-control>
  <decision-task trials="10"></decision-task>
  <cpt-probability interactive></cpt-probability>
  <cpt-value interactive></cpt-value>
  <decision-response trial feedback="outcome" payoff="both"></decision-response>
  <decision-space updateable point="rest" alpha="1" lambda="1" gamma="1"></decision-space>
</cpt-example-model>
