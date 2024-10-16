---
title: 'Model Exploration: Accuracy, Reaction Time, and Evidence Accumulation'
layout: page
script: page
---

## Visualizing the relationship between performance and model

Exploring the relationship between model parameters and behavior.

<ddm-example-interactive>
  <accumulable-control trials="10" resample></accumulable-control>
  <ddm-parameters interactive></ddm-parameters>
  <ddm-model interactive measures means sds></ddm-model>
  <accumulable-table numeric summary="overall" color="outcome"></accumulable-table>
</ddm-example-interactive>
