// HACK: IE11 needs this above the WebComponents polyfills
import '@babel/polyfill';

import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';
import '@webcomponents/webcomponentsjs/webcomponents-bundle';

import 'bootstrap';

import './lib/components';
import './lib/equations';
import './lib/examples';
