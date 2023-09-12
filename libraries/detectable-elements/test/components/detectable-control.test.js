import {
  expect,
  fixture,
  html,
  oneEvent,
  mouseClickElement,
} from '../../../../scripts/test';

import '../../src/components/detectable-control';

describe('detectable-control', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<detectable-control></detectable-control>`);
    expect(el).shadowDom.to.equal(`
      <div class="holder">
      </div>
    `);
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<detectable-control></detectable-control>`);
    expect(el).lightDom.to.equal('');
  });

  it('can have a trials slider', async () => {
    const el = await fixture(html`<detectable-control trials="15"></detectable-control>`);
    // Check "before" state
    expect(el.trials).to.equal(15);
    expect(el.shadowRoot).to.have.descendant('decidables-slider');
    // Action
    const target = el.shadowRoot.querySelector('decidables-slider');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'detectable-control-trials');
    // Check "after" state
    expect(+detail.trials).to.be.above(15);
    expect(+el.trials).to.be.above(15);
  });

  it('can have a duration slider', async () => {
    const el = await fixture(html`<detectable-control duration="20"></detectable-control>`);
    // Check "before" state
    expect(el.duration).to.equal(20);
    expect(el.shadowRoot).to.have.descendant('decidables-slider');
    // Action
    const target = el.shadowRoot.querySelector('decidables-slider');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'detectable-control-duration');
    // Check "after" state
    expect(+detail.duration).to.be.above(20);
    expect(+el.duration).to.be.above(20);
  });

  it('can have a coherence slider', async () => {
    const el = await fixture(html`<detectable-control coherence="0.1"></detectable-control>`);
    // Check "before" state
    expect(el.coherence).to.equal(0.1);
    expect(el.shadowRoot).to.have.descendant('decidables-slider');
    // Action
    const target = el.shadowRoot.querySelector('decidables-slider');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'detectable-control-coherence');
    // Check "after" state
    expect(+detail.coherence).to.be.above(0.1);
    expect(+el.coherence).to.be.above(0.1);
  });

  it('can have a payoff slider', async () => {
    const el = await fixture(html`<detectable-control payoff="5"></detectable-control>`);
    // Check "before" state
    expect(el.payoff).to.equal(5);
    expect(el.shadowRoot).to.have.descendant('decidables-slider');
    // Action
    const target = el.shadowRoot.querySelector('decidables-slider');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'detectable-control-payoff');
    // Check "after" state
    expect(+detail.payoff).to.be.above(5);
    expect(+el.payoff).to.be.above(5);
  });

  it('can have a color toggle', async () => {
    const el = await fixture(html`<detectable-control color="none"></detectable-control>`);
    // Check "before" state
    expect(el.color).to.equal('none');
    expect(el.shadowRoot).to.have.descendant('decidables-toggle');
    // Action
    const target = el.shadowRoot.querySelector('decidables-toggle');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'detectable-control-color');
    // Check "after" state
    expect(detail.color).to.not.equal('none');
    expect(el.color).to.not.equal('none');
  });

  it('can have a zROC switch', async () => {
    const el = await fixture(html`<detectable-control z-roc></detectable-control>`);
    // Check "before" state
    expect(el.zRoc).to.equal(true);
    expect(el.shadowRoot).to.have.descendant('decidables-switch');
    // Action
    const target = el.shadowRoot.querySelector('decidables-switch');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'detectable-control-z-roc');
    // Check "after" state
    expect(detail.zRoc).to.equal(false);
    expect(el.zRoc).to.equal(false);
  });

  it('can have a run button', async () => {
    const el = await fixture(html`<detectable-control run></detectable-control>`);
    // Check "before" state
    expect(el.run).to.equal(true);
    expect(el.shadowRoot).to.have.descendant('decidables-button');
    // Action
    const target = el.shadowRoot.querySelector('decidables-button');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'detectable-control-run');
    // Check "after" state
    expect(detail).to.deep.equal({});
    expect(el.run).to.equal(true);
  });

  it('can have a pause button', async () => {
    const el = await fixture(html`<detectable-control pause></detectable-control>`);
    // Check "before" state
    expect(el.pause).to.equal(true);
    expect(el.shadowRoot).to.have.descendant('decidables-button');
    // Button inactive!!
    // // Action
    // const target = el.shadowRoot.querySelector('decidables-button');
    // setTimeout(() => { mouseClickElement(target); });
    // const {detail} = await oneEvent(el, 'detectable-control-pause');
    // // Check "after" state
    // expect(detail).to.deep.equal({});
    // expect(el.pause).to.equal(true);
  });

  it('can have a reset button', async () => {
    const el = await fixture(html`<detectable-control reset></detectable-control>`);
    // Check "before" state
    expect(el.reset).to.equal(true);
    expect(el.shadowRoot).to.have.descendant('decidables-button');
    // Button inactive!!
    // // Action
    // const target = el.shadowRoot.querySelector('decidables-button');
    // setTimeout(() => { mouseClickElement(target); });
    // const {detail} = await oneEvent(el, 'detectable-control-reset');
    // // Check "after" state
    // expect(detail).to.deep.equal({});
    // expect(el.reset).to.equal(true);
  });
});
