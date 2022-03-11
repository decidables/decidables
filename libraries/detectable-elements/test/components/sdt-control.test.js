import {
  aTimeout,
  expect,
  fixture,
  html,
  oneEvent,
  mouseClickElement,
} from '../../../../scripts/test';

import '../../src/components/sdt-control';

describe('sdt-control', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<sdt-control></sdt-control>`);
    // Give the component a chance to render!
    await aTimeout();
    expect(el).shadowDom.to.equal(`
      <div class="holder">
      </div>
    `);
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<sdt-control></sdt-control>`);
    await aTimeout();
    expect(el).lightDom.to.equal('');
  });

  it('can have a trials slider', async () => {
    const el = await fixture(html`<sdt-control trials="15"></sdt-control>`);
    await aTimeout();
    // Check "before" state
    expect(el.trials).to.equal(15);
    expect(el.shadowRoot).to.have.descendant('decidables-slider');
    // Action
    const target = el.shadowRoot.querySelector('decidables-slider');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'sdt-control-trials');
    // Check "after" state
    expect(+detail.trials).to.be.above(15);
    expect(+el.trials).to.be.above(15);
  });

  it('can have a duration slider', async () => {
    const el = await fixture(html`<sdt-control duration="20"></sdt-control>`);
    await aTimeout();
    // Check "before" state
    expect(el.duration).to.equal(20);
    expect(el.shadowRoot).to.have.descendant('decidables-slider');
    // Action
    const target = el.shadowRoot.querySelector('decidables-slider');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'sdt-control-duration');
    // Check "after" state
    expect(+detail.duration).to.be.above(20);
    expect(+el.duration).to.be.above(20);
  });

  it('can have a coherence slider', async () => {
    const el = await fixture(html`<sdt-control coherence="0.1"></sdt-control>`);
    await aTimeout();
    // Check "before" state
    expect(el.coherence).to.equal(0.1);
    expect(el.shadowRoot).to.have.descendant('decidables-slider');
    // Action
    const target = el.shadowRoot.querySelector('decidables-slider');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'sdt-control-coherence');
    // Check "after" state
    expect(+detail.coherence).to.be.above(0.1);
    expect(+el.coherence).to.be.above(0.1);
  });

  it('can have a payoff slider', async () => {
    const el = await fixture(html`<sdt-control payoff="5"></sdt-control>`);
    await aTimeout();
    // Check "before" state
    expect(el.payoff).to.equal(5);
    expect(el.shadowRoot).to.have.descendant('decidables-slider');
    // Action
    const target = el.shadowRoot.querySelector('decidables-slider');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'sdt-control-payoff');
    // Check "after" state
    expect(+detail.payoff).to.be.above(5);
    expect(+el.payoff).to.be.above(5);
  });

  it('can have a color toggle', async () => {
    // Get everything set
    const el = await fixture(html`<sdt-control color="none"></sdt-control>`);
    await aTimeout();
    // Check "before" state
    expect(el.color).to.equal('none');
    expect(el.shadowRoot).to.have.descendant('decidables-toggle');
    // Action
    const target = el.shadowRoot.querySelector('decidables-toggle');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'sdt-control-color');
    // Check "after" state
    expect(detail.color).to.not.equal('none');
    expect(el.color).to.not.equal('none');
  });

  it('can have a zROC switch', async () => {
    const el = await fixture(html`<sdt-control z-roc></sdt-control>`);
    await aTimeout();
    // Check "before" state
    expect(el.zRoc).to.equal(true);
    expect(el.shadowRoot).to.have.descendant('decidables-switch');
    // Action
    const target = el.shadowRoot.querySelector('decidables-switch');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'sdt-control-z-roc');
    // Check "after" state
    expect(detail.zRoc).to.equal(false);
    expect(el.zRoc).to.equal(false);
  });

  it('can have a run button', async () => {
    const el = await fixture(html`<sdt-control run></sdt-control>`);
    await aTimeout();
    // Check "before" state
    expect(el.run).to.equal(true);
    expect(el.shadowRoot).to.have.descendant('decidables-button');
    // Action
    const target = el.shadowRoot.querySelector('decidables-button');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'sdt-control-run');
    // Check "after" state
    expect(detail).to.deep.equal({});
    expect(el.run).to.equal(true);
  });

  it('can have a pause button', async () => {
    const el = await fixture(html`<sdt-control pause></sdt-control>`);
    await aTimeout();
    // Check "before" state
    expect(el.pause).to.equal(true);
    expect(el.shadowRoot).to.have.descendant('decidables-button');
    // Action
    const target = el.shadowRoot.querySelector('decidables-button');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'sdt-control-pause');
    // Check "after" state
    expect(detail).to.deep.equal({});
    expect(el.pause).to.equal(true);
  });

  it('can have a reset button', async () => {
    const el = await fixture(html`<sdt-control reset></sdt-control>`);
    await aTimeout();
    // Check "before" state
    expect(el.reset).to.equal(true);
    expect(el.shadowRoot).to.have.descendant('decidables-button');
    // Action
    const target = el.shadowRoot.querySelector('decidables-button');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'sdt-control-reset');
    // Check "after" state
    expect(detail).to.deep.equal({});
    expect(el.reset).to.equal(true);
  });
});
