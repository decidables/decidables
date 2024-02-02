
// Node native modules
import fs from 'node:fs';

// Local Dependencies
import * as utilities from './utility.js';

// Tasks
export async function deploySite() {
  const src = 'dist';
  const dest = `../../decidables.github.io/${utilities.getPackageName()}`;

  await fs.promises.cp(src, dest, {recursive: true});
}

export async function deployRoot() {
  const src = 'dist';
  const dest = '../../decidables.github.io';

  await fs.promises.cp(src, dest, {recursive: true});
}
