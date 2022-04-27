import {
  expect,
  fixture,
  html,
} from '../../../../scripts/test';

import '../../src/components/risky-outcome';

describe('risky-outcome', () => {
  it('has an empty shadowDom', async () => {
    const el = await fixture(html`<risky-outcome></risky-outcome>`);
    expect(el).shadowDom.to.equal('');
  });

  it('has an empty lightDom', async () => {
    const el = await fixture(html`<risky-outcome></risky-outcome>`);
    expect(el).lightDom.to.equal('');
  });

  it('has attributes', async () => {
    const el = await fixture(html`<risky-outcome value="20" probability="0.5" name="win"></risky-outcome>`);
    expect(el).to.include({x: 20, p: 0.5, name: 'win'});
  });
});
