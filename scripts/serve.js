
// devDependencies
import express from 'express';
import glob from 'glob';

// Tasks
export function serve() {
  const app = express();
  app.use(express.static('.'));
  app.listen(8000);
}

export function serveAll() {
  const sites = glob.sync('*', {cwd: 'sites/'});
  const app = express();

  sites.forEach((site) => {
    app.use(`/local/${site}`, express.static(`sites/${site}/local`));
    app.use(`/dist/${site}`, express.static(`sites/${site}/dist`));
  });
  app.use('/deploy', express.static('decidables.github.io'));

  app.listen(8000);
}
