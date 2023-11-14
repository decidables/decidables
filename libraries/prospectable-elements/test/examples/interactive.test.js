import {
  aTimeout,
  expect,
  fixture,
  html,
  oneEvent,
  sendKeys,
} from '../../../../scripts/test';

import '../../src/components/cpt-calculation';
import '../../src/components/cpt-probability';
import '../../src/components/cpt-value';
import '../../src/components/risky-choice';
import '../../src/examples/interactive';

describe('cpt-example-interactive', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`
      <cpt-example-interactive probability="0.75" win="20" loss="0" sure="10" alpha="0.9" lambda="2" gamma="0.75">
        <risky-choice interactive></risky-choice>
        <cpt-probability interactive></cpt-probability>
        <cpt-value interactive></cpt-value>
        <cpt-calculation numeric interactive></cpt-calculation>
        <!-- <cpt-space updateable></cpt-space> -->
        <!-- <decision-space updateable></decision-space> -->
      </cpt-example-interactive>
    `);
    expect(el).shadowDom.to.equal(`
      <div class="holder">
        <div class="body">
          <slot>
            Empty!
          </slot>
        </div>
      </div>
    `);
  });

  it('has a lightDom', async () => {
    const el = await fixture(html`
      <cpt-example-interactive probability="0.75" win="20" loss="0" sure="10" alpha="0.9" lambda="2" gamma="0.75">
        <risky-choice interactive></risky-choice>
        <cpt-probability interactive></cpt-probability>
        <cpt-value interactive></cpt-value>
        <cpt-calculation numeric interactive></cpt-calculation>
        <!-- <cpt-space updateable></cpt-space> -->
        <!-- <decision-space updateable></decision-space> -->
      </cpt-example-interactive>
    `);
    expect(el).lightDom.to.equal(`
      <risky-choice class="keyboard" interactive loss="0" win="20" probability="0.75" sure="10" state="choice"></risky-choice>
      <cpt-probability class="keyboard" interactive probability="0.75" gamma="0.75" label=""></cpt-probability>
      <cpt-value class="keyboard" interactive value="10" alpha="0.9" lambda="2" label="s"></cpt-value>
      <cpt-calculation  class="keyboard" numeric interactive loss="0" win="20" probability="0.75" sure="10" alpha="0.9" lambda="2" gamma="0.75"></cpt-calculation>
    `);
  });

  it('can propagate a risky-choice interaction', async () => {
    const el = await fixture(html`
      <cpt-example-interactive probability="0.75" win="20" loss="0" sure="10" alpha="0.5" lambda="2" gamma="0.75">
        <risky-choice interactive></risky-choice>
        <cpt-probability interactive></cpt-probability>
        <cpt-value interactive></cpt-value>
        <cpt-calculation numeric interactive></cpt-calculation>
        <!-- <cpt-space updateable></cpt-space> -->
        <!-- <decision-space updateable></decision-space> -->
      </cpt-example-interactive>
    `);
    // Wait for resize?
    await aTimeout(200);
    // Action
    const target = el.querySelector('risky-choice')
      .shadowRoot.querySelector('.sure')
      .shadowRoot.querySelector('decidables-spinner')
      .shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '9'}); });
    await oneEvent(el, 'risky-choice-change');
    // Check "after" state
    expect(el.riskyChoice.xs).to.equal(9);
    expect(el.cptValue.x).to.equal(9);
    expect(el.cptCalculation.xs).to.equal(9);
  });

  it('can propagate a cpt-probability interaction', async () => {
    const el = await fixture(html`
      <cpt-example-interactive probability="0.75" win="20" loss="0" sure="10" alpha="0.5" lambda="2" gamma="0.75">
        <risky-choice interactive></risky-choice>
        <cpt-probability interactive></cpt-probability>
        <cpt-value interactive></cpt-value>
        <cpt-calculation numeric interactive></cpt-calculation>
        <!-- <cpt-space updateable></cpt-space> -->
        <!-- <decision-space updateable></decision-space> -->
      </cpt-example-interactive>
    `);
    // Wait for resize?
    await aTimeout(200);
    // Action
    const target = el.querySelector('cpt-probability').shadowRoot.querySelector('.point.interactive');
    target.focus();
    setTimeout(() => { sendKeys({press: 'ArrowLeft'}); });
    await oneEvent(el, 'cpt-probability-change');
    // Check "after" state
    expect(el.cptProbability.p).to.equal(0.7);
    expect(el.riskyChoice.pw).to.equal(0.7);
    expect(el.cptCalculation.pw).to.equal(0.7);
  });

  it('can propagate a cpt-value interaction', async () => {
    const el = await fixture(html`
      <cpt-example-interactive probability="0.75" win="20" loss="0" sure="10" alpha="0.5" lambda="2" gamma="0.75">
        <risky-choice interactive></risky-choice>
        <cpt-probability interactive></cpt-probability>
        <cpt-value interactive></cpt-value>
        <cpt-calculation numeric interactive></cpt-calculation>
        <!-- <cpt-space updateable></cpt-space> -->
        <!-- <decision-space updateable></decision-space> -->
      </cpt-example-interactive>
    `);
    // Wait for resize?
    await aTimeout(200);
    // Action
    const target = el.querySelector('cpt-value').shadowRoot.querySelector('.point.interactive');
    target.focus();
    setTimeout(() => { sendKeys({press: 'ArrowLeft'}); });
    await oneEvent(el, 'cpt-value-change');
    // Check "after" state
    expect(el.cptValue.x).to.equal(9);
    expect(el.riskyChoice.xs).to.equal(9);
    expect(el.cptCalculation.xs).to.equal(9);
  });

  it('can propagate a cpt-calculation interaction', async () => {
    const el = await fixture(html`
      <cpt-example-interactive probability="0.75" win="20" loss="0" sure="10" alpha="0.5" lambda="2" gamma="0.75">
        <risky-choice interactive></risky-choice>
        <cpt-probability interactive></cpt-probability>
        <cpt-value interactive></cpt-value>
        <cpt-calculation numeric interactive></cpt-calculation>
        <!-- <cpt-space updateable></cpt-space> -->
        <!-- <decision-space updateable></decision-space> -->
      </cpt-example-interactive>
    `);
    // Action
    const target = el.querySelector('cpt-calculation').shadowRoot.querySelector('decidables-spinner.xw').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '9'}); });
    await oneEvent(el, 'cpt-calculation-change');
    // Check "after" state
    expect(el.cptCalculation.xw).to.equal(9);
    expect(el.riskyChoice.xw).to.equal(9);
    expect(el.cptValue.values[1].x).to.equal(9);
  });

  it('connects the components properly');

  it('can include cpt-space and decision-space');
});
