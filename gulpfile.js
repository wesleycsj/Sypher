var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');

gulp.task('default', function(){
	gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(concat('sypher.min.css'))
    .pipe(gulp.dest('./dist'));
	gulp.src(['./ext/*.js','./js/*.js'])
		.pipe(uglify('sypher.min.js'))
		.pipe(gulp.dest('./dist'));
});