'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var paths = require('../paths-config');

gulp.task('sass', function() {
    return gulp.src(paths.styles)
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'compressed',
            includePaths: require('bourbon').includePaths,
            includePaths: require('node-neat').includePaths
        }).on('error', sass.logError))
        .pipe(gulp.dest(paths.build.styles));
});
