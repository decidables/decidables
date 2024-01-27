import {
  expect,
  fixture,
  html,
  oneEvent,
  sendKeys,
} from '../../../../scripts/test-utility';

import '../../src/examples/double-interactive';
import '../../src/components';

describe('sdt-example-double-interactive', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`
      <sdt-example-double-interactive>
        <sdt-model interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
        <detectable-table numeric interactive summary="stimulusRates accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0"></detectable-table>
        <roc-space interactive contour="accuracy" point="all" iso-d="none" iso-c="none"></roc-space>
        <detectable-table numeric interactive summary="stimulusRates accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0"></detectable-table>
        <sdt-model interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
      </sdt-example-double-interactive>
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
      <sdt-example-double-interactive>
        <sdt-model interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
        <detectable-table numeric interactive summary="stimulusRates accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0"></detectable-table>
        <roc-space interactive contour="accuracy" point="all" iso-d="none" iso-c="none"></roc-space>
        <detectable-table numeric interactive summary="stimulusRates accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0"></detectable-table>
        <sdt-model interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
      </sdt-example-double-interactive>
    `);
    expect(el).lightDom.to.equal(`
      <sdt-model class="keyboard" interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
      <detectable-table class="keyboard" color="all" numeric interactive summary="stimulusRates accuracy" hits="95" misses="5" false-alarms="35" correct-rejections="65"></detectable-table>
      <roc-space class="keyboard" contour="accuracy" interactive iso-c="none" iso-d="none" point="all"></roc-space>
      <detectable-table class="keyboard" color="all" numeric interactive summary="stimulusRates accuracy" hits="40" misses="60" false-alarms="20" correct-rejections="80"></detectable-table>
      <sdt-model class="keyboard" interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
    `, {ignoreAttributes: ['hr', 'far', 'c', 'd', 's']});
  });

  it('can propagate a first table interaction', async () => {
    const el = await fixture(html`
      <sdt-example-double-interactive>
        <sdt-model interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
        <detectable-table numeric interactive summary="stimulusRates accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0"></detectable-table>
        <roc-space interactive contour="accuracy" point="all" iso-d="none" iso-c="none"></roc-space>
        <detectable-table numeric interactive summary="stimulusRates accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0"></detectable-table>
        <sdt-model interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
      </sdt-example-double-interactive>
    `);
    // Action
    const target = el.querySelector('detectable-table:nth-of-type(1)').shadowRoot.querySelector('.h decidables-spinner').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '50'}); });
    await oneEvent(el, 'detectable-table-change');
    await oneEvent(el, 'detectable-table-change');
    // Check "after" state
    expect(el.detectableTableOne).to.include({
      h: 50, m: 5, fa: 35, cr: 65,
    });
    expect(el.rocSpace.hr).to.be.almost(0.909, 0.001);
    expect(el.sdtModelOne.c).to.be.almost(-0.475, 0.001);
    expect(el.detectableTableTwo).to.include({
      h: 40, m: 60, fa: 20, cr: 80,
    });
    expect(el.rocSpace.locations[1].hr).to.be.almost(0.4, 0.001);
    expect(el.sdtModelTwo.c).to.be.almost(0.547, 0.001);
  });

  it('can propagate a second table interaction', async () => {
    const el = await fixture(html`
      <sdt-example-double-interactive>
        <sdt-model interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
        <detectable-table numeric interactive summary="stimulusRates accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0"></detectable-table>
        <roc-space interactive contour="accuracy" point="all" iso-d="none" iso-c="none"></roc-space>
        <detectable-table numeric interactive summary="stimulusRates accuracy" hits="0" misses="0" false-alarms="0" correct-rejections="0"></detectable-table>
        <sdt-model interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
      </sdt-example-double-interactive>
    `);
    // Action
    const target = el.querySelector('detectable-table:nth-of-type(2)').shadowRoot.querySelector('.h decidables-spinner').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '50'}); });
    await oneEvent(el, 'detectable-table-change');
    await oneEvent(el, 'detectable-table-change');
    // Check "after" state
    expect(el.detectableTableOne).to.include({
      h: 95, m: 5, fa: 35, cr: 65,
    });
    expect(el.rocSpace.hr).to.be.almost(0.95, 0.001);
    expect(el.sdtModelOne.c).to.be.almost(-0.63, 0.001);
    expect(el.detectableTableTwo).to.include({
      h: 50, m: 60, fa: 20, cr: 80,
    });
    expect(el.rocSpace.locations[1].hr).to.be.almost(0.455, 0.001);
    expect(el.sdtModelTwo.c).to.be.almost(0.477, 0.001);
  });

  it('connects the components properly');
});
