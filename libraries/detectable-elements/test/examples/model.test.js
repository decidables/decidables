import {
  expect,
  fixture,
  html,
  oneEvent,
  mouseClickElement,
} from '../../../../scripts/test-utility';

import '../../src/examples/model';
import '../../src/components';

describe('sdt-example-model', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`
      <sdt-example-model trials="10" duration="500" coherence="0.5" color="all" d="1" c="0.5">
        <detectable-control trials duration coherence run pause reset></detectable-control>
        <rdk-task></rdk-task>
        <sdt-parameters interactive d c s></sdt-parameters>
        <sdt-model interactive threshold bias distributions sensitivity histogram></sdt-model>
        <detectable-response trial feedback="outcome"></detectable-response>
        <detectable-table numeric summary="stimulusRates accuracy"></detectable-table>
        <roc-space point="all" iso-d="all" iso-c="all"></roc-space>
      </sdt-example-model>
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
      <sdt-example-model trials="10" duration="500" coherence="0.5" color="all" d="1" c="0.5">
        <detectable-control trials duration coherence run pause reset></detectable-control>
        <rdk-task></rdk-task>
        <sdt-parameters interactive d c s></sdt-parameters>
        <sdt-model interactive threshold bias distributions sensitivity histogram></sdt-model>
        <detectable-response trial feedback="outcome"></detectable-response>
        <detectable-table numeric summary="stimulusRates accuracy"></detectable-table>
        <roc-space point="all" iso-d="all" iso-c="all"></roc-space>
      </sdt-example-model>
    `);
    expect(el).lightDom.to.equal(`
      <detectable-control class="keyboard" coherence="0.5" duration="500" pause reset run trials="10"></detectable-control>
      <rdk-task class="keyboard" coherence="0.5" count="100" duration="500" iti="500" probability="0.5" trials="10" wait="500"></rdk-task>
      <sdt-parameters interactive class="keyboard" d="1" c="0.5" s="1"></sdt-parameters>
      <sdt-model interactive bias c="0.5" class="keyboard" color="all" d="1" distributions histogram s="1" sensitivity threshold></sdt-model>
      <detectable-response class="keyboard" correct-rejection-payoff="0" false-alarm-payoff="0" feedback="outcome" hit-payoff="0" miss-payoff="0" no-response-payoff="0" payoff="none" trial></detectable-response>
      <detectable-table class="keyboard" color="all" correct-rejections="0" false-alarms="0" hits="0" misses="0" numeric summary="stimulusRates accuracy"></detectable-table>
      <roc-space class="keyboard" far="0.5" hr="0.5" iso-c="all" iso-d="all" point="all"></roc-space>
    `);
  });

  it('can run a task', async () => {
    const el = await fixture(html`
      <sdt-example-model trials="10" duration="500" coherence="0.5" color="all" d="1" c="0.5">
        <detectable-control trials duration coherence run pause reset></detectable-control>
        <rdk-task></rdk-task>
        <sdt-parameters interactive d c s></sdt-parameters>
        <sdt-model interactive threshold bias distributions sensitivity histogram></sdt-model>
        <detectable-response trial feedback="outcome"></detectable-response>
        <detectable-table numeric summary="stimulusRates accuracy"></detectable-table>
        <roc-space point="all" iso-d="all" iso-c="all"></roc-space>
      </sdt-example-model>
    `);
    // Action: start task
    const target = el.querySelector('detectable-control').shadowRoot.querySelector('decidables-button[name="run"]');
    setTimeout(() => { mouseClickElement(target); });
    await oneEvent(el, 'rdk-trial-start');
    const {detail} = await oneEvent(el, 'detectable-response');
    // Check "after" state
    expect(el.detectableControl).to.include({state: 'running'});
    expect(el.rdkTask).to.include({running: true, trial: 1});
    expect(el.detectableResponse.response).to.be.oneOf(['present', 'absent']);
    if (detail.outcome === 'h') {
      expect(el).to.include({
        h: 1, m: 0, fa: 0, cr: 0,
      });
      expect(el.hr).to.be.almost(1, 0.001);
      expect(el.far).to.be.almost(0, 0.001);
      expect(el.c).to.be.almost(0.5, 0.001);
    } else if (detail.outcome === 'm') {
      expect(el).to.include({
        h: 0, m: 1, fa: 0, cr: 0,
      });
      expect(el.hr).to.be.almost(0, 0.001);
      expect(el.far).to.be.almost(0, 0.001);
      expect(el.c).to.be.almost(0.5, 0.001);
    } else if (detail.outcome === 'fa') {
      expect(el).to.include({
        h: 0, m: 0, fa: 1, cr: 0,
      });
      expect(el.hr).to.be.almost(0, 0.001);
      expect(el.far).to.be.almost(1, 0.001);
      expect(el.c).to.be.almost(0.5, 0.001);
    } else {
      expect(el).to.include({
        h: 0, m: 0, fa: 0, cr: 1,
      });
      expect(el.hr).to.be.almost(0, 0.001);
      expect(el.far).to.be.almost(0, 0.001);
      expect(el.c).to.be.almost(0.5, 0.001);
    }
  });

  it('connects the components properly');
});
