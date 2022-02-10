
// devDependencies
import camelcase from 'camelcase';

export function getPackageScopedName() {
  return process.env.npm_package_name;
}

export function getPackageScope() {
  return process.env.npm_package_name.split('/')[0];
}

export function getPackageName() {
  return process.env.npm_package_name.split('/')[1];
}

export function getPackageNameCamelCase() {
  return camelcase(process.env.npm_package_name.split('/')[1]);
}

export function getPackageVersion() {
  return process.env.npm_package_version;
}

export function getCurrentDate() {
  return (new Date).toLocaleDateString('en-CA', {dateStyle: 'medium'});
}
