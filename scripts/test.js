
// devDependencies
import {startTestRunner} from '@web/test-runner';

// Local Dependencies
import {PATH} from './config.js';

/* eslint-disable-next-line import/prefer-default-export */
export async function testScripts() {
  const argv = process.argv.slice(4);
  if (argv.length > 2) {
    throw new Error(`Too many args for testScripts: ${argv}`);
  }

  const watch = (argv[0] === '-w' || argv[0] === '--watch' || argv[1] === '-w' || argv[1] === '--watch');

  const src = (argv[0] !== undefined && argv[0] !== '-w' && argv[0] !== '--watch')
    ? `${PATH.TEST}/${argv[0]}.test.js`
    : (argv[1] !== undefined)
      ? `${PATH.TEST}/${argv[1]}.test.js`
      : `${PATH.TEST}/**/*.test.js`;

  return startTestRunner({
    readCliArgs: true,
    argv: ['node', 'web-test-runner.js', src, '--config', '../../web-test-runner.config.js', ...(watch ? ['--watch'] : [])],
  });
}
