
// devDependencies
import gulp from 'gulp';

// Local dependencies
import {DIR, PATH} from './config.js';
import * as develops from './develop.js';

// Tasks
export function watchLibrariesTask(libraries) {
  return function watchLibraries() {
    gulp.watch(
      libraries.map((library) => { return `${PATH.LIBRARIES}/${library}/${DIR.SOURCE}/**/*.{md,ejs}`; }),
      {ignoreInitial: true},
      develops.developMarkdown,
    );
    gulp.watch(
      libraries.map((library) => { return `${PATH.LIBRARIES}/${library}/${DIR.SOURCE}/**/*.js`; }),
      {ignoreInitial: true},
      develops.developScripts,
    );
    gulp.watch(
      libraries.map((library) => { return `${PATH.LIBRARIES}/${library}/${DIR.SOURCE}/**/*.scss`; }),
      {ignoreInitial: true},
      develops.developStyles,
    );
  };
}

export function watchMarkdown() {
  gulp.watch(`${PATH.SOURCE}/**/*.{md,ejs}`, {ignoreInitial: false}, develops.developMarkdown);
}

export function watchScripts() {
  gulp.watch(`${PATH.SOURCE}/**/*.js`, {ignoreInitial: false}, develops.developScripts);
}

export function watchStyles() {
  gulp.watch(`${PATH.SOURCE}/**/*.scss`, {ignoreInitial: false}, develops.developStyles);
}
