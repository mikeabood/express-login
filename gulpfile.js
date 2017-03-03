var gulp = require('gulp'); 
var less = require('gulp-less'); 
var watch = require('gulp-watch')
// watch task listens for saves on a specific 
// file then runs, the task you want. 

gulp.task('watch', function(){

	// first argument is an array of files
	// second argument is an array of tasks to run

	// * is telling gulp to watch every file in the 
	// folder with an extension of .less
	gulp.watch(['./styles/*.less'], ['compile-less'])
})


//how to write a basic gulp task
gulp.task('whatever', function(){
	console.log('the we task is running biotch')
})

gulp.task('compile-less', function(){

	gulp.src('./server/public/styles/style.less')
	//compressing
	.pipe(less())
	//sending its
	.pipe(gulp.dest('./server/public/styles'))
})


// default task - not making up any of the names
// default name
gulp.task('default', ['compile-less', 'whatever', 'watch'])