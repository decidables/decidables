---
title: 'Receiver Operating Characteristic Space: Visualizing Performance'
layout: page
script: page
---

## ROC space

The :key[hit rate] and :key[false alarm rate] allow us to summarize performance with two values. We
can use these values to visualize performance as a point in a space, with the *x*-coordinate defined
by :key[FAR], and the *y*-coordinate defined by :key[HR]. This space is called
:term[receiver/relative operating characteristic space] (:term[ROC space]) :cite[@Swets1996]. (The
term "receiver" dates back to the original development of this approach in the context of separating
signal and noise in the output of radar receivers used to detect enemy planes during World War II.)

A point in ROC space uniquely defines a combination of :key[HR] and :key[FAR]:

<sdt-example-interactive>
  <detectable-table numeric interactive summary="stimulusRates accuracy" hits="80" misses="20"
    false-alarms="10" correct-rejections="90"></detectable-table>
  <roc-space interactive point="all" iso-d="none" iso-c="none"></roc-space>
</sdt-example-interactive>

:::ui

The graph of ROC space is *live*, so you can drag the point on the graph to move it, thereby
changing the :key[HR] and :key[FAR]. Furthermore, the graph and the *live* table are linked, so when
you drag the point, the table will update as well, and vice versa.

:::

Move the point in ROC space around and observe that while each point defines a unique combination of
:key[HR] and :key[FAR], you can find multiple points that have the same :key[accuracy]. This is
another way of observing the same thing we discussed on the previous page, namely that
:key[accuracy] alone does not uniquely describe signal detection performance.

## Iso-accuracy contours

We might then wonder which points in ROC space share the same :key[accuracy]. We can visual this by
coloring each point in ROC space according to it's :key[accuracy], and drawing a *contour* through
the space for every 5% increase in accuracy from 0% up to 100%. The resulting iso-accuracy
contours help us see how accuracy varies across the ROC space, in the same way that contour lines
on a topographic map help us understand how elevation changes across the landscape.

<sdt-example-interactive>
  <roc-space contour="accuracy" point="none" iso-d="none" iso-c="none"></roc-space>
</sdt-example-interactive>

We can now immediately see that all of the points in ROC space along each line with a slope of one
result in the same accuracy. Hopefully this helps us further appreciate that knowing the accuracy of
performance generally tells us very little about either the :key[hit rate] or the :key[false alarm
rate]!

## Comparing patterns of outcomes

We can explore ROC space further by comparing a pair of points.

For example, we might wonder if we can have one point with a :key[hit rate] of 0.9 and an
:key[accuracy] of 0.75, and a second point with a :key[false alarm rate] of 0.1 and the same
:key[accuracy] of 0.75. Is this possible? Where are the two points in ROC space? Is there any sort
of symmetry apparent in their placement? Try to move the two points in the ROC space below to meet
this description.

<sdt-example-double-interactive>
  <detectable-table numeric interactive summary="stimulusRates accuracy" hits="0" misses="0"
    false-alarms="0" correct-rejections="0"></detectable-table>
  <roc-space interactive contour="accuracy" point="all" iso-d="none" iso-c="none"></roc-space>
  <detectable-table numeric interactive summary="stimulusRates accuracy" hits="0" misses="0"
    false-alarms="0" correct-rejections="0"></detectable-table>
</sdt-example-double-interactive>

:::ui

The point with the up arrow, ↑, is described in the *live* table before the ROC space, while
the point with the down arrow, ↓, is described in the table after the ROC space. The ROC space is
*live*, so the points can be dragged to move them.

:::

Try some other positions... What about two points that are symmetric about the dotted diagonal from
lower left to upper right? What about points along an *imaginary* diagonal from upper left to lower
right?

## Comparing performance

In the study of human performance, ROC space is typically used to visual performance across multiple
blocks of trials. You can try that below. The current point will update throughout a block of
trials, but when you reset and start a new block, the point will be left behind, and a new point
will follow the next block of trials. Complete a few blocks of trials with the coherence set to
different levels, including some levels that make the task a real challenge.

<sdt-example-human>
  <detectable-control duration="1000" coherence=".5" trials="10" run pause reset></detectable-control>
  <rdk-task coherence=".5" trials="10" duration="1000" wait="1000" iti="1000"></rdk-task>
  <detectable-response interactive trial feedback="outcome"></detectable-response>
  <detectable-table numeric summary="stimulusRates accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0">
    </detectable-table>
  <roc-space point="all" iso-d="none" iso-c="none" history far=".5" hr=".5"></roc-space>
</sdt-example-human>

:::ui

Use the :slider[Trials], :slider[Duration], and :slider[Coherence] sliders to configure a block of
trials.

Then use :button[Run] to start the block, use :button[Pause] if you need a break, and after the
block is over use :button[Reset] to move to the next block.

Each block will have an associated point in ROC space, numbered in order. If you want to remove
all of the points, just reload the page.

:::

After you've completed a few blocks of trials with different settings for coherence, do you see any
trends revealed in the pattern of points within ROC space?

We now have a task, and we can now describe performance in terms of :key[hits], :key[misses],
:key[correct rejections], :key[false alarms], :key[hit rate], :key[false alarm rate], and as a point
in ROC space. It is time that we think about the processes that lead to this performance.
