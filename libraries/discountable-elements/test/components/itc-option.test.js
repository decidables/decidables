import {
  expect,
  fixture,
  html,
  oneEvent,
  sendKeys,
} from '../../../../scripts/test';

import '../../src/components/itc-option';

describe('itc-option', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`
      <itc-option amount="20" delay="40"></itc-option>
    `);
    expect(el).shadowDom.to.equal(`
      <div class="holder">
        <div class="amount static">$20</div>
        <div class="in">in</div>
        <div class="delay static">40 days</div>
      </div>
    `);
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`
      <itc-option amount="20" delay="40"></itc-option>
    `);
    expect(el).lightDom.to.equal('');
  });

  it('can be in blank state', async () => {
    const el = await fixture(html`
      <itc-option state="blank" amount="20" delay="40"></itc-option>
    `);
    expect(el.shadowRoot).to.not.have.descendant('.amount');
    expect(el.shadowRoot).to.not.have.descendant('.delay');
  });

  it('can be in fixation state', async () => {
    const el = await fixture(html`
      <itc-option state="fixation" amount="20" delay="40"></itc-option>
    `);
    expect(el.shadowRoot).to.not.have.descendant('.amount');
    expect(el.shadowRoot).to.not.have.descendant('.delay');
  });

  it('can be interactive', async () => {
    const el = await fixture(html`
      <itc-option interactive amount="20" delay="40"></itc-option>
    `);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner').with.length(2);
    expect(el.shadowRoot).to.have.descendant('.amount.interactive').with.value(20);
    expect(el.shadowRoot).to.have.descendant('.delay.interactive').with.value(40);
  });

  it('can accept interactive amount input', async () => {
    const el = await fixture(html`
      <itc-option interactive amount="20" delay="40"></itc-option>
    `);
    expect(el.shadowRoot).to.have.descendant('.amount.interactive').with.value(20);
    // Action
    const target = el.shadowRoot.querySelector('.amount.interactive').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '9'}); });
    const {detail} = await oneEvent(el, 'itc-option-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.delay.interactive').with.value(40);
    expect(el.shadowRoot).to.have.descendant('.amount.interactive').with.value(9);
    expect(el.a).to.equal(9);
    expect(detail.a).to.equal(9);
  });

  it('can accept interactive delay input', async () => {
    const el = await fixture(html`
      <itc-option interactive amount="10" delay="30"></itc-option>
    `);
    expect(el.shadowRoot).to.have.descendant('.delay.interactive').with.value(30);
    // Action
    const target = el.shadowRoot.querySelector('.delay.interactive').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '8'}); });
    const {detail} = await oneEvent(el, 'itc-option-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.amount.interactive').with.value(10);
    expect(el.shadowRoot).to.have.descendant('.delay.interactive').with.value(8);
    expect(el.d).to.equal(8);
    expect(detail.d).to.equal(8);
  });
});
