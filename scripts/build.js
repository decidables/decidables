
// devDependencies
import cssnano from 'cssnano';
import gulp from 'gulp';
import gulpHtmlmin from 'gulp-htmlmin';
import gulpPostcss from 'gulp-postcss';
import gulpSourcemaps from 'gulp-sourcemaps';
import gulpTerser from 'gulp-terser';
import * as rollup from 'rollup';
import * as rollupPluginBabel from '@rollup/plugin-babel';
import rollupPluginCommonjs from '@rollup/plugin-commonjs';
import rollupPluginNodeResolve from '@rollup/plugin-node-resolve';
import { terser as rollupPluginTerser } from "rollup-plugin-terser";
import rollupPluginWebWorkerLoader from 'rollup-plugin-web-worker-loader';

// Tasks
let rollupCache;
export async function buildLibraryTask(name) {
  const bundle = await rollup.rollup({
    cache: rollupCache,
    input: 'src/index.js',
    plugins: [
      rollupPluginNodeResolve({preferBuiltins: false}),
      rollupPluginCommonjs(),
      rollupPluginWebWorkerLoader({targetPlatform: 'browser', sourcemap: true}),
      rollupPluginBabel.babel({
        presets: [['@babel/preset-env', {useBuiltIns: 'entry', corejs: '3.20'}]],
        babelHelpers: 'bundled',
      }),
      rollupPluginTerser(),
    ],
    // Hide warnings for circular dependencies, which are allowed in the ES6 spec
    // https://github.com/rollup/rollup/issues/2271#issuecomment-475540827
    onwarn: (warning, warn) => {
      if (warning.code !== 'CIRCULAR_DEPENDENCY') {
        warn(warning);
      }
    },
  });

  rollupCache = bundle.cache;

  bundle.write({
    // dir: 'lib',
    name,
    file: `lib/${name}.min.js`,
    format: 'umd',
    sourcemap: true,
  });
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
    .pipe(gulpTerser())
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
