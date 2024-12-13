import DDMMath from '@decidables/accumulable-math';

import {
  expect,
  fixture,
  html,
  oneEvent,
  sendKeys,
} from '../../../../scripts/test-utility';

import '../../src/equations/azvt02m';

describe('ddm-equation-azvt02m', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<ddm-equation-azvt02m></ddm-equation-azvt02m>`);
    expect(el.shadowRoot).to.have.descendant('.equation');
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<ddm-equation-azvt02m></ddm-equation-azvt02m>`);
    expect(el).lightDom.to.equal('');
  });

  it('can display only labels', async () => {
    const el = await fixture(html`<ddm-equation-azvt02m></ddm-equation-azvt02m>`);
    expect(el.shadowRoot).to.not.have.descendant('decidables-spinner');
    expect(el.shadowRoot).to.have.descendant('.a');
    expect(el.shadowRoot).to.have.descendant('.z');
    expect(el.shadowRoot).to.have.descendant('.v');
    expect(el.shadowRoot).to.have.descendant('.t0');
    expect(el.shadowRoot).to.have.descendant('.s');
    expect(el.shadowRoot).to.have.descendant('.mean-rt');
  });

  it('can display numbers', async () => {
    const el = await fixture(html`<ddm-equation-azvt02m numeric boundary-separation="1.7" starting-point="0.3" drift-rate="2.1" nondecision-time="325"></ddm-equation-azvt02m>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner[disabled]').with.length(12);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.a[disabled]').with.value(1.7);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.z[disabled]').with.value(0.3);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.v[disabled]').with.value(2.1);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.t0[disabled]').with.value(325);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.s[disabled]').with.value(DDMMath.s);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.mean-rt[disabled]').with.value(797);
  });

  it('can be interactive', async () => {
    const el = await fixture(html`<ddm-equation-azvt02m numeric interactive boundary-separation="0.9" starting-point="0.8" drift-rate="1.8" nondecision-time="250"></ddm-equation-azvt02m>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner[disabled]').with.length(3);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(9);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.a:not([disabled])').with.value(0.9);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.z:not([disabled])').with.value(0.8);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.v:not([disabled])').with.value(1.8);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.t0:not([disabled])').with.value(250);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.s[disabled]').with.value(DDMMath.s);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.mean-rt[disabled]').with.value(331);
  });

  it('can accept interactive boundary separation input', async () => {
    const el = await fixture(html`<ddm-equation-azvt02m numeric interactive boundary-separation="1.4" starting-point="0.1" drift-rate="3.2" nondecision-time="150"></ddm-equation-azvt02m>`);
    // Action
    const target = el.shadowRoot.querySelector('.a').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '2'}); });
    const {detail} = await oneEvent(el, 'ddm-equation-azvt02m-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.a').with.value(2);
    expect(el.a).to.equal(2);
    expect(detail.a).to.equal(2);
    expect(el.shadowRoot).to.have.descendant('.z').with.value(0.1);
    expect(el.shadowRoot).to.have.descendant('.v').with.value(3.2);
    expect(el.shadowRoot).to.have.descendant('.t0').with.value(150);
    expect(el.shadowRoot).to.have.descendant('.s').with.value(DDMMath.s);
    expect(el.shadowRoot).to.have.descendant('.mean-rt').with.value(539);
  });

  it('can accept interactive starting point input', async () => {
    const el = await fixture(html`<ddm-equation-azvt02m numeric interactive boundary-separation="1.2" starting-point="0.3" drift-rate="1.2" nondecision-time="400"></ddm-equation-azvt02m>`);
    // Action
    const target = el.shadowRoot.querySelector('.z').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '1'}); });
    const {detail} = await oneEvent(el, 'ddm-equation-azvt02m-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.z').with.value(1);
    expect(el.z).to.equal(1);
    expect(detail.z).to.equal(1);
    expect(el.shadowRoot).to.have.descendant('.a').with.value(1.2);
    expect(el.shadowRoot).to.have.descendant('.v').with.value(1.2);
    expect(el.shadowRoot).to.have.descendant('.t0').with.value(400);
    expect(el.shadowRoot).to.have.descendant('.s').with.value(DDMMath.s);
    expect(el.shadowRoot).to.have.descendant('.mean-rt').with.value(400);
  });

  it('can accept interactive drift rate input', async () => {
    const el = await fixture(html`<ddm-equation-azvt02m numeric interactive boundary-separation="1.6" starting-point="0.54" drift-rate="1.44" nondecision-time="320"></ddm-equation-azvt02m>`);
    // Action
    const target = el.shadowRoot.querySelector('.v').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '2'}); });
    const {detail} = await oneEvent(el, 'ddm-equation-azvt02m-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.v').with.value(2);
    expect(el.v).to.equal(2);
    expect(detail.v).to.equal(2);
    expect(el.shadowRoot).to.have.descendant('.a').with.value(1.6);
    expect(el.shadowRoot).to.have.descendant('.z').with.value(0.54);
    expect(el.shadowRoot).to.have.descendant('.t0').with.value(320);
    expect(el.shadowRoot).to.have.descendant('.s').with.value(DDMMath.s);
    expect(el.shadowRoot).to.have.descendant('.mean-rt').with.value(664);
  });

  it('can accept interactive non-decision time input', async () => {
    const el = await fixture(html`<ddm-equation-azvt02m numeric interactive boundary-separation="1.9" starting-point="0.44" drift-rate="1.01" nondecision-time="220"></ddm-equation-azvt02m>`);
    // Action
    const target = el.shadowRoot.querySelector('.t0').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '0'}); });
    const {detail} = await oneEvent(el, 'ddm-equation-azvt02m-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.t0').with.value(0);
    expect(el.t0).to.equal(0);
    expect(detail.t0).to.equal(0);
    expect(el.shadowRoot).to.have.descendant('.a').with.value(1.9);
    expect(el.shadowRoot).to.have.descendant('.z').with.value(0.44);
    expect(el.shadowRoot).to.have.descendant('.v').with.value(1.01);
    expect(el.shadowRoot).to.have.descendant('.s').with.value(DDMMath.s);
    expect(el.shadowRoot).to.have.descendant('.mean-rt').with.value(740);
  });
});
