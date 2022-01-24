
// devDependencies
import gulp from 'gulp';

// Local Dependencies
import * as utilities from './utility.js';

// Tasks
export function deploySite() {
  const packageName = utilities.getPackageName();
  return gulp.src('dist/**/{*,.*}')
    .pipe(gulp.dest(`../../decidables.github.io/${packageName}`));
}

export function deployRoot() {
  const packageName = utilities.getPackageName();
  return gulp.src('dist/**/{*,.*}')
    .pipe(gulp.dest('../../decidables.github.io'));
}
