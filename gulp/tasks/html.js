'use strict';

var gulp        = require('gulp')
,   $           = require('gulp-load-plugins')()
,   browserSync = require('browser-sync')
,   reload      = browserSync.reload;

var config         = require('../config')
,   handleErrors = require('../utils/handleErrors');



var jadeOpts = {
  pretty: false
};

gulp.task('html:all', function () {
  // return gulp.src(config.src.html + 'pages/**/*.jade')
  //   .pipe($.jade(jadeOpts))
  //   .on('error', handleErrors)
  //   .pipe($.size({ showFiles: true, title: 'HTML COMPRESSED' }))
  //   .pipe(gulp.dest(config.dist.html))
  //   .pipe(browserSync.reload({ stream:true }));
});

gulp.task('html', [ 'html:all' ]);
