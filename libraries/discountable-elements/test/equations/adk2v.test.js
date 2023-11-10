import {
  expect,
  fixture,
  html,
  oneEvent,
  sendKeys,
} from '../../../../scripts/test';

import '../../src/equations/adk2v';

describe('htd-equation-adk2v', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<htd-equation-adk2v></htd-equation-adk2v>`);
    expect(el.shadowRoot).to.have.descendant('.equation');
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<htd-equation-adk2v></htd-equation-adk2v>`);
    expect(el).lightDom.to.equal('');
  });

  it('can display only labels', async () => {
    const el = await fixture(html`<htd-equation-adk2v></htd-equation-adk2v>`);
    expect(el.shadowRoot).to.not.have.descendant('decidables-spinner');
    expect(el.shadowRoot).to.have.descendant('.a');
    expect(el.shadowRoot).to.have.descendant('.d');
    expect(el.shadowRoot).to.have.descendant('.k');
    expect(el.shadowRoot).to.have.descendant('.v');
  });

  it('can display numbers', async () => {
    const el = await fixture(html`<htd-equation-adk2v numeric amount="20" delay="8" k="0.5"></htd-equation-adk2v>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner[disabled]').with.length(4);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.a[disabled]').with.value(20);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.d[disabled]').with.value(8);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.k[disabled]').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.v[disabled]').with.value(4);
  });

  it('can be interactive', async () => {
    const el = await fixture(html`<htd-equation-adk2v numeric interactive amount="40" delay="76" k="0.25"></htd-equation-adk2v>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner[disabled]').with.length(1);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(3);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.a:not([disabled])').with.value(40);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.d:not([disabled])').with.value(76);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.k:not([disabled])').with.value(0.25);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.v[disabled]').with.value(2);
  });

  it('can accept interactive amount input', async () => {
    const el = await fixture(html`<htd-equation-adk2v numeric interactive amount="10" delay="9" k="1"></htd-equation-adk2v>`);
    // Action
    const target = el.shadowRoot.querySelector('.a').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '8'}); });
    const {detail} = await oneEvent(el, 'htd-equation-adk2v-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.a').with.value(8);
    expect(el.a).to.equal(8);
    expect(detail.a).to.equal(8);
    expect(el.shadowRoot).to.have.descendant('.d').with.value(9);
    expect(el.shadowRoot).to.have.descendant('.k').with.value(1);
    expect(el.shadowRoot).to.have.descendant('.v').with.value(0.8);
  });

  it('can accept interactive delay input', async () => {
    const el = await fixture(html`<htd-equation-adk2v numeric interactive amount="65" delay="30" k="1.5"></htd-equation-adk2v>`);
    // Action
    const target = el.shadowRoot.querySelector('.d').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '8'}); });
    const {detail} = await oneEvent(el, 'htd-equation-adk2v-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.d').with.value(8);
    expect(el.d).to.equal(8);
    expect(detail.d).to.equal(8);
    expect(el.shadowRoot).to.have.descendant('.a').with.value(65);
    expect(el.shadowRoot).to.have.descendant('.k').with.value(1.5);
    expect(el.shadowRoot).to.have.descendant('.v').with.value(5);
  });

  it('can accept interactive k input', async () => {
    const el = await fixture(html`<htd-equation-adk2v numeric interactive amount="99" delay="49" k="0.8"></htd-equation-adk2v>`);
    // Action
    const target = el.shadowRoot.querySelector('.k').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '2'}); });
    const {detail} = await oneEvent(el, 'htd-equation-adk2v-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.k').with.value(2);
    expect(el.k).to.equal(2);
    expect(detail.k).to.equal(2);
    expect(el.shadowRoot).to.have.descendant('.a').with.value(99);
    expect(el.shadowRoot).to.have.descendant('.d').with.value(49);
    expect(el.shadowRoot).to.have.descendant('.v').with.value(1);
  });
});
