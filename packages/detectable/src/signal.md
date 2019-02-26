---
title: "Signal and Noise: Staring at Random Dot Kinematograms"
layout: page
script: index
---

## Noise

<sdt-example-human>
  <sdt-control run pause></sdt-control>
  <rdk-task count="100" coherence="0" trials="1" probability="1" duration="Infinity"
    wait="0" iti="0"></rdk-task>
</sdt-example-human>

## Signal

<sdt-example-human>
  <sdt-control run pause></sdt-control>
  <rdk-task count="100" coherence="1" trials="1" probability="1" duration="Infinity"
    wait="0" iti="0"></rdk-task>
</sdt-example-human>

## Weaker signal

<sdt-example-human>
  <sdt-control run pause></sdt-control>
  <rdk-task count="100" coherence="0.5" trials="1" probability="1" duration="Infinity"
    wait="0" iti="0"></rdk-task>
</sdt-example-human>

## Customizable signal

<sdt-example-human>
  <sdt-control run pause coherence="0.5"></sdt-control>
  <rdk-task count="100" coherence="0.5" trials="1" probability="1" duration="Infinity"
    wait="0" iti="0"></rdk-task>
</sdt-example-human>
