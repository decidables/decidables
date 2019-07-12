---
title: "Outcomes: Going Beyond Accuracy"
layout: page
script: index
---

On each trial, when we make a response, we might wonder about the relationship between our response
and the actual state of affairs. Often we talk about this in terms of the **accuracy** of our
response. And sometimes that may be all that really matters - was my answer `Correct` or was it an
`Error`.

## Accuracy

As you have no doubt noticed, if you have given it a try, you receive feedback. For
the moment, that feedback is either `Correct`, `Error`, or `No Response` if you do not respond in
time.

<sdt-example-human>
  <sdt-control run pause reset coherence="1"></sdt-control>
  <rdk-task count="100" coherence="1" trials="10" probability=".5"
    duration="1000" wait="1000" iti="500"></rdk-task>
  <sdt-response feedback="accuracy"></sdt-response>
</sdt-example-human>

## Outcomes

<sdt-example-interactive>
  <sdt-table display="outcomes"></sdt-table>
</sdt-example-interactive>

<sdt-example-human>
  <sdt-control run pause reset coherence="1"></sdt-control>
  <rdk-task count="100" coherence="1" trials="10" probability=".5"
    duration="1000" wait="1000" iti="500"></rdk-task>
  <sdt-response feedback="outcome"></sdt-response>
</sdt-example-human>
