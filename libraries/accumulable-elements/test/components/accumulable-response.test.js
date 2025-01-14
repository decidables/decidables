import {
  elementUpdated,
  expect,
  fixture,
  html,
  mouseClickElement,
  oneEvent,
  sendKeys,
} from '../../../../scripts/test-utility';

import '../../src/components/accumulable-response';

describe('accumulable-response', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<accumulable-response></accumulable-response>`);
    expect(el).shadowDom.to.equal(`
      <div class="holder">
        <div class="responses">
          <decidables-button name="left" class="response keyboard" disabled>Left</decidables-button>
          <decidables-button name="right" class="response keyboard" disabled>Right</decidables-button>
        </div>
      </div>
    `);
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<accumulable-response feedback></accumulable-response>`);
    expect(el).lightDom.to.equal('');
  });

  it('can display feedback', async () => {
    const el = await fixture(html`<accumulable-response feedback></accumulable-response>`);
    expect(el.shadowRoot).to.have.descendant('.feedback');
  });

  it('can display the trial count', async () => {
    const el = await fixture(html`<accumulable-response trial></accumulable-response>`);
    expect(el.shadowRoot).to.have.descendant('.trial');
  });

  it('can display payoffs', async () => {
    const el = await fixture(html`<accumulable-response payoff="total"></accumulable-response>`);
    expect(el.shadowRoot).to.have.descendant('.total');
  });

  it('has settable payoff values', async () => {
    const el = await fixture(html`<accumulable-response correct-payoff="60" error-payoff="-60" no-response-payoff="-100"></accumulable-response>`);
    expect(el.correctPayoff).to.equal(60);
    expect(el.errorPayoff).to.equal(-60);
    expect(el.nrPayoff).to.equal(-100);
  });

  it('can record no response', async () => {
    const el = await fixture(html`<accumulable-response interactive feedback trial payoff="total" correct-payoff="60" error-payoff="-60" no-response-payoff="-100"></accumulable-response>`);
    el.start('left', 1);
    await elementUpdated(el);
    el.stop();
    await elementUpdated(el);
    expect(el.outcome).to.equal('nr');
    expect(el.nrCount).to.equal(1);
    expect(el.shadowRoot).to.have.descendant('.outcome').with.text('NoResponse');
    expect(el.shadowRoot).to.have.descendant('.payoff').with.text('−$100');
  });

  it('can record a correct response', async () => {
    const el = await fixture(html`<accumulable-response interactive feedback trial payoff="total" correct-payoff="60" error-payoff="-60" no-response-payoff="-100"></accumulable-response>`);
    el.start('left', 1);
    await elementUpdated(el);
    el.left();
    await elementUpdated(el);
    expect(el.outcome).to.equal('correct');
    expect(el.correctCount).to.equal(1);
    expect(el.shadowRoot).to.have.descendant('.outcome').with.text('Correct');
    expect(el.shadowRoot).to.have.descendant('.payoff').with.text('$60');
  });

  it('can record an error response', async () => {
    const el = await fixture(html`<accumulable-response interactive feedback trial payoff="total" correct-payoff="60" error-payoff="-60" no-response-payoff="-100"></accumulable-response>`);
    el.start('left', 1);
    await elementUpdated(el);
    el.right();
    await elementUpdated(el);
    expect(el.outcome).to.equal('error');
    expect(el.errorCount).to.equal(1);
    expect(el.shadowRoot).to.have.descendant('.outcome').with.text('Error');
    expect(el.shadowRoot).to.have.descendant('.payoff').with.text('−$60');
  });

  it('can reset', async () => {
    const el = await fixture(html`<accumulable-response interactive feedback trial payoff="total" correct-payoff="60" error-payoff="-60" no-response-payoff="-100"></accumulable-response>`);
    el.start('right', 1);
    await elementUpdated(el);
    el.right();
    await elementUpdated(el);
    expect(el.outcome).to.equal('correct');
    expect(el.correctCount).to.equal(1);
    expect(el.shadowRoot).to.have.descendant('.outcome').with.text('Correct');
    expect(el.shadowRoot).to.have.descendant('.payoff').with.text('$60');
    el.reset();
    await elementUpdated(el);
    expect(el.outcome).to.equal(undefined);
    expect(el.correctCount).to.equal(0);
    expect(el.shadowRoot).to.not.have.descendant('.outcome');
    expect(el.shadowRoot).to.not.have.descendant('.payoff');
  });

  it('can accept a "left" button press', async () => {
    const el = await fixture(html`<accumulable-response interactive feedback trial payoff="total" correct-payoff="60" error-payoff="-60" no-response-payoff="-100"></accumulable-response>`);
    el.start('left', 1);
    await elementUpdated(el);
    // Action
    const target = el.shadowRoot.querySelector('[name="left"]');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'accumulable-response');
    // Check
    expect(detail).to.include({
      trial: 1,
      signal: 'left',
      response: 'left',
      outcome: 'correct',
      payoff: 60,
      correctCount: 1,
      errorCount: 0,
      nrCount: 0,
      accuracy: 1,
      totalPayoff: 60,
    });
    expect(detail).to.have.property('rt');
    expect(detail).to.have.property('meanRT');
    expect(detail).to.have.property('correctMeanRT');
    expect(detail).to.have.property('errorMeanRT');
    expect(detail).to.have.property('sdRT');
    expect(detail).to.have.property('correctSDRT');
    expect(detail).to.have.property('errorSDRT');
    expect(el.outcome).to.equal('correct');
    expect(el.correctCount).to.equal(1);
    expect(el.shadowRoot).to.have.descendant('.outcome').with.text('Correct');
    expect(el.shadowRoot).to.have.descendant('.payoff').with.text('$60');
  });

  it('can accept a "right" button press', async () => {
    const el = await fixture(html`<accumulable-response interactive feedback trial payoff="total" correct-payoff="60" error-payoff="-60" no-response-payoff="-100"></accumulable-response>`);
    el.start('left', 1);
    await elementUpdated(el);
    // Action
    const target = el.shadowRoot.querySelector('[name="right"]');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'accumulable-response');
    // Check
    expect(detail).to.include({
      trial: 1,
      signal: 'left',
      response: 'right',
      outcome: 'error',
      payoff: -60,
      correctCount: 0,
      errorCount: 1,
      nrCount: 0,
      accuracy: 0,
      totalPayoff: -60,
    });
    expect(detail).to.have.property('rt');
    expect(detail).to.have.property('meanRT');
    expect(detail).to.have.property('correctMeanRT');
    expect(detail).to.have.property('errorMeanRT');
    expect(detail).to.have.property('sdRT');
    expect(detail).to.have.property('correctSDRT');
    expect(detail).to.have.property('errorSDRT');
    expect(el.outcome).to.equal('error');
    expect(el.errorCount).to.equal(1);
    expect(el.shadowRoot).to.have.descendant('.outcome').with.text('Error');
    expect(el.shadowRoot).to.have.descendant('.payoff').with.text('−$60');
  });

  it('can accept a "left arrow" key press', async () => {
    const el = await fixture(html`<accumulable-response interactive feedback trial payoff="total" correct-payoff="60" error-payoff="-60" no-response-payoff="-100"></accumulable-response>`);
    el.start('left', 1);
    await elementUpdated(el);
    // Action
    setTimeout(() => { sendKeys({press: 'ArrowLeft'}); });
    const {detail} = await oneEvent(el, 'accumulable-response');
    // Check
    expect(detail).to.include({
      trial: 1,
      signal: 'left',
      response: 'left',
      outcome: 'correct',
      payoff: 60,
      correctCount: 1,
      errorCount: 0,
      nrCount: 0,
      accuracy: 1,
      totalPayoff: 60,
    });
    expect(detail).to.have.property('rt');
    expect(detail).to.have.property('meanRT');
    expect(detail).to.have.property('correctMeanRT');
    expect(detail).to.have.property('errorMeanRT');
    expect(detail).to.have.property('sdRT');
    expect(detail).to.have.property('correctSDRT');
    expect(detail).to.have.property('errorSDRT');
    expect(el.outcome).to.equal('correct');
    expect(el.correctCount).to.equal(1);
    expect(el.shadowRoot).to.have.descendant('.outcome').with.text('Correct');
    expect(el.shadowRoot).to.have.descendant('.payoff').with.text('$60');
  });

  it('can accept a "right arrow" key press', async () => {
    const el = await fixture(html`<accumulable-response interactive feedback trial payoff="total" correct-payoff="60" error-payoff="-60" no-response-payoff="-100"></accumulable-response>`);
    el.start('left', 1);
    await elementUpdated(el);
    // Action
    setTimeout(() => { sendKeys({press: 'ArrowRight'}); });
    const {detail} = await oneEvent(el, 'accumulable-response');
    // Check
    expect(detail).to.include({
      trial: 1,
      signal: 'left',
      response: 'right',
      outcome: 'error',
      payoff: -60,
      correctCount: 0,
      errorCount: 1,
      nrCount: 0,
      accuracy: 0,
      totalPayoff: -60,
    });
    expect(detail).to.have.property('rt');
    expect(detail).to.have.property('meanRT');
    expect(detail).to.have.property('correctMeanRT');
    expect(detail).to.have.property('errorMeanRT');
    expect(detail).to.have.property('sdRT');
    expect(detail).to.have.property('correctSDRT');
    expect(detail).to.have.property('errorSDRT');
    expect(el.outcome).to.equal('error');
    expect(el.errorCount).to.equal(1);
    expect(el.shadowRoot).to.have.descendant('.outcome').with.text('Error');
    expect(el.shadowRoot).to.have.descendant('.payoff').with.text('−$60');
  });
});
