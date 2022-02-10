
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
  const sites = glob.sync('!(decidables)', {cwd: 'sites/'});
  const app = express();

  // local
  app.use(`/local`, express.static(`sites/decidables/local`));
  sites.forEach((site) => {
    app.use(`/local/${site}`, express.static(`sites/${site}/local`));
  });

  // dist
  app.use(`/dist`, express.static(`sites/decidables/dist`));
  sites.forEach((site) => {
    app.use(`/dist/${site}`, express.static(`sites/${site}/dist`));
  });

  // deploy
  app.use('/deploy', express.static('decidables.github.io'));

  app.listen(8000);
}
