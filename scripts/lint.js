
// devDependencies
import gulp from 'gulp';
import gulpEslintNew from 'gulp-eslint-new';
import gulpHtml from 'gulp-html';
import gulpHtmlhint from 'gulp-htmlhint';
import {remark as gulpRemark} from 'gulp-remark';
import gulpStylelint from 'gulp-stylelint';
import stylelintFormatterPretty from 'stylelint-formatter-pretty';

// Tasks
export function lintMarkdown() {
  return gulp.src('src/*.md')
    .pipe(gulpRemark());
}

export function lintMarkupLocal() {
  return gulp.src('local/*.html')
    .pipe(gulpHtml())
    .pipe(gulpHtmlhint())
    .pipe(gulpHtmlhint.reporter())
    .pipe(gulpHtmlhint.failOnError({suppress: true}));
}

export function lintScripts() {
  return gulp.src(['src/**/*.js', '!src/**/*.auto.js'])
    .pipe(gulpEslintNew())
    .pipe(gulpEslintNew.format('pretty'))
    .pipe(gulpEslintNew.failAfterError());
}

export function lintStyles() {
  return gulp.src(['src/**/*.{scss,js}', '!src/**/*.auto.js'])
    .pipe(gulpStylelint({
      reporters: [{
        formatter: stylelintFormatterPretty,
        console: true,
      }],
    }));
}
