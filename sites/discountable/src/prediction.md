---
title: 'Model Prediction: Predicting Performance for Hyperbolic Temporal Discounting'
layout: page
script: page
---

## From model parameters to predicted performance

If we have model parameters, either from fitting human data, or derived from theoretical
considerations, we may want to simulate task performance in order to generate predictions.
In other words, we can have our model perform the task *as if* it were a participant.

<htd-example-model k="0.2" >
  <discountable-control trials="10" run pause reset></discountable-control>
  <itc-task trials="10"></itc-task>
  <htd-curves interactive></htd-curves>
  <discountable-response trial feedback></discountable-response>
</htd-example-model>
