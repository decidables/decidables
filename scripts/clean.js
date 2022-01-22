
// devDependencies
import del from 'del';

// Tasks
export function cleanLib() {
  return del('lib/**/{*,.*}');
}

export function cleanLocal() {
  return del('local/**/{*,.*}');
}

export function cleanDist() {
  return del('dist/**/{*,.*}');
}

export function cleanDeployTask(site = null) {
  return function cleanDeploy() {
    const siteDir = `../../decidables.github.io${site ? `/${site}` : ``}`;
    return del([`${siteDir}/{*.*,.*}`, `${siteDir}/fonts`], {force: true});
  };
}
