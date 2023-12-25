
// devDependencies
import gulp from 'gulp';

// Local dependencies
import * as lints from '../../scripts/lint.js';

// Re-export
export * from '../../scripts/lint.js';

// Tasks
export const lint = gulp.parallel(
  lints.lintMarkdown,
  lints.lintScripts,
  lints.lintStyles,
);
