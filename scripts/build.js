
// devDependencies
import cssnano from 'cssnano';
import gulp from 'gulp';
import gulpBro from 'gulp-bro';
import gulpHtmlmin from 'gulp-htmlmin';
import gulpPostcss from 'gulp-postcss';
import gulpSourcemaps from 'gulp-sourcemaps';
import gulpUglify from 'gulp-uglify';

// Tasks
export function buildLibraryTask(name) {
  return gulp.src('src/index.js')
    .pipe(gulpBro({
      debug: true,
      standalone: name,
      transform: [
        ['babelify', {
          presets: [['@babel/preset-env', {useBuiltIns: 'entry', corejs: '3.1'}]],
          global: true,
          ignore: [/core-js|plotly\.js/],
        }],
      ],
    }))
    .pipe(gulpSourcemaps.init({loadMaps: true}))
    .pipe(gulpUglify())
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest('lib'));
}

export function buildConfig() {
  return gulp.src('local/.htaccess')
    .pipe(gulp.dest('dist'));
}

export function buildFonts() {
  return gulp.src(['local/fonts/*.woff'])
    .pipe(gulp.dest('dist/fonts'));
}

export function buildMarkup() {
  return gulp.src(['local/*.html'])
    .pipe(gulpHtmlmin({
      collapseWhitespace: true,
      removeComments: true,
    }))
    .pipe(gulp.dest('dist'));
}

export function buildScripts() {
  return gulp.src(['local/*.js'])
    .pipe(gulpSourcemaps.init({loadMaps: true}))
    .pipe(gulpUglify())
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
}

export function buildStyles() {
  return gulp.src('local/*.css')
    .pipe(gulpSourcemaps.init({loadMaps: true}))
    .pipe(gulpPostcss([
      cssnano(),
    ]))
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
}
