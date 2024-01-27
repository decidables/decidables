import {
  expect,
  fixture,
  html,
  oneEvent,
  sendKeys,
} from '../../../../scripts/test-utility';

import '../../src/equations/vw2u';

describe('cpt-equation-vw2u', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<cpt-equation-vw2u></cpt-equation-vw2u>`);
    expect(el.shadowRoot).to.have.descendant('.equation');
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<cpt-equation-vw2u></cpt-equation-vw2u>`);
    expect(el).lightDom.to.equal('');
  });

  it('can display only labels', async () => {
    const el = await fixture(html`<cpt-equation-vw2u></cpt-equation-vw2u>`);
    expect(el.shadowRoot).to.not.have.descendant('decidables-spinner');
    expect(el.shadowRoot).to.have.descendants('.v').with.length(3);
    expect(el.shadowRoot).to.have.descendants('.w').with.length(3);
    expect(el.shadowRoot).to.have.descendants('.u').with.length(1);
  });

  it('can display numbers', async () => {
    const el = await fixture(html`<cpt-equation-vw2u numeric value="0 20" weight="0.25 0.75" outcomes="2"></cpt-equation-vw2u>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner[disabled]').with.length(6);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.v[disabled]').with.value(0);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.w[disabled]').with.value(0.25);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.u[disabled]').with.value(15);
  });

  it('can be interactive', async () => {
    const el = await fixture(html`<cpt-equation-vw2u numeric interactive value="-10 10" weight="0.1 0.9" outcomes="2"></cpt-equation-vw2u>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner[disabled]').with.length(1);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(5);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.v:not([disabled])').with.value(-10);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.w:not([disabled])').with.value(0.1);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.u[disabled]').with.value(8);
  });

  it('can accept interactive outcomes input', async () => {
    const el = await fixture(html`<cpt-equation-vw2u numeric interactive value="-10 10" weight="0.1 0.9" outcomes="2"></cpt-equation-vw2u>`);
    // Action
    const target = el.shadowRoot.querySelector('.n').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '3'}); });
    const {detail: detailUp} = await oneEvent(el, 'cpt-equation-vw2u-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.n').with.value(3);
    expect(el.n).to.equal(3);
    expect(detailUp.n).to.equal(3);
    expect(detailUp.v).to.deep.equal([-10, 10, 0]);
    expect(detailUp.w).to.deep.equal([0.1, 0.9, 0]);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner.v:not([disabled])').with.length(3);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner.w:not([disabled])').with.length(3);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.u[disabled]').with.value(8);
    // Action
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '1'}); });
    const {detail: detailDown} = await oneEvent(el, 'cpt-equation-vw2u-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.n').with.value(1);
    expect(el.n).to.equal(1);
    expect(detailDown.n).to.equal(1);
    expect(detailDown.v).to.deep.equal([-10]);
    expect(detailDown.w).to.deep.equal([0.1]);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner.v:not([disabled])').with.length(1);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner.w:not([disabled])').with.length(1);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.u[disabled]').with.value(-1);
  });

  it('can accept interactive value input', async () => {
    const el = await fixture(html`<cpt-equation-vw2u numeric interactive value="-10 10" weight="0.1 0.9" outcomes="2"></cpt-equation-vw2u>`);
    // Action
    const target = el.shadowRoot.querySelector('decidables-spinner.v:not([disabled])').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '0'}); });
    const {detail} = await oneEvent(el, 'cpt-equation-vw2u-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.v:not([disabled])').with.value(0);
    expect(el.v).to.deep.equal([0, 10]);
    expect(detail.v).to.deep.equal([0, 10]);
    expect(detail.n).to.equal(2);
    expect(detail.w).to.deep.equal([0.1, 0.9]);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.n:not([disabled])').with.value(2);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner.w:not([disabled])').with.length(2);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.u[disabled]').with.value(9);
  });

  it('can accept interactive weight input', async () => {
    const el = await fixture(html`<cpt-equation-vw2u numeric interactive value="-10 10" weight="0.1 0.9" outcomes="2"></cpt-equation-vw2u>`);
    // Action
    const target = el.shadowRoot.querySelector('decidables-spinner.w:not([disabled])').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '0'}); });
    const {detail} = await oneEvent(el, 'cpt-equation-vw2u-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.w:not([disabled])').with.value(0);
    expect(el.w).to.deep.equal([0, 0.9]);
    expect(detail.w).to.deep.equal([0, 0.9]);
    expect(detail.n).to.equal(2);
    expect(detail.v).to.deep.equal([-10, 10]);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.n:not([disabled])').with.value(2);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner.v:not([disabled])').with.length(2);
    expect(el.shadowRoot).to.have.descendant('decidables-spinner.u[disabled]').with.value(9);
  });
});
