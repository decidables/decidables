import rollupPluginCommonjs from '@rollup/plugin-commonjs';
import { fromRollup } from '@web/dev-server-rollup';

const commonjsPlugin = fromRollup(rollupPluginCommonjs);

export default {
  nodeResolve: true,
  coverage: true,
  coverageConfig: {
    report: true,
    reportDir: 'test/coverage',
  },
  plugins: [
    commonjsPlugin({
      include: [
        '../../**/node_modules/deep-eql/**/*',
        '../../**/node_modules/type-detect/**/*',
      ],
    }),
  ],
};
