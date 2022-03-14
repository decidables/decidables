import {
  aTimeout,
  expect,
  fixture,
  html,
  oneEvent,
  sendKeys,
} from '../../../../scripts/test';

import '../../src/equations/facr2far';

describe('sdt-equation-facr2far', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<sdt-equation-facr2far></sdt-equation-facr2far>`);
    // Give the component a chance to render!
    await aTimeout();
    expect(el.shadowRoot).to.have.descendant('.equation');
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<sdt-equation-facr2far></sdt-equation-facr2far>`);
    await aTimeout();
    expect(el).lightDom.to.equal('');
  });

  it('can display only labels', async () => {
    const el = await fixture(html`<sdt-equation-facr2far></sdt-equation-facr2far>`);
    await aTimeout();
    expect(el.shadowRoot).to.not.have.descendant('decidables-spinner');
    expect(el.shadowRoot).to.have.descendant('.fa');
    expect(el.shadowRoot).to.have.descendant('.cr');
    expect(el.shadowRoot).to.have.descendant('.far');
  });

  it('can display numbers', async () => {
    const el = await fixture(html`<sdt-equation-facr2far numeric false-alarms="20" correct-rejections="80"></sdt-equation-facr2far>`);
    await aTimeout();
    expect(el.shadowRoot).to.have.descendants('decidables-spinner[disabled]').with.length(4);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.fa[disabled]').with.value(20);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.cr[disabled]').with.value(80);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.far[disabled]').with.value(0.2);
  });

  it('can be interactive', async () => {
    const el = await fixture(html`<sdt-equation-facr2far numeric interactive false-alarms="20" correct-rejections="80"></sdt-equation-facr2far>`);
    await aTimeout();
    expect(el.shadowRoot).to.have.descendants('decidables-spinner[disabled]').with.length(1);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(3);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.fa:not([disabled])').with.value(20);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.cr:not([disabled])').with.value(80);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.far[disabled]').with.value(0.2);
  });

  it('can accept interactive false alarm input', async () => {
    const el = await fixture(html`<sdt-equation-facr2far numeric interactive false-alarms="20" correct-rejections="80"></sdt-equation-facr2far>`);
    await aTimeout();
    // Action
    const target = el.shadowRoot.querySelector('.fa').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '40'}); });
    await oneEvent(el, 'sdt-equation-facr2far-change');
    const {detail} = await oneEvent(el, 'sdt-equation-facr2far-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.fa').with.value(40);
    expect(el.fa).to.equal(40);
    expect(detail.fa).to.equal(40);
    expect(el.shadowRoot).to.have.descendant('.cr').with.value(80);
    expect(el.shadowRoot).to.have.descendant('.far').with.value(0.333);
  });

  it('can accept interactive correct rejection input', async () => {
    const el = await fixture(html`<sdt-equation-facr2far numeric interactive false-alarms="20" correct-rejections="80"></sdt-equation-facr2far>`);
    await aTimeout();
    // Action
    const target = el.shadowRoot.querySelector('.cr').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '60'}); });
    await oneEvent(el, 'sdt-equation-facr2far-change');
    const {detail} = await oneEvent(el, 'sdt-equation-facr2far-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.cr').with.value(60);
    expect(el.cr).to.equal(60);
    expect(detail.cr).to.equal(60);
    expect(el.shadowRoot).to.have.descendant('.fa').with.value(20);
    expect(el.shadowRoot).to.have.descendant('.far').with.value(0.25);
  });
});
