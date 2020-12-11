---
title: "Model Prediction: Predicting Performance with Cumulative Prospect Theory"
layout: page
script: index
---

## From model parameters to predicted performance

If we have model parameters, either from fitting human data, or derived from theoretical
considerations, we may want to simulate task performance in order to generate predictions.
In other words, we can have our model perform the task *as if* it were a participant.

<cpt-example-model probability="0.75" win="20" loss="0" sure="10" alpha="0.9" lambda="2" gamma="0.75">
  <decision-control trials="10" run pause reset></decision-control>
  <decision-task trials="10"></decision-task>
  <cpt-probability interactive line="first" point="none"></cpt-probability>
  <cpt-value interactive line="first" point="none"></cpt-value>
  <decision-response interactive trial feedback="outcome" payoff="both"></decision-response>
  <decision-space point="rest" alpha="1" lambda="1" gamma="1"></decision-space>
</cpt-example-model>
