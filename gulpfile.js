var http = require('http');
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var lrserver = require('tiny-lr')();
var ecstatic = require('ecstatic');

var livereloadport = 35729,
  serverport = 8080;

var src = 'src',
  dist = 'dist';


gulp.task('serve', function () {
  //Set up your static fileserver, which serves files in the build dir ( should be ? )
  http.createServer(ecstatic({root: __dirname + '/' + src})).listen(serverport);

  //Set up your livereload server
  lrserver.listen(livereloadport);
});

// Requires gulp >=v3.5.0
gulp.task('watch', function () {
  gulp.watch('app/**/*.html', ['html']);
  gulp.watch('app/assets/**', ['assets']);
});

gulp.task('default', ['serve', 'watch']);