---
title: "Task: Detecting a Signal in a Random Dot Kinematogram"
layout: page
script: index
---

## One trial

<sdt-example-human>
  <sdt-control run pause reset></sdt-control>
  <rdk-task count="100" coherence="1" trials="1" probability=".5" duration="2000"
    wait="2000" iti="2000"></rdk-task>
  <sdt-response feedback="accuracy"></sdt-response>
</sdt-example-human>

## Five trials

<sdt-example-human>
  <sdt-control run pause reset></sdt-control>
  <rdk-task count="100" coherence="1" trials="5" probability=".5" duration="2000"
    wait="2000" iti="2000"></rdk-task>
  <sdt-response feedback="accuracy"></sdt-response>
</sdt-example-human>

## Customizable coherence and number of trials!

<sdt-example-human>
  <sdt-control run pause reset coherence="1" trials="5"></sdt-control>
  <rdk-task count="100" coherence="1" trials="5" probability=".5" duration="2000"
    wait="2000" iti="2000"></rdk-task>
  <sdt-response feedback="accuracy"></sdt-response>
</sdt-example-human>
