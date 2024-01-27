import {
  elementUpdated,
  expect,
  fixture,
  html,
  oneEvent,
  mouseClickElement,
} from '../../../../scripts/test-utility';

import '../../src/components/detectable-response';

describe('detectable-response', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<detectable-response feedback="none"></detectable-response>`);
    expect(el).shadowDom.to.equal(`
      <div class="holder">
        <div class="responses">
          <decidables-button name="present" class="keyboard" disabled>Present</decidables-button>
          <decidables-button name="absent" class="keyboard" disabled>Absent</decidables-button>
        </div>
      </div>
    `);
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<detectable-response feedback="accuracy"></detectable-response>`);
    expect(el).lightDom.to.equal('');
  });

  it('can display feedback', async () => {
    const el = await fixture(html`<detectable-response feedback="outcome"></detectable-response>`);
    expect(el.shadowRoot).to.have.descendant('.feedback');
  });

  it('can display the trial count', async () => {
    const el = await fixture(html`<detectable-response trial></detectable-response>`);
    expect(el.shadowRoot).to.have.descendant('.trial');
  });

  it('can display payoffs', async () => {
    const el = await fixture(html`<detectable-response payoff="total"></detectable-response>`);
    expect(el.shadowRoot).to.have.descendant('.total');
  });

  it('has settable payoff values', async () => {
    const el = await fixture(html`<detectable-response hit-payoff="60" miss-payoff="-60" false-alarm-payoff="-40" correct-rejection-payoff="40" no-response-payoff="-100"></detectable-response>`);
    expect(el.hPayoff).to.equal(60);
    expect(el.mPayoff).to.equal(-60);
    expect(el.faPayoff).to.equal(-40);
    expect(el.crPayoff).to.equal(40);
    expect(el.nrPayoff).to.equal(-100);
  });

  it('can record no response', async () => {
    const el = await fixture(html`<detectable-response interactive feedback="outcome" trial payoff="total" hit-payoff="60" miss-payoff="-60" false-alarm-payoff="-40" correct-rejection-payoff="40" no-response-payoff="-100"></detectable-response>`);
    el.start('present', 1);
    await elementUpdated(el);
    el.stop();
    await elementUpdated(el);
    expect(el.outcome).to.equal('nr');
    expect(el.nr).to.equal(1);
    expect(el.shadowRoot).to.have.descendant('.outcome').with.text('NoResponse');
    expect(el.shadowRoot).to.have.descendant('.payoff').with.text('−$100');
  });

  it('can record a hit', async () => {
    const el = await fixture(html`<detectable-response interactive feedback="outcome" trial payoff="total" hit-payoff="60" miss-payoff="-60" false-alarm-payoff="-40" correct-rejection-payoff="40" no-response-payoff="-100"></detectable-response>`);
    el.start('present', 1);
    await elementUpdated(el);
    el.present();
    await elementUpdated(el);
    expect(el.outcome).to.equal('h');
    expect(el.h).to.equal(1);
    expect(el.shadowRoot).to.have.descendant('.outcome').with.text('Hit');
    expect(el.shadowRoot).to.have.descendant('.payoff').with.text('$60');
  });

  it('can record a miss', async () => {
    const el = await fixture(html`<detectable-response interactive feedback="outcome" trial payoff="total" hit-payoff="60" miss-payoff="-60" false-alarm-payoff="-40" correct-rejection-payoff="40" no-response-payoff="-100"></detectable-response>`);
    el.start('present', 1);
    await elementUpdated(el);
    el.absent();
    await elementUpdated(el);
    expect(el.outcome).to.equal('m');
    expect(el.m).to.equal(1);
    expect(el.shadowRoot).to.have.descendant('.outcome').with.text('Miss');
    expect(el.shadowRoot).to.have.descendant('.payoff').with.text('−$60');
  });

  it('can record a correct rejection', async () => {
    const el = await fixture(html`<detectable-response interactive feedback="outcome" trial payoff="total" hit-payoff="60" miss-payoff="-60" false-alarm-payoff="-40" correct-rejection-payoff="40" no-response-payoff="-100"></detectable-response>`);
    el.start('absent', 1);
    await elementUpdated(el);
    el.absent();
    await elementUpdated(el);
    expect(el.outcome).to.equal('cr');
    expect(el.cr).to.equal(1);
    expect(el.shadowRoot).to.have.descendant('.outcome').with.text('CorrectRejection');
    expect(el.shadowRoot).to.have.descendant('.payoff').with.text('$40');
  });

  it('can record a false alarm', async () => {
    const el = await fixture(html`<detectable-response interactive feedback="outcome" trial payoff="total" hit-payoff="60" miss-payoff="-60" false-alarm-payoff="-40" correct-rejection-payoff="40" no-response-payoff="-100"></detectable-response>`);
    el.start('absent', 1);
    await elementUpdated(el);
    el.present();
    await elementUpdated(el);
    expect(el.outcome).to.equal('fa');
    expect(el.fa).to.equal(1);
    expect(el.shadowRoot).to.have.descendant('.outcome').with.text('FalseAlarm');
    expect(el.shadowRoot).to.have.descendant('.payoff').with.text('−$40');
  });

  it('can reset', async () => {
    const el = await fixture(html`<detectable-response interactive feedback="outcome" trial payoff="total" hit-payoff="60" miss-payoff="-60" false-alarm-payoff="-40" correct-rejection-payoff="40" no-response-payoff="-100"></detectable-response>`);
    el.start('present', 1);
    await elementUpdated(el);
    el.present();
    await elementUpdated(el);
    expect(el.outcome).to.equal('h');
    expect(el.h).to.equal(1);
    expect(el.shadowRoot).to.have.descendant('.outcome').with.text('Hit');
    expect(el.shadowRoot).to.have.descendant('.payoff').with.text('$60');
    el.reset();
    await elementUpdated(el);
    expect(el.outcome).to.equal(undefined);
    expect(el.h).to.equal(0);
    expect(el.shadowRoot).to.not.have.descendant('.outcome');
    expect(el.shadowRoot).to.not.have.descendant('.payoff');
  });

  it('can accept a "present" button press', async () => {
    const el = await fixture(html`<detectable-response interactive feedback="outcome" trial payoff="total" hit-payoff="60" miss-payoff="-60" false-alarm-payoff="-40" correct-rejection-payoff="40" no-response-payoff="-100"></detectable-response>`);
    el.start('present', 1);
    await elementUpdated(el);
    // Action
    const target = el.shadowRoot.querySelector('[name="present"]');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'detectable-response');
    // Check
    expect(detail).to.include({
      trial: 1,
      signal: 'present',
      response: 'present',
      outcome: 'h',
      payoff: 60,
      h: 1,
      m: 0,
      fa: 0,
      cr: 0,
      nr: 0,
      totalPayoff: 60,
    });
    expect(el.outcome).to.equal('h');
    expect(el.h).to.equal(1);
    expect(el.shadowRoot).to.have.descendant('.outcome').with.text('Hit');
    expect(el.shadowRoot).to.have.descendant('.payoff').with.text('$60');
  });

  it('can accept an "absent" button press', async () => {
    const el = await fixture(html`<detectable-response interactive feedback="outcome" trial payoff="total" hit-payoff="60" miss-payoff="-60" false-alarm-payoff="-40" correct-rejection-payoff="40" no-response-payoff="-100"></detectable-response>`);
    el.start('present', 1);
    await elementUpdated(el);
    // Action
    const target = el.shadowRoot.querySelector('[name="absent"]');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'detectable-response');
    // Check
    expect(detail).to.include({
      trial: 1,
      signal: 'present',
      response: 'absent',
      outcome: 'm',
      payoff: -60,
      h: 0,
      m: 1,
      fa: 0,
      cr: 0,
      nr: 0,
      totalPayoff: -60,
    });
    expect(el.outcome).to.equal('m');
    expect(el.m).to.equal(1);
    expect(el.shadowRoot).to.have.descendant('.outcome').with.text('Miss');
    expect(el.shadowRoot).to.have.descendant('.payoff').with.text('−$60');
  });
});
