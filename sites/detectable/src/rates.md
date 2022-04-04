---
title: 'Tables &amp; Rates: Tabulating and Summarizing Task Performance'
layout: page
script: page
---

## Tabulating outcomes

When we perform a block of trials, we can count up the occurrences of each of our four outcomes:

<sdt-example-human>
  <detectable-control coherence=".5" trials="10" run pause reset duration="1000"></detectable-control>
  <rdk-task coherence=".5" trials="10" duration="1000" wait="1000" iti="1000"></rdk-task>
  <detectable-response interactive trial feedback="outcome"></detectable-response>
  <detectable-table numeric hits="0" misses="0" false-alarms="0" correct-rejections="0"></detectable-table>
</sdt-example-human>

By counting our outcomes across all of the trials in the block we now have our first aggregate
measures of performance. However, the counts are dependent not only our level of performance, but
also on the total number of trials, which often isn't that interesting to us. We can account for
that by calculating *rates* of performance.

## Accuracy

Perhaps the most familiar rate is :term[accuracy], which summarizes our *overall* performance with a
single number, by aggregating across all trials. :key[Accuracy] tells us, on average, how often
we were :key[correct] versus how often we made an :key[error]:

<sdt-equation-hmfacr2acc></sdt-equation-hmfacr2acc>

:key[Hits] and :key[correct rejections] are combined together since they are both correct responses,
while :key[false alarms] and :key[misses] are combined since they are both errors.

<sdt-equation-hmfacr2acc numeric interactive hits="5" misses="5" false-alarms="5" correct-rejections="5"></sdt-equation-hmfacr2acc>

:::ui

This is a *live* equation. You can edit the number of :key[Hits], :key[Misses], :key[False Alarms],
or :key[Correct Rejections] and the :key[Accuracy] will update immediately!

:::

## Hit rate (HR)

It turns out (as we will discuss in more detail below) that accuracy often isn't a great measure to
use. We can learn more by focusing a bit more...

If we only focus on trials when the signal was actually :key[present], and calculate our average
performance, we get a :term[hit rate] (:term[HR]), also called a :term[true positive rate]:

<sdt-equation-hm2hr></sdt-equation-hm2hr>

The :key[hit rate] tells us the proportion of trials when the signal was :key[present] that we
*correctly* responded :key['present'].

<sdt-equation-hm2hr numeric interactive hits="5" misses="5"></sdt-equation-hm2hr>

:::ui

Another *live* equation! Edit :key[Hits] or :key[Misses] and the :key[Hit Rate] updates immediately.

:::

## False alarm rate (FAR)

Likewise, if we only focus on trials when the signal was actually :key[absent], and calculate our
average performance, we get a :term[false alarm rate] (:term[FAR]), also called a :term[false
positive rate]:

<sdt-equation-facr2far></sdt-equation-facr2far>

The :key[false alarm rate] tells us the proportion of trials when the signal was :key[absent] that
we *erroneously* responded :key['present'].

<sdt-equation-facr2far numeric interactive false-alarms="5" correct-rejections="5"></sdt-equation-facr2far>

## Tabulating outcomes and rates

Now that we have a few rates to work with, we can add them to our table. Since the :key[hit rate]
summarizes performance when the signal was :key[present] and the :key[false alarm rate] summarizes
performance when the signal was :key[absent], we can add them to the corresponding rows. And since
:key[accuracy] is an overall summary, we'll stick it in the bottom right corner.

Run a block of trials, and see how the table of outcomes and rates provides a running overview of
performance:

<sdt-example-human>
  <detectable-control coherence=".5" trials="10" run pause reset duration="1000"></detectable-control>
  <rdk-task coherence=".5" trials="10" duration="1000" wait="1000" iti="1000"></rdk-task>
  <detectable-response interactive trial feedback="outcome"></detectable-response>
  <detectable-table numeric summary="stimulusRates accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0">
    </detectable-table>
</sdt-example-human>

## Exploring outcomes and rates

Let's learn a little more about the relationships between our rates and measures by playing around
with hypothetical values:

<sdt-example-interactive>
  <detectable-table interactive numeric summary="stimulusRates accuracy"></detectable-table>
</sdt-example-interactive>

:::ui

This is a *live* table. Change any count or rate and observe the effect on other values. Note that
since the counts are necessarily whole numbers, whereas the rates are real numbers, small changes in
a rate may not be reflected in the counts due to rounding.

:::

If you play around a bit, you may notice that, even if you keep the total number of trials constant,
you can come up with more than one set of values that has the same :key[accuracy]. Hmmm,
interesting...

## Accuracy, the great deceiver

At first glance, :key[accuracy] seems like a very convenient way to summarize overall performance in
a single number. But as students of Signal Detection Theory, we must be very wary of it. Indeed
it is the great deceiver! Let us see why:

Consider this table of outcomes:

<sdt-example-interactive>
  <detectable-table numeric summary="stimulusRates accuracy" hits="100" misses="0" false-alarms="100" correct-rejections="0"></detectable-table>
</sdt-example-interactive>

And now consider this table of outcomes:

<sdt-example-interactive>
  <detectable-table numeric summary="stimulusRates accuracy" hits="0" misses="100" false-alarms="0" correct-rejections="100"></detectable-table>
</sdt-example-interactive>

First, note that the :key[accuracy] is *identical* in the two tables at 50%. But now note that the
actual patterns of performance are *completely different*! In the first instance, the participant
had one hundred :key[hits] and zero :key[misses], whereas in the second instance the participant had
the exact opposite. On the other hand, the first participant had one hundred :key[false alarms] and
zero :key[correct rejections], whereas again the second participant had the exact opposite. Indeed,
if we look down the columns of the tables, we can observe that the first participant always
responded :key['present'], whereas the second participant always responded :key['absent']. And yet,
despite completely different performance, and completely different patterns of outcomes, they both
resulted in the same :key[accuracy]. It turns out that in the context of signal detection,
:key[accuracy] is a surprisingly poor indicator of performance.

On the other hand, the :key[hit rate] and :key[false alarm rate] are completely different for our
two participants, clearly communicating the vast differences in performance. By telling us how the
participant performed when the signal was :key[present] and when the signal was :key[absent], the
combination of :key[HR] and :key[FAR] give us a more complete summary picture of performance.

Now, you may be mumbling to yourself that something else peculiar is going on in this example,
namely that *neither* participant seems to be paying any attention to the stimuli at all. (Always
responding either :key['present'] or :key['absent'] can be done without regard to the stimulus.)
You, my astute reader, are on to something important, which the next few pages will bring into
focus.
