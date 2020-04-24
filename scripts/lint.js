
// devDependencies
const gulp = require('gulp');
const gulpEslint = require('gulp-eslint');
const gulpRemark = require('gulp-remark');
const gulpStylelint = require('gulp-stylelint');
const stylelintFormatterPretty = require('stylelint-formatter-pretty');

// Tasks
function lintMarkdown() {
  return gulp.src('src/*.md')
    .pipe(gulpRemark());
}
exports.lintMarkdown = lintMarkdown;

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
