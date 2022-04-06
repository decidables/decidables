
// devDependencies
import fancyLog from 'fancy-log';
import glob from 'glob';
import gulp from 'gulp';
import gulpDartSass from 'gulp-dart-sass';
import gulpEjs from 'gulp-ejs';
import favicons from 'favicons';
import gulpFrontMatter from 'gulp-front-matter';
import gulpIf from 'gulp-if';
import gulpNotify from 'gulp-notify';
import {remark as gulpRemark} from 'gulp-remark';
import gulpRename from 'gulp-rename';
import gulpSvgmin from 'gulp-svgmin';
import localeEnUs from 'locale-en-us';
import mergeStream from 'merge-stream';
import nodeNotifier from 'node-notifier';
import nodeSassPackageImporter from 'node-sass-package-importer';
import {remarkDefinitionList, defListHastHandlers} from 'remark-definition-list';
import remarkDirective from 'remark-directive';
import remarkHtml from 'remark-html';
import remarkSmartypants from 'remark-smartypants';
import resolvePkg from 'resolve-pkg';
import * as rollup from 'rollup';
import * as rollupPluginBabel from '@rollup/plugin-babel';
import rollupPluginCommonjs from '@rollup/plugin-commonjs';
import rollupPluginNodeResolve from '@rollup/plugin-node-resolve';
import rollupPluginWebWorkerLoader from 'rollup-plugin-web-worker-loader';
import styleApa from 'style-apa';

// Local Dependencies
import remarkCiteproc from './remark-citeproc.js';
import remarkDiv from './remark-div.js';
import {remarkGlossary, extraEntries, extraTerms} from './remark-glossary.js';
import remarkSpan from './remark-span.js';
import * as utilities from './utility.js';

// Tasks
export function compileFaviconsTask(configuration) {
  return function compileFavicons() {
    favicons.config.files.android['manifest.json'].icons.splice(0, 5);
    favicons.config.files.android['manifest.json'].icons.splice(1, 2);
    return mergeStream(
      gulp.src('src/favicon.svg')
        .pipe(favicons.stream({
          path: '/',
          // appName: '<application name>',
          // appShortName: '<application>',
          // appDescription: '<description>',
          // developerName: 'Adam Krawitz',
          // developerURL: 'https://web.uvic.ca/psyc/krawitz/',
          // dir: 'auto',
          // lang: 'en-US',
          // background: '<color>',
          // theme_color: '<color>',
          // appleStatusBarStyle: 'default',
          display: 'browser',
          orientation: 'any',
          scope: './',
          start_url: './',
          // version: '1.0',
          // logging: false,
          // pixel_art: false,
          // loadManifestWithCredentials: false,
          // manifestRelativePaths: false,
          icons: {
            android: [
              'android-chrome-192x192.png',
              'android-chrome-512x512.png',
            ],
            appleIcon: [
              'apple-touch-icon.png',
            ],
            appleStartup: false,
            coast: false,
            favicons: [
              'favicon.ico',
            ],
            firefox: false,
            windows: false,
            yandex: false,
          },
          ...configuration,
        }))
        .pipe(gulpIf('**/manifest.json', gulpRename({extname: '.webmanifest'}))),
      gulp.src('src/favicon.svg')
        .pipe(gulpSvgmin()),
    )
      .pipe(gulp.dest('local'));
  };
}

export function compileFontsTask(fonts) {
  return function compileFonts() {
    return gulp.src(fonts.flatMap((font) => {
      return glob.sync(resolvePkg(font));
    }))
      .pipe(gulp.dest('local/fonts'));
  };
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
    .pipe(gulpFrontMatter({property: 'data'}))
    .pipe(gulpRemark({detectConfig: false, quiet: true})
      .use(remarkDefinitionList)
      .use(remarkDirective)
      .use(remarkCiteproc)
      .use(remarkGlossary, {location: 'glossary.html'})
      .use(remarkDiv, {keywords: ['ui']})
      .use(remarkSpan, {
        keywords: [
          'key', 'page', 'tool',
          'button', 'prompt', 'slider', 'switch', 'toggle',
        ],
      })
      .use(remarkSmartypants, {dashes: 'oldschool'})
      .use(remarkHtml, {
        sanitize: false,
        handlers: {...defListHastHandlers},
      }))
    .on('data', (file) => {
      return gulp.src(`src/${file.data.layout}.ejs`)
        .pipe(gulpFrontMatter({property: 'data'}))
        .pipe(gulpEjs(Object.assign(file.data, {
          resolvePkg,
          utilities,
          file: file.stem,
          contents: file.contents.toString(),
        })))
        .pipe(gulpRename({
          basename: file.stem,
          extname: '.html',
        }))
        .pipe(gulp.dest('local'));
    })
    .pipe(gulpNotify({title: 'Gulp: compileMarkdown done!', message: ' ', onLast: true}))
    .on('finish', () => {
      const entries = extraEntries();
      const terms = extraTerms();
      if (entries.size) {
        fancyLog.warn('remarkGlossary: Entries missing from terms:');
        fancyLog.warn(extraEntries());
      }
      if (terms.size) {
        fancyLog.warn('remarkGlossary: Terms missing from entries:');
        fancyLog.warn(terms);
      }
    });
}

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
export async function compileScripts() {
  const bundle = await rollup.rollup({
    cache: rollupCache,
    input: 'src/page.js',
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
  await bundle.write({
    dir: 'local',
    format: 'module',
    sourcemap: true,
  });
  await bundle.close();
  nodeNotifier.notify({title: 'Gulp: compileScripts done!', message: ' '});
}

export function compileStyles() {
  return gulp.src('src/*.scss', {sourcemaps: true})
    .pipe(gulpDartSass({importer: nodeSassPackageImporter()}).on('error', gulpDartSass.logError))
    .pipe(gulp.dest('local', {sourcemaps: '.'}))
    .pipe(gulpNotify({title: 'Gulp: compileStyles done!', message: ' ', onLast: true}));
}
