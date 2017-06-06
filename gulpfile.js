var gulp = require('gulp');

var sass = require('gulp-sass')
gulp.task('compileSass',function(){
	console.log(123);
	gulp.src('src/sass/');
	.pipe(gulp.dest('src/css'));
});