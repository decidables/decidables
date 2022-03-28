---
title: 'Signal and Noise: Staring at Random Dot Kinematograms'
layout: page
script: page
---

## Signal

Before we can develop an understanding of Signal Detection Theory, we need a signal to detect!

What's a signal? Well, it could be your friend's voice at a party, or a distant boat on the sea, or
the smell of truffles under the earth. Any stimulus that you are trying to perceive can be
thought of as a signal.

Our :term[signal] will be :term[coherent] dot motion in a :term[random-dot kinematogram (RDK)]. Go
ahead and see what it looks like:

<sdt-example-human>
  <detectable-control run pause reset></detectable-control>
  <rdk-task count="100" coherence="1" trials="1" probability="1" duration="Infinity"
    wait="0" iti="0"></rdk-task>
</sdt-example-human>

:::ui

Push the :ui[Run] button to display the signal. Push the :ui[Pause] button to temporarily freeze the
display. Or push the :ui[Reset] button to reinitialize the demo with a new direction of motion.

:::

This is coherent motion because the dots are moving together in the *same* direction. 

## Noise

Now, when there is *only* signal, detecting it is not much of a challenge, but we typically also
have noise. Noise is the music and other voices at the party, the swirling clouds of fog on the sea,
the mélange of other smells wafting up from the soil. All of the other stimuli you are not
interested in, but that are interfering with your ability to detect the signal.

Our :term[noise] will be :term[random] dot motion. Give it a try:

<sdt-example-human>
  <detectable-control run pause reset></detectable-control>
  <rdk-task count="100" coherence="0" trials="1" probability="1" duration="Infinity"
    wait="0" iti="0"></rdk-task>
</sdt-example-human>

Noise is incoherent or random motion. Every dot is moving in a *different* direction.

## Signal and noise

In many situations, the signal we are trying to detect is buried in noise: your friend's voice among
the music and other voices at the party, the distant boat among the clouds of fog on the sea, the
smell of truffles among the other smells of soil. The stimulus you are trying to detect, the signal,
is buried amongst many other stimuli, the noise.

Our signal, coherent dot motion, is mixed with random dot motion:

<sdt-example-human>
  <detectable-control run pause reset></detectable-control>
  <rdk-task count="100" coherence="0.5" trials="1" probability="1" duration="Infinity"
    wait="0" iti="0"></rdk-task>
</sdt-example-human>

Here, half the dots are moving coherently in the same direction --- the signal, and half the dots
are moving in different, random directions --- the noise.

## Variable signal strength

How strong is the signal compared to the noise? That can vary continuously from "pure" signal at one
extreme to "pure" noise at the other. And this brings us to one of the motivations for using RDKs as
stimuli: by varying the proportion of dots that are moving coherently between one (all the dots) and
zero (none of the dots), we can elegantly vary our stimulus from "pure" signal to "pure" noise, or
anywhere in between:

<sdt-example-human>
  <detectable-control run pause reset coherence="0.5"></detectable-control>
  <rdk-task count="100" coherence="0.5" trials="1" probability="1" duration="Infinity"
    wait="0" iti="0"></rdk-task>
</sdt-example-human>

:::ui

Move the :ui[Coherence] slider up and down or edit the number to adjust the proportion of coherence
--- even while the dots are moving!

:::

Random-dot kinematograms, also called random-dot motion displays, are widely used to study
motion perception :cite[e.g. @Britten1992] and there are many variations on the basic concept
:cite[@Pilly2009]. For us, they provide a nice parametrically variable :term[stimulus]!
