import {
  expect,
  fixture,
  html,
  mouseClickElement,
  oneEvent,
  sendKeys,
  waitUntil,
} from '../../../../scripts/test-utility';

import '../../src/components/cpt-parameters';
import '../../src/components/cpt-calculation';
import '../../src/components/cpt-probability';
import '../../src/components/cpt-value';
import '../../src/components/risky-choice';
import '../../src/examples/interactive';

describe('cpt-example-interactive', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`
      <cpt-example-interactive>
        <risky-choice interactive></risky-choice>
        <cpt-parameters alpha lambda gamma interactive></cpt-parameters>
        <cpt-value interactive></cpt-value>
        <cpt-probability interactive></cpt-probability>
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
      <cpt-example-interactive>
        <risky-choice interactive></risky-choice>
        <cpt-parameters alpha lambda gamma interactive></cpt-parameters>
        <cpt-value interactive></cpt-value>
        <cpt-probability interactive></cpt-probability>
        <cpt-calculation numeric interactive></cpt-calculation>
        <!-- <cpt-space updateable></cpt-space> -->
        <!-- <decision-space updateable></decision-space> -->
      </cpt-example-interactive>
    `);
    expect(el).lightDom.to.equal(`
      <risky-choice interactive loss="0" win="20" probability="0.5" sure="10" state="choice"></risky-choice>
      <cpt-parameters interactive alpha="0.5" lambda="2" gamma="0.5"></cpt-parameters>
      <cpt-value interactive value="10" alpha="0.5" lambda="2" label="s"></cpt-value>
      <cpt-probability interactive probability="0.5" gamma="0.5" label=""></cpt-probability>
      <cpt-calculation  numeric interactive loss="0" win="20" probability="0.5" sure="10" alpha="0.5" lambda="2" gamma="0.5"></cpt-calculation>
    `);
  });

  it('can propagate a risky-choice interaction', async () => {
    const el = await fixture(html`
      <cpt-example-interactive sure="20">
        <risky-choice interactive></risky-choice>
        <cpt-parameters alpha lambda gamma interactive></cpt-parameters>
        <cpt-value interactive></cpt-value>
        <cpt-probability interactive></cpt-probability>
        <cpt-calculation numeric interactive></cpt-calculation>
        <!-- <cpt-space updateable></cpt-space> -->
        <!-- <decision-space updateable></decision-space> -->
      </cpt-example-interactive>
    `);
    await waitUntil(
      () => { return el.querySelector('cpt-value').shadowRoot.querySelector('svg'); },
      'Element did not render children',
    );
    // Check "before" state
    expect(el.riskyChoice.xs).to.equal(20);
    expect(el.cptValue.x).to.equal(20);
    expect(el.cptCalculation.xs).to.equal(20);
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

  it('can propagate a cpt-value interaction', async () => {
    const el = await fixture(html`
      <cpt-example-interactive sure="15">
        <risky-choice interactive></risky-choice>
        <cpt-parameters alpha lambda gamma interactive></cpt-parameters>
        <cpt-value interactive></cpt-value>
        <cpt-probability interactive></cpt-probability>
        <cpt-calculation numeric interactive></cpt-calculation>
        <!-- <cpt-space updateable></cpt-space> -->
        <!-- <decision-space updateable></decision-space> -->
      </cpt-example-interactive>
    `);
    await waitUntil(
      () => { return el.querySelector('cpt-value').shadowRoot.querySelector('svg'); },
      'Element did not render children',
    );
    // Check "before" state
    expect(el.riskyChoice.xs).to.equal(15);
    expect(el.cptValue.x).to.equal(15);
    expect(el.cptCalculation.xs).to.equal(15);
    // Action
    const target = el.querySelector('cpt-value').shadowRoot.querySelector('.point.interactive');
    target.focus();
    setTimeout(() => { sendKeys({press: 'ArrowLeft'}); });
    await oneEvent(el, 'cpt-value-change');
    // Check "after" state
    expect(el.cptValue.x).to.equal(14);
    expect(el.riskyChoice.xs).to.equal(14);
    expect(el.cptCalculation.xs).to.equal(14);
  });

  it('can propagate a cpt-probability interaction', async () => {
    const el = await fixture(html`
      <cpt-example-interactive probability="0.75">
        <risky-choice interactive></risky-choice>
        <cpt-parameters alpha lambda gamma interactive></cpt-parameters>
        <cpt-value interactive></cpt-value>
        <cpt-probability interactive></cpt-probability>
        <cpt-calculation numeric interactive></cpt-calculation>
        <!-- <cpt-space updateable></cpt-space> -->
        <!-- <decision-space updateable></decision-space> -->
      </cpt-example-interactive>
    `);
    await waitUntil(
      () => { return el.querySelector('cpt-value').shadowRoot.querySelector('svg'); },
      'Element did not render children',
    );
    // Check "before" state
    expect(el.cptProbability.p).to.equal(0.75);
    expect(el.riskyChoice.pw).to.equal(0.75);
    expect(el.cptCalculation.pw).to.equal(0.75);
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

  it('can propagate a cpt-calculation interaction', async () => {
    const el = await fixture(html`
      <cpt-example-interactive win="100">
        <risky-choice interactive></risky-choice>
        <cpt-parameters alpha lambda gamma interactive></cpt-parameters>
        <cpt-value interactive></cpt-value>
        <cpt-probability interactive></cpt-probability>
        <cpt-calculation numeric interactive></cpt-calculation>
        <!-- <cpt-space updateable></cpt-space> -->
        <!-- <decision-space updateable></decision-space> -->
      </cpt-example-interactive>
    `);
    // Check "before" state
    expect(el.cptCalculation.xw).to.equal(100);
    expect(el.riskyChoice.xw).to.equal(100);
    expect(el.cptValue.values[1].x).to.equal(100);
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

  it('can propagate a cpt-parameters interaction', async () => {
    const el = await fixture(html`
      <cpt-example-interactive alpha="0.75">
        <risky-choice interactive></risky-choice>
        <cpt-parameters alpha lambda gamma interactive></cpt-parameters>
        <cpt-value interactive></cpt-value>
        <cpt-probability interactive></cpt-probability>
        <cpt-calculation numeric interactive></cpt-calculation>
        <!-- <cpt-space updateable></cpt-space> -->
        <!-- <decision-space updateable></decision-space> -->
      </cpt-example-interactive>
    `);
    // Check "before" state
    expect(el.cptParameters.a).to.equal(0.75);
    expect(el.cptValue.a).to.equal(0.75);
    // Action
    const target = el.querySelector('cpt-parameters').shadowRoot.querySelector('decidables-slider.a');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'cpt-parameters-a');
    // Check "after" state
    expect(detail.a).to.not.equal(0.75);
    expect(el.cptParameters.a).to.not.equal(0.75);
    expect(el.cptValue.a).to.not.equal(0.75);
  });

  it('connects the components properly');

  it('can include cpt-space and decision-space');
});
