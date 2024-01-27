import {
  elementUpdated,
  expect,
  fixture,
  html,
  oneEvent,
  mouseClickElement,
} from '../../../../scripts/test-utility';

import '../../src/components/prospectable-control';

describe('prospectable-control', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<prospectable-control></prospectable-control>`);
    expect(el).shadowDom.to.equal(`
      <div class="holder">
      </div>
    `);
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<prospectable-control></prospectable-control>`);
    expect(el).lightDom.to.equal('');
  });

  it('can have a trials slider', async () => {
    const el = await fixture(html`<prospectable-control trials="15"></prospectable-control>`);
    // Check "before" state
    expect(el.trials).to.equal(15);
    expect(el.shadowRoot).to.have.descendant('decidables-slider');
    // Action
    const target = el.shadowRoot.querySelector('decidables-slider');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'prospectable-control-trials');
    // Check "after" state
    expect(+detail.trials).to.be.above(15);
    expect(+el.trials).to.be.above(15);
  });

  it('can have a duration slider', async () => {
    const el = await fixture(html`<prospectable-control duration="20"></prospectable-control>`);
    // Check "before" state
    expect(el.duration).to.equal(20);
    expect(el.shadowRoot).to.have.descendant('decidables-slider');
    // Action
    const target = el.shadowRoot.querySelector('decidables-slider');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'prospectable-control-duration');
    // Check "after" state
    expect(+detail.duration).to.be.above(20);
    expect(+el.duration).to.be.above(20);
  });

  it('can have a run button', async () => {
    const el = await fixture(html`<prospectable-control run></prospectable-control>`);
    // Check "before" state
    expect(el.run).to.equal(true);
    expect(el.shadowRoot).to.have.descendant('decidables-button');
    // Action
    const target = el.shadowRoot.querySelector('decidables-button');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'prospectable-control-run');
    // Check "after" state
    expect(detail).to.deep.equal({});
    expect(el.run).to.equal(true);
  });

  it('can have a pause button', async () => {
    const el = await fixture(html`<prospectable-control pause></prospectable-control>`);
    // Put controls in "running" state
    el.doRun();
    await elementUpdated(el);
    // Check "before" state
    expect(el.pause).to.equal(true);
    expect(el.shadowRoot).to.have.descendant('decidables-button');
    // Action
    const target = el.shadowRoot.querySelector('decidables-button');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'prospectable-control-pause');
    // Check "after" state
    expect(detail).to.deep.equal({});
    expect(el.pause).to.equal(true);
  });

  it('can have a reset button', async () => {
    const el = await fixture(html`<prospectable-control reset></prospectable-control>`);
    // Put controls in "running" state
    el.doRun();
    await elementUpdated(el);
    // Check "before" state
    expect(el.reset).to.equal(true);
    expect(el.shadowRoot).to.have.descendant('decidables-button');
    // Action
    const target = el.shadowRoot.querySelector('decidables-button');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'prospectable-control-reset');
    // Check "after" state
    expect(detail).to.deep.equal({});
    expect(el.reset).to.equal(true);
  });
});
