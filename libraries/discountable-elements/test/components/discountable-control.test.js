import {
  elementUpdated,
  expect,
  fixture,
  html,
  oneEvent,
  mouseClickElement,
} from '../../../../scripts/test';

import '../../src/components/discountable-control';

describe('discountable-control', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<discountable-control></discountable-control>`);
    expect(el).shadowDom.to.equal(`
      <div class="holder">
      </div>
    `);
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<discountable-control></discountable-control>`);
    expect(el).lightDom.to.equal('');
  });

  it('can have a trials slider', async () => {
    const el = await fixture(html`<discountable-control trials="15"></discountable-control>`);
    // Check "before" state
    expect(el.trials).to.equal(15);
    expect(el.shadowRoot).to.have.descendant('decidables-slider');
    // Action
    const target = el.shadowRoot.querySelector('decidables-slider');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'discountable-control-trials');
    // Check "after" state
    expect(+detail.trials).to.be.above(15);
    expect(+el.trials).to.be.above(15);
  });

  it('can have a duration slider', async () => {
    const el = await fixture(html`<discountable-control duration="20"></discountable-control>`);
    // Check "before" state
    expect(el.duration).to.equal(20);
    expect(el.shadowRoot).to.have.descendant('decidables-slider');
    // Action
    const target = el.shadowRoot.querySelector('decidables-slider');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'discountable-control-duration');
    // Check "after" state
    expect(+detail.duration).to.be.above(20);
    expect(+el.duration).to.be.above(20);
  });

  it('can have a run button', async () => {
    const el = await fixture(html`<discountable-control run></discountable-control>`);
    // Check "before" state
    expect(el.run).to.equal(true);
    expect(el.shadowRoot).to.have.descendant('decidables-button');
    // Action
    const target = el.shadowRoot.querySelector('decidables-button');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'discountable-control-run');
    // Check "after" state
    expect(detail).to.deep.equal({});
    expect(el.run).to.equal(true);
  });

  it('can have a pause button', async () => {
    const el = await fixture(html`<discountable-control pause></discountable-control>`);
    // Put controls in "running" state
    el.doRun();
    await elementUpdated(el);
    // Check "before" state
    expect(el.pause).to.equal(true);
    expect(el.shadowRoot).to.have.descendant('decidables-button');
    // Action
    const target = el.shadowRoot.querySelector('decidables-button');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'discountable-control-pause');
    // Check "after" state
    expect(detail).to.deep.equal({});
    expect(el.pause).to.equal(true);
  });

  it('can have a reset button', async () => {
    const el = await fixture(html`<discountable-control reset></discountable-control>`);
    // Put controls in "running" state
    el.doRun();
    await elementUpdated(el);
    // Check "before" state
    expect(el.reset).to.equal(true);
    expect(el.shadowRoot).to.have.descendant('decidables-button');
    // Action
    const target = el.shadowRoot.querySelector('decidables-button');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'discountable-control-reset');
    // Check "after" state
    expect(detail).to.deep.equal({});
    expect(el.reset).to.equal(true);
  });
});
