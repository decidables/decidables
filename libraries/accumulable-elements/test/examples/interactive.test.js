import {
  aTimeout,
  expect,
  fixture,
  html,
  oneEvent,
  mouseClickElement,
  mouseDragElement,
} from '../../../../scripts/test-utility';

import '../../src/components/accumulable-control';
import '../../src/components/accumulable-table';
import '../../src/components/ddm-model';
import '../../src/components/ddm-parameters';
import '../../src/examples/interactive';

describe('ddm-example-interactive', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`
      <ddm-example-interactive>
        <accumulable-control trials="10" resample></accumulable-control>
        <ddm-parameters interactive></ddm-parameters>
        <ddm-model interactive measures means sds></ddm-model>
        <accumulable-table numeric summary color="outcome"></accumulable-table>
      </ddm-example-interactive>
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
      <ddm-example-interactive>
        <accumulable-control trials="10" resample></accumulable-control>
        <ddm-parameters interactive></ddm-parameters>
        <ddm-model interactive measures means sds></ddm-model>
        <accumulable-table numeric summary color="outcome"></accumulable-table>
      </ddm-example-interactive>
    `);
    expect(el).lightDom.to.equal(`
      <accumulable-control trials="10" resample class="keyboard"></accumulable-control>
      <ddm-parameters interactive="" class="keyboard" boundary-separation="1.2" starting-point="0.35" drift-rate="1.5" nondecision-time="150"></ddm-parameters>
      <ddm-model interactive measures means sds trials="10" boundary-separation="1.2" starting-point="0.35" drift-rate="1.5" nondecision-time="150" class="keyboard"></ddm-model>
      <accumulable-table numeric summary color="outcome" class="keyboard"></accumulable-table>
    `, {
      ignoreAttributes: [
        'seed',
        'correct-count', 'error-count', 'nr-count',
        'accuracy',
        'correct-mean-rt', 'error-mean-rt', 'mean-rt',
        'correct-sd-rt', 'error-sd-rt', 'sd-rt',
      ],
    });
  });

  it('can propagate a control interaction', async () => {
    const el = await fixture(html`
      <ddm-example-interactive boundary-separation="0.5">
        <accumulable-control trials="10" resample></accumulable-control>
        <ddm-parameters interactive></ddm-parameters>
        <ddm-model interactive measures means sds></ddm-model>
        <accumulable-table numeric summary color="outcome"></accumulable-table>
      </ddm-example-interactive>
    `);
    // Check "before" state
    expect(el.accumulableControl.trials).to.equal(10);
    expect(el.ddmModel.trials).to.equal(el.accumulableControl.trials);
    // Action
    const target = el.querySelector('accumulable-control').shadowRoot.querySelector('decidables-slider.trials');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'accumulable-control-trials');
    // Check "after" state
    expect(detail.trials).to.not.equal(10);
    expect(el.accumulableControl.trials).to.not.equal(10);
    expect(el.ddmModel.trials).to.equal(el.accumulableControl.trials);
  });

  it('can propagate a parameter interaction', async () => {
    const el = await fixture(html`
      <ddm-example-interactive boundary-separation="0.5">
        <accumulable-control trials="10" resample></accumulable-control>
        <ddm-parameters interactive></ddm-parameters>
        <ddm-model interactive measures means sds></ddm-model>
        <accumulable-table numeric summary color="outcome"></accumulable-table>
      </ddm-example-interactive>
    `);
    // Check "before" state
    expect(el.ddmParameters.a).to.equal(0.5);
    expect(el.ddmModel.a).to.equal(el.ddmParameters.a);
    // Action
    const target = el.querySelector('ddm-parameters').shadowRoot.querySelector('decidables-slider.a');
    setTimeout(() => { mouseClickElement(target); });
    const {detail} = await oneEvent(el, 'ddm-parameters-a');
    // Check "after" state
    expect(detail.a).to.not.equal(0.5);
    expect(el.ddmParameters.a).to.not.equal(0.5);
    expect(el.ddmModel.a).to.equal(el.ddmParameters.a);
  });

  it('can propagate a model interaction', async () => {
    const el = await fixture(html`
      <ddm-example-interactive starting-point="0.3">
        <accumulable-control trials="10" resample></accumulable-control>
        <ddm-parameters interactive></ddm-parameters>
        <ddm-model interactive measures means sds style="--transition-duration: 0;"></ddm-model>
        <accumulable-table numeric summary color="outcome"></accumulable-table>
      </ddm-example-interactive>
    `);
    // Wait for resize?
    await aTimeout(200);
    // Check "before" state
    expect(el.ddmModel.z).to.equal(0.3);
    expect(el.ddmParameters.z).to.equal(el.ddmModel.z);
    // Action
    const target = el.querySelector('ddm-model').shadowRoot.querySelector('.t0z.interactive');
    setTimeout(() => { mouseDragElement(target, 0, 50); });
    const {detail} = await oneEvent(el, 'ddm-model-z');
    // Check "after" state
    expect(detail.z).to.not.equal(0.3);
    expect(el.ddmModel.z).to.not.equal(0.3);
    expect(el.ddmParameters.z).to.equal(el.ddmModel.z);
  });

  it('connects the components properly');
});
