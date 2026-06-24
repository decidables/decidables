
// Node native modules
import fs from 'node:fs';
import module from 'node:module';
import path from 'node:path';
import url from 'node:url';

// devDependencies
import citationJs from '@citation-js/core';
import '@citation-js/plugin-csl';
import coreJsPackageJson from 'core-js/package.json' with { type: 'json' };
import cssnano from 'cssnano';
import ejs from 'ejs';
import fancyLog from 'fancy-log';
import favicons from 'favicons';
import frontMatter from 'front-matter';
import {globby} from 'globby';
import {fromHtmlIsomorphic as hastUtilFromHtmlIsomorphic} from 'hast-util-from-html-isomorphic';
import htmlMinifier from 'html-minifier';
import nodeNotifier from 'node-notifier';
import {yamlImporter as nodeSassYamlImporter} from 'node-sass-yaml-importer';
import postcss from 'postcss';
import postcssPurgecss from '@fullhuman/postcss-purgecss';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import {remarkDefinitionList, defListHastHandlers} from 'remark-definition-list';
import remarkDirective from 'remark-directive';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkSmartypants from 'remark-smartypants';
import * as rollup from 'rollup';
import * as rollupPluginBabel from '@rollup/plugin-babel';
import rollupPluginCommonjs from '@rollup/plugin-commonjs';
import rollupPluginNodeResolve from '@rollup/plugin-node-resolve';
import rollupPluginTerser from '@rollup/plugin-terser';
import {visualizer as rollupPluginVisualizer} from 'rollup-plugin-visualizer';
import rollupPluginWebWorkerLoader from 'rollup-plugin-web-worker-loader';
import rollupPluginYaml from '@rollup/plugin-yaml';
import * as sass from 'sass';
import * as svgo from 'svgo';
import {unified} from 'unified';

// Local Dependencies
import {DIR, PATH} from './config.js';
import remarkCiteproc from './remark-citeproc.js';
import remarkDiv from './remark-div.js';
import {remarkGlossary, extraEntries, extraTerms} from './remark-glossary.js';
import remarkSpan from './remark-span.js';
import * as utilities from './utility.js';

// Tasks

// Favicons
export function makeFaviconsTask(configuration, {isProduction = true} = {}) {
  return Object.defineProperty(
    async () => {
      const src = `${PATH.SOURCE}/favicon.svg`;
      const dest = isProduction ? PATH.BUILD : PATH.DEVELOP;

      const result = await favicons(
        src,
        {
          path: '/',
          display: 'browser',
          orientation: 'any',
          scope: './',
          start_url: './',
          icons: {
            android: [
              'android-chrome-192x192.png',
              'android-chrome-512x512.png',
            ],
            appleIcon: [
              'apple-touch-icon.png',
            ],
            appleStartup: false,
            favicons: [
              'favicon.ico',
            ],
            windows: false,
            yandex: false,
          },
          output: {
            images: true,
            files: true,
            html: false,
          },
          ...configuration,
        },
      );

      await fs.promises.mkdir(dest, {recursive: true});
      await Promise.all(
        [...result.images, ...result.files].map(
          async (item) => {
            await fs.promises.writeFile(path.posix.join(dest, item.name), item.contents);
          },
        ),
      );

      if (isProduction) {
        const svg = await fs.promises.readFile(src);
        const svgResult = svgo.optimize(svg);
        await fs.promises.writeFile(
          path.posix.join(dest, path.posix.basename(src)),
          svgResult.data,
        );
      } else {
        await fs.promises.cp(src, path.posix.join(dest, path.posix.basename(src)));
      }
    },
    'name',
    {value: isProduction ? 'buildFavicons' : 'developFavicons'},
  );
}

// Fonts
export function makeFontsTask(fonts, {isProduction = true} = {}) {
  return Object.defineProperty(
    async () => {
      const srcPaths = fonts.map(
        (font) => {
          return url.fileURLToPath(import.meta.resolve(font)).split(path.sep).join(path.posix.sep);
        },
      );
      const dest = `${isProduction ? PATH.BUILD : PATH.DEVELOP}/${DIR.FONTS}`;

      await Promise.all(
        srcPaths.map(
          async (srcPath) => {
            await fs.promises.cp(srcPath, path.posix.join(dest, path.posix.basename(srcPath)));
          },
        ),
      );
    },
    'name',
    {value: isProduction ? 'buildFonts' : 'developFonts'},
  );
}

// Markdown
export async function makeMarkdown({isProduction = true} = {}) {
  const src = [`${PATH.SOURCE}/!(references).md`];
  const lastSrc = [`${PATH.SOURCE}/references.md`];
  const dest = isProduction ? PATH.BUILD : PATH.DEVELOP;

  const srcPaths = [...await globby(src), ...await globby(lastSrc)];

  const linkIcon = await fs.promises.readFile(
    new URL(import.meta.resolve('bootstrap-icons/icons/link-45deg.svg')),
    {encoding: 'utf8'},
  );
  remarkCiteproc({
    initialize: true,
    locale: citationJs.plugins.config.get('@csl').locales.get('en-US'),
    style: citationJs.plugins.config.get('@csl').templates.get('apa'),
    bibliographyFile: `${PATH.SOURCE}/references.bib`,
    referencesLink: 'references.html',
  });

  // Serial execution so references are accumulated correctly
  await fs.promises.mkdir(dest, {recursive: true});
  await srcPaths.reduce(
    async (serial, srcPath) => {
      await serial;

      const srcBase = path.posix.basename(srcPath, '.md');
      const destName = `${srcBase}.html`;

      // Process markdown
      const content = await fs.promises.readFile(srcPath, {encoding: 'utf8'});
      const frontContent = frontMatter(content);
      const mdResult = await unified()
        .use(remarkParse)
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
        .use(remarkRehype, {
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
        .use(rehypeStringify, {allowDangerousHtml: true})
        .process(frontContent.body);

      // Process EJS
      const layout = await fs.promises.readFile(
        `${PATH.SOURCE}/${frontContent.attributes.layout}.ejs`,
        {encoding: 'utf8'},
      );
      const frontLayout = frontMatter(layout);
      const ejsResult = ejs.render(
        frontLayout.body,
        {
          ...frontContent.attributes,
          ...frontLayout.attributes,
          require: module.createRequire(import.meta.url),
          utilities,
          file: srcBase,
          contents: mdResult.value,
        },
      );

      const finalResult = isProduction
        ? htmlMinifier.minify(ejsResult, {
          collapseWhitespace: true,
          removeComments: true,
        })
        : ejsResult;

      await fs.promises.writeFile(path.posix.join(dest, destName), finalResult);
    },
    Promise.resolve(),
  );

  nodeNotifier.notify({
    title: `${isProduction ? 'buildMarkdown' : 'developMarkdown'} done!`,
    message: ' ',
  });

  const entries = extraEntries();
  if (entries.size) {
    fancyLog.warn('remarkGlossary: Entries missing from terms:');
    fancyLog.warn(entries);
  }
  const terms = extraTerms();
  if (terms.size) {
    fancyLog.warn('remarkGlossary: Terms missing from entries:');
    fancyLog.warn(terms);
  }
}

// Scripts
let rollupCache;
const pluginNodeResolve = rollupPluginNodeResolve({
  preferBuiltins: false,
});
const pluginCommonjs = rollupPluginCommonjs({
  strictRequires: 'auto',
});
const pluginWebWorkerLoader = rollupPluginWebWorkerLoader({
  targetPlatform: 'browser',
  sourcemap: true,
});
const pluginBabel = rollupPluginBabel.babel({
  babelHelpers: 'bundled',
  plugins: [['polyfill-corejs3', {
    method: 'entry-global',
    version: coreJsPackageJson.version,
  }]],
  presets: [['@babel/preset-env', {
  }]],
});
const pluginYaml = rollupPluginYaml();
const pluginVisualizer = rollupPluginVisualizer({
  filename: 'rollup-stats.auto.html',
});
const pluginTerser = rollupPluginTerser();

export async function makeScripts({isProduction = true} = {}) {
  const src = `${PATH.SOURCE}/page.js`;
  const dest = isProduction ? PATH.BUILD : PATH.DEVELOP;

  const bundle = await rollup.rollup({
    cache: rollupCache,
    input: src,
    plugins: [
      pluginNodeResolve,
      pluginCommonjs,
      pluginWebWorkerLoader,
      pluginBabel,
      pluginYaml,
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
    dir: dest,
    format: 'module',
    sourcemap: true,
    plugins: isProduction ? [pluginTerser] : [],
  });
  await bundle.close();

  nodeNotifier.notify({
    title: `${isProduction ? 'buildScripts' : 'developScripts'} done!`,
    message: ' ',
  });
}

export async function makeLibrary() {
  const src = `${PATH.SOURCE}/index.js`;
  const dest = PATH.LIBRARY;

  const bundle = await rollup.rollup({
    cache: rollupCache,
    input: src,
    plugins: [
      pluginNodeResolve,
      pluginCommonjs,
      pluginWebWorkerLoader,
      pluginBabel,
      pluginYaml,
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

  const packageName = utilities.getPackageNameCamelCase();

  // UMD
  await bundle.write({
    name: packageName,
    file: path.posix.join(dest, `${packageName}.umd.js`),
    format: 'umd',
    sourcemap: true,
  });

  // Minified UMD
  await bundle.write({
    name: packageName,
    file: path.posix.join(dest, `${packageName}.umd.min.js`),
    format: 'umd',
    sourcemap: true,
    plugins: [pluginTerser],
  });

  // ESM
  await bundle.write({
    name: packageName,
    file: path.posix.join(dest, `${packageName}.esm.js`),
    format: 'esm',
    sourcemap: true,
  });

  // Minified ESM
  await bundle.write({
    name: packageName,
    file: path.posix.join(dest, `${packageName}.esm.min.js`),
    format: 'esm',
    sourcemap: true,
    plugins: [pluginTerser],
  });
}

// Styles
export async function makeStyles({isProduction = true} = {}) {
  const src = `${PATH.SOURCE}/*.scss`;
  const dest = isProduction ? PATH.BUILD : PATH.DEVELOP;

  const srcPaths = await globby(src);

  // Faster to use sync than async!?
  const compiler = sass.initCompiler();

  // Wrap nodeSassYamlImporter to provide new Sass `pkg:` package resolution
  const yamlImporter = {
    canonicalize(dataUrl, context) {
      // Only handle *.yaml, *.yml, and *.json files
      if (!/\.(ya?ml|json)$/.test(dataUrl)) return null;

      return dataUrl.startsWith('pkg:')
        ? new URL(import.meta.resolve(dataUrl.slice(4)))
        : nodeSassYamlImporter.canonicalize(dataUrl, context);
    },
    load: nodeSassYamlImporter.load,
  };

  await fs.promises.mkdir(dest, {recursive: true});
  await Promise.all(
    srcPaths.map(
      async (srcPath) => {
        const srcBase = path.posix.basename(srcPath, '.scss');
        const srcDir = path.posix.dirname(srcPath);
        const destName = `${srcBase}.css`;
        const mapName = `${destName}.map`;

        const sassResult = compiler.compile(srcPath, {
          importers: [
            yamlImporter,
            new sass.NodePackageImporter(),
          ],
          sourceMap: true,
          sourceMapIncludeSources: true,
          quietDeps: true, // TEMPORARY: Silence Bootstrap deprecations!
          silenceDeprecations: ['import'], // TEMPORARY: Silence Bootstrap deprecations!
        });

        // Fix sourceMap sources
        sassResult.sourceMap.file = destName;
        sassResult.sourceMap.sources = sassResult.sourceMap.sources.map((source) => {
          return path.relative(srcDir, url.fileURLToPath(source))
            .split(path.sep)
            .join(path.posix.sep);
        });
        sassResult.css = `${sassResult.css}\n/*# sourceMappingURL=${mapName} */`;

        const finalResult = isProduction
          ? await postcss([
            postcssPurgecss({
              content: [`${dest}/*.{html,js}`],
            }),
            cssnano(),
          ]).process(sassResult.css, {
            from: destName,
            // For sourcemaps, this makes it act as if src and dest files are in the same directory
            to: destName,
            map: {
              prev: sassResult.sourceMap,
            },
          })
          : sassResult;

        await fs.promises.writeFile(
          path.posix.join(dest, destName),
          finalResult.css,
        );
        await fs.promises.writeFile(
          path.posix.join(dest, mapName),
          isProduction ? finalResult.map.toString() : JSON.stringify(finalResult.sourceMap),
        );
      },
    ),
  );

  await compiler.dispose();

  nodeNotifier.notify({
    title: `${isProduction ? 'buildStyles' : 'developStyles'} done!`,
    message: ' ',
  });
}
