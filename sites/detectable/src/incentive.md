---
title: 'Bias and Incentive: Influences on <span class="math-var">c</span>'
layout: page
script: page
---

## Influencing bias

On the previous page, we explored factors that alter :key[sensitivity]. Now let's turn our attention
to :key[bias]. We have discussed how SDT defines :key[bias] as the position of the decision
threshold relative to the neutral point right between the distributions. But what determines the
threshold location for a given participant in a given block of trials? One way to look at this is to
observe that while :key[sensitivity] determines *how many* errors we will make, :key[bias]
determines what *type* of errors they will be. A neutral bias balances equally between type I
errors, :key[false alarms], and type II errors, :key[misses]. A more conservative bias means more
:key[misses], while a more liberal bias means more :key[false alarms]. What might influence our
desire to avoid one type more than the other?

Of course, there are lots of potential answers to the question just posed, but many of them center
around the concept of :term[incentive]. What are the consequences of a :key[miss] versus a
:key[false alarm]? And how much do I value those consequences?

In the world, those consequences can take many forms. For example, consider the potential
consequences of a miss, if you are operating a metal detector at the airport. Or, on the other hand,
the consequences of a false alarm, if you are on a jury in a courtroom. To keep things simpler, and
more quantitative, we'll use (theoretical) monetary incentives. In the examples below, each possible
outcome is associated with an incentive in the form of a monetary reward or punishment.

## When misses are worse

First, let's consider a situation where the negative consequences of a :key[miss] are much worse
than those of a :key[false alarm]. (And the positive consequences of a :key[hit] are much better
than those of a :key[correct rejection]). Give it a try:

<sdt-example-human>
  <detectable-control run pause reset></detectable-control>
  <rdk-task coherence=".2" trials="10" duration="1000" wait="1000" iti="1000"></rdk-task>
  <detectable-response interactive trial feedback="outcome" payoff="total" no-response-payoff="-100"
    hit-payoff="90" miss-payoff="-90" correct-rejection-payoff="10" false-alarm-payoff="-10">
  </detectable-response>
  <detectable-table numeric summary="stimulusRates accuracy" payoff
    hits="0" misses="0" false-alarms="0" correct-rejections="0"
    hit-payoff="90" miss-payoff="-90" correct-rejection-payoff="10" false-alarm-payoff="-10">
  </detectable-table>
  <roc-space point="all" iso-d="all" iso-c="all" far=".5" hr=".5"></roc-space>
  <sdt-model threshold bias distributions sensitivity color="outcome" d="0" c="0"></sdt-model>
</sdt-example-human>

:::ui

The incentive for each outcome is displayed beneath the corresponding label in the table of
outcomes. Gain **$90** for :key[Hits], lose **$10** for :key[False Alarms], gain **$10** for
:key[Correct Rejections], lose **$90** for :key[Misses]. In addition, you will lose **$100** for
:key[No Response], so make sure you respond on each trial!

On each trial, your gain or loss will be displayed below the outcome in the feedback box. And a
running total of gains and losses in the block is displayed below that box.

:::

How did you respond? If you are like me, you made a lot more :key['present'] responses than
:key['absent'] responses. It just makes good sense, since it maximizes possible gains, and minimizes
possible losses.

## When false alarms are worse

Now, let's try out the opposite scenario, where the negative consequences of a :key[false alarm] are
now much worse than those of a :key[miss]. (And the positive consequences of a :key[correct
rejection] are much better than those of a :key[hit]). Give this version a try:

<sdt-example-human>
  <detectable-control run pause reset></detectable-control>
  <rdk-task coherence=".2" trials="10" duration="1000" wait="1000" iti="1000"></rdk-task>
  <detectable-response interactive trial feedback="outcome" payoff="total" no-response-payoff="-100"
    hit-payoff="10" miss-payoff="-10" correct-rejection-payoff="90" false-alarm-payoff="-90">
  </detectable-response>
  <detectable-table numeric summary="stimulusRates accuracy" payoff
    hits="0" misses="0" false-alarms="0" correct-rejections="0"
    hit-payoff="10" miss-payoff="-10" correct-rejection-payoff="90" false-alarm-payoff="-90">
  </detectable-table>
  <roc-space point="all" iso-d="all" iso-c="all" far=".5" hr=".5"></roc-space>
  <sdt-model threshold bias distributions sensitivity color="outcome" d="0" c="0"></sdt-model>
</sdt-example-human>

How did you respond this time? The logical thing to do this time is to shift to lots of
:key['absent'] responses and far fewer ['present'] responses.

Take a look at the position of the threshold in the model fits for the two blocks of trials you just
performed. Is the threshold shifted to the left in the first case and to the right in the second?

## Exploring bias

As we saw on the previous page, when we want to compare performance across multiple blocks while
manipulating an experimental variable of interest, it is helpful to plot the results from each block
in the same ROC space, for easier direct comparison.

Try this out below. Run a few blocks, each time with a different balance of incentives:

<sdt-example-human>
  <detectable-control trials="10" duration="1000" coherence=".2" payoff="50" run pause reset ></detectable-control>
  <rdk-task coherence=".2" trials="10" duration="1000" wait="1000" iti="1000"></rdk-task>
  <detectable-response interactive trial feedback="outcome" payoff="total" no-response-payoff="-100"
    hit-payoff="50" miss-payoff="-50" correct-rejection-payoff="50" false-alarm-payoff="-50">
  </detectable-response>
  <detectable-table numeric summary="stimulusRates accuracy" payoff
    hits="0" misses="0" false-alarms="0" correct-rejections="0"
    hit-payoff="50" miss-payoff="-50" correct-rejection-payoff="50" false-alarm-payoff="-50">
  </detectable-table>
  <roc-space point="all" iso-d="all" iso-c="all" history far=".5" hr=".5"></roc-space>
  <sdt-model threshold bias distributions sensitivity color="outcome" d="0" c="0"></sdt-model>
</sdt-example-human>

:::ui

Use the :slider[Payoff] slider to determine the balance of incentives. When the slider is at **$0**,
:key[False Alarms] are punished the most. At **$50**, :key[False Alarms] and :key[Misses] are
punished equally. And at **$100**, :key[Misses] are punished the most.

:::

Your particular results may vary due to a wide variety of factors, but, in general, we find that as
we shift from punishing :key[false alarms] to punishing :key[misses], the resulting points in ROC
space shift from being nearer to the lower-left corner to being nearer to the upper-right corner.

As we observed back on the page about [:page[Iso-Sensitivity Curves]](sensitivity.html), SDT
predicts that if our manipulation of incentive truly impacts :key[bias] and not :key[sensitivity],
then the points should all fall on the same :key[iso-sensitivity curve], and would ideally look like
this:

<sdt-example-multiple variable="c" values="2 1 0 -1 -2">
  <sdt-model interactive distributions sensitivity color="stimulus"></sdt-model>
  <roc-space point="rest" iso-d="first" iso-c="rest"></roc-space>
</sdt-example-multiple>

:::ui

Choose the :key[Sensitivity] by moving the distributions in the model diagram. A range of values for
the :key[Bias] have been selected to illustrate how manipulating it looks in ROC space.

:::

While the exact position of the points depends on the :key[bias], in general, the pattern of points
arrayed from the bottom left corner to the top right corner of ROC space holds. And even if
:key[sensitivity] varies a bit from condition to condition, that pattern will remain.

We've pushed around :key[bias] by manipulating the payoffs for the outcomes, but the same
pattern should hold for other manipulations of incentive. For example, if the *frequency* of signal
:key[present] and :key[absent] trials is unequal, that can lead to a :key[bias]. This works because
it changes the prior likelihood of the stimuli.
