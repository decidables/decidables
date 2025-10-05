---
title: 'Model Prediction: Predicting Performance with Cumulative Prospect Theory'
layout: page
script: page
style: page
---

## From model parameters to predicted performance

If we have model parameters, either from fitting human data, or derived from theoretical
considerations, we may want to simulate task performance in order to generate predictions.
In other words, we can have our model perform the task *as if* it were a participant.

<cpt-example-model>
  <prospectable-control trials duration run pause reset></prospectable-control>
  <risky-task></risky-task>
  <cpt-parameters alpha lambda gamma interactive></cpt-parameters>
  <cpt-value interactive></cpt-value>
  <cpt-probability interactive></cpt-probability>
  <prospectable-response trial feedback="outcome" payoff="both"></prospectable-response>
  <decision-space updateable point="rest" alpha="1" lambda="1" gamma="1"></decision-space>
</cpt-example-model>
