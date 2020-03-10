/* eslint-disable no-undef */ // devDeps loaded into global scope!
/* eslint-disable new-cap */ // devDeps start with lowercase letter!
/* eslint-disable no-console */ // writing to console is okay for gulpfile!

/* Load required modules */
// Load all devDependencies into global scope
// Combines workspace package.json and root package.json, so all devDeps are included
// Uses camelCase for names, e.g. gulp-ssh -> gulpSsh
// 'pattern' includes list of packages to avoid
const lodashMerge = require('lodash.merge');
const mergedPackageJson = lodashMerge(
  require('../../package.json'),
  require('./package.json'),
);
Object.assign(global, require('gulp-load-plugins')({
  config: mergedPackageJson,
  pattern: ['*'],
  replaceString: /^/,
  scope: 'devDependencies',
}));


/* Debug */
// .pipe(gulpDebug())


/*
 * Pipeline
 */

/* Compile */
gulp.task('compile:clean', () => {
  return del(['lib/**/*', 'lib/**/.*']);
});

gulp.task('compile:scripts', () => {
  return gulp.src('src/**/*.js')
    .pipe(gulpSourcemaps.init())
    .pipe(gulpBabel({
      presets: [['@babel/preset-env', {useBuiltIns: 'entry', corejs: '3.1'}]],
    }))
    // .pipe(gulpConcat('index.js')) // Should I be bundling my packages?
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest('lib'));
});

gulp.task('compile:all', gulp.parallel(
  'compile:scripts',
));

gulp.task('compile', gulp.series(
  'compile:clean',
  'compile:all',
));


/* Watch */
gulp.task('watch:scripts', () => {
  gulp.watch(['src/**/*.js'], {ignoreInitial: false}, gulp.series('compile:scripts'));
});

gulp.task('watch:all', gulp.parallel(
  'watch:scripts',
));

gulp.task('watch', gulp.series(
  'watch:all',
));


/* Lint */
gulp.task('lint:scripts', () => {
  return gulp.src(['src/**/*.js'])
    .pipe(gulpEslint())
    .pipe(gulpEslint.format('pretty'))
    .pipe(gulpEslint.failAfterError());
});

gulp.task('lint:all', gulp.parallel(
  'lint:scripts',
));

gulp.task('lint', gulp.series(
  'lint:all',
));


/* Build */
gulp.task('build:clean', () => {
  return del(['dist/**/*', 'dist/**/.*']);
});

gulp.task('build:scripts', () => {
  return gulp.src(['local/index.js'])
    .pipe(gulpSourcemaps.init({loadMaps: true}))
    .pipe(gulpUglify())
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('build:all', gulp.parallel(
  'build:scripts',
));

gulp.task('build', gulp.series(
  'build:clean',
  'build:all',
));
