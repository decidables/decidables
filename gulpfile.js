
// devDependencies
import gulp from 'gulp';

// Local dependencies
import * as lints from './scripts/lint.js';

// Re-export
export * from './scripts/lint.js';
export * from './scripts/serve.js';

// Debug
// .pipe(gulpDebug())

// Tasks
export const lint = gulp.parallel(
  lints.lintMarkdown,
  lints.lintScripts,
);
