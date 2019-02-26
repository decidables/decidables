---
title: "Threshold & Bias: Drawing a Line in the Sand"
layout: page
script: index
---

## Making a decision

<sdt-example-model>
  <sdt-control run pause reset></sdt-control>
  <rdk-task count="100" coherence=".5" trials="10"></rdk-task>
  <sdt-model histogram threshold color="none" d="2.5" c="0"></sdt-model>
</sdt-example-model>

## Responding present or absent

<sdt-example-model>
  <sdt-control run pause reset></sdt-control>
  <rdk-task count="100" coherence=".5" trials="10"></rdk-task>
  <sdt-model histogram threshold color="response" d="2.5" c="0"></sdt-model>
  <sdt-response feedback="none"></sdt-response>
</sdt-example-model>

## A higher or lower threshold

<sdt-example-model>
  <sdt-control run pause reset></sdt-control>
  <rdk-task count="100" coherence=".5" trials="10"></rdk-task>
  <sdt-model histogram threshold color="response" d="2.5" c="2"></sdt-model>
  <sdt-response feedback="none"></sdt-response>
</sdt-example-model>

<sdt-example-model>
  <sdt-control run pause reset></sdt-control>
  <rdk-task count="100" coherence=".5" trials="10"></rdk-task>
  <sdt-model histogram threshold color="response" d="2.5" c="-2"></sdt-model>
  <sdt-response feedback="none"></sdt-response>
</sdt-example-model>

## Parameterizing our threshold with bias, <span class="math-var">c</span>

<sdt-example-model>
  <sdt-control run pause reset coherence=".5" trials="10"></sdt-control>
  <rdk-task count="100" coherence=".5" trials="10"></rdk-task>
  <sdt-model interactive threshold bias histogram color="response" d="2.5" c="1"></sdt-model>
  <sdt-response feedback="none"></sdt-response>
</sdt-example-model>

## Bias, <span class="math-var">c</span>, and sensitivity, <span class="math-var">d'</span>, together

<sdt-example-model>
  <sdt-control run pause reset coherence=".5" trials="10"></sdt-control>
  <rdk-task count="100" coherence=".5" trials="10"></rdk-task>
  <sdt-model interactive threshold bias distributions sensitivity histogram
    color="response" d="2.5" c="1"></sdt-model>
  <sdt-response feedback="none"></sdt-response>
</sdt-example-model>
