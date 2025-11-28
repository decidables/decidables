
// Node native modules
import fs from 'node:fs';
import module from 'node:module';
import path from 'node:path';
import url from 'node:url';

// devDependencies
import citationJs from '@citation-js/core';
import '@citation-js/plugin-csl';
import ejs from 'ejs';
import fancyLog from 'fancy-log';
import favicons from 'favicons';
import frontMatter from 'front-matter';
import {globby} from 'globby';
import {fromHtmlIsomorphic as hastUtilFromHtmlIsomorphic} from 'hast-util-from-html-isomorphic';
import nodeNotifier from 'node-notifier';
import {yamlImporter as nodeSassYamlImporter} from 'node-sass-yaml-importer';
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
import {visualizer as rollupPluginVisualizer} from 'rollup-plugin-visualizer';
import rollupPluginWebWorkerLoader from 'rollup-plugin-web-worker-loader';
import rollupPluginYaml from '@rollup/plugin-yaml';
import * as sass from 'sass';
import {unified} from 'unified';

// Local Dependencies
import remarkCiteproc from './remark-citeproc.js';
import remarkDiv from './remark-div.js';
import {remarkGlossary, extraEntries, extraTerms} from './remark-glossary.js';
import remarkSpan from './remark-span.js';
import * as utilities from './utility.js';

// Tasks
export function compileFaviconsTask(configuration) {
  return async function compileFavicons() {
    const src = 'src/favicon.svg';
    const dest = './local';

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

    await fs.promises.cp(src, path.posix.join(dest, path.posix.basename(src)));
  };
}

export function compileFontsTask(fonts) {
  return async function compileFonts() {
    const srcPaths = fonts.map(
      (font) => {
        return url.fileURLToPath(import.meta.resolve(font)).split(path.sep).join(path.posix.sep);
      },
    );
    const dest = 'local/fonts';

    await Promise.all(
      srcPaths.map(
        async (srcPath) => {
          await fs.promises.cp(srcPath, path.posix.join(dest, path.posix.basename(srcPath)));
        },
      ),
    );
  };
}

export async function compileMarkdown() {
  const src = ['src/!(references).md'];
  const lastSrc = ['src/references.md'];
  const dest = 'local';

  const srcPaths = [...await globby(src), ...await globby(lastSrc)];

  const linkIcon = await fs.promises.readFile(new URL(import.meta.resolve('bootstrap-icons/icons/link-45deg.svg')), {encoding: 'utf8'});
  remarkCiteproc({
    initialize: true,
    locale: citationJs.plugins.config.get('@csl').locales.get('en-US'),
    style: citationJs.plugins.config.get('@csl').templates.get('apa'),
    bibliographyFile: './src/references.bib',
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
      const result = await unified()
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
      const layout = await fs.promises.readFile(`src/${frontContent.attributes.layout}.ejs`, {encoding: 'utf8'});
      const frontLayout = frontMatter(layout);
      const finalResult = ejs.render(
        frontLayout.body,
        {
          ...frontContent.attributes,
          ...frontLayout.attributes,
          require: module.createRequire(import.meta.url),
          utilities,
          file: srcBase,
          contents: result.value,
        },
      );

      await fs.promises.writeFile(path.posix.join(dest, destName), finalResult);
    },
    Promise.resolve(),
  );

  nodeNotifier.notify({title: 'compileMarkdown done!', message: ' '});

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

let rollupCache;
const pluginNodeResolve = rollupPluginNodeResolve({
  preferBuiltins: false,
});
const pluginCommonjs = rollupPluginCommonjs({
  strictRequires: 'auto',
  // Hack to deal with unused dynamic require in Plotly
  // https://github.com/plotly/plotly.js/blob/858c3a6ba88e06ba36a6f98a06dfa96e7ef150db/src/registry.js#L235
  ignore: ['maplibre-gl/dist/maplibre-gl.css'],
});
const pluginWebWorkerLoader = rollupPluginWebWorkerLoader({
  targetPlatform: 'browser',
  sourcemap: true,
});
const pluginBabel = rollupPluginBabel.babel({
  presets: [['@babel/preset-env', {
    bugfixes: true,
    useBuiltIns: 'entry',
    corejs: '3.46.0',
  }]],
  babelHelpers: 'bundled',
});
const pluginYaml = rollupPluginYaml();
const pluginVisualizer = rollupPluginVisualizer({
  filename: 'rollup-stats.auto.html',
});
export async function compileScripts() {
  const src = 'src/page.js';
  const dest = 'local';

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
  });
  await bundle.close();

  nodeNotifier.notify({title: 'compileScripts done!', message: ' '});
}

export async function compileStyles() {
  const src = 'src/*.scss';
  const dest = 'local';

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

        const result = compiler.compile(srcPath, {
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
        result.sourceMap.file = destName;
        result.sourceMap.sources = result.sourceMap.sources.map((source) => {
          return path.relative(srcDir, url.fileURLToPath(source))
            .split(path.sep)
            .join(path.posix.sep);
        });

        await fs.promises.writeFile(
          path.posix.join(dest, destName),
          `${result.css}\n/*# sourceMappingURL=${mapName} */`,
        );
        await fs.promises.writeFile(
          path.posix.join(dest, mapName),
          JSON.stringify(result.sourceMap),
        );
      },
    ),
  );

  await compiler.dispose();

  nodeNotifier.notify({title: 'compileStyles done!', message: ' '});
}
