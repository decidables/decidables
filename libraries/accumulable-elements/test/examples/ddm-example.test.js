import {
  expect,
  fixture,
  html,
} from '../../../../scripts/test-utility';

import '../../src/components/ddm-parameters';
import DDMExample from '../../src/examples/ddm-example';

describe('ddm-example', () => {
  it('has styles', () => {
    expect(DDMExample.styles).to.have.lengthOf(2);
  });

  it('has a shadowDom', async () => {
    const el = await fixture(html`
      <ddm-example>
        <ddm-parameters></ddm-parameters>
      </ddm-example>
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
      <ddm-example>
        <ddm-parameters></ddm-parameters>
      </ddm-example>
    `);
    expect(el).lightDom.to.equal('<ddm-parameters class="keyboard"></ddm-parameters>');
  });
});
