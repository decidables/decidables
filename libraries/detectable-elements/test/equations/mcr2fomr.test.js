import {
  expect,
  fixture,
  html,
  oneEvent,
  sendKeys,
} from '../../../../scripts/test-utility';

import '../../src/equations/mcr2fomr';

describe('sdt-equation-mcr2fomr', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<sdt-equation-mcr2fomr></sdt-equation-mcr2fomr>`);
    expect(el.shadowRoot).to.have.descendant('.equation');
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<sdt-equation-mcr2fomr></sdt-equation-mcr2fomr>`);
    expect(el).lightDom.to.equal('');
  });

  it('can display only labels', async () => {
    const el = await fixture(html`<sdt-equation-mcr2fomr></sdt-equation-mcr2fomr>`);
    expect(el.shadowRoot).to.not.have.descendant('decidables-spinner');
    expect(el.shadowRoot).to.have.descendant('.m');
    expect(el.shadowRoot).to.have.descendant('.cr');
    expect(el.shadowRoot).to.have.descendant('.fomr');
  });

  it('can display numbers', async () => {
    const el = await fixture(html`<sdt-equation-mcr2fomr numeric misses="20" correct-rejections="80"></sdt-equation-mcr2fomr>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner[disabled]').with.length(4);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.m[disabled]').with.value(20);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.cr[disabled]').with.value(80);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.fomr[disabled]').with.value(0.2);
  });

  it('can be interactive', async () => {
    const el = await fixture(html`<sdt-equation-mcr2fomr numeric interactive misses="20" correct-rejections="80"></sdt-equation-mcr2fomr>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner[disabled]').with.length(1);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(3);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.m:not([disabled])').with.value(20);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.cr:not([disabled])').with.value(80);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.fomr[disabled]').with.value(0.2);
  });

  it('can accept interactive miss input', async () => {
    const el = await fixture(html`<sdt-equation-mcr2fomr numeric interactive misses="20" correct-rejections="80"></sdt-equation-mcr2fomr>`);
    // Action
    const target = el.shadowRoot.querySelector('.m').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '40'}); });
    await oneEvent(el, 'sdt-equation-mcr2fomr-change');
    const {detail} = await oneEvent(el, 'sdt-equation-mcr2fomr-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.m').with.value(40);
    expect(el.m).to.equal(40);
    expect(detail.m).to.equal(40);
    expect(el.shadowRoot).to.have.descendant('.cr').with.value(80);
    expect(el.shadowRoot).to.have.descendant('.fomr').with.value(0.333);
  });

  it('can accept interactive correct rejection input', async () => {
    const el = await fixture(html`<sdt-equation-mcr2fomr numeric interactive misses="20" correct-rejections="80"></sdt-equation-mcr2fomr>`);
    // Action
    const target = el.shadowRoot.querySelector('.cr').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '60'}); });
    await oneEvent(el, 'sdt-equation-mcr2fomr-change');
    const {detail} = await oneEvent(el, 'sdt-equation-mcr2fomr-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.cr').with.value(60);
    expect(el.cr).to.equal(60);
    expect(detail.cr).to.equal(60);
    expect(el.shadowRoot).to.have.descendant('.m').with.value(20);
    expect(el.shadowRoot).to.have.descendant('.fomr').with.value(0.25);
  });
});
