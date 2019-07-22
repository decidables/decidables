---
title: "Signal Detection Theory (SDT): Putting it Together"
layout: page
script: index
---

## A measurement plus a threshold gives us an outcome!

<sdt-example-model>
  <sdt-control run pause reset coherence=".5" trials="10"></sdt-control>
  <rdk-task count="100" coherence=".5" trials="10"></rdk-task>
  <sdt-model interactive threshold bias distributions sensitivity histogram
    color="outcome" d="1.5" c="0"></sdt-model>
  <sdt-response feedback="outcome"></sdt-response>
</sdt-example-model>

## Outcomes summarized in an SDT table and ROC space

<sdt-example-model>
  <sdt-control run pause reset coherence=".5" trials="10"></sdt-control>
  <rdk-task count="100" coherence=".5" trials="10"></rdk-task>
  <sdt-model interactive threshold bias distributions sensitivity histogram
    color="outcome" d="1.5" c="0"></sdt-model>
  <sdt-response feedback="outcome"></sdt-response>
  <sdt-table numeric display="accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0">
    </sdt-table>
  <roc-space hr=".5" far=".5" point="all" iso-d="none" iso-c="none"></roc-space>
</sdt-example-model>

## Calculating hit rate from sensitivity and bias

<sdt-equation-dc2hr></sdt-equation-dc2hr>

<sdt-equation-dc2hr numeric interactive d="0" c="0"></sdt-equation-dc2hr>

## Calculating false alarm rate from sensitivity and bias

<sdt-equation-dc2far></sdt-equation-dc2far>

<sdt-equation-dc2far numeric interactive d="0" c="0"></sdt-equation-dc2far>
