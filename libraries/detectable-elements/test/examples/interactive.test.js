import {
  expect,
  fixture,
  html,
  oneEvent,
  sendKeys,
} from '../../../../scripts/test';

import '../../src/examples/interactive';
import '../../src/components';

describe('sdt-example-interactive', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`
      <sdt-example-interactive>
        <detectable-table numeric interactive summary="stimulusRates accuracy" hits="80" misses="20" false-alarms="10" correct-rejections="90"></detectable-table>
        <roc-space interactive point="all" iso-d="all" iso-c="all"></roc-space>
        <sdt-model interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
      </sdt-example-interactive>
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
      <sdt-example-interactive>
        <detectable-table numeric interactive summary="stimulusRates accuracy" hits="80" misses="20" false-alarms="10" correct-rejections="90"></detectable-table>
        <roc-space interactive point="all" iso-d="all" iso-c="all"></roc-space>
        <sdt-model interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
      </sdt-example-interactive>
    `);
    expect(el).lightDom.to.equal(`
      <detectable-table class="keyboard" color="outcome" numeric interactive summary="stimulusRates accuracy" hits="80" misses="20" false-alarms="10" correct-rejections="90"></detectable-table>
      <roc-space class="keyboard" interactive iso-c="all" iso-d="all" point="all"></roc-space>
      <sdt-model class="keyboard" interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
    `, {ignoreAttributes: ['hr', 'far', 'c', 'd', 's']});
  });

  it('can propagate a table interaction', async () => {
    const el = await fixture(html`
      <sdt-example-interactive>
        <detectable-table numeric interactive summary="stimulusRates accuracy" hits="80" misses="20" false-alarms="10" correct-rejections="90"></detectable-table>
        <roc-space interactive point="all" iso-d="all" iso-c="all"></roc-space>
        <sdt-model interactive threshold bias distributions sensitivity color="outcome"></sdt-model>
      </sdt-example-interactive>
    `);
    // Action
    const target = el.querySelector('detectable-table').shadowRoot.querySelector('.h decidables-spinner').shadowRoot.querySelector('input');
    target.focus();
    target.select();
    setTimeout(() => { sendKeys({type: '40'}); });
    await oneEvent(el, 'detectable-table-change');
    await oneEvent(el, 'detectable-table-change');
    // Check "after" state
    expect(el.detectableTable).to.include({
      h: 40, m: 20, fa: 10, cr: 90,
    });
    expect(el.rocSpace.hr).to.be.almost(0.667, 0.001);
    expect(el.sdtModel.c).to.be.almost(0.425, 0.001);
  });

  it('connects the components properly');
});
