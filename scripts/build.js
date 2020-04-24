
// devDependencies
const cssnano = require('cssnano');
const gulp = require('gulp');
const gulpBro = require('gulp-bro');
const gulpHtmlmin = require('gulp-htmlmin');
const gulpPostcss = require('gulp-postcss');
const gulpSourcemaps = require('gulp-sourcemaps');
const gulpUglify = require('gulp-uglify');

// Tasks
function buildModuleTask(name) {
  return gulp.src('src/index.js')
    .pipe(gulpBro({
      debug: true,
      standalone: name,
      transform: [
        ['babelify', {
          presets: [['@babel/preset-env', {useBuiltIns: 'entry', corejs: '3.1'}]],
          global: true,
          ignore: [/core-js/],
        }],
      ],
    }))
    .pipe(gulpSourcemaps.init({loadMaps: true}))
    .pipe(gulpUglify())
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest('lib'));
}
exports.buildModuleTask = buildModuleTask;

function buildConfig() {
  return gulp.src('local/.htaccess')
    .pipe(gulp.dest('dist'));
}
exports.buildConfig = buildConfig;

function buildFonts() {
  return gulp.src(['local/fonts/*.woff'])
    .pipe(gulp.dest('dist/fonts'));
}
exports.buildFonts = buildFonts;

function buildMarkup() {
  return gulp.src(['local/*.html'])
    .pipe(gulpHtmlmin({
      collapseWhitespace: true,
      removeComments: true,
    }))
    .pipe(gulp.dest('dist'));
}
exports.buildMarkup = buildMarkup;

function buildScripts() {
  return gulp.src(['local/*.js'])
    .pipe(gulpSourcemaps.init({loadMaps: true}))
    .pipe(gulpUglify())
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
}
exports.buildScripts = buildScripts;

function buildStyles() {
  return gulp.src('local/*.css')
    .pipe(gulpSourcemaps.init({loadMaps: true}))
    .pipe(gulpPostcss([
      cssnano(),
    ]))
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
}
exports.buildStyles = buildStyles;
