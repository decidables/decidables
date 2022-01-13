
// devDependencies
import gulp from 'gulp';
import gulpDartSass from 'gulp-dart-sass';
import gulpEjs from 'gulp-ejs';
import gulpFrontMatter from 'gulp-front-matter';
import gulpNotify from 'gulp-notify';
import {remark as gulpRemark} from 'gulp-remark';
import gulpRename from 'gulp-rename';
import localeEnUs from 'locale-en-us';
import nodeNotifier from 'node-notifier';
import nodeSassPackageImporter from 'node-sass-package-importer';
import remarkDirective from 'remark-directive';
import remarkHtml from 'remark-html';
import resolvePkg from 'resolve-pkg';
import * as rollup from 'rollup';
import * as rollupPluginBabel from '@rollup/plugin-babel';
import rollupPluginCommonjs from '@rollup/plugin-commonjs';
import rollupPluginNodeResolve from '@rollup/plugin-node-resolve';
import rollupPluginWebWorkerLoader from 'rollup-plugin-web-worker-loader';
import styleApa from 'style-apa';

// Local Dependencies
import remarkCiteproc from './remark-citeproc.js';
import remarkTerminology from './remark-terminology.js';

// Tasks
export function compileConfig() {
  return gulp.src('src/.htaccess')
    .pipe(gulp.dest('local'));
}

export function compileFonts() {
  return gulp.src([
    resolvePkg('source-code-pro/WOFF/OTF/SourceCodePro-{Regular,It,Semibold,SemiboldIt,Bold,BoldIt}.otf.woff'),
    resolvePkg('source-sans/WOFF/OTF/SourceSans3-{Regular,It,Semibold,SemiboldIt,Bold,BoldIt}.otf.woff'),
    resolvePkg('source-serif/WOFF/OTF/SourceSerif4-{Regular,It,Semibold,SemiboldIt,Bold,BoldIt}.otf.woff'),
    resolvePkg('source-code-pro/WOFF2/OTF/SourceCodePro-{Regular,It,Semibold,SemiboldIt,Bold,BoldIt}.otf.woff2'),
    resolvePkg('source-sans/WOFF2/OTF/SourceSans3-{Regular,It,Semibold,SemiboldIt,Bold,BoldIt}.otf.woff2'),
    resolvePkg('source-serif/WOFF2/OTF/SourceSerif4-{Regular,It,Semibold,SemiboldIt,Bold,BoldIt}.otf.woff2'),
  ])
    .pipe(gulp.dest('local/fonts'));
}

export function compileMarkdown() {
  remarkCiteproc({
    initialize: true,
    locale: localeEnUs,
    style: styleApa,
    bibliographyFile: './src/references.bib',
    referencesLink: 'references.html',
  });
  return gulp.src(['src/!(references).md', 'src/references.md']) // Insure that reference list includes references from all other files
    .pipe(gulpFrontMatter({property: 'data', remove: true}))
    .pipe(gulpRemark({detectConfig: false, quiet: true})
      .use(remarkDirective)
      .use(remarkCiteproc)
      .use(remarkTerminology)
      .use(remarkHtml, {sanitize: false}))
    .on('data', (file) => {
      return gulp.src(`src/${file.data.layout}.ejs`)
        .pipe(gulpFrontMatter({property: 'data'}))
        .pipe(gulpEjs(Object.assign(file.data, {
          file: file.stem,
          contents: file.contents.toString(),
        })))
        .pipe(gulpRename({
          basename: file.stem,
          extname: '.html',
        }))
        .pipe(gulp.dest('local'));
    })
    .pipe(gulpNotify({title: 'Gulp: compileMarkdown done!', message: ' ', onLast: true}));
}

let rollupCache;
export async function compileScripts() {
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
    dir: 'local',
    format: 'iife',
    sourcemap: true,
  });

  nodeNotifier.notify({title: 'Gulp: compileScripts done!', message: ' '});
}

export function compileStyles() {
  return gulp.src('src/*.scss', {sourcemaps: true})
    .pipe(gulpDartSass({importer: nodeSassPackageImporter()}).on('error', gulpDartSass.logError))
    .pipe(gulp.dest('local', {sourcemaps: '.'}))
    .pipe(gulpNotify({title: 'Gulp: compileStyles done!', message: ' ', onLast: true}));
}
