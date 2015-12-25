'use strict';

var gulp        = require('gulp')
,   $           = require('gulp-load-plugins')()
,   browserSync = require('browser-sync');

var config         = require('../config')
,   handleErrors = require('../utils/handleErrors')
,   del = require('del');

var sassOpts = {
  //outputStyle: 'compressed'
};

gulp.task('css:clean', function () {
  del(config.styles.dest);
});

gulp.task('css:scss', function () {
  return gulp.src([ config.styles.src ])
    .pipe($.sass(sassOpts))
    .on('error', handleErrors)
    .pipe($.autoprefixer('last 1 version', '> 1%', 'ie 8', 'ie 7'))
    //.pipe($.csso())
    //.pipe($.size({ showFiles: true, title: 'css compressed:' }))
    .pipe(gulp.dest(config.styles.dest))
    .pipe(browserSync.reload({ stream:true }));
});

gulp.task('css', [ 'css:scss' ]);
