
const lint = require('../../scripts/lint');
const build = require('../../scripts/build-library');

const packageJson = require('./package.json');

global.packageJson = packageJson;

module.exports = {...lint, ...build};
