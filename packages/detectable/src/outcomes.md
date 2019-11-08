---
title: "Outcomes: Going Beyond Accuracy"
layout: page
script: index
---

## Accuracy

On each trial, when we make a response, we might wonder about the relationship between our response
and the actual state of affairs. We can talk about this in terms of the **accuracy** of our
response. And sometimes that may be all that really matters - was my answer `Correct` or was it an
`Error`?

Try a few trials of the task:

<sdt-example-human>
  <sdt-control trials="5" run pause reset duration="1000" coherence=".5"></sdt-control>
  <rdk-task count="100" coherence=".5" trials="5" probability=".5"
    duration="1000" wait="1000" iti="1000"></rdk-task>
  <sdt-response interactive trial feedback="accuracy"></sdt-response>
</sdt-example-human>

As you have no doubt noticed, if you have given it a try, you receive feedback. For
the moment, that feedback is either `Correct` or `Error` (or `No Response` if you do not respond in
time).

## Outcomes

If we think about it a bit more, we realize that there are actually two ways we can be correct, and
two ways we can be in error:

- `Hits`, also called **true positives**, are when the signal is actually *present*, and we
  correctly respond *"present"*
- `Misses`, also called **false positives** or **type I errors**, are when the signal is actually
  *present*, and we erroneously respond *"absent"*
- `False Alarms`, also called **false negatives** or **type II errors**, are when the signal is
  actually *absent*, and we erroneously respond *"present"*
- `Correct Rejections`, also called **true negatives**, are when the signal is actually *absent*,
  and we correctly respond *"absent"*<br>

We have two possible states of the world (signal present or absent) and two
possible responses ("present" or "absent"), leading to a nice two by two table of possible outcomes
(brightly colored by yours truly):

<sdt-example-interactive>
  <sdt-table></sdt-table>
</sdt-example-interactive>

Try a few more trials of the task, and this time the feedback will inform you of which of the four
possible outcomes occurred:

<sdt-example-human>
  <sdt-control trials="5" run pause reset duration="1000" coherence=".5"></sdt-control>
  <rdk-task count="100" coherence=".5" trials="5" probability=".5"
    duration="1000" wait="1000" iti="1000"></rdk-task>
  <sdt-response interactive trial feedback="outcome"></sdt-response>
</sdt-example-human>

Now that we know how to classify the outcome of individual trials, we might wonder how we can
aggregate and summarize these results...
