import {
  expect,
  fixture,
  html,
  oneEvent,
  sendKeys,
} from '../../../../scripts/test';

import '../../src/components/htd-calculation';

describe('htd-calculation', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<htd-calculation></htd-calculation>`);
    expect(el.shadowRoot).to.have.descendant('.equation');
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<htd-calculation></htd-calculation>`);
    expect(el).lightDom.to.equal('');
  });

  it('can display only labels', async () => {
    const el = await fixture(html`<htd-calculation></htd-calculation>`);
    expect(el.shadowRoot).to.not.have.descendant('decidables-spinner');
    expect(el.shadowRoot).to.have.descendant('.as');
    expect(el.shadowRoot).to.have.descendant('.ds');
    expect(el.shadowRoot).to.have.descendant('.al');
    expect(el.shadowRoot).to.have.descendant('.dl');
    expect(el.shadowRoot).to.have.descendant('.k');
    expect(el.shadowRoot).to.have.descendant('.vs');
    expect(el.shadowRoot).to.have.descendant('.vl');
  });

  it('can display numbers', async () => {
    const el = await fixture(html`<htd-calculation numeric amount-ss="25" delay-ss="0" amount-ll="75" delay-ll="18" k="0.5"></htd-calculation>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner[disabled]').with.length(8);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.as[disabled]').with.value(25);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.ds[disabled]').with.value(0);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.al[disabled]').with.value(75);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.dl[disabled]').with.value(18);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.k[disabled]').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.vs[disabled]').with.value(25);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.vl[disabled]').with.value(7.5);
  });

  it('can be interactive', async () => {
    const el = await fixture(html`<htd-calculation numeric interactive amount-ss="25" delay-ss="0" amount-ll="75" delay-ll="18" k="0.5"></htd-calculation>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner[disabled]').with.length(2);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(6);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.as:not([disabled])').with.value(25);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.ds:not([disabled])').with.value(0);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.al:not([disabled])').with.value(75);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.dl:not([disabled])').with.value(18);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.k:not([disabled])').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.vs[disabled]').with.value(25);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.vl[disabled]').with.value(7.5);
  });

  it('can accept interactive amount-ss input', async () => {
    const el = await fixture(html`<htd-calculation numeric interactive amount-ss="25" delay-ss="2" amount-ll="75" delay-ll="18" k="0.5"></htd-calculation>`);
    // Action
    const target = el.shadowRoot.querySelector('.as').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '8'}); });
    const {detail} = await oneEvent(el, 'htd-calculation-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.as').with.value(8);
    expect(el.as).to.equal(8);
    expect(detail.as).to.equal(8);
    expect(el.shadowRoot).to.have.descendant('.vs').with.value(4);
  });

  it('can accept interactive delay-ss input', async () => {
    const el = await fixture(html`<htd-calculation numeric interactive amount-ss="21" delay-ss="2" amount-ll="75" delay-ll="18" k="0.5"></htd-calculation>`);
    // Action
    const target = el.shadowRoot.querySelector('.ds').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '4'}); });
    const {detail} = await oneEvent(el, 'htd-calculation-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.ds').with.value(4);
    expect(el.ds).to.equal(4);
    expect(detail.ds).to.equal(4);
    expect(el.shadowRoot).to.have.descendant('.vs').with.value(7);
  });

  it('can accept interactive amount-ll input', async () => {
    const el = await fixture(html`<htd-calculation numeric interactive amount-ss="25" delay-ss="2" amount-ll="75" delay-ll="19" k="1"></htd-calculation>`);
    // Action
    const target = el.shadowRoot.querySelector('.al').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '80'}); });
    await oneEvent(el, 'htd-calculation-change');
    const {detail} = await oneEvent(el, 'htd-calculation-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.al').with.value(80);
    expect(el.al).to.equal(80);
    expect(detail.al).to.equal(80);
    expect(el.shadowRoot).to.have.descendant('.vl').with.value(4);
  });

  it('can accept interactive delay-ll input', async () => {
    const el = await fixture(html`<htd-calculation numeric interactive amount-ss="21" delay-ss="2" amount-ll="60" delay-ll="23" k="0.5"></htd-calculation>`);
    // Action
    const target = el.shadowRoot.querySelector('.dl').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '18'}); });
    await oneEvent(el, 'htd-calculation-change');
    const {detail} = await oneEvent(el, 'htd-calculation-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.dl').with.value(18);
    expect(el.dl).to.equal(18);
    expect(detail.dl).to.equal(18);
    expect(el.shadowRoot).to.have.descendant('.vl').with.value(6);
  });

  it('can accept interactive k input', async () => {
    const el = await fixture(html`<htd-calculation numeric interactive amount-ss="20" delay-ss="2" amount-ll="60" delay-ll="23" k="0.5"></htd-calculation>`);
    // Action
    const target = el.shadowRoot.querySelector('.k').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '2'}); });
    const {detail} = await oneEvent(el, 'htd-calculation-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.k').with.value(2);
    expect(el.k).to.equal(2);
    expect(detail.k).to.equal(2);
    expect(el.shadowRoot).to.have.descendant('.vs').with.value(4);
  });
});
