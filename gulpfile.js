'use strict'

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

function lazyLoadTask(taskName, taskFilePath, options) {
    options = options || {}; 
    gulp.task(taskName, function (callback) {
        let task = require(taskFilePath).call(this, gulp, plugins, options)
        return task(callback);
    })   
}

lazyLoadTask('styles', './gulp-tasks/styles', {
    src: './src/styles/**/*.less',
    dest: './doc/styles'
});

gulp.task('build', gulp.series('styles'));