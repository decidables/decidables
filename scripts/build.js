
// devDependencies
import cssnano from 'cssnano';
import gulp from 'gulp';
import gulpHtmlmin from 'gulp-htmlmin';
import gulpPostcss from 'gulp-postcss';
import gulpTerser from 'gulp-terser';
import postcssPurgecss from '@fullhuman/postcss-purgecss';
import * as rollup from 'rollup';
import * as rollupPluginBabel from '@rollup/plugin-babel';
import rollupPluginCommonjs from '@rollup/plugin-commonjs';
import rollupPluginNodeResolve from '@rollup/plugin-node-resolve';
import {terser as rollupPluginTerser} from 'rollup-plugin-terser';
import rollupPluginWebWorkerLoader from 'rollup-plugin-web-worker-loader';

// Local Dependencies
import * as utilities from './utility.js';

// Tasks
let rollupCache;
const pluginNodeResolve = rollupPluginNodeResolve({
  preferBuiltins: false,
});
const pluginCommonjs = rollupPluginCommonjs();
const pluginWebWorkerLoader = rollupPluginWebWorkerLoader({
  targetPlatform: 'browser',
  sourcemap: true,
});
const pluginBabel = rollupPluginBabel.babel({
  presets: [['@babel/preset-env', {
    bugfixes: true,
    useBuiltIns: 'entry',
    corejs: '3.21',
  }]],
  babelHelpers: 'bundled',
});
const pluginTerser = rollupPluginTerser();
export async function buildLibrary() {
  const bundle = await rollup.rollup({
    cache: rollupCache,
    input: 'src/index.js',
    plugins: [
      pluginNodeResolve,
      pluginCommonjs,
      pluginWebWorkerLoader,
      pluginBabel,
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

  const packageName = utilities.getPackageNameCamelCase();

  // UMD
  await bundle.write({
    name: packageName,
    file: `lib/${packageName}.umd.js`,
    format: 'umd',
    sourcemap: true,
  });

  // Minified UMD
  await bundle.write({
    name: packageName,
    file: `lib/${packageName}.umd.min.js`,
    format: 'umd',
    sourcemap: true,
    plugins: [pluginTerser],
  });

  // ESM
  await bundle.write({
    name: packageName,
    file: `lib/${packageName}.esm.js`,
    format: 'esm',
    sourcemap: true,
  });

  // Minified ESM
  await bundle.write({
    name: packageName,
    file: `lib/${packageName}.esm.min.js`,
    format: 'esm',
    sourcemap: true,
    plugins: [pluginTerser],
  });
}

export function buildFavicons() {
  return gulp.src('local/*.{ico,png,svg,webmanifest}')
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
      postcssPurgecss({
        content: ['./local/*.{html,js}'],
      }),
      cssnano(),
    ]))
    .pipe(gulp.dest('dist', {sourcemaps: '.'}));
}
