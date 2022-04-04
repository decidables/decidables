---
title: 'Marginals: More Ways to Summarize Performance'
layout: page
script: page
---

## Marginals

We've discussed how to summarize performance across trials using :key[hit rate], :key[false alarm
rate], and :key[accuracy]. Each of these is sometimes referred to as :term[marginal measure] (or
just :term[marginal] for short), because they aggregate performance across a row or column of our
data table, and are typically presented, quite literally, on the table's *margins*.

The :key[hit rate] and :key[false alarm rate] aggregate across the *rows* of our table. In other
words, they tell us about how well we performed when the signal was *actually* :key[present] or
:key[absent]. These measures are the ones most relevant to Signal Detection Theory, but we can also
aggregate down the columns.

When we calculate the marginals for the *columns* in our data table, we are summarizing performance
when we *responded* :key['present'] or :key['absent'].

## Positive Predictive Value

The marginal for trials were we responded :key['present'] is the :term[positive predictive value]
(:term[PPV]), also called the :term[precision]. The :key[positive predictive value] tells us how
accurate we were on the trials where we responded :key['present'].

<sdt-equation-hfa2ppv></sdt-equation-hfa2ppv>

<sdt-equation-hfa2ppv numeric interactive hits="5" false-alarms="5"></sdt-equation-hfa2ppv>

## False Omission Rate

The marginal for trials were we responded :key['absent'] is the :term[false omission rate]
(:term[FOR]). The :key[false omission rate] tells us how accurate we were on the trials where we
responded :key['absent'].

<sdt-equation-mcr2fomr></sdt-equation-mcr2fomr>

<sdt-equation-mcr2fomr numeric interactive misses="5" correct-rejections="5"></sdt-equation-mcr2fomr>

## A warning

It is important to note that the :key[PPV] and the :key[FOR] are highly influenced by the :term[base
rate] (:term[prevalence]) of the signal. In other words, the same signal detector behaving in the
same way can have a different :key[PPV] if the signal occurs on a different proportion of trials.

Depending on the question you are trying to answer, this may be entirely appropriate, or extremely
misleading!

## One table to rule them all

Let's add the new marginals to our table of outcomes and see how they all relate. We can emphasize
the rows (i.e. group by stimulus), the columns (i.e. group by responses), accuracy (i.e. group by
correct versus error), or the full diversity of our measures:

<sdt-example-interactive>
  <detectable-control color="all"></detectable-control>
  <detectable-table interactive numeric summary="stimulusRates responseRates accuracy"></detectable-table>
</sdt-example-interactive>

:::ui

You can toggle the :ui[Emphasis] to select whether the table cells are colored by: *accuracy* as
:key[Correct] versus :key[Error], *stimulus* as signal :key[Present] versus :key[Absent], *response*
as :key['Present'] versus :key['Absent'], *outcome* as :key[Hit], :key[Miss], :key[Correct
Rejection], or :key[False Alarm], or fully broken down by *all* categories.

:::
