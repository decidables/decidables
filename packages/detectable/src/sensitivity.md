---
title: "Iso-Sensitivity Curves: Visualizing Detector Performance"
layout: page
script: index
---

## Calculating sensitivity from hit rate and false alarm rate

<sdt-equation-hrfar2d></sdt-equation-hrfar2d>

<sdt-equation-hrfar2d numeric interactive hit-rate=".5" false-alarm-rate=".5">
  </sdt-equation-hrfar2d>

## Iso-sensitivity curves

<sdt-example-interactive>
  <roc-space contour="sensitivity" point="none" iso-d="none" iso-c="none"></roc-space>
</sdt-example-interactive>

## Visualizing the relationship between <span class="math-var">d&prime;</span>, HR, and FAR

<sdt-example-interactive order="trm">
  <sdt-table interactive display="accuracy" hits="80" misses="20"
    false-alarms="10" correct-rejections="90"></sdt-table>
  <roc-space interactive point="all" iso-d="all" iso-c="none"></roc-space>
  <sdt-model interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
</sdt-example-interactive>
