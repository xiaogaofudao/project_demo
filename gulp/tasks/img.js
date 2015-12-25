'use strict';

var gulp        = require('gulp')
,   $           = require('gulp-load-plugins')()
,   browserSync = require('browser-sync')
,   reload      = browserSync.reload;

var config         = require('../config')
,   handleErrors = require('../utils/handleErrors');


gulp.task('img:compress', function () {
  return gulp.src(config.images.src)
    .pipe($.changed(config.images.dest))
    .pipe($.imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: []
    }))
    .on('error', handleErrors)
    .pipe($.size({ showFiles: true, title: 'images compressed:' }))
    .pipe(gulp.dest(config.images.dest))
    .pipe(reload({ stream: true, once: true }));
});

// gulp.task('img:iconfont', function() {
//   var fontName = 'icons';
//
//   gulp.src([config.src.img + 'icons/*.svg'])
//     .pipe($.changed(config.dist.fonts))
//     .pipe($.iconfont({
//       fontName: fontName,
//       normalize: true,
//       appendCodepoints: true
//     }))
//     .on('error', handleErrors)
//     .on('codepoints', function(codepoints, options) {
//       gulp.src(config.src.css + 'templates/_font-icons.scss')
//         .pipe($.consolidate('lodash', {
//           glyphs: codepoints,
//           fontName: fontName,
//           fontPath: config.dist.fonts
//           }))
//         .on('error', handleErrors)
//         .pipe(gulp.dest(config.src.css + 'modules/'));
//     })
//     .pipe(gulp.dest(config.dist.fonts));
//   });

gulp.task('img', [ 'img:compress' ]);
