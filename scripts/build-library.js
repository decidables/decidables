
const del = require('del');
const gulp = require('gulp');
const gulpBro = require('gulp-bro');
const gulpSourcemaps = require('gulp-sourcemaps');
const gulpUglify = require('gulp-uglify');

function buildClean() {
  return del(['lib/**/*', 'lib/**/.*']);
}
exports.buildClean = buildClean;

function buildScripts() {
  return gulp.src('src/index.js')
    .pipe(gulpBro({
      debug: true,
      standalone: global.packageJson.name,
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
exports.buildScripts = buildScripts;

const buildAll = gulp.parallel(
  buildScripts,
);
exports.buildAll = buildAll;

const build = gulp.series(
  buildClean,
  buildAll,
);
exports.build = build;
