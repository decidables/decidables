
// devDependencies
const gulp = require('gulp');

// Local dependencies
const compiles = require('./compile');

// Tasks
function watchLibrariesTask(libraries) {
  gulp.watch(libraries.map((library) => { return `../${library}/src/**/*.js`; }), {ignoreInitial: true}, compiles.compileScripts);
}
exports.watchLibrariesTask = watchLibrariesTask;

function watchMarkdown() {
  gulp.watch('src/**/*.{md,ejs}', {ignoreInitial: false}, compiles.compileMarkdown);
}
exports.watchMarkdown = watchMarkdown;

function watchScripts() {
  gulp.watch(['src/**/*.js'], {ignoreInitial: false}, compiles.compileScripts);
}
exports.watchScripts = watchScripts;

function watchStyles() {
  gulp.watch('src/**/*.scss', {ignoreInitial: false}, compiles.compileStyles);
}
exports.watchStyles = watchStyles;
