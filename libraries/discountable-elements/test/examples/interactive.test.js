import {
  expect,
  fixture,
  html,
  mouseClickElement,
  oneEvent,
  sendKeys,
  waitUntil,
} from '../../../../scripts/test-utility';

import '../../src/components/htd-calculation';
import '../../src/components/htd-curves';
import '../../src/components/htd-parameters';
import '../../src/components/itc-choice';
import '../../src/examples/interactive';

describe('htd-example-interactive', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`
      <htd-example-interactive>
        <itc-choice interactive></itc-choice>
        <htd-parameters k interactive></htd-parameters>
        <htd-curves interactive></htd-curves>
        <htd-calculation numeric interactive></htd-calculation>
      </htd-example-interactive>
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
      <htd-example-interactive>
        <itc-choice interactive></itc-choice>
        <htd-parameters k interactive></htd-parameters>
        <htd-curves interactive></htd-curves>
        <htd-calculation numeric interactive></htd-calculation>
      </htd-example-interactive>
    `);
    expect(el).lightDom.to.equal(`
      <itc-choice class="keyboard" interactive state="choice" amount-ss="10" delay-ss="1" amount-ll="50" delay-ll="40"></itc-choice>
      <htd-parameters class="keyboard" interactive k="0.05"></htd-parameters>
      <htd-curves class="keyboard" interactive label="s" k="0.05" class="" amount="10" delay="1"></htd-curves>
      <htd-calculation class="keyboard" numeric interactive amount-ss="10" delay-ss="1" amount-ll="50" delay-ll="40" k="0.05"></htd-calculation>
    `);
  });

  it('connects the components properly');

  it('can propagate an itc-choice interaction', async () => {
    const el = await fixture(html`
      <htd-example-interactive amount-ss="5">
        <itc-choice interactive></itc-choice>
        <htd-parameters k interactive></htd-parameters>
        <htd-curves interactive></htd-curves>
        <htd-calculation numeric interactive></htd-calculation>
      </htd-example-interactive>
    `);
    // Check "before" state
    expect(el.itcChoice.as).to.equal(5);
    expect(el.htdCurves.a).to.equal(5);
    expect(el.htdCalculation.as).to.equal(5);
    // Action
    const target = el.querySelector('itc-choice')
      .shadowRoot.querySelector('itc-option')
      .shadowRoot.querySelector('decidables-spinner.amount')
      .shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '9'}); });
    await oneEvent(el, 'itc-choice-change');
    // Check "after" state
    expect(el.itcChoice.as).to.equal(9);
    expect(el.htdCurves.a).to.equal(9);
    expect(el.htdCalculation.as).to.equal(9);
  });

  it('can propagate a htd-curves interaction', async () => {
    const el = await fixture(html`
      <htd-example-interactive delay-ss="20">
        <itc-choice interactive></itc-choice>
        <htd-parameters k interactive></htd-parameters>
        <htd-curves interactive></htd-curves>
        <htd-calculation numeric interactive></htd-calculation>
      </htd-example-interactive>
    `);
    await waitUntil(
      () => { return el.querySelector('htd-curves').shadowRoot.querySelector('.interactive .fill'); },
      'Element did not render children',
    );
    // Check "before" state
    expect(el.itcChoice.ds).to.equal(20);
    expect(el.htdCurves.d).to.equal(20);
    expect(el.htdCalculation.ds).to.equal(20);
    // Action
    const target = el.querySelector('htd-curves').shadowRoot.querySelector('.sooner .interactive .fill');
    target.focus();
    setTimeout(() => { sendKeys({press: 'ArrowLeft'}); });
    await oneEvent(el, 'htd-curves-change');
    // Check "after" state
    expect(el.itcChoice.ds).to.be.below(20);
    expect(el.htdCurves.d).to.equal(el.itcChoice.ds);
    expect(el.htdCalculation.ds).to.equal(el.itcChoice.ds);
  });

  it('can propagate a htd-calculation interaction', async () => {
    const el = await fixture(html`
      <htd-example-interactive amount-ll="40">
        <itc-choice interactive></itc-choice>
        <htd-parameters k interactive></htd-parameters>
        <htd-curves interactive></htd-curves>
        <htd-calculation numeric interactive></htd-calculation>
      </htd-example-interactive>
    `);
    // Check "before" state
    expect(el.itcChoice.al).to.equal(40);
    expect(el.htdCurves.options[1].a).to.equal(40);
    expect(el.htdCalculation.al).to.equal(40);
    // Action
    const target = el.querySelector('htd-calculation').shadowRoot.querySelector('decidables-spinner.al').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '8'}); });
    await oneEvent(el, 'htd-calculation-change');
    // Check "after" state
    expect(el.itcChoice.al).to.equal(8);
    expect(el.htdCurves.options[1].a).to.equal(8);
    expect(el.htdCalculation.al).to.equal(8);
  });

  it('can propagate a htd-parameters interaction', async () => {
    const el = await fixture(html`
      <htd-example-interactive k="0.01">
        <itc-choice interactive></itc-choice>
        <htd-parameters k interactive></htd-parameters>
        <htd-curves interactive></htd-curves>
        <htd-calculation numeric interactive></htd-calculation>
      </htd-example-interactive>
    `);
    // Check "before" state
    expect(el.htdParameters.k).to.equal(0.01);
    expect(el.htdCurves.k).to.equal(el.htdParameters.k);
    expect(el.htdCalculation.k).to.equal(el.htdParameters.k);
    // Action
    const target = el.querySelector('htd-parameters').shadowRoot.querySelector('decidables-slider.k');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'htd-parameters-k');
    // Check "after" state
    expect(detail.k).to.not.equal(0.01);
    expect(el.htdParameters.k).to.not.equal(0.01);
    expect(el.htdCurves.k).to.equal(el.htdParameters.k);
    expect(el.htdCalculation.k).to.equal(el.htdParameters.k);
  });
});
