
// devDependencies
import gulp from 'gulp';
import gulpBro from 'gulp-bro';
import gulpDartSass from 'gulp-dart-sass';
import gulpEjs from 'gulp-ejs';
import gulpFrontMatter from 'gulp-front-matter';
import gulpNotify from 'gulp-notify';
import {remark as gulpRemark} from 'gulp-remark';
import gulpRename from 'gulp-rename';
import gulpSourcemaps from 'gulp-sourcemaps';
import localeEnUs from 'locale-en-us';
import nodeSassPackageImporter from 'node-sass-package-importer';
import remarkDirective from 'remark-directive';
import remarkHtml from 'remark-html';
import resolvePkg from 'resolve-pkg';
import styleApa from 'style-apa';

// Local Dependencies
import remarkCiteproc from './remark-citeproc.js';
import remarkTerminology from './remark-terminology.js';

// Tasks
export function compileConfig() {
  return gulp.src('src/.htaccess')
    .pipe(gulp.dest('local'));
}

export function compileFonts() {
  return gulp.src([
    resolvePkg('source-code-pro/WOFF/OTF/SourceCodePro-{Regular,It,Semibold,SemiboldIt,Bold,BoldIt}.otf.woff'),
    resolvePkg('source-sans-pro/WOFF/OTF/SourceSansPro-{Regular,It,Semibold,SemiboldIt,Bold,BoldIt}.otf.woff'),
    resolvePkg('source-serif-pro/WOFF/OTF/SourceSerifPro-{Regular,It,Semibold,SemiboldIt,Bold,BoldIt}.otf.woff'),
  ])
    .pipe(gulp.dest('local/fonts'));
}

export function compileMarkdown() {
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
      .use(remarkDirective)
      .use(remarkCiteproc)
      .use(remarkTerminology)
      .use(remarkHtml, {sanitize: false}))
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

export function compileScripts() {
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

export function compileStyles() {
  return gulp.src('src/*.scss')
    .pipe(gulpSourcemaps.init({loadMaps: true}))
    .pipe(gulpDartSass({importer: nodeSassPackageImporter()}).on('error', gulpDartSass.logError))
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest('local'))
    .pipe(gulpNotify({message: 'compile:styles done!', onLast: true}));
}
