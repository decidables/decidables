---
title: 'The Receiver Operating Characteristic (ROC): Visualizing performance'
layout: page
script: index
---

## ROC space

:key[Hit Rate] and :key[False Alarm Rate] allow us to summarize performance with two values. We can
then visualize performance as a point in a space, with the *x*-coordinate defined by FAR, and the
*y*-coordinate defined by HR. This space is called :term[receiver operating characteristic (ROC)
space] or alternatively :term[relative operating characteristic space] :cite[@Swets1996]. (The term
"receiver" dates back to the original development of this approach in the context of separating
signal and noise in the output of radar receivers used to detect enemy planes during World War II.)

A point in ROC space uniquely defines a combination of HR and FAR:

<sdt-example-interactive>
  <sdt-table numeric interactive summary="stimulusRates accuracy" hits="80" misses="20"
    false-alarms="10" correct-rejections="90"></sdt-table>
  <roc-space interactive point="all" iso-d="none" iso-c="none"></roc-space>
</sdt-example-interactive>

If you change the values in the table, the location of the ROC will change in response. Likewise, as
you drag the point around in ROC space, the table will update accordingly, while keeping the total
number of trials constant.

If you drag the point around a bit, you will observe that while each point defines a unique
combination of HR and FAR, you can find multiple points that have the same :key[Accuracy]. This is
just another way of saying the same thing we said already on the previous page, namely that
:key[Accuracy] alone does not uniquely describe signal detection performance.

## Iso-accuracy contours

We might then wonder what points in ROC space share the same :key[Accuracy]. We can visual this by
coloring each point in ROC space according to it's corresponding :key[Accuracy], and drawing a
contour through the space for every 10% increase in accuracy from 0% up to 100%. The resulting
iso-accuracy contours help us see how accuracy varies across the ROC space, in the same way that
contour lines on a topographic map help us understand how elevation changes across the landscape.

<sdt-example-interactive>
  <roc-space contour="accuracy" point="none" iso-d="none" iso-c="none"></roc-space>
</sdt-example-interactive>

We can now immediately see that all of the points in ROC space along each line with a slope of one
result in the same accuracy. Hopefully this helps us further appreciate that knowing the accuracy of
performance generally tells us next to nothing about either the hit rate or the false alarm rate!

## Comparing patterns of outcomes

We can explore ROC space further by comparing a pair of points.

For example, let's imagine we have one point with a :key[Hit Rate] of 0.9 and an :key[Accuracy] of
0.75, and a second point with a :key[False Alarm Rate] of 0.1 and an :key[Accuracy] of 0.75. Is this
possible? Where are the two points in ROC space? Is there any sort of symmetry apparent in their
placement? Try to move the two points in the ROC space below to meet this description. The point
with the up arrow, '↑', is described in the table above the ROC space; the point with the down
arrow, '↓', is described in the table below the ROC space.

<sdt-example-double-interactive>
  <sdt-table numeric interactive summary="stimulusRates accuracy" hits="0" misses="0"
    false-alarms="0" correct-rejections="0"></sdt-table>
  <roc-space interactive contour="accuracy" point="all" iso-d="none" iso-c="none"></roc-space>
  <sdt-table numeric interactive summary="stimulusRates accuracy" hits="0" misses="0"
    false-alarms="0" correct-rejections="0"></sdt-table>
</sdt-example-double-interactive>

Try some other positions... What about two points that are symmetric about the dotted diagonal from
lower left to upper right? What about points along the *imaginary* diagonal from upper left to lower
right?

## Comparing performance

In the study of human performance, ROC space is typically used to visual performance across multiple
blocks of trials. You can try that below. The current point will update throughout a block of
trials, but when you :ui[Reset], the point will be left behind, and a new point will follow the next
block of trials. Complete a few blocks of trials with the coherence set to different levels,
including some levels that make the task a real challenge. (If you want to remove all of the points,
just reload the page.)

<sdt-example-human>
  <sdt-control duration="1000" coherence=".5" trials="10" run pause reset></sdt-control>
  <rdk-task coherence=".5" trials="10" duration="1000" wait="1000" iti="1000"></rdk-task>
  <sdt-response interactive trial feedback="outcome"></sdt-response>
  <sdt-table numeric summary="stimulusRates accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0">
    </sdt-table>
  <roc-space point="all" iso-d="none" iso-c="none" history far=".5" hr=".5"></roc-space>
</sdt-example-human>

After you've completed a few blocks of trials, do you see any trends revealed in the pattern of
points within ROC space?

We can now describe performance in terms of :key[Hits], :key[Misses], :key[Correct Rejections],
:key[False Alarms], :key[Hit Rate], :key[False Alarm Rate], and ROC space. It is time that we think
about the processes that lead to this performance.
