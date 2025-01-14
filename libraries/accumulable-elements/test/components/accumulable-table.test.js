import {
  expect,
  fixture,
  html,
  oneEvent,
  sendKeys,
} from '../../../../scripts/test-utility';

import '../../src/components/accumulable-table';

describe('accumulable-table', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<accumulable-table></accumulable-table>`);
    expect(el.shadowRoot).to.have.descendant('table');
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<accumulable-table></accumulable-table>`);
    expect(el).lightDom.to.equal('');
  });

  it('can display only labels', async () => {
    const el = await fixture(html`<accumulable-table></accumulable-table>`);
    expect(el.shadowRoot).to.not.have.descendant('decidables-spinner');
    expect(el.shadowRoot).to.have.descendant('.correct.count');
    expect(el.shadowRoot).to.have.descendant('.correct.mean-rt');
    expect(el.shadowRoot).to.have.descendant('.correct.sd-rt');
    expect(el.shadowRoot).to.have.descendant('.error.count');
    expect(el.shadowRoot).to.have.descendant('.error.mean-rt');
    expect(el.shadowRoot).to.have.descendant('.error.sd-rt');
  });

  it('can display labels with payoffs', async () => {
    const el = await fixture(html`<accumulable-table payoff correct-payoff="60" error-payoff="-60" no-response-payoff="-100"></accumulable-table>`);
    expect(el.shadowRoot).to.have.descendants('.payoff').with.length(2);
    expect(el.shadowRoot).to.have.descendant('.correct .payoff').with.text('$60');
    expect(el.shadowRoot).to.have.descendant('.error .payoff').with.text('−$60');
  });

  it('can display numbers', async () => {
    const el = await fixture(html`<accumulable-table numeric correct-count="6" error-count="4" no-response-count="0" accuracy="0.6" correct-mean-rt="300" error-mean-rt="500" mean-rt="380" correct-sd-rt="100" error-sd-rt="120" sd-rt="110"></accumulable-table>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner[disabled]').with.length(6);
    expect(el.shadowRoot).to.have.descendant('.correct.count decidables-spinner[disabled]').with.value(6);
    expect(el.shadowRoot).to.have.descendant('.error.count decidables-spinner[disabled]').with.value(4);
    expect(el.shadowRoot).to.have.descendant('.correct.mean-rt decidables-spinner[disabled]').with.value(300);
    expect(el.shadowRoot).to.have.descendant('.error.mean-rt decidables-spinner[disabled]').with.value(500);
    expect(el.shadowRoot).to.have.descendant('.correct.sd-rt decidables-spinner[disabled]').with.value(100);
    expect(el.shadowRoot).to.have.descendant('.error.sd-rt decidables-spinner[disabled]').with.value(120);
  });

  it('can display numbers with payoffs', async () => {
    const el = await fixture(html`<accumulable-table numeric payoff correct-payoff="60" error-payoff="-60" no-response-payoff="-100"></accumulable-table>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner').with.length(6);
    expect(el.shadowRoot).to.have.descendants('.payoff').with.length(2);
    expect(el.shadowRoot).to.have.descendant('.correct .payoff').with.text('$60');
    expect(el.shadowRoot).to.have.descendant('.error .payoff').with.text('−$60');
  });

  it('can include a summary', async () => {
    const el = await fixture(html`<accumulable-table numeric summary></accumulable-table>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner').with.length(9);
    expect(el.shadowRoot).to.have.descendant('.correct.count');
    expect(el.shadowRoot).to.have.descendant('.correct.mean-rt');
    expect(el.shadowRoot).to.have.descendant('.correct.sd-rt');
    expect(el.shadowRoot).to.have.descendant('.error.count');
    expect(el.shadowRoot).to.have.descendant('.error.mean-rt');
    expect(el.shadowRoot).to.have.descendant('.error.sd-rt');
    expect(el.shadowRoot).to.have.descendant('.overall.proportion-correct');
    expect(el.shadowRoot).to.have.descendant('.overall.mean-rt');
    expect(el.shadowRoot).to.have.descendant('.overall.sd-rt');
  });

  it('can be interactive', async () => {
    const el = await fixture(html`<accumulable-table numeric interactive correct-count="6" error-count="4" no-response-count="0" accuracy="0.6" correct-mean-rt="300" error-mean-rt="500" mean-rt="380" correct-sd-rt="100" error-sd-rt="120" sd-rt="110"></accumulable-table>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(6);
    expect(el.shadowRoot).to.have.descendant('.correct.count decidables-spinner:not([disabled])').with.value(6);
    expect(el.shadowRoot).to.have.descendant('.error.count decidables-spinner:not([disabled])').with.value(4);
    expect(el.shadowRoot).to.have.descendant('.correct.mean-rt decidables-spinner:not([disabled])').with.value(300);
    expect(el.shadowRoot).to.have.descendant('.error.mean-rt decidables-spinner:not([disabled])').with.value(500);
    expect(el.shadowRoot).to.have.descendant('.correct.sd-rt decidables-spinner:not([disabled])').with.value(100);
    expect(el.shadowRoot).to.have.descendant('.error.sd-rt decidables-spinner:not([disabled])').with.value(120);
  });

  it('can accept interactive correct count input', async () => {
    const el = await fixture(html`<accumulable-table numeric interactive summary correct-count="50"></accumulable-table>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(9);
    expect(el.shadowRoot).to.have.descendant('.correct.count decidables-spinner:not([disabled])').with.value(50);
    // Action
    const target = el.shadowRoot.querySelector('.correct.count decidables-spinner').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '25'}); });
    await oneEvent(el, 'accumulable-table-change');
    const {detail} = await oneEvent(el, 'accumulable-table-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.correct.count decidables-spinner:not([disabled])').with.value(25);
    expect(el.correctCount).to.equal(25);
    expect(detail.correctCount).to.equal(25);
  });

  it('can accept interactive error count input', async () => {
    const el = await fixture(html`<accumulable-table numeric interactive summary error-count="50"></accumulable-table>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(9);
    expect(el.shadowRoot).to.have.descendant('.error.count decidables-spinner:not([disabled])').with.value(50);
    // Action
    const target = el.shadowRoot.querySelector('.error.count decidables-spinner').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '25'}); });
    await oneEvent(el, 'accumulable-table-change');
    const {detail} = await oneEvent(el, 'accumulable-table-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.error.count decidables-spinner:not([disabled])').with.value(25);
    expect(el.errorCount).to.equal(25);
    expect(detail.errorCount).to.equal(25);
  });

  it('can accept interactive accuracy input', async () => {
    const el = await fixture(html`<accumulable-table numeric interactive summary accuracy="0.5"></accumulable-table>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(9);
    expect(el.shadowRoot).to.have.descendant('.overall.proportion-correct decidables-spinner:not([disabled])').with.value(0.5);
    // Action
    const target = el.shadowRoot.querySelector('.overall.proportion-correct decidables-spinner').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({press: 'ArrowUp'}); });
    const {detail} = await oneEvent(el, 'accumulable-table-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.overall.proportion-correct decidables-spinner:not([disabled])').with.value(0.51);
    expect(el.accuracy).to.equal(0.51);
    expect(detail.accuracy).to.equal(0.51);
  });

  it('can accept interactive correct mean RT input', async () => {
    const el = await fixture(html`<accumulable-table numeric interactive summary correct-mean-rt="450"></accumulable-table>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(9);
    expect(el.shadowRoot).to.have.descendant('.correct.mean-rt decidables-spinner:not([disabled])').with.value(450);
    // Action
    const target = el.shadowRoot.querySelector('.correct.mean-rt decidables-spinner').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '325'}); });
    await oneEvent(el, 'accumulable-table-change');
    await oneEvent(el, 'accumulable-table-change');
    const {detail} = await oneEvent(el, 'accumulable-table-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.correct.mean-rt decidables-spinner:not([disabled])').with.value(325);
    expect(el.correctMeanRT).to.equal(325);
    expect(detail.correctMeanRT).to.equal(325);
  });

  it('can accept interactive error mean RT input', async () => {
    const el = await fixture(html`<accumulable-table numeric interactive summary error-mean-rt="450"></accumulable-table>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(9);
    expect(el.shadowRoot).to.have.descendant('.error.mean-rt decidables-spinner:not([disabled])').with.value(450);
    // Action
    const target = el.shadowRoot.querySelector('.error.mean-rt decidables-spinner').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '325'}); });
    await oneEvent(el, 'accumulable-table-change');
    await oneEvent(el, 'accumulable-table-change');
    const {detail} = await oneEvent(el, 'accumulable-table-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.error.mean-rt decidables-spinner:not([disabled])').with.value(325);
    expect(el.errorMeanRT).to.equal(325);
    expect(detail.errorMeanRT).to.equal(325);
  });

  it('can accept interactive overall mean RT input', async () => {
    const el = await fixture(html`<accumulable-table numeric interactive summary mean-rt="450"></accumulable-table>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(9);
    expect(el.shadowRoot).to.have.descendant('.overall.mean-rt decidables-spinner:not([disabled])').with.value(450);
    // Action
    const target = el.shadowRoot.querySelector('.overall.mean-rt decidables-spinner').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({press: 'ArrowUp'}); });
    const {detail} = await oneEvent(el, 'accumulable-table-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.overall.mean-rt decidables-spinner:not([disabled])').with.value(451);
    expect(el.meanRT).to.equal(451);
    expect(detail.meanRT).to.equal(451);
  });

  it('can accept interactive correct SD RT input', async () => {
    const el = await fixture(html`<accumulable-table numeric interactive summary correct-sd-rt="150"></accumulable-table>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(9);
    expect(el.shadowRoot).to.have.descendant('.correct.sd-rt decidables-spinner:not([disabled])').with.value(150);
    // Action
    const target = el.shadowRoot.querySelector('.correct.sd-rt decidables-spinner').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '125'}); });
    await oneEvent(el, 'accumulable-table-change');
    await oneEvent(el, 'accumulable-table-change');
    const {detail} = await oneEvent(el, 'accumulable-table-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.correct.sd-rt decidables-spinner:not([disabled])').with.value(125);
    expect(el.correctSDRT).to.equal(125);
    expect(detail.correctSDRT).to.equal(125);
  });

  it('can accept interactive error SD RT input', async () => {
    const el = await fixture(html`<accumulable-table numeric interactive summary error-sd-rt="150"></accumulable-table>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(9);
    expect(el.shadowRoot).to.have.descendant('.error.sd-rt decidables-spinner:not([disabled])').with.value(150);
    // Action
    const target = el.shadowRoot.querySelector('.error.sd-rt decidables-spinner').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '125'}); });
    await oneEvent(el, 'accumulable-table-change');
    await oneEvent(el, 'accumulable-table-change');
    const {detail} = await oneEvent(el, 'accumulable-table-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.error.sd-rt decidables-spinner:not([disabled])').with.value(125);
    expect(el.errorSDRT).to.equal(125);
    expect(detail.errorSDRT).to.equal(125);
  });

  it('can accept interactive overall SD RT input', async () => {
    const el = await fixture(html`<accumulable-table numeric interactive summary sd-rt="150"></accumulable-table>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(9);
    expect(el.shadowRoot).to.have.descendant('.overall.sd-rt decidables-spinner:not([disabled])').with.value(150);
    // Action
    const target = el.shadowRoot.querySelector('.overall.sd-rt decidables-spinner').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({press: 'ArrowUp'}); });
    const {detail} = await oneEvent(el, 'accumulable-table-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.overall.sd-rt decidables-spinner:not([disabled])').with.value(151);
    expect(el.sdRT).to.equal(151);
    expect(detail.sdRT).to.equal(151);
  });
});
