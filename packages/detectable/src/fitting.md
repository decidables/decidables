---
title: "Model Fitting: Fitting Human Performance to Signal Detection Theory"
layout: page
script: index
---

## From human performance to model parameters

On the exploration page, you were able to explore SDT through the relationship between data and
model, but what if we observe human performance and we want to *fit* the model to this actual human
data? This moves us from model exploration to model fitting, which you can do below.

You can select how many `Trials` to perform, the `Duration` of each stimulus, and the percentage of
dots that exhibit `Coherence`. When you are ready, you can `Run` the task.

<sdt-example-human>
  <sdt-control coherence=".5" trials="10" duration="1000" run pause reset></sdt-control>
  <rdk-task coherence=".5" trials="10" duration="1000" wait="1000" iti="1000"></rdk-task>
  <sdt-response interactive trial feedback="outcome"></sdt-response>
  <sdt-table numeric summary="stimulusRates accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0">
    </sdt-table>
  <roc-space point="all" iso-d="all" iso-c="all" far=".5" hr=".5"></roc-space>
  <sdt-model threshold bias distributions sensitivity histogram color="outcome" d="0" c="0">
    </sdt-model>
</sdt-example-human>
