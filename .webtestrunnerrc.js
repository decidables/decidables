
import rollupPluginCommonjs from '@rollup/plugin-commonjs';
import rollupPluginYaml from '@rollup/plugin-yaml';
import { fromRollup } from '@web/dev-server-rollup';

const commonjsPlugin = fromRollup(rollupPluginCommonjs);
const yamlPlugin = fromRollup(rollupPluginYaml);

export default {
  concurrency: 1,
  nodeResolve: true,
  coverage: true,
  coverageConfig: {
    include: ['src/**/*'],
    report: true,
    reportDir: 'test/coverage',
  },
  mimeTypes: {
    '**/*.yml': 'js',
  },
  plugins: [
    commonjsPlugin({strictRequires: 'auto'}),
    yamlPlugin(),
  ],
  testFramework: {
    config: {
      timeout: '5000',
    },
  },
};
