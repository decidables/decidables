
// devDependencies
const del = require('del');

// Tasks
function cleanLib() {
  return del(['lib/**/*', 'lib/**/.*']);
}
exports.cleanLib = cleanLib;

function cleanLocal() {
  return del(['local/**/*', 'local/**/.*']);
}
exports.cleanLocal = cleanLocal;

function cleanDist() {
  return del(['dist/**/*', 'dist/**/.*']);
}
exports.cleanDist = cleanDist;
