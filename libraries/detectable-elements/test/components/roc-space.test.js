import {
  aTimeout,
  elementUpdated,
  expect,
  fixture,
  html,
  oneEvent,
  mouseDragElement,
  sendKeys,
} from '../../../../scripts/test';

import '../../src/components/roc-space';

describe('roc-space', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<roc-space></roc-space>`);
    // Wait for resize?
    await aTimeout(200);
    expect(el.shadowRoot).to.have.descendant('svg');
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<roc-space></roc-space>`);
    expect(el).lightDom.to.equal('');
  });

  it('has a default location', async () => {
    const el = await fixture(html`<roc-space></roc-space>`);
    // Wait for resize?
    await aTimeout(200);
    expect(el.locations).to.have.length(1);
    expect(el.shadowRoot).to.have.descendants('.point').with.length(1);
  });

  it('can change the default location', async () => {
    const el = await fixture(html`<roc-space></roc-space>`);
    // Wait for resize?
    await aTimeout(200);
    expect(el.locations[0]).to.include({hr: 0.75, far: 0.25});
    el.set(0.6, 0.4);
    await elementUpdated(el);
    expect(el.locations[0]).to.include({hr: 0.6, far: 0.4});
    expect(el.shadowRoot).to.have.descendants('.point').with.length(1);
  });

  it('can change the default location with SDT parameter values', async () => {
    const el = await fixture(html`<roc-space></roc-space>`);
    // Wait for resize?
    await aTimeout(200);
    expect(el.locations[0]).to.include({hr: 0.75, far: 0.25});
    el.setWithSDT(0, 0);
    await elementUpdated(el);
    expect(el.locations[0]).to.include({hr: 0.5, far: 0.5});
    expect(el.shadowRoot).to.have.descendants('.point').with.length(1);
  });

  it('can set another location', async () => {
    const el = await fixture(html`<roc-space></roc-space>`);
    // Wait for resize?
    await aTimeout(200);
    el.set(0.9, 0.1, 'another');
    await elementUpdated(el);
    expect(el.locations).to.have.length(2);
    expect(el.locations[1]).to.include({hr: 0.9, far: 0.1});
    expect(el.shadowRoot).to.have.descendants('.point').with.length(2);
  });

  it('can set another location with SDT parameter values', async () => {
    const el = await fixture(html`<roc-space></roc-space>`);
    // Wait for resize?
    await aTimeout(200);
    el.setWithSDT(0, 0, 'another');
    await elementUpdated(el);
    expect(el.locations).to.have.length(2);
    expect(el.locations[1]).to.include({hr: 0.5, far: 0.5});
    expect(el.shadowRoot).to.have.descendants('.point').with.length(2);
  });

  it('can change another location', async () => {
    const el = await fixture(html`<roc-space></roc-space>`);
    // Wait for resize?
    await aTimeout(200);
    el.set(0.95, 0.05, 'another');
    await elementUpdated(el);
    expect(el.locations).to.have.length(2);
    expect(el.locations[1]).to.include({hr: 0.95, far: 0.05});
    el.set(0.85, 0.35, 'another');
    await elementUpdated(el);
    expect(el.locations).to.have.length(2);
    expect(el.locations[1]).to.include({hr: 0.85, far: 0.35});
    expect(el.shadowRoot).to.have.descendants('.point').with.length(2);
  });

  it('can change another location with SDT parameter values', async () => {
    const el = await fixture(html`<roc-space></roc-space>`);
    // Wait for resize?
    await aTimeout(200);
    el.set(0.7, 0.3, 'another');
    await elementUpdated(el);
    expect(el.locations).to.have.length(2);
    expect(el.locations[1]).to.include({hr: 0.7, far: 0.3});
    el.setWithSDT(0, 0, 'another');
    await elementUpdated(el);
    expect(el.locations).to.have.length(2);
    expect(el.locations[1]).to.include({hr: 0.5, far: 0.5});
    expect(el.shadowRoot).to.have.descendants('.point').with.length(2);
  });

  it('can have contour lines', async () => {
    const el = await fixture(html`<roc-space contour="sensitivity"></roc-space>`);
    // Wait for resize?
    await aTimeout(200);
    expect(el.shadowRoot).to.have.descendants('.plot-contour .contour').with.lengthOf.above(2);
  });

  it('can be interactive', async () => {
    const el = await fixture(html`<roc-space interactive></roc-space>`);
    // Wait for resize?
    await aTimeout(200);
    expect(el.shadowRoot).to.have.descendant('.point').with.class('interactive');
  });

  it('supports mouse manipulation', async () => {
    const el = await fixture(html`<roc-space interactive style="--transition-duration: 0;"></roc-space>`);
    // Wait for resize?
    await aTimeout(200);
    // Get "before" state
    const {hr, far} = el.locations[0];
    // Action
    const target = el.shadowRoot.querySelector('.point.interactive');
    setTimeout(() => { mouseDragElement(target, 50, 50); });
    const {detail} = await oneEvent(el, 'roc-point-change');
    // Compare "after" state
    expect(el.locations[0].hr).to.not.equal(hr);
    expect(el.locations[0].far).to.not.equal(far);
    expect(detail).to.include({name: 'default'});
  });

  it('supports keyboard manipulation', async () => {
    const el = await fixture(html`<roc-space interactive style="--transition-duration: 0;"></roc-space>`);
    // Wait for resize?
    await aTimeout(200);
    // Get "before" state
    const {hr, far} = el.locations[0];
    // Action
    const target = el.shadowRoot.querySelector('.point.interactive');
    target.focus();
    setTimeout(() => { sendKeys({press: 'ArrowUp'}); });
    const {detail} = await oneEvent(el, 'roc-point-change');
    // Compare "after" state
    expect(el.locations[0].hr).to.not.equal(hr);
    expect(el.locations[0].far).to.equal(far);
    expect(detail).to.include({name: 'default'});
  });

  it('has lots of attributes that need testing');
});
