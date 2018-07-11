const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const jshint = require('gulp-jshint');

gulp.task('nodemon', function () {
  var stream = nodemon({ script: 'index.js'
          , ext: 'html js'
          , ignore: ['./client']
          , tasks: ['lint'] })

  stream
      .on('restart', function () {
        console.log('restarted!')
      })
      .on('crash', function() {
        console.error('Application has crashed!\n')
         stream.emit('restart', 10)  // restart the server in 10 seconds
      })
})

gulp.task('lint', function () {
  gulp.src('./**/*.js')
    .pipe(jshint())
})
