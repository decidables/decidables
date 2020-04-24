
// devDependencies
const gulp = require('gulp');

// Tasks
function watchMarkdown() {
  gulp.watch('src/**/*.{md,ejs}', {ignoreInitial: false}, gulp.series('compile:markdown'));
}
exports.watchMarkdown = watchMarkdown;

function watchScripts() {
  gulp.watch(['src/**/*.js'], {ignoreInitial: false}, gulp.series('compile:scripts'));
}
exports.watchScripts = watchScripts;

function watchStyles() {
  gulp.watch('src/**/*.scss', {ignoreInitial: false}, gulp.series('compile:styles'));
}
exports.watchStyles = watchStyles;
