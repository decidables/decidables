
// Local Dependencies
import * as makes from './make.js';

export function buildFaviconsTask(configuration) {
  return makes.makeFaviconsTask(configuration, {isProduction: true});
}

export function buildFontsTask(fonts) {
  return makes.makeFontsTask(fonts, {isProduction: true});
}

export async function buildMarkdown() {
  return makes.makeMarkdown({isProduction: true});
}

export async function buildScripts() {
  return makes.makeScripts({isProduction: true});
}

export async function buildLibrary() {
  return makes.makeLibrary();
}

export async function buildStyles() {
  return makes.makeStyles({isProduction: true});
}
