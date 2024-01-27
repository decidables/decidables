import {
  expect,
  fixture,
  html,
  oneEvent,
  sendKeys,
} from '../../../../scripts/test-utility';

import '../../src/equations/pg2w';

describe('cpt-equation-pg2w', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<cpt-equation-pg2w></cpt-equation-pg2w>`);
    expect(el.shadowRoot).to.have.descendant('.equation');
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<cpt-equation-pg2w></cpt-equation-pg2w>`);
    expect(el).lightDom.to.equal('');
  });

  it('can display only labels', async () => {
    const el = await fixture(html`<cpt-equation-pg2w></cpt-equation-pg2w>`);
    expect(el.shadowRoot).to.not.have.descendant('decidables-spinner');
    expect(el.shadowRoot).to.have.descendant('.p');
    expect(el.shadowRoot).to.have.descendant('.g');
    expect(el.shadowRoot).to.have.descendant('.w');
  });

  it('can display numbers', async () => {
    const el = await fixture(html`<cpt-equation-pg2w numeric probability="0.5" gamma="0.8"></cpt-equation-pg2w>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner[disabled]').with.length(8);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.p[disabled]').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.g[disabled]').with.value(0.8);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.w[disabled]').with.value(0.48);
  });

  it('can be interactive', async () => {
    const el = await fixture(html`<cpt-equation-pg2w numeric interactive probability="0.75" gamma="2"></cpt-equation-pg2w>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner[disabled]').with.length(1);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(7);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.p:not([disabled])').with.value(0.75);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.g:not([disabled])').with.value(2);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.w[disabled]').with.value(0.71);
  });

  it('can accept interactive probability input', async () => {
    const el = await fixture(html`<cpt-equation-pg2w numeric interactive probability="0.75" gamma="2"></cpt-equation-pg2w>`);
    // Action
    const target = el.shadowRoot.querySelector('.p').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '1'}); });
    const {detail} = await oneEvent(el, 'cpt-equation-pg2w-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.p').with.value(1);
    expect(el.p).to.equal(1);
    expect(detail.p).to.equal(1);
    expect(el.shadowRoot).to.have.descendant('.g').with.value(2);
    expect(el.shadowRoot).to.have.descendant('.w').with.value(1);
  });

  it('can accept interactive gamma input', async () => {
    const el = await fixture(html`<cpt-equation-pg2w numeric interactive probability="0.75" gamma="2"></cpt-equation-pg2w>`);
    // Action
    const target = el.shadowRoot.querySelector('.g').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '4'}); });
    const {detail} = await oneEvent(el, 'cpt-equation-pg2w-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.g').with.value(4);
    expect(el.g).to.equal(4);
    expect(detail.g).to.equal(4);
    expect(el.shadowRoot).to.have.descendant('.p').with.value(0.75);
    expect(el.shadowRoot).to.have.descendant('.w').with.value(0.42);
  });
});
