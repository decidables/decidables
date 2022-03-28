
// devDependencies
import gulp from 'gulp';

// Local dependencies
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

// Debug
// .pipe(gulpDebug())

// Tasks
export const lint = gulp.parallel(
  lints.lintMarkdown,
  gulp.series(compiles.compileMarkdown, lints.lintMarkupLocal),
  lints.lintScripts,
  lints.lintStyles,
);

export const compileFavicons = compiles.compileFaviconsTask({
  appName: 'd′etectable',
  appShortName: 'd′etectable',
  appDescription: 'An Explorable Explanation of Signal Detection Theory',
  background: '#e6e6e6',
  theme_color: '#e6e6e6',
});

export const compileFonts = compiles.compileFontsTask([
  'source-code-pro/WOFF{,2}/OTF/SourceCodePro-{,Regular,Semibold,Bold}{,It}.otf.woff{,2}',
  'source-sans/WOFF{,2}/OTF/SourceSans3-{,Regular,Semibold,Bold}{,It}.otf.woff{,2}',
  'source-serif/WOFF{,2}/OTF/SourceSerif4-{,Regular,Semibold,Bold}{,It}.otf.woff{,2}',
  'source-code-pro/WOFF{,2}/VAR/SourceCodeVariable-{Roman,Italic}.otf.woff{,2}',
  'source-sans/WOFF{,2}/VAR/SourceSans3VF-{Roman,Italic}.otf.woff{,2}',
  'source-serif/WOFF{,2}/VAR/SourceSerif4Variable-{Roman,Italic}.otf.woff{,2}',
]);

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
  'decidables-elements',
  'detectable-math',
  'detectable-elements',
]);

export const watch = gulp.parallel(
  watchLibraries,
  watches.watchMarkdown,
  watches.watchScripts,
  watches.watchStyles,
);

export const build = gulp.series(
  cleans.cleanDist,
  gulp.parallel(
    builds.buildFavicons,
    builds.buildFonts,
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
