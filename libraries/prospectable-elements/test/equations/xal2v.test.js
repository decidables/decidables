import {
  expect,
  fixture,
  html,
  oneEvent,
  sendKeys,
} from '../../../../scripts/test';

import '../../src/equations/xal2v';

describe('cpt-equation-xal2v', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<cpt-equation-xal2v></cpt-equation-xal2v>`);
    expect(el.shadowRoot).to.have.descendant('.equation');
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<cpt-equation-xal2v></cpt-equation-xal2v>`);
    expect(el).lightDom.to.equal('');
  });

  it('can display only labels', async () => {
    const el = await fixture(html`<cpt-equation-xal2v></cpt-equation-xal2v>`);
    expect(el.shadowRoot).to.not.have.descendant('decidables-spinner');
    expect(el.shadowRoot).to.have.descendant('.x');
    expect(el.shadowRoot).to.have.descendant('.a');
    expect(el.shadowRoot).to.have.descendant('.l');
    expect(el.shadowRoot).to.have.descendant('.v');
  });

  it('can display numbers', async () => {
    const el = await fixture(html`<cpt-equation-xal2v numeric value="16" alpha="0.5" lambda="2"></cpt-equation-xal2v>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner[disabled]').with.length(8);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.x[disabled]').with.value(16);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.a[disabled]').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.l[disabled]').with.value(2);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.v[disabled]').with.value(4);
  });

  it('can be interactive', async () => {
    const el = await fixture(html`<cpt-equation-xal2v numeric interactive value="20" alpha="0.8" lambda="1.5"></cpt-equation-xal2v>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner[disabled]').with.length(1);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(7);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.x:not([disabled])').with.value(20);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.a:not([disabled])').with.value(0.8);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.l:not([disabled])').with.value(1.5);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.v[disabled]').with.value(10.986);
  });

  it('can accept interactive value input', async () => {
    const el = await fixture(html`<cpt-equation-xal2v numeric interactive value="20" alpha="0.5" lambda="1.5"></cpt-equation-xal2v>`);
    // Action
    const target = el.shadowRoot.querySelector('.x').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '9'}); });
    const {detail} = await oneEvent(el, 'cpt-equation-xal2v-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.x').with.value(9);
    expect(el.x).to.equal(9);
    expect(detail.x).to.equal(9);
    expect(el.shadowRoot).to.have.descendant('.a').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('.l').with.value(1.5);
    expect(el.shadowRoot).to.have.descendant('.v').with.value(3);
  });

  it('can accept interactive alpha input', async () => {
    const el = await fixture(html`<cpt-equation-xal2v numeric interactive value="20" alpha="0.5" lambda="1.5"></cpt-equation-xal2v>`);
    // Action
    const target = el.shadowRoot.querySelector('.a').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '1'}); });
    const {detail} = await oneEvent(el, 'cpt-equation-xal2v-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.a').with.value(1);
    expect(el.a).to.equal(1);
    expect(detail.a).to.equal(1);
    expect(el.shadowRoot).to.have.descendant('.x').with.value(20);
    expect(el.shadowRoot).to.have.descendant('.l').with.value(1.5);
    expect(el.shadowRoot).to.have.descendant('.v').with.value(20);
  });

  it('can accept interactive lambda input', async () => {
    const el = await fixture(html`<cpt-equation-xal2v numeric interactive value="-25" alpha="0.5" lambda="1.5"></cpt-equation-xal2v>`);
    // Action
    const target = el.shadowRoot.querySelector('.l').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '2'}); });
    const {detail} = await oneEvent(el, 'cpt-equation-xal2v-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.l').with.value(2);
    expect(el.l).to.equal(2);
    expect(detail.l).to.equal(2);
    expect(el.shadowRoot).to.have.descendant('.x').with.value(-25);
    expect(el.shadowRoot).to.have.descendant('.a').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('.v').with.value(-10);
  });
});
