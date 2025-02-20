import {
  expect,
  fixture,
  html,
  oneEvent,
  mouseClickElement,
} from '../../../../scripts/test-utility';

import '../../src/components/htd-parameters';

describe('htd-parameters', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<htd-parameters></htd-parameters>`);
    expect(el).shadowDom.to.equal(`
      <div class="holder">
      </div>
    `);
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<htd-parameters></htd-parameters>`);
    expect(el).lightDom.to.equal('');
  });

  it('can have parameter values', async () => {
    const el = await fixture(html`<htd-parameters k="0.23"></htd-parameters>`);
    // Check state
    expect(el.k).to.equal(0.23);
    expect(el.shadowRoot).to.have.descendants('decidables-slider').with.length(1);
  });

  it('can have an interactive discounting factor slider', async () => {
    const el = await fixture(html`<htd-parameters interactive k="0.34"></htd-parameters>`);
    // Check "before" state
    expect(el.k).to.equal(0.34);
    expect(el.shadowRoot).to.have.descendant('decidables-slider');
    // Action
    const target = el.shadowRoot.querySelector('decidables-slider');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'htd-parameters-k');
    // Check "after" state
    expect(+detail.k).to.be.above(0.34);
    expect(el.k).to.be.above(0.34);
  });
});
