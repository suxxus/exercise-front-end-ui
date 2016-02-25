'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    runSequence = require('run-sequence'),
    bs = require('browser-sync').create(),
    paths = require('../paths-config');



// Watch develop with browser-sync
gulp.task('watch', function() {

    var reload = function() {
        bs.reload();
    };

    gulp.watch(paths.watch.build, function() {
        runSequence(
            'clean',
            ['sass', 'jade', 'jade:index'],
            reload
        )
    });
});

gulp.task('browser-sync', function() {
    bs.init({
        server: {
            name: 'dev',
            baseDir: paths.browserSync.baseDir
        },

        port: 3000,
        ui: {
            port: 3011
        },
        reloadDelay: 1000
    });
});
