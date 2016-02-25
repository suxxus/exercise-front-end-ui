'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    rimraf = require('gulp-rimraf'),
    paths = require('../paths-config');

/*
|-------------------------------------------
| TASKS
|-------------------------------------------
*/

gulp.task('copy:styles', function() {
    return gulp.src(paths.build.styles + '/*.css')
        .pipe(gulp.dest(paths.dist.styles));
});

gulp.task('copy:html', function() {
    return gulp.src(paths.build.dir + '/*.html')
        .pipe(gulp.dest(paths.dist.dir));
});

gulp.task('dist', function() {
    runSequence(
        ['clean:dist', 'clean'],
        'jade',
        'jade:index',
        'sass',
        'copy:html',
        'copy:styles'
    );
});
