
export const DIR = {
  // Package directories
  SOURCE: 'src',
  DEVELOP: 'local',
  BUILD: 'dist',
  LIBRARY: 'lib',
  TEST: 'test',
  FONTS: 'fonts',
  // Project directories
  SCRIPTS: 'scripts',
  LIBRARIES: 'libraries',
  SITES: 'sites',
  DEPLOY: 'decidables.github.io',
};

export const PATH = {
  // Relative to package
  SOURCE: `./${DIR.SOURCE}`,
  DEVELOP: `./${DIR.DEVELOP}`,
  BUILD: `./${DIR.BUILD}`,
  LIBRARY: `./${DIR.LIBRARY}`,
  TEST: `./${DIR.TEST}`,
  DEPLOY: `../../${DIR.DEPLOY}`,
  LIBRARIES: `../../${DIR.LIBRARIES}`,
  // Relative to root
  SCRIPTS: `./${DIR.SCRIPTS}`,
  SITES: `./${DIR.SITES}`,
};

export const URL = {
  DEVELOP: `/${DIR.DEVELOP}`,
  BUILD: `/${DIR.BUILD}`,
  DEPLOY: '/deploy',
};
