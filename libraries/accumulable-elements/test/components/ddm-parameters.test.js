import {
  expect,
  fixture,
  html,
  oneEvent,
  mouseClickElement,
} from '../../../../scripts/test-utility';

import '../../src/components/ddm-parameters';

describe('ddm-parameters', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<ddm-parameters></ddm-parameters>`);
    expect(el).shadowDom.to.equal(`
      <div class="holder">
      </div>
    `);
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<ddm-parameters></ddm-parameters>`);
    expect(el).lightDom.to.equal('');
  });

  it('can have parameter values', async () => {
    const el = await fixture(html`<ddm-parameters boundary-separation="0.23" starting-point="0.47" drift-rate="1.43" nondecision-time="171"></ddm-parameters>`);
    // Check state
    expect(el.a).to.equal(0.23);
    expect(el.z).to.equal(0.47);
    expect(el.v).to.equal(1.43);
    expect(el.t0).to.equal(171);
    expect(el.shadowRoot).to.have.descendants('decidables-slider').with.length(4);
  });

  it('can have an interactive boundary separation slider', async () => {
    const el = await fixture(html`<ddm-parameters interactive boundary-separation="0.34"></ddm-parameters>`);
    // Check "before" state
    expect(el.a).to.equal(0.34);
    expect(el.shadowRoot).to.have.descendant('decidables-slider');
    // Action
    const target = el.shadowRoot.querySelector('decidables-slider');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'ddm-parameters-a');
    // Check "after" state
    expect(+detail.a).to.be.above(0.34);
    expect(el.a).to.be.above(0.34);
  });

  it('can have an interactive starting point slider', async () => {
    const el = await fixture(html`<ddm-parameters interactive starting-point="0.13"></ddm-parameters>`);
    // Check "before" state
    expect(el.z).to.equal(0.13);
    expect(el.shadowRoot).to.have.descendant('decidables-slider');
    // Action
    const target = el.shadowRoot.querySelector('decidables-slider');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'ddm-parameters-z');
    // Check "after" state
    expect(+detail.z).to.be.above(0.13);
    expect(el.z).to.be.above(0.13);
  });

  it('can have an interactive drift rate slider', async () => {
    const el = await fixture(html`<ddm-parameters interactive drift-rate="0.87"></ddm-parameters>`);
    // Check "before" state
    expect(el.v).to.equal(0.87);
    expect(el.shadowRoot).to.have.descendant('decidables-slider');
    // Action
    const target = el.shadowRoot.querySelector('decidables-slider');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'ddm-parameters-v');
    // Check "after" state
    expect(+detail.v).to.be.above(0.87);
    expect(el.v).to.be.above(0.87);
  });

  it('can have an interactive nondecision time slider', async () => {
    const el = await fixture(html`<ddm-parameters interactive nondecision-time="77"></ddm-parameters>`);
    // Check "before" state
    expect(el.t0).to.equal(77);
    expect(el.shadowRoot).to.have.descendant('decidables-slider');
    // Action
    const target = el.shadowRoot.querySelector('decidables-slider');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'ddm-parameters-t0');
    // Check "after" state
    expect(+detail.t0).to.be.above(77);
    expect(el.t0).to.be.above(77);
  });
});
