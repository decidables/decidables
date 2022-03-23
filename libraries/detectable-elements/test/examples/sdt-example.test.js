import {
  expect,
  fixture,
  html,
} from '../../../../scripts/test';

import '../../src/components/roc-space';
import SDTExample from '../../src/examples/sdt-example';

describe('sdt-example', () => {
  it('has styles', () => {
    const styles = SDTExample.styles; // eslint-disable-line prefer-destructuring
    expect(styles).to.have.lengthOf(2);
  });

  it('has a shadowDom', async () => {
    const el = await fixture(html`
      <sdt-example>
        <roc-space></roc-space>
      </sdt-example>
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
      <sdt-example>
        <roc-space></roc-space>
      </sdt-example>
    `);
    expect(el).lightDom.to.equal('<roc-space class="keyboard" far="0.25" hr="0.75" iso-c="first" iso-d="first" point="all"></roc-space>');
  });
});
