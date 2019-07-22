---
title: "<span class='math-var'>z</span>ROC Space: Transforming ROC space"
layout: page
script: index
---

## A <span class="math-var">z</span>-transformed ROC space

<sdt-example-interactive>
  <sdt-control z-roc></sdt-control>
  <roc-space interactive z-roc point="all" iso-d="all" iso-c="all"></roc-space>
  <sdt-table numeric interactive display="accuracy" hits="80" misses="20"
    false-alarms="10" correct-rejections="90"></sdt-table>
  <sdt-model interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
</sdt-example-interactive>

<sdt-example-interactive>
  <sdt-control z-roc></sdt-control>
  <roc-space z-roc contour="sensitivity" point="none" iso-d="none" iso-c="none"></roc-space>
  <roc-space z-roc contour="bias" point="none" iso-d="none" iso-c="none"></roc-space>
  <roc-space z-roc contour="accuracy" point="none" iso-d="none" iso-c="none"></roc-space>
</sdt-example-interactive>
