---
title: 'Model Fitting: Fitting Human Performance with the Diffusion Decision Model'
layout: page
script: page
---

## From human performance to model parameters

Fitting the model to your performance.

<ddm-example-human>
  <accumulable-control trials="10" duration="1000" coherence="0.4" color="outcome" run pause reset></accumulable-control>
  <rdk-2afc-task trials="10"></rdk-2afc-task>
  <accumulable-response interactive trial feedback></accumulable-response>
  <accumulable-table numeric summary="overall" color="outcome"></accumulable-table>
</ddm-example-human>
