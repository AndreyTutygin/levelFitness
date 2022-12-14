import fileInclude from "gulp-file-include";
import versionNumber from "gulp-version-number";
import bemValidator from 'gulp-html-bem-validator';
import htmlmin from 'gulp-htmlmin';
import typograf from 'gulp-typograf';
import {
  htmlValidator
} from 'gulp-w3c-html-validator';


export const html = () => {
  return app.gulp.src(app.path.src.html)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "HTML",
        message: "Error: <%= error.message %>"
      })))
    .pipe(fileInclude())
    .pipe(app.plugins.replace(/@img\//g, './img/'))
    .pipe(app.plugins.if(app.isBuild, versionNumber({
      'value': '%DT%',
      'append': {
        'key': '_v',
        'cover': 0,
        'to': [
          'css',
          'js',
        ]
      },
      'output': {
        'file': 'gulp/version.json'
      }
    })))
    .pipe(typograf({
      locale: ['ru', 'en-US']
    }))
    .pipe(bemValidator())
    .pipe(htmlValidator.analyzer())
    .pipe(htmlValidator.reporter())
    .pipe(app.plugins.if(app.isBuild, htmlmin({
      collapseWhitespace: true
    })))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream());
}
