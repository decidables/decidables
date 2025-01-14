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
import '../../src/examples/model';

describe('ddm-example-model', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`
      <ddm-example-model>
        <accumulable-control trials="10" run pause reset></accumulable-control>
        <rdk-2afc-task trials="10"></rdk-2afc-task>
        <ddm-parameters interactive></ddm-parameters>
        <ddm-model interactive measures means sds></ddm-model>
        <accumulable-response trial feedback></accumulable-response>
        <accumulable-table numeric summary color="outcome"></accumulable-table>
      </ddm-example-model>
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
      <ddm-example-model>
        <accumulable-control trials="10" run pause reset></accumulable-control>
        <rdk-2afc-task trials="10"></rdk-2afc-task>
        <ddm-parameters interactive></ddm-parameters>
        <ddm-model interactive measures means sds></ddm-model>
        <accumulable-response trial feedback></accumulable-response>
        <accumulable-table numeric summary color="outcome"></accumulable-table>
      </ddm-example-model>
    `);
    expect(el).lightDom.to.equal(`
      <accumulable-control trials="10" run pause reset class="keyboard" duration="2000" coherence="0.5" color="outcome"></accumulable-control>
      <rdk-2afc-task trials="10" coherence="0.5" count="100" probability="0.5" duration="2000" wait="2000" iti="2000" class="keyboard"></rdk-2afc-task>
      <ddm-parameters interactive class="keyboard" boundary-separation="1.2" starting-point="0.35" drift-rate="1.5" nondecision-time="150"></ddm-parameters>
      <ddm-model interactive measures means sds seed="0.1412855550639449" trials="0" boundary-separation="1.2" starting-point="0.35" drift-rate="1.5" nondecision-time="150" class="keyboard"></ddm-model>
      <accumulable-response trial feedback payoff="none" correct-payoff="0" error-payoff="0" no-response-payoff="0" class="keyboard"></accumulable-response>
      <accumulable-table numeric summary color="outcome" correct-count="0" error-count="0" nr-count="0" accuracy="NaN" correct-mean-rt="NaN" error-mean-rt="NaN" mean-rt="NaN" correct-sd-rt="NaN" error-sd-rt="NaN" sd-rt="NaN" class="keyboard"></accumulable-table>
    `, {ignoreAttributes: ['seed']});
  });

  it('can run a task', async () => {
    const el = await fixture(html`
      <ddm-example-model>
      <accumulable-control trials="10" run pause reset></accumulable-control>
        <rdk-2afc-task trials="10"></rdk-2afc-task>
        <ddm-parameters interactive></ddm-parameters>
        <ddm-model interactive measures means sds></ddm-model>
        <accumulable-response trial feedback></accumulable-response>
        <accumulable-table numeric summary color="outcome"></accumulable-table>
      </ddm-example-model>
    `);
    // Action: start task
    const target = el.querySelector('accumulable-control').shadowRoot.querySelector('decidables-button[name="run"]');
    setTimeout(() => { mouseClickElement(target); });
    await oneEvent(el, 'rdk-trial-start');
    const {detail} = await oneEvent(el, 'accumulable-response');
    // Check "after" state
    expect(el.accumulableControl).to.include({state: 'running'});
    expect(el.rdkTask).to.include({running: true, trial: 1});
    expect(el.accumulableResponse.response).to.be.oneOf(['left', 'right']);
    if (detail.outcome === 'correct') {
      expect(el.accumulableTable).to.include({correctCount: 1, errorCount: 0, accuracy: 1});
      // expect(el.ddm-parameters ???
      expect(el.ddmModel.shadowRoot).to.have.descendants('.rt.correct').with.length(1);
      expect(el.ddmModel.shadowRoot).to.not.have.descendants('.rt.error');
    } else if (detail.outcome === 'error') {
      expect(el.accumulableTable).to.include({correctCount: 0, errorCount: 1, accuracy: 0});
      // expect(el.ddm-parameters ???
      expect(el.ddmModel.shadowRoot).to.have.descendants('.rt.error').with.length(1);
      expect(el.ddmModel.shadowRoot).to.not.have.descendants('.rt.correct');
    }
  });

  // it('connects the components properly');
});
