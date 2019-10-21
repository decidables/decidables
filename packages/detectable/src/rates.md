---
title: "Tables & Rates: Tabulating and Summarizing Task Performance"
layout: page
script: index
---

## Tabulating outcomes

When we perform a block of trials, we can count how many times each of our four types of outcomes
occurred:

<sdt-example-human>
  <sdt-control coherence=".5" trials="10" run pause reset></sdt-control>
  <rdk-task coherence=".5" trials="10"></rdk-task>
  <sdt-response interactive trial feedback="outcome"></sdt-response>
  <sdt-table numeric hits="0" misses="0" false-alarms="0" correct-rejections="0"></sdt-table>
</sdt-example-human>

By collecting our outcomes across all of the trials in the block we now have our first aggregate
measures of performance. We can describe our performance on the task by reporting these four counts,
but the counts are dependent not only our level of performance, but also on the number of trials,
which often isn't that interesting to us.

## Hit Rate (HR)

We can further summarize our performance by describing how we did, on average, when the signal was
present, with a `Hit Rate` (HR), also called a **true positive rate** or **type I error rate**:

<sdt-equation-hm2hr></sdt-equation-hm2hr>

The `Hit Rate` tells us the proportion of trials when the signal was *present* that we correctly
responded *"present"*.

<sdt-equation-hm2hr numeric interactive hits="5" misses="5"></sdt-equation-hm2hr>

(This is a *live* equation. You can edit the number of `Hits` or `Misses` and the `Hit Rate` will
immediately update.)

## False Alarm Rate (FAR)

Likewise, we can summarize our performance when the signal was absent with a `False Alarm Rate`
(FAR), also called a **false positive rate** or **type II error rate**:

<sdt-equation-facr2far></sdt-equation-facr2far>

The `False Alarm Rate` tells us the proportion of trials when the signal was *absent* that we
erroneously responded *"present"*.

<sdt-equation-facr2far numeric interactive false-alarms="5" correct-rejections="5">
  </sdt-equation-facr2far>

(Another *live* equation!)

## A table of outcomes and rates

Since the `Hit Rate` summarizes performance when the signal was *present* and the `False Alarm Rate`
summarizes performance when the signal was *absent*, we can add them to the corresponding rows of
our table of outcomes:

<sdt-example-interactive>
  <sdt-table interactive numeric summary="stimulusRates"></sdt-table>
</sdt-example-interactive>

This is a *live* table, so you can change the count of any type of outcome and observe the effect on
the corresponding rate. Or, you can change a rate, and observe the effect on the corresponding
counts of outcomes. Note that since the counts are necessarily whole numbers, whereas the rates are
real numbers, small changes in a rate may not be reflected in the counts due to rounding.

## Accuracy

If we want to summarize our overall performance with a single number, then we can use `Accuracy`,
which aggregates across all trials. `Accuracy` tells us, on average, how we did across both signal
present and signal absent trials:

<sdt-equation-hmfacr2acc></sdt-equation-hmfacr2acc>

We can see that `Hits` and `Correct Rejections` are combined together since they are both types of
*correct* responses.

<sdt-equation-hmfacr2acc numeric interactive hits="5" misses="5"
  false-alarms="5" correct-rejections="5"></sdt-equation-hmfacr2acc>

We can add `Accuracy` as an overall summary measure to out table of outcomes:

<sdt-example-interactive>
  <sdt-table interactive numeric summary="stimulusRates accuracy"></sdt-table>
</sdt-example-interactive>

If you change the `Accuracy` then the other values will change as well, to keep the whole table
consistent. If you play around a bit, you may notice that, even if you keep the total number of
trials constant, you can come up with more than one set of values that has the same `Accuracy`.

## Tabulating outcomes, rates, & accuracy

Now that we have a variety of summary measures, we can run a block of trials, and see how the table
of outcomes and rates provides a running summary of performance:

<sdt-example-human>
  <sdt-control coherence=".5" trials="10" run pause reset></sdt-control>
  <rdk-task coherence=".5" trials="10"></rdk-task>
  <sdt-response interactive trial feedback="outcome"></sdt-response>
  <sdt-table numeric summary="stimulusRates accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0">
    </sdt-table>
</sdt-example-human>

## Accuracy the great deceiver

At first glance, `Accuracy` seems like a very convenient way to summarize overall performance in a
single number. But as students of Signal Detection Theory, we must be very wary of `Accuracy`.
Indeed `Accuracy` is the great deceiver! Let us see why:

Consider this table of outcomes:

<sdt-example-interactive>
  <sdt-table numeric summary="stimulusRates accuracy" hits="100" misses="0" false-alarms="100" correct-rejections="0"></sdt-table>
</sdt-example-interactive>

And now consider this table of outcomes:

<sdt-example-interactive>
  <sdt-table numeric summary="stimulusRates accuracy" hits="0" misses="100" false-alarms="0" correct-rejections="100"></sdt-table>
</sdt-example-interactive>

First, note that the `Accuracy` is **identical** in the two tables at 50%. But now note that the
actual patterns of performance are **completely different**! In the first instance, the participant
had one hundred `Hits` and zero `Misses`, whereas in the second instance the participant had the
exact opposite. On the other hand, the first participant had one hundred `False Alarms` and zero
`Correct Rejections`, whereas again the second participant had the exact opposite. Indeed, if we
look down the columns of the tables, we can observe that the first participant always responded
*"Present"*, whereas the second participant always responded *"Absent"*. And yet, despite completely
different performance, and completely different patterns of outcomes, they both resulted in the same
`Accuracy`. It turns out that in the context of signal detection, `Accuracy` is a surprisingly poor
indicator of performance.

On the other hand, the `Hit Rate` and `False Alarm Rate` are completely different for our two
participants, clearly communicating the vast differences in performance. By telling us how the
participant performed when the signal was *present* and when the signal was *absent*, the
combination of HR and FAR give us a more complete summary picture of performance.

Now, you may be mumbling to yourself that something else peculiar is going on in this example,
namely that neither participant seems to be paying any attention to the stimuli at all. (Always
responding either "present" or "absent" can be done without regard to the stimulus.) You, my astute
reader, are on to something important, which the next few pages will bring into focus.
