
// devDependencies
import {startTestRunner} from '@web/test-runner';

export async function testScripts() {
  const src = 'test/**/*.test.js';

  return startTestRunner({
    readCliArgs: true,
    argv: ['node', 'web-test-runner.js', src, '--config', '../../.webtestrunnerrc.js'],
  });
}

export async function testScriptsWatch() {
  const src = 'test/**/*.test.js';

  return startTestRunner({
    readCliArgs: true,
    argv: ['node', 'web-test-runner.js', src, '--config', '../../.webtestrunnerrc.js', '--watch'],
  });
}

export async function testScript() {
  const src = `test/${process.argv[3].slice(2)}.test.js`;

  return startTestRunner({
    readCliArgs: true,
    argv: ['node', 'web-test-runner.js', src, '--config', '../../.webtestrunnerrc.js'],
  });
}

export async function testScriptWatch() {
  const src = `test/${process.argv[3].slice(2)}.test.js`;

  return startTestRunner({
    readCliArgs: true,
    argv: ['node', 'web-test-runner.js', src, '--config', '../../.webtestrunnerrc.js', '--watch'],
  });
}
