import {
  expect,
  fixture,
  html,
  oneEvent,
  mouseClickElement,
} from '../../../../scripts/test-utility';

import '../../src/components/accumulable-control';
import '../../src/components/accumulable-response';
import '../../src/components/accumulable-table';
import '../../src/components/ddm-model';
import '../../src/components/ddm-parameters';
import '../../src/components/rdk-2afc-task';
import '../../src/examples/human';

describe('ddm-example-human', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`
      <ddm-example-human>
        <accumulable-control trials="10" duration="1000" coherence="0.4" color="outcome" run pause reset></accumulable-control>
        <rdk-2afc-task trials="10"></rdk-2afc-task>
        <accumulable-response interactive trial feedback></accumulable-response>
        <accumulable-table numeric summary color="outcome"></accumulable-table>
        <ddm-parameters></ddm-parameters>
        <ddm-model human measures means sds></ddm-model>
      </ddm-example-human>
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
      <ddm-example-human>
        <accumulable-control trials="10" duration="1000" coherence="0.4" color="outcome" run pause reset></accumulable-control>
        <rdk-2afc-task trials="10"></rdk-2afc-task>
        <accumulable-response interactive trial feedback></accumulable-response>
        <accumulable-table numeric summary color="outcome"></accumulable-table>
        <ddm-parameters></ddm-parameters>
        <ddm-model human measures means sds seed="0.12345"></ddm-model>
      </ddm-example-human>
    `);
    expect(el).lightDom.to.equal(`
      <accumulable-control trials="10" duration="1000" coherence="0.4" color="outcome" run pause reset class="keyboard"></accumulable-control>
      <rdk-2afc-task trials="10" coherence="0.5" count="100" probability="0.5" duration="2000" wait="2000" iti="2000" class="keyboard"></rdk-2afc-task>
      <accumulable-response interactive trial feedback payoff="none" correct-payoff="0" error-payoff="0" no-response-payoff="0" class="keyboard"></accumulable-response>
      <accumulable-table numeric summary color="outcome" correct-count="NaN" error-count="NaN" nr-count="NaN" accuracy="NaN" correct-mean-rt="NaN" error-mean-rt="NaN" mean-rt="NaN" correct-sd-rt="NaN" error-sd-rt="NaN" sd-rt="NaN" class="keyboard"></accumulable-table>
      <ddm-parameters class="keyboard"></ddm-parameters>
      <ddm-model human measures means sds seed="0.12345" trials="0" boundary-separation="1.2" starting-point="0.35" drift-rate="1.5" nondecision-time="150" class="keyboard"></ddm-model>
    `);
  });

  it('can run a task', async () => {
    const el = await fixture(html`
      <ddm-example-human>
        <accumulable-control trials="10" duration="1000" coherence="0.4" color="outcome" run pause reset></accumulable-control>
        <rdk-2afc-task trials="10"></rdk-2afc-task>
        <accumulable-response interactive trial feedback></accumulable-response>
        <accumulable-table numeric summary color="outcome"></accumulable-table>
        <ddm-parameters></ddm-parameters>
        <ddm-model human measures means sds seed="0.12345"></ddm-model>
      </ddm-example-human>
    `);
    // Action: start task
    const target = el.querySelector('accumulable-control').shadowRoot.querySelector('decidables-button[name="run"]');
    setTimeout(() => { mouseClickElement(target); });
    await oneEvent(el, 'rdk-trial-start');
    // Action: respond to stimulus
    const target2 = el.querySelector('accumulable-response').shadowRoot.querySelector('decidables-button[name="left"]');
    setTimeout(() => { mouseClickElement(target2); });
    const {detail} = await oneEvent(el, 'accumulable-response');
    // Check "after" state
    expect(el.accumulableControl).to.include({state: 'running'});
    expect(el.rdkTask).to.include({running: true, trial: 1});
    expect(el.accumulableResponse).to.include({response: 'left'});
    if (detail.outcome === 'correct') {
      expect(el.accumulableTable).to.include({correctCount: 1, errorCount: 0});
      // expect(el.ddm-parameters ???
      expect(el.ddmModel.shadowRoot).to.have.descendants('.rt.correct').with.length(1);
      expect(el.ddmModel.shadowRoot).to.not.have.descendants('.rt.error');
    } else {
      expect(el.accumulableTable).to.include({correctCount: 0, errorCount: 1});
      // expect(el.ddm-parameters ???
      expect(el.ddmModel.shadowRoot).to.have.descendants('.rt.error').with.length(1);
      expect(el.ddmModel.shadowRoot).to.not.have.descendants('.rt.correct');
    }
  });

  it('connects the components properly');
});
