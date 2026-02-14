
// devDependencies
import gulp from 'gulp';

// Local dependencies
import {DIR, PATH} from './config.js';
import * as makes from './make.js';

// Tasks
export function watchLibrariesTask(libraries) {
  return function watchLibraries() {
    gulp.watch(
      libraries.map((library) => { return `${PATH.LIBRARIES}/${library}/${DIR.SOURCE}/**/*.{md,ejs}`; }),
      {ignoreInitial: true},
      makes.developMarkdown,
    );
    gulp.watch(
      libraries.map((library) => { return `${PATH.LIBRARIES}/${library}/${DIR.SOURCE}/**/*.js`; }),
      {ignoreInitial: true},
      makes.developScripts,
    );
    gulp.watch(
      libraries.map((library) => { return `${PATH.LIBRARIES}/${library}/${DIR.SOURCE}/**/*.scss`; }),
      {ignoreInitial: true},
      makes.developStyles,
    );
  };
}

export function watchMarkdown() {
  gulp.watch(`${PATH.SOURCE}/**/*.{md,ejs}`, {ignoreInitial: false}, makes.developMarkdown);
}

export function watchScripts() {
  gulp.watch(`${PATH.SOURCE}/**/*.js`, {ignoreInitial: false}, makes.developScripts);
}

export function watchStyles() {
  gulp.watch(`${PATH.SOURCE}/**/*.scss`, {ignoreInitial: false}, makes.developStyles);
}
