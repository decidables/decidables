// Language polyfills
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// WebComponents polyfills
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';
import '@webcomponents/webcomponentsjs/webcomponents-bundle';

// Lit polyfills
import 'lit/polyfill-support.js'; /* eslint-disable-line import/extensions */

// External dependencies
import 'bootstrap';

// Internal dependencies
import {
  RDKTask, /* eslint-disable-line no-unused-vars */
  ROCSpace, /* eslint-disable-line no-unused-vars */
  SDTModel, /* eslint-disable-line no-unused-vars */
  SDTTable, /* eslint-disable-line no-unused-vars */
} from '@decidables/detectable-elements';
import {
  CPTProbability, /* eslint-disable-line no-unused-vars */
  CPTValue, /* eslint-disable-line no-unused-vars */
  DecisionTask, /* eslint-disable-line no-unused-vars */
} from '@decidables/prospectable-elements';
