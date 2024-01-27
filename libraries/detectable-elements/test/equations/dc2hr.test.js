import {
  expect,
  fixture,
  html,
  oneEvent,
  sendKeys,
} from '../../../../scripts/test-utility';

import '../../src/equations/dc2hr';

describe('sdt-equation-dc2hr', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<sdt-equation-dc2hr></sdt-equation-dc2hr>`);
    expect(el.shadowRoot).to.have.descendant('.equation');
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<sdt-equation-dc2hr></sdt-equation-dc2hr>`);
    expect(el).lightDom.to.equal('');
  });

  it('can display only labels', async () => {
    const el = await fixture(html`<sdt-equation-dc2hr></sdt-equation-dc2hr>`);
    expect(el.shadowRoot).to.not.have.descendant('decidables-spinner');
    expect(el.shadowRoot).to.have.descendant('.d');
    expect(el.shadowRoot).to.have.descendant('.c');
    expect(el.shadowRoot).to.have.descendant('.hr');
  });

  it('can display numbers', async () => {
    const el = await fixture(html`<sdt-equation-dc2hr numeric d="2" c="-1"></sdt-equation-dc2hr>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner[disabled]').with.length(3);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.d[disabled]').with.value(2);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.c[disabled]').with.value(-1);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.hr[disabled]').with.value(0.977);
  });

  it('can display numbers with unequal variance', async () => {
    const el = await fixture(html`<sdt-equation-dc2hr numeric unequal d="2" c="-1" s="0.5"></sdt-equation-dc2hr>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner[disabled]').with.length(6);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.d[disabled]').with.value(2);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.c[disabled]').with.value(-1);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.s[disabled]').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.hr[disabled]').with.value(0.996);
  });

  it('can be interactive', async () => {
    const el = await fixture(html`<sdt-equation-dc2hr numeric interactive d="2" c="-1"></sdt-equation-dc2hr>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner[disabled]').with.length(1);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(2);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.d:not([disabled])').with.value(2);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.c:not([disabled])').with.value(-1);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.hr[disabled]').with.value(0.977);
  });

  it('can accept interactive sensitivity input', async () => {
    const el = await fixture(html`<sdt-equation-dc2hr numeric interactive d="2" c="-1"></sdt-equation-dc2hr>`);
    // Action
    const target = el.shadowRoot.querySelector('.d').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '1'}); });
    const {detail} = await oneEvent(el, 'sdt-equation-dc2hr-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.d').with.value(1);
    expect(el.d).to.equal(1);
    expect(detail.d).to.equal(1);
    expect(el.shadowRoot).to.have.descendant('.c').with.value(-1);
    expect(el.shadowRoot).to.have.descendant('.hr').with.value(0.933);
  });

  it('can accept interactive bias input', async () => {
    const el = await fixture(html`<sdt-equation-dc2hr numeric interactive d="2" c="-1"></sdt-equation-dc2hr>`);
    // Action
    const target = el.shadowRoot.querySelector('.c').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '1'}); });
    const {detail} = await oneEvent(el, 'sdt-equation-dc2hr-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.c').with.value(1);
    expect(el.c).to.equal(1);
    expect(detail.c).to.equal(1);
    expect(el.shadowRoot).to.have.descendant('.d').with.value(2);
    expect(el.shadowRoot).to.have.descendant('.hr').with.value(0.5);
  });

  it('can accept interactive variance input', async () => {
    const el = await fixture(html`<sdt-equation-dc2hr numeric interactive unequal d="2" c="-1" s="0.5"></sdt-equation-dc2hr>`);
    // Action
    const target = el.shadowRoot.querySelector('.s').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '1'}); });
    const {detail} = await oneEvent(el, 'sdt-equation-dc2hr-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.s').with.value(1);
    expect(el.s).to.equal(1);
    expect(detail.s).to.equal(1);
    expect(el.shadowRoot).to.have.descendant('.d').with.value(2);
    expect(el.shadowRoot).to.have.descendant('.c').with.value(-1);
    expect(el.shadowRoot).to.have.descendant('.hr').with.value(0.977);
  });
});
