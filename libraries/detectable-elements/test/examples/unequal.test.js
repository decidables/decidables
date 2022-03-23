import {
  expect,
  fixture,
  html,
  oneEvent,
  sendKeys,
} from '../../../../scripts/test';

import '../../src/examples/unequal';
import '../../src/components';

describe('sdt-example-interactive', () => {
  it('has a shadowDom', async () => {
    const el = await fixture(html`
      <sdt-example-unequal>
        <detectable-control z-roc></detectable-control>
        <sdt-model interactive unequal distributions sensitivity variance color="stimulus"></sdt-model>
        <roc-space z-roc contour="sensitivity" point="rest" iso-d="rest" iso-c="rest"></roc-space>
      </sdt-example-unequal>
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
      <sdt-example-unequal>
        <detectable-control z-roc></detectable-control>
        <sdt-model interactive unequal distributions sensitivity variance color="stimulus"></sdt-model>
        <roc-space z-roc contour="sensitivity" point="rest" iso-d="rest" iso-c="rest"></roc-space>
      </sdt-example-unequal>
    `);
    expect(el).lightDom.to.equal(`
      <detectable-control class="keyboard" z-roc></detectable-control>
      <sdt-model class="keyboard" interactive unequal distributions sensitivity variance color="stimulus"></sdt-model>
      <roc-space class="keyboard" contour="sensitivity" iso-c="rest" iso-d="rest" point="rest" z-roc></roc-space>
    `, {ignoreAttributes: ['hr', 'far', 'c', 'd', 's']});
  });

  it('can propagate a model interaction', async () => {
    const el = await fixture(html`
      <sdt-example-unequal>
        <detectable-control z-roc></detectable-control>
        <sdt-model interactive unequal distributions sensitivity variance color="stimulus"></sdt-model>
        <roc-space z-roc contour="sensitivity" point="rest" iso-d="rest" iso-c="rest"></roc-space>
      </sdt-example-unequal>
    `);
    // Get "before" state
    const {d, s} = el.sdtModel;
    const {hr, far} = el.rocSpace.locations[1];
    // Action
    const target = el.querySelector('sdt-model').shadowRoot.querySelector('.signal.interactive');
    target.focus();
    setTimeout(() => { sendKeys({press: 'ArrowRight'}); });
    await oneEvent(el, 'sdt-model-change');
    // Another action
    setTimeout(() => { sendKeys({press: 'ArrowUp'}); });
    await oneEvent(el, 'sdt-model-change');
    // Check "after" state
    expect(el.sdtModel.d).to.not.equal(d);
    expect(el.sdtModel.s).to.not.equal(s);
    expect(el.rocSpace.locations[1].hr).to.not.equal(hr);
    expect(el.rocSpace.locations[1].far).to.not.equal(far);
  });

  it('connects the components properly');
});
