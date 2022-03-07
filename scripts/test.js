
// devDependencies
import {chai} from '@open-wc/testing';

// Local Dependencies
import chaiAlmost from './chai-almost.js';

chai.use(chaiAlmost());

// Re-export
export * from '@open-wc/testing';
