---
title: "Task: Detecting a Signal in a Random Dot Kinematogram"
layout: page
script: index
---

We have been introduced to signal and noise, so now we can consider the signal detection problem: Am
I looking at signal or noise? Is that sound my friend's voice or another party-goer? Is that form on
the horizon a distant boat or a denser patch of fog? Is that smell a truffle or another earthy
scent?

We will define any amount of coherent dot motion as our signal, and purely random dot motion as
noise.

## One trial

In order to test our ability to differentiate signal from noise, we will use our random dot
kinematogram (RDK) to create a *task*. As is typical of tasks in cognitive psychology experiments,
our task will consist of one or more *trials*. Each trial will start with a fixation cross, `+`, in
the middle of the display, then the RDK stimulus will appear for a short period of time, followed by
a question mark, `?`. Your mission, should you choose to accept it, is to decide whether the signal
(coherent dot motion!) is `Present` or `Absent` and push the appropriate button to indicate your
choice. You can make your selection at anytime once the stimulus has begun (you will notice that the
response buttons become active at that time). However, do not take too long, because once the
question mark goes away, it is too late.

Go ahead and give it a go! (`Run` to start the trial; `Pause` to temporarily freeze the trial,
`Reset` to reinitialize the experiment, so you can run it again.)

<sdt-example-human>
  <sdt-control run pause reset></sdt-control>
  <rdk-task count="100" coherence="1" trials="1" probability=".5" duration="2000"
    wait="2000" iti="2000"></rdk-task>
  <sdt-response feedback="none"></sdt-response>
</sdt-example-human>

Having fun yet?

In case you were wondering, the fixation lasts for two seconds, followed by the
stimulus for two seconds, and then the question mark for two seconds.

## Five trials

In the real world, you might attempt to detect a signal once, and then go about the rest of
your day, (things to do, people to see, yada yada). But typically in an experimental context we try
detecting a signal multiple times in a row. Conveniently, our trials lend themselves to being
sequenced one after another, ad infinitum. Ok, ok, perhaps an infinite sequence of trials would get
a bit boring, so lets try something a bit more manageable, say, a *block* of five trials:

<sdt-example-human>
  <sdt-control run pause reset></sdt-control>
  <rdk-task count="100" coherence="1" trials="5" probability=".5" duration="2000"
    wait="2000" iti="2000"></rdk-task>
  <sdt-response feedback="none"></sdt-response>
</sdt-example-human>

OK, now are you having fun? It can take a bit of practice to get the hang of the timing of the
trials, the positioning of the response buttons, etc... If you keep at it, sooner or later you may
notice that the actual signal detection part of this task is too easy. Well, yes, in this example,
the signal is 100% coherent, so you are unlikely to confuse it for noise! What was that? You want a
challenge? All right then...

## A customizable block of trials!

In this example, you can choose how many trials there will be in a block, and you can choose the
proportion of coherence for the signal. Now lookie here - we have ourselves something approaching a
legitimate signal detection task!

<sdt-example-human>
  <sdt-control run pause reset coherence="1" trials="5"></sdt-control>
  <rdk-task count="100" coherence="1" trials="5" probability=".5" duration="2000"
    wait="2000" iti="2000"></rdk-task>
  <sdt-response feedback="none"></sdt-response>
</sdt-example-human>

You may be feeling a bit dissatisfied, because you don't know how you are doing. Well, go to the
next page then, so we can start talking about outcomes and feedback!
