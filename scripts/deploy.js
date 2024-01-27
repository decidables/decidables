
// devDependencies
import cpy from 'cpy';

// Local Dependencies
import * as utilities from './utility.js';

// Tasks
export function deploySite() {
  const src = 'dist/**/{*,.*}';
  const dest = `../../decidables.github.io/${utilities.getPackageName()}`;

  return cpy(src, dest);
}

export function deployRoot() {
  const src = 'dist/**/{*,.*}';
  const dest = '../../decidables.github.io';

  return cpy(src, dest);
}
