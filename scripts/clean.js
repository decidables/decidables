
// Node native modules
import fs from 'node:fs';

// devDependencies
import {globby} from 'globby';

// Local Dependencies
import {DIR, PATH} from './config.js';
import * as utilities from './utility.js';

// Tasks
export async function cleanDevelop() {
  const dir = PATH.DEVELOP;

  await fs.promises.rm(dir, {recursive: true, force: true});
  await fs.promises.mkdir(dir);
}

export async function cleanBuild() {
  const dir = PATH.BUILD;

  await fs.promises.rm(dir, {recursive: true, force: true});
  await fs.promises.mkdir(dir);
}

export async function cleanLibrary() {
  const dir = PATH.LIBRARY;

  await fs.promises.rm(dir, {recursive: true, force: true});
  await fs.promises.mkdir(dir);
}

export async function cleanDeploySite() {
  const packageName = utilities.getPackageName();
  const dir = `${PATH.DEPLOY}/${packageName}`;

  await fs.promises.rm(dir, {recursive: true, force: true});
  await fs.promises.mkdir(dir);
}

export async function cleanDeployRoot() {
  const glob = `${PATH.DEPLOY}/{*.*,.*,${DIR.FONTS}}`;

  const globPaths = await globby(glob, {onlyFiles: false});

  await Promise.all(
    globPaths.map(
      async (globPath) => {
        await fs.promises.rm(globPath, {recursive: true, force: true});
      },
    ),
  );
}
