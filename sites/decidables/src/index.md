---
title: 'Explorable Explanations of Decision Making'
layout: page
script: page
---

<!--lint ignore first-heading-level-->

<header class="dec-main-header">
  <img class="dec-main-icon" src="favicon.svg" alt="decidables icon">
  <hgroup class="dec-main-titles">
    <h1 class="dec-main-title">decidables</h1>
    <p class="dec-main-subtitle">Explorable Explanations of Decision Making</p>
  </hgroup>
  <p class="dec-main-lead">
    In-depth tutorials about topics in the cognitive psychology of decision making.
    Quantitative approaches presented with interactive tasks and manipulable diagrams.
    <em>Fit</em>, <em>predict</em>, and <em>explore</em> the relationships between models and
    data!
  </p>
</header>

<div class="dec-sites">

  <section class="dec-site">
  <!-- DETECTABLE -->
    <div class="dec-site-wrapper">
      <header class="dec-site-header">
        <div class="dec-site-intro">Draft available:</div>
        <a class="dec-site-link" href="detectable/">
          <img class="dec-site-icon" src="detectable/favicon.svg" alt="𝑑′ete𝑐table icon">
          <hgroup class="dec-site-titles">
            <h2 class="dec-site-title">
              <span class="detectable"><span class="math-var d">d′</span>ete<span class="math-var c">c</span>table</span>
            </h2>
            <p class="dec-site-subtitle">An Explorable Explanation of Signal Detection Theory</p>
          </hgroup>
        </a>
        <p class="dec-site-lead">
          How do we decide if a stimulus is present or absent?<br>
          Building on early work studying radar operators, SDT mathematically models our
          choices in terms of our detection <em>sensitivity</em> and response <em>bias</em>.
        </p>
      </header>
      <div class="dec-carousel carousel slide" id="detectable-carousel" data-bs-interval="false" data-bs-touch="false">
        <div class="dec-carousel-indicators carousel-indicators">
          <button type="button" data-bs-target="#detectable-carousel" data-bs-slide-to="0" aria-label="Slide 1" class="active" aria-current="true"></button>
          <button type="button" data-bs-target="#detectable-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#detectable-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#detectable-carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="dec-carousel-items">
          <div class="dec-carousel-item carousel-item active">
            <figure class="dec-demo-figure">
              <sdt-model class="dec-demo" interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
              <figcaption class="dec-demo-caption">Signal and noise distributions with threshold.</figcaption>
            </figure>
          </div>
          <div class="dec-carousel-item carousel-item">
            <figure class="dec-demo-figure">
              <roc-space class="dec-demo" interactive point="all" iso-d="all" iso-c="all" far="0.1" hr="0.8"></roc-space>
              <figcaption class="dec-demo-caption">Receiver operating characteristic (ROC) space.</figcaption>
            </figure>
          </div>
          <div class="dec-carousel-item carousel-item">
            <figure class="dec-demo-figure">
              <detectable-table class="dec-demo" numeric interactive summary="stimulusRates responseRates accuracy" hits="80" misses="20" false-alarms="10" correct-rejections="90" color="outcome"></detectable-table>
              <figcaption class="dec-demo-caption">Stimulus-response contingency table.</figcaption>
            </figure>
          </div>
          <div class="dec-carousel-item carousel-item">
            <figure class="dec-demo-figure">
              <rdk-task class="dec-demo" running count="100" coherence="0.5" trials="Infinity" probability="0.5" duration="1000" wait="1000" iti="1000"></rdk-task>
              <figcaption class="dec-demo-caption">Coherent motion detection task.</figcaption>
            </figure>
          </div>
        </div>
        <button class="dec-carousel-control carousel-control-prev" type="button" data-bs-target="#detectable-carousel" data-bs-slide="prev">
          <span class="dec-carousel-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="dec-carousel-control carousel-control-next" type="button" data-bs-target="#detectable-carousel" data-bs-slide="next">
          <span class="dec-carousel-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>

  <section class="dec-site">
  <!-- PROSPECTABLE -->
    <div class="dec-site-wrapper">
      <header class="dec-site-header">
        <div class="dec-site-intro dec-disabled">Under development...</div>
        <a class="dec-site-link dec-disabled" href="prospectable/">
          <img class="dec-site-icon" src="prospectable/favicon.svg" alt="prospect𝛼b𝜆e icon">
          <hgroup class="dec-site-titles">
            <h2 class="dec-site-title">
              <span class="prospectable">prospect<span class="math-var">α</span>b<span class="math-var">λ</span>e</span>
            </h2>
            <p class="dec-site-subtitle">An Explorable Explanation of Cumulative Prospect Theory</p>
          </hgroup>
        </a>
        <p class="dec-site-lead dec-disabled">
          How do we decide between risky options?<br>
          CPT describes mathematical transformations of objective probabilities and values
          into <em>decision weights</em> and <em>subjective values</em> which we combine on a
          relative scale.
        </p>
      </header>
      <div class="dec-carousel carousel slide" id="prospectable-carousel" data-bs-interval="false" data-bs-touch="false">
        <div class="dec-carousel-indicators carousel-indicators">
          <button type="button" data-bs-target="#prospectable-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#prospectable-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#prospectable-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="dec-carousel-items">
          <div class="dec-carousel-item carousel-item active">
            <figure class="dec-demo-figure">
              <cpt-probability class="dec-demo" interactive gamma="0.75" label probability="0.75"></cpt-probability>
              <figcaption class="dec-demo-caption">Probability weighting function.</figcaption>
            </figure>
          </div>
          <div class="dec-carousel-item carousel-item">
            <figure class="dec-demo-figure">
              <cpt-value class="dec-demo" interactive alpha="0.9" lambda="2" value="10"></cpt-value>
              <figcaption class="dec-demo-caption">Value function.</figcaption>
            </figure>
          </div>
          <div class="dec-carousel-item carousel-item">
            <figure class="dec-demo-figure">
              <risky-task class="dec-demo" running trials="Infinity" duration="2500" iti="1500"></risky-task>
              <figcaption class="dec-demo-caption">Risky decision task.</figcaption>
            </figure>
          </div>
        </div>
        <button class="dec-carousel-control carousel-control-prev" type="button" data-bs-target="#prospectable-carousel" data-bs-slide="prev">
          <span class="dec-carousel-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="dec-carousel-control carousel-control-next" type="button" data-bs-target="#prospectable-carousel" data-bs-slide="next">
          <span class="dec-carousel-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>

  <section class="dec-site">
  <!-- DISCOUNTABLE -->
    <div class="dec-site-wrapper">
      <header class="dec-site-header">
        <div class="dec-site-intro dec-disabled">Under development...</div>
        <a class="dec-site-link dec-disabled" href="discountable/">
          <img class="dec-site-icon" src="discountable/favicon.svg" alt="dis𝑘ountable icon">
          <hgroup class="dec-site-titles">
            <h2 class="dec-site-title">
              <span class="discountable">dis<span class="math-var">k</span>ountable</span>
            </h2>
            <p class="dec-site-subtitle">An Explorable Explanation of Hyperbolic Temporal Discounting</p>
          </hgroup>
        </a>
        <p class="dec-site-lead dec-disabled">
          How do we decide between less sooner or more later?<br>
          <em>Hyperbolic discounting</em> mathematically describes how our subjective
          perception of value changes over time.
        </p>
      </header>
      <div class="dec-carousel carousel slide" id="discountable-carousel" data-bs-interval="false" data-bs-touch="false">
        <div class="dec-carousel-indicators carousel-indicators">
          <button type="button" data-bs-target="#discountable-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#discountable-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div class="dec-carousel-items">
          <div class="dec-carousel-item carousel-item active">
            <figure class="dec-demo-figure">
              <htd-curves class="dec-demo" interactive amount="40" delay="80" k="0.1"></htd-curves>
              <figcaption class="dec-demo-caption">Discounting curve.</figcaption>
            </figure>
          </div>
          <div class="dec-carousel-item carousel-item">
            <figure class="dec-demo-figure">
              <itc-task class="dec-demo" running trials="Infinity" duration="2500" iti="1500"></itc-task>
              <figcaption class="dec-demo-caption">Inter-temporal choice task.</figcaption>
            </figure>
          </div>
        </div>
        <button class="dec-carousel-control carousel-control-prev" type="button" data-bs-target="#discountable-carousel" data-bs-slide="prev">
          <span class="dec-carousel-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="dec-carousel-control carousel-control-next" type="button" data-bs-target="#discountable-carousel" data-bs-slide="next">
          <span class="dec-carousel-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>

  <section class="dec-site">
  <!-- ACCUMULABLE -->
    <div class="dec-site-wrapper">
      <header class="dec-site-header">
        <div class="dec-site-intro dec-disabled">Under development...</div>
        <a class="dec-site-link dec-disabled" href="accumulable/">
          <img class="dec-site-icon" src="accumulable/favicon.svg" alt="𝑎ccumulable icon">
          <hgroup class="dec-site-titles">
            <h2 class="dec-site-title">
              <span class="accumulable"><span class="math-var a">a</span>ccumulable</span>
            </h2>
            <p class="dec-site-subtitle">An Explorable Explanation of the Diffusion Decision Model</p>
          </hgroup>
        </a>
        <p class="dec-site-lead dec-disabled">
          What determines the reaction time and accuracy of our perceptual decisions?<br>
          DDM proposes a mathematical explanation in terms of <em>evidence accumulation</em>.
        </p>
      </header>
      <div class="dec-carousel carousel slide" id="accumulable-carousel" data-bs-interval="false" data-bs-touch="false">
        <div class="dec-carousel-indicators carousel-indicators">
          <button type="button" data-bs-target="#accumulable-carousel" data-bs-slide-to="0" aria-label="Slide 1" class="active" aria-current="true"></button>
          <button type="button" data-bs-target="#accumulable-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#accumulable-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="dec-carousel-items">
          <div class="dec-carousel-item carousel-item active">
            <figure class="dec-demo-figure">
              <ddm-model class="dec-demo" interactive measures means sds trials="10" boundary-separation="1.2" starting-point="0.35" drift-rate="1.5" nondecision-time="150"></ddm-model>
              <figcaption class="dec-demo-caption">Evidence accumulation.</figcaption>
            </figure>
          </div>
          <div class="dec-carousel-item carousel-item">
            <figure class="dec-demo-figure">
              <accumulable-table class="dec-demo" numeric summary color="outcome" correct-count="14" error-count="6" nr-count="0" accuracy="0.7" correct-mean-rt="475" error-mean-rt="328" mean-rt="431" correct-sd-rt="395" error-sd-rt="227" sd-rt="354"></accumulable-table>
              <figcaption class="dec-demo-caption">Accuracy and reaction times.</figcaption>
            </figure>
          </div>
          <div class="dec-carousel-item carousel-item">
            <figure class="dec-demo-figure">
              <rdk-2afc-task class="dec-demo" running count="100" coherence="0.5" trials="Infinity" probability="0.5" duration="1000" wait="1000" iti="1000"></rdk-2afc-task>
              <figcaption class="dec-demo-caption">Motion direction detection task.</figcaption>
            </figure>
          </div>
        </div>
        <button class="dec-carousel-control carousel-control-prev" type="button" data-bs-target="#accumulable-carousel" data-bs-slide="prev">
          <span class="dec-carousel-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="dec-carousel-control carousel-control-next" type="button" data-bs-target="#accumulable-carousel" data-bs-slide="next">
          <span class="dec-carousel-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>

</div>
