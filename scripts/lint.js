
// devDependencies
const gulp = require('gulp');
const gulpEslintNew = require('gulp-eslint-new');
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
  return gulp.src(['src/**/*.js', '!src/**/*.auto.js'])
    .pipe(gulpEslintNew())
    .pipe(gulpEslintNew.format('pretty'))
    .pipe(gulpEslintNew.failAfterError());
}
exports.lintScripts = lintScripts;

function lintStyles() {
  return gulp.src(['src/**/*.js', '!src/**/*.auto.js'])
    .pipe(gulpStylelint({
      reporters: [{
        formatter: stylelintFormatterPretty,
        console: true,
      }],
    }));
}
exports.lintStyles = lintStyles;
