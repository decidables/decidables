import {
  aTimeout,
  expect,
  fixture,
  html,
  oneEvent,
  sendKeys,
} from '../../../../scripts/test-utility';

import '../../src/components/risky-choice';

describe('risky-choice', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<risky-choice></risky-choice>`);
    expect(el).shadowDom.to.equal(`
      <div class="holder">
        <risky-option class="gamble keyboard">
          <risky-outcome class="keyboard" name="loss" probability="0.25" value="0"></risky-outcome>
          <risky-outcome class="keyboard" name="win" probability="0.75" value="100"></risky-outcome>
        </risky-option>
        <span class="query">?</span>
        <risky-option class="sure keyboard">
          <risky-outcome class="keyboard" name="sure" probability="1" value="50"></risky-outcome>
        </risky-option>
      </div>
    `);
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<risky-choice></risky-choice>`);
    expect(el).lightDom.to.equal('');
  });

  it('can display a choice', async () => {
    const el = await fixture(html`
      <risky-choice loss="0" win="20" probability="0.6" sure="10" state="choice"></risky-choice>
    `);
    expect(el.shadowRoot).to.have.descendants('risky-option').with.length(2);
    expect(el.shadowRoot).to.have.descendants('risky-outcome').with.length(3);
    expect(el.shadowRoot).to.have.descendant('risky-outcome[name="loss"]').with.attribute('value', '0');
    expect(el.shadowRoot).to.have.descendant('risky-outcome[name="loss"]').with.attribute('probability', '0.4');
    expect(el.shadowRoot).to.have.descendant('risky-outcome[name="win"]').with.attribute('value', '20');
    expect(el.shadowRoot).to.have.descendant('risky-outcome[name="win"]').with.attribute('probability', '0.6');
    expect(el.shadowRoot).to.have.descendant('.query').with.text('?');
    expect(el.shadowRoot).to.have.descendant('risky-outcome[name="sure"]').with.attribute('value', '10');
    expect(el.shadowRoot).to.have.descendant('risky-outcome[name="sure"]').with.attribute('probability', '1');
  });

  it('can have fixation state', async () => {
    const el = await fixture(html`
      <risky-choice loss="0" win="20" probability="0.6" sure="10" state="fixation"></risky-choice>
    `);
    expect(el.shadowRoot).to.have.descendants('risky-option').with.length(2);
    expect(el.shadowRoot).to.not.have.descendants('risky-outcome');
    expect(el.shadowRoot).to.have.descendant('.query').with.text('+');
  });

  it('can have blank state', async () => {
    const el = await fixture(html`
      <risky-choice loss="0" win="20" probability="0.6" sure="10" state="blank"></risky-choice>
    `);
    expect(el.shadowRoot).to.have.descendants('risky-option').with.length(2);
    expect(el.shadowRoot).to.not.have.descendants('risky-outcome');
    expect(el.shadowRoot).to.have.descendant('.query').with.text('∙');
  });

  it('can be interactive', async () => {
    const el = await fixture(html`
      <risky-choice interactive loss="0" win="20" probability="0.6" sure="10" state="choice"></risky-choice>
    `);
    expect(el.shadowRoot).to.have.descendant('risky-outcome[name="loss"]').not.with.attribute('interactive');
    expect(el.shadowRoot).to.have.descendant('risky-outcome[name="win"]').with.attribute('interactive');
    expect(el.shadowRoot).to.have.descendant('risky-outcome[name="sure"]').with.attribute('interactive');
  });

  it('can accept interactive sure value input', async () => {
    const el = await fixture(html`
      <risky-choice interactive loss="0" win="20" probability="0.6" sure="10" state="choice"></risky-choice>
    `);
    // Wait for resize?
    await aTimeout(200);
    // Action
    const target = el.shadowRoot.querySelector('.sure').shadowRoot.querySelector('decidables-spinner').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '16'}); });
    await oneEvent(el, 'risky-choice-change');
    const {detail} = await oneEvent(el, 'risky-choice-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('risky-outcome[name="sure"]').with.attribute('value', '16');
    expect(detail.xs).to.equal(16);
  });

  it('can accept interactive win value input', async () => {
    const el = await fixture(html`
      <risky-choice interactive loss="0" win="20" probability="0.6" sure="10" state="choice"></risky-choice>
    `);
    // Wait for resize?
    await aTimeout(200);
    // Action
    const target = el.shadowRoot.querySelector('.gamble').shadowRoot.querySelector('decidables-spinner').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '16'}); });
    await oneEvent(el, 'risky-choice-change');
    const {detail} = await oneEvent(el, 'risky-choice-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('risky-outcome[name="win"]').with.attribute('value', '16');
    expect(detail.xw).to.equal(16);
  });

  it('can accept interactive win probability input', async () => {
    const el = await fixture(html`
      <risky-choice interactive loss="0" win="20" probability="0.6" sure="10" state="choice"></risky-choice>
    `);
    // Wait for resize?
    await aTimeout(200);
    // Action
    const target = el.shadowRoot.querySelector('.gamble').shadowRoot.querySelector('.arc.win.interactive');
    target.focus();
    setTimeout(() => { sendKeys({press: 'ArrowDown'}); });
    const {detail} = await oneEvent(el, 'risky-choice-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('risky-outcome[name="win"]').with.attribute('probability', '0.65');
    expect(detail.pw).to.equal(0.65);
  });
});
