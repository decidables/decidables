
// devDependencies
import gulp from 'gulp';
import gulpEslintNew from 'gulp-eslint-new';
import gulpHtmlhint from 'gulp-htmlhint';
import {remark as gulpRemark} from 'gulp-remark';
import gulpStylelint from 'gulp-stylelint';
import gulpW3cjs from 'gulp-w3cjs';
import stylelintFormatterPretty from 'stylelint-formatter-pretty';
import through2 from 'through2';

// Tasks
export function lintMarkdown() {
  return gulp.src('src/*.md')
    .pipe(gulpRemark());
}

export function lintMarkupLocal() {
  return gulp.src('local/*.html')
    .pipe(gulpW3cjs({showInfo: true}))
    .pipe(gulpW3cjs.reporter())
    .pipe(through2.obj((file, enc, cb) => {
      cb(null, file);
      if (file.w3cjs.messages.length > 0) {
        throw new Error('HTML validation issue(s) found');
      }
    }))
    .pipe(gulpHtmlhint())
    .pipe(gulpHtmlhint.reporter())
    .pipe(gulpHtmlhint.failOnError({suppress: true}));
}

export function lintScripts() {
  return gulp.src(['src/**/*.js', '!src/**/*.auto.js'])
    .pipe(gulpEslintNew({
      // This is needed until 'eslint-import-resolver-node' handles package.json export field!
      overrideConfig: {
        settings: {
          'import/resolver': {
            '@tophat/eslint-import-resolver-require': {}
          },
        },
      },
    }))
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
