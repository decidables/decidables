
// Node native modules
import childProcess from 'node:child_process';
import fs from 'node:fs/promises';
import util from 'node:util';

// devDependencies
import eslint from 'eslint';
import {globby} from 'globby';
import {HTMLHint as htmlhint} from 'htmlhint';
import {remark} from 'remark';
import stylelint from 'stylelint';
import stylelintFormatterPretty from 'stylelint-formatter-pretty';
import {engine as unifiedEngine} from 'unified-engine';
import vnuJar from 'vnu-jar';

// Tasks
export function lintMarkdown(callback) {
  const src = ['*.md', 'src/**/*.md'];

  unifiedEngine(
    {
      color: true,
      files: src,
      ignorePatterns: ['CHANGELOG.md', 'LICENSE.md'],
      pluginPrefix: 'remark',
      processor: remark,
      quiet: true,
      rcName: '.remarkrc.json',
      silentlyIgnore: true,
    },
    callback,
  );
}

export async function lintMarkupLocal() {
  const src = 'local/**/*.html';

  const srcPaths = await globby(src);

  const vnuArgs = [
    '-Xss1024k',
    '-jar',
    `"${vnuJar}"`,
    '--format text',
    ...srcPaths.map((srcPath) => { return `"${srcPath}"`; }),
  ];

  const format = {
    reset: '\x1b[0m',
    bold: '\x1b[1m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
  };

  // Run v.Nu on all files
  const execFile = util.promisify(childProcess.execFile);
  try {
    await execFile('java', vnuArgs, {shell: true});
  } catch (error) {
    console.group(`${format.bold}${format.red}lintLocalMarkup (v.Nu)${format.reset}`);
    console.error(`${format.yellow}${error.stderr}${format.reset}`);
    console.groupEnd();
  }

  // Run HTMLHint on all files
  return Promise.all(
    srcPaths.map(
      async (srcPath) => {
        const content = (await fs.readFile(srcPath)).toString();

        const result = htmlhint.verify(content);

        if (result.length) {
          console.group(`${format.bold}${format.red}lintLocalMarkup (HTMLHint)${format.reset}`);
          console.error(`${format.yellow}${srcPath}${format.reset}`);
          console.error(htmlhint.format(result, {colors: true, indent: 2}).join('\n'));
          console.groupEnd();
        }
      },
    ),
  );
}

export async function lintScripts() {
  const src = ['*.js', 'scripts/**/*.js', 'src/**/*.js', '!src/**/*.auto.js', 'test/**/*.js'];

  const linter = new eslint.ESLint({errorOnUnmatchedPattern: false});
  const formatter = await linter.loadFormatter('pretty');
  const result = await linter.lintFiles(src);

  const resultText = formatter.format(result);
  if (resultText) {
    console.error(resultText);
  }
}

export async function lintStyles() {
  const src = ['src/**/*.{scss,js}', '!src/**/*.auto.js'];

  const result = await stylelint.lint({
    files: src,
    formatter: stylelintFormatterPretty,
  });

  if (result.report) {
    console.error(result.report);
  }
}
