---
title: 'Model Exploration: Accuracy, Reaction Time, and Evidence Accumulation'
layout: page
script: page
style: page
---

## Visualizing the relationship between performance and model

Exploring the relationship between model parameters and behavior.

<ddm-example-interactive>
  <accumulable-control trials resample></accumulable-control>
  <ddm-parameters boundary-separation starting-point drift-rate nondecision-time interactive>
  </ddm-parameters>
  <ddm-model interactive measures means sds></ddm-model>
  <accumulable-table numeric summary color="outcome"></accumulable-table>
</ddm-example-interactive>
