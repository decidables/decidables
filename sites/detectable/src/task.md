---
title: "Task: Detecting a Signal in a Random Dot Kinematogram"
layout: page
script: index
---

## A response

We have been introduced to signal and noise, so now we can consider the signal detection problem: Am
I looking at signal or noise? Is that sound my friend's voice or another party-goer? Is that form on
the horizon a distant boat or a denser patch of fog? Is that smell a truffle or another earthy
scent?

We will define any amount of coherent dot motion as our signal, and purely random dot motion as
noise.

In order to test our ability to differentiate signal from noise, we will use our random dot
kinematogram (RDK) to create a :term[task]. As is typical of tasks in cognitive psychology
experiments, our task will consist of one or more :term[trials]. Each trial will start with a
:term[fixation] cross, :ui[+], in the middle of the display, then the RDK stimulus will appear for a
short period of time, followed by a question mark, :ui[?]. Your mission, should you choose to accept
it, is to decide whether the signal (coherent dot motion!) is :key[Present] or :key[Absent] and push
the appropriate button to indicate your choice - this is your :term[response]. You can make your
selection at any time once the stimulus has begun (you will notice that the response buttons become
active at that time). However, do not take too long, because once the question mark goes away, it is
too late.

Go ahead and give it a go! (:ui[Run] to start the trial; :ui[Pause] to temporarily freeze the trial,
:ui[Reset] to reinitialize the experiment, so you can run it again.)

<sdt-example-human>
  <sdt-control run pause reset coherence=".5"></sdt-control>
  <rdk-task count="100" coherence=".5" trials="1" probability=".5" duration="2000"
    wait="2000" iti="2000"></rdk-task>
  <sdt-response interactive feedback="none"></sdt-response>
</sdt-example-human>

Having fun yet?

In case you were wondering, the fixation lasts for two seconds, followed by the
stimulus for two seconds, and then the question mark for one second.

## A block of trials

In the real world, you might attempt to detect a signal once, and then go about the rest of
your day, (things to do, people to see, yada yada). But typically in an experimental context we try
detecting a signal multiple times in a row. Conveniently, our trials lend themselves to being
sequenced one after another, ad infinitum. Ok, ok, perhaps an infinite sequence of trials would get
a bit boring, so lets try something a bit more manageable, say, a :term[block] of five trials:

<sdt-example-human>
  <sdt-control run pause reset coherence=".5"></sdt-control>
  <rdk-task count="100" coherence=".5" trials="5" probability=".5" duration="2000"
    wait="2000" iti="2000"></rdk-task>
  <sdt-response interactive feedback="none"></sdt-response>
</sdt-example-human>

OK, now are you having fun? It can take a bit of practice to get the hang of the timing of the
trials, the positioning of the response buttons, etc... If you keep at it, sooner or later you may
notice that the actual signal detection part of this task is too easy. Well, yes, in this example,
the signal is 100% coherent, so you are unlikely to confuse it for noise! What was that? You want a
challenge? All right then...

## A customizable block of trials!

In this example, you can choose how many trials there will be in a block using the :ui[Trials]
slider, the proportion of coherence for the signal using the :ui[Coherence] slider, and the duration
the stimulus is available using the :ui[Duration] slider. Now lookie here - we have ourselves
something approaching a legitimate signal detection task!

<sdt-example-human>
  <sdt-control run pause reset coherence=".5" trials="5" duration="2000"></sdt-control>
  <rdk-task count="100" coherence=".5" trials="5" probability=".5" duration="2000"
    wait="2000" iti="2000"></rdk-task>
  <sdt-response  interactive feedback="none"></sdt-response>
</sdt-example-human>

However, you may be feeling a bit dissatisfied, because you don't know how you are doing. Well, go
to the next page then, so we can start talking about outcomes and feedback!