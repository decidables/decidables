import rollupPluginCommonjs from '@rollup/plugin-commonjs';
// Monkey patch!
// import { fromRollup } from '@web/dev-server-rollup';
import {fromRollupWithFix} from './scripts/wtrCommonjsFixes.js';

// Monkey patch!
// const commonjsPlugin = fromRollup(rollupPluginCommonjs);
const commonjsPlugin = fromRollupWithFix(rollupPluginCommonjs);

export default {
  nodeResolve: true,
  coverage: true,
  coverageConfig: {
    include: ['src/**/*'],
    report: true,
    reportDir: 'test/coverage',
  },
  plugins: [
    commonjsPlugin(),
  ],
};
