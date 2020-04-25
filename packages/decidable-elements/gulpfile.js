
// devDependencies
const gulp = require('gulp');

// Local dependencies
const cleans = require('../../scripts/clean');
const lints = require('../../scripts/lint');
const builds = require('../../scripts/build');

// Tasks
const lint = gulp.parallel(
  lints.lintScripts,
  lints.lintStyles,
);

const build = gulp.series(
  cleans.cleanLib,
  function buildLibrary() { return builds.buildLibraryTask('decidableElements'); }, /* eslint-disable-line prefer-arrow-callback */
);
exports.build = build;

// Exports
module.exports = {
  ...cleans,
  ...lints,
  lint,
  ...builds,
  build,
};
