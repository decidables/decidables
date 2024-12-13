import {expect} from '../../../scripts/test-utility';

import AccumulableElement from '../src/accumulable-element';

describe('accumulable-element', () => {
  it('has property "interactive"', () => {
    const properties = AccumulableElement.properties; // eslint-disable-line prefer-destructuring
    expect(properties).to.have.property('interactive');
  });

  it('has colors', () => {
    const colors = AccumulableElement.colors; // eslint-disable-line prefer-destructuring
    expect(colors).to.have.all.keys(
      'a',
      'z',
      'v',
      't0',
      's',
      'left',
      'right',
      'correct',
      'error',
      'nr',
    );
  });

  it('has light colors', () => {
    const lights = AccumulableElement.lights; // eslint-disable-line prefer-destructuring
    expect(lights).to.have.all.keys(
      'a',
      'z',
      'v',
      't0',
      's',
      'left',
      'right',
      'correct',
      'error',
      'nr',
    );
  });

  it('has dark colors', () => {
    const darks = AccumulableElement.darks; // eslint-disable-line prefer-destructuring
    expect(darks).to.have.all.keys(
      'a',
      'z',
      'v',
      't0',
      's',
      'left',
      'right',
      'correct',
      'error',
      'nr',
    );
  });

  it('has styles', () => {
    const styles = AccumulableElement.styles; // eslint-disable-line prefer-destructuring
    expect(styles).to.have.lengthOf(2);
  });
});
