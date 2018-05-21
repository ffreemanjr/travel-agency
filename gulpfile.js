var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
<<<<<<< HEAD
    nested = require('postcss-nested');
=======
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    browserSync = require('browser-sync').create();
>>>>>>> 296713b1e815f7bcf0d9a1b8e26791cf545150c0

gulp.task('default', function() {
  console.log("Hooray - you created a Gulp task.");
});

gulp.task('html', function() {
  console.log("Imagine something useful being done to your HTML here.");
});

gulp.task('styles', function () {
 return gulp.src('./app/assets/styles/styles.css')
<<<<<<< HEAD
  .pipe(postcss([cssvars, nested, autoprefixer]))
=======
  .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
>>>>>>> 296713b1e815f7bcf0d9a1b8e26791cf545150c0
  .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function() {
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });

});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
  .pipe(browserSync.stream());
});