---
title: "Measurement & Sensitivity: Towards a Theory of Performance"
layout: page
script: index
---

## Measuring stimuli

<sdt-example-model>
  <sdt-control run pause reset></sdt-control>
  <rdk-task count="100" coherence=".5" trials="10"></rdk-task>
  <sdt-model histogram color="none" d="0" c="0"></sdt-model>
</sdt-example-model>

## Presence or absence of signal

<sdt-example-model>
  <sdt-control run pause reset></sdt-control>
  <rdk-task count="100" coherence=".5" trials="10"></rdk-task>
  <sdt-model histogram color="stimulus" d="2" c="0"></sdt-model>
</sdt-example-model>

## Distributions!

<sdt-example-model>
  <sdt-control run pause reset></sdt-control>
  <rdk-task count="100" coherence=".5" trials="10"></rdk-task>
  <sdt-model distributions histogram color="stimulus" d="2" c="0"></sdt-model>
</sdt-example-model>

## Distributions near or far

<sdt-example-model>
  <sdt-control run pause reset></sdt-control>
  <rdk-task count="100" coherence=".5" trials="10"></rdk-task>
  <sdt-model distributions histogram color="stimulus" d=".5" c="0"></sdt-model>
</sdt-example-model>

<sdt-example-model>
  <sdt-control run pause reset></sdt-control>
  <rdk-task count="100" coherence=".5" trials="10"></rdk-task>
  <sdt-model distributions histogram color="stimulus" d="5" c="0"></sdt-model>
</sdt-example-model>

## Parameterizing distributions with sensitivity, <span class="math-var">d'</span>

<sdt-example-model>
  <sdt-control run pause reset coherence=".5" trials="10"></sdt-control>
  <rdk-task count="100" coherence=".5" trials="10"></rdk-task>
  <sdt-model interactive distributions sensitivity histogram color="stimulus" d="1.5" c="0">
    </sdt-model>
</sdt-example-model>
