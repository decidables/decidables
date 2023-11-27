import {
  elementUpdated,
  expect,
  fixture,
  html,
  oneEvent,
  mouseDragElement,
  sendKeys,
  waitUntil,
} from '../../../../scripts/test';

import '../../src/components/htd-curves';

describe('htd-curves', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<htd-curves></htd-curves>`);
    await waitUntil(
      () => { return el.shadowRoot.querySelector('svg'); },
      'Element did not render children',
    );
    expect(el.shadowRoot).to.have.descendant('svg');
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<htd-curves></htd-curves>`);
    expect(el).lightDom.to.equal('');
  });

  it('has an empty default option', async () => {
    const el = await fixture(html`<htd-curves></htd-curves>`);
    await waitUntil(
      () => { return el.shadowRoot.querySelector('svg'); },
      'Element did not render children',
    );
    expect(el.options).to.have.length(1);
    expect(el.getOption()).to.include({
      name: 'default', a: null, d: null, label: '',
    });
  });

  it('can set the default option', async () => {
    const el = await fixture(html`<htd-curves amount="10" delay="20" label="test" k="0.5"></htd-curves>`);
    await waitUntil(
      () => { return el.shadowRoot.querySelector('svg'); },
      'Element did not render children',
    );
    expect(el.options).to.have.length(1);
    expect(el.shadowRoot).to.have.descendants('.option').with.length(1);
    expect(el.getOption()).to.include({
      name: 'default', a: 10, d: 20, label: 'test',
    });
    expect(el.k).to.equal(0.5);
  });

  it('can change the default option', async () => {
    const el = await fixture(html`<htd-curves amount="10" delay="20" label="test" k="0.5"></htd-curves>`);
    await waitUntil(
      () => { return el.shadowRoot.querySelector('svg'); },
      'Element did not render children',
    );
    expect(el.options[0]).to.include({
      name: 'default', a: 10, d: 20, label: 'test',
    });
    expect(el.getOption()).to.include({
      name: 'default', a: 10, d: 20, label: 'test',
    });

    el.setOption(30, 40, 'default', 'change');
    await elementUpdated(el);
    expect(el.options[0]).to.include({
      name: 'default', a: 30, d: 40, label: 'change',
    });
  });

  it('can set another option', async () => {
    const el = await fixture(html`<htd-curves amount="10" delay="20" label="test" k="0.5"></htd-curves>`);
    await waitUntil(
      () => { return el.shadowRoot.querySelector('svg'); },
      'Element did not render children',
    );
    el.setOption(15, 25, 'another', 'other');
    await elementUpdated(el);
    expect(el.options).to.have.length(2);
    expect(el.options[1]).to.include({
      name: 'another', a: 15, d: 25, label: 'other',
    });
    expect(el.shadowRoot).to.have.descendants('.option').with.length(2);
  });

  it('can change another option', async () => {
    const el = await fixture(html`<htd-curves amount="10" delay="20" label="test" k="0.5"></htd-curves>`);
    await waitUntil(
      () => { return el.shadowRoot.querySelector('svg'); },
      'Element did not render children',
    );
    el.setOption(15, 25, 'another', 'other');
    await elementUpdated(el);
    expect(el.options).to.have.length(2);
    expect(el.options[1]).to.include({
      name: 'another', a: 15, d: 25, label: 'other',
    });
    expect(el.shadowRoot).to.have.descendants('.option').with.length(2);

    el.setOption(35, 45, 'another', 'different');
    await elementUpdated(el);
    expect(el.options).to.have.length(2);
    expect(el.options[1]).to.include({
      name: 'another', a: 35, d: 45, label: 'different',
    });
    expect(el.shadowRoot).to.have.descendants('.option').with.length(2);
  });

  it('can remove an option', async () => {
    const el = await fixture(html`<htd-curves amount="10" delay="20" label="test" k="0.5"></htd-curves>`);
    await waitUntil(
      () => { return el.shadowRoot.querySelector('svg'); },
      'Element did not render children',
    );
    el.setOption(15, 25, 'another', 'other');
    await elementUpdated(el);
    expect(el.options).to.have.length(2);
    expect(el.options[1]).to.include({
      name: 'another', a: 15, d: 25, label: 'other',
    });
    expect(el.shadowRoot).to.have.descendants('.option').with.length(2);

    el.removeOption('another');
    await elementUpdated(el);
    expect(el.options).to.have.length(1);
    expect(el.shadowRoot).to.have.descendants('.option').with.length(1);
  });

  it('can clear options', async () => {
    const el = await fixture(html`<htd-curves amount="10" delay="20" label="test" k="0.5"></htd-curves>`);
    await waitUntil(
      () => { return el.shadowRoot.querySelector('svg'); },
      'Element did not render children',
    );
    el.setOption(15, 25, 'another', 'other');
    await elementUpdated(el);
    expect(el.options).to.have.length(2);

    el.clearOptions();
    await elementUpdated(el);
    expect(el.options).to.have.length(1);
  });

  it('can be interactive', async () => {
    const el = await fixture(html`<htd-curves interactive amount="10" delay="20" label="test" k="0.5"></htd-curves>`);
    await waitUntil(
      () => { return el.shadowRoot.querySelector('svg'); },
      'Element did not render children',
    );
    expect(el.shadowRoot).to.have.descendant('.curve').with.class('interactive');
    expect(el.shadowRoot).to.have.descendant('.bar').with.class('interactive');
    expect(el.shadowRoot).to.have.descendant('.point').with.class('interactive');
  });

  it('supports mouse manipulation of point', async () => {
    const el = await fixture(html`<htd-curves interactive amount="10" delay="20" label="test" k="0.5"></htd-curves>`);
    await waitUntil(
      () => { return el.shadowRoot.querySelector('svg'); },
      'Element did not render children',
    );
    // Get "before" state
    const {a} = el;
    // Action
    const target = el.shadowRoot.querySelector('.point.interactive');
    setTimeout(() => { mouseDragElement(target, 0, -50); });
    const {detail} = await oneEvent(el, 'htd-curves-change');
    // Compare "after" state
    expect(el.a).to.be.above(a);
    expect(detail.a).to.equal(el.a);
  });

  it('supports keyboard manipulation of point', async () => {
    const el = await fixture(html`<htd-curves interactive amount="10" delay="20" label="test" k="0.5"></htd-curves>`);
    await waitUntil(
      () => { return el.shadowRoot.querySelector('svg'); },
      'Element did not render children',
    );
    // Get "before" state
    const {a} = el;
    // Action
    const target = el.shadowRoot.querySelector('.point.interactive');
    target.focus();
    setTimeout(() => { sendKeys({press: 'ArrowDown'}); });
    const {detail} = await oneEvent(el, 'htd-curves-change');
    // Compare "after" state
    expect(el.a).to.be.below(a);
    expect(detail.a).to.equal(el.a);
  });

  it('supports mouse manipulation of bar', async () => {
    const el = await fixture(html`<htd-curves interactive amount="10" delay="20" label="test" k="0.5"></htd-curves>`);
    await waitUntil(
      () => { return el.shadowRoot.querySelector('svg'); },
      'Element did not render children',
    );
    // Get "before" state
    const {d} = el;
    // Action
    const target = el.shadowRoot.querySelector('.bar.interactive');
    setTimeout(() => { mouseDragElement(target, 50, 0); });
    const {detail} = await oneEvent(el, 'htd-curves-change');
    // Compare "after" state
    expect(el.d).to.be.above(d);
    expect(detail.d).to.equal(el.d);
  });

  it('supports keyboard manipulation of bar', async () => {
    const el = await fixture(html`<htd-curves interactive amount="10" delay="20" label="test" k="0.5"></htd-curves>`);
    await waitUntil(
      () => { return el.shadowRoot.querySelector('svg'); },
      'Element did not render children',
    );
    // Get "before" state
    const {d} = el;
    // Action
    const target = el.shadowRoot.querySelector('.bar.interactive');
    target.focus();
    setTimeout(() => { sendKeys({press: 'ArrowLeft'}); });
    const {detail} = await oneEvent(el, 'htd-curves-change');
    // Compare "after" state
    expect(el.d).to.be.below(d);
    expect(detail.d).to.equal(el.d);
  });

  it('supports mouse manipulation of curve', async () => {
    const el = await fixture(html`<htd-curves interactive amount="50" delay="40" label="test" k="0"></htd-curves>`);
    await waitUntil(
      () => { return el.shadowRoot.querySelector('svg'); },
      'Element did not render children',
    );
    // Get "before" state
    const {k} = el;
    // Action
    const target = el.shadowRoot.querySelector('.curve.interactive');
    setTimeout(() => { mouseDragElement(target, 0, 50); });
    const {detail} = await oneEvent(el, 'htd-curves-change');
    // Compare "after" state
    expect(el.k).to.be.above(k);
    expect(detail.k).to.equal(el.k);
  });

  it('supports keyboard manipulation of curve', async () => {
    const el = await fixture(html`<htd-curves interactive amount="50" delay="40" label="test" k="0.1"></htd-curves>`);
    await waitUntil(
      () => { return el.shadowRoot.querySelector('svg'); },
      'Element did not render children',
    );
    // Get "before" state
    const {k} = el;
    // Action
    const target = el.shadowRoot.querySelector('.curve.interactive');
    target.focus();
    setTimeout(() => { sendKeys({press: 'ArrowUp'}); });
    const {detail} = await oneEvent(el, 'htd-curves-change');
    // Compare "after" state
    expect(el.k).to.be.below(k);
    expect(detail.k).to.equal(el.k);
  });

  it('can add a trial and receive response', async () => {
    const el = await fixture(html`<htd-curves></htd-curves>`);
    await waitUntil(
      () => { return el.shadowRoot.querySelector('svg'); },
      'Element did not render children',
    );
    el.trial(20, 30, 50, 70, 1, 'first');
    await elementUpdated(el);
    expect(el.shadowRoot).to.have.descendants('.option').with.length(2);
    expect(el.trialCount).to.equal(1);
    expect(el.options).to.have.length(3);
    expect(el.options[1]).to.include({
      name: '1-s', a: 20, d: 30, label: 's',
    });
    expect(el.options[2]).to.include({
      name: '1-l', a: 50, d: 70, label: 'l',
    });
    const {detail} = await oneEvent(el, 'discountable-response');
    expect(detail).to.include({
      trial: 1, as: 20, ds: 30, al: 50, dl: 70, response: 'first',
    });
  });

  it('can pause a trial');
});
