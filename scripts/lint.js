
// devDependencies
import gulp from 'gulp';
import gulpEslintNew from 'gulp-eslint-new';
import gulpHtml from 'gulp-html';
import gulpHtmlhint from 'gulp-htmlhint';
import gulpStylelint from 'gulp-stylelint';
import stylelintFormatterPretty from 'stylelint-formatter-pretty';

// Local Dependencies
import gulpRemark from './gulp-remark.js';

// Tasks
export function lintMarkdown() {
  return gulp.src(['*.md', '!CHANGELOG.md', '!LICENSE.md', 'src/**/*.md'])
    .pipe(gulpRemark());
}

export function lintMarkupLocal() {
  return gulp.src('local/**/*.html')
    .pipe(gulpHtml())
    .pipe(gulpHtmlhint())
    .pipe(gulpHtmlhint.reporter())
    .pipe(gulpHtmlhint.failAfterError({suppress: true}));
}

export function lintScripts() {
  return gulp.src(['*.js', 'scripts/**/*.js', 'src/**/*.js', '!src/**/*.auto.js', 'test/**/*.js'])
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
      // Remove once we move to ESM plugin!
      quietDeprecationWarnings: true,
    }));
}
