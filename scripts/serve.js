
// Node native modules
const http = require('http');

// devDependencies
const finalhandler = require('finalhandler');
const serveStatic = require('serve-static');

// Tasks
function serve() {
  http.createServer((req, res) => {
    (serveStatic('.', {index: ['index.html']}))(req, res, finalhandler(req, res));
  }).listen(8000);
}
exports.serve = serve;
