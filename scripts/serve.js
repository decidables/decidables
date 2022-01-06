
// Node native modules
import http from 'http';

// devDependencies
import finalhandler from 'finalhandler';
import serveStatic from 'serve-static';

// Tasks
export function serve() {
  http.createServer((req, res) => {
    (serveStatic('.', {index: ['index.html']}))(req, res, finalhandler(req, res));
  }).listen(8000);
}
