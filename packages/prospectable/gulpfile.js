
// devDependencies
const gulp = require('gulp');

// Local dependencies
const cleans = require('../../scripts/clean');
const lints = require('../../scripts/lint');
const compiles = require('../../scripts/compile');
const watches = require('../../scripts/watch');
const builds = require('../../scripts/build');
const deploys = require('../../scripts/deploy');
const serves = require('../../scripts/serve');

// Debug
// .pipe(gulpDebug())

// Tasks
const lint = gulp.parallel(
  lints.lintMarkdown,
  lints.lintScripts,
  lints.lintStyles,
);

const compile = gulp.series(
  cleans.cleanLocal,
  gulp.parallel(
    compiles.compileConfig,
    compiles.compileFonts,
    compiles.compileMarkdown,
    compiles.compileScripts,
    compiles.compileStyles,
  ),
);

const watch = gulp.parallel(
  function watchLibraries() { /* eslint-disable-line prefer-arrow-callback */
    return watches.watchLibrariesTask([
      'decidable-elements',
      'prospectable-math',
      'prospectable-elements',
    ]);
  },
  watches.watchMarkdown,
  watches.watchScripts,
  watches.watchStyles,
);

const build = gulp.series(
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

const deploy = gulp.series(
  function deployPassword() { return deploys.deployPasswordTask(sftpConfig); }, /* eslint-disable-line prefer-arrow-callback */
  function deployClean() { return deploys.deployCleanTask(sftpConfig); }, /* eslint-disable-line prefer-arrow-callback */
  function deployDist() { return deploys.deployDistTask(sftpConfig); }, /* eslint-disable-line prefer-arrow-callback */
);

// Exports
module.exports = {
  ...cleans,
  ...lints,
  lint,
  ...compiles,
  compile,
  ...watches,
  watch,
  ...builds,
  build,
  ...deploys,
  deploy,
  ...serves,
};
