import {expect} from '../../../scripts/test-utility';

import DetectableElement from '../src/detectable-element';

describe('detectable-element', () => {
  it('has property "interactive"', () => {
    const properties = DetectableElement.properties; // eslint-disable-line prefer-destructuring
    expect(properties).to.have.property('interactive');
  });

  it('has colors', () => {
    const colors = DetectableElement.colors; // eslint-disable-line prefer-destructuring
    expect(colors).to.have.all.keys(
      'h',
      'm',
      'fa',
      'cr',
      'hr',
      'far',
      'acc',
      'd',
      'c',
      's',
      'present',
      'absent',
      'correct',
      'error',
      'nr',
    );
  });

  it('has light colors', () => {
    const lights = DetectableElement.lights; // eslint-disable-line prefer-destructuring
    expect(lights).to.have.all.keys(
      'h',
      'm',
      'fa',
      'cr',
      'hr',
      'far',
      'acc',
      'd',
      'c',
      's',
      'present',
      'absent',
      'correct',
      'error',
      'nr',
    );
  });

  it('has dark colors', () => {
    const darks = DetectableElement.darks; // eslint-disable-line prefer-destructuring
    expect(darks).to.have.all.keys(
      'h',
      'm',
      'fa',
      'cr',
      'hr',
      'far',
      'acc',
      'd',
      'c',
      's',
      'present',
      'absent',
      'correct',
      'error',
      'nr',
    );
  });

  it('has styles', () => {
    const styles = DetectableElement.styles; // eslint-disable-line prefer-destructuring
    expect(styles).to.have.lengthOf(2);
  });
});
