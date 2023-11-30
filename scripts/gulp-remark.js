
// devDependencies
import {remark} from 'remark';
import {gulpEngine as unifiedEngineGulp} from 'unified-engine-gulp';

// Create remark Gulp plugin ourselves
export default unifiedEngineGulp({
  ignoreName: '.remarkignore',
  name: 'gulp-remark',
  packageField: 'remarkConfig',
  pluginPrefix: 'remark',
  processor: remark,
  rcName: '.remarkrc',
});
