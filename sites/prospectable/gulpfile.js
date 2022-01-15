
// devDependencies
import gulp from 'gulp';

// Local dependencies
import * as cleans from '../../scripts/clean.js';
import * as lints from '../../scripts/lint.js';
import * as compiles from '../../scripts/compile.js';
import * as watches from '../../scripts/watch.js';
import * as builds from '../../scripts/build.js';
import * as deploys from '../../scripts/deploy.js';
import * as serves from '../../scripts/serve.js';

// Re-export
export * from '../../scripts/clean.js';
export * from '../../scripts/lint.js';
export * from '../../scripts/compile.js';
export * from '../../scripts/watch.js';
export * from '../../scripts/build.js';
export * from '../../scripts/deploy.js';
export * from '../../scripts/serve.js';

// Debug
// .pipe(gulpDebug())

// Tasks
export const lint = gulp.parallel(
  lints.lintMarkdown,
  lints.lintScripts,
  lints.lintStyles,
);

export const compile = gulp.series(
  cleans.cleanLocal,
  gulp.parallel(
    compiles.compileConfig,
    compiles.compileFonts,
    compiles.compileMarkdown,
    compiles.compileScripts,
    compiles.compileStyles,
  ),
);

export const watch = gulp.parallel(
  watches.watchLibrariesTask([
    'decidable-elements',
    'prospectable-math',
    'prospectable-elements',
  ]),
  watches.watchMarkdown,
  watches.watchScripts,
  watches.watchStyles,
);

export const build = gulp.series(
  cleans.cleanDist,
  gulp.parallel(
    builds.buildConfig,
    builds.buildFonts,
    builds.buildMarkup,
    builds.buildScripts,
    builds.buildStyles,
  ),
);

const sftpConfig = {
  host: 'web.uvic.ca',
  port: 22,
  username: 'akrawitz',
  password: null,
  directory: '/www/prospectable',
};

export const deploy = gulp.series(
  deploys.deployPasswordTask(sftpConfig),
  deploys.deployCleanTask(sftpConfig),
  deploys.deployDistTask(sftpConfig),
);
