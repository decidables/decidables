
// devDependencies
import cssnano from 'cssnano';
import gulp from 'gulp';
import gulpHtmlmin from 'gulp-htmlmin';
import gulpPostcss from 'gulp-postcss';
import gulpTerser from 'gulp-terser';
import * as rollup from 'rollup';
import * as rollupPluginBabel from '@rollup/plugin-babel';
import rollupPluginCommonjs from '@rollup/plugin-commonjs';
import rollupPluginNodeResolve from '@rollup/plugin-node-resolve';
import {terser as rollupPluginTerser} from 'rollup-plugin-terser';
import rollupPluginWebWorkerLoader from 'rollup-plugin-web-worker-loader';

// Tasks
export async function buildLibraryTask(name) {
  let rollupCache;
  return async function buildLibrary() {
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

    await bundle.write({
      name,
      file: `lib/${name}.min.js`,
      format: 'umd',
      sourcemap: true,
    });
  };
}

export function buildConfig() {
  return gulp.src('local/.htaccess')
    .pipe(gulp.dest('dist'));
}

export function buildFonts() {
  return gulp.src('local/fonts/*.{woff,woff2}')
    .pipe(gulp.dest('dist/fonts'));
}

export function buildMarkup() {
  return gulp.src('local/*.html')
    .pipe(gulpHtmlmin({
      collapseWhitespace: true,
      removeComments: true,
    }))
    .pipe(gulp.dest('dist'));
}

export function buildScripts() {
  return gulp.src('local/*.js', {sourcemaps: true})
    .pipe(gulpTerser())
    .pipe(gulp.dest('dist', {sourcemaps: '.'}));
}

export function buildStyles() {
  return gulp.src('local/*.css', {sourcemaps: true})
    .pipe(gulpPostcss([
      cssnano(),
    ]))
    .pipe(gulp.dest('dist', {sourcemaps: '.'}));
}
