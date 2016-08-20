var package = require('./package.json');
var gulp = require('gulp');
var sass = require('gulp-sass');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');
 
gulp.task('sass', function () {
  return gulp.src('./src/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/styles'));
});

gulp.task('sass:watch', ['sass'], function () {
  return gulp.watch('./styles/**/*.scss', ['sass']);
});

gulp.task('copy:fonts', function(){
	return gulp.src('./src/styles/fonts/*')
	.pipe(gulp.dest('./dist/styles/fonts'));
});

gulp.task('copy:scripts', function(){
	return gulp.src('./src/scripts/**/*.js')
	.pipe(gulp.dest('./dist/scripts'));
});

gulp.task('views', function () {
  var templateData = {
      version: package.version
  },
  options = {
      batch : ['./src/partials']
  }

  return gulp.src('./src/views/index.hbs')
      .pipe(handlebars(templateData, options))
      .pipe(rename('index.html'))
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['sass', 'copy:scripts', 'copy:fonts', 'views']);