import {
  expect,
  fixture,
  html,
  oneEvent,
  mouseClickElement,
} from '../../../../scripts/test-utility';

import '../../src/components/discountable-control';
import '../../src/components/discountable-response';
import '../../src/components/htd-curves';
import '../../src/components/htd-parameters';
import '../../src/components/itc-task';
import '../../src/examples/human';

describe('htd-example-human', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`
      <htd-example-human>
        <discountable-control trials duration run pause reset></discountable-control>
        <itc-task></itc-task>
        <discountable-response interactive trial feedback></discountable-response>
        <htd-parameters k></htd-parameters>
        <htd-curves></htd-curves>
        <!-- <htd-fit></htd-fit> -->
      </htd-example-human>
    `);
    expect(el).shadowDom.to.equal(`
      <div class="holder">
        <div class="body">
          <slot>
            Empty!
          </slot>
        </div>
      </div>
    `);
  });

  it('has a lightDom', async () => {
    const el = await fixture(html`
      <htd-example-human>
        <discountable-control trials duration run pause reset></discountable-control>
        <itc-task></itc-task>
        <discountable-response interactive trial feedback></discountable-response>
        <htd-parameters k></htd-parameters>
        <htd-curves></htd-curves>
        <!-- <htd-fit></htd-fit> -->
      </htd-example-human>
    `);
    expect(el).lightDom.to.equal(`
      <discountable-control trials="10" duration="2000" run pause reset></discountable-control>
      <itc-task trials="10" duration="2000" iti="2000"></itc-task>
      <discountable-response interactive trial feedback></discountable-response>
      <htd-parameters k="0.05"></htd-parameters>
      <htd-curves label="" k="0.05"></htd-curves>
    `);
  });

  it('can run a task', async () => {
    const el = await fixture(html`
      <htd-example-human>
        <discountable-control trials duration run pause reset></discountable-control>
        <itc-task></itc-task>
        <discountable-response interactive trial feedback></discountable-response>
        <htd-parameters k></htd-parameters>
        <htd-curves></htd-curves>
        <!-- <htd-fit></htd-fit> -->
      </htd-example-human>
    `);
    // Action: start task
    const target = el.querySelector('discountable-control').shadowRoot.querySelector('decidables-button[name="run"]');
    setTimeout(() => { mouseClickElement(target); });
    await oneEvent(el, 'itc-trial-start');
    // Action: respond to stimulus
    const target2 = el.querySelector('discountable-response').shadowRoot.querySelector('decidables-button[name="first"]');
    setTimeout(() => { mouseClickElement(target2); });
    const {detail} = await oneEvent(el, 'discountable-response');
    // Check "after" state
    expect(el.discountableControl).to.include({state: 'running'});
    expect(el.itcTask).to.include({running: true, trial: 1});
    expect(el.discountableResponse).to.include({response: 'first'});
    expect(detail).to.include({response: 'first', trial: 1});
  });

  it('connects the components properly');

  it('can include htd-curves and htd-fit');
});
