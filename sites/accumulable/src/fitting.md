---
title: 'Model Fitting: Fitting Human Performance with the Diffusion Decision Model'
layout: page
script: page
---

## From human performance to model parameters

Fitting the model to your performance.

<ddm-example-human trials="10" duration="1000" coherence="0.4" color="outcome">
  <accumulable-control trials duration coherence color run pause reset></accumulable-control>
  <rdk-2afc-task></rdk-2afc-task>
  <accumulable-response interactive trial feedback></accumulable-response>
  <accumulable-table numeric summary color="outcome"></accumulable-table>
  <ddm-parameters></ddm-parameters>
  <ddm-model human measures means sds></ddm-model>
  <ddm-fit></ddm-fit>
</ddm-example-human>
