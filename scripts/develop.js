
// Local Dependencies
import * as makes from './make.js';

export function developFaviconsTask(configuration) {
  return makes.makeFaviconsTask(configuration, {isProduction: false});
}

export function developFontsTask(fonts) {
  return makes.makeFontsTask(fonts, {isProduction: false});
}

export async function developMarkdown() {
  return makes.makeMarkdown({isProduction: false});
}

export async function developScripts() {
  return makes.makeScripts({isProduction: false});
}

export async function developStyles() {
  return makes.makeStyles({isProduction: false});
}
