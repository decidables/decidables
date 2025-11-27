
// devDependencies
import gulp from 'gulp';

// Local dependencies
import * as utilities from '../../scripts/utility.js';
import * as cleans from '../../scripts/clean.js';
import * as lints from '../../scripts/lint.js';
import * as compiles from '../../scripts/compile.js';
import * as watches from '../../scripts/watch.js';
import * as builds from '../../scripts/build.js';
import * as deploys from '../../scripts/deploy.js';

// Re-export
export * from '../../scripts/clean.js';
export * from '../../scripts/lint.js';
export * from '../../scripts/compile.js';
export * from '../../scripts/watch.js';
export * from '../../scripts/build.js';
export * from '../../scripts/deploy.js';
export * from '../../scripts/serve.js';

// Tasks
export const lint = gulp.parallel(
  lints.lintMarkdown,
  gulp.series(compiles.compileMarkdown, lints.lintMarkupLocal),
  lints.lintScripts,
  lints.lintStyles,
);

export const compileFavicons = compiles.compileFaviconsTask({
  appName: 'prospectαbλe',
  appShortName: 'prospectαbλe',
  appDescription: 'An Explorable Explanation of Cumulative Prospect Theory',
  background: '#e6e6e6',
  theme_color: '#e6e6e6',
});

export const compileFonts = compiles.compileFontsTask(
  utilities.getFontImports(new URL(import.meta.resolve('@decidables/decidables-site/fonts.yml'))),
);

export const compile = gulp.series(
  cleans.cleanLocal,
  gulp.parallel(
    compileFavicons,
    compileFonts,
    compiles.compileMarkdown,
    compiles.compileScripts,
    compiles.compileStyles,
  ),
);

export const watchLibraries = watches.watchLibrariesTask([
  'decidables-site',
  'decidables-elements',
  'prospectable-math',
  'prospectable-elements',
]);

export const watch = gulp.parallel(
  watchLibraries,
  watches.watchMarkdown,
  watches.watchScripts,
  watches.watchStyles,
);

export const buildFonts = builds.buildFontsTask(
  utilities.getFontExtensions(new URL(import.meta.resolve('@decidables/decidables-site/fonts.yml'))),
);

export const build = gulp.series(
  cleans.cleanDist,
  gulp.parallel(
    builds.buildFavicons,
    buildFonts,
    builds.buildMarkup,
    builds.buildScripts,
    builds.buildStyles,
  ),
);

export const deploy = gulp.series(
  compiles.compileMarkdown,
  builds.buildMarkup,
  cleans.cleanDeploySite,
  deploys.deploySite,
);
