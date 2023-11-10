import {
  expect,
  fixture,
  html,
  oneEvent,
  sendKeys,
} from '../../../../scripts/test';

import '../../src/components/itc-choice';

describe('itc-choice', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<itc-choice></itc-choice>`);
    expect(el).shadowDom.to.equal(`
      <div class="holder">
        <itc-option class="keyboard ss" state="choice" amount="10" delay="5" class="keyboard">
        </itc-option>
        <span class="query">?</span>
        <itc-option class="keyboard ll" state="choice" amount="40" delay="30" class="keyboard">
        </itc-option>
      </div>
    `);
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<itc-choice></itc-choice>`);
    expect(el).lightDom.to.equal('');
  });

  it('can display a choice', async () => {
    const el = await fixture(html`
      <itc-choice amount-ss="10" delay-ss="15" amount-ll="20" delay-ll="25" state="choice"></itc-choice>
    `);
    expect(el.shadowRoot).to.have.descendants('itc-option').with.length(2);
    expect(el.shadowRoot).to.have.descendant('itc-option.ss').with.attribute('amount', '10');
    expect(el.shadowRoot).to.have.descendant('itc-option.ss').with.attribute('delay', '15');
    expect(el.shadowRoot).to.have.descendant('itc-option.ll').with.attribute('amount', '20');
    expect(el.shadowRoot).to.have.descendant('itc-option.ll').with.attribute('delay', '25');
    expect(el.shadowRoot).to.have.descendant('.query').with.text('?');
  });

  it('can have fixation state', async () => {
    const el = await fixture(html`
      <itc-choice amount-ss="10" delay-ss="15" amount-ll="20" delay-ll="25" state="fixation"></itc-choice>
    `);
    expect(el.shadowRoot).to.have.descendants('itc-option').with.length(2);
    expect(el.shadowRoot).to.have.descendant('itc-option.ss').with.attribute('state', 'fixation');
    expect(el.shadowRoot).to.have.descendant('itc-option.ll').with.attribute('state', 'fixation');
    expect(el.shadowRoot).to.have.descendant('.query').with.text('+');
  });

  it('can have blank state', async () => {
    const el = await fixture(html`
      <itc-choice amount-ss="10" delay-ss="15" amount-ll="20" delay-ll="25" state="blank"></itc-choice>
    `);
    expect(el.shadowRoot).to.have.descendants('itc-option').with.length(2);
    expect(el.shadowRoot).to.have.descendant('itc-option.ss').with.attribute('state', 'blank');
    expect(el.shadowRoot).to.have.descendant('itc-option.ll').with.attribute('state', 'blank');
    expect(el.shadowRoot).to.have.descendant('.query').with.text('∙');
  });

  it('can be interactive', async () => {
    const el = await fixture(html`
      <itc-choice interactive amount-ss="10" delay-ss="15" amount-ll="20" delay-ll="25"></itc-choice>
    `);
    expect(el.shadowRoot).to.have.descendant('itc-option.ss').with.attribute('interactive');
    expect(el.shadowRoot).to.have.descendant('itc-option.ll').with.attribute('interactive');
  });

  it('can accept interactive ss amount input', async () => {
    const el = await fixture(html`
      <itc-choice interactive amount-ss="10" delay-ss="15" amount-ll="20" delay-ll="25"></itc-choice>
    `);
    // Action
    const target = el.shadowRoot.querySelector('.ss').shadowRoot.querySelector('.amount').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '9'}); });
    const {detail} = await oneEvent(el, 'itc-choice-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('itc-option.ss').with.attribute('amount', '9');
    expect(detail.as).to.equal(9);
  });

  it('can accept interactive ss delay input', async () => {
    const el = await fixture(html`
      <itc-choice interactive amount-ss="10" delay-ss="15" amount-ll="20" delay-ll="25"></itc-choice>
    `);
    // Action
    const target = el.shadowRoot.querySelector('.ss').shadowRoot.querySelector('.delay').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '8'}); });
    const {detail} = await oneEvent(el, 'itc-choice-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('itc-option.ss').with.attribute('delay', '8');
    expect(detail.ds).to.equal(8);
  });

  it('can accept interactive ll amount input', async () => {
    const el = await fixture(html`
      <itc-choice interactive amount-ss="10" delay-ss="15" amount-ll="20" delay-ll="25"></itc-choice>
    `);
    // Action
    const target = el.shadowRoot.querySelector('.ll').shadowRoot.querySelector('.amount').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '7'}); });
    const {detail} = await oneEvent(el, 'itc-choice-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('itc-option.ll').with.attribute('amount', '7');
    expect(detail.al).to.equal(7);
  });

  it('can accept interactive ll delay input', async () => {
    const el = await fixture(html`
      <itc-choice interactive amount-ss="10" delay-ss="15" amount-ll="20" delay-ll="25"></itc-choice>
    `);
    // Action
    const target = el.shadowRoot.querySelector('.ll').shadowRoot.querySelector('.delay').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '6'}); });
    const {detail} = await oneEvent(el, 'itc-choice-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('itc-option.ll').with.attribute('delay', '6');
    expect(detail.dl).to.equal(6);
  });
});
