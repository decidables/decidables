
// devDependencies
import gulp from 'gulp';
import gulpInject from 'gulp-inject';
import gulpRename from 'gulp-rename';
import gulpDartSass from 'gulp-dart-sass';
import nodeSassPackageImporter from 'node-sass-package-importer';

// Local dependencies
import * as cleans from '../../scripts/clean.js';
import * as lints from '../../scripts/lint.js';
import * as builds from '../../scripts/build.js';

// Re-export
export * from '../../scripts/clean.js';
export * from '../../scripts/lint.js';
export * from '../../scripts/build.js';

// Tasks
export const lint = gulp.parallel(
  lints.lintScripts,
  lints.lintStyles,
);

export function preparePlotly() {
  return gulp.src('src/components/plotly-style.template.js')
    .pipe(gulpInject(
      gulp.src('src/components/plotly-style.scss')
        .pipe(gulpDartSass({importer: nodeSassPackageImporter()}).on('error', gulpDartSass.logError))
        .pipe(gulpRename('plotly.css')),
      {
        starttag: '/* inject:{{ext}} */',
        endtag: '/* endinject */',
        transform: (filePath, file) => {
          // return file contents as string
          return file.contents.toString('utf8');
        },
      },
    ))
    .pipe(gulpRename('plotly-style.auto.js'))
    .pipe(gulp.dest('src/components/'));
}

export const build = gulp.series(
  cleans.cleanLib,
  await builds.buildLibraryTask('prospectableElements'),
);
