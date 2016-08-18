var gulp = require('gulp');
var sass = require('gulp-sass');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');
 
gulp.task('sass', function () {
  return gulp.src('./src/style/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./style'));
});

gulp.task('sass:watch', ['sass'], function () {
  return gulp.watch('./style/**/*.scss', ['sass']);
});

gulp.task('copy:fonts', function(){
	return gulp.src('./src/style/fonts/*')
	.pipe(gulp.dest('./style/fonts'));
});

gulp.task('views', function () {
  var templateData = {
      firstName: 'Kaanon'
  },
  options = {
      batch : ['./src/partials']
  }

  return gulp.src('src/views/index.hbs')
      .pipe(handlebars(templateData, options))
      .pipe(rename('index.html'))
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('./'));
});