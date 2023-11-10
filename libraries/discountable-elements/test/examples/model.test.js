import {
  expect,
  fixture,
  html,
  oneEvent,
  mouseClickElement,
} from '../../../../scripts/test';

import '../../src/components/discountable-control';
import '../../src/components/discountable-response';
// import '../../src/components/htd-calculation';
import '../../src/components/htd-curves';
import '../../src/components/itc-task';
import '../../src/examples/model';

describe('htd-example-model', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`
      <htd-example-model k="0.2" >
        <discountable-control trials="10" run pause reset></discountable-control>
        <itc-task trials="10"></itc-task>
        <htd-curves interactive></htd-curves>
        <discountable-response trial feedback></discountable-response>
      </htd-example-model>
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
      <htd-example-model k="0.2" >
        <discountable-control trials="10" run pause reset></discountable-control>
        <itc-task trials="10"></itc-task>
        <htd-curves interactive></htd-curves>
        <discountable-response trial feedback></discountable-response>
      </htd-example-model>
    `);
    expect(el).lightDom.to.equal(`
      <discountable-control class="keyboard" trials="10" run pause reset></discountable-control>
      <itc-task class="keyboard" trials="10" duration="2000" iti="2000" ></itc-task>
      <htd-curves class="keyboard" interactive label="" k="0.2"></htd-curves>
      <discountable-response class="keyboard" trial feedback></discountable-response>
    `);
  });

  it('connects the components properly');

  it('can run a task', async () => {
    const el = await fixture(html`
      <htd-example-model k="0.2" >
        <discountable-control trials="10" run pause reset></discountable-control>
        <itc-task trials="10"></itc-task>
        <htd-curves interactive></htd-curves>
        <discountable-response trial feedback></discountable-response>
      </htd-example-model>
    `);
    // Action: start task
    const target = el.querySelector('discountable-control').shadowRoot.querySelector('decidables-button[name="run"]');
    setTimeout(() => { mouseClickElement(target); });
    await oneEvent(el, 'itc-trial-start');
    const {detail} = await oneEvent(el, 'discountable-response');
    // Check "after" state
    expect(el.discountableControl).to.include({state: 'running'});
    expect(el.itcTask).to.include({running: true});
    expect(el.discountableResponse.response).to.be.oneOf(['first', 'second']);
    expect(detail.response).to.be.oneOf(['first', 'second']);
  });
});
