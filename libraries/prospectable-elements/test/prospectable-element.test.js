import {expect} from '../../../scripts/test-utility';

import ProspectableElement from '../src/prospectable-element';

describe('prospectable-element', () => {
  it('has property "interactive"', () => {
    const properties = ProspectableElement.properties; // eslint-disable-line prefer-destructuring
    expect(properties).to.have.property('interactive');
  });

  it('has colors', () => {
    const colors = ProspectableElement.colors; // eslint-disable-line prefer-destructuring
    expect(colors).to.have.all.keys(
      'x',
      'a',
      'l',
      'v',
      'p',
      'g',
      'w',
      'u',
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
    const lights = ProspectableElement.lights; // eslint-disable-line prefer-destructuring
    expect(lights).to.have.all.keys(
      'x',
      'a',
      'l',
      'v',
      'p',
      'g',
      'w',
      'u',
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
    const darks = ProspectableElement.darks; // eslint-disable-line prefer-destructuring
    expect(darks).to.have.all.keys(
      'x',
      'a',
      'l',
      'v',
      'p',
      'g',
      'w',
      'u',
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
    const styles = ProspectableElement.styles; // eslint-disable-line prefer-destructuring
    expect(styles).to.have.lengthOf(2);
  });
});
