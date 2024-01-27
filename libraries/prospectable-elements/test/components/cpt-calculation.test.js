import {
  expect,
  fixture,
  html,
  oneEvent,
  sendKeys,
} from '../../../../scripts/test-utility';

import '../../src/components/cpt-calculation';

describe('cpt-calculation', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<cpt-calculation></cpt-calculation>`);
    expect(el.shadowRoot).to.have.descendant('.equation');
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<cpt-calculation></cpt-calculation>`);
    expect(el).lightDom.to.equal('');
  });

  it('can display only labels', async () => {
    const el = await fixture(html`<cpt-calculation></cpt-calculation>`);
    expect(el.shadowRoot).to.not.have.descendant('decidables-spinner');
    expect(el.shadowRoot).to.have.descendant('.xw');
    expect(el.shadowRoot).to.have.descendant('.xl');
    expect(el.shadowRoot).to.have.descendant('.pw');
    expect(el.shadowRoot).to.have.descendant('.xs');
    expect(el.shadowRoot).to.have.descendant('.vw');
    expect(el.shadowRoot).to.have.descendant('.vl');
    expect(el.shadowRoot).to.have.descendant('.ww');
    expect(el.shadowRoot).to.have.descendant('.wl');
    expect(el.shadowRoot).to.have.descendant('.vs');
    expect(el.shadowRoot).to.have.descendant('.ug');
    expect(el.shadowRoot).to.have.descendant('.us');
  });

  it('can display numbers', async () => {
    const el = await fixture(html`<cpt-calculation numeric win="25" loss="0" probability="0.75" sure="16" alpha="0.5" lambda="2" gamma="0.5"></cpt-calculation>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner[disabled]').with.length(12);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.xw[disabled]').with.value(25);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.xl[disabled]').with.value(0);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.pw[disabled]').with.value(0.75);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.xs[disabled]').with.value(16);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.vw[disabled]').with.value(5);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.vl[disabled]').with.value(0);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.ww[disabled]').with.value(0.46);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.wl[disabled]').with.value(0.54);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.vs[disabled]').with.value(4);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.ug[disabled]').with.value(2.3);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.us[disabled]').with.value(4);
  });

  it('can be interactive', async () => {
    const el = await fixture(html`<cpt-calculation numeric interactive  win="25" loss="0" probability="0.75" sure="16" alpha="0.5" lambda="2" gamma="0.5"></cpt-calculation>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner[disabled]').with.length(8);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(4);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.xw:not([disabled])').with.value(25);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.xl[disabled]').with.value(0);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.pw:not([disabled])').with.value(0.75);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.xs:not([disabled])').with.value(16);
  });

  it('can accept interactive win input', async () => {
    const el = await fixture(html`<cpt-calculation numeric interactive  win="25" loss="0" probability="0.75" sure="16" alpha="0.5" lambda="2" gamma="0.5"></cpt-calculation>`);
    // Action
    const target = el.shadowRoot.querySelector('.xw').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '9'}); });
    const {detail} = await oneEvent(el, 'cpt-calculation-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.xw').with.value(9);
    expect(el.xw).to.equal(9);
    expect(detail.xw).to.equal(9);
    expect(el.shadowRoot).to.have.descendant('.xl').with.value(0);
    expect(el.shadowRoot).to.have.descendant('.vw').with.value(3);
  });

  it('can accept interactive probability input', async () => {
    const el = await fixture(html`<cpt-calculation numeric interactive  win="25" loss="0" probability="0.75" sure="16" alpha="0.5" lambda="2" gamma="0.5"></cpt-calculation>`);
    // Action
    const target = el.shadowRoot.querySelector('.pw').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '00.5'}); });
    await oneEvent(el, 'cpt-calculation-change');
    await oneEvent(el, 'cpt-calculation-change');
    await oneEvent(el, 'cpt-calculation-change');
    const {detail} = await oneEvent(el, 'cpt-calculation-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.pw').with.value(0.5);
    expect(el.pw).to.equal(0.5);
    expect(detail.pw).to.equal(0.5);
    expect(el.shadowRoot).to.have.descendant('.xw').with.value(25);
    expect(el.shadowRoot).to.have.descendant('.ww').with.value(0.35);
  });

  it('can accept interactive sure input', async () => {
    const el = await fixture(html`<cpt-calculation numeric interactive  win="25" loss="0" probability="0.75" sure="16" alpha="0.5" lambda="2" gamma="0.5"></cpt-calculation>`);
    // Action
    const target = el.shadowRoot.querySelector('.xs').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '9'}); });
    const {detail} = await oneEvent(el, 'cpt-calculation-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.xs').with.value(9);
    expect(el.xs).to.equal(9);
    expect(detail.xs).to.equal(9);
    expect(el.shadowRoot).to.have.descendant('.xl').with.value(0);
    expect(el.shadowRoot).to.have.descendant('.vs').with.value(3);
  });
});
