---
title: "Sensitivity Revisited: What Influences Sensitivity?"
layout: page
script: index
---

## A harder task

<sdt-example-human>
  <sdt-control run pause reset></sdt-control>
  <rdk-task coherence=".15" trials="10"></rdk-task>
  <sdt-response feedback="outcome"></sdt-response>
  <sdt-table display="accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0">
    </sdt-table>
  <roc-space point="all" iso-d="all" iso-c="all" far=".5" hr=".5"></roc-space>
  <sdt-model threshold bias distributions sensitivity color="outcome" d="0" c="0"></sdt-model>
</sdt-example-human>

## An easier task

<sdt-example-human>
  <sdt-control run pause reset></sdt-control>
  <rdk-task coherence=".9" trials="10"></rdk-task>
  <sdt-response feedback="outcome"></sdt-response>
  <sdt-table display="accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0">
    </sdt-table>
  <roc-space point="all" iso-d="all" iso-c="all" far=".5" hr=".5"></roc-space>
  <sdt-model threshold bias distributions sensitivity color="outcome" d="0" c="0"></sdt-model>
</sdt-example-human>

## Exploring difficulty

<sdt-example-human>
  <sdt-control run pause reset coherence=".5" trials="10"></sdt-control>
  <rdk-task coherence=".5" trials="10"></rdk-task>
  <sdt-response feedback="outcome"></sdt-response>
  <sdt-table display="accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0">
    </sdt-table>
  <roc-space point="all" iso-d="all" iso-c="all" history far=".5" hr=".5"></roc-space>
  <sdt-model threshold bias distributions sensitivity color="outcome" d="0" c="0"></sdt-model>
</sdt-example-human>
