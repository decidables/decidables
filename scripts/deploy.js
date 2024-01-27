
// devDependencies
import cpy from 'cpy';

// Local Dependencies
import * as utilities from './utility.js';

// Tasks
export async function deploySite() {
  const src = 'dist/**/{*,.*}';
  const dest = `../../decidables.github.io/${utilities.getPackageName()}`;

  await cpy(src, dest);
}

export async function deployRoot() {
  const src = 'dist/**/{*,.*}';
  const dest = '../../decidables.github.io';

  await cpy(src, dest);
}
