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

import '../../src/components/cpt-probability';

describe('cpt-probability', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<cpt-probability></cpt-probability>`);
    expect(el.shadowRoot).to.have.descendant('svg');
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<cpt-probability></cpt-probability>`);
    expect(el).lightDom.to.equal('');
  });

  it('has a default function', async () => {
    const el = await fixture(html`<cpt-probability></cpt-probability>`);
    // Wait for resize?
    await aTimeout(200);
    expect(el.functions).to.have.length(1);
    expect(el.shadowRoot).to.have.descendants('.curve').with.length(1);
    expect(el.getFunction()).to.include({name: 'default', g: 0.5});
  });

  it('can have a default probability', async () => {
    const el = await fixture(html`<cpt-probability probability="0.4"></cpt-probability>`);
    // Wait for resize?
    await aTimeout(200);
    expect(el.probabilities).to.have.length(1);
    expect(el.shadowRoot).to.have.descendants('.point').with.length(1);
    expect(el.getProbability()).to.include({name: 'default', p: 0.4});
  });

  it('can change the default function and/or probability', async () => {
    const el = await fixture(html`<cpt-probability probability="0.4" gamma="0.6"></cpt-probability>`);
    // Wait for resize?
    await aTimeout(200);
    expect(el.functions[0]).to.include({name: 'default', g: 0.6});
    expect(el.probabilities[0]).to.include({name: 'default', p: 0.4});
    expect(el.get()).to.include({name: 'default', p: 0.4, g: 0.6});

    el.setFunction(0.8);
    await elementUpdated(el);
    expect(el.functions[0]).to.include({name: 'default', g: 0.8});

    el.setProbability(0.2);
    await elementUpdated(el);
    expect(el.probabilities[0]).to.include({name: 'default', p: 0.2});

    el.set(0.1, 0.9);
    await elementUpdated(el);
    expect(el.functions[0]).to.include({name: 'default', g: 0.9});
    expect(el.probabilities[0]).to.include({name: 'default', p: 0.1});
  });

  it('can set another function and/or probability', async () => {
    const el = await fixture(html`<cpt-probability probability="0.4" gamma="0.6"></cpt-probability>`);
    // Wait for resize?
    await aTimeout(200);

    el.setFunction(0.8, 'anotherFunction');
    await elementUpdated(el);
    expect(el.functions).to.have.length(2);
    expect(el.functions[1]).to.include({name: 'anotherFunction', g: 0.8});
    expect(el.shadowRoot).to.have.descendants('.curve').with.length(2);

    el.setProbability(0.2, 'anotherProbability', '', 'default');
    await elementUpdated(el);
    expect(el.probabilities).to.have.length(2);
    expect(el.probabilities[1]).to.include({name: 'anotherProbability', p: 0.2});
    expect(el.shadowRoot).to.have.descendants('.point').with.length(2);

    el.set(0.1, 0.9, 'newProbability', '', 'newFunction');
    await elementUpdated(el);
    expect(el.functions).to.have.length(3);
    expect(el.functions[2]).to.include({name: 'newFunction', g: 0.9});
    expect(el.shadowRoot).to.have.descendants('.curve').with.length(3);
    expect(el.probabilities).to.have.length(3);
    expect(el.probabilities[2]).to.include({name: 'newProbability', p: 0.1});
    expect(el.shadowRoot).to.have.descendants('.point').with.length(3);
  });

  it('can change another function and probability', async () => {
    const el = await fixture(html`<cpt-probability probability="0.4" gamma="0.6"></cpt-probability>`);
    // Wait for resize?
    await aTimeout(200);

    el.set(0.2, 0.8, 'anotherProbability', '', 'anotherFunction');
    await elementUpdated(el);
    expect(el.functions).to.have.length(2);
    expect(el.functions[1]).to.include({name: 'anotherFunction', g: 0.8});
    expect(el.shadowRoot).to.have.descendants('.curve').with.length(2);
    expect(el.probabilities).to.have.length(2);
    expect(el.probabilities[1]).to.include({name: 'anotherProbability', p: 0.2});
    expect(el.shadowRoot).to.have.descendants('.point').with.length(2);

    el.set(0.1, 0.9, 'anotherProbability', '', 'anotherFunction');
    await elementUpdated(el);
    expect(el.functions).to.have.length(2);
    expect(el.functions[1]).to.include({name: 'anotherFunction', g: 0.9});
    expect(el.shadowRoot).to.have.descendants('.curve').with.length(2);
    expect(el.probabilities).to.have.length(2);
    expect(el.probabilities[1]).to.include({name: 'anotherProbability', p: 0.1});
    expect(el.shadowRoot).to.have.descendants('.point').with.length(2);
  });

  it('can remove functions and/or probabilities', async () => {
    const el = await fixture(html`<cpt-probability probability="0.4" gamma="0.6"></cpt-probability>`);
    // Wait for resize?
    await aTimeout(200);

    el.set(0.2, 0.8, 'anotherProbability', '', 'anotherFunction');
    await elementUpdated(el);
    expect(el.functions).to.have.length(2);
    expect(el.functions[1]).to.include({name: 'anotherFunction', g: 0.8});
    expect(el.shadowRoot).to.have.descendants('.curve').with.length(2);
    expect(el.probabilities).to.have.length(2);
    expect(el.probabilities[1]).to.include({name: 'anotherProbability', p: 0.2});
    expect(el.shadowRoot).to.have.descendants('.point').with.length(2);

    // Wait for resize?
    await aTimeout(200);

    el.removeProbability('anotherProbability');
    await elementUpdated(el);
    expect(el.probabilities).to.have.length(1);

    el.removeFunction('anotherFunction');
    await elementUpdated(el);
    expect(el.functions).to.have.length(1);

    el.set(0.1, 0.9, 'new');
    await elementUpdated(el);
    expect(el.functions).to.have.length(2);
    expect(el.functions[1]).to.include({name: 'new', g: 0.9});
    expect(el.shadowRoot).to.have.descendants('.curve').with.length(2);
    expect(el.probabilities).to.have.length(2);
    expect(el.probabilities[1]).to.include({name: 'new', p: 0.1});
    expect(el.shadowRoot).to.have.descendants('.point').with.length(2);

    // Wait for resize?
    await aTimeout(200);

    el.remove('new');
    expect(el.functions).to.have.length(1);
    expect(el.probabilities).to.have.length(1);
  });

  it('can clear functions and/or probabilities', async () => {
    const el = await fixture(html`<cpt-probability probability="0.4" gamma="0.6"></cpt-probability>`);
    // Wait for resize?
    await aTimeout(200);

    el.set(0.2, 0.8, 'anotherProbability', '', 'anotherFunction');
    await elementUpdated(el);
    expect(el.functions).to.have.length(2);
    expect(el.functions[1]).to.include({name: 'anotherFunction', g: 0.8});
    expect(el.shadowRoot).to.have.descendants('.curve').with.length(2);
    expect(el.probabilities).to.have.length(2);
    expect(el.probabilities[1]).to.include({name: 'anotherProbability', p: 0.2});
    expect(el.shadowRoot).to.have.descendants('.point').with.length(2);

    // Wait for resize?
    await aTimeout(200);

    el.clearProbabilities();
    await elementUpdated(el);
    expect(el.probabilities).to.have.length(1);

    el.clearFunctions();
    await elementUpdated(el);
    expect(el.functions).to.have.length(1);

    el.set(0.1, 0.9, 'new');
    await elementUpdated(el);
    expect(el.functions).to.have.length(2);
    expect(el.functions[1]).to.include({name: 'new', g: 0.9});
    expect(el.shadowRoot).to.have.descendants('.curve').with.length(2);
    expect(el.probabilities).to.have.length(2);
    expect(el.probabilities[1]).to.include({name: 'new', p: 0.1});
    expect(el.shadowRoot).to.have.descendants('.point').with.length(2);

    // Wait for resize?
    await aTimeout(200);

    el.clear();
    expect(el.functions).to.have.length(1);
    expect(el.probabilities).to.have.length(1);
  });

  it('can be interactive', async () => {
    const el = await fixture(html`<cpt-probability interactive></cpt-probability>`);
    // Wait for resize?
    await aTimeout(200);
    expect(el.shadowRoot).to.have.descendant('.curve').with.class('interactive');
  });

  it('supports mouse manipulation of point', async () => {
    const el = await fixture(html`<cpt-probability interactive probability="0.4" gamma="0.6"></cpt-probability>`);
    // Wait for resize?
    await aTimeout(200);
    // Get "before" state
    const {p} = el;
    // Action
    const target = el.shadowRoot.querySelector('.point.interactive');
    setTimeout(() => { mouseDragElement(target, 50, 0); });
    const {detail} = await oneEvent(el, 'cpt-probability-change');
    // Compare "after" state
    expect(el.p).to.not.equal(p);
    expect(detail.p).to.not.equal(p);
  });

  it('supports keyboard manipulation of point', async () => {
    const el = await fixture(html`<cpt-probability interactive probability="0.4" gamma="0.6"></cpt-probability>`);
    // Wait for resize?
    await aTimeout(200);
    // Get "before" state
    const {p} = el;
    // Action
    const target = el.shadowRoot.querySelector('.point.interactive');
    target.focus();
    setTimeout(() => { sendKeys({press: 'ArrowLeft'}); });
    const {detail} = await oneEvent(el, 'cpt-probability-change');
    // Compare "after" state
    expect(el.p).to.not.equal(p);
    expect(detail.p).to.not.equal(p);
  });

  it('supports mouse manipulation of curve', async () => {
    const el = await fixture(html`<cpt-probability interactive probability="0.4" gamma="1"></cpt-probability>`);
    // Wait for resize?
    await aTimeout(200);
    // Get "before" state
    const {g} = el;
    // Action
    const target = el.shadowRoot.querySelector('.curve.interactive');
    setTimeout(() => { mouseDragElement(target, 0, -50); });
    const {detail} = await oneEvent(el, 'cpt-probability-change');
    // Compare "after" state
    expect(el.g).to.not.equal(g);
    expect(detail.g).to.not.equal(g);
  });

  it('supports keyboard manipulation of curve', async () => {
    const el = await fixture(html`<cpt-probability interactive probability="0.4" gamma="0.6"></cpt-probability>`);
    // Wait for resize?
    await aTimeout(200);
    // Get "before" state
    const {g} = el;
    // Action
    const target = el.shadowRoot.querySelector('.curve.interactive');
    target.focus();
    setTimeout(() => { sendKeys({press: 'ArrowDown'}); });
    const {detail} = await oneEvent(el, 'cpt-probability-change');
    // Compare "after" state
    expect(el.g).to.not.equal(g);
    expect(detail.g).to.not.equal(g);
  });

  it('can add, pause and resume a trial', async () => {
    const el = await fixture(html`<cpt-probability></cpt-probability>`);
    // Wait for resize?
    await aTimeout(200);

    el.trial(0, 20, 0.75, 10, 1, 'gamble');
    await elementUpdated(el);
    expect(el.shadowRoot).to.have.descendants('.point').with.length(1);
    expect(el.shadowRoot).to.have.descendants('.line-p').with.length(2);
    expect(el.shadowRoot).to.have.descendants('.line-w').with.length(2);
    expect(el.trialCount).to.equal(1);
    expect(el.probabilities).to.have.length(2);
    expect(el.probabilities[1]).to.include({name: '1', p: 0.75});

    el.pauseTrial();
    expect(el.probabilities[1]).to.include({name: '1', paused: true});

    el.resumeTrial();
    expect(el.probabilities[1]).to.include({name: '1', paused: false});
  });

  it('can manipulate a paused trial');
});
