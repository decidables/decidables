import {expect} from '@open-wc/testing';

import DecidablesElement from '../src/decidables-element';

describe('decidables-element', () => {
  it('can provide a uniqueId', async () => {
    const uniqueId = DecidablesElement.uniqueId; // eslint-disable-line prefer-destructuring
    expect(uniqueId).to.equal(1);
  });
});
