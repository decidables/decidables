import {
  expect,
  fixture,
  html,
  oneEvent,
  sendKeys,
} from '../../../../scripts/test-utility';

import '../../src/equations/hm2hr';

describe('sdt-equation-hm2hr', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<sdt-equation-hm2hr></sdt-equation-hm2hr>`);
    expect(el.shadowRoot).to.have.descendant('.equation');
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<sdt-equation-hm2hr></sdt-equation-hm2hr>`);
    expect(el).lightDom.to.equal('');
  });

  it('can display only labels', async () => {
    const el = await fixture(html`<sdt-equation-hm2hr></sdt-equation-hm2hr>`);
    expect(el.shadowRoot).to.not.have.descendant('decidables-spinner');
    expect(el.shadowRoot).to.have.descendant('.h');
    expect(el.shadowRoot).to.have.descendant('.m');
    expect(el.shadowRoot).to.have.descendant('.hr');
  });

  it('can display numbers', async () => {
    const el = await fixture(html`<sdt-equation-hm2hr numeric hits="80" misses="20"></sdt-equation-hm2hr>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner[disabled]').with.length(4);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.h[disabled]').with.value(80);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.m[disabled]').with.value(20);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.hr[disabled]').with.value(0.8);
  });

  it('can be interactive', async () => {
    const el = await fixture(html`<sdt-equation-hm2hr numeric interactive hits="80" misses="20"></sdt-equation-hm2hr>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner[disabled]').with.length(1);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(3);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.h:not([disabled])').with.value(80);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.m:not([disabled])').with.value(20);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.hr[disabled]').with.value(0.8);
  });

  it('can accept interactive hit input', async () => {
    const el = await fixture(html`<sdt-equation-hm2hr numeric interactive hits="80" misses="20"></sdt-equation-hm2hr>`);
    // Action
    const target = el.shadowRoot.querySelector('.h').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '40'}); });
    await oneEvent(el, 'sdt-equation-hm2hr-change');
    const {detail} = await oneEvent(el, 'sdt-equation-hm2hr-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.h').with.value(40);
    expect(el.h).to.equal(40);
    expect(detail.h).to.equal(40);
    expect(el.shadowRoot).to.have.descendant('.m').with.value(20);
    expect(el.shadowRoot).to.have.descendant('.hr').with.value(0.667);
  });

  it('can accept interactive miss input', async () => {
    const el = await fixture(html`<sdt-equation-hm2hr numeric interactive hits="80" misses="20"></sdt-equation-hm2hr>`);
    // Action
    const target = el.shadowRoot.querySelector('.m').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '80'}); });
    await oneEvent(el, 'sdt-equation-hm2hr-change');
    const {detail} = await oneEvent(el, 'sdt-equation-hm2hr-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.m').with.value(80);
    expect(el.m).to.equal(80);
    expect(detail.m).to.equal(80);
    expect(el.shadowRoot).to.have.descendant('.h').with.value(80);
    expect(el.shadowRoot).to.have.descendant('.hr').with.value(0.5);
  });
});
