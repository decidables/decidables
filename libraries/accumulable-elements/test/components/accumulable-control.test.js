import {
  elementUpdated,
  expect,
  fixture,
  html,
  oneEvent,
  mouseClickElement,
} from '../../../../scripts/test-utility';

import '../../src/components/accumulable-control';

describe('accumulable-control', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<accumulable-control></accumulable-control>`);
    expect(el).shadowDom.to.equal(`
      <div class="holder">
      </div>
    `);
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<accumulable-control></accumulable-control>`);
    expect(el).lightDom.to.equal('');
  });

  it('can have a trials slider', async () => {
    const el = await fixture(html`<accumulable-control trials="15"></accumulable-control>`);
    // Check "before" state
    expect(el.trials).to.equal(15);
    expect(el.shadowRoot).to.have.descendant('decidables-slider');
    // Action
    const target = el.shadowRoot.querySelector('decidables-slider');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'accumulable-control-trials');
    // Check "after" state
    expect(+detail.trials).to.be.above(15);
    expect(+el.trials).to.be.above(15);
  });

  it('can have a resample button', async () => {
    const el = await fixture(html`<accumulable-control resample></accumulable-control>`);
    // Check "before" state
    expect(el.resample).to.equal(true);
    expect(el.shadowRoot).to.have.descendant('decidables-button');
    // Action
    const target = el.shadowRoot.querySelector('decidables-button');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'accumulable-control-resample');
    // Check "after" state
    expect(detail).to.deep.equal({});
    expect(el.resample).to.equal(true);
  });

  it('can have a duration slider', async () => {
    const el = await fixture(html`<accumulable-control duration="20"></accumulable-control>`);
    // Check "before" state
    expect(el.duration).to.equal(20);
    expect(el.shadowRoot).to.have.descendant('decidables-slider');
    // Action
    const target = el.shadowRoot.querySelector('decidables-slider');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'accumulable-control-duration');
    // Check "after" state
    expect(+detail.duration).to.be.above(20);
    expect(+el.duration).to.be.above(20);
  });

  it('can have a coherence slider', async () => {
    const el = await fixture(html`<accumulable-control coherence="0.20"></accumulable-control>`);
    // Check "before" state
    expect(el.coherence).to.equal(0.20);
    expect(el.shadowRoot).to.have.descendant('decidables-slider');
    // Action
    const target = el.shadowRoot.querySelector('decidables-slider');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'accumulable-control-coherence');
    // Check "after" state
    expect(+detail.coherence).to.be.above(0.20);
    expect(+el.coherence).to.be.above(0.20);
  });

  it('can have a color toggle', async () => {
    const el = await fixture(html`<accumulable-control color="none"></accumulable-control>`);
    // Check "before" state
    expect(el.color).to.equal('none');
    expect(el.shadowRoot).to.have.descendant('decidables-toggle');
    // Action
    const target = el.shadowRoot.querySelector('decidables-toggle');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'accumulable-control-color');
    // Check "after" state
    expect(detail.color).to.not.equal('none');
    expect(el.color).to.not.equal('none');
  });

  it('can have a run button', async () => {
    const el = await fixture(html`<accumulable-control run></accumulable-control>`);
    // Check "before" state
    expect(el.run).to.equal(true);
    expect(el.shadowRoot).to.have.descendant('decidables-button');
    // Action
    const target = el.shadowRoot.querySelector('decidables-button');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'accumulable-control-run');
    // Check "after" state
    expect(detail).to.deep.equal({});
    expect(el.run).to.equal(true);
  });

  it('can have a pause button', async () => {
    const el = await fixture(html`<accumulable-control pause></accumulable-control>`);
    // Put controls in "running" state
    el.doRun();
    await elementUpdated(el);
    // Check "before" state
    expect(el.pause).to.equal(true);
    expect(el.shadowRoot).to.have.descendant('decidables-button');
    // Action
    const target = el.shadowRoot.querySelector('decidables-button');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'accumulable-control-pause');
    // Check "after" state
    expect(detail).to.deep.equal({});
    expect(el.pause).to.equal(true);
  });

  it('can have a reset button', async () => {
    const el = await fixture(html`<accumulable-control reset></accumulable-control>`);
    // Put controls in "running" state
    el.doRun();
    await elementUpdated(el);
    // Check "before" state
    expect(el.reset).to.equal(true);
    expect(el.shadowRoot).to.have.descendant('decidables-button');
    // Action
    const target = el.shadowRoot.querySelector('decidables-button');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'accumulable-control-reset');
    // Check "after" state
    expect(detail).to.deep.equal({});
    expect(el.reset).to.equal(true);
  });
});
