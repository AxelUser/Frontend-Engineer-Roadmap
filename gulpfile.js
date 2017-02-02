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
    src: './src/less/**/*.less',
    dest: './doc/styles'
});

lazyLoadTask('scripts', './gulp-tasks/scripts',{
    src: './src/js/**/*.js',
    dest: './doc/js'
});

lazyLoadTask('views', './gulp-tasks/views',{
    src: './src/views/**/*.html',
    dest: './doc'
});

gulp.task('build', gulp.parallel('styles', 'scripts', 'views'));