import {
  aTimeout,
  expect,
  fixture,
  html,
  oneEvent,
} from '../../../../scripts/test';

import '../../src/components/rdk-task';

describe('rdk-task', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<rdk-task></rdk-task>`);
    // Give the component a chance to render!
    await aTimeout();
    expect(el.shadowRoot).to.have.descendant('svg');
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<rdk-task></rdk-task>`);
    await aTimeout();
    expect(el).lightDom.to.equal('');
  });

  it('can run', async () => {
    const el = await fixture(html`<rdk-task></rdk-task>`);
    setTimeout(() => { el.running = true; });
    const {detail} = await oneEvent(el, 'rdk-block-start');
    expect(detail).to.have.property('trials');
  });

  it('can pause');

  it('can reset', async () => {
    const el = await fixture(html`<rdk-task></rdk-task>`);
    setTimeout(() => { el.running = true; });
    await oneEvent(el, 'rdk-block-start');
    el.reset();
    expect(el.running).to.equal(false);
  });

  it('can run a trial', async () => {
    const el = await fixture(html`<rdk-task duration="100" wait="100" iti="100"></rdk-task>`);
    setTimeout(() => { el.running = true; });
    const {detail: startDetail} = await oneEvent(el, 'rdk-trial-start');
    const {detail: middleDetail} = await oneEvent(el, 'rdk-trial-middle');
    const {detail: endDetail} = await oneEvent(el, 'rdk-trial-end');
    expect(startDetail).to.include({trial: 1});
    expect(middleDetail).to.include({trial: 1});
    expect(endDetail).to.include({trial: 1});
  });

  it('can run a block', async () => {
    const el = await fixture(html`<rdk-task duration="100" wait="100" iti="100" trials="2"></rdk-task>`);
    setTimeout(() => { el.running = true; });
    const {detail: startDetail} = await oneEvent(el, 'rdk-block-start');
    const {detail: trial1Detail} = await oneEvent(el, 'rdk-trial-start');
    const {detail: trial2Detail} = await oneEvent(el, 'rdk-trial-start');
    const {detail: endDetail} = await oneEvent(el, 'rdk-block-end');
    expect(startDetail).to.include({trials: 2});
    expect(trial1Detail).to.include({trial: 1});
    expect(trial2Detail).to.include({trial: 2});
    expect(endDetail).to.include({trials: 2});
  });

  it('has lots of attributes that need testing');
});
