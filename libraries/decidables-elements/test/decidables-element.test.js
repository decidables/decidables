import {expect} from '../../../scripts/test';

import DecidablesElement from '../src/decidables-element';

describe('decidables-element', () => {
  it('has greys', () => {
    const greys = DecidablesElement.greys; // eslint-disable-line prefer-destructuring
    expect(greys).to.have.all.keys(
      'white',
      'light75',
      'light50',
      'light25',
      'grey',
      'dark25',
      'dark50',
      'dark75',
      'black',
    );
  });

  it('has shadows', () => {
    const shadows = DecidablesElement.shadows; // eslint-disable-line prefer-destructuring
    expect(shadows).to.have.all.keys(
      'elevations',
      'baselineColor',
      'baselineColorString',
      'inverseBaselineColor',
      'inverseBaselineColorString',
      'opacityUmbra',
      'opacityPenumbra',
      'opacityAmbient',
      'opacityBoost',
      'mapUmbra',
      'mapPenumbra',
      'mapAmbient',
    );
  });

  it('can provide CSS box shadows');

  it('has SVG filters', () => {
    const svgFilters = DecidablesElement.svgFilters; // eslint-disable-line prefer-destructuring
    expect(svgFilters).to.be.an('object');
  });
});
