import {
  expect,
  fixture,
  html,
} from '../../../../scripts/test';

import '../../src/components/cpt-calculation';
import CPTExample from '../../src/examples/cpt-example';

describe('cpt-example', () => {
  it('has styles', () => {
    expect(CPTExample.styles).to.have.lengthOf(2);
  });

  it('has a shadowDom', async () => {
    const el = await fixture(html`
      <cpt-example>
        <cpt-calculation></cpt-calculation>
      </cpt-example>
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
      <cpt-example>
        <cpt-calculation></cpt-calculation>
      </cpt-example>
    `);
    expect(el).lightDom.to.equal('<cpt-calculation alpha="0.8" class="keyboard" gamma="0.8" lambda="1.2" loss="0" probability="0.75" sure="50" win="100"></cpt-calculation>');
  });
});
