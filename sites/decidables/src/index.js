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
import '@decidables/detectable-elements/components/rdk-task';
import '@decidables/detectable-elements/components/roc-space';
import '@decidables/detectable-elements/components/sdt-model';
import '@decidables/detectable-elements/components/sdt-table';

import '@decidables/prospectable-elements/components/cpt-probability';
import '@decidables/prospectable-elements/components/cpt-value';
import '@decidables/prospectable-elements/components/decision-task';
