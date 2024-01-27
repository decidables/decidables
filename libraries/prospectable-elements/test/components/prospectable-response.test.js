import {
  elementUpdated,
  expect,
  fixture,
  html,
  oneEvent,
  mouseClickElement,
} from '../../../../scripts/test-utility';

import '../../src/components/prospectable-response';

describe('prospectable-response', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<prospectable-response feedback="none"></prospectable-response>`);
    expect(el).shadowDom.to.equal(`
      <div class="holder">
        <div class="responses">
          <decidables-button name="gamble" class="keyboard response" disabled>Gamble</decidables-button>
          <decidables-button name="sure" class="keyboard response" disabled>Sure</decidables-button>
        </div>
      </div>
    `);
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<prospectable-response feedback="outcome"></prospectable-response>`);
    expect(el).lightDom.to.equal('');
  });

  it('can display feedback', async () => {
    const el = await fixture(html`<prospectable-response feedback="outcome"></prospectable-response>`);
    expect(el.shadowRoot).to.have.descendant('.feedback');
  });

  it('can display the trial count', async () => {
    const el = await fixture(html`<prospectable-response trial></prospectable-response>`);
    expect(el.shadowRoot).to.have.descendant('.trial');
  });

  it('can record no response', async () => {
    const el = await fixture(html`<prospectable-response interactive feedback="outcome" trial payoff="selection"></prospectable-response>`);
    el.start(0, 20, 0.75, 10, 20, 10, 'gamble', 1);
    await elementUpdated(el);
    el.stop();
    await elementUpdated(el);
    expect(el.outcome).to.equal('nr');
  });

  it('can record a better winning gamble', async () => {
    const el = await fixture(html`<prospectable-response interactive feedback="outcome" trial payoff="both"></prospectable-response>`);
    el.start(0, 20, 0.75, 10, 20, 10, 'gamble', 1);
    await elementUpdated(el);
    el.gamble();
    await elementUpdated(el);
    expect(el.response).to.equal('gamble');
    expect(el.outcome).to.equal('better');
    expect(el.shadowRoot).to.have.descendant('.feedback.gamble .outcome').with.text('Better');
    expect(el.shadowRoot).to.have.descendant('.feedback.gamble .payoff').with.text('Win: $20');
    expect(el.shadowRoot).to.have.descendant('.feedback.sure .payoff').with.text('Miss: $10');
  });

  it('can record a worse winning gamble', async () => {
    const el = await fixture(html`<prospectable-response interactive feedback="outcome" trial payoff="both"></prospectable-response>`);
    el.start(0, 20, 0.25, 10, 20, 10, 'sure', 1);
    await elementUpdated(el);
    el.gamble();
    await elementUpdated(el);
    expect(el.response).to.equal('gamble');
    expect(el.outcome).to.equal('worse');
    expect(el.shadowRoot).to.have.descendant('.feedback.gamble .outcome').with.text('Worse');
    expect(el.shadowRoot).to.have.descendant('.feedback.gamble .payoff').with.text('Win: $20');
    expect(el.shadowRoot).to.have.descendant('.feedback.sure .payoff').with.text('Miss: $10');
  });

  it('can record an even winning gamble', async () => {
    const el = await fixture(html`<prospectable-response interactive feedback="outcome" trial payoff="both"></prospectable-response>`);
    el.start(0, 20, 0.5, 10, 20, 10, 'even', 1);
    await elementUpdated(el);
    el.gamble();
    await elementUpdated(el);
    expect(el.response).to.equal('gamble');
    expect(el.outcome).to.equal('even');
    expect(el.shadowRoot).to.have.descendant('.feedback.gamble .outcome').with.text('Even');
    expect(el.shadowRoot).to.have.descendant('.feedback.gamble .payoff').with.text('Win: $20');
    expect(el.shadowRoot).to.have.descendant('.feedback.sure .payoff').with.text('Miss: $10');
  });

  it('can record a better losing gamble', async () => {
    const el = await fixture(html`<prospectable-response interactive feedback="outcome" trial payoff="both"></prospectable-response>`);
    el.start(0, 20, 0.75, 10, 0, 10, 'gamble', 1);
    await elementUpdated(el);
    el.gamble();
    await elementUpdated(el);
    expect(el.response).to.equal('gamble');
    expect(el.outcome).to.equal('better');
    expect(el.shadowRoot).to.have.descendant('.feedback.gamble .outcome').with.text('Better');
    expect(el.shadowRoot).to.have.descendant('.feedback.gamble .payoff').with.text('Win: $0');
    expect(el.shadowRoot).to.have.descendant('.feedback.sure .payoff').with.text('Miss: $10');
  });

  it('can record a worse losing gamble', async () => {
    const el = await fixture(html`<prospectable-response interactive feedback="outcome" trial payoff="both"></prospectable-response>`);
    el.start(0, 20, 0.25, 10, 0, 10, 'sure', 1);
    await elementUpdated(el);
    el.gamble();
    await elementUpdated(el);
    expect(el.response).to.equal('gamble');
    expect(el.outcome).to.equal('worse');
    expect(el.shadowRoot).to.have.descendant('.feedback.gamble .outcome').with.text('Worse');
    expect(el.shadowRoot).to.have.descendant('.feedback.gamble .payoff').with.text('Win: $0');
    expect(el.shadowRoot).to.have.descendant('.feedback.sure .payoff').with.text('Miss: $10');
  });

  it('can record an even losing gamble', async () => {
    const el = await fixture(html`<prospectable-response interactive feedback="outcome" trial payoff="both"></prospectable-response>`);
    el.start(0, 20, 0.5, 10, 0, 10, 'even', 1);
    await elementUpdated(el);
    el.gamble();
    await elementUpdated(el);
    expect(el.response).to.equal('gamble');
    expect(el.outcome).to.equal('even');
    expect(el.shadowRoot).to.have.descendant('.feedback.gamble .outcome').with.text('Even');
    expect(el.shadowRoot).to.have.descendant('.feedback.gamble .payoff').with.text('Win: $0');
    expect(el.shadowRoot).to.have.descendant('.feedback.sure .payoff').with.text('Miss: $10');
  });

  it('can record a better sure', async () => {
    const el = await fixture(html`<prospectable-response interactive feedback="outcome" trial payoff="both"></prospectable-response>`);
    el.start(0, 20, 0.25, 10, 20, 10, 'sure', 1);
    await elementUpdated(el);
    el.sure();
    await elementUpdated(el);
    expect(el.response).to.equal('sure');
    expect(el.outcome).to.equal('better');
    expect(el.shadowRoot).to.have.descendant('.feedback.sure .outcome').with.text('Better');
    expect(el.shadowRoot).to.have.descendant('.feedback.sure .payoff').with.text('Win: $10');
    expect(el.shadowRoot).to.have.descendant('.feedback.gamble .payoff').with.text('Miss: $20');
  });

  it('can record a worse sure', async () => {
    const el = await fixture(html`<prospectable-response interactive feedback="outcome" trial payoff="both"></prospectable-response>`);
    el.start(0, 20, 0.75, 10, 0, 10, 'gamble', 1);
    await elementUpdated(el);
    el.sure();
    await elementUpdated(el);
    expect(el.response).to.equal('sure');
    expect(el.outcome).to.equal('worse');
    expect(el.shadowRoot).to.have.descendant('.feedback.sure .outcome').with.text('Worse');
    expect(el.shadowRoot).to.have.descendant('.feedback.sure .payoff').with.text('Win: $10');
    expect(el.shadowRoot).to.have.descendant('.feedback.gamble .payoff').with.text('Miss: $0');
  });

  it('can record an even sure', async () => {
    const el = await fixture(html`<prospectable-response interactive feedback="outcome" trial payoff="both"></prospectable-response>`);
    el.start(0, 20, 0.5, 10, 20, 10, 'even', 1);
    await elementUpdated(el);
    el.sure();
    await elementUpdated(el);
    expect(el.response).to.equal('sure');
    expect(el.outcome).to.equal('even');
    expect(el.shadowRoot).to.have.descendant('.feedback.sure .outcome').with.text('Even');
    expect(el.shadowRoot).to.have.descendant('.feedback.sure .payoff').with.text('Win: $10');
    expect(el.shadowRoot).to.have.descendant('.feedback.gamble .payoff').with.text('Miss: $20');
  });

  it('can reset', async () => {
    const el = await fixture(html`<prospectable-response interactive feedback="outcome" trial payoff="selection"></prospectable-response>`);
    el.start(0, 20, 0.75, 10, 0, 10, 'gamble', 1);
    await elementUpdated(el);
    el.gamble();
    await elementUpdated(el);
    expect(el.response).to.equal('gamble');
    expect(el.outcome).to.equal('better');
    expect(el.shadowRoot).to.have.descendant('.feedback.gamble .outcome').with.text('Better');
    expect(el.shadowRoot).to.have.descendant('.feedback.gamble .payoff').with.text('Win: $0');
    el.reset();
    await elementUpdated(el);
    expect(el.response).to.equal(undefined);
    expect(el.outcome).to.equal(undefined);
    expect(el.shadowRoot).to.not.have.descendant('.outcome');
    expect(el.shadowRoot).to.not.have.descendant('.payoff');
  });

  it('can accept a "gamble" button press', async () => {
    const el = await fixture(html`<prospectable-response interactive feedback="outcome" trial payoff="selection"></prospectable-response>`);
    el.start(0, 20, 0.75, 10, 0, 10, 'gamble', 1);
    await elementUpdated(el);
    // Action
    const target = el.shadowRoot.querySelector('[name="gamble"]');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'prospectable-response');
    // Check
    expect(detail).to.include({
      trial: 1,
      better: 'gamble',
      gamblePayoff: 0,
      surePayoff: 10,
      xl: 0,
      xw: 20,
      pw: 0.75,
      xs: 10,
      response: 'gamble',
      outcome: 'better',
      payoff: 0,
    });
    expect(el.response).to.equal('gamble');
    expect(el.outcome).to.equal('better');
    expect(el.shadowRoot).to.have.descendant('.feedback.gamble .outcome').with.text('Better');
    expect(el.shadowRoot).to.have.descendant('.feedback.gamble .payoff').with.text('Win: $0');
  });

  it('can accept a "sure" button press', async () => {
    const el = await fixture(html`<prospectable-response interactive feedback="outcome" trial payoff="selection"></prospectable-response>`);
    el.start(0, 20, 0.75, 10, 0, 10, 'gamble', 1);
    await elementUpdated(el);
    // Action
    const target = el.shadowRoot.querySelector('[name="sure"]');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'prospectable-response');
    // Check
    expect(detail).to.include({
      trial: 1,
      better: 'gamble',
      gamblePayoff: 0,
      surePayoff: 10,
      xl: 0,
      xw: 20,
      pw: 0.75,
      xs: 10,
      response: 'sure',
      outcome: 'worse',
      payoff: 10,
    });
    expect(el.response).to.equal('sure');
    expect(el.outcome).to.equal('worse');
    expect(el.shadowRoot).to.have.descendant('.feedback.sure .outcome').with.text('Worse');
    expect(el.shadowRoot).to.have.descendant('.feedback.sure .payoff').with.text('Win: $10');
  });
});
