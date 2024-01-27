import {
  expect,
  fixture,
  html,
  oneEvent,
  sendKeys,
} from '../../../../scripts/test-utility';

import '../../src/equations/hmfacr2acc';

describe('sdt-equation-hmfacr2acc', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<sdt-equation-hmfacr2acc></sdt-equation-hmfacr2acc>`);
    expect(el.shadowRoot).to.have.descendant('.equation');
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<sdt-equation-hmfacr2acc></sdt-equation-hmfacr2acc>`);
    expect(el).lightDom.to.equal('');
  });

  it('can display only labels', async () => {
    const el = await fixture(html`<sdt-equation-hmfacr2acc></sdt-equation-hmfacr2acc>`);
    expect(el.shadowRoot).to.not.have.descendant('decidables-spinner');
    expect(el.shadowRoot).to.have.descendant('.h');
    expect(el.shadowRoot).to.have.descendant('.m');
    expect(el.shadowRoot).to.have.descendant('.fa');
    expect(el.shadowRoot).to.have.descendant('.cr');
    expect(el.shadowRoot).to.have.descendant('.acc');
  });

  it('can display numbers', async () => {
    const el = await fixture(html`<sdt-equation-hmfacr2acc numeric hits="80" misses="20" false-alarms="40" correct-rejections="60"></sdt-equation-hmfacr2acc>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner[disabled]').with.length(7);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.h[disabled]').with.value(80);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.m[disabled]').with.value(20);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.fa[disabled]').with.value(40);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.cr[disabled]').with.value(60);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.acc[disabled]').with.value(0.7);
  });

  it('can be interactive', async () => {
    const el = await fixture(html`<sdt-equation-hmfacr2acc numeric interactive hits="80" misses="20" false-alarms="40" correct-rejections="60"></sdt-equation-hmfacr2acc>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner[disabled]').with.length(1);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(6);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.h:not([disabled])').with.value(80);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.m:not([disabled])').with.value(20);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.fa:not([disabled])').with.value(40);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.cr:not([disabled])').with.value(60);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.acc[disabled]').with.value(0.7);
  });

  it('can accept interactive hit input', async () => {
    const el = await fixture(html`<sdt-equation-hmfacr2acc numeric interactive hits="80" misses="20" false-alarms="40" correct-rejections="60"></sdt-equation-hmfacr2acc>`);
    // Action
    const target = el.shadowRoot.querySelector('.h').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '40'}); });
    await oneEvent(el, 'sdt-equation-hmfacr2acc-change');
    const {detail} = await oneEvent(el, 'sdt-equation-hmfacr2acc-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.h').with.value(40);
    expect(el.h).to.equal(40);
    expect(detail.h).to.equal(40);
    expect(el.shadowRoot).to.have.descendant('.m').with.value(20);
    expect(el.shadowRoot).to.have.descendant('.fa').with.value(40);
    expect(el.shadowRoot).to.have.descendant('.cr').with.value(60);
    expect(el.shadowRoot).to.have.descendant('.acc').with.value(0.625);
  });

  it('can accept interactive miss input', async () => {
    const el = await fixture(html`<sdt-equation-hmfacr2acc numeric interactive hits="80" misses="20" false-alarms="40" correct-rejections="60"></sdt-equation-hmfacr2acc>`);
    // Action
    const target = el.shadowRoot.querySelector('.m').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '40'}); });
    await oneEvent(el, 'sdt-equation-hmfacr2acc-change');
    const {detail} = await oneEvent(el, 'sdt-equation-hmfacr2acc-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.m').with.value(40);
    expect(el.m).to.equal(40);
    expect(detail.m).to.equal(40);
    expect(el.shadowRoot).to.have.descendant('.h').with.value(80);
    expect(el.shadowRoot).to.have.descendant('.fa').with.value(40);
    expect(el.shadowRoot).to.have.descendant('.cr').with.value(60);
    expect(el.shadowRoot).to.have.descendant('.acc').with.value(0.636);
  });

  it('can accept interactive false alarm input', async () => {
    const el = await fixture(html`<sdt-equation-hmfacr2acc numeric interactive hits="80" misses="20" false-alarms="40" correct-rejections="60"></sdt-equation-hmfacr2acc>`);
    // Action
    const target = el.shadowRoot.querySelector('.fa').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '80'}); });
    await oneEvent(el, 'sdt-equation-hmfacr2acc-change');
    const {detail} = await oneEvent(el, 'sdt-equation-hmfacr2acc-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.fa').with.value(80);
    expect(el.fa).to.equal(80);
    expect(detail.fa).to.equal(80);
    expect(el.shadowRoot).to.have.descendant('.h').with.value(80);
    expect(el.shadowRoot).to.have.descendant('.m').with.value(20);
    expect(el.shadowRoot).to.have.descendant('.cr').with.value(60);
    expect(el.shadowRoot).to.have.descendant('.acc').with.value(0.583);
  });

  it('can accept interactive correct rejection input', async () => {
    const el = await fixture(html`<sdt-equation-hmfacr2acc numeric interactive hits="80" misses="20" false-alarms="40" correct-rejections="60"></sdt-equation-hmfacr2acc>`);
    // Action
    const target = el.shadowRoot.querySelector('.cr').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '40'}); });
    await oneEvent(el, 'sdt-equation-hmfacr2acc-change');
    const {detail} = await oneEvent(el, 'sdt-equation-hmfacr2acc-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.cr').with.value(40);
    expect(el.cr).to.equal(40);
    expect(detail.cr).to.equal(40);
    expect(el.shadowRoot).to.have.descendant('.h').with.value(80);
    expect(el.shadowRoot).to.have.descendant('.m').with.value(20);
    expect(el.shadowRoot).to.have.descendant('.fa').with.value(40);
    expect(el.shadowRoot).to.have.descendant('.acc').with.value(0.667);
  });
});
