import {
  expect,
  fixture,
  html,
  oneEvent,
  sendKeys,
} from '../../../../scripts/test';

import '../../src/components/detectable-table';

describe('detectable-response', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<detectable-table></detectable-table>`);
    expect(el.shadowRoot).to.have.descendant('table');
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<detectable-table></detectable-table>`);
    expect(el).lightDom.to.equal('');
  });

  it('can display only labels', async () => {
    const el = await fixture(html`<detectable-table></detectable-table>`);
    expect(el.shadowRoot).to.not.have.descendant('decidables-spinner');
    expect(el.shadowRoot).to.have.descendant('.h');
    expect(el.shadowRoot).to.have.descendant('.m');
    expect(el.shadowRoot).to.have.descendant('.fa');
    expect(el.shadowRoot).to.have.descendant('.cr');
  });

  it('can display labels with payoffs', async () => {
    const el = await fixture(html`<detectable-table payoff hit-payoff="60" miss-payoff="-60" false-alarm-payoff="-40" correct-rejection-payoff="40"></detectable-table>`);
    expect(el.shadowRoot).to.have.descendants('.payoff').with.length(4);
    expect(el.shadowRoot).to.have.descendant('.h .payoff').with.text('$60');
    expect(el.shadowRoot).to.have.descendant('.m .payoff').with.text('-$60');
    expect(el.shadowRoot).to.have.descendant('.fa .payoff').with.text('-$40');
    expect(el.shadowRoot).to.have.descendant('.cr .payoff').with.text('$40');
  });

  it('can display numbers', async () => {
    const el = await fixture(html`<detectable-table numeric hits="60" misses="40" false-alarms="25" correct-rejections="75"></detectable-table>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner[disabled]').with.length(4);
    expect(el.shadowRoot).to.have.descendant('.h decidables-spinner[disabled]').with.value(60);
    expect(el.shadowRoot).to.have.descendant('.m decidables-spinner[disabled]').with.value(40);
    expect(el.shadowRoot).to.have.descendant('.fa decidables-spinner[disabled]').with.value(25);
    expect(el.shadowRoot).to.have.descendant('.cr decidables-spinner[disabled]').with.value(75);
  });

  it('can display numbers with payoffs', async () => {
    const el = await fixture(html`<detectable-table numeric payoff hit-payoff="60" miss-payoff="-60" false-alarm-payoff="-40" correct-rejection-payoff="40"></detectable-table>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner').with.length(4);
    expect(el.shadowRoot).to.have.descendants('.payoff').with.length(4);
    expect(el.shadowRoot).to.have.descendant('.h .payoff').with.text('$60');
    expect(el.shadowRoot).to.have.descendant('.m .payoff').with.text('-$60');
    expect(el.shadowRoot).to.have.descendant('.fa .payoff').with.text('-$40');
    expect(el.shadowRoot).to.have.descendant('.cr .payoff').with.text('$40');
  });

  it('can display stimulus marginals', async () => {
    const el = await fixture(html`<detectable-table numeric summary="stimulusRates"></detectable-table>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner').with.length(6);
    expect(el.shadowRoot).to.have.descendant('.h');
    expect(el.shadowRoot).to.have.descendant('.m');
    expect(el.shadowRoot).to.have.descendant('.fa');
    expect(el.shadowRoot).to.have.descendant('.cr');
    expect(el.shadowRoot).to.have.descendant('.hr');
    expect(el.shadowRoot).to.have.descendant('.far');
  });

  it('can display response marginals', async () => {
    const el = await fixture(html`<detectable-table numeric summary="responseRates"></detectable-table>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner').with.length(6);
    expect(el.shadowRoot).to.have.descendant('.h');
    expect(el.shadowRoot).to.have.descendant('.m');
    expect(el.shadowRoot).to.have.descendant('.fa');
    expect(el.shadowRoot).to.have.descendant('.cr');
    expect(el.shadowRoot).to.have.descendant('.ppv');
    expect(el.shadowRoot).to.have.descendant('.fomr');
  });

  it('can display accuracy', async () => {
    const el = await fixture(html`<detectable-table numeric summary="accuracy"></detectable-table>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner').with.length(5);
    expect(el.shadowRoot).to.have.descendant('.h');
    expect(el.shadowRoot).to.have.descendant('.m');
    expect(el.shadowRoot).to.have.descendant('.fa');
    expect(el.shadowRoot).to.have.descendant('.cr');
    expect(el.shadowRoot).to.have.descendant('.acc');
  });

  it('can display all marginals', async () => {
    const el = await fixture(html`<detectable-table numeric summary="stimulusRates responseRates accuracy"></detectable-table>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner').with.length(9);
    expect(el.shadowRoot).to.have.descendant('.h');
    expect(el.shadowRoot).to.have.descendant('.m');
    expect(el.shadowRoot).to.have.descendant('.fa');
    expect(el.shadowRoot).to.have.descendant('.cr');
    expect(el.shadowRoot).to.have.descendant('.hr');
    expect(el.shadowRoot).to.have.descendant('.far');
    expect(el.shadowRoot).to.have.descendant('.ppv');
    expect(el.shadowRoot).to.have.descendant('.fomr');
    expect(el.shadowRoot).to.have.descendant('.acc');
  });

  it('can be interactive', async () => {
    const el = await fixture(html`<detectable-table numeric interactive></detectable-table>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(4);
    expect(el.shadowRoot).to.have.descendant('.h decidables-spinner:not([disabled])').with.value(40);
    expect(el.shadowRoot).to.have.descendant('.m decidables-spinner:not([disabled])').with.value(60);
    expect(el.shadowRoot).to.have.descendant('.fa decidables-spinner:not([disabled])').with.value(75);
    expect(el.shadowRoot).to.have.descendant('.cr decidables-spinner:not([disabled])').with.value(25);
  });

  it('can accept interactive hit input', async () => {
    const el = await fixture(html`<detectable-table numeric interactive summary="stimulusRates responseRates accuracy" hits="100" misses="100" false-alarms="100" correct-rejections="100"></detectable-table>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(9);
    expect(el.shadowRoot).to.have.descendant('.h decidables-spinner:not([disabled])').with.value(100);
    expect(el.shadowRoot).to.have.descendant('.hr decidables-spinner:not([disabled])').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('.ppv decidables-spinner:not([disabled])').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('.acc decidables-spinner:not([disabled])').with.value(0.5);
    // Action
    const target = el.shadowRoot.querySelector('.h decidables-spinner').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '25'}); });
    await oneEvent(el, 'detectable-table-change');
    const {detail} = await oneEvent(el, 'detectable-table-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.h decidables-spinner:not([disabled])').with.value(25);
    expect(el.h).to.equal(25);
    expect(detail.h).to.equal(25);
    expect(el.shadowRoot).to.have.descendant('.hr decidables-spinner:not([disabled])').with.value(0.2);
    expect(el.shadowRoot).to.have.descendant('.ppv decidables-spinner:not([disabled])').with.value(0.2);
    expect(el.shadowRoot).to.have.descendant('.acc decidables-spinner:not([disabled])').with.value(0.385);
  });

  it('can accept interactive miss input', async () => {
    const el = await fixture(html`<detectable-table numeric interactive summary="stimulusRates responseRates accuracy" hits="100" misses="100" false-alarms="100" correct-rejections="100"></detectable-table>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(9);
    expect(el.shadowRoot).to.have.descendant('.m decidables-spinner:not([disabled])').with.value(100);
    expect(el.shadowRoot).to.have.descendant('.hr decidables-spinner:not([disabled])').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('.fomr decidables-spinner:not([disabled])').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('.acc decidables-spinner:not([disabled])').with.value(0.5);
    // Action
    const target = el.shadowRoot.querySelector('.m decidables-spinner').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '60'}); });
    await oneEvent(el, 'detectable-table-change');
    const {detail} = await oneEvent(el, 'detectable-table-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.m decidables-spinner:not([disabled])').with.value(60);
    expect(el.m).to.equal(60);
    expect(detail.m).to.equal(60);
    expect(el.shadowRoot).to.have.descendant('.hr decidables-spinner:not([disabled])').with.value(0.625);
    expect(el.shadowRoot).to.have.descendant('.fomr decidables-spinner:not([disabled])').with.value(0.375);
    expect(el.shadowRoot).to.have.descendant('.acc decidables-spinner:not([disabled])').with.value(0.556);
  });

  it('can accept interactive correct rejection input', async () => {
    const el = await fixture(html`<detectable-table numeric interactive summary="stimulusRates responseRates accuracy" hits="100" misses="100" false-alarms="100" correct-rejections="100"></detectable-table>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(9);
    expect(el.shadowRoot).to.have.descendant('.cr decidables-spinner:not([disabled])').with.value(100);
    expect(el.shadowRoot).to.have.descendant('.far decidables-spinner:not([disabled])').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('.fomr decidables-spinner:not([disabled])').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('.acc decidables-spinner:not([disabled])').with.value(0.5);
    // Action
    const target = el.shadowRoot.querySelector('.cr decidables-spinner').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '25'}); });
    await oneEvent(el, 'detectable-table-change');
    const {detail} = await oneEvent(el, 'detectable-table-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.cr decidables-spinner:not([disabled])').with.value(25);
    expect(el.cr).to.equal(25);
    expect(detail.cr).to.equal(25);
    expect(el.shadowRoot).to.have.descendant('.far decidables-spinner:not([disabled])').with.value(0.8);
    expect(el.shadowRoot).to.have.descendant('.fomr decidables-spinner:not([disabled])').with.value(0.8);
    expect(el.shadowRoot).to.have.descendant('.acc decidables-spinner:not([disabled])').with.value(0.385);
  });

  it('can accept interactive false alarm input', async () => {
    const el = await fixture(html`<detectable-table numeric interactive summary="stimulusRates responseRates accuracy" hits="100" misses="100" false-alarms="100" correct-rejections="100"></detectable-table>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(9);
    expect(el.shadowRoot).to.have.descendant('.fa decidables-spinner:not([disabled])').with.value(100);
    expect(el.shadowRoot).to.have.descendant('.far decidables-spinner:not([disabled])').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('.ppv decidables-spinner:not([disabled])').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('.acc decidables-spinner:not([disabled])').with.value(0.5);
    // Action
    const target = el.shadowRoot.querySelector('.fa decidables-spinner').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '60'}); });
    await oneEvent(el, 'detectable-table-change');
    const {detail} = await oneEvent(el, 'detectable-table-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.fa decidables-spinner:not([disabled])').with.value(60);
    expect(el.fa).to.equal(60);
    expect(detail.fa).to.equal(60);
    expect(el.shadowRoot).to.have.descendant('.far decidables-spinner:not([disabled])').with.value(0.375);
    expect(el.shadowRoot).to.have.descendant('.ppv decidables-spinner:not([disabled])').with.value(0.625);
    expect(el.shadowRoot).to.have.descendant('.acc decidables-spinner:not([disabled])').with.value(0.556);
  });

  it('can accept interactive hit rate input', async () => {
    const el = await fixture(html`<detectable-table numeric interactive summary="stimulusRates responseRates accuracy" hits="100" misses="100" false-alarms="100" correct-rejections="100"></detectable-table>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(9);
    expect(el.shadowRoot).to.have.descendant('.h decidables-spinner:not([disabled])').with.value(100);
    expect(el.shadowRoot).to.have.descendant('.m decidables-spinner:not([disabled])').with.value(100);
    expect(el.shadowRoot).to.have.descendant('.hr decidables-spinner:not([disabled])').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('.ppv decidables-spinner:not([disabled])').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('.fomr decidables-spinner:not([disabled])').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('.acc decidables-spinner:not([disabled])').with.value(0.5);
    // Action
    const target = el.shadowRoot.querySelector('.hr decidables-spinner').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '00.25'}); });
    await oneEvent(el, 'detectable-table-change');
    await oneEvent(el, 'detectable-table-change');
    await oneEvent(el, 'detectable-table-change');
    await oneEvent(el, 'detectable-table-change');
    const {detail} = await oneEvent(el, 'detectable-table-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.hr decidables-spinner:not([disabled])').with.value(0.25);
    expect(el.hr).to.equal(0.25);
    expect(detail.hr).to.equal(0.25);
    expect(el.shadowRoot).to.have.descendant('.h decidables-spinner:not([disabled])').with.value(50);
    expect(el.shadowRoot).to.have.descendant('.m decidables-spinner:not([disabled])').with.value(150);
    expect(el.shadowRoot).to.have.descendant('.ppv decidables-spinner:not([disabled])').with.value(0.333);
    expect(el.shadowRoot).to.have.descendant('.fomr decidables-spinner:not([disabled])').with.value(0.6);
    expect(el.shadowRoot).to.have.descendant('.acc decidables-spinner:not([disabled])').with.value(0.375);
  });

  it('can accept interactive false alarm rate input', async () => {
    const el = await fixture(html`<detectable-table numeric interactive summary="stimulusRates responseRates accuracy" hits="100" misses="100" false-alarms="100" correct-rejections="100"></detectable-table>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(9);
    expect(el.shadowRoot).to.have.descendant('.fa decidables-spinner:not([disabled])').with.value(100);
    expect(el.shadowRoot).to.have.descendant('.cr decidables-spinner:not([disabled])').with.value(100);
    expect(el.shadowRoot).to.have.descendant('.far decidables-spinner:not([disabled])').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('.ppv decidables-spinner:not([disabled])').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('.fomr decidables-spinner:not([disabled])').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('.acc decidables-spinner:not([disabled])').with.value(0.5);
    // Action
    const target = el.shadowRoot.querySelector('.far decidables-spinner').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '00.75'}); });
    await oneEvent(el, 'detectable-table-change');
    await oneEvent(el, 'detectable-table-change');
    await oneEvent(el, 'detectable-table-change');
    await oneEvent(el, 'detectable-table-change');
    const {detail} = await oneEvent(el, 'detectable-table-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.far decidables-spinner:not([disabled])').with.value(0.75);
    expect(el.far).to.equal(0.75);
    expect(detail.far).to.equal(0.75);
    expect(el.shadowRoot).to.have.descendant('.fa decidables-spinner:not([disabled])').with.value(150);
    expect(el.shadowRoot).to.have.descendant('.cr decidables-spinner:not([disabled])').with.value(50);
    expect(el.shadowRoot).to.have.descendant('.ppv decidables-spinner:not([disabled])').with.value(0.4);
    expect(el.shadowRoot).to.have.descendant('.fomr decidables-spinner:not([disabled])').with.value(0.667);
    expect(el.shadowRoot).to.have.descendant('.acc decidables-spinner:not([disabled])').with.value(0.375);
  });

  it('can accept interactive positive predictive value input', async () => {
    const el = await fixture(html`<detectable-table numeric interactive summary="stimulusRates responseRates accuracy" hits="100" misses="100" false-alarms="100" correct-rejections="100"></detectable-table>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(9);
    expect(el.shadowRoot).to.have.descendant('.h decidables-spinner:not([disabled])').with.value(100);
    expect(el.shadowRoot).to.have.descendant('.fa decidables-spinner:not([disabled])').with.value(100);
    expect(el.shadowRoot).to.have.descendant('.hr decidables-spinner:not([disabled])').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('.far decidables-spinner:not([disabled])').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('.ppv decidables-spinner:not([disabled])').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('.acc decidables-spinner:not([disabled])').with.value(0.5);
    // Action
    const target = el.shadowRoot.querySelector('.ppv decidables-spinner').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '00.8'}); });
    await oneEvent(el, 'detectable-table-change');
    await oneEvent(el, 'detectable-table-change');
    await oneEvent(el, 'detectable-table-change');
    const {detail} = await oneEvent(el, 'detectable-table-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.ppv decidables-spinner:not([disabled])').with.value(0.8);
    expect(el.ppv).to.equal(0.8);
    expect(detail.ppv).to.equal(0.8);
    expect(el.shadowRoot).to.have.descendant('.h decidables-spinner:not([disabled])').with.value(160);
    expect(el.shadowRoot).to.have.descendant('.fa decidables-spinner:not([disabled])').with.value(40);
    expect(el.shadowRoot).to.have.descendant('.hr decidables-spinner:not([disabled])').with.value(0.615);
    expect(el.shadowRoot).to.have.descendant('.far decidables-spinner:not([disabled])').with.value(0.286);
    expect(el.shadowRoot).to.have.descendant('.acc decidables-spinner:not([disabled])').with.value(0.65);
  });

  it('can accept interactive false omission rate input', async () => {
    const el = await fixture(html`<detectable-table numeric interactive summary="stimulusRates responseRates accuracy" hits="100" misses="100" false-alarms="100" correct-rejections="100"></detectable-table>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(9);
    expect(el.shadowRoot).to.have.descendant('.m decidables-spinner:not([disabled])').with.value(100);
    expect(el.shadowRoot).to.have.descendant('.cr decidables-spinner:not([disabled])').with.value(100);
    expect(el.shadowRoot).to.have.descendant('.hr decidables-spinner:not([disabled])').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('.far decidables-spinner:not([disabled])').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('.fomr decidables-spinner:not([disabled])').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('.acc decidables-spinner:not([disabled])').with.value(0.5);
    // Action
    const target = el.shadowRoot.querySelector('.fomr decidables-spinner').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '00.2'}); });
    await oneEvent(el, 'detectable-table-change');
    await oneEvent(el, 'detectable-table-change');
    await oneEvent(el, 'detectable-table-change');
    const {detail} = await oneEvent(el, 'detectable-table-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.fomr decidables-spinner:not([disabled])').with.value(0.2);
    expect(el.fomr).to.equal(0.2);
    expect(detail.fomr).to.equal(0.2);
    expect(el.shadowRoot).to.have.descendant('.m decidables-spinner:not([disabled])').with.value(40);
    expect(el.shadowRoot).to.have.descendant('.cr decidables-spinner:not([disabled])').with.value(160);
    expect(el.shadowRoot).to.have.descendant('.hr decidables-spinner:not([disabled])').with.value(0.714);
    expect(el.shadowRoot).to.have.descendant('.far decidables-spinner:not([disabled])').with.value(0.385);
    expect(el.shadowRoot).to.have.descendant('.acc decidables-spinner:not([disabled])').with.value(0.65);
  });


  it('can accept interactive accuracy input', async () => {
    const el = await fixture(html`<detectable-table numeric interactive summary="stimulusRates responseRates accuracy" hits="100" misses="100" false-alarms="100" correct-rejections="100"></detectable-table>`);
    expect(el.shadowRoot).to.have.descendants('decidables-spinner:not([disabled])').with.length(9);
    expect(el.shadowRoot).to.have.descendant('.h decidables-spinner:not([disabled])').with.value(100);
    expect(el.shadowRoot).to.have.descendant('.m decidables-spinner:not([disabled])').with.value(100);
    expect(el.shadowRoot).to.have.descendant('.fa decidables-spinner:not([disabled])').with.value(100);
    expect(el.shadowRoot).to.have.descendant('.cr decidables-spinner:not([disabled])').with.value(100);
    expect(el.shadowRoot).to.have.descendant('.hr decidables-spinner:not([disabled])').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('.far decidables-spinner:not([disabled])').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('.fomr decidables-spinner:not([disabled])').with.value(0.5);
    expect(el.shadowRoot).to.have.descendant('.acc decidables-spinner:not([disabled])').with.value(0.5);
    // Action
    const target = el.shadowRoot.querySelector('.acc decidables-spinner').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '00.4'}); });
    await oneEvent(el, 'detectable-table-change');
    await oneEvent(el, 'detectable-table-change');
    await oneEvent(el, 'detectable-table-change');
    const {detail} = await oneEvent(el, 'detectable-table-change');
    // Check
    expect(el.shadowRoot).to.have.descendant('.acc decidables-spinner:not([disabled])').with.value(0.4);
    expect(el.acc).to.equal(0.4);
    expect(detail.acc).to.equal(0.4);
    expect(el.shadowRoot).to.have.descendant('.h decidables-spinner:not([disabled])').with.value(80);
    expect(el.shadowRoot).to.have.descendant('.m decidables-spinner:not([disabled])').with.value(120);
    expect(el.shadowRoot).to.have.descendant('.fa decidables-spinner:not([disabled])').with.value(120);
    expect(el.shadowRoot).to.have.descendant('.cr decidables-spinner:not([disabled])').with.value(80);
    expect(el.shadowRoot).to.have.descendant('.hr decidables-spinner:not([disabled])').with.value(0.4);
    expect(el.shadowRoot).to.have.descendant('.far decidables-spinner:not([disabled])').with.value(0.6);
    expect(el.shadowRoot).to.have.descendant('.ppv decidables-spinner:not([disabled])').with.value(0.4);
    expect(el.shadowRoot).to.have.descendant('.fomr decidables-spinner:not([disabled])').with.value(0.6);
  });
});
