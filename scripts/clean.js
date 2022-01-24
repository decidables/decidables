
// devDependencies
import del from 'del';

// Local Dependencies
import * as utilities from './utility.js';

// Tasks
export function cleanLib() {
  return del('lib');
}

export function cleanLocal() {
  return del('local');
}

export function cleanDist() {
  return del('dist');
}

export function cleanDeploySite() {
  const packageName = utilities.getPackageName();
  return del(`../../decidables.github.io/${packageName}`, {force: true});
}

export function cleanDeployRoot() {
  return del('../../decidables.github.io/{*.*,.*,fonts}', {force: true});
}
