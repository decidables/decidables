import {expect} from '../../../scripts/test';

import DiscountableElement from '../src/discountable-element';

describe('discountable-element', () => {
  it('has property "interactive"', () => {
    const properties = DiscountableElement.properties; // eslint-disable-line prefer-destructuring
    expect(properties).to.have.property('interactive');
  });

  it('has colors', () => {
    const colors = DiscountableElement.colors; // eslint-disable-line prefer-destructuring
    expect(colors).to.have.all.keys(
      'a',
      'd',
      'k',
      'v',
      'chosen',
      'better',
      'worse',
      'even',
      'correct',
      'error',
      'nr',
    );
  });

  it('has light colors', () => {
    const lights = DiscountableElement.lights; // eslint-disable-line prefer-destructuring
    expect(lights).to.have.all.keys(
      'a',
      'd',
      'k',
      'v',
      'chosen',
      'better',
      'worse',
      'even',
      'correct',
      'error',
      'nr',
    );
  });

  it('has dark colors', () => {
    const darks = DiscountableElement.darks; // eslint-disable-line prefer-destructuring
    expect(darks).to.have.all.keys(
      'a',
      'd',
      'k',
      'v',
      'chosen',
      'better',
      'worse',
      'even',
      'correct',
      'error',
      'nr',
    );
  });

  it('has styles', () => {
    const styles = DiscountableElement.styles; // eslint-disable-line prefer-destructuring
    expect(styles).to.have.lengthOf(2);
  });
});
