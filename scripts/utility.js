
// Node native modules
import fs from 'node:fs';

// devDependencies
import camelcase from 'camelcase';

function readPackageJson() {
  return JSON.parse(fs.readFileSync('./package.json'));
}

export function getPackageScopedName() {
  return readPackageJson().name;
}

export function getPackageScope() {
  return readPackageJson().name.split('/')[0];
}

export function getPackageName() {
  return readPackageJson().name.split('/')[1];
}

export function getPackageNameCamelCase() {
  return camelcase(readPackageJson().name.split('/')[1]);
}

export function getPackageVersion() {
  return readPackageJson().version;
}

export function getCurrentDate() {
  return (new Date()).toLocaleDateString('en-CA', {dateStyle: 'medium'});
}
