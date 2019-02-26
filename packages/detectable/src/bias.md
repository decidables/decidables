---
title: "Iso-Bias Curves: Visualizing Decision Criteria"
layout: page
script: index
---

## Calculating bias from hit rate and false alarm rate

<sdt-equation-hrfar2c></sdt-equation-hrfar2c>

<sdt-equation-hrfar2c numeric interactive hit-rate=".5" false-alarm-rate=".5">
  </sdt-equation-hrfar2c>

## Iso-bias curves

<sdt-example-interactive>
  <roc-space contour="bias" point="none" iso-d="none" iso-c="none"></roc-space>
</sdt-example-interactive>

## Visualizing the relationship between <span class="math-var">c</span>, HR, and FAR

<sdt-example-interactive>
  <sdt-table interactive display="accuracy"
    hits="80" misses="20" false-alarms="10" correct-rejections="90"></sdt-table>
  <roc-space interactive point="all" iso-d="none" iso-c="all"></roc-space>
  <sdt-model interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
</sdt-example-interactive>
