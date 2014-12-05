var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');

gulp.task('default', function() {
    console.log('Tarea de prueba');
});

gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'app.js',
    ext: 'js html',
  }).on('restart', function () {
    setTimeout(function () {
      livereload.changed();
    }, 500);
  });
});


gulp.task('default',['develop']);
