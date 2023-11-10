import {
  elementUpdated,
  expect,
  fixture,
  html,
  oneEvent,
  mouseClickElement,
} from '../../../../scripts/test';

import '../../src/components/discountable-response';

describe('discountable-response', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<discountable-response></discountable-response>`);
    expect(el).shadowDom.to.equal(`
      <div class="holder">
        <div class="responses">
          <decidables-button name="first" class="keyboard response" disabled>First</decidables-button>
          <decidables-button name="second" class="keyboard response" disabled>Second</decidables-button>
        </div>
      </div>
    `);
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<discountable-response></discountable-response>`);
    expect(el).lightDom.to.equal('');
  });

  it('can display feedback', async () => {
    const el = await fixture(html`<discountable-response feedback></discountable-response>`);
    expect(el.shadowRoot).to.have.descendant('.feedback');
  });

  it('can display the trial count', async () => {
    const el = await fixture(html`<discountable-response trial></discountable-response>`);
    expect(el.shadowRoot).to.have.descendant('.trial');
  });

  it('can record no response', async () => {
    const el = await fixture(html`<discountable-response interactive feedback trial></discountable-response>`);
    el.start(10, 20, 40, 50, 1);
    await elementUpdated(el);
    el.stop();
    await elementUpdated(el);
    expect(el.response).to.equal('nr');
    expect(el.shadowRoot).to.have.descendant('.feedback.nr .response').with.text('NoResponse');
  });

  it('can record a first response', async () => {
    const el = await fixture(html`<discountable-response interactive feedback trial></discountable-response>`);
    el.start(20, 15, 80, 70, 1);
    await elementUpdated(el);
    el.first();
    await elementUpdated(el);
    expect(el.response).to.equal('first');
    expect(el.shadowRoot).to.have.descendant('.feedback.first .response').with.text('First');
  });

  it('can record a second response', async () => {
    const el = await fixture(html`<discountable-response interactive feedback trial></discountable-response>`);
    el.start(35, 22, 65, 54, 1);
    await elementUpdated(el);
    el.second();
    await elementUpdated(el);
    expect(el.response).to.equal('second');
    expect(el.shadowRoot).to.have.descendant('.feedback.second .response').with.text('Second');
  });

  it('can reset', async () => {
    const el = await fixture(html`<discountable-response interactive feedback trial></discountable-response>`);
    el.start(5, 12, 70, 20, 1);
    await elementUpdated(el);
    el.first();
    await elementUpdated(el);
    expect(el.response).to.equal('first');
    expect(el.shadowRoot).to.have.descendant('.feedback.first .response').with.text('First');
    el.reset();
    await elementUpdated(el);
    expect(el.response).to.equal(undefined);
    expect(el.shadowRoot).to.not.have.descendant('.feedback .response');
  });

  it('can accept a "first" button press', async () => {
    const el = await fixture(html`<discountable-response interactive feedback trial></discountable-response>`);
    el.start(20, 30, 60, 80, 1);
    await elementUpdated(el);
    // Action
    const target = el.shadowRoot.querySelector('[name="first"]');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'discountable-response');
    // Check
    expect(detail).to.include({
      trial: 1,
      as: 20,
      ds: 30,
      al: 60,
      dl: 80,
      response: 'first',
    });
    expect(el.response).to.equal('first');
    expect(el.shadowRoot).to.have.descendant('.feedback.first .response').with.text('First');
  });

  it('can accept a "second" button press', async () => {
    const el = await fixture(html`<discountable-response interactive feedback trial></discountable-response>`);
    el.start(11, 22, 33, 44, 1);
    await elementUpdated(el);
    // Action
    const target = el.shadowRoot.querySelector('[name="second"]');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'discountable-response');
    // Check
    expect(detail).to.include({
      trial: 1,
      as: 11,
      ds: 22,
      al: 33,
      dl: 44,
      response: 'second',
    });
    expect(el.response).to.equal('second');
    expect(el.shadowRoot).to.have.descendant('.feedback.second .response').with.text('Second');
  });
});
