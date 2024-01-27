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
import '../../src/examples/model';

describe('cpt-example-model', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`
      <cpt-example-model alpha="0.9" lambda="2" gamma="0.75">
        <prospectable-control trials="10" run pause reset></prospectable-control>
        <risky-task trials="10"></risky-task>
        <cpt-probability interactive></cpt-probability>
        <cpt-value interactive></cpt-value>
        <prospectable-response trial feedback="outcome" payoff="both"></prospectable-response>
        <!-- <decision-space updateable point="rest" alpha="1" lambda="1" gamma="1"></decision-space> -->
      </cpt-example-model>
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
      <cpt-example-model alpha="0.9" lambda="2" gamma="0.75">
        <prospectable-control trials="10" run pause reset></prospectable-control>
        <risky-task trials="10"></risky-task>
        <cpt-probability interactive></cpt-probability>
        <cpt-value interactive></cpt-value>
        <prospectable-response trial feedback="outcome" payoff="both"></prospectable-response>
        <!-- <decision-space updateable point="rest" alpha="1" lambda="1" gamma="1"></decision-space> -->
      </cpt-example-model>
    `);
    expect(el).lightDom.to.equal(`
      <prospectable-control class="keyboard" trials="10" run pause reset></prospectable-control>
      <risky-task class="keyboard" trials="10" duration="2000" iti="2000"></risky-task>
      <cpt-probability class="keyboard" interactive gamma="0.75" label=""></cpt-probability>
      <cpt-value class="keyboard" interactive alpha="0.9" lambda="2" label=""></cpt-value>
      <prospectable-response class="keyboard" trial feedback="outcome" payoff="both"></prospectable-response>
    `);
  });

  it('can run a task', async () => {
    const el = await fixture(html`
      <cpt-example-model alpha="0.9" lambda="2" gamma="0.75">
        <prospectable-control trials="10" run pause reset></prospectable-control>
        <risky-task trials="10" duration="200" iti="200"></risky-task>
        <cpt-probability interactive></cpt-probability>
        <cpt-value interactive></cpt-value>
        <prospectable-response trial feedback="outcome" payoff="both"></prospectable-response>
        <!-- <decision-space updateable point="rest" alpha="1" lambda="1" gamma="1"></decision-space> -->
      </cpt-example-model>
    `);
    // Action: start task
    const target = el.querySelector('prospectable-control').shadowRoot.querySelector('decidables-button[name="run"]');
    setTimeout(() => { mouseClickElement(target); });
    await oneEvent(el, 'risky-trial-start');
    const {detail} = await oneEvent(el, 'prospectable-response');
    // Check "after" state
    expect(el.prospectableControl).to.include({state: 'running'});
    expect(el.riskyTask).to.include({running: true});
    expect(el.prospectableResponse.response).to.be.oneOf(['gamble', 'sure']);
    expect(detail.response).to.be.oneOf(['gamble', 'sure']);
  });

  it('connects the components properly');

  it('can include decision-space');
});
