'use strict';

var gulp        = require('gulp')
,   fecs        = require('fecs-gulp')
,   $           = require('gulp-load-plugins')()
,   browserSync = require('browser-sync')
,   reload      = browserSync.reload
,   browserify = require('browserify')
,   source     = require('vinyl-source-stream')
,   del        = require('del');

var config         = require('../config')
,   handleErrors = require('../utils/handleErrors');

// Options
var browserifyOpts = {
  debug: true,
  standalone: 'shared'
};

gulp.task('js:browserify', function () {
  // return browserify( './' + config.src.js + 'index.js', browserifyOpts ).bundle()
  //   .on('error', handleErrors)
  //   .pipe(source( './' + config.src.js + 'index.js' ))
  //   .pipe($.changed(config.dist.js))
  //   .pipe($.rename('bundle.js'))
  //   .pipe(gulp.dest(config.dist.js))
  //   .pipe($.rename('bundle.min.js'))
  //   .pipe($.streamify($.uglify()))
  //   .on('error', handleErrors)
  //   .pipe(gulp.dest(config.dist.js));
});

gulp.task('js:clean', function () {
  del(config.scripts.dest);
});

gulp.task('js:fecs', function () {
    return gulp.src(config.scripts.src)
        .pipe(fecs.check(
            // 可以没有options参数，默认效果和命令行的默认效果一致
            // {
                // 支持的cli属性
                // maxerr: 1,
                // maxsize: 1,

                // 不支持的属性
                // ignore
                // type
            // }
        ))
        .pipe(
            // 这么写reporter的配置都是默认的
            // fecs.reporter()

            // fecs.reporter('')
            // fecs.reporter('default');

            // fecs.reporter('baidu')

            // fecs.reporter(require('fecs/lib/reporter/baidu'))

            // fecs.reporter('default', {
            //     color: true,
            //     rule: true,
            //     sort: true
            // })

            fecs.reporter('baidu', {
                color: true,
                rule: true,
                sort: true
            })

        );
});

gulp.task('js:format', function () {
  return gulp.src(config.scripts.src)
      .pipe(fecs.format())
      .pipe(gulp.dest(config.scripts.src+'/fecsFormated'));
});

gulp.task('js', ['js:browserify', 'js:fecs']);
