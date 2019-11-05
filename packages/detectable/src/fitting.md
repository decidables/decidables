---
title: "Model Fitting: Fitting Human Performance to Signal Detection Theory"
layout: page
script: index
---

## From human performance to model parameters

<sdt-example-human>
  <sdt-control coherence=".5" trials="10" duration="1000" run pause reset></sdt-control>
  <rdk-task coherence=".5" trials="10" duration="1000" wait="1000" iti="500"></rdk-task>
  <sdt-response interactive trial feedback="outcome"></sdt-response>
  <sdt-table numeric summary="stimulusRates accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0">
    </sdt-table>
  <roc-space point="all" iso-d="all" iso-c="all" far=".5" hr=".5"></roc-space>
  <sdt-model threshold bias distributions sensitivity histogram color="outcome" d="0" c="0">
    </sdt-model>
</sdt-example-human>
