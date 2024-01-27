import {
  expect,
  fixture,
  html,
  oneEvent,
  mouseClickElement,
} from '../../../../scripts/test-utility';

import '../../src/components/cpt-probability';
import '../../src/components/cpt-value';
import '../../src/components/prospectable-control';
import '../../src/components/prospectable-response';
import '../../src/components/risky-task';
import '../../src/examples/human';

describe('cpt-example-human', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`
      <cpt-example-human>
        <prospectable-control trials="10" run pause reset></prospectable-control>
        <risky-task trials="10"></risky-task>
        <prospectable-response interactive trial feedback="outcome" payoff="both"></prospectable-response>
        <cpt-probability></cpt-probability>
        <cpt-value></cpt-value>
        <!-- <decision-space point="rest" alpha="1" lambda="1" gamma="1"></decision-space> -->
        <!-- <cpt-fit></cpt-fit> -->
      </cpt-example-human>
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
      <cpt-example-human>
        <prospectable-control trials="10" run pause reset></prospectable-control>
        <risky-task trials="10"></risky-task>
        <prospectable-response interactive trial feedback="outcome" payoff="both"></prospectable-response>
        <cpt-probability></cpt-probability>
        <cpt-value></cpt-value>
        <!-- <decision-space point="rest" alpha="1" lambda="1" gamma="1"></decision-space> -->
        <!-- <cpt-fit></cpt-fit> -->
      </cpt-example-human>
    `);
    expect(el).lightDom.to.equal(`
      <prospectable-control class="keyboard" trials="10" run pause reset></prospectable-control>
      <risky-task class="keyboard" trials="10" duration="2000" iti="2000"></risky-task>
      <prospectable-response class="keyboard" interactive trial feedback="outcome" payoff="both"></prospectable-response>
      <cpt-probability class="keyboard" gamma="0.5" label=""></cpt-probability>
      <cpt-value class="keyboard" alpha="0.5" lambda="2" label=""></cpt-value>
    `);
  });

  it('can run a task', async () => {
    const el = await fixture(html`
      <cpt-example-human>
        <prospectable-control trials="10" run pause reset></prospectable-control>
        <risky-task trials="10" duration="100" iti="100"></risky-task>
        <prospectable-response interactive trial feedback="outcome" payoff="both"></prospectable-response>
        <cpt-probability></cpt-probability>
        <cpt-value></cpt-value>
        <!-- <decision-space point="rest" alpha="1" lambda="1" gamma="1"></decision-space> -->
        <!-- <cpt-fit></cpt-fit> -->
      </cpt-example-human>
    `);
    // Action: start task
    const target = el.querySelector('prospectable-control').shadowRoot.querySelector('decidables-button[name="run"]');
    setTimeout(() => { mouseClickElement(target); });
    await oneEvent(el, 'risky-trial-start');
    // Action: respond to stimulus
    const target2 = el.querySelector('prospectable-response').shadowRoot.querySelector('decidables-button[name="gamble"]');
    setTimeout(() => { mouseClickElement(target2); });
    const {detail} = await oneEvent(el, 'prospectable-response');
    // Check "after" state
    expect(el.prospectableControl).to.include({state: 'running'});
    expect(el.riskyTask).to.include({running: true, trial: 1});
    expect(el.prospectableResponse).to.include({response: 'gamble'});
    expect(detail).to.include({response: 'gamble', trial: 1});
  });

  it('connects the components properly');

  it('can include decision-space and cpt-fit');
});
