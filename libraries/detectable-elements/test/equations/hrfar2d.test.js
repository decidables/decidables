import {
  aTimeout,
  expect,
  fixture,
  html,
  oneEvent,
  sendKeys,
} from '../../../../scripts/test';

import '../../src/equations/hrfar2d';

describe('sdt-equation-hrfar2d', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<sdt-equation-hrfar2d></sdt-equation-hrfar2d>`);
    // Give the component a chance to render!
    await aTimeout();
    expect(el.shadowRoot).to.have.descendant('.equation');
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<sdt-equation-hrfar2d></sdt-equation-hrfar2d>`);
    await aTimeout();
    expect(el).lightDom.to.equal('');
  });

  it('can display only labels', async () => {
    const el = await fixture(html`<sdt-equation-hrfar2d></sdt-equation-hrfar2d>`);
    await aTimeout();
    expect(el.shadowRoot).to.not.have.descendant('decidables-spinner');
    expect(el.shadowRoot).to.have.descendant('.hr');
    expect(el.shadowRoot).to.have.descendant('.far');
    expect(el.shadowRoot).to.have.descendant('.d');
  });

  it('can display numbers', async () => {
    const el = await fixture(html`<sdt-equation-hrfar2d numeric hit-rate="0.8" false-alarm-rate="0.4"></sdt-equation-hrfar2d>`);
    await aTimeout();
    expect(el.shadowRoot).to.have.descendants('decidables-spinner[disabled]').with.length(3);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.hr[disabled]').with.value(0.8);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.far[disabled]').with.value(0.4);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.d[disabled]').with.value(1.095);
  });

  it('can display numbers with unequal variance', async () => {
    const el = await fixture(html`<sdt-equation-hrfar2d numeric unequal hit-rate="0.8" false-alarm-rate="0.4" s="0.5"></sdt-equation-hrfar2d>`);
    await aTimeout();
    expect(el.shadowRoot).to.have.descendants('decidables-spinner[disabled]').with.length(5);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.hr[disabled]').with.value(0.8);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.far[disabled]').with.value(0.4);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.s[disabled]').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.d[disabled]').with.value(0.853);
  });

  it('can be interactive', async () => {
    const el = await fixture(html`<sdt-equation-hrfar2d numeric interactive hit-rate="0.8" false-alarm-rate="0.4"></sdt-equation-hrfar2d>`);
    await aTimeout();
    expect(el.shadowRoot).to.have.descendants('decidables-spinner[disabled]').with.length(1);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(2);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.hr:not([disabled])').with.value(0.8);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.far:not([disabled])').with.value(0.4);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.d[disabled]').with.value(1.095);
  });

  it('can accept interactive hit rate input', async () => {
    const el = await fixture(html`<sdt-equation-hrfar2d numeric interactive hit-rate="0.8" false-alarm-rate="0.4"></sdt-equation-hrfar2d>`);
    await aTimeout();
    // Action
    const target = el.shadowRoot.querySelector('.hr').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '00.4'}); });
    await oneEvent(el, 'sdt-equation-hrfar2d-change');
    await oneEvent(el, 'sdt-equation-hrfar2d-change');
    await oneEvent(el, 'sdt-equation-hrfar2d-change');
    const {detail} = await oneEvent(el, 'sdt-equation-hrfar2d-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.hr').with.value(0.4);
    expect(el.hr).to.equal(0.4);
    expect(detail.hr).to.equal(0.4);
    expect(el.shadowRoot).to.have.descendant('.far').with.value(0.4);
    expect(el.shadowRoot).to.have.descendant('.d').with.value(0);
  });

  it('can accept interactive false alarm input', async () => {
    const el = await fixture(html`<sdt-equation-hrfar2d numeric interactive hit-rate="0.8" false-alarm-rate="0.4"></sdt-equation-hrfar2d>`);
    await aTimeout();
    // Action
    const target = el.shadowRoot.querySelector('.far').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '00.2'}); });
    await oneEvent(el, 'sdt-equation-hrfar2d-change');
    await oneEvent(el, 'sdt-equation-hrfar2d-change');
    await oneEvent(el, 'sdt-equation-hrfar2d-change');
    const {detail} = await oneEvent(el, 'sdt-equation-hrfar2d-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.far').with.value(0.2);
    expect(el.far).to.equal(0.2);
    expect(detail.far).to.equal(0.2);
    expect(el.shadowRoot).to.have.descendant('.hr').with.value(0.8);
    expect(el.shadowRoot).to.have.descendant('.d').with.value(1.683);
  });

  it('can accept interactive variance input', async () => {
    const el = await fixture(html`<sdt-equation-hrfar2d numeric interactive unequal hit-rate="0.8" false-alarm-rate="0.4" s="0.5"></sdt-equation-hrfar2d>`);
    await aTimeout();
    // Action
    const target = el.shadowRoot.querySelector('.s').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '1'}); });
    const {detail} = await oneEvent(el, 'sdt-equation-hrfar2d-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.s').with.value(1);
    expect(el.s).to.equal(1);
    expect(detail.s).to.equal(1);
    expect(el.shadowRoot).to.have.descendant('.hr').with.value(0.8);
    expect(el.shadowRoot).to.have.descendant('.far').with.value(0.4);
    expect(el.shadowRoot).to.have.descendant('.d').with.value(1.095);
  });
});