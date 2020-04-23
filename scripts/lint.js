
const gulp = require('gulp');
const gulpEslint = require('gulp-eslint');
const gulpStylelint = require('gulp-stylelint');
const stylelintFormatterPretty = require('stylelint-formatter-pretty');

function lintScripts() {
  return gulp.src(['src/**/*.js'])
    .pipe(gulpEslint())
    .pipe(gulpEslint.format('pretty'))
    .pipe(gulpEslint.failAfterError());
}
exports.lintScripts = lintScripts;

function lintStyles() {
  return gulp.src(['src/**/*.js'])
    .pipe(gulpStylelint({
      reporters: [{
        formatter: stylelintFormatterPretty,
        console: true,
      }],
    }));
}
exports.lintStyles = lintStyles;

const lintAll = gulp.parallel(
  lintScripts,
  lintStyles,
);
exports.lintAll = lintAll;

const lint = gulp.series(
  lintAll,
);
exports.lint = lint;
