import {
  expect,
  fixture,
  html,
  oneEvent,
} from '../../../../scripts/test-utility';

import '../../src/components/itc-task';

describe('itc-task', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<itc-task></itc-task>`);
    expect(el).shadowDom.to.equal(`
      <div class="holder">
        <itc-choice class="keyboard" state="blank" amount-ss="0" delay-ss="0" amount-ll="0" delay-ll="0">
        </itc-choice>
      </div>
    `);
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<itc-task></itc-task>`);
    expect(el).lightDom.to.equal('');
  });

  it('can run', async () => {
    const el = await fixture(html`<itc-task></itc-task>`);
    setTimeout(() => { el.running = true; });
    const {detail} = await oneEvent(el, 'itc-block-start');
    expect(detail).to.have.property('trials');
  });

  it('can pause');

  it('can reset', async () => {
    const el = await fixture(html`<itc-task></itc-task>`);
    setTimeout(() => { el.running = true; });
    await oneEvent(el, 'itc-block-start');
    el.reset();
    expect(el.running).to.equal(false);
  });

  it('can run a trial', async () => {
    const el = await fixture(html`<itc-task duration="100" wait="100" iti="100"></itc-task>`);
    setTimeout(() => { el.running = true; });
    const {detail: startDetail} = await oneEvent(el, 'itc-trial-start');
    const {detail: endDetail} = await oneEvent(el, 'itc-trial-end');
    expect(startDetail).to.include({trial: 1});
    expect(endDetail).to.include({trial: 1});
  });

  it('can run a block', async () => {
    const el = await fixture(html`<itc-task duration="100" wait="100" iti="100" trials="2"></itc-task>`);
    setTimeout(() => { el.running = true; });
    const {detail: startDetail} = await oneEvent(el, 'itc-block-start');
    const {detail: trial1Detail} = await oneEvent(el, 'itc-trial-start');
    const {detail: trial2Detail} = await oneEvent(el, 'itc-trial-start');
    const {detail: endDetail} = await oneEvent(el, 'itc-block-end');
    expect(startDetail).to.include({trials: 2});
    expect(trial1Detail).to.include({trial: 1});
    expect(trial2Detail).to.include({trial: 2});
    expect(endDetail).to.include({trials: 2});
  });

  it('has lots of attributes that need testing');
});
