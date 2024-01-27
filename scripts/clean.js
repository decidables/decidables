
// Node native modules
import fs from 'node:fs/promises';

// devDependencies
import {deleteAsync} from 'del';

// Local Dependencies
import * as utilities from './utility.js';

// Tasks
export async function cleanLib() {
  const dir = 'lib';

  await deleteAsync(dir);
  await fs.mkdir(dir);
}

export async function cleanLocal() {
  const dir = 'local';

  await deleteAsync(dir);
  await fs.mkdir(dir);
}

export async function cleanDist() {
  const dir = 'dist';

  await deleteAsync(dir);
  await fs.mkdir(dir);
}

export async function cleanDeploySite() {
  const packageName = utilities.getPackageName();
  const dir = `../../decidables.github.io/${packageName}`;

  await deleteAsync(dir, {force: true});
  await fs.mkdir(dir);
}

export async function cleanDeployRoot() {
  const glob = '../../decidables.github.io/{*.*,.*,fonts}';

  await deleteAsync(glob, {force: true});
}
