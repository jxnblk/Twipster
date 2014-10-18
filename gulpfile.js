
var gulp = require('gulp');
var rename = require('gulp-rename');

gulp.task('default', function() {
  gulp.src('./src/twipster.css')
    .pipe(gulp.dest('./chrome/src'))
    .pipe(gulp.dest('./safari/src'));
});

gulp.task('watch', ['default'], function() {
  gulp.watch(['./src/twipster.css'], ['default']);
});

