---
title: '<span class="dec-name">prospect<span class="math-var">α</span>b<span class="math-var">λ</span>e</span>: Prediction'
layout: page
script: page
style: prospectable-page
---

<cpt-example-model>
  <prospectable-control trials duration run pause reset></prospectable-control>
  <risky-task></risky-task>
  <cpt-parameters alpha lambda gamma interactive></cpt-parameters>
  <cpt-value interactive></cpt-value>
  <cpt-probability interactive></cpt-probability>
  <prospectable-response trial feedback="outcome" payoff="both"></prospectable-response>
  <decision-space updateable point="rest" alpha="1" lambda="1" gamma="1"></decision-space>
</cpt-example-model>

:::ui

:::
