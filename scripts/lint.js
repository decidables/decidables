
// Node native modules
import childProcess from 'node:child_process';
import fs from 'node:fs';
import util from 'node:util';

// devDependencies
import eslint from 'eslint';
import {globby} from 'globby';
import htmlhint from 'htmlhint';
import * as jsYaml from 'js-yaml';
import {remark} from 'remark';
import stylelint from 'stylelint';
import stylelintFormatterPretty from 'stylelint-formatter-pretty';
import {engine as unifiedEngine} from 'unified-engine';
import vnuJar from 'vnu-jar';

// Local Dependencies
import {PATH} from './config.js';

// Tasks
export async function lintResources() {
  const src = ['*.yml', `${PATH.SOURCE}/**/*.yml`];

  const srcPaths = await globby(src);

  const format = {
    reset: '\x1b[0m',
    bold: '\x1b[1m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
  };

  return Promise.all(
    srcPaths.map(
      async (srcPath) => {
        try {
          const content = await fs.promises.readFile(srcPath, {encoding: 'utf8'});
          jsYaml.load(content);
        } catch (error) {
          console.group(`${format.bold}${format.red}lintResources${format.reset} ${format.red}(js-yaml)${format.reset}`);
          console.group(`${format.yellow}${srcPath}${format.reset}`);
          console.error(`${format.bold}${error.name}:${format.reset} ${error.message}`);
          console.groupEnd();
          console.groupEnd();
        }
      },
    ),
  );
}

export function lintMarkdown(callback) {
  const src = ['*.md', `${PATH.SOURCE}/**/*.md`];

  unifiedEngine(
    {
      out: false,
      color: true,
      files: src,
      ignorePatterns: ['CHANGELOG.md', 'LICENSE.md'],
      pluginPrefix: 'remark',
      processor: remark,
      quiet: true,
      rcName: '.remarkrc.js',
      silentlyIgnore: true,
    },
    callback,
  );
}

export async function lintDevelopMarkup() {
  const src = `${PATH.DEVELOP}/**/*.html`;

  const srcPaths = await globby(src);

  const vnuArgs = [
    '-Xss1024k',
    '-jar',
    `${vnuJar}`,
    '--format text',
    ...srcPaths.map((srcPath) => { return `${srcPath}`; }),
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
    await execFile('java', vnuArgs);
  } catch (error) {
    console.group(`${format.bold}${format.red}lintMarkupDevelop (v.Nu)${format.reset}`);
    console.error(`${format.yellow}${error.stderr}${format.reset}`);
    console.groupEnd();
  }

  // Run HTMLHint on all files
  return Promise.all(
    srcPaths.map(
      async (srcPath) => {
        const content = await fs.promises.readFile(srcPath, {encoding: 'utf8'});

        const result = htmlhint.HTMLHint.verify(content);

        if (result.length) {
          console.group(`${format.bold}${format.red}lintMarkupDevelop (HTMLHint)${format.reset}`);
          console.error(`${format.yellow}${srcPath}${format.reset}`);
          console.error(htmlhint.HTMLHint.format(result, {colors: true, indent: 2}).join('\n'));
          console.groupEnd();
        }
      },
    ),
  );
}

export async function lintScripts() {
  const src = ['*.js', `${PATH.SCRIPTS}/**/*.js`, `${PATH.SOURCE}/**/*.js`, `${PATH.TEST}/**/*.js`];

  const linter = new eslint.ESLint({errorOnUnmatchedPattern: false});
  const formatter = await linter.loadFormatter('pretty');
  const result = await linter.lintFiles(src);

  const resultText = formatter.format(result);
  if (resultText) {
    console.error(resultText);
  }
}

export async function lintStyles() {
  const src = [`${PATH.SOURCE}/**/*.{scss,js}`];

  const result = await stylelint.lint({
    files: src,
    formatter: stylelintFormatterPretty,
  });

  if (result.report) {
    console.error(result.report);
  }
}
