import {expect, fixture, html} from '@open-wc/testing';

import '../src/spinner';

describe('decidables-spinner', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html` <decidables-spinner>Adjust</decidables-spinner> `);

    expect(el).shadowDom.to.equal(`
      <label>
        <slot></slot>
        <input type="number">
      </label>
    `);
  });

  it('has a lightDom', async () => {
    const el = await fixture(html` <decidables-spinner>Adjust</decidables-spinner> `);

    expect(el).lightDom.to.equal(`
      Adjust
    `);
  });

  it('can be disabled', async () => {
    const el = await fixture(html` <decidables-spinner disabled>Adjust</decidables-spinner> `);

    expect(el.shadowRoot).to.have.descendant('input').that.has.attribute('disabled');
  });

  it('can have an upper limit', async () => {
    const el = await fixture(html` <decidables-spinner max="20">Adjust</decidables-spinner> `);

    expect(el.shadowRoot).to.have.descendant('input').that.has.attribute('max', '20');
  });

  it('can have a lower limit', async () => {
    const el = await fixture(html` <decidables-spinner min="10">Adjust</decidables-spinner> `);

    expect(el.shadowRoot).to.have.descendant('input').that.has.attribute('min', '10');
  });

  it('can have a step size', async () => {
    const el = await fixture(html` <decidables-spinner step="2">Adjust</decidables-spinner> `);

    expect(el.shadowRoot).to.have.descendant('input').that.has.attribute('step', '2');
  });

  it('can have an initial value', async () => {
    const el = await fixture(html` <decidables-spinner value="17">Slide</decidables-spinner> `);

    expect(el).to.have.value(17);
    expect(el.shadowRoot).to.have.descendant('input').that.has.value('17');
  });
});
