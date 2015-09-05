var _ = require('underscore'),
    gulp = require('gulp'),
    pkg = require('./package.json'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    less = require('gulp-less'),
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

var vendorJsFiles = [
  "bower_components/angular/angular.js",
  "bower_components/angular-ui-router/release/angular-ui-router.js",
  "bower_components/angular-ui-event/dist/event.js",
  "bower_components/angular-ui-uitls/ui-utils.js",
  "bower_components/angular-ui-map/ui-map.js"
];

var notifyConf = {
  title: "Gulp",
  subtitle: "Finished",
  sound: "Tink" // refer to OSX Sound Preferences
};

var buildFolder = './dist';

gulp.task('html', function() {
  var notifyConfHtml = _.extend(notifyConf, {message: 'HTML task complete'});

  return gulp.src('app/pages/**/*.html')
      .pipe(plumber({errorHandler: onError}))
      .pipe(gulp.dest(buildFolder))
      .pipe(notify(notifyConfHtml));
});

gulp.task('js', function () {
  var notifyConfJs = _.extend(notifyConf, {message: 'JS task complete'});

  return gulp.src(vendorJsFiles.concat(['app/js/**/*.js']))
      .pipe(plumber({errorHandler: onError}))
      .pipe(ngAnnotate())
      .pipe(concat('app.js'))
      .pipe(wrap('(function(){ \'use strict\'; <%= contents %> })();'))
      .pipe(gulp.dest(buildFolder + '/js'))
      .pipe(notify(notifyConfJs));
});

gulp.task('less', function() {
  var notifyConfLess = _.extend(notifyConf, {message: 'Less task complete'});

  return gulp.src('app/css/**/*.less')
      .pipe(plumber({errorHandler: onError}))
      .pipe(concat('app.css'))
      .pipe(less())
      .pipe(gulp.dest(buildFolder + '/css'))
      .pipe(notify(notifyConfLess));
});

gulp.task('clean', function (cb) {
  del([buildFolder + '/css',
            buildFolder + '/js',
            buildFolder + '/index.html'],
      cb)
});

gulp.task('watch', function() {
  gulp.watch('app/js/**/*.js', ['js']);
  gulp.watch('app/css/**/*.less', ['less']);
  gulp.watch('app/pages/**/*.html', ['html']);
});

gulp.task('default', ['clean'], function () {
  gulp.start(
      'html',
      'less',
      'js');
});

gulp.task('webserver', function () {
  gulp.src('dist')
      .pipe(webserver({
        livereload: true,
        host: 'appistack.dev',
        fallback: 'index.html',
        port: 8000,
        open: true
      }));
});
