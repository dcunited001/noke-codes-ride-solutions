var _ = require('underscore'),
    gulp = require('gulp'),
    pkg = require('./package.json'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    webserver = require('gulp-webserver'),
    gutil = require('gulp-util'),
    changed = require('gulp-changed'),
    ngAnnotate = require('gulp-ng-annotate'),
    plumber = require('gulp-plumber'),
    wrap = require('gulp-wrap'),
    yargs = require('yargs'),
    del = require('del');

// ==[ Error Handling ]====================================
var fatalLevel = yargs.argv.fatal,
    ERROR_LEVELS = ['error', 'warning'];

function isFatal(level) {
  return ERROR_LEVELS.indexOf(level) <= ERROR_LEVELS.indexOf(fatalLevel || 'error');
}

function handleError(level, error) {
  notify.onError({
    title: "Gulp",
    subtitle: level + "!",
    message: "Error: <%= error.message %>",
    sound: "Sosumi"
  })(error);

  gutil.log(error.message);
  gutil.log(error.stack);

  if (isFatal(level)) {
    process.exit(1);
  }

  this.emit('end');
}

function onError(error) {
  handleError.call(this, 'error', error);
}
function onWarning(error) {
  handleError.call(this, 'warning', error);
}

var notifyConf = {
  title: "Gulp",
  subtitle: "Finished",
  sound: "Tink" // refer to OSX Sound Preferences
};

var buildFolder = './dist';

gulp.task('html', function() {
  return gulp.src('app/pages/**/*.html')
      .pipe(plumber({errorHandler: onError}))
      .pipe(gulp.dest(buildFolder))
      .pipe(notify(_.extend(notifyConf, {message: 'HTML task complete'})));
});

gulp.task('js', function () {
  return gulp.src('app/js/**/*.js')
      .pipe(plumber({errorHandler: onError}))
      .pipe(concat('app.js'))
      .pipe(gulp.dest(buildFolder))
      .pipe(notify(_.extend(notifyConf, {message: 'JS task complete'})));
});

gulp.task('clean', function (cb) {
  del([buildFolder + '/css',
            buildFolder + '/js',
            buildFolder + '/index.html'],
      cb)
});

gulp.task('watch', function() {
  gulp.watch('app/js/**/*.js', ['js']);
  gulp.watch('app/pages/**/*.html', ['html']);
});

gulp.task('default', ['clean'], function () {
  gulp.start(
      'html',
//      'less',
      'js');
});
