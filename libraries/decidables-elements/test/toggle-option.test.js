import {expect, fixture, html} from '../../../scripts/test';

import '../src/toggle-option';

describe('decidables-toggle-option', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`
      <decidables-toggle-option name="test" value="possibly">
        Possibly
      </decidables-toggle-option>
    `);
    expect(el).shadowDom.to.equal(`
      <input type="radio" id="toggle-option" name="test" value="possibly">
      <label for="toggle-option">
        <slot></slot>
      </label>
    `);
  });

  it('has a lightDom', async () => {
    const el = await fixture(html`
      <decidables-toggle-option name="test" value="possibly">
        Possibly
      </decidables-toggle-option>
    `);
    expect(el).lightDom.to.equal(`
      Possibly
    `);
  });

  it.skip('can be disabled', async () => {
    const el = await fixture(html`
      <decidables-toggle-option name="test" value="possibly" disabled>
        Possibly
      </decidables-toggle-option>
    `);
    expect(el.shadowRoot).to.have.descendant('input').that.has.attribute('disabled');
  });

  it('can be toggled off', async () => {
    const el = await fixture(html`
      <decidables-toggle-option name="test" value="possibly">
        Possibly
      </decidables-toggle-option>
    `);
    expect(el.shadowRoot).to.have.descendant('input').that.has.property('checked', false);
  });

  it('can be toggled on', async () => {
    const el = await fixture(html`
      <decidables-toggle-option name="test" value="possibly" checked>
        Possibly
      </decidables-toggle-option>
    `);
    expect(el.shadowRoot).to.have.descendant('input').that.has.property('checked', true);
  });
});
