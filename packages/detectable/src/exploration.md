---
title: "Model Exploration: Sensitivity, Bias, Outcomes, and Rates"
layout: page
script: index
---

## Visualizing the relationship between performance and model

<sdt-example-interactive>
  <sdt-table interactive display="accuracy"
    hits="80" misses="20" false-alarms="10" correct-rejections="90"></sdt-table>
  <roc-space interactive point="all" iso-d="all" iso-c="all"></roc-space>
  <sdt-model interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
</sdt-example-interactive>
