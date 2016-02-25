'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('dev', function() {
    runSequence(['clean', 'clean:dist'],
                'sass',
                ['jade', 'jade:index'],
               'browser-sync',
                'watch');
});
