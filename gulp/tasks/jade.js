var gulp = require('gulp');
var jade = require('gulp-jade');
var paths = require('../paths-config');

gulp.task('jade', function() {
 return gulp.src(paths.jade.tpls)
    .pipe(jade())
    .pipe(gulp.dest(paths.build.tpls))
});

gulp.task('jade:index', function() {
 return gulp.src(paths.jade.index)
    .pipe(jade())
    .pipe(gulp.dest(paths.build.dir))
})
