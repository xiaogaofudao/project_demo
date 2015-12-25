'use strict';

var config        = require('../config');
var gulp          = require('gulp');

gulp.task('watch', function() {

  // Scripts are automatically watched and rebundled by Watchify inside Browserify task
  gulp.watch(config.scripts.src, ['js']);
  gulp.watch(config.styles.src,  ['css']);
  gulp.watch(config.images.src,  ['img']);
  gulp.watch(config.fonts.src,   ['fonts']);
  gulp.watch(config.sprity.src, ['sprity']);

});
