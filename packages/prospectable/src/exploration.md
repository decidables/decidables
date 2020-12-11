---
title: "Model Exploration: Parameter and Decision Space"
layout: page
script: index
---

## Visualizing the relationship between performance and model

Exploring the relationship between model parameters and behavior.

<cpt-example-interactive probability="0.75" win="20" loss="0" sure="10" alpha="0.9" lambda="2" gamma="0.75">
  <decision-choice interactive></decision-choice>
  <cpt-probability interactive line="first" point="first"></cpt-probability>
  <cpt-value interactive line="first" point="all"></cpt-value>
  <cpt-calculation numeric interactive></cpt-calculation>
  <cpt-space></cpt-space>
  <decision-space></decision-space>
</cpt-example-interactive>
