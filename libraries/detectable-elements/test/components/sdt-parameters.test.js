import {
  expect,
  fixture,
  html,
  oneEvent,
  mouseClickElement,
} from '../../../../scripts/test-utility';

import '../../src/components/sdt-parameters';

describe('sdt-parameters', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<sdt-parameters></sdt-parameters>`);
    expect(el).shadowDom.to.equal(`
      <div class="holder">
      </div>
    `);
  });

  it('has an empty lightdom', async () => {
    const el = await fixture(html`<sdt-parameters></sdt-parameters>`);
    expect(el).lightDom.to.equal('');
  });

  it('can have parameter values', async () => {
    const el = await fixture(html`<sdt-parameters d="0.12" c="0.34" s="0.56"></sdt-parameters>`);
    // Check state
    expect(el.d).to.equal(0.12);
    expect(el.c).to.equal(0.34);
    expect(el.s).to.equal(0.56);
    expect(el.shadowRoot).to.have.descendants('decidables-slider').with.length(3);
  });

  it('can have an interactive sensitivity slider', async () => {
    const el = await fixture(html`<sdt-parameters interactive d="-2"></sdt-parameters>`);
    // Check "before" state
    expect(el.d).to.equal(-2);
    expect(el.shadowRoot).to.have.descendant('decidables-slider');
    // Action
    const target = el.shadowRoot.querySelector('decidables-slider');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'sdt-parameters-d');
    // Check "after" state
    expect(+detail.d).to.be.above(-2);
    expect(el.d).to.be.above(-2);
  });

  it('can have an interactive bias slider', async () => {
    const el = await fixture(html`<sdt-parameters interactive c="2"></sdt-parameters>`);
    // Check "before" state
    expect(el.c).to.equal(2);
    expect(el.shadowRoot).to.have.descendant('decidables-slider');
    // Action
    const target = el.shadowRoot.querySelector('decidables-slider');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'sdt-parameters-c');
    // Check "after" state
    expect(+detail.c).to.be.below(2);
    expect(el.c).to.be.below(2);
  });

  it('can have an interactive variance slider', async () => {
    const el = await fixture(html`<sdt-parameters interactive s="35"></sdt-parameters>`);
    // Check "before" state
    expect(el.s).to.equal(35);
    expect(el.shadowRoot).to.have.descendant('decidables-slider');
    // Action
    const target = el.shadowRoot.querySelector('decidables-slider');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'sdt-parameters-s');
    // Check "after" state
    expect(+detail.s).to.be.below(35);
    expect(el.s).to.be.below(35);
  });
});
