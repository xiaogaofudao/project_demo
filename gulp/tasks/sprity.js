'use strict';

var gulp = require('gulp');
var config = require('../config');
var gulpif = require('gulp-if');
var sprity = require('sprity');

// generate sprite-x.png and _sprites.scss
gulp.task('sprity', function(cb) {

	return sprity.src({
		split: true,
		margin: 2,
		processor: 'sass',
		prefix: 'sprite',
		orientation: 'binary-tree',
		style: '_sprites.scss',
		src: config.sprity.src,
		cssPath: config.sprity.cssPath
	})
	.on('error', function(err){
		if(err.name == 'LayoutError')
			cb();
	})
	.pipe(gulpif('*.png', gulp.dest(config.sprity.dest), gulp.dest(config.sprity.cssPath)));

});
