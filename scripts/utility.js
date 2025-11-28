
// Node native modules
import fs from 'node:fs';
import path from 'node:path';

// devDependencies
import * as jsYaml from 'js-yaml';
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

export function getPackageDirectory() {
  return process.cwd();
}

export function getCurrentDate() {
  return (new Date()).toLocaleDateString('en-CA', {dateStyle: 'medium'});
}

export function getFontImports(fontsConfig) {
  const fontsString = fs.readFileSync(fontsConfig, {encoding: 'utf8'});
  const {fonts} = jsYaml.load(fontsString);

  return Object.entries(fonts).flatMap(([filename, font]) => {
    return Object.entries(font.formats).map(([, format]) => {
      return path.posix.join(font.package, format.path, `${filename}.${format.extension}`);
    });
  });
}

export function getFontExtensions(fontsConfig) {
  const fontsString = fs.readFileSync(fontsConfig, {encoding: 'utf8'});
  const {fonts} = jsYaml.load(fontsString);

  const extensions = new Set();
  Object.entries(fonts).forEach(([, font]) => {
    Object.entries(font.formats).forEach(([, format]) => {
      extensions.add(format.extension);
    });
  });

  return [...extensions];
}
