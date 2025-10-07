---
title: '<span class="dec-name">prospect<span class="math-var">α</span>b<span class="math-var">λ</span>e</span>: Fitting'
layout: page
script: page
style: prospectable-page
---

<cpt-example-human>
  <prospectable-control trials duration run pause reset></prospectable-control>
  <risky-task></risky-task>
  <prospectable-response interactive trial feedback="outcome" payoff="both"></prospectable-response>
  <cpt-parameters alpha lambda gamma></cpt-parameters>
  <cpt-value></cpt-value>
  <cpt-probability></cpt-probability>
  <decision-space point="rest" alpha="1" lambda="1" gamma="1"></decision-space>
  <cpt-fit></cpt-fit>
<!--
  <cpt-calculation numeric interactive></cpt-calculation>
  <cpt-space></cpt-space>
 -->
</cpt-example-human>

:::ui

:::
