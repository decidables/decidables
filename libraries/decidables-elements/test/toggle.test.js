import {expect, fixture, html} from '@open-wc/testing';

import '../src/toggle';

describe('decidables-toggle', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`
      <decidables-toggle>
        <span slot="label">Choose</span>
        <decidables-toggle-option name="test" value="possibly">
          Possibly
        </decidables-toggle-option>
        <decidables-toggle-option name="test" value="maybe">
          Maybe
        </decidables-toggle-option>
        <decidables-toggle-option name="test" value="perhaps">
          Perhaps
        </decidables-toggle-option>
      </decidables-toggle>
    `);

    expect(el).shadowDom.to.equal(`
      <fieldset>
        <legend><slot name="label"></slot></legend>
        <slot></slot>
      </fieldset>
    `);
  });

  it('has a lightDom', async () => {
    const el = await fixture(html`
      <decidables-toggle>
        <span slot="label">Choose</span>
        <decidables-toggle-option name="test" value="possibly">
          Possibly
        </decidables-toggle-option>
        <decidables-toggle-option name="test" value="maybe">
          Maybe
        </decidables-toggle-option>
        <decidables-toggle-option name="test" value="perhaps">
          Perhaps
        </decidables-toggle-option>
      </decidables-toggle>
    `);

    expect(el).lightDom.to.equal(`
      <span slot="label">Choose</span>
      <decidables-toggle-option name="test" value="possibly">
        Possibly
      </decidables-toggle-option>
      <decidables-toggle-option name="test" value="maybe">
        Maybe
      </decidables-toggle-option>
      <decidables-toggle-option name="test" value="perhaps">
        Perhaps
      </decidables-toggle-option>
    `);
  });

  it('can be disabled', async () => {
    const el = await fixture(html`
      <decidables-toggle disabled>
        <span slot="label">Choose</span>
        <decidables-toggle-option name="test" value="possibly">
          Possibly
        </decidables-toggle-option>
        <decidables-toggle-option name="test" value="maybe">
          Maybe
        </decidables-toggle-option>
        <decidables-toggle-option name="test" value="perhaps">
          Perhaps
        </decidables-toggle-option>
      </decidables-toggle>
    `);

    expect(el.shadowRoot).to.have.descendant('fieldset').that.has.attribute('disabled');
  });

  it('can have an option selected', async () => {
    const el = await fixture(html`
      <decidables-toggle disabled>
        <span slot="label">Choose</span>
        <decidables-toggle-option name="test" value="possibly">
          Possibly
        </decidables-toggle-option>
        <decidables-toggle-option name="test" value="maybe" checked>
          Maybe
        </decidables-toggle-option>
        <decidables-toggle-option name="test" value="perhaps">
          Perhaps
        </decidables-toggle-option>
      </decidables-toggle>
    `);

    expect(el).to.have.descendants('decidables-toggle-option[checked]').with.length(1);
    expect(el).to.have.descendants('decidables-toggle-option:not([checked])').with.length(2);
  });
});
