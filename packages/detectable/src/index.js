// HACK: IE11 needs these above the WebComponents polyfills
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';
import '@webcomponents/webcomponentsjs/webcomponents-bundle';

import 'bootstrap';

import './lib/components';
import './lib/equations';
import './lib/examples';
