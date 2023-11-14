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

import '../../src/components/cpt-value';

describe('cpt-value', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<cpt-value></cpt-value>`);
    expect(el.shadowRoot).to.have.descendant('svg');
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<cpt-value></cpt-value>`);
    expect(el).lightDom.to.equal('');
  });

  it('has a default function', async () => {
    const el = await fixture(html`<cpt-value></cpt-value>`);
    // Wait for resize?
    await aTimeout(200);
    expect(el.functions).to.have.length(1);
    expect(el.shadowRoot).to.have.descendants('.curve-n').with.length(1);
    expect(el.shadowRoot).to.have.descendants('.curve-p').with.length(1);
    expect(el.getFunction()).to.include({name: 'default', a: 0.5, l: 2});
  });

  it('can have a default value', async () => {
    const el = await fixture(html`<cpt-value value="10"></cpt-value>`);
    // Wait for resize?
    await aTimeout(200);
    expect(el.values).to.have.length(1);
    expect(el.shadowRoot).to.have.descendants('.point').with.length(1);
    expect(el.getValue()).to.include({name: 'default', x: 10});
  });

  it('can change the default function and/or value', async () => {
    const el = await fixture(html`<cpt-value value="10" alpha="0.8" lambda="1.5"></cpt-value>`);
    // Wait for resize?
    await aTimeout(200);
    expect(el.functions[0]).to.include({name: 'default', a: 0.8, l: 1.5});
    expect(el.values[0]).to.include({name: 'default', x: 10});
    expect(el.get()).to.include({
      name: 'default', a: 0.8, l: 1.5, x: 10,
    });

    el.setFunction(0.9, 1.6);
    await elementUpdated(el);
    expect(el.functions[0]).to.include({name: 'default', a: 0.9, l: 1.6});

    el.setValue(20);
    await elementUpdated(el);
    expect(el.values[0]).to.include({name: 'default', x: 20});

    el.set(30, 1, 1.7);
    await elementUpdated(el);
    expect(el.functions[0]).to.include({name: 'default', a: 1, l: 1.7});
    expect(el.values[0]).to.include({name: 'default', x: 30});
  });

  it('can set another function and/or value', async () => {
    const el = await fixture(html`<cpt-value value="10" alpha="0.8" lambda="1.5"></cpt-value>`);
    // Wait for resize?
    await aTimeout(200);

    el.setFunction(0.9, 1.6, 'anotherFunction');
    await elementUpdated(el);
    expect(el.functions).to.have.length(2);
    expect(el.functions[1]).to.include({name: 'anotherFunction', a: 0.9, l: 1.6});
    expect(el.shadowRoot).to.have.descendants('.curve-n').with.length(2);
    expect(el.shadowRoot).to.have.descendants('.curve-p').with.length(2);

    el.setValue(20, 'anotherValue', '', 'default');
    await elementUpdated(el);
    expect(el.values).to.have.length(2);
    expect(el.values[1]).to.include({name: 'anotherValue', x: 20});
    expect(el.shadowRoot).to.have.descendants('.point').with.length(2);

    el.set(30, 1, 1.7, 'newValue', '', 'newFunction');
    await elementUpdated(el);
    expect(el.functions).to.have.length(3);
    expect(el.functions[2]).to.include({name: 'newFunction', a: 1, l: 1.7});
    expect(el.shadowRoot).to.have.descendants('.curve-n').with.length(3);
    expect(el.shadowRoot).to.have.descendants('.curve-p').with.length(3);
    expect(el.values).to.have.length(3);
    expect(el.values[2]).to.include({name: 'newValue', x: 30});
    expect(el.shadowRoot).to.have.descendants('.point').with.length(3);
  });

  it('can change another function and value', async () => {
    const el = await fixture(html`<cpt-value value="10" alpha="0.8" lambda="1.5"></cpt-value>`);
    // Wait for resize?
    await aTimeout(200);

    el.set(20, 0.9, 1.6, 'anotherValue', '', 'anotherFunction');
    await elementUpdated(el);
    expect(el.functions).to.have.length(2);
    expect(el.functions[1]).to.include({name: 'anotherFunction', a: 0.9, l: 1.6});
    expect(el.shadowRoot).to.have.descendants('.curve-n').with.length(2);
    expect(el.shadowRoot).to.have.descendants('.curve-p').with.length(2);
    expect(el.values).to.have.length(2);
    expect(el.values[1]).to.include({name: 'anotherValue', x: 20});
    expect(el.shadowRoot).to.have.descendants('.point').with.length(2);

    el.set(30, 1, 1.7, 'anotherValue', '', 'anotherFunction');
    await elementUpdated(el);
    expect(el.functions).to.have.length(2);
    expect(el.functions[1]).to.include({name: 'anotherFunction', a: 1, l: 1.7});
    expect(el.shadowRoot).to.have.descendants('.curve-n').with.length(2);
    expect(el.shadowRoot).to.have.descendants('.curve-p').with.length(2);
    expect(el.values).to.have.length(2);
    expect(el.values[1]).to.include({name: 'anotherValue', x: 30});
    expect(el.shadowRoot).to.have.descendants('.point').with.length(2);
  });

  it('can remove functions and/or values', async () => {
    const el = await fixture(html`<cpt-value value="10" alpha="0.8" lambda="1.5"></cpt-value>`);
    // Wait for resize?
    await aTimeout(200);

    el.set(20, 0.9, 1.6, 'anotherValue', '', 'anotherFunction');
    await elementUpdated(el);
    expect(el.functions).to.have.length(2);
    expect(el.functions[1]).to.include({name: 'anotherFunction', a: 0.9, l: 1.6});
    expect(el.shadowRoot).to.have.descendants('.curve-n').with.length(2);
    expect(el.shadowRoot).to.have.descendants('.curve-p').with.length(2);
    expect(el.values).to.have.length(2);
    expect(el.values[1]).to.include({name: 'anotherValue', x: 20});
    expect(el.shadowRoot).to.have.descendants('.point').with.length(2);

    // Wait for resize?
    await aTimeout(200);

    el.removeValue('anotherValue');
    await elementUpdated(el);
    expect(el.values).to.have.length(1);

    el.removeFunction('anotherFunction');
    await elementUpdated(el);
    expect(el.functions).to.have.length(1);

    el.set(30, 1, 1.7, 'new');
    await elementUpdated(el);
    expect(el.functions).to.have.length(2);
    expect(el.functions[1]).to.include({name: 'new', a: 1, l: 1.7});
    expect(el.shadowRoot).to.have.descendants('.curve-n').with.length(2);
    expect(el.shadowRoot).to.have.descendants('.curve-p').with.length(2);
    expect(el.values).to.have.length(2);
    expect(el.values[1]).to.include({name: 'new', x: 30});
    expect(el.shadowRoot).to.have.descendants('.point').with.length(2);

    // Wait for resize?
    await aTimeout(200);

    el.remove('new');
    expect(el.functions).to.have.length(1);
    expect(el.values).to.have.length(1);
  });

  it('can clear functions and/or values', async () => {
    const el = await fixture(html`<cpt-value value="10" alpha="0.8" lambda="1.5"></cpt-value>`);
    // Wait for resize?
    await aTimeout(200);

    el.set(20, 0.9, 1.6, 'anotherValue', '', 'anotherFunction');
    await elementUpdated(el);
    expect(el.functions).to.have.length(2);
    expect(el.functions[1]).to.include({name: 'anotherFunction', a: 0.9, l: 1.6});
    expect(el.shadowRoot).to.have.descendants('.curve-n').with.length(2);
    expect(el.shadowRoot).to.have.descendants('.curve-p').with.length(2);
    expect(el.values).to.have.length(2);
    expect(el.values[1]).to.include({name: 'anotherValue', x: 20});
    expect(el.shadowRoot).to.have.descendants('.point').with.length(2);

    // Wait for resize?
    await aTimeout(200);

    el.clearValues();
    await elementUpdated(el);
    expect(el.values).to.have.length(1);

    el.clearFunctions();
    await elementUpdated(el);
    expect(el.functions).to.have.length(1);

    el.set(30, 1, 1.7, 'new');
    await elementUpdated(el);
    expect(el.functions).to.have.length(2);
    expect(el.functions[1]).to.include({name: 'new', a: 1, l: 1.7});
    expect(el.shadowRoot).to.have.descendants('.curve-n').with.length(2);
    expect(el.shadowRoot).to.have.descendants('.curve-p').with.length(2);
    expect(el.values).to.have.length(2);
    expect(el.values[1]).to.include({name: 'new', x: 30});
    expect(el.shadowRoot).to.have.descendants('.point').with.length(2);

    // Wait for resize?
    await aTimeout(200);

    el.clear();
    expect(el.functions).to.have.length(1);
    expect(el.values).to.have.length(1);
  });

  it('can be interactive', async () => {
    const el = await fixture(html`<cpt-value interactive></cpt-value>`);
    // Wait for resize?
    await aTimeout(200);

    expect(el.shadowRoot).to.have.descendant('.curve-n').with.class('interactive');
    expect(el.shadowRoot).to.have.descendant('.curve-p').with.class('interactive');
  });

  it('supports mouse manipulation of point', async () => {
    const el = await fixture(html`<cpt-value interactive value="10" alpha="0.8" lambda="1.5"></cpt-value>`);
    // Wait for resize?
    await aTimeout(200);
    // Get "before" state
    const {x} = el;
    // Action
    const target = el.shadowRoot.querySelector('.point.interactive');
    setTimeout(() => { mouseDragElement(target, 50, 0); });
    const {detail} = await oneEvent(el, 'cpt-value-change');
    // Compare "after" state
    expect(el.x).to.not.equal(x);
    expect(detail.x).to.not.equal(x);
  });

  it('supports keyboard manipulation of point', async () => {
    const el = await fixture(html`<cpt-value interactive value="10" alpha="0.8" lambda="1.5"></cpt-value>`);
    // Wait for resize?
    await aTimeout(200);
    // Get "before" state
    const {x} = el;
    // Action
    const target = el.shadowRoot.querySelector('.point.interactive');
    target.focus();
    setTimeout(() => { sendKeys({press: 'ArrowLeft'}); });
    const {detail} = await oneEvent(el, 'cpt-value-change');
    // Compare "after" state
    expect(el.x).to.not.equal(x);
    expect(detail.x).to.not.equal(x);
  });

  it('supports mouse manipulation of positive curve', async () => {
    const el = await fixture(html`<cpt-value interactive value="5" alpha="1" lambda="1.5"></cpt-value>`);
    // Wait for resize?
    await aTimeout(200);
    // Get "before" state
    const {a} = el;
    // Action
    const target = el.shadowRoot.querySelector('.curve-p.interactive');
    setTimeout(() => { mouseDragElement(target, 50, 50); });
    const {detail} = await oneEvent(el, 'cpt-value-change');
    // Compare "after" state
    expect(el.a).to.not.equal(a);
    expect(detail.a).to.not.equal(a);
  });

  it('supports keyboard manipulation of positive curve', async () => {
    const el = await fixture(html`<cpt-value interactive value="5" alpha="1" lambda="1.5"></cpt-value>`);
    // Wait for resize?
    await aTimeout(200);
    // Get "before" state
    const {a} = el;
    // Action
    const target = el.shadowRoot.querySelector('.curve-p.interactive');
    target.focus();
    setTimeout(() => { sendKeys({press: 'ArrowDown'}); });
    const {detail} = await oneEvent(el, 'cpt-value-change');
    // Compare "after" state
    expect(el.a).to.not.equal(a);
    expect(detail.a).to.not.equal(a);
  });

  it('supports mouse manipulation of negative curve', async () => {
    const el = await fixture(html`<cpt-value interactive value="5" alpha="1" lambda="1"></cpt-value>`);
    // Wait for resize?
    await aTimeout(200);
    // Get "before" state
    const {l} = el;
    // Action
    const target = el.shadowRoot.querySelector('.curve-n.interactive');
    setTimeout(() => { mouseDragElement(target, 50, 50); });
    const {detail} = await oneEvent(el, 'cpt-value-change');
    // Compare "after" state
    expect(el.l).to.not.equal(l);
    expect(detail.l).to.not.equal(l);
  });

  it('supports keyboard manipulation of negative curve', async () => {
    const el = await fixture(html`<cpt-value interactive value="5" alpha="1" lambda="1.5"></cpt-value>`);
    // Wait for resize?
    await aTimeout(200);
    // Get "before" state
    const {l} = el;
    // Action
    const target = el.shadowRoot.querySelector('.curve-n.interactive');
    target.focus();
    setTimeout(() => { sendKeys({press: 'ArrowDown'}); });
    const {detail} = await oneEvent(el, 'cpt-value-change');
    // Compare "after" state
    expect(el.l).to.not.equal(l);
    expect(detail.l).to.not.equal(l);
  });

  it('can add, pause and resume a trial', async () => {
    const el = await fixture(html`<cpt-value></cpt-value>`);
    // Wait for resize?
    await aTimeout(200);

    el.trial(0, 20, 0.75, 10, 1, 'gamble');
    await elementUpdated(el);
    expect(el.shadowRoot).to.have.descendants('.point').with.length(2);
    expect(el.shadowRoot).to.have.descendants('.line-x').with.length(4);
    expect(el.shadowRoot).to.have.descendants('.line-v').with.length(4);
    expect(el.trialCount).to.equal(1);
    expect(el.values).to.have.length(3);
    expect(el.values[1]).to.include({name: '1-w', x: 20});
    expect(el.values[2]).to.include({name: '1-s', x: 10});

    el.pauseTrial();
    expect(el.values[1]).to.include({name: '1-w', paused: true});
    expect(el.values[2]).to.include({name: '1-s', paused: true});

    el.resumeTrial();
    expect(el.values[1]).to.include({name: '1-w', paused: false});
    expect(el.values[2]).to.include({name: '1-s', paused: false});
  });

  it('can manipulate a paused trial');
});
