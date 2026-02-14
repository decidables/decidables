
// devDependencies
import express from 'express';
import {globby} from 'globby';

// Local Dependencies
import {DIR, PATH, URL} from './config.js';

// Tasks
export function serve() {
  const app = express();
  app.use(express.static('.'));
  app.listen(8000);
}

export async function serveAll() {
  const sites = await globby(['*', '!decidables'], {
    cwd: PATH.SITES,
    onlyFiles: false,
    onlyDirectories: true,
  });
  const app = express();

  // Develop
  app.use(URL.DEVELOP, express.static(`${PATH.SITES}/decidables/${DIR.DEVELOP}`));
  sites.forEach((site) => {
    app.use(`${URL.DEVELOP}/${site}`, express.static(`${PATH.SITES}/${site}/${DIR.DEVELOP}`));
  });

  // Build
  app.use(URL.BUILD, express.static(`${PATH.SITES}/decidables/${DIR.BUILD}`));
  sites.forEach((site) => {
    app.use(`${URL.BUILD}/${site}`, express.static(`${PATH.SITES}/${site}/${DIR.BUILD}`));
  });

  // Deploy
  app.use(URL.DEPLOY, express.static(DIR.DEPLOY));

  app.listen(8000);
}
