
// devDependencies
const gulp = require('gulp');
const gulpInject = require('gulp-inject');
const gulpRename = require('gulp-rename');
const gulpDartSass = require('gulp-dart-sass');
const nodeSassPackageImporter = require('node-sass-package-importer');

// Local dependencies
const cleans = require('../../scripts/clean');
const lints = require('../../scripts/lint');
const builds = require('../../scripts/build');

// Tasks
const lint = gulp.parallel(
  lints.lintScripts,
  lints.lintStyles,
);

function preparePlotly() {
  return gulp.src('src/components/plotly-style.template.js')
    .pipe(gulpInject(
      gulp.src('src/components/plotly-style.scss')
        .pipe(gulpDartSass({importer: nodeSassPackageImporter()}).on('error', gulpDartSass.logError))
        .pipe(gulpRename('plotly.css')),
      {
        starttag: '/* inject:{{ext}} */',
        endtag: '/* endinject */',
        transform: (filePath, file) => {
          // return file contents as string
          return file.contents.toString('utf8');
        },
      },
    ))
    .pipe(gulpRename('plotly-style.auto.js'))
    .pipe(gulp.dest('src/components/'));
}

const build = gulp.series(
  cleans.cleanLib,
  function buildLibrary() { return builds.buildLibraryTask('prospectableElements'); }, /* eslint-disable-line prefer-arrow-callback */
);

// Exports
module.exports = {
  ...cleans,
  preparePlotly,
  ...lints,
  lint,
  ...builds,
  build,
};
