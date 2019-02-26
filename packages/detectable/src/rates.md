---
title: "Tables & Rates: Tabulating and Summarizing Task Performance"
layout: page
script: index
---

## Tabulating outcomes

<sdt-example-human>
  <sdt-control coherence=".5" trials="10" run pause reset></sdt-control>
  <rdk-task coherence=".5" trials="10"></rdk-task>
  <sdt-response feedback="outcome"></sdt-response>
  <sdt-table display="outcomes" hits="0" misses="0" false-alarms="0" correct-rejections="0">
    </sdt-table>
</sdt-example-human>

## Hit Rate

<sdt-equation-hm2hr></sdt-equation-hm2hr>

<sdt-equation-hm2hr numeric interactive hits="5" misses="5"></sdt-equation-hm2hr>

## False Alarm Rate

<sdt-equation-facr2far></sdt-equation-facr2far>

<sdt-equation-facr2far numeric interactive false-alarms="5" correct-rejections="5">
  </sdt-equation-facr2far>

## A table of outcomes and rates

<sdt-example-interactive>
  <sdt-table interactive display="rates"></sdt-table>
</sdt-example-interactive>

## Accuracy

<sdt-equation-hmfacr2acc></sdt-equation-hmfacr2acc>

<sdt-equation-hmfacr2acc numeric interactive hits="5" misses="5"
  false-alarms="5" correct-rejections="5"></sdt-equation-hmfacr2acc>

<sdt-example-interactive>
  <sdt-table interactive display="accuracy"></sdt-table>
</sdt-example-interactive>

## Tabulating outcomes, rates, & accuracy

<sdt-example-human>
  <sdt-control coherence=".5" trials="10" run pause reset></sdt-control>
  <rdk-task coherence=".5" trials="10"></rdk-task>
  <sdt-response feedback="outcome"></sdt-response>
  <sdt-table display="accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0">
    </sdt-table>
</sdt-example-human>
