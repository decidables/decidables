import {
  expect,
  fixture,
  html,
  oneEvent,
} from '../../../../scripts/test';

import '../../src/components/risky-task';

describe('risky-choice', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`<risky-task></risky-task>`);
    expect(el).shadowDom.to.equal(`
      <div class="holder">
        <risky-choice class="keyboard" loss="0" probability="0" state="blank" sure="0" win="0"></risky-choice>
      </div>
    `);
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<risky-task></risky-task>`);
    expect(el).lightDom.to.equal('');
  });

  it('can run', async () => {
    const el = await fixture(html`<risky-task></risky-task>`);
    setTimeout(() => { el.running = true; });
    const {detail} = await oneEvent(el, 'risky-block-start');
    expect(detail).to.have.property('trials');
  });

  it('can pause');

  it('can reset', async () => {
    const el = await fixture(html`<risky-task></risky-task>`);
    setTimeout(() => { el.running = true; });
    await oneEvent(el, 'risky-block-start');
    el.reset();
    expect(el.running).to.equal(false);
  });

  it('can run a trial', async () => {
    const el = await fixture(html`<risky-task duration="100" wait="100" iti="100"></risky-task>`);
    setTimeout(() => { el.running = true; });
    const {detail: startDetail} = await oneEvent(el, 'risky-trial-start');
    const {detail: endDetail} = await oneEvent(el, 'risky-trial-end');
    expect(startDetail).to.include({trial: 1});
    expect(endDetail).to.include({trial: 1});
  });

  it('can run a block', async () => {
    const el = await fixture(html`<risky-task duration="100" wait="100" iti="100" trials="2"></risky-task>`);
    setTimeout(() => { el.running = true; });
    const {detail: startDetail} = await oneEvent(el, 'risky-block-start');
    const {detail: trial1Detail} = await oneEvent(el, 'risky-trial-start');
    const {detail: trial2Detail} = await oneEvent(el, 'risky-trial-start');
    const {detail: endDetail} = await oneEvent(el, 'risky-block-end');
    expect(startDetail).to.include({trials: 2});
    expect(trial1Detail).to.include({trial: 1});
    expect(trial2Detail).to.include({trial: 2});
    expect(endDetail).to.include({trials: 2});
  });

  it('has lots of attributes that need testing');
});
