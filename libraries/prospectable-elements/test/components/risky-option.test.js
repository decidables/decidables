import {
  expect,
  fixture,
  html,
  mouseDragElement,
  oneEvent,
  sendKeys,
} from '../../../../scripts/test';

import '../../src/components/risky-option';
import '../../src/components/risky-outcome';

describe('risky-option', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`
      <risky-option>
        <risky-outcome value="20" probability="0.75" name="win"></risky-outcome>
        <risky-outcome value="0" probability="0.25" name="loss"></risky-outcome>
      </risky-option>
    `);
    expect(el).shadowDom.to.equal(`
      <slot></slot>
    `);
  });

  it('has a lightDom', async () => {
    const el = await fixture(html`
      <risky-option>
        <risky-outcome value="20" probability="0.75" name="win"></risky-outcome>
        <risky-outcome value="0" probability="0.25" name="loss"></risky-outcome>
      </risky-option>
    `);
    expect(el).lightDom.to.equal(`
      <risky-outcome class="keyboard" value="20" probability="0.75" name="win"></risky-outcome>
      <risky-outcome class="keyboard" value="0" probability="0.25" name="loss"></risky-outcome>
    `);
  });

  it('displays pie chart', async () => {
    const el = await fixture(html`
      <risky-option>
        <risky-outcome value="20" probability="0.75" name="win"></risky-outcome>
        <risky-outcome value="0" probability="0.25" name="loss"></risky-outcome>
      </risky-option>
    `);
    expect(el.shadowRoot).to.have.descendant('.pie');
    expect(el.shadowRoot).to.have.descendants('.arc').with.length(2);
    expect(el.shadowRoot).to.have.descendants('.label.static').with.length(2);
    expect(el.shadowRoot).to.have.descendant('.label.win').with.text('$20');
    expect(el.shadowRoot).to.have.descendant('.label.loss').with.text('$0');
  });

  it('can be interactive', async () => {
    const el = await fixture(html`
      <risky-option>
        <risky-outcome interactive value="20" probability="0.75" name="win"></risky-outcome>
        <risky-outcome value="0" probability="0.25" name="loss"></risky-outcome>
      </risky-option>
    `);
    expect(el.shadowRoot).to.have.descendant('.pie');
    expect(el.shadowRoot).to.have.descendants('.arc').with.length(2);
    expect(el.shadowRoot).to.have.descendants('.label.static').with.length(1);
    expect(el.shadowRoot).to.have.descendant('.label.loss').with.text('$0');
    expect(el.shadowRoot).to.have.descendants('.label.interactive').with.length(1);
    expect(el.shadowRoot).to.have.descendant('.label.win decidables-spinner:not([disabled])').with.value(20);
  });

  it('can accept interactive value input', async () => {
    const el = await fixture(html`
      <risky-option>
        <risky-outcome interactive value="20" probability="0.75" name="win"></risky-outcome>
        <risky-outcome value="0" probability="0.25" name="loss"></risky-outcome>
      </risky-option>
    `);
    expect(el.shadowRoot).to.have.descendants('.label.interactive').with.length(1);
    expect(el.shadowRoot).to.have.descendant('.label.win decidables-spinner:not([disabled])').with.value(20);
    // Action
    const target = el.shadowRoot.querySelector('.label.win decidables-spinner').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '16'}); });
    await oneEvent(el, 'risky-outcome-change');
    const {detail} = await oneEvent(el, 'risky-outcome-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.label.win decidables-spinner:not([disabled])').with.value('16');
    expect(el.shadowRoot).to.have.descendant('.label.loss').with.text('$0');
    expect(detail.x).to.equal(16);
    expect(el.querySelector('risky-outcome[name="win"]')).to.include({x: 16});
  });

  it('supports mouse manipulation of probability', async () => {
    const el = await fixture(html`
      <risky-option>
        <risky-outcome interactive value="20" probability="0.5" name="win"></risky-outcome>
        <risky-outcome value="0" probability="0.55" name="loss"></risky-outcome>
      </risky-option>
    `);
    // Get "before" state
    const {p} = el.querySelector('risky-outcome[name="win"]');
    // Action
    const target = el.shadowRoot.querySelector('.arc.win.interactive');
    setTimeout(() => { mouseDragElement(target, 50, 50, 'bottom'); });
    const {detail} = await oneEvent(el, 'risky-outcome-change');
    // Compare "after" state
    expect(el.querySelector('risky-outcome[name="win"]').p).to.not.equal(p);
    expect(detail.p).to.not.equal(p);
  });

  it('supports keyboard manipulation of probability', async () => {
    const el = await fixture(html`
      <risky-option>
        <risky-outcome interactive value="20" probability="0.5" name="win"></risky-outcome>
        <risky-outcome value="0" probability="0.55" name="loss"></risky-outcome>
      </risky-option>
    `);
    // Get "before" state
    const {p} = el.querySelector('risky-outcome[name="win"]');
    // Action
    const target = el.shadowRoot.querySelector('.arc.win.interactive');
    target.focus();
    setTimeout(() => { sendKeys({press: 'ArrowDown'}); });
    const {detail} = await oneEvent(el, 'risky-outcome-change');
    // Compare "after" state
    expect(el.querySelector('risky-outcome[name="win"]').p).to.not.equal(p);
    expect(detail.p).to.not.equal(p);
  });
});
