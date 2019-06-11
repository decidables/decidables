/* eslint-disable no-undef */ // devDeps loaded into global scope!
/* eslint-disable new-cap */ // devDeps start with lowercase letter!
/* eslint-disable no-console */ // writing to console is okay for gulpfile!

/* Load required modules */
// Node native modules
const http = require('http');

/* Local! */
const remarkCiteproc = require('./remark-citeproc');

// Load all devDependencies into global scope
// Uses camelCase for names, e.g. gulp-ssh -> gulpSsh
// 'pattern' includes list of packages to avoid
Object.assign(global, require('gulp-load-plugins')({
  scope: 'devDependencies',
  pattern: ['*', '!(remark-cli)'],
  replaceString: /^/,
}));

/* Debug */
// .pipe(gulpDebug())


/**
 * Pipeline
 */

/* Compile */
gulp.task('compile:clean', () => {
  return del(['local/**/*', 'local/**/.*']);
});

gulp.task('compile:config', () => {
  return gulp.src('src/.htaccess')
    .pipe(gulp.dest('local'));
});

gulp.task('compile:fonts', () => {
  return gulp.src([
    'node_modules/source-serif-pro/WOFF/OTF/SourceSerifPro-{Regular,It,Semibold,SemiboldIt,Bold,BoldIt}.otf.woff',
    'node_modules/source-sans-pro/WOFF/OTF/SourceSansPro-{Regular,It,Semibold,SemiboldIt,Bold,BoldIt}.otf.woff'])
    .pipe(gulp.dest('local/fonts'));
});

gulp.task('compile:markdown', () => {
  remarkCiteproc({
    initialize: true,
    locale: localeEnUs,
    style: styleApa,
    bibliographyFile: './src/references.bib',
    referencesLink: 'references.html',
  });
  return gulp.src('src/*.md')
    .pipe(gulpFrontMatter({property: 'data', remove: true}))
    .pipe(gulpRemark({detectConfig: false, quiet: true})
      .use(remarkCiteproc)
      .use(remarkHtml))
    .on('data', (file) => {
      return gulp.src(`src/${file.data.layout}.ejs`)
        .pipe(gulpFrontMatter({property: 'data'}))
        .pipe(gulpEjs(Object.assign(file.data, {
          file: file.stem,
          contents: file.contents.toString(),
        })))
        .pipe(gulpRename({
          basename: file.stem,
          extname: '.html',
        }))
        .pipe(gulp.dest('local'));
    })
    .pipe(gulpNotify({message: 'compile:markdown done!', onLast: true}));
});

gulp.task('compile:scripts', () => {
  return gulp.src('src/*.js')
    .pipe(gulpBro({
      debug: true,
      transform: [
        ['babelify', {
          presets: ['@babel/preset-env'],
          global: true,
          ignore: ['**/custom-elements-es5-adapter.js'],
        }],
      ],
    }))
    .pipe(gulpSourcemaps.init({loadMaps: true}))
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest('local'))
    .pipe(gulpNotify({message: 'compile:scripts done!', onLast: true}));
});

gulp.task('compile:styles', () => {
  return gulp.src('src/*.scss')
    .pipe(gulpSourcemaps.init({loadMaps: true}))
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest('local'))
    .pipe(gulpNotify({message: 'compile:styles done!', onLast: true}));
});

gulp.task('compile:all', gulp.parallel(
  'compile:config',
  'compile:fonts',
  'compile:markdown',
  'compile:scripts',
  'compile:styles',
));

gulp.task('compile', gulp.series(
  'compile:clean',
  'compile:all',
));


/* Watch */
gulp.task('watch:markdown', () => {
  gulp.watch('src/*.{md,ejs}', gulp.series('compile:markdown'));
});

gulp.task('watch:scripts', () => {
  gulp.watch(['src/*.js', 'src/lib/**/*.js'], gulp.series('compile:scripts'));
});

gulp.task('watch:styles', () => {
  gulp.watch('src/*.scss', gulp.series('compile:styles'));
});

gulp.task('watch:all', gulp.parallel(
  'watch:markdown',
  'watch:scripts',
  'watch:styles',
));

gulp.task('watch', gulp.series(
  'watch:all',
));


/* Lint */
gulp.task('lint:markdown', () => {
  return gulp.src('src/*.md')
    .pipe(gulpRemark());
});

gulp.task('lint:scripts', () => {
  return gulp.src(['src/*.js', 'src/lib/**/*.js'])
    .pipe(gulpEslint())
    .pipe(gulpEslint.format('pretty'))
    .pipe(gulpEslint.failAfterError());
});

gulp.task('lint:styles', () => {
  return gulp.src(['src/*.scss', 'src/lib/**/*.js'])
    .pipe(gulpStylelint({
      reporters: [{
        formatter: stylelintFormatterPretty,
        console: true,
      }],
    }));
});

gulp.task('lint:all', gulp.parallel(
  'lint:markdown',
  'lint:scripts',
  'lint:styles',
));

gulp.task('lint', gulp.series(
  'lint:all',
));


/* Build */
gulp.task('build:clean', () => {
  return del(['dist/**/*', 'dist/**/.*']);
});

gulp.task('build:config', () => {
  return gulp.src('local/.htaccess')
    .pipe(gulp.dest('dist'));
});

gulp.task('build:fonts', () => {
  return gulp.src(['local/fonts/*.woff'])
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('build:markup', () => {
  return gulp.src(['local/*.html'])
    .pipe(gulpHtmlmin({
      collapseWhitespace: true,
      removeComments: true,
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('build:scripts', () => {
  return gulp.src(['local/*.js'])
    .pipe(gulpSourcemaps.init({loadMaps: true}))
    .pipe(gulpUglify())
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('build:styles', () => {
  return gulp.src('local/*.css')
    .pipe(gulpSourcemaps.init({loadMaps: true}))
    .pipe(gulpPostcss([
      cssnano(),
    ]))
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('build:all', gulp.parallel(
  'build:config',
  'build:fonts',
  'build:markup',
  'build:scripts',
  'build:styles',
));

gulp.task('build', gulp.series(
  'build:clean',
  'build:all',
));


/* Deploy */
const sftpConfig = {
  host: 'web.uvic.ca',
  port: 22,
  username: 'akrawitz',
  password: null,
};

gulp.task('deploy:password', () => {
  return inquirer.prompt([{
    type: 'password',
    message: 'Enter password:',
    name: 'password',
    mask: '*',
  }])
    .then((responses) => {
      sftpConfig.password = responses.password;
    });
});

gulp.task('deploy:clean', () => {
  const sftp = new ssh2SftpClient();
  return sftp.connect(sftpConfig)
    .then(() => {
      return sftp.rmdir('/www/sdt', true);
    })
    .then((data) => {
      console.log(data);
      return sftp.end();
    })
    .catch((err) => {
      console.log(err);
      return sftp.end();
    });
});

gulp.task('deploy:dist', () => {
  const sftp = new gulpSsh({
    ignoreErrors: false,
    sshConfig: sftpConfig,
  });
  return gulp.src(['dist/**/*', 'dist/**/.*'])
    .pipe(sftp.dest('/www/sdt/'));
});

gulp.task('deploy:all', gulp.parallel(
  'deploy:dist',
));

gulp.task('deploy', gulp.series(
  'deploy:password',
  'deploy:clean',
  'deploy:all',
));


/**
 * Utilities
 */

/* Serve */
gulp.task('serve', () => {
  http.createServer((req, res) => {
    (serveStatic('.', {index: ['index.html']}))(req, res, finalhandler(req, res));
  }).listen(8000);
});
