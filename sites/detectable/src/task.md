---
title: 'Task: Adding a response'
layout: page
script: page
---

## A response

We have been introduced to signal and noise, so now we can consider the signal detection problem: Am
I looking at a signal or not? Is that sound my friend's voice or the other party-goers? Is that form
on the horizon a distant boat or just more fog? Is that smell a truffle or some other earthy scent?

Your mission, should you choose to accept it, is to decide whether the signal is :key[present] or
:key[absent] and make the appropriate :term[response]. If you do think it is there, respond
:key['present'], and if you don't, respond :key['absent']. 

Go ahead and give it a go!

<sdt-example-human>
  <detectable-control run pause reset></detectable-control>
  <rdk-task count="100" coherence="1" trials="1" probability=".5" duration="Infinity"
    wait="0" iti="0"></rdk-task>
  <detectable-response interactive feedback="none"></detectable-response>
</sdt-example-human>

:::ui

Press :button[Run] to show the stimulus, :button[Pause] to temporarily freeze it, or
:button[Reset] to start over with a new stimulus.

To respond, press the :button[Present] or :button[Absent] button.

:::

## A trial

Now that we have a stimulus and a response, we can create a :term[task]. As is typical of tasks in
cognitive psychology experiments, the building block of our task will be a :term[trial]. Each trial
will start with an :term[inter-trial interval] (:term[ITI]) showing a :term[fixation] cross in the
middle of the display --- this gives you a chance to get ready. Then the RDK stimulus will appear
for a short period of time, followed by a question mark --- this allows us to control the amount of
time the stimulus is presented independently from the amount of time you have to respond.  You can
respond at any time once the stimulus has begun. However, do not take too long, because once the
question mark goes away, it is too late!

<sdt-example-human>
  <detectable-control run pause reset ></detectable-control>
  <rdk-task count="100" coherence="1" trials="1" probability=".5" duration="2000"
    wait="2000" iti="2000"></rdk-task>
  <detectable-response interactive feedback="none"></detectable-response>
</sdt-example-human>

:::ui

Press :button[Run] to start the trial, :button[Pause] to temporarily freeze the trial, or
:button[Reset] to reinitialize it, so you can run it again.

On each trial, you will see a fixation cross :prompt[+] during the ITI, followed by the stimulus,
followed by a question mark :prompt[?] during the waiting period.

Press the :button[Present] or :button[Absent] buttons to respond while the stimulus is visible or
during the waiting period.

:::

Having fun yet?

In case you were wondering, in this example, the ITI, the stimulus, and the waiting period each last
for two seconds.

## A block of trials

In the real world, you might attempt to detect a signal once, and then go about the rest of your
day, (things to do, people to see, yada yada). But typically in an experiment we try detecting a
signal multiple times in a row. Conveniently, our trials lend themselves to being sequenced one
after another, ad infinitum. Ok, ok, perhaps an infinite sequence of trials would get a bit boring,
so lets try something a bit more manageable, say, a :term[block] of five trials:

<sdt-example-human>
  <detectable-control run pause reset></detectable-control>
  <rdk-task count="100" coherence="1" trials="5" probability=".5" duration="2000"
    wait="2000" iti="2000"></rdk-task>
  <detectable-response interactive feedback="none"></detectable-response>
</sdt-example-human>

OK, now are you having fun? It can take a bit of practice to get the hang of the timing of the
trials, the positioning of the response buttons, etc... If you keep at it, sooner or later you may
notice that the actual signal-detection part of this task is too easy. Well, yes, in this example,
the signal is 100% coherent, so you are unlikely to confuse it for noise! What was that? You want a
challenge? All right then...

## A customizable block of trials!

In this example, you can choose how many trials there will be in a block, the duration the stimulus
is available, and the proportion of coherence for the signal. The power is in your hands.

<sdt-example-human>
  <detectable-control run pause reset coherence=".5" trials="5" duration="2000"></detectable-control>
  <rdk-task count="100" coherence=".5" trials="5" probability=".5" duration="2000"
    wait="2000" iti="2000"></rdk-task>
  <detectable-response  interactive feedback="none"></detectable-response>
</sdt-example-human>

:::ui

Choose the number of trials in the block with the :slider[Trials] slider. Select the length in
milliseconds of the stimulus, response period, and inter-trial interval using the :slider[Duration]
slider. Adjust how hard the task is by selecting the proportion of coherence for the signal with the
:slider[Coherence] slider.

:::

Now lookie here --- we have ourselves something approaching a legitimate signal detection task!
However, you may be feeling a bit dissatisfied, because you don't know how you are doing. Well, go
to the next page then, so we can start talking about outcomes and feedback!
