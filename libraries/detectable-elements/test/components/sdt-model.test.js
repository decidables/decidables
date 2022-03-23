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

import '../../src/components/sdt-model';

describe('sdt-model', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<sdt-model></sdt-model>`);
    expect(el.shadowRoot).to.have.descendant('svg');
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<sdt-model></sdt-model>`);
    expect(el).lightDom.to.equal('');
  });

  it('can display distributions', async () => {
    const el = await fixture(html`<sdt-model distributions></sdt-model>`);
    expect(el.shadowRoot).to.have.descendant('.noise');
    expect(el.shadowRoot).to.have.descendant('.signal');
  });

  it('can display a threshold', async () => {
    const el = await fixture(html`<sdt-model threshold></sdt-model>`);
    expect(el.shadowRoot).to.have.descendant('.threshold');
  });

  it('can display distributions with unequal variance', async () => {
    const el = await fixture(html`<sdt-model distributions unequal s="1.5"></sdt-model>`);
    expect(el.shadowRoot).to.have.descendant('.noise');
    expect(el.shadowRoot).to.have.descendant('.signal.unequal');
  });

  it('can display the sensitivity', async () => {
    const el = await fixture(html`<sdt-model distributions sensitivity></sdt-model>`);
    expect(el.shadowRoot).to.have.descendant('.measure-d');
  });

  it('can display the bias', async () => {
    const el = await fixture(html`<sdt-model distributions threshold bias></sdt-model>`);
    expect(el.shadowRoot).to.have.descendant('.measure-c');
  });

  it('can display the signal variance', async () => {
    const el = await fixture(html`<sdt-model distributions unequal s="1.5" variance></sdt-model>`);
    expect(el.shadowRoot).to.have.descendant('.measure-s');
  });

  it('has settable model parameters', async () => {
    const el = await fixture(html`<sdt-model d="2" c="1" s="1.5" variance></sdt-model>`);
    expect(el.d).to.equal(2);
    expect(el.c).to.equal(1);
    expect(el.s).to.equal(1.5);
  });

  it('can be interactive', async () => {
    const el = await fixture(html`<sdt-model interactive distributions threshold sensitivity bias></sdt-model>`);
    expect(el.shadowRoot).to.have.descendant('.signal').with.class('interactive');
    expect(el.shadowRoot).to.have.descendant('.noise').with.class('interactive');
    expect(el.shadowRoot).to.have.descendant('.threshold').with.class('interactive');
  });

  it('supports mouse manipulation of threshold', async () => {
    const el = await fixture(html`<sdt-model interactive threshold bias style="--transition-duration: 0;"></sdt-model>`);
    // HACK: Why do I need this timeout?
    await aTimeout(200);
    // Get "before" state
    const {c} = el;
    // Action
    const target = el.shadowRoot.querySelector('.threshold.interactive');
    setTimeout(() => { mouseDragElement(target, 50, 0); });
    const {detail} = await oneEvent(el, 'sdt-model-change');
    // Compare "after" state
    expect(el.c).to.not.equal(c);
    expect(detail.c).to.not.equal(c);
  });

  it('supports keyboard manipulation of threshold', async () => {
    const el = await fixture(html`<sdt-model interactive threshold bias style="--transition-duration: 0;"></sdt-model>`);
    // Get "before" state
    const {c} = el;
    // Action
    const target = el.shadowRoot.querySelector('.threshold.interactive');
    target.focus();
    setTimeout(() => { sendKeys({press: 'ArrowLeft'}); });
    const {detail} = await oneEvent(el, 'sdt-model-change');
    // Compare "after" state
    expect(el.c).to.not.equal(c);
    expect(detail.c).to.not.equal(c);
  });

  it('supports mouse manipulation of signal distribution', async () => {
    const el = await fixture(html`<sdt-model interactive distributions unequal sensitivity variance style="--transition-duration: 0;"></sdt-model>`);
    // HACK: Why do I need this timeout?
    await aTimeout(200);
    // Get "before" state
    const {d, s} = el;
    // Action
    const target = el.shadowRoot.querySelector('.signal.interactive');
    setTimeout(() => { mouseDragElement(target, 50, 50); });
    const {detail} = await oneEvent(el, 'sdt-model-change');
    // Compare "after" state
    expect(el.d).to.not.equal(d);
    expect(el.s).to.not.equal(s);
    expect(detail.d).to.not.equal(d);
    expect(detail.s).to.not.equal(s);
  });

  it('supports keyboard manipulation of signal distribution', async () => {
    const el = await fixture(html`<sdt-model interactive distributions unequal sensitivity variance style="--transition-duration: 0;"></sdt-model>`);
    // Get "before" state
    const {d, s} = el;
    // Action
    const target = el.shadowRoot.querySelector('.signal.interactive');
    target.focus();
    setTimeout(() => { sendKeys({press: 'ArrowRight'}); });
    await oneEvent(el, 'sdt-model-change');
    // Another action
    setTimeout(() => { sendKeys({press: 'ArrowUp'}); });
    const {detail} = await oneEvent(el, 'sdt-model-change');
    // Compare "after" state
    expect(el.d).to.not.equal(d);
    expect(el.s).to.not.equal(s);
    expect(detail.d).to.not.equal(d);
    expect(detail.s).to.not.equal(s);
  });

  it('supports mouse manipulation of noise distribution', async () => {
    const el = await fixture(html`<sdt-model interactive distributions sensitivity style="--transition-duration: 0;"></sdt-model>`);
    // HACK: Why do I need this timeout?
    await aTimeout(200);
    // Get "before" state
    const {d} = el;
    // Action
    const target = el.shadowRoot.querySelector('.noise.interactive');
    setTimeout(() => { mouseDragElement(target, 50, 0, 'bottom-left'); });
    const {detail} = await oneEvent(el, 'sdt-model-change');
    // Compare "after" state
    expect(el.d).to.not.equal(d);
    expect(detail.d).to.not.equal(d);
  });

  it('supports keyboard manipulation of noise distribution', async () => {
    const el = await fixture(html`<sdt-model interactive distributions sensitivity style="--transition-duration: 0;"></sdt-model>`);
    // Get "before" state
    const {d} = el;
    // Action
    const target = el.shadowRoot.querySelector('.noise.interactive');
    target.focus();
    setTimeout(() => { sendKeys({press: 'ArrowLeft'}); });
    const {detail} = await oneEvent(el, 'sdt-model-change');
    // Compare "after" state
    expect(el.d).to.not.equal(d);
    expect(detail.d).to.not.equal(d);
  });

  it('can have a histogram', async () => {
    const el = await fixture(html`<sdt-model histogram style="--transition-duration: 0;"></sdt-model>`);
    expect(el.shadowRoot).to.have.descendant('.histogram');
  });

  it('can add trials and reset a histogram', async () => {
    const el = await fixture(html`<sdt-model histogram style="--transition-duration: 0;"></sdt-model>`);
    el.trial(1, 'present', 50, 50, 50);
    await elementUpdated(el);
    expect(el.shadowRoot).to.have.descendants('.histogram .trial').with.length(1);
    expect(el.trials).to.have.length(1);
    el.trial(2, 'absent', 50, 50, 50);
    await elementUpdated(el);
    expect(el.shadowRoot).to.have.descendants('.histogram .trial').with.length(2);
    expect(el.trials).to.have.length(2);
    el.reset();
    // expect(el.shadowRoot).to.not.have.descendant('.histogram .trial'); ????
    expect(el.trials).to.have.length(0);
  });

  it('can pause an animating histogram');
});
