import {
  expect,
  fixture,
  html,
  oneEvent,
  mouseClickElement,
} from '../../../../scripts/test';

import '../../src/examples/human';
import '../../src/components';

describe('sdt-example-human', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`
      <sdt-example-human>
        <detectable-control coherence="0.5" trials="10" duration="1000" run pause reset></detectable-control>
        <rdk-task coherence="0.5" trials="10" duration="1000" wait="1000" iti="1000"></rdk-task>
        <detectable-response interactive trial feedback="outcome"></detectable-response>
        <detectable-table numeric summary="stimulusRates accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0"></detectable-table>
        <roc-space point="all" iso-d="all" iso-c="all" far="0.5" hr="0.5"></roc-space>
        <sdt-model threshold bias distributions sensitivity histogram color="outcome" d="0" c="0"></sdt-model>
      </sdt-example-human>
    `);
    // Give the component a chance to render!
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
      <sdt-example-human>
        <detectable-control coherence="0.5" trials="10" duration="1000" run pause reset></detectable-control>
        <rdk-task coherence="0.5" trials="10" duration="1000" wait="1000" iti="1000"></rdk-task>
        <detectable-response interactive trial feedback="outcome"></detectable-response>
        <detectable-table numeric summary="stimulusRates accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0"></detectable-table>
        <roc-space point="all" iso-d="all" iso-c="all" far="0.5" hr="0.5"></roc-space>
        <sdt-model threshold bias distributions sensitivity histogram color="outcome" d="0" c="0"></sdt-model>
      </sdt-example-human>
    `);
    expect(el).lightDom.to.equal(`
      <detectable-control class="keyboard" coherence="0.5" duration="1000" pause reset run trials="10"></detectable-control>
      <rdk-task class="keyboard" coherence="0.5" count="100" duration="1000" iti="1000" probability="0.5" trials="10" wait="1000"></rdk-task>
      <detectable-response class="keyboard" correct-rejection-payoff="0" false-alarm-payoff="0" feedback="outcome" hit-payoff="0" interactive miss-payoff="0" no-response-payoff="0" payoff="none" trial></detectable-response>
      <detectable-table class="keyboard" color="outcome" correct-rejections="0" false-alarms="0" hits="0" misses="0" numeric summary="stimulusRates accuracy"></detectable-table>
      <roc-space class="keyboard" far="0.5" hr="0.5" iso-c="all" iso-d="all" point="all"></roc-space>
      <sdt-model bias c="0" class="keyboard" color="outcome" d="0" distributions histogram s="1" sensitivity threshold></sdt-model>
    `);
  });

  it('can run a task', async () => {
    const el = await fixture(html`
      <sdt-example-human>
        <detectable-control coherence="0.5" trials="10" duration="1000" run pause reset></detectable-control>
        <rdk-task coherence="0.5" trials="10" duration="1000" wait="1000" iti="1000"></rdk-task>
        <detectable-response interactive trial feedback="outcome"></detectable-response>
        <detectable-table numeric summary="stimulusRates accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0"></detectable-table>
        <roc-space point="all" iso-d="all" iso-c="all" far="0.5" hr="0.5"></roc-space>
        <sdt-model threshold bias distributions sensitivity histogram color="outcome" d="0" c="0"></sdt-model>
      </sdt-example-human>
    `);
    // Action: start task
    const target = el.querySelector('detectable-control').shadowRoot.querySelector('decidables-button[name="run"]');
    setTimeout(() => { mouseClickElement(target); });
    await oneEvent(el, 'rdk-trial-start');
    // Action: respond to stimulus
    const target2 = el.querySelector('detectable-response').shadowRoot.querySelector('decidables-button[name="present"]');
    setTimeout(() => { mouseClickElement(target2); });
    const {detail} = await oneEvent(el, 'detectable-response');
    // Check "after" state
    expect(el.detectableControl).to.include({state: 'running'});
    expect(el.rdkTask).to.include({running: true, trial: 1});
    expect(el.detectableResponse).to.include({response: 'present'});
    if (detail.outcome === 'h') {
      expect(el.detectableTable).to.include({h: 1, fa: 0});
      expect(el.rocSpace.hr).to.be.almost(0.667, 0.001);
      expect(el.rocSpace.far).to.be.almost(0.5, 0.001);
      expect(el.sdtModel.c).to.be.almost(-0.216, 0.001);
    } else {
      expect(el.detectableTable).to.include({h: 0, fa: 1});
      expect(el.rocSpace.hr).to.be.almost(0.5, 0.001);
      expect(el.rocSpace.far).to.be.almost(0.667, 0.001);
      expect(el.sdtModel.c).to.be.almost(-0.216, 0.001);
    }
  });

  it('connects the components properly');
});
