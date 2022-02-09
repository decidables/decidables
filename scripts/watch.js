
// devDependencies
import gulp from 'gulp';

// Local dependencies
import * as compiles from './compile.js';

// Tasks
export function watchLibrariesTask(libraries) {
  return function watchLibraries() {
    gulp.watch(libraries.map((library) => { return `../../libraries/${library}/src/**/*.js`; }), {ignoreInitial: true}, compiles.compileScripts);
  };
}

export function watchMarkdown() {
  gulp.watch('src/**/*.{md,ejs}', {ignoreInitial: false}, compiles.compileMarkdown);
}

export function watchScripts() {
  gulp.watch('src/**/*.js', {ignoreInitial: false}, compiles.compileScripts);
}

export function watchStyles() {
  gulp.watch('src/**/*.scss', {ignoreInitial: false}, compiles.compileStyles);
}
