
// devDependencies
import gulp from 'gulp';

// Local dependencies
import * as cleans from '../../scripts/clean.js';
import * as lints from '../../scripts/lint.js';
import * as builds from '../../scripts/build.js';

// Re-export
export * from '../../scripts/clean.js';
export * from '../../scripts/lint.js';
export * from '../../scripts/build.js';

// Tasks
export const lint = gulp.parallel(
  lints.lintMarkdown,
  lints.lintScripts,
  lints.lintStyles,
);

export const build = gulp.series(
  cleans.cleanLib,
  builds.buildLibrary,
);
