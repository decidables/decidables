
// devDependencies
import {deleteAsync} from 'del';

// Local Dependencies
import * as utilities from './utility.js';

// Tasks
export function cleanLib() {
  return deleteAsync('lib');
}

export function cleanLocal() {
  return deleteAsync('local');
}

export function cleanDist() {
  return deleteAsync('dist');
}

export function cleanDeploySite() {
  const packageName = utilities.getPackageName();
  return deleteAsync(`../../decidables.github.io/${packageName}`, {force: true});
}

export function cleanDeployRoot() {
  return deleteAsync('../../decidables.github.io/{*.*,.*,fonts}', {force: true});
}
