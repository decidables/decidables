
// devDependencies
import gulp from 'gulp';

// Local dependencies
import * as utilities from '../../scripts/utility.js';
import * as cleans from '../../scripts/clean.js';
import * as lints from '../../scripts/lint.js';
import * as develops from '../../scripts/develop.js';
import * as watches from '../../scripts/watch.js';
import * as builds from '../../scripts/build.js';
import * as deploys from '../../scripts/deploy.js';

// Re-export
export * from '../../scripts/clean.js';
export * from '../../scripts/lint.js';
export * from '../../scripts/develop.js';
export * from '../../scripts/watch.js';
export * from '../../scripts/build.js';
export * from '../../scripts/deploy.js';
export * from '../../scripts/serve.js';

// Tasks
export const clean = gulp.parallel(
  cleans.cleanDevelop,
  cleans.cleanBuild,
  cleans.cleanDeploySite,
);

export const lint = gulp.parallel(
  lints.lintMarkdown,
  gulp.series(develops.developMarkdown, lints.lintDevelopMarkup),
  lints.lintScripts,
  lints.lintStyles,
);

const configFavicons = {
  appName: 'prospectαbλe',
  appShortName: 'prospectαbλe',
  appDescription: 'An Explorable Explanation of Cumulative Prospect Theory',
  background: '#e6e6e6',
  theme_color: '#e6e6e6',
};

export const developFavicons = develops.developFaviconsTask(configFavicons);

export const developFonts = develops.developFontsTask(
  utilities.getFontImports(new URL(import.meta.resolve('@decidables/decidables-site/fonts.yml'))),
);

export const develop = gulp.series(
  cleans.cleanDevelop,
  gulp.parallel(
    developFavicons,
    developFonts,
    develops.developMarkdown,
    develops.developScripts,
    develops.developStyles,
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

export const buildFavicons = builds.buildFaviconsTask(configFavicons);

export const buildFonts = builds.buildFontsTask(
  utilities.getFontImports(new URL(import.meta.resolve('@decidables/decidables-site/fonts.yml'))),
);

export const build = gulp.series(
  cleans.cleanBuild,
  gulp.parallel(
    buildFavicons,
    buildFonts,
    builds.buildMarkdown,
    builds.buildScripts,
  ),
  // So that Purgecss accounts for html and js
  builds.buildStyles,
);

export const deploy = gulp.series(
  builds.buildMarkdown,
  cleans.cleanDeploySite,
  deploys.deploySite,
);
