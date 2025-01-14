import {
  aTimeout,
  elementUpdated,
  expect,
  fixture,
  html,
  oneEvent,
  mouseDragElement,
  sendKeys,
} from '../../../../scripts/test-utility';

import '../../src/components/ddm-model';

describe('ddm-model', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<ddm-model></ddm-model>`);
    // Wait for resize?
    await aTimeout(200);
    expect(el.shadowRoot).to.have.descendant('svg');
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<ddm-model></ddm-model>`);
    expect(el).lightDom.to.equal('');
  });

  it('can display model with sample paths, densities, and accuracy', async () => {
    const el = await fixture(html`<ddm-model></ddm-model>`);
    // Wait for resize?
    await aTimeout(200);
    expect(el.shadowRoot).to.have.descendant('.t0z');
    expect(el.shadowRoot).to.have.descendant('.drift');
    expect(el.shadowRoot).to.have.descendant('.boundary.correct');
    expect(el.shadowRoot).to.have.descendant('.boundary.error');

    expect(el.shadowRoot).to.have.descendants('.path');
    expect(el.shadowRoot).to.have.descendants('.rt');

    expect(el.shadowRoot).to.have.descendant('.dist.correct');
    expect(el.shadowRoot).to.have.descendant('.dist.error');

    expect(el.shadowRoot).to.have.descendant('.model.accuracy.correct');
    expect(el.shadowRoot).to.have.descendant('.model.accuracy.error');
  });

  it('can display measures', async () => {
    const el = await fixture(html`<ddm-model measures></ddm-model>`);
    // Wait for resize?
    await aTimeout(200);
    expect(el.shadowRoot).to.have.descendant('.measure.a');
    expect(el.shadowRoot).to.have.descendant('.measure.z');
    expect(el.shadowRoot).to.have.descendant('.measure.v');
    expect(el.shadowRoot).to.have.descendant('.measure.t0');
  });

  it('can display means', async () => {
    const el = await fixture(html`<ddm-model trials="100" means></ddm-model>`);
    // Wait for resize?
    await aTimeout(200);
    expect(el.shadowRoot).to.have.descendant('.model.mean.correct');
    expect(el.shadowRoot).to.have.descendant('.model.mean.error');
    expect(el.shadowRoot).to.have.descendant('.data.mean.correct');
    expect(el.shadowRoot).to.have.descendant('.data.mean.error');
  });

  it('can display sds', async () => {
    const el = await fixture(html`<ddm-model trials="100" sds></ddm-model>`);
    // Wait for resize?
    await aTimeout(200);
    expect(el.shadowRoot).to.have.descendant('.model.sd.correct');
    expect(el.shadowRoot).to.have.descendant('.model.sd.error');
    expect(el.shadowRoot).to.have.descendant('.data.sd.correct');
    expect(el.shadowRoot).to.have.descendant('.data.sd.error');
  });

  it('has settable trials', async () => {
    const el = await fixture(html`<ddm-model trials="20"></ddm-model>`);
    // Wait for resize?
    await aTimeout(200);
    expect(el.shadowRoot).to.have.descendants('.path').with.length(20);
    expect(el.shadowRoot).to.have.descendants('.rt').with.length(20);
  });

  it('has settable seed', async () => {
    const el = await fixture(html`<ddm-model seed="0.5"></ddm-model>`);
    // Wait for resize?
    await aTimeout(200);
    expect(el.seed).to.equal(0.5);
    const {rt} = el.data.trials[0];

    el.seed = 0.4;
    await elementUpdated(el);
    expect(el.data.trials[0].rt).to.not.equal(rt);

    el.seed = 0.5;
    await elementUpdated(el);
    expect(el.data.trials[0].rt).to.equal(rt);
  });

  it('has settable human', async () => {
    const el = await fixture(html`<ddm-model human></ddm-model>`);
    // Wait for resize?
    await aTimeout(200);
    expect(el.human).to.equal(true);
  });

  it('has settable model parameters', async () => {
    const el = await fixture(html`<ddm-model boundary-separation="1.6" starting-point="0.33" drift-rate="0.17" nondecision-time="109"></ddm-model>`);
    expect(el.a).to.equal(1.6);
    expect(el.z).to.equal(0.33);
    expect(el.v).to.equal(0.17);
    expect(el.t0).to.equal(109);
  });

  it('can be interactive', async () => {
    const el = await fixture(html`<ddm-model interactive></ddm-model>`);
    // Wait for resize?
    await aTimeout(200);
    expect(el.shadowRoot).to.have.descendant('.t0z').with.class('interactive');
    expect(el.shadowRoot).to.have.descendant('.drift').with.class('interactive');
    expect(el.shadowRoot).to.have.descendant('.boundary.correct').with.class('interactive');
    expect(el.shadowRoot).to.have.descendant('.boundary.error').with.class('interactive');
  });

  it('supports mouse manipulation of boundary', async () => {
    const el = await fixture(html`<ddm-model interactive boundary-separation="1.6" style="--transition-duration: 0;"></ddm-model>`);
    // Wait for resize?
    await aTimeout(200);
    // Get "before" state
    const {a} = el;
    // Action
    const target = el.shadowRoot.querySelector('.boundary.correct.interactive');
    setTimeout(() => { mouseDragElement(target, 0, 50); });
    const {detail} = await oneEvent(el, 'ddm-model-a');
    // Compare "after" state
    expect(el.a).to.not.equal(a);
    expect(detail.a).to.not.equal(a);
  });

  it('supports keyboard manipulation of boundary', async () => {
    const el = await fixture(html`<ddm-model interactive boundary-separation="1.6" style="--transition-duration: 0;"></ddm-model>`);
    // Wait for resize?
    await aTimeout(200);
    // Get "before" state
    const {a} = el;
    // Action
    const target = el.shadowRoot.querySelector('.boundary.correct.interactive');
    target.focus();
    setTimeout(() => { sendKeys({press: 'ArrowDown'}); });
    const {detail} = await oneEvent(el, 'ddm-model-a');
    // Compare "after" state
    expect(el.a).to.not.equal(a);
    expect(detail.a).to.not.equal(a);

    setTimeout(() => {
      sendKeys({down: 'Shift'});
      sendKeys({press: 'ArrowUp'});
      sendKeys({up: 'Shift'});
    });
    const {detail: detail2} = await oneEvent(el, 'ddm-model-a');
    // Compare "after" state
    expect(el.a).to.not.equal(a);
    expect(detail2.a).to.not.equal(a);
    expect(detail.a).to.not.equal(detail2.a);
  });

  it('supports mouse manipulation of starting point', async () => {
    const el = await fixture(html`<ddm-model interactive starting-point="0.6" style="--transition-duration: 0;"></ddm-model>`);
    // Wait for resize?
    await aTimeout(200);
    // Get "before" state
    const {z} = el;
    // Action
    const target = el.shadowRoot.querySelector('.t0z.interactive');
    setTimeout(() => { mouseDragElement(target, 0, 50); });
    const {detail} = await oneEvent(el, 'ddm-model-z');
    // Compare "after" state
    expect(el.z).to.not.equal(z);
    expect(detail.z).to.not.equal(z);
  });

  it('supports keyboard manipulation of starting point', async () => {
    const el = await fixture(html`<ddm-model interactive starting-point="0.6" style="--transition-duration: 0;"></ddm-model>`);
    // Wait for resize?
    await aTimeout(200);
    // Get "before" state
    const {z} = el;
    // Action
    const target = el.shadowRoot.querySelector('.t0z.interactive');
    target.focus();
    setTimeout(() => { sendKeys({press: 'ArrowDown'}); });
    const {detail} = await oneEvent(el, 'ddm-model-z');
    // Compare "after" state
    expect(el.z).to.not.equal(z);
    expect(detail.z).to.not.equal(z);

    setTimeout(() => {
      sendKeys({down: 'Shift'});
      sendKeys({press: 'ArrowUp'});
      sendKeys({up: 'Shift'});
    });
    const {detail: detail2} = await oneEvent(el, 'ddm-model-z');
    // Compare "after" state
    expect(el.z).to.not.equal(z);
    expect(detail2.z).to.not.equal(z);
    expect(detail.z).to.not.equal(detail2.z);
  });

  it('supports mouse manipulation of nondecision time', async () => {
    const el = await fixture(html`<ddm-model interactive nondecision-time="80" style="--transition-duration: 0;"></ddm-model>`);
    // Wait for resize?
    await aTimeout(200);
    // Get "before" state
    const {t0} = el;
    // Action
    const target = el.shadowRoot.querySelector('.t0z.interactive');
    setTimeout(() => { mouseDragElement(target, 50, 0); });
    const {detail} = await oneEvent(el, 'ddm-model-t0');
    // Compare "after" state
    expect(el.t0).to.not.equal(t0);
    expect(detail.t0).to.not.equal(t0);
  });

  it('supports keyboard manipulation of nondecision time', async () => {
    const el = await fixture(html`<ddm-model interactive nondecision-time="80" style="--transition-duration: 0;"></ddm-model>`);
    // Wait for resize?
    await aTimeout(200);
    // Get "before" state
    const {t0} = el;
    // Action
    const target = el.shadowRoot.querySelector('.t0z.interactive');
    target.focus();
    setTimeout(() => { sendKeys({press: 'ArrowRight'}); });
    const {detail} = await oneEvent(el, 'ddm-model-t0');
    // Compare "after" state
    expect(el.t0).to.not.equal(t0);
    expect(detail.t0).to.not.equal(t0);

    setTimeout(() => {
      sendKeys({down: 'Shift'});
      sendKeys({press: 'ArrowLeft'});
      sendKeys({up: 'Shift'});
    });
    const {detail: detail2} = await oneEvent(el, 'ddm-model-t0');
    // Compare "after" state
    expect(el.t0).to.not.equal(t0);
    expect(detail2.t0).to.not.equal(t0);
    expect(detail.t0).to.not.equal(detail2.t0);
  });

  it('supports mouse manipulation of drift rate', async () => {
    const el = await fixture(html`<ddm-model interactive drift-rate="1.7" style="--transition-duration: 0;"></ddm-model>`);
    // Wait for resize?
    await aTimeout(200);
    // Get "before" state
    const {v} = el;
    // Action
    const target = el.shadowRoot.querySelector('.drift.interactive');
    setTimeout(() => { mouseDragElement(target, 50, 0); });
    const {detail} = await oneEvent(el, 'ddm-model-v');
    // Compare "after" state
    expect(el.v).to.not.equal(v);
    expect(detail.v).to.not.equal(v);
  });

  it('supports keyboard manipulation of drift rate', async () => {
    const el = await fixture(html`<ddm-model interactive drift-rate="1.7" style="--transition-duration: 0;"></ddm-model>`);
    // Wait for resize?
    await aTimeout(200);
    // Get "before" state
    const {v} = el;
    // Action
    const target = el.shadowRoot.querySelector('.drift.interactive');
    target.focus();
    setTimeout(() => { sendKeys({press: 'ArrowDown'}); });
    const {detail} = await oneEvent(el, 'ddm-model-v');
    // Compare "after" state
    expect(el.v).to.not.equal(v);
    expect(detail.v).to.not.equal(v);

    setTimeout(() => {
      sendKeys({down: 'Shift'});
      sendKeys({press: 'ArrowUp'});
      sendKeys({up: 'Shift'});
    });
    const {detail: detail2} = await oneEvent(el, 'ddm-model-v');
    // Compare "after" state
    expect(el.v).to.not.equal(v);
    expect(detail2.v).to.not.equal(v);
    expect(detail.v).to.not.equal(detail2.v);
  });

  it('can add a trial', async () => {
    const el = await fixture(html`<ddm-model trials="15" style="--transition-duration: 0;"></ddm-model>`);
    // Wait for resize?
    await aTimeout(200);
    expect(el.shadowRoot).to.have.descendants('.path').with.length(15);
    expect(el.shadowRoot).to.have.descendants('.rt').with.length(15);

    el.trial();
    await oneEvent(el, 'accumulable-response');
    expect(el.shadowRoot).to.have.descendants('.path').with.length(16);
    expect(el.shadowRoot).to.have.descendants('.rt').with.length(16);
  });

  it('can pause and resume a trial', async () => {
    const el = await fixture(html`<ddm-model trials="15" style="--transition-duration: 500;"></ddm-model>`);
    // Wait for resize?
    await aTimeout(200);
    expect(el.shadowRoot).to.have.descendants('.path').with.length(15);
    expect(el.shadowRoot).to.have.descendants('.rt').with.length(15);

    el.trial();
    el.pauseTrial();
    expect(el.paused).to.equal(true);
    await aTimeout(600);

    el.resumeTrial();
    expect(el.paused).to.equal(false);

    await oneEvent(el, 'accumulable-response');
    expect(el.shadowRoot).to.have.descendants('.path').with.length(16);
    expect(el.shadowRoot).to.have.descendants('.rt').with.length(16);
  });

  it('can clear trials', async () => {
    const el = await fixture(html`<ddm-model trials="15" style="--transition-duration: 0;"></ddm-model>`);
    // Wait for resize?
    await aTimeout(200);
    expect(el.shadowRoot).to.have.descendants('.path').with.length(15);
    expect(el.shadowRoot).to.have.descendants('.rt').with.length(15);

    el.clear();
    await elementUpdated(el);
    expect(el.shadowRoot).to.not.have.descendants('.path');
    expect(el.shadowRoot).to.not.have.descendants('.rt');
  });
});
