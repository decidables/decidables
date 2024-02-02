
// Node native modules
import fs from 'node:fs';

// devDependencies
import {globby} from 'globby';

// Local Dependencies
import * as utilities from './utility.js';

// Tasks
export async function cleanLib() {
  const dir = 'lib';

  await fs.promises.rm(dir, {recursive: true, force: true});
  await fs.promises.mkdir(dir);
}

export async function cleanLocal() {
  const dir = 'local';

  await fs.promises.rm(dir, {recursive: true, force: true});
  await fs.promises.mkdir(dir);
}

export async function cleanDist() {
  const dir = 'dist';

  await fs.promises.rm(dir, {recursive: true, force: true});
  await fs.promises.mkdir(dir);
}

export async function cleanDeploySite() {
  const packageName = utilities.getPackageName();
  const dir = `../../decidables.github.io/${packageName}`;

  await fs.promises.rm(dir, {recursive: true, force: true});
  await fs.promises.mkdir(dir);
}

export async function cleanDeployRoot() {
  const glob = '../../decidables.github.io/{*.*,.*,fonts}';

  const globPaths = await globby(glob, {onlyFiles: false});

  await Promise.all(
    globPaths.map(
      async (globPath) => {
        await fs.promises.rm(globPath, {recursive: true, force: true});
      },
    ),
  );
}
