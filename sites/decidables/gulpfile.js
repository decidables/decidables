
// devDependencies
import gulp from 'gulp';

// Local dependencies
import * as cleans from '../../scripts/clean.js';
import * as lints from '../../scripts/lint.js';
import * as compiles from '../../scripts/compile.js';
import * as watches from '../../scripts/watch.js';
import * as builds from '../../scripts/build.js';
import * as deploys from '../../scripts/deploy.js';
import * as serves from '../../scripts/serve.js';

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
  lints.lintMarkup,
  lints.lintScripts,
  lints.lintStyles,
);

export const compile = gulp.series(
  cleans.cleanLocal,
  gulp.parallel(
    compiles.compileFontsTask([
      'source-code-pro/WOFF{,2}/OTF/SourceCodePro-{,Light,Regular,Semibold,Bold}{,It}.otf.woff{,2}',
      'source-sans/WOFF{,2}/OTF/SourceSans3-{,Light,Regular,Semibold,Bold}{,It}.otf.woff{,2}',
      'source-serif/WOFF{,2}/OTF/SourceSerif4-{,Light,Regular,Semibold,Bold}{,It}.otf.woff{,2}',
      'source-code-pro/WOFF{,2}/VAR/SourceCodeVariable-{Roman,Italic}.otf.woff{,2}',
      'source-sans/WOFF{,2}/VAR/SourceSans3VF-{Roman,Italic}.otf.woff{,2}',
      'source-serif/WOFF{,2}/VAR/SourceSerif4Variable-{Roman,Italic}.otf.woff{,2}',
    ]),
    compiles.compileMarkdown,
    compiles.compileMarkup,
    compiles.compileScripts,
    compiles.compileStyles,
  ),
);

export const watch = gulp.parallel(
  watches.watchLibrariesTask([
    'decidable-elements',
    'detectable-math',
    'detectable-elements',
    'prospectable-math',
    'prospectable-elements',
  ]),
  watches.watchMarkdown,
  watches.watchMarkup,
  watches.watchScripts,
  watches.watchStyles,
);

export const build = gulp.series(
  cleans.cleanDist,
  gulp.parallel(
    builds.buildFonts,
    builds.buildMarkup,
    builds.buildScripts,
    builds.buildStyles,
  ),
);

export const deploy = gulp.series(
  cleans.cleanDeployRoot,
  deploys.deployRoot,
);
