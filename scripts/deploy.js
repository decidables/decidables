
// Node native modules
import fs from 'node:fs';

// Local Dependencies
import {PATH} from './config.js';
import * as utilities from './utility.js';

// Tasks
export async function deploySite() {
  const src = PATH.BUILD;
  const dest = `${PATH.DEPLOY}/${utilities.getPackageName()}`;

  await fs.promises.cp(src, dest, {recursive: true});
}

export async function deployRoot() {
  const src = PATH.BUILD;
  const dest = PATH.DEPLOY;

  await fs.promises.cp(src, dest, {recursive: true});
}
