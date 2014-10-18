
var gulp = require('gulp');
var rename = require('gulp-rename');
var zip = require('gulp-zip');
var chrome = require('./chrome/src/manifest');

gulp.task('css', function() {
  gulp.src('./src/twipster.css')
    .pipe(gulp.dest('./chrome/src'))
    .pipe(gulp.dest('./safari/Twipster.safariextension'));
});

gulp.task('chrome', function() {
  gulp.src('./chrome/src/**/*')
    .pipe(zip('twipster-chrome-' + chrome.version + '.zip'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['css', 'chrome']);

gulp.task('watch', ['default'], function() {
  gulp.watch(['./src/twipster.css'], ['default']);
});

