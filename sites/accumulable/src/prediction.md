---
title: 'Model Prediction: Predicting Performance for the Diffusion Decision Model'
layout: page
script: page
style: page
---

## From model parameters to predicted performance

If we have model parameters, either from fitting human data, or derived from theoretical
considerations, we may want to simulate task performance in order to generate predictions.
In other words, we can have our model perform the task *as if* it were a participant.

<ddm-example-model>
  <accumulable-control trials duration coherence color run pause reset></accumulable-control>
  <rdk-2afc-task></rdk-2afc-task>
  <ddm-parameters boundary-separation starting-point drift-rate nondecision-time interactive>
  </ddm-parameters>
  <ddm-model interactive measures means sds></ddm-model>
  <accumulable-response trial feedback></accumulable-response>
  <accumulable-table numeric summary></accumulable-table>
</ddm-example-model>
