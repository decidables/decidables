
// Node native modules
import fs from 'node:fs/promises';
import path from 'node:path';

// devDependencies
import cpy from 'cpy';
import cssnano from 'cssnano';
import {globby} from 'globby';
import htmlMinifier from 'html-minifier';
import postcss from 'postcss';
import postcssPurgecss from '@fullhuman/postcss-purgecss';
import * as rollup from 'rollup';
import * as rollupPluginBabel from '@rollup/plugin-babel';
import rollupPluginCommonjs from '@rollup/plugin-commonjs';
import rollupPluginNodeResolve from '@rollup/plugin-node-resolve';
import rollupPluginTerser from '@rollup/plugin-terser';
import {visualizer as rollupPluginVisualizer} from 'rollup-plugin-visualizer';
import rollupPluginWebWorkerLoader from 'rollup-plugin-web-worker-loader';
import svgo from 'svgo';
import * as terser from 'terser';

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
    corejs: '3.33.3',
  }]],
  babelHelpers: 'bundled',
});
const pluginVisualizer = rollupPluginVisualizer({
  filename: 'rollup-stats.html',
});
const pluginTerser = rollupPluginTerser();
export async function buildLibrary() {
  const src = 'src/index.js';
  const dest = 'lib';

  const bundle = await rollup.rollup({
    cache: rollupCache,
    input: src,
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

  const packageName = utilities.getPackageNameCamelCase();

  // UMD
  await bundle.write({
    name: packageName,
    file: path.join(dest, `${packageName}.umd.js`),
    format: 'umd',
    sourcemap: true,
  });

  // Minified UMD
  await bundle.write({
    name: packageName,
    file: path.join(dest, `${packageName}.umd.min.js`),
    format: 'umd',
    sourcemap: true,
    plugins: [pluginTerser],
  });

  // ESM
  await bundle.write({
    name: packageName,
    file: path.join(dest, `${packageName}.esm.js`),
    format: 'esm',
    sourcemap: true,
  });

  // Minified ESM
  await bundle.write({
    name: packageName,
    file: path.join(dest, `${packageName}.esm.min.js`),
    format: 'esm',
    sourcemap: true,
    plugins: [pluginTerser],
  });
}

export async function buildFavicons() {
  const svgSrc = 'local/favicon.svg';
  const otherSrc = 'local/*.{ico,png,webmanifest}';
  const svgDest = 'dist/favicon.svg';
  const otherDest = 'dist';

  const svg = await fs.readFile(svgSrc);
  const svgResult = svgo.optimize(svg);
  await fs.writeFile(svgDest, svgResult.data);

  return cpy(otherSrc, otherDest);
}

export async function buildFonts() {
  const src = 'local/fonts/*.{woff,woff2}';
  const dest = 'dist/fonts';

  return cpy(src, dest);
}

export async function buildMarkup() {
  const src = 'local/*.html';
  const dest = 'dist';

  const srcPaths = await globby(src);

  return Promise.all(
    srcPaths.map(
      async (srcPath) => {
        const srcName = path.basename(srcPath);

        const content = (await fs.readFile(srcPath)).toString();

        const result = htmlMinifier.minify(content, {
          collapseWhitespace: true,
          removeComments: true,
        });

        await fs.writeFile(path.join(dest, srcName), result);
      },
    ),
  );
}

export async function buildScripts() {
  const src = 'local/*.js';
  const dest = 'dist';

  const srcPaths = await globby(src);

  return Promise.all(
    srcPaths.map(
      async (srcPath) => {
        const srcName = path.basename(srcPath);
        const mapPath = `${srcPath}.map`;
        const mapName = `${srcName}.map`;

        const content = (await fs.readFile(srcPath)).toString();
        const map = (await fs.readFile(mapPath)).toString();

        const result = await terser.minify(content, {
          sourceMap: {
            content: map,
            filename: srcName,
            url: mapName,
          },
        });

        await fs.writeFile(path.join(dest, srcName), result.code);
        await fs.writeFile(path.join(dest, mapName), result.map);
      },
    ),
  );
}

export async function buildStyles() {
  const src = 'local/*.css';
  const dest = 'dist';

  const srcPaths = await globby(src);

  return Promise.all(
    srcPaths.map(
      async (srcPath) => {
        const srcName = path.basename(srcPath);
        const mapName = `${srcName}.map`;

        const content = (await fs.readFile(srcPath)).toString();

        const result = await postcss([
          postcssPurgecss({
            content: ['./local/*.{html,js}'],
          }),
          cssnano(),
        ]).process(content, {
          from: srcPath,
          // For sourcemaps, this makes it act as if src and dest files are in the same directory
          to: srcPath,
        });

        await fs.writeFile(path.join(dest, srcName), result.css);
        await fs.writeFile(path.join(dest, mapName), result.map.toString());
      },
    ),
  );
}
