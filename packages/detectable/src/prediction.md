---
title: "Model Prediction: Predicting Human Performance with Signal Detection Theory"
layout: page
script: index
---

## From model parameters to predicted performance

<sdt-example-model>
  <sdt-control run pause reset coherence=".5" trials="10"></sdt-control>
  <rdk-task count="100" coherence=".5" trials="10"></rdk-task>
  <sdt-model interactive threshold bias distributions sensitivity histogram
    color="outcome" d="1" c=".5"></sdt-model>
  <sdt-response feedback="outcome"></sdt-response>
  <sdt-table numeric display="accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0">
    </sdt-table>
  <roc-space hr=".5" far=".5" point="all" iso-d="all" iso-c="all"></roc-space>
</sdt-example-model>
