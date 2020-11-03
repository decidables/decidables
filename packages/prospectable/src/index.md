---
title: "<span class='prospectable'>\
  prospect<span class='math-var'>α</span>b<span class='math-var'>λ</span>e</span>: \
  An Explorable Explanation of Cumulative Prospect Theory"
layout: page
script: index
---

## Introduction

Welcome to **prospect<span class='math-var'>α</span>b<span class='math-var'>λ</span>e**, an
interactive introduction to Cumulative Prospect Theory (CPT). This site uses manipulable diagrams,
dynamic tables, and live equations to explain the motivation, conceptualization, and application of
CPT.

<cpt-example-interactive>
  <decision-choice interactive probability="0.75" win="20" loss="0" sure="10" alpha="0.9" lambda="2" gamma="0.75"></decision-choice>
  <cpt-probability interactive line="first" point="first"></cpt-probability>
  <cpt-value interactive line="first" point="all"></cpt-value>
  <cpt-calculation numeric interactive></cpt-calculation>
  <cpt-space></cpt-space>
  <decision-space></decision-space>
</cpt-example-interactive>

<cpt-calculation></cpt-calculation>

<cpt-equation-vw2u></cpt-equation-vw2u>

<cpt-equation-vw2u numeric interactive outcomes="2" value="5 0" weight="0.9 0.1"></cpt-equation-vw2u>

<cpt-equation-xal2v></cpt-equation-xal2v>

<cpt-equation-xal2v numeric interactive value="5" alpha="0.9" lambda="2"></cpt-equation-xal2v>

<cpt-equation-pg2w></cpt-equation-pg2w>

<cpt-equation-pg2w numeric interactive probability="0.75" gamma="0.75"></cpt-equation-pg2w>
