var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');

gulp.task('default', function() {
    console.log('Tarea de prueba');
});

gulp.task('develop', function () {
  nodemon({ script: 'app.js', ext: 'html js', ignore: [] })
    .on('change', [])
    .on('restart', function () {
      console.log('restarted!');
    });
});

gulp.task('watch', function (){
    gulp.watch('public/styl/**.styl', function (){
        gulp.run('styl');
    });

    livereload.listen();
    gulp.watch('ngusers/views/').on('change', livereload.changed);
});


gulp.task('default',['develop', 'watch']);
