var gulp = require('gulp');
var sass = require('gulp-sass');
 
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

gulp.task('copy:images', function(){
	return gulp.src('./src/images/**/*')
	.pipe(gulp.dest('./dist/images'));
});

gulp.task('copy:html', function() {
    return gulp.src('./src/**/*.html')
	.pipe(gulp.dest('./dist'));
});

gulp.task('default', ['sass', 'copy:images', 'copy:fonts', 'copy:html']);