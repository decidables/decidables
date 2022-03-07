import {expect, fixture, html} from '../../../scripts/test';

import '../src/slider';

describe('decidables-slider', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html` <decidables-slider>Slide</decidables-slider> `);

    expect(el).shadowDom.to.equal(`
      <label for="decidables-1-slider">
        <slot></slot>
      </label>
      <div class="range">
        <input type="range" id="decidables-1-slider">
      </div>
      <decidables-spinner></decidables-spinner>
    `);
  });

  it('has a lightDom', async () => {
    const el = await fixture(html` <decidables-slider>Slide</decidables-slider> `);

    expect(el).lightDom.to.equal(`
      Slide
    `);
  });

  it.skip('can be disabled', async () => {
    const el = await fixture(html` <decidables-slider disabled>Slide</decidables-slider> `);

    expect(el.shadowRoot).to.have.descendant('input').that.has.attribute('disabled');
    expect(el.shadowRoot)
      .to.have.descendant('decidables-spinner').that.has.attribute('disabled');
  });

  it('can have an upper limit', async () => {
    const el = await fixture(html` <decidables-slider max="20">Slide</decidables-slider> `);

    expect(el.shadowRoot).to.have.descendant('input').that.has.attribute('max', '20');
    expect(el.shadowRoot).to.have.descendant('decidables-spinner').that.has.attribute('max', '20');
  });

  it('can have a lower limit', async () => {
    const el = await fixture(html` <decidables-slider min="10">Slide</decidables-slider> `);

    expect(el.shadowRoot).to.have.descendant('input').that.has.attribute('min', '10');
    expect(el.shadowRoot).to.have.descendant('decidables-spinner').that.has.attribute('min', '10');
  });

  it('can have a step size', async () => {
    const el = await fixture(html` <decidables-slider step="2">Slide</decidables-slider> `);

    expect(el.shadowRoot).to.have.descendant('input').that.has.attribute('step', '2');
    expect(el.shadowRoot).to.have.descendant('decidables-spinner').that.has.attribute('step', '2');
  });

  it('can have an initial value', async () => {
    const el = await fixture(html` <decidables-slider value="17">Slide</decidables-slider> `);

    expect(el).to.have.value(17);
    expect(el.shadowRoot).to.have.descendant('input').that.has.value('17');
    expect(el.shadowRoot).to.have.descendant('decidables-spinner').has.value(17);
  });
});
