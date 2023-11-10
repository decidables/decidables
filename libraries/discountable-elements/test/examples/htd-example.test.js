import {
  expect,
  fixture,
  html,
} from '../../../../scripts/test';

import '../../src/components/htd-calculation';
import HTDExample from '../../src/examples/htd-example';

describe('htd-example', () => {
  it('has styles', () => {
    expect(HTDExample.styles).to.have.lengthOf(2);
  });

  it('has a shadowDom', async () => {
    const el = await fixture(html`
      <htd-example>
        <htd-calculation></htd-calculation>
      </htd-example>
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
      <htd-example>
        <htd-calculation></htd-calculation>
      </htd-example>
    `);
    expect(el).lightDom.to.equal('<htd-calculation class="keyboard" amount-ss="20" delay-ss="5" amount-ll="50" delay-ll="40" k="0.1"></htd-calculation>');
  });
});
