---
title: 'Tables &amp; Rates: Tabulating and Summarizing Task Performance'
layout: page
script: page
---

## Tabulating outcomes

When we perform a block of trials, we can count how many times each of our four types of outcomes
occurred:

<sdt-example-human>
  <detectable-control coherence=".5" trials="10" run pause reset duration="1000"></detectable-control>
  <rdk-task coherence=".5" trials="10" duration="1000" wait="1000" iti="1000"></rdk-task>
  <detectable-response interactive trial feedback="outcome"></detectable-response>
  <detectable-table numeric hits="0" misses="0" false-alarms="0" correct-rejections="0"></detectable-table>
</sdt-example-human>

By collecting our outcomes across all of the trials in the block we now have our first aggregate
measures of performance. We can describe our performance on the task by reporting these four counts,
but the counts are dependent not only our level of performance, but also on the number of trials,
which often isn't that interesting to us.

## Hit Rate (HR)

We can further summarize our performance by describing how we did, on average, when the signal was
present, with a :key[Hit Rate] (HR), also called a :term[true positive rate] or :term[type I error
rate]:

<sdt-equation-hm2hr></sdt-equation-hm2hr>

The :key[Hit Rate] tells us the proportion of trials when the signal was *present* that we correctly
responded *"present"*.

<sdt-equation-hm2hr numeric interactive hits="5" misses="5"></sdt-equation-hm2hr>

(This is a *live* equation. You can edit the number of :key[Hits] or :key[Misses] and the :key[Hit
Rate] will immediately update.)

## False Alarm Rate (FAR)

Likewise, we can summarize our performance when the signal was absent with a :key[False Alarm Rate]
(FAR), also called a :term[false positive rate] or :term[type II error rate]:

<sdt-equation-facr2far></sdt-equation-facr2far>

The :key[False Alarm Rate] tells us the proportion of trials when the signal was *absent* that we
erroneously responded *"present"*.

<sdt-equation-facr2far numeric interactive false-alarms="5" correct-rejections="5">
  </sdt-equation-facr2far>

(Another *live* equation!)

## A table of outcomes and rates

Since the :key[Hit Rate] summarizes performance when the signal was *present* and the :key[False
Alarm Rate] summarizes performance when the signal was *absent*, we can add them to the
corresponding rows of our table of outcomes:

<sdt-example-interactive>
  <detectable-table interactive numeric summary="stimulusRates"></detectable-table>
</sdt-example-interactive>

This is a *live* table, so you can change the count of any type of outcome and observe the effect on
the corresponding rate. Or, you can change a rate, and observe the effect on the corresponding
counts of outcomes. Note that since the counts are necessarily whole numbers, whereas the rates are
real numbers, small changes in a rate may not be reflected in the counts due to rounding.

## Accuracy

If we want to summarize our overall performance with a single number, then we can use
:key[Accuracy], which aggregates across all trials. :key[Accuracy] tells us, on average, how we did
across both signal present and signal absent trials:

<sdt-equation-hmfacr2acc></sdt-equation-hmfacr2acc>

We can see that :key[Hits] and :key[Correct Rejections] are combined together since they are both
types of *correct* responses.

<sdt-equation-hmfacr2acc numeric interactive hits="5" misses="5"
  false-alarms="5" correct-rejections="5"></sdt-equation-hmfacr2acc>

We can add :key[Accuracy] as an overall summary measure to out table of outcomes:

<sdt-example-interactive>
  <detectable-table interactive numeric summary="stimulusRates accuracy"></detectable-table>
</sdt-example-interactive>

If you change the :key[Accuracy] then the other values will change as well, to keep the whole table
consistent. If you play around a bit, you may notice that, even if you keep the total number of
trials constant, you can come up with more than one set of values that has the same :key[Accuracy].

## Tabulating outcomes, rates, & accuracy

Now that we have a variety of summary measures, we can run a block of trials, and see how the table
of outcomes and rates provides a running summary of performance:

<sdt-example-human>
  <detectable-control coherence=".5" trials="10" run pause reset duration="1000"></detectable-control>
  <rdk-task coherence=".5" trials="10" duration="1000" wait="1000" iti="1000"></rdk-task>
  <detectable-response interactive trial feedback="outcome"></detectable-response>
  <detectable-table numeric summary="stimulusRates accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0">
    </detectable-table>
</sdt-example-human>

## Accuracy the great deceiver

At first glance, :key[Accuracy] seems like a very convenient way to summarize overall performance in
a single number. But as students of Signal Detection Theory, we must be very wary of :key[Accuracy].
Indeed :key[Accuracy] is the great deceiver! Let us see why:

Consider this table of outcomes:

<sdt-example-interactive>
  <detectable-table numeric summary="stimulusRates accuracy" hits="100" misses="0" false-alarms="100" correct-rejections="0"></detectable-table>
</sdt-example-interactive>

And now consider this table of outcomes:

<sdt-example-interactive>
  <detectable-table numeric summary="stimulusRates accuracy" hits="0" misses="100" false-alarms="0" correct-rejections="100"></detectable-table>
</sdt-example-interactive>

First, note that the :key[Accuracy] is *identical* in the two tables at 50%. But now note that the
actual patterns of performance are *completely different*! In the first instance, the participant
had one hundred :key[Hits] and zero :key[Misses], whereas in the second instance the participant had
the exact opposite. On the other hand, the first participant had one hundred :key[False Alarms] and
zero :key[Correct Rejections], whereas again the second participant had the exact opposite. Indeed,
if we look down the columns of the tables, we can observe that the first participant always
responded *"Present"*, whereas the second participant always responded *"Absent"*. And yet, despite
completely different performance, and completely different patterns of outcomes, they both resulted
in the same :key[Accuracy]. It turns out that in the context of signal detection, :key[Accuracy] is
a surprisingly poor indicator of performance.

On the other hand, the :key[Hit Rate] and :key[False Alarm Rate] are completely different for our
two participants, clearly communicating the vast differences in performance. By telling us how the
participant performed when the signal was *present* and when the signal was *absent*, the
combination of HR and FAR give us a more complete summary picture of performance.

Now, you may be mumbling to yourself that something else peculiar is going on in this example,
namely that neither participant seems to be paying any attention to the stimuli at all. (Always
responding either "present" or "absent" can be done without regard to the stimulus.) You, my astute
reader, are on to something important, which the next few pages will bring into focus.

## Marginals

<sdt-example-interactive>
  <detectable-control color="outcome"></detectable-control>
  <detectable-table interactive numeric summary="stimulusRates responseRates accuracy"></detectable-table>
</sdt-example-interactive>
