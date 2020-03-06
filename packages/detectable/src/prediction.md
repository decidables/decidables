---
title: "Model Prediction: Predicting Human Performance with Signal Detection Theory"
layout: page
script: index
---

## From model parameters to predicted performance

We have now explored SDT and we have seen how human data can be fit with the model. If we have model
parameters, either from fitting human data, or derived from theoretical considerations, we may want
to simulate task performance in order to generate predictions. In other words, we can have our model
perform the task *as if* it were a participant.


<sdt-example-model>
  <sdt-control run pause reset coherence=".5" trials="10" duration="500"></sdt-control>
  <rdk-task count="100" coherence=".5" trials="10" duration="500" wait="500" iti="500"></rdk-task>
  <sdt-model interactive threshold bias distributions sensitivity histogram
    color="outcome" d="1" c=".5"></sdt-model>
  <sdt-response trial feedback="outcome"></sdt-response>
  <sdt-table numeric summary="stimulusRates accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0">
    </sdt-table>
  <roc-space hr=".5" far=".5" point="all" iso-d="all" iso-c="all"></roc-space>
</sdt-example-model>
