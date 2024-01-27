import {expect, fixture, html} from '../../../scripts/test-utility';

import '../src/button';

describe('decidables-button', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<decidables-button>Push</decidables-button>`);
    expect(el).shadowDom.to.equal(`
      <button>
        <slot></slot>
      </button>
    `);
  });

  it('has a lightDom', async () => {
    const el = await fixture(html`<decidables-button>Push</decidables-button>`);
    expect(el).lightDom.to.equal(`
      Push
    `);
  });

  it('can be disabled', async () => {
    const el = await fixture(html`<decidables-button disabled>Push</decidables-button>`);
    expect(el.shadowRoot).to.have.descendant('button').that.has.attribute('disabled');
  });
});
