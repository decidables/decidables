---
title: "Outcomes: Going Beyond Accuracy"
layout: page
script: index
---

## Accuracy

<sdt-example-human>
  <sdt-control run pause reset coherence="1"></sdt-control>
  <rdk-task count="100" coherence="1" trials="10" probability=".5"
    duration="1000" wait="1000" iti="500"></rdk-task>
  <sdt-response feedback="accuracy"></sdt-response>
</sdt-example-human>

## Outcomes

<sdt-example-human>
  <sdt-control run pause reset coherence="1"></sdt-control>
  <rdk-task count="100" coherence="1" trials="10" probability=".5"
    duration="1000" wait="1000" iti="500"></rdk-task>
  <sdt-response feedback="outcome"></sdt-response>
</sdt-example-human>
