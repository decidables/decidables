---
title: "Bias Revisited: What Influences Bias?"
layout: page
script: index
---

## When detecting hits is most important

<sdt-example-human>
  <sdt-control run pause reset></sdt-control>
  <rdk-task coherence=".5" trials="10"></rdk-task>
  <sdt-response feedback="outcome" payoff="total" hit-payoff="100" miss-payoff="-100"
    correct-rejection-payoff="10" false-alarm-payoff="-10"></sdt-response>
  <sdt-table display="accuracy" hits="0" misses="0"
    false-alarms="0" correct-rejections="0"></sdt-table>
  <roc-space point="all" iso-d="all" iso-c="all" far=".5" hr=".5"></roc-space>
  <sdt-model threshold bias distributions sensitivity color="outcome" d="0" c="0"></sdt-model>
</sdt-example-human>

## When avoiding false alarms is most important

<sdt-example-human>
  <sdt-control run pause reset></sdt-control>
  <rdk-task coherence=".5" trials="10"></rdk-task>
  <sdt-response feedback="outcome" payoff="total" hit-payoff="10" miss-payoff="-10"
    correct-rejection-payoff="100" false-alarm-payoff="-100"></sdt-response>
  <sdt-table display="accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0">
    </sdt-table>
  <roc-space point="all" iso-d="all" iso-c="all" far=".5" hr=".5"></roc-space>
  <sdt-model threshold bias distributions sensitivity color="outcome" d="0" c="0"></sdt-model>
</sdt-example-human>

## Exploring bias

?? Need way to set Hit/Miss Payoff and CR/FA Payoff
<sdt-example-human>
  <sdt-control run pause reset coherence=".5" trials="10"></sdt-control>
  <rdk-task coherence=".5" trials="10"></rdk-task>
  <sdt-response feedback="outcome"></sdt-response>
  <sdt-table display="accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0">
    </sdt-table>
  <roc-space point="all" iso-d="all" iso-c="all" history far=".5" hr=".5"></roc-space>
  <sdt-model threshold bias distributions sensitivity color="outcome" d="0" c="0"></sdt-model>
</sdt-example-human>
