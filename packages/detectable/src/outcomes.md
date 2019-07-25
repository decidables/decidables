---
title: "Outcomes: Going Beyond Accuracy"
layout: page
script: index
---

On each trial, when we make a response, we might wonder about the relationship between our response
and the actual state of affairs. Often we talk about this in terms of the **accuracy** of our
response. And sometimes that may be all that really matters - was my answer `Correct` or was it an
`Error`?

## Accuracy

Try 10 trials fo the task:

<sdt-example-human>
  <sdt-control run pause reset coherence="1"></sdt-control>
  <rdk-task count="100" coherence="1" trials="10" probability=".5"
    duration="1000" wait="1000" iti="500"></rdk-task>
  <sdt-response feedback="accuracy"></sdt-response>
</sdt-example-human>

As you have no doubt noticed, if you have given it a try, you receive feedback. For
the moment, that feedback is either `Correct` or `Error` (or `No Response` if you do not respond in
time).

## Outcomes

If we think about it a bit more, we realize that there are actually two ways we can be correct, and
two ways we can be in error. When the signal is actually *present*, we are correct when we respond
*"present"* and in error when we respond *"absent"*. Traditionally, these outcomes are referred to
as `Hits` and `Misses` respectively. When the signal is actually *absent*, we are correct when we
respond *"absent"*, and in error when we respond *"present"*. Traditionally, these outcomes are
referred to as `Correct Rejections` and `False Alarms` respectively.  We have two possible states of
the world (signal present or absent) and two possible responses ("present" or "absent"), leading to
a nice two by two table of possible outcomes (brightly colored by yours truly):

<sdt-example-interactive>
  <sdt-table display="outcomes"></sdt-table>
</sdt-example-interactive>


<sdt-example-human>
  <sdt-control run pause reset coherence="1"></sdt-control>
  <rdk-task count="100" coherence="1" trials="10" probability=".5"
    duration="1000" wait="1000" iti="500"></rdk-task>
  <sdt-response feedback="outcome"></sdt-response>
</sdt-example-human>
