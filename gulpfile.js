
// devDependencies
import gulp from 'gulp';

// local dependencies
import {serveAll} from './scripts/serve.js';
import {deployAllTask} from './scripts/deploy.js';

const deployAll = deployAllTask();

export {serveAll, deployAll};
