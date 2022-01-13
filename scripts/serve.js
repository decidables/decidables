
// devDependencies
import express from 'express';

// Tasks
export function serve() {
  const app = express();
  app.use(express.static('.'));
  app.listen(8000);
}

export function serveAll() {
  const app = express();

  app.use('/local/detectable', express.static('packages/detectable/local'));
  app.use('/local/prospectable', express.static('packages/prospectable/local'));

  app.use('/dist/detectable', express.static('packages/detectable/dist'));
  app.use('/dist/prospectable', express.static('packages/prospectable/dist'));

  app.listen(8000);
}
