---
title: "Unequal Variance Signal Detection Theory: Assumptions Revisited"
layout: page
script: index
---

## Relaxing the equal variance assumption

<sdt-example-interactive>
  <sdt-control z-roc></sdt-control>
  <sdt-table numeric interactive summary="stimulusRates accuracy"
    hits="80" misses="20" false-alarms="10" correct-rejections="90"></sdt-table>
  <roc-space z-roc interactive point="all" iso-d="all" iso-c="all"></roc-space>
  <sdt-model interactive unequal threshold distributions bias sensitivity variance color="outcome"></sdt-model>
</sdt-example-interactive>

## Isocontours with unequal variance

<sdt-example-interactive>
  <sdt-control z-roc></sdt-control>
  <sdt-model unequal threshold distributions variance color="outcome"></sdt-model>
  <roc-space z-roc contour="sensitivity" point="none" iso-d="none" iso-c="none"></roc-space>
  <roc-space z-roc contour="bias" point="none" iso-d="none" iso-c="none"></roc-space>
</sdt-example-interactive>

## Spurious correlation when unequal variance data analyzed with equal variance model

<sdt-example-unequal>
  <sdt-control z-roc></sdt-control>
  <sdt-model interactive unequal distributions sensitivity variance color="stimulus"></sdt-model>
  <roc-space z-roc contour="sensitivity" point="rest" iso-d="rest" iso-c="rest"></roc-space>
</sdt-example-interactive>
