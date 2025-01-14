
import rollupPluginCommonjs from '@rollup/plugin-commonjs';
import { fromRollup } from '@web/dev-server-rollup';

const commonjsPlugin = fromRollup(rollupPluginCommonjs);

export default {
  concurrency: 1,
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
  testFramework: {
    config: {
      timeout: '5000',
    },
  },
};
