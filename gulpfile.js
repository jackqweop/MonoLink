var gulp = require('gulp');

var sass = require('gulp-sass');
gulp.task('compileSass',function(){
	
	gulp.src('./src/sass/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./src/css'))
});
// // 自动编译
// // watch
gulp.task('jtSass',function(){
	// 监听文件修改，执行相应任务
	gulp.watch('./src/sass/*.scss',['compileSass']);
});