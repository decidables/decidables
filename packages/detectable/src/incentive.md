---
title: "Bias Revisited: What Influences Bias?"
layout: page
script: index
---

## When detecting hits is most important

<sdt-example-human>
  <sdt-control run pause reset></sdt-control>
  <rdk-task coherence=".5" trials="10" duration="1000" wait="1000" iti="1000"></rdk-task>
  <sdt-response interactive trial feedback="outcome" payoff="total" no-response-payoff="-100"
    hit-payoff="90" miss-payoff="-90" correct-rejection-payoff="10" false-alarm-payoff="-10">
  </sdt-response>
  <sdt-table numeric summary="stimulusRates accuracy" payoff
    hits="0" misses="0" false-alarms="0" correct-rejections="0"
    hit-payoff="90" miss-payoff="-90" correct-rejection-payoff="10" false-alarm-payoff="-10">
  </sdt-table>
  <roc-space point="all" iso-d="all" iso-c="all" far=".5" hr=".5"></roc-space>
  <sdt-model threshold bias distributions sensitivity color="outcome" d="0" c="0"></sdt-model>
</sdt-example-human>

## When avoiding false alarms is most important

<sdt-example-human>
  <sdt-control run pause reset></sdt-control>
  <rdk-task coherence=".5" trials="10" duration="1000" wait="1000" iti="1000"></rdk-task>
  <sdt-response interactive trial feedback="outcome" payoff="total" no-response-payoff="-100"
    hit-payoff="10" miss-payoff="-10" correct-rejection-payoff="90" false-alarm-payoff="-90">
  </sdt-response>
  <sdt-table numeric summary="stimulusRates accuracy" payoff
    hits="0" misses="0" false-alarms="0" correct-rejections="0"
    hit-payoff="10" miss-payoff="-10" correct-rejection-payoff="90" false-alarm-payoff="-90">
  </sdt-table>
  <roc-space point="all" iso-d="all" iso-c="all" far=".5" hr=".5"></roc-space>
  <sdt-model threshold bias distributions sensitivity color="outcome" d="0" c="0"></sdt-model>
</sdt-example-human>

## Exploring bias

<sdt-example-human>
  <sdt-control trials="10" duration="1000" coherence=".5" payoff="50" run pause reset ></sdt-control>
  <rdk-task coherence=".5" trials="10" duration="1000" wait="1000" iti="1000"></rdk-task>
  <sdt-response interactive trial feedback="outcome" payoff="total" no-response-payoff="-100"
    hit-payoff="50" miss-payoff="-50" correct-rejection-payoff="50" false-alarm-payoff="-50">
  </sdt-response>
  <sdt-table numeric summary="stimulusRates accuracy" payoff
    hits="0" misses="0" false-alarms="0" correct-rejections="0"
    hit-payoff="50" miss-payoff="-50" correct-rejection-payoff="50" false-alarm-payoff="-50">
  </sdt-table>
  <roc-space point="all" iso-d="all" iso-c="all" history far=".5" hr=".5"></roc-space>
  <sdt-model threshold bias distributions sensitivity color="outcome" d="0" c="0"></sdt-model>
</sdt-example-human>
