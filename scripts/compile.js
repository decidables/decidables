
// devDependencies
const gulp = require('gulp');
const gulpBro = require('gulp-bro');
const gulpDartSass = require('gulp-dart-sass');
const gulpEjs = require('gulp-ejs');
const gulpFrontMatter = require('gulp-front-matter');
const gulpNotify = require('gulp-notify');
const gulpRemark = require('gulp-remark');
const gulpRename = require('gulp-rename');
const gulpSourcemaps = require('gulp-sourcemaps');
const localeEnUs = require('locale-en-us');
const nodeSassPackageImporter = require('node-sass-package-importer');
const remarkHtml = require('remark-html');
const resolvePkg = require('resolve-pkg');
const styleApa = require('style-apa');

// Local Dependencies
const remarkCiteproc = require('./remark-citeproc');
const remarkCodeclass = require('./remark-codeclass');
const remarkDivs = require('./remark-divs');
const remarkSpans = require('./remark-spans');

// Tasks
function compileConfig() {
  return gulp.src('src/.htaccess')
    .pipe(gulp.dest('local'));
}
exports.compileConfig = compileConfig;

function compileFonts() {
  return gulp.src([
    resolvePkg('source-code-pro/WOFF/OTF/SourceCodePro-{Regular,It,Semibold,SemiboldIt,Bold,BoldIt}.otf.woff'),
    resolvePkg('source-sans-pro/WOFF/OTF/SourceSansPro-{Regular,It,Semibold,SemiboldIt,Bold,BoldIt}.otf.woff'),
    resolvePkg('source-serif-pro/WOFF/OTF/SourceSerifPro-{Regular,It,Semibold,SemiboldIt,Bold,BoldIt}.otf.woff'),
  ])
    .pipe(gulp.dest('local/fonts'));
}
exports.compileFonts = compileFonts;

function compileMarkdown() {
  remarkCiteproc({
    initialize: true,
    locale: localeEnUs,
    style: styleApa,
    bibliographyFile: './src/references.bib',
    referencesLink: 'references.html',
  });
  return gulp.src(['src/!(references).md', 'src/references.md']) // Insure that reference list includes references from all other files
    .pipe(gulpFrontMatter({property: 'data', remove: true}))
    .pipe(gulpRemark({detectConfig: false, quiet: true})
      .use(remarkDivs)
      .use(remarkSpans)
      .use(remarkCiteproc)
      .use(remarkCodeclass)
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
}
exports.compileMarkdown = compileMarkdown;

function compileScripts() {
  return gulp.src('src/*.js')
    .pipe(gulpBro({
      debug: true,
      transform: [
        ['babelify', {
          presets: [['@babel/preset-env', {useBuiltIns: 'entry', corejs: '3.1'}]],
          global: true,
          ignore: [/core-js|plotly\.js/],
        }],
      ],
    }))
    .pipe(gulpSourcemaps.init({loadMaps: true}))
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest('local'))
    .pipe(gulpNotify({message: 'compile:scripts done!', onLast: true}));
}
exports.compileScripts = compileScripts;

function compileStyles() {
  return gulp.src('src/*.scss')
    .pipe(gulpSourcemaps.init({loadMaps: true}))
    .pipe(gulpDartSass({importer: nodeSassPackageImporter()}).on('error', gulpDartSass.logError))
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest('local'))
    .pipe(gulpNotify({message: 'compile:styles done!', onLast: true}));
}
exports.compileStyles = compileStyles;
