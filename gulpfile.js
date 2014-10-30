var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default', function() {
    console.log('Tarea de prueba');
});

gulp.task('develop', function () {
  nodemon({ script: 'app.js', ext: 'html js', ignore: [] })
    .on('change', [])
    .on('restart', function () {
      console.log('restarted!')
    });
});

gulp.task('default',['develop']);