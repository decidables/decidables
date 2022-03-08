import {expect, fixture, html} from '../../../scripts/test';

import '../src/switch';

describe('decidables-switch', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`
      <decidables-switch>
        <span>On</span>
        <span slot="off-label">Off</span>
      </decidables-switch>
    `);
    expect(el).shadowDom.to.equal(`
      <input type="checkbox" id="decidables-1-checkbox">
      <label for="decidables-1-checkbox">
        <slot name="off-label"></slot>
      </label>
      <label for="decidables-1-checkbox">
        <slot></slot>
      </label>
    `);
  });

  it('has a lightDom', async () => {
    const el = await fixture(html`
      <decidables-switch>
        <span>On</span>
        <span slot="off-label">Off</span>
      </decidables-switch>
    `);
    expect(el).lightDom.to.equal(`
      <span>On</span>
      <span slot="off-label">Off</span>
    `);
  });

  it('can be disabled', async () => {
    const el = await fixture(html`
      <decidables-switch disabled>
        <span>On</span>
        <span slot="off-label">Off</span>
      </decidables-switch>
    `);
    expect(el.shadowRoot).to.have.descendant('input').that.has.attribute('disabled');
  });

  it('can be switched off', async () => {
    const el = await fixture(html`
      <decidables-switch>
        <span>On</span>
        <span slot="off-label">Off</span>
      </decidables-switch>
    `);
    expect(el.shadowRoot).to.have.descendant('input').that.does.not.have.attribute('checked');
  });

  it('can be switched on', async () => {
    const el = await fixture(html`
      <decidables-switch checked>
        <span>On</span>
        <span slot="off-label">Off</span>
      </decidables-switch>
    `);
    expect(el.shadowRoot).to.have.descendant('input').that.has.attribute('checked');
  });
});
