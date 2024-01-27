
// Node native modules
import fs from 'node:fs/promises';

// devDependencies
import gulp from 'gulp';
import * as sass from 'sass';

// Local dependencies
import * as cleans from '../../scripts/clean.js';
import * as lints from '../../scripts/lint.js';
import * as tests from '../../scripts/test.js';
import * as builds from '../../scripts/build.js';

// Re-export
export * from '../../scripts/clean.js';
export * from '../../scripts/lint.js';
export * from '../../scripts/test.js';
export * from '../../scripts/build.js';

// Tasks
export const lint = gulp.parallel(
  lints.lintMarkdown,
  lints.lintScripts,
  lints.lintStyles,
);

// Read in the plotly styles and insert into template
export async function preparePlotly() {
  const styleSrc = 'src/components/plotly-style.scss';
  const templateSrc = 'src/components/plotly-style.template.js';
  const dest = 'src/components/plotly-style.auto.js';

  // Process SCSS
  const styleResult = sass.compile(styleSrc, {
    loadPaths: ['../../node_modules'],
  });

  // Inject CSS
  const startTag = 'inject:start';
  const endTag = 'inject:end';
  const tagRegex = new RegExp(`(\\/\\*\\s*${startTag}\\s*\\*\\/\\s*$)\\s*(^\\s*\\/\\*\\s*${endTag}\\s*\\*\\/)`, 'm');
  const templateContent = (await fs.readFile(templateSrc)).toString();
  const finalResult = templateContent.replace(tagRegex, `$1\n${styleResult.css}\n$2`);

  await fs.writeFile(dest, finalResult);
}

export const test = tests.testScripts;

export const build = gulp.series(
  preparePlotly,
  cleans.cleanLib,
  builds.buildLibrary,
);
