---
title: "Receiver Operating Characteristic (ROC) Space: Visualizing performance"
layout: page
script: index
---

## ROC space

<sdt-example-interactive>
  <sdt-table interactive display="accuracy" hits="80" misses="20"
    false-alarms="10" correct-rejections="90"></sdt-table>
  <roc-space interactive point="all" iso-d="none" iso-c="none"></roc-space>
</sdt-example-interactive>

## Iso-accuracy contours

<sdt-example-interactive>
  <roc-space contour="accuracy" point="none" iso-d="none" iso-c="none"></roc-space>
</sdt-example-interactive>

## Comparing patterns of outcomes

<sdt-example-double-interactive>
  <sdt-table interactive display="accuracy" hits="0" misses="0"
    false-alarms="0" correct-rejections="0"></sdt-table>
  <roc-space interactive contour="accuracy" point="all" iso-d="none" iso-c="none"></roc-space>
  <sdt-table interactive display="accuracy" hits="0" misses="0"
    false-alarms="0" correct-rejections="0"></sdt-table>
</sdt-example-double-interactive>

## Comparing performance

<sdt-example-human>
  <sdt-control coherence=".5" trials="10" run pause reset></sdt-control>
  <rdk-task coherence=".5" trials="10"></rdk-task>
  <sdt-response feedback="outcome"></sdt-response>
  <sdt-table display="accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0">
    </sdt-table>
  <roc-space point="all" iso-d="none" iso-c="none" history far=".5" hr=".5"></roc-space>
</sdt-example-human>
