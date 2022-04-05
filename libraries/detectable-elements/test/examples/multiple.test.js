import {
  expect,
  fixture,
  html,
  oneEvent,
  sendKeys,
} from '../../../../scripts/test';

import '../../src/examples/multiple';
import '../../src/components';

describe('sdt-example-multipleple', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`
      <sdt-example-multiple variable="d" values="0 1 2 3 4">
        <detectable-control z-roc></detectable-control>
        <sdt-model interactive threshold bias></sdt-model>
        <roc-space z-roc point="rest" iso-d="rest" iso-c="first"></roc-space>
      </sdt-example-multiple>
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
      <sdt-example-multiple variable="d" values="0 1 2 3 4">
        <detectable-control z-roc></detectable-control>
        <sdt-model interactive threshold bias></sdt-model>
        <roc-space z-roc point="rest" iso-d="rest" iso-c="first"></roc-space>
      </sdt-example-multiple>
    `);
    expect(el).lightDom.to.equal(`
      <detectable-control class="keyboard" z-roc></detectable-control>
      <sdt-model class="keyboard" interactive threshold bias color="outcome"></sdt-model>
      <roc-space class="keyboard" iso-c="first" iso-d="rest" point="rest" z-roc></roc-space>
    `, {ignoreAttributes: ['hr', 'far', 'c', 'd', 's']});
  });

  it('can propagate a model interaction for bias', async () => {
    const el = await fixture(html`
      <sdt-example-multiple variable="d" values="0 1 2 3 4">
        <detectable-control z-roc></detectable-control>
        <sdt-model interactive threshold bias></sdt-model>
        <roc-space z-roc point="rest" iso-d="rest" iso-c="first"></roc-space>
      </sdt-example-multiple>
    `);
    // Get "before" state
    const {c} = el.sdtModel;
    const {hr, far} = el.rocSpace.locations[1];
    // Action
    const target = el.querySelector('sdt-model').shadowRoot.querySelector('.threshold.interactive');
    target.focus();
    setTimeout(() => { sendKeys({press: 'ArrowRight'}); });
    await oneEvent(el, 'sdt-model-change');
    // Check "after" state
    expect(el.sdtModel.c).to.not.equal(c);
    expect(el.rocSpace.locations[1].hr).to.not.equal(hr);
    expect(el.rocSpace.locations[1].far).to.not.equal(far);
  });

  it('can propagate a model interaction for sensitivity', async () => {
    const el = await fixture(html`
      <sdt-example-multiple variable="c" values="-2 -1 0 1 2">
        <detectable-control z-roc></detectable-control>
        <sdt-model interactive distributions sensitivity></sdt-model>
        <roc-space z-roc point="rest" iso-d="first" iso-c="rest"></roc-space>
      </sdt-example-multiple>
    `);
    // Get "before" state
    const {d} = el.sdtModel;
    const {hr, far} = el.rocSpace.locations[1];
    // Action
    const target = el.querySelector('sdt-model').shadowRoot.querySelector('.signal.interactive');
    target.focus();
    setTimeout(() => { sendKeys({press: 'ArrowRight'}); });
    await oneEvent(el, 'sdt-model-change');
    // Check "after" state
    expect(el.sdtModel.d).to.not.equal(d);
    expect(el.rocSpace.locations[1].hr).to.not.equal(hr);
    expect(el.rocSpace.locations[1].far).to.not.equal(far);
  });

  it('connects the components properly');
});
