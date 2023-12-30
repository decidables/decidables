
// Node native modules
import fs from 'fs';

// devDependencies
import citationJs from '@citation-js/core';
import '@citation-js/plugin-csl';
import fancyLog from 'fancy-log';
import {glob} from 'glob';
import gulp from 'gulp';
import gulpDartSass from 'gulp-dart-sass';
import gulpEjs from 'gulp-ejs';
import gulpFrontMatter from 'gulp-front-matter';
import gulpIf from 'gulp-if';
import gulpNotify from 'gulp-notify';
import gulpRename from 'gulp-rename';
import gulpSvgmin from 'gulp-svgmin';
import {fromHtmlIsomorphic as hastUtilFromHtmlIsomorphic} from 'hast-util-from-html-isomorphic';
import mergeStream from 'merge-stream';
import nodeNotifier from 'node-notifier';
import nodeSassPackageImporter from 'node-sass-package-importer';
import normalizePath from 'normalize-path';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import {remarkDefinitionList, defListHastHandlers} from 'remark-definition-list';
import remarkDirective from 'remark-directive';
import remarkRehype from 'remark-rehype';
import remarkSmartypants from 'remark-smartypants';
import resolvePkg from 'resolve-pkg';
import * as rollup from 'rollup';
import * as rollupPluginBabel from '@rollup/plugin-babel';
import rollupPluginCommonjs from '@rollup/plugin-commonjs';
import rollupPluginNodeResolve from '@rollup/plugin-node-resolve';
import {visualizer as rollupPluginVisualizer} from 'rollup-plugin-visualizer';
import rollupPluginWebWorkerLoader from 'rollup-plugin-web-worker-loader';

// Local Dependencies
import gulpFavicons from './gulp-favicons.js';
import gulpRemark from './gulp-remark.js';
import remarkCiteproc from './remark-citeproc.js';
import remarkDiv from './remark-div.js';
import {remarkGlossary, extraEntries, extraTerms} from './remark-glossary.js';
import remarkSpan from './remark-span.js';
import * as utilities from './utility.js';

// Tasks
export function compileFaviconsTask(configuration) {
  return function compileFavicons() {
    return mergeStream(
      gulp.src('src/favicon.svg')
        .pipe(gulpFavicons({
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
      return glob.sync(normalizePath(resolvePkg(font)));
    }))
      .pipe(gulp.dest('local/fonts'));
  };
}

export function compileMarkdown() {
  const linkIcon = fs.readFileSync(resolvePkg('bootstrap-icons/icons/link-45deg.svg')).toString();
  remarkCiteproc({
    initialize: true,
    locale: citationJs.plugins.config.get('@csl').locales.get('en-US'),
    style: citationJs.plugins.config.get('@csl').templates.get('apa'),
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
      // Hack to avoid remark-rehype issue #35 (https://github.com/remarkjs/remark-rehype/issues/35)
      .use((options, fileSet) => { return remarkRehype({}, options, fileSet); }, {
        allowDangerousHtml: true,
        handlers: {...defListHastHandlers},
      })
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings, {
        behavior: 'append',
        content: hastUtilFromHtmlIsomorphic(
          linkIcon,
          {fragment: true},
        ).children,
        headingProperties: {class: 'dec-heading'},
        properties: {
          ariaHidden: true,
          class: 'dec-heading-autolink',
          tabIndex: -1,
        },
      })
      .use(rehypeStringify, {allowDangerousHtml: true}))
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
    corejs: '3.33.3',
  }]],
  babelHelpers: 'bundled',
});
const pluginVisualizer = rollupPluginVisualizer({
  filename: 'rollup-stats.html',
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
      pluginVisualizer,
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
    // .pipe(gulpDartSass({loadPaths: ['../../node_modules']}).on('error', gulpDartSass.logError))
    .pipe(gulp.dest('local', {sourcemaps: '.'}))
    .pipe(gulpNotify({title: 'Gulp: compileStyles done!', message: ' ', onLast: true}));
}
