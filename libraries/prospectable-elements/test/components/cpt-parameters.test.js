import {
  expect,
  fixture,
  html,
  oneEvent,
  mouseClickElement,
} from '../../../../scripts/test-utility';

import '../../src/components/cpt-parameters';

describe('cpt-parameters', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<cpt-parameters></cpt-parameters>`);
    expect(el).shadowDom.to.equal(`
      <div class="holder">
      </div>
    `);
  });

  it('has an empty lightdom', async () => {
    const el = await fixture(html`<cpt-parameters></cpt-parameters>`);
    expect(el).lightDom.to.equal('');
  });

  it('can have parameter values', async () => {
    const el = await fixture(html`<cpt-parameters alpha="0.23" lambda="1.45" gamma="0.67"></cpt-parameters>`);
    // Check state
    expect(el.a).to.equal(0.23);
    expect(el.l).to.equal(1.45);
    expect(el.g).to.equal(0.67);
    expect(el.shadowRoot).to.have.descendants('decidables-slider').with.length(3);
  });

  it('can have an interactive alpha slider', async () => {
    const el = await fixture(html`<cpt-parameters interactive alpha="0.89"></cpt-parameters>`);
    // Check "before" state
    expect(el.a).to.equal(0.89);
    expect(el.shadowRoot).to.have.descendant('decidables-slider');
    // Action
    const target = el.shadowRoot.querySelector('decidables-slider');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'cpt-parameters-a');
    // Check "after" state
    expect(+detail.a).to.be.below(0.89);
    expect(el.a).to.be.below(0.89);
  });

  it('can have an interactive lambda slider', async () => {
    const el = await fixture(html`<cpt-parameters interactive lambda="0.34"></cpt-parameters>`);
    // Check "before" state
    expect(el.l).to.equal(0.34);
    expect(el.shadowRoot).to.have.descendant('decidables-slider');
    // Action
    const target = el.shadowRoot.querySelector('decidables-slider');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'cpt-parameters-l');
    // Check "after" state
    expect(+detail.l).to.be.above(0.34);
    expect(el.l).to.be.above(0.34);
  });

  it('can have an interactive gamma slider', async () => {
    const el = await fixture(html`<cpt-parameters interactive gamma="0.12"></cpt-parameters>`);
    // Check "before" state
    expect(el.g).to.equal(0.12);
    expect(el.shadowRoot).to.have.descendant('decidables-slider');
    // Action
    const target = el.shadowRoot.querySelector('decidables-slider');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'cpt-parameters-g');
    // Check "after" state
    expect(+detail.g).to.be.above(0.12);
    expect(el.g).to.be.above(0.12);
  });
});
